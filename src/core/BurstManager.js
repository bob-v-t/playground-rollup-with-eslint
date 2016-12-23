export function BurstManager(w$, screenad) {
  return {
    doBurst: function() {
      if (window !== top) {
        console.log('BurstManager', screenad);
      }
    }
  };
}