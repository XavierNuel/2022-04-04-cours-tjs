import { createStore } from "redux";
import { REST_SRV_BASE_URL } from "../config/config";

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
      return { ...state, memes: action.values[0], images: action.values[1] };

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

export const store = createStore(ressourceReducer);

// dès que le store change, ça déclenche
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "ADD_INIT_ALL",
});


//store.dispatch( {type:RessourcesActions.ADD_INIT_IMAGES, values:[{id:5}, {id:6}]});
//store.dispatch( {type:RessourcesActions.ADD_INIT_MEMES, values:[{id:15}, {id:16}]});
//store.dispatch( {type:RessourcesActions.ADD_MEME, value:{ id:18} } );
