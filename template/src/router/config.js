import Home from '@/views/Home';

const config = {
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
        auth: ''
      }
    }
  ]
};

export default config;
