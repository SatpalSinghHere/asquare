import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomeBody from './components/HomeBody';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeBody />
      },
      {
        path: 'about',
        element: <AboutUs />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'contact',
        element: <Contacts />
      }
    ]
  }
])

export default appRouter;
