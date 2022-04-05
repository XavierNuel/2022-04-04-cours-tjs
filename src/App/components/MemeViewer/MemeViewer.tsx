import React from "react";
import style from "./MemeViewer.module.scss";
import { I_Image, I_Meme } from "../../interfaces/common";
import { connect } from "react-redux";

// On défini les types des variables de notre MemeViewer
interface I_MemeViewerProps {
  meme: I_Meme;
  image: I_Image | undefined;
}
const MemeViewer: React.FC<I_MemeViewerProps> = (props) => {
  /* le coup du && détourne un ternaire ... et comme on affiche pas les bool en react, si vrai, rien s'affiche */
  /* on préfère le SVG pour faire du dessin car possiblité de mettre du texte et autre via coordonnées... */
  return (
    <svg
      className={style.MemeViewer}
      data-testid="MemeViewer"
      viewBox={`0 0 ${props.image ? props.image.w : "1000"} ${
        props.image ? props.image.w : "500"
      }`}
    >
      {undefined !== props.image && (
        <image href={`/img/${props.image.url}`} x="0" y="0"></image>
      )}
      <text
        x={props.meme.x}
        y={props.meme.y}
        style={{ fontSize: props.meme.fontSize }}
        fill={props.meme.color}
        textDecoration={props.meme.underline ? "underline" : "none"}
        fontStyle={props.meme.italic ? "italic" : "normal"}
        fontWeight={props.meme.fontWeight}
      >
        {props.meme.text}
      </text>
    </svg>
  );
};


function mapStateToProps(storeState: any, ownProps: any) {
  return {
    ...ownProps,
    image: storeState.ressources.images.find((e:I_Image)=>e.id===storeState.current.imageId),
    meme: storeState.current,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MemeViewer);
export const unConnectedMemeViewer = MemeViewer;