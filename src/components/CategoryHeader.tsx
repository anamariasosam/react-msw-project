import { Link } from 'react-router-dom'
import { Category } from '../shared/models'
import classNames from 'classnames'

export default function CategoryHeader({ category }: { category: Category }) {
	const { name, imageUrl, prevCategorySlug, nextCategorySlug } = category

	return (
		<div className="mt0 measure center flex items-center lh-copy pa3 ph0-l">
			<Link
				to={`/tiendas/${prevCategorySlug}`}
				className={classNames(
					'f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box',
					{
						'disabled-link': !prevCategorySlug,
					},
				)}
			>
				<svg
					className="w1"
					data-icon="chevronLeft"
					viewBox="0 0 32 32"
					style={{ fill: 'currentcolor' }}
				>
					<title>chevronLeft icon</title>
					<path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" />
				</svg>
			</Link>
			<div className="flex-auto tc">
				<img
					src={imageUrl}
					className="h4 w4 dib"
					alt={`comprando colombiano ${name}`}
				/>
				<h1 className="f4">{name}</h1>
			</div>
			<Link
				to={`/tiendas/${nextCategorySlug}`}
				className={classNames(
					'f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box',
					{
						'disabled-link': !nextCategorySlug,
					},
				)}
			>
				<svg
					className="w1"
					data-icon="chevronRight"
					viewBox="0 0 32 32"
					style={{ fill: 'currentcolor' }}
				>
					<title>chevronRight icon</title>
					<path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" />
				</svg>
			</Link>
		</div>
	)
}
