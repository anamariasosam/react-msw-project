import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import NavMenu from './components/NavMenu'
import Categories from './routes/Categories'
import Home from './routes/Home'
import Store from './routes/Store'
import Footer from './components/Footer'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
})

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="w-100 sans-serif bg-white">
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route path="/" element={<Home />} />
							<Route path="/categorias" element={<Categories />} />
							<Route path="/tiendas/:slug" element={<Store />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</QueryClientProvider>
	)
}

function Layout() {
	return (
		<>
			<NavMenu />
			<main className="min-vh-100">
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
