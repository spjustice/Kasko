import vueRouter from "vue-router";
import Vue from "vue";

Vue.use(vueRouter);

import StepOne from './pages/StepOne'

const routes = [
   {
      path: '/test',
      component: StepOne
   }
];

export default new vueRouter({
   mode: "history",
   routes
});