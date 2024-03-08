import { useEffect, useState } from 'react'
import { Category } from '../shared/models'
import { useQuery } from '@tanstack/react-query'
import { CategoryService } from '../services/CategoriesService'

export default function useCategories() {
	return useQuery({
		queryKey: ['categories'],
		queryFn: () => new CategoryService().getCategories(),
	})
}

export function useCategories1() {
	const [categories, setCategories] = useState<{
		status: 'idle' | 'pending' | 'success' | 'error'
		data: Category[]
	}>({
		status: 'idle',
		data: [],
	})

	useEffect(() => {
		fetchCategories()
	}, [])

	return {
		data: categories.data,
		isLoading: categories.status === 'pending',
	}

	function fetchCategories() {
		setCategories({
			status: 'pending',
			data: [],
		})
		new CategoryService().getCategories().then(data => {
			setCategories({
				status: 'success',
				data,
			})
		})
	}
}
