export function Loader() {
  this.load = function(src) {
    document.write('<script src=' + src + '></script>');
  };
}