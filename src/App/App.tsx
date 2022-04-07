import React, { Component, useEffect } from "react";
import style from "./App.module.css";

import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import FlexVLayout from "./components/layouts/FlexVLayout/FlexVLayout";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { DummyMeme, I_Meme } from "./interfaces/common";
import { CURRENT_ACTIONS } from "./store/store";
import Modal from "./components/Modal/Modal";
import ListPdf from "./components/ListPdf/ListPdf";

interface I_AppProps {
  AppName?: string;
}
class App extends Component<I_AppProps> {
  componentDidMount() {}

  render(): React.ReactNode {
    return (
      <>
      <div className={style.App}>
        <FlexVLayout>
          <div className={style.header}>Meme Generator en REACT-JS</div>

          <Navbar></Navbar>

          <Switch>
            <Route path="/" exact>
              <div className={style.home}>Bonjour et welcome</div>
            </Route>
            {/* ici on est en react-router-dom 5 //           <Route path="/editor" exact />   */}
            {/* si on est en react-router-dom 6 //    <= obligé de passer par un appel de composant*/}
            <Route path="/editor" component={RoutedEditor} exact />
            <Route path="/editor/:id" component={RoutedEditor} />
            <Route path="/thumbnail">
              <MemeThumbnail />
            </Route>
            <Route path="/listpdf" exact component={ListPdf} />
            {/* cas d'une dernière route poubelle ... */}
            <Route path="/">
              <div className={style.error}>Route inexistante</div>
            </Route>
          </Switch>
        </FlexVLayout>
      </div>
      <Modal/>
      </>
    );
  }
}

// Déclaration d'un composant interne
function Editor(props: any) {
  console.log(props);
  // quand une valeur subit un montage ou un changement
  useEffect(() => {
    // on met à jour le store qui est connecté
    props.update(
      props.memes.find((m: I_Meme) => m.id === parseInt(props.match.params.id))
    );
    // et si on est sur le démontage du composant
    return () => {
      props.update(undefined);
    };
  }, [props]);

  return (
    <FlexWLayout>
      <div>
        <MemeViewer />
      </div>
      <MemeForm />
    </FlexWLayout>
  );
}

// Map state to Props
function mstp(state: any, own: any) {
  return { ...own, memes: state.ressources.memes };
}
//
// Map dispatch to Props
//
function mdtp(dispatch: Function) {
  return {
    update: (meme: I_Meme | undefined) => {
      dispatch({
        type: CURRENT_ACTIONS.UPDATE_CURRENT,
        value: meme ? meme : DummyMeme,
      });
    },
  };
}

// On surcharge les Props avec les infos d'url, param du navigateur (history, location, match...)
// Et en plus, on connecte les dispatch et state aux props
const RoutedEditor = withRouter(connect(mstp, mdtp)(Editor));

export default App;
