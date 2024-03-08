import useCategories from '../hooks/useCategories'
import CategoryItem from '../components/CategoryItem'
import COLORS from '../shared/colors'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Categories() {
	const { isLoading, data: categories = [], isError, error } = useCategories()

	if (isLoading) {
		return <LoadingSpinner />
	}

	if (isError) {
		return <div>Error: {error.message}</div>
	}

	return (
		<div className="cf mw8 mw7-m ph4 ph5-l mb5 center">
			{categories.map((category, index) => (
				<CategoryItem
					category={category}
					key={category.slug}
					color={COLORS[index]}
				/>
			))}
		</div>
	)
}
