import HeaderOnly from '~/components/Layout/HeaderOnly';

import Home from '~/pages/Home';
import Discover from '~/pages/Discover';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/discover', component: Discover },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
