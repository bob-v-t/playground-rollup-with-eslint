import {declareGlobals} from './launch/Globals.js';
import {Loader} from './launch/Loader.js';

declareGlobals(window);

var ldr = new Loader();
ldr.load('core.js');