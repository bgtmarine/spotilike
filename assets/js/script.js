import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";

//on appelle catalogue sous une global cela la rend général
globalThis.catalogue = catalogue;
slider();