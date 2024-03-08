import { Link } from 'react-router-dom'

const items = [
	{ name: 'Inicio', route: '' },
	{ name: 'Categorías', route: 'categorias' },
]

const navItems = items.map(item => (
	<Link
		to={`/${item.route}`}
		className="link dim gray f6 mr3-ns ml3-ns mr2 ml2 f4-ns dib b"
		title={item.name}
		key={item.route}
	>
		{item.name}
	</Link>
))

export default function NavMenu() {
	return (
		<nav className="pa3 pa4-ns">
			<Link to="/" className="link dim black tc db mb3 mb4-ns" title="Home">
				<h1 className="f3 f2-m f-subheadline-l fw4 ttu georgia mt2">
					Comprando Colombiano
				</h1>
			</Link>
			<div className="tc pb3">{navItems}</div>
		</nav>
	)
}
