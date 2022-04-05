import React, { Component } from "react";
import style from "./App.module.css";

import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import {
  DummyMeme as initialMemeState,
  I_Image,
  I_Meme,
} from "./interfaces/common";

import { store } from "./store/store";

// On défini les types des variables de notre App
interface I_AppProps {
  AppName?: string;
}

// On défini les types des états de notre App
interface I_AppState {
  currentMeme: I_Meme;
  images: Array<I_Image>;
  memes: Array<I_Meme>;
}

class App extends Component<I_AppProps, I_AppState> {
  // Constructeur de notre App avec états initiaux
  constructor(props: I_AppProps) {
    super(props);
    this.state = {
      currentMeme: initialMemeState,
      memes: [],
      images: [],
    };
  }

  // Fonction d'affichage du composant

  render(): React.ReactNode {
    return (
      <div className={style.App}>
        {JSON.stringify(this.state)}
        <FlexWLayout>
          <div>
            <MemeViewer
              meme={this.state.currentMeme}
              image={this.state.images.find(
                (e) => e.id === this.state.currentMeme.imageId
              )}
            />
          </div>
          <MemeForm
            currentMeme={this.state.currentMeme}
            images={this.state.images}
            onInputValueChange={(changedValuesObject: any) => {
              this.setState({
                currentMeme: {
                  ...this.state.currentMeme,
                  ...changedValuesObject,
                },
              });
            }}
          />
        </FlexWLayout>
      </div>
    );
  }

  componentDidMount() {
    // Affichage en console avec prise en compte de styles
    console.log(
      "%c%s",
      "font-size:24px;color:green;font-weight:900",
      "Le component APP est MONTÉ"
    );

    // On récupère l'état initial
    this.setState({
      memes: store.getState().memes,
      images: store.getState().images,
    });

    // Et on met à jour aux changements
    store.subscribe(() => {
      this.setState({
        memes: store.getState().memes,
        images: store.getState().images,
      });
    });
  }

  componentDidUpdate(oldProps: I_AppProps, oldState: I_AppState) {
    console.log("props =>", oldProps, this.props);
    console.log("states =>", oldState, this.state);
    console.log(
      "%c%s",
      "font-size:24px;color:blue;font-weight:600",
      "Le component APP est MIS A JOUR"
    );
  }
}

export default App;
