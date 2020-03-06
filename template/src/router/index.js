import Vue from 'vue';
import Router from 'vue-router';
import config from './config';

Vue.use(Router);

const router = new Router(config);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
