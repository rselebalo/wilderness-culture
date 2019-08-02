import HomeComponent from './views/Home';
import ContactComponent from './views/ContactUs';
import PeopleComponent from './views/People';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', component: HomeComponent },
  { path: '/people', name: 'People', component: PeopleComponent },
  { path: '/contact/', name: 'Contact', component: ContactComponent }
];

export default routes;