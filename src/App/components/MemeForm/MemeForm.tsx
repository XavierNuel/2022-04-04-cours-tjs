import React, { FC } from "react";
import style from "./MemeForm.module.scss";
import Button from "../Button/Button";
import { I_Image, I_Meme } from "../../interfaces/common"

// On défini les types des variables de notre MemeForm
interface I_MemeFormProps {
  currentMeme: I_Meme;
  images: Array<I_Image>;
  onInputValueChange:Function;
}

const MemeForm: FC<I_MemeFormProps> = (props) => {
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      memeForm
      <form onSubmit={(evt)=>{
        evt.preventDefault();        
      }}>
        <input type="text" name="" id="" placeholder="Texte du Même" value={props.currentMeme.text} onChange={evt=>{props.onInputValueChange({text:evt.target.value})}}/>
        <div className="flexCol">
          <Button type="submit" bgColor="skyblue">Validation</Button>
          <Button type="reset" bgColor="tomato">Reset</Button>
        </div>
      </form>
    </div>
  );
};

export default MemeForm;
