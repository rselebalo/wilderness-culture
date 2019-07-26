import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const People = React.lazy(() => import('./views/Panics/People'));
const Contact = React.lazy(() => import('./views/Panics/Contact'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/people', name: 'People', component: People },
  { path: '/contact/', name: 'Contact', component: Contact }
];

export default routes;