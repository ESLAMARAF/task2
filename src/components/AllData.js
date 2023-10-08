import Img1 from "../img/products/1.jpg";
import Img2 from "../img/products/8.jpg";
import Img3 from "../img/products/9.png";
import Img4 from "../img/products/10.jpg";
import Img5 from "../img/products/11.jpg";
import Img6 from "../img/products/14.png";
import Img7 from "../img/products/15.jpg";
import Img8 from "../img/products/19.jpg";

import OtherImgs1 from "../img/products/otherProducts/other1.jpg";
import OtherImgs2 from "../img/products/otherProducts/other2.jpg";
import Shelf1 from "../img/products/otherProducts/shelf1.webp";
import Shelf2 from "../img/products/otherProducts/shelf2.webp";
import Vase1 from "../img/products/otherProducts/vase1.webp";
import Vase2 from "../img/products/otherProducts/vase2.webp";
import ChairBoom1 from "../img/products/otherProducts/chairboom1.webp";
import ChairBoom2 from "../img/products/otherProducts/chairboom2.webp";
import BlackLamp1 from "../img/products/otherProducts/blacklamp1.webp";
import BlackLamp2 from "../img/products/otherProducts/blacklamp2.jpg";
import WoodChair1 from "../img/products/otherProducts/woodchair1.webp";
import WoodChair2 from "../img/products/otherProducts/woodchair2.webp";
import Copenhagen1 from "../img/products/otherProducts/copenhagen1.webp";
import Copenhagen2 from "../img/products/otherProducts/copenhagen2.webp";
import Comfy1 from "../img/products/otherProducts/comfy1.webp";
import Comfy2 from "../img/products/otherProducts/comfy2.webp";

export const items = [
  {
    id: 1,
    category: "chair",
    img: Img1,
    description: "Little Armchair Sheepskin",
    price: 986,
    otherImgs: [OtherImgs1, OtherImgs2],
    specs:'shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines,',
    texture: "Sheep Skin",
    colors : ['red','black','blue','yellow'],
    size: ['2*3','4*4','3*4']
  },
  
  
  
 
  
  {
    id: 2,
    category: "furniture",
    img: Img2,
    description: "Gejst Shelf A Black Ash/Black",
    price: 115,
    otherImgs: [Shelf1, Shelf2],
    specs:
      "Designed by  way and elegantlyl, creating calm and an overvion the shelf.",
    texture: "Wood",
    colors : ['red','black','blue','yellow'],
    size: ['2*3','4*4','3*4']
  },
  {
    id: 3,
    category: "furniture",
    img: Img3,
    description: "Cube Lolo Vase Black",
    price: 161,
    otherImgs: [Vase1, Vase2],
    specs:
      "Klo was originally designed by Søren Lassa natural and soueady counts the Kubus candlestrs for a femiy and precision.",
    texture: "Ceramics",
    colors : ['red','black','blue','yellow'],
    size: ['2*3','4*4','3*4']
  },
  {
    id: 4,
    category: "chair",
    img: Img4,
    description: "Traditional Armchair",
    price: 89,
    otherImgs: [ChairBoom1, ChairBoom2],
    specs:
      "Concept: &Tradition's Boxpression. The chair was designed by Hions gn that gives a personal mark to the home.",
    texture: "Wood",
    colors : ['red','black','blue','yellow'],
    size: ['2*3','4*4','3*4']
  },
  {
    id: 5,
    category: "lamp",
    img: Img5,
    description: "The Sun Pendant Black",
    price: 160,
    otherImgs: [BlackLamp1, BlackLamp2],
    specs:
      "The Here Comes The Sun pendant designed by Bertrand Balas is a quality lamp with a unique and magical look. The Here Comes The Sun series has a fantastic expression and especially swhen turned on it creates a very special atmosphere in the room it hangs in. The lamp fits perfectly above both dining room table, kitchen counter, and as living room lighting . ",
    texture: "Plastic",
    colors : ['red','black','blue','yellow'],
    size: ['2*3','4*4','3*4']
  },
  
  
  {
    id: 6,
    category: "chair",
    img: Img6,
    description: "Oak Spanish Chair",
    price: 520,
    otherImgs: [WoodChair1, WoodChair2],
    specs:
      "When talking about Børge Mogensen, The Spanish Chair is probably one of the first designs you would think of, which makes good sense as it is also one of his most recognized products around the world.",
    texture: "Wood",
    colors : ['red','black','blue','yellow'],
    size: ['2*3','4*4','3*4']
  },
  {
    id: 7,
    category: "chair",
    img: Img7,
    description: "Copenhagen Armchair",
    price: 330,
    otherImgs: [Copenhagen1, Copenhagen2],
    specs:
      "Concept: The Hyg series by Danish Normann Copenhagen is a series of chairs based on the Danish word Hygge. The designer Simon Legald has tried to embody the meaning of the word around security, warmth and convenience in a furniture series. This is expression in the fine organic shapes and hearty curves that provide a high degree of sitting comfort and well-being in the chairs. ",
    texture: "Wood",
    colors : ['red','black','blue','yellow'],
    size: ['2*3','4*4','3*4']
  },
  
  
  
  {
    id: 8,
    category: "chair",
    img: Img8,
    price: [3000,3500],
    otherImgs: [Comfy1, Comfy2],
    specs:
      "Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair's soft, homely space.",
    texture: "Comfy Material",
    colors : ['red','black','blue','yellow'],
    size: ['2*3','4*4','3*4']
  },
  

];
