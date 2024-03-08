import { useParams } from 'react-router-dom'

import CategoryHeader from '../components/CategoryHeader'
import StoreItem from '../components/StoreItem'
import COLORS from '../shared/colors'
import useStoresByCategory from '../hooks/useStoresByCategory'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Store() {
	const { slug = '' } = useParams()
	const { data, isLoading, isError, error } = useStoresByCategory(slug)

	if (isLoading) {
		return <LoadingSpinner />
	}

	if (isError) {
		return <div>Error: {error.message}</div>
	}

	if (data) {
		return (
			<>
				{data.category && <CategoryHeader category={data.category} />}
				<div>
					<ul className="list pl0 mt0 measure center">
						{data.stores.map((store, index) => (
							<StoreItem key={store.name} store={store} color={COLORS[index]} />
						))}
					</ul>
				</div>
			</>
		)
	}
}
