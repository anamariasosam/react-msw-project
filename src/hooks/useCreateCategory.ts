import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CategoryService } from '../services/CategoriesService'

export default function useCreateCategory({
	onSuccess,
	onError,
}: {
	onError: (error: Error) => void
	onSuccess: (
		data: Awaited<ReturnType<CategoryService['createCategory']>>,
	) => void
}) {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({
			name,
			slug,
			imageUrl,
		}: Parameters<CategoryService['createCategory']>[0]) =>
			new CategoryService().createCategory({
				name,
				slug,
				imageUrl,
			}),
		onSuccess: async data => {
			await queryClient.invalidateQueries({ queryKey: ['categories'] })
			onSuccess(data)
		},
		onError,
	})
}
