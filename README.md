
# vue-stitches
**vue-stitches** allows you to use `css` function from `@stitches/core` through a vue directive.
  
## Requirements

 - @stitches/core 0.2.5 or above
 - vue 2.6.2 or above (not tested in previous version, you can try it and report any issue in github 😁)

## Get started

### Installation

    npm install vue-stitches@latest
or

    yarn add vue-stitches@latest

#### Vue 3

```
// File where you mount the vue application
import  {  createApp  }  from  "vue";
import  App  from  "./App.vue";
import  VueStitches  from  "vue-stitches"; // Import VueStitches from library

const  app  =  createApp(App);
app.use(VueStitches); // Use it through as plugin
app.mount("#app");

```
Read more about vue plugins [here](https://vuejs.org/guide/reusability/plugins.html#introduction)

#### Vue 2

```
// File where you mount the vue application
import  Vue  from  "vue";
import  App  from  "./App.vue";
import  VueStitches  from  "vue-stitches";

Vue.use(VueStitches); // Use it through as plugin
new  Vue({
	el:  "#app",
	render:  (h)  =>  h(App)
});

```
Read more about vue plugins [here](https://v2.vuejs.org/v2/guide/plugins.html#Using-a-Plugin)


#### Nuxt
```
// plugins/vue-stitches.js
import  Vue  from  "vue";
import  VueStitches  from  "vue-stitches";

Vue.use(VueStitches); // Use it through as plugin
```
Read more about nuxt plugins [here](https://nuxtjs.org/docs/configuration-glossary/configuration-plugins/)

> Previously what we did was globally register **vue-stitches** to be
> able to use it in our components or elements

### Usage
Use VueStitches in your components or elements as **v-stitches** directive. The directive expects an array with two positions `[cssFunction, variantObj]` or css function directly `cssFunction`.
Let's see an example
```
// styles.js

import { css } from "@stitches/core";

const text = css({
  textTransform: "uppercase",
  backgroundColor: "orange",
  padding: 20,
  lineHeight: 3.5,
  variants: {
    size: {
      small: { fontSize: "0.75rem" },
      base: { fontSize: "1rem" },
      large: { fontSize: "2rem" }
    },
    weight: {
      light: { fontWeight: "200" },
      normal: { fontWeight: "400" },
      medium: { fontWeight: "600" },
      bold: { fontWeight: "800" }
    },
    color: {
      red: { color: "red" },
      blue: { color: "blue" },
      green: { color: "green" }
    }
  }
});

export default text;
```

```
// path/to/component.js

<template>
  <span v-stitches="[styles, { color, weight, size }]"> 
    A {{ weight }} {{ size }} size text colored {{ color }}
  </span>
  <span v-stitches="styles">Hi!</span>
</template>

<script>
import styles from "./styles.js";

export default {
  name: "Text",
  data() {
    return {
      styles,
      color: "green",
      weight: "bold",
      size: "large"
    };
  },
};
</script>

```
Read more about stitches [here](https://stitches.dev/docs/introduction)
If you want to know more ways to use Stitches in Vue, please check this [post](https://dartiles.dev/blog/how-to-use-stitches-in-vue-nuxt)