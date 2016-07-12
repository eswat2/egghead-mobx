import Home from '../components/Home.jsx';
import Main from '../components/Main.jsx';
import Profile from "../components/Profile.jsx";

// const routes = (
//   <Route path="/" component={Main} >
//     <IndexRoute component={Home} />
//     <Route path="/profile/:username" component={Profile} />
//   </Route>
// );

const routes = {
  path: '/',
  component: Main,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'profile/:username', component: Profile }
  ]
};

export default routes;
