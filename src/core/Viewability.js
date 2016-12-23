export function Viewability (w$) {
  console.log('Viewability', w$);
  return {
    updateViewability : function(newViewability) {
      w$.viewable = newViewability;
    }
  };
}