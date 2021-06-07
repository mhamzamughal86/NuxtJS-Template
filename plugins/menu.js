import Vue from 'vue';
const menu =[
  {
    icon: "mdi-home",
    title: "Home",
    to: "/",
    public: true,
  },
  {
    icon: "mdi-lock",
    title: "Inspire",
    to: "/inspire",
    public: true,
  },
  {
    icon: "mdi-airplane",
    title: "Airplane",
    to: "/airplane",
    public: false,
  },
];
export default menu;
Vue.prototype.$menu = menu;
