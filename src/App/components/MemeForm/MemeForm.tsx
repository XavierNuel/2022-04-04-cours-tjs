import React, { FC } from "react";
import styles from "./MemeForm.module.scss";
import { I_Image, I_Meme } from "../../interfaces/common";
import Button from "../Button/Button";
//const initialState = {};
interface I_MemeFormProps {
  currentMeme: I_Meme;
  images: Array<I_Image>;
  onInputValueChange: Function;
}
const MemeForm: FC<I_MemeFormProps> = (props) => {
  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
        }}
      >
        <h1>Titre</h1>
        <input
          type="text"
          id="f_titre"
          placeholder="Saisir un titre"
          value={props.currentMeme.titre}
          onChange={(evt) => {
            props.onInputValueChange({ titre: evt.target.value });
          }}
        />
        <hr />
        <h2>Image</h2>
        <select
          //value={props.currentMeme.imageId}
          onChange={(evt) => {
            props.onInputValueChange({ imageId: Number(evt.target.value) });
          }}
        >
          {props.images.map((o, i) => (
            // on prefère map à foreach car besoin d'un retour... plus simple comme ça donc
            <option key={"select-img-" + i} value={o.id}>
              {o.name}
            </option>
          ))}
          <option value="-1">Aucune</option>
        </select>
        <hr />
        <h2>text</h2>
        <input
          type="text"
          value={props.currentMeme.text}
          onChange={(evt) => {
            props.onInputValueChange({ text: evt.target.value });
          }}
        />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              value={props.currentMeme.x}
              onChange={(evt) => {
                props.onInputValueChange({ x: Number(evt.target.value) });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              value={props.currentMeme.y}
              onChange={(evt) => {
                props.onInputValueChange({ y: Number(evt.target.value) });
              }}
            />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <input
          type="color"
          id="f_color"
          value={props.currentMeme.color}
          onChange={(evt) => {
            props.onInputValueChange({ color: evt.target.value });
          }}
        />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              value={props.currentMeme.fontSize}
              onChange={(evt) => {
                props.onInputValueChange({
                  fontSize: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_fw">font-weight:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              min="100"
              step="100"
              max="900"
              value={props.currentMeme.fontWeight}
              onChange={(evt) => {
                props.onInputValueChange({ fontWeight: evt.target.value });
              }}
            />
          </div>
        </div>
        <div className={styles.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input
              id="f_underline"
              type="checkbox"
              checked={props.currentMeme.underline}
              onChange={(evt) => {
                props.onInputValueChange({ underline: evt.target.checked });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input
              id="f_italic"
              type="checkbox"
              checked={props.currentMeme.italic}
              onChange={(evt) => {
                props.onInputValueChange({ italic: evt.target.checked });
              }}
            />
          </div>
        </div>
        <div className={styles.half}>
          <Button type="reset" bgColor="tomato">
            clear
          </Button>
          <Button type="submit" bgColor="skyblue">
            save
          </Button>
        </div>
      </form>
    </div>
  );
};
export default MemeForm;
