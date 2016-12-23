export function Viewability (w$) {
  return {
    updateViewability : function(newViewability) {
      w$.viewable = newViewability;
    }
  };
}