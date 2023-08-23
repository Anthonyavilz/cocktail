import './App.css';
import { useRoutes, Outlet, Link } from 'react-router-dom'

import EntryPage from './Components/EntryPage';
import CocktailHeader from './Components/CocktailHeader';
import CocktailFooter from './Components/CocktailFooter';
import CocktailGuestPage from './Components/CocktailGuestPage';
import AboutChristina from './Components/AboutChristina';
import AboutMe from './Components/AboutMe';
import AuthForm from './Components/AuthForm';
import UserHeader from './Components/User-Pages/UserHeader';
import UserLanding from './Components/User-Pages/UserLanding';
import PostForm from './Components/User-Pages/PostForm';
import MapView from './Components/User-Pages/MapView';

function App() {

  const routes = useRoutes([
    {
      path: '/',
      element: <EntryPage/>
    },
    {
      path: '/cocktailHour',
      element: (
        <>
        <CocktailHeader/>
        <Outlet/>
        <CocktailFooter/>
        </>        
      ),
      children: [
        {index: true, element: <CocktailGuestPage/>},
        {path: 'aboutChristina', element: <AboutChristina/>},
        {path: 'aboutMe', element: <AboutMe/>},
        {path: 'authForm', element: <AuthForm/>}
      ]
    },
    {
      path: '/cocktailHour/User',
      element: (
        <>
        <UserHeader/>
        <Outlet/>
        <CocktailFooter/>
        </>
      ),
      children: [
        {index: true, element: <UserLanding/>},
        {path: 'postForm', element: <PostForm/>},
        {path: 'mapView', element: <MapView/>}
      ]
    }
  ])

  return (
    <div className="App">
        {routes}
    </div>
  );
}

export default App;
