import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './components/Contact'; 
import About from './components/About';
import ResturantMenu from './components/ResturantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';

// Layout component that includes Header and renders child routes
function Layout() {
  return (
      <div className="App">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/ResturantMenu",
        element: <ResturantMenu/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
