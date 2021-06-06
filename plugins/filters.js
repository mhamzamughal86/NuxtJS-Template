import Vue from 'vue';

// String Capitalization
Vue.filter('capitalize',function(params) {
  return _.capitalize(params);
})
