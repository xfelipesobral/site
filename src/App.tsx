import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home'
import Error from './pages/error'
import Layout from './pages/layout'

const routes = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			}
		]
	},
	{ 
		path: '/erro/:id', 
		element: <Error /> 
	}
])

export default function App() {

	return (
		<>
			<RouterProvider router={routes} />
		</>
	)
}
