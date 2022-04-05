import { createStore, combineReducers } from "redux";
import { REST_SRV_BASE_URL } from "../config/config";
import { DummyMeme } from "../interfaces/common";

// Pour passer en TS, il faudrait ajouter des interfaces
const initialRessourcesState = {
  images: [],
  memes: [],
};

// En déclarant la liste des actions en const, ça permet ensuite de ne pas se tromper dans la saisie de la valeur dans le ressourceReducer
//
// Le coup du Object =>   freeze => on peut plus rien changer     .seal => on ne peut changer que les valeurs
export const RessourcesActions = Object.freeze({
  ADD_INIT_IMAGES: "ADD_INIT_IMAGES",
  ADD_INIT_MEMES: "ADD_INIT_MEMES",
  ADD_MEME: "ADD_MEME",
});

// Création d'un magasin pour gérer les ressources images et mêmes, et données initales
function ressourceReducer(state = initialRessourcesState, action) {
  console.log(action);
  switch (action.type) {
    case RessourcesActions.ADD_INIT_IMAGES:
      return { ...state, images: action.values };

    case RessourcesActions.ADD_INIT_MEMES:
      return { ...state, memes: action.values };

    case RessourcesActions.ADD_MEME:
      return { ...state, memes: [...state.memes, action.value] };

    case "ADD_INIT_ALL":
      return { ...state, memes: action.memes, images: action.images };

    case "INIT_LOADING":
      const prm = fetch(`${REST_SRV_BASE_URL}/memes`).then((f) => f.json());
      const pri = fetch(`${REST_SRV_BASE_URL}/images`).then((f) => f.json());

      Promise.all([prm, pri]).then((aResp) => {
        store.dispatch({
          type: "ADD_INIT_ALL",
          memes: aResp[0],
          images: aResp[1],
        });
      });

      return state;
    default:
      return state;
  }
}

// Création d'un magasin pour une possible modale
function modalReducer(state = { isShown: false, content: "" }, action) {
  console.log(action);
  switch (action.type) {
    case "SHOW_MODAL":
      return { isShown: true, content: action.value };

    case "HIDE_MODAL":
      return { isShown: false, content: "" };

    default:
      return state;
  }
}

// Création d'un magasin pour mettre à jour le Meme Current
export const CURRENT_ACTIONS = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  RESET_CURRENT: "RESET_CURRENT",
});

function currentReducer(state = DummyMeme, action) {
  console.log(action);
  switch (action.type) {
    case CURRENT_ACTIONS.RESET_CURRENT:
      return { ...DummyMeme };

    case CURRENT_ACTIONS.UPDATE_CURRENT:
      return { ...state, ...action.value };

    default:
      return state;
  }
}

// Création d'une galerie marchande (une liste de magasins );
const combinedReducers = combineReducers({
  modal: modalReducer,
  ressources: ressourceReducer,
  current: currentReducer,
});

// Et on l'exporte
export const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// dès que le store change, ça déclenche
store.subscribe(() => {
  console.log(store.getState());
});

// On lance l'initialisation première...
// Qui va venir charger les listes d'images et de memes présents dans db.js
store.dispatch({
  type: "INIT_LOADING",
});

//store.dispatch( {type:RessourcesActions.ADD_INIT_IMAGES, values:[{id:5}, {id:6}]});
//store.dispatch( {type:RessourcesActions.ADD_INIT_MEMES, values:[{id:15}, {id:16}]});
//store.dispatch( {type:RessourcesActions.ADD_MEME, value:{ id:18} } );
