# Vue Smooth Scroll

> Simple vue smooth scroll based on vue-smoothscroll https://github.com/Teddy-Zhu/vue-smoothscroll/blob/master/README.md


## Instalation
``` bash
# install dependency
npm install --save vue-smooth-scroll
``` 

``` javascript
// import on your project (less then 1KB gziped)
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)
```

## Usage 
``` html
<a href="#div-id" v-smooth-scroll>Anchor</a> 
<div id="div-id"></div> 
```
## Custom options 
### Defaults
``` js
  {
    duration: 500, // Animation speed
    offset: 0, // Offset from element, you can use positive or negative values
  }
```
### Example:
``` html
<a href="#div-id" v-smooth-scroll="{ duration: 1000, offset: -50 }">Anchor</a> 
<div id="div-id"></div> 
```


### Without Browserify or Webpack
``` html
<body>
  <div id="app">
    <a href="#app" v-smooth-scroll>Anchor</a>
  </div>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-smooth-scroll@1.0.11"></script>
  <script>
  Vue.use(VueSmoothScroll)
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
</script>
</body>
```