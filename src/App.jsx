import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CreatePackage from './pages/CreatePackage';
import Navbar from './components/Navbar';

const Layout = ({ isModalOpen, openModal, closeModal }) => {
  return (
    <>
      <Navbar openModal={openModal} />
      <Outlet />
      <CreatePackage isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const routes = [
    {
      element: <Layout 
                 isModalOpen={isModalOpen} 
                 openModal={openModal} 
                 closeModal={closeModal}
               />,
      children: [
        {
          path: "/",
          element: <Home isModalOpen={isModalOpen} closeModal={closeModal} />
        },
        {
          path: "/about",
          element: <AboutUs />
        }
      ]
    }
  ];

  const router = createBrowserRouter(routes, {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true
    }
  });

  return <RouterProvider router={router} />;
}

export default App;
