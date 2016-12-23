import { Viewability } from './Viewability.js';
import { BurstManager } from './BurstManager.js';

export var w$ = w$ || (function (win) {
  var initialized = false;
  /**
   * Define the static variables that will be made available on the public `w$` scope.
   * Classes and functions will be initialized in the `init` function
   */
  var w$ = {
    /**
     * Some var that would regularly belong to the `viewability` mocule,
     * but for some reason needs to be on the `w$` scope.
     */
    viewable: false
  };

  /**
   * The init function that starts some of the functionality
   */
  w$.init = function() {
    if (initialized) {
      return;
    }

    // mark as initialized
    initialized = true;
    console.log('initialized');

    /**
     * Example of a module that doesn't need to be revealed
     */
    var burstManager = new BurstManager(w$, win.screenad);
    burstManager.doBurst();

    /**
     * Example of a module that we would like to reveal to the `w$` object.
     */
    w$.viewability = new Viewability(w$);
    w$.viewability.updateViewability(true);
  };

  return w$;
}(window));

// This function isn't used anywhere, so
// Rollup excludes it from the bundle...
export function uselessMe() {
  console.log('I cry.');
}

/**
 * Some random function that we might want to make available on the window scope later on.
 */
export function square ( x ) {
  return x * x;
}