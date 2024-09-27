
//képgaléria létrehozása
//kartya osztaly letrehozása ami egy kis kép megjelenik
//kartyak osztaly ami sok képet alul
//rakattintunk a kiskepre, akkor az a kep jelenjen meg felul
//nyilakkal leptetni lehet

import { kepek } from "./adatok.js";
import Kartya from "./Kartya.js";
import Jatekter from "./Jatekter.js";

const fokep = $("#fokep")
const fokepBox = $("#fokepbox")
const aktEelem = kepek[0]


const kisKepBox = $("#kiskepek")


new Jatekter(kepek,kisKepBox)


