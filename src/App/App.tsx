// On repart sur une version qui passera que par les reducer...
// Plus besoin de State, constructors...
//

import React, { Component } from "react";
import style from "./App.module.css";

import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";

interface I_AppProps {
  AppName?: string;
}
// interface I_AppState {
//   currentMeme: I_Meme;
//   images: Array<I_Image>;
//   memes: Array<I_Meme>;
// }
class App extends Component<I_AppProps> {
  // constructor(props: I_AppProps) {
  //   super(props);
  //   // this.state = {
  //   //   currentMeme: initalMemeState,
  //   //   memes: [],
  //   //   images: [],
  //   // };
  // }
  componentDidMount() {
    // console.log(
    //   "%c%s",
    //   "font-size:24pt;color:green;font-weight:900",
    //   "Le component App est monté"
    // );
    // this.setState({memes:store.getState().ressources.memes,images:store.getState().ressources.images});
    // store.subscribe(()=>{
    //   this.setState({memes:store.getState().ressources.memes,images:store.getState().ressources.images})
    // })
  }
  // componentDidUpdate(oldProps: I_AppProps, oldState: I_AppState) {
  //   console.log(
  //     "%c%s",
  //     "font-size:16pt;color:blue;font-weight:900",
  //     "==========cmp updated========"
  //   );
  //   console.log("props->", oldProps, this.props);
  //   console.log("state->", oldState, this.state);
  //   console.log(
  //     "%c%s",
  //     "font-size:16pt;color:blue;font-weight:900",
  //     "============================="
  //   );
  // }
  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <MemeThumbnail />
        <FlexWLayout>
          <div>
            <MemeViewer
            //meme={this.state.currentMeme}
            //image={this.state.images.find(
            //  (e) => e.id === this.state.currentMeme.imageId
            //)}
            />
          </div>
          <MemeForm
          // currentMeme={this.state.currentMeme}
          // images={this.state.images}
          // onInputValueChange={(changedValuesObject: any) => {
          //   this.setState({
          //     currentMeme: {
          //       ...this.state.currentMeme,
          //       ...changedValuesObject,
          //     },
          //   });
          // }}
          />
        </FlexWLayout>
      </div>
    );
  }
}
export default App;
