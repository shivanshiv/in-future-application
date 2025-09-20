import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import BuildWebsite from './pages/BuildWebsite';
import FindInternship from './pages/FindInternship';
import Login from './pages/Login';
import ApplicationsList from './components/ApplicationsList';


const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{ path: '/build-website', element: <BuildWebsite /> },
	{ path: '/find-internship', element: <FindInternship /> },
	{ path: '/login', element: <Login /> },
	{ path: '/application', element: <ApplicationsList /> },
]);

const root = createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
); 