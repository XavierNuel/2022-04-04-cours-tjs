//
// Partie très importe qui gèe nos données et les échanges avec l'application pour tous nos composants
// Les données sont associées à l'App directement, et les composants vont y chercher leurs billes quand elles en ont besoin
//
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
      // On cherche si on l'avait pas déjà celui là (basé sur l'ID)
      const pos = state.memes.findIndex((m) => m.id === action.value.id);
      // Si on a un nouveau meme ( findIndex retourne -1 );
      if (pos < 0) {
        return { ...state, memes: [...state.memes, action.value] };
      } else {
        // on remet à sa place avec les nouvelles valeurs
        return {
          ...state,
          memes: [
            ...state.memes.slice(0, pos - 1),
            action.value,
            ...state.memes.slice(pos),
          ],
        };
      }

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
function modalReducer(
  state = {
    isShown: false,
    content: "Contenu par défaut de la modal",
    title: "Bienvenue",
    callBack: () => console.log("Hello closed"),
    cancelCallBack: undefined,
  },
  action
) {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        isShown: true,
        title: action.title,
        content: action.value,
        closeCallback: action.closeCallback,
        cancelCallback: action.cancelCallback,
      };
    case "HIDE_MODAL":
      if (state.closeCallback && typeof state.closeCallback === "function") {
        state.closeCallback();
      }
      return {
        isShown: false,
        content: "",
        cancelCallback: undefined,
        closeCallback: () => {},
      };
    case "CANCEL_MODAL":
      if (state.cancelCallback && typeof state.cancelCallback === "function") {
        state.cancelCallback();
      }
      return {
        isShown: false,
        content: "",
        cancelCallback: undefined,
        closeCallback: () => {},
      };
    default:
      return state;
  }
}

// Création d'un magasin pour mettre à jour le Meme Current
export const CURRENT_ACTIONS = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  RESET_CURRENT: "RESET_CURRENT",
  SAVE_CURRENT: "SAVE_CURRENT",
});

function currentReducer(state = DummyMeme, action) {
  console.log(action);
  switch (action.type) {
    // Si on sauve ou si on reset
    case RessourcesActions.ADD_MEME:
    case CURRENT_ACTIONS.RESET_CURRENT:
      console.log("reset");
      return { ...DummyMeme };

    // Si on met à jour
    case CURRENT_ACTIONS.UPDATE_CURRENT:
      return { ...state, ...action.value };

    // Si on ajoute un meme
    case CURRENT_ACTIONS.SAVE_CURRENT:
      console.log("save");
      var args = {
        method: `${undefined !== state.id ? "PUT" : "POST"}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      };
      fetch(
        `${REST_SRV_BASE_URL}/memes${
          undefined !== state.id ? "/" + state.id : ""
        }`,
        args
      )
        .then((f) => f.json())
        .then((o) => {
          // On déclenche l'ajout du meme, ce qui déclenchera aussi le reset
          store.dispatch({ type: RessourcesActions.ADD_MEME, value: o });
        });
      return { ...state, ...action.value };

    default:
      return state;
  }
}

// Création d'une galerie marchande (une liste de magasins combinés);
// Prendre cette habitude, meme si le magasin est tout seul, ça permet d'ajouter des magasins sans tout revoir...
const combinedReducers = combineReducers({
  modal: modalReducer,
  ressources: ressourceReducer,
  current: currentReducer,
});

// Et on l'exporte
export const store = createStore(
  combinedReducers,
  // La ligne suivante permet de connecter Redux à un débuguer dans Chrome (extension React DevTools)
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
