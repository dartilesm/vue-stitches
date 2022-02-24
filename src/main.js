export default {
  install: (app) => {
    app.directive("stitches", (el, binding) => {
      if (!Array.isArray(binding.value) && !(binding.value instanceof Function)) {
        console.error(`v-stitches expected an Array or Function but received a ${typeof binding.value}`);
        return;
      }

      const [stitchesCss, props = {}] = Array.isArray(binding.value) ? binding.value : [binding.value];

      const { className } = stitchesCss(props);

      const classList = className.split(" ");

      classList.forEach((_class) => {
        el.classList.add(_class);
      });
    });
  }
}