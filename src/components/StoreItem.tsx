import COLORS from '../shared/colors'
import { Store } from '../shared/models'

type StoreItemProps = {
	store: Store
	color: (typeof COLORS)[number]
}

export default function StoreItem({ store, color }: StoreItemProps) {
	const { name, imageUrl, phone } = store
	return (
		<li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
			<img
				className="w2 h2 w3-ns h3-ns br-100 shadow-1"
				src={imageUrl}
				alt={`${name} logo`}
			/>
			<div className="pl3 flex-auto black">
				<a
					href={`https://www.instagram.com/${name}`}
					className="f5 link black hover-gray"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="db fw6 lh-title ttl">@{name}</span>
				</a>
				<a
					href={`https://api.whatsapp.com/send?phone=57${phone}&text=👋🏻 Me gusta uno de tus productos, ¿Me puedes dar más información?`}
					className={`f6 link black hover-${color}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					{phone}
				</a>
			</div>
			<div>
				<a
					href={`https://www.instagram.com/${name}`}
					className={`f3 link gray hover-${color}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa fa-instagram" aria-hidden="true" />
				</a>
			</div>
		</li>
	)
}
