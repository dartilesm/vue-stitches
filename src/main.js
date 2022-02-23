export default {
  install: (app) => {
    const version = Number(app.version.split('.')[0])
    if (version < 3) {
      app.directive('stitches', (el, binding, vNode) => {
        const stitchesCss = binding.value;
        const props = vNode.data.attrs;
    
        const { className } = stitchesCss(props);
    
        const classList = className.split(" ");
    
        classList.forEach((_class) => {
          el.classList.add(_class);
        });
        
      })
    } else {
      app.directive('stitches', (el, binding, vNode) => {
        const stitchesCss = binding.value;
        const props = vNode.props;
    
        const { className } = stitchesCss(props);
    
        const classList = className.split(" ");
    
        classList.forEach((_class) => {
          el.classList.add(_class);
        });
        
      })
    }
  }
}