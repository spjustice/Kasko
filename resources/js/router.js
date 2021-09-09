import vueRouter from "vue-router";
import Vue from "vue";

Vue.use(vueRouter);

import StepOne from './pages/StepOne'
import StepTwo from './pages/StepTwo'

const routes = [
   {
      path: '/',
      component: StepOne
   },
   {
      path: '/StepTwo',
      component: StepTwo
   }
];

export default new vueRouter({
   mode: "history",
   routes
});