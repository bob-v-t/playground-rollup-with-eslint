/* globals screenad */
import { square, w$ } from './core/ScreenadManager.js';

window.w$ = w$;
window.square = square;
w$.init(screenad);