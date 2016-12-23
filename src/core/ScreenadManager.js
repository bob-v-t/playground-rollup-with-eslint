/* globals adperfobj */
import { Viewability } from './Viewability.js';
import { BurstManager } from './BurstManager.js';

// This function isn't used anywhere, so
// Rollup excludes it from the bundle...
export function square ( x ) {
  return x * x;
}

export var w$ = w$ || (function () {
  var rendered = false;
  return {
    viewability : new Viewability(this),
    burstManager : new BurstManager(this, adperfobj),
    render: function() {
      if(!rendered) {
        rendered = true;
        this.viewability.updateViewability(true);
        //console.log('render');
      }
    },
    test: true
  };
}());