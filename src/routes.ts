import { dAppName } from 'config';
import withPageTitle from './components/PageTitle';
import BTXFinanceHome from './pages';
import PreSale from './pages/Presale';
import Paraswap from './pages/Paraswap';
import DiceGame from './pages/DiceGame';
import Farms from './pages/Farms';

export const routeNames = {
  home: '/',
  unlock: '/unlock',
  presale: '/presale',
  farms: '/farms',
  paraswap: '/paraswap',
  dicegame: '/dice-game'
};

const routes: Array<any> = [

  {
    path: routeNames.home,
    title: 'Home',
    component: BTXFinanceHome
  },

  {
    path: routeNames.farms,
    title: 'Farms',
    component: Farms
  },

  {
    path: routeNames.presale,
    title: 'PreSale',
    component: PreSale
  },
  { 
    path: routeNames.paraswap,
    title: 'Paraswap',
    component: Paraswap
  },
  { 
    path: routeNames.dicegame,
    title: 'Dice Game',
    component: DiceGame
  }
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • ${dAppName}`
    : `${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
