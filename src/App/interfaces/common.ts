// Si export default => import par défaut import Meme from ...
// Si export sans default => import secondaire appelé par  import { Meme, Image } from ...


// Cette déclaration d'interface permet de valider à la compilation que l'on a les bons types de variable
// Cela ne génère pas de code à la compilation

export interface I_Meme {
  id?: number; // ? => facultatif
  text: string;
  x: number;
  y: number;
  fontWeight: string;
  fontSize: number;
  color: string;
  underline: boolean;
  italic: boolean;
  imageId: number|null; // number ou nul
}

export const DummyMeme: I_Meme = {
  text: "Dummy Meme",
  x: 50,
  y: 100,
  fontWeight: "900",
  fontSize: 30,
  color:'#456123',
  underline: true,
  italic: false,
  imageId: 0,
};

export interface I_Image {
  id: number;
  url: string;
  w: number;
  h: number;
  name: string;
}

/*
export const DummyImage:I_Image={
    text: 'Dummy Meme',
    x:50,
    y:100,
    fontWeight:'900',
    fontSize:30,
    underline: true,
    italic: false,
    imageId:0
};
*/
