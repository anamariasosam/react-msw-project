import COLORS from '../shared/colors'
import { Link } from 'react-router-dom'
import { Category } from '../shared/models'

type CategoryItemProps = {
	category: Category
	color: (typeof COLORS)[number]
}

export default function CategoryItem({
	category: { name, imageUrl, slug },
	color,
}: CategoryItemProps) {
	return (
		<div className="fl w-50 w-25-m w-20-l pa2 grow" role="row">
			<Link
				to={`/tiendas/${slug}`}
				className="db link tc"
				rel="noopener noreferrer"
			>
				<div className={`bg-light-purple shadow-3 pa4 hover-bg-${color}`}>
					<img src={imageUrl} alt={name} className="w-100 db contain" />
				</div>
				<dl className="mt2 f7 lh-copy">
					<dt className="clip">Title</dt>
					<dd className="ml0 black b f6-ns f7 w-100">{name}</dd>
				</dl>
			</Link>
		</div>
	)
}
