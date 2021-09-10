import vueRouter from "vue-router";
import Vue from "vue";

Vue.use(vueRouter);

import StepOne from './pages/StepOne'
import StepTwo from './pages/StepTwo'
import StepThree from './pages/StepThree'

const routes = [
   {
      path: '/',
      component: StepOne
   },
   {
      path: '/StepTwo',
      component: StepTwo
   },
   {
      path: '/StepThree',
      component: StepThree
   }
];

export default new vueRouter({
   mode: "history",
   routes
});