import Vue from 'vue';

Vue.prototype.$appName = 'VueJs Template';

Vue.prototype.$sayHelloTo = function(name) {
  return `Hello ${name}`;
}
