import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { CategoryService } from '../services/CategoriesService'

export default function useStoresByCategory(
	categorySlug: Parameters<CategoryService['getStoresByCategory']>[0],
) {
	return useQuery({
		queryKey: ['stores', { categorySlug }],
		queryFn: () => new CategoryService().getStoresByCategory(categorySlug),
	})
}

export function useStoresByCategoryOld(
	categorySlug: Parameters<CategoryService['getStoresByCategory']>[0],
) {
	const [categories, setCategories] = useState<{
		status: 'idle' | 'pending' | 'success' | 'error'
		data: Awaited<ReturnType<CategoryService['getStoresByCategory']>>
	}>({
		status: 'idle',
		data: undefined,
	})

	useEffect(() => {
		fetchCategories()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categorySlug])

	return {
		data: categories.data,
		isLoading: categories.status === 'pending',
	}

	function fetchCategories() {
		setCategories({
			status: 'pending',
			data: undefined,
		})
		new CategoryService().getStoresByCategory(categorySlug).then(data => {
			setCategories({
				status: 'success',
				data,
			})
		})
	}
}
