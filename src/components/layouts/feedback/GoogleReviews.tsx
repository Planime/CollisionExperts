// import { useEffect, useState } from 'react'
// interface GoogleReview {
// 	author_name: string
// 	rating: number
// 	text: string
// }
// const GoogleReviews = () => {
// 	const [reviews, setReviews] = useState<GoogleReview[]>([])
// 	useEffect(() => {
// 		const script = document.createElement('script')
// 		script.src =
// 			'https://maps.googleapis.com/maps/api/js?key=AIzaSyAurRtrcdHw_uKBh8eispUA3B57D0lLLAw&libraries=places'
// 		script.async = true
// 		script.onload = initMap
// 		document.body.appendChild(script)
// 		function initMap() {
// 			const service = new google.maps.places.PlacesService(
// 				document.createElement('div')
// 			)
// 			service.getDetails(
// 				{
// 					placeId: 'ChIJ_2qwTGPZmoARvSGLq6JmJN0',
// 					fields: ['reviews']
// 				},
// 				(place: any, status: any) => {
// 					if (status === google.maps.places.PlacesServiceStatus.OK) {
// 						setReviews(place?.reviews ?? [])
// 					}
// 				}
// 			)
// 		}
// 	}, [])
// 	return (
// 		<div className='flex flex-col gap-4 rounded-xl bg-white p-4'>
// 			{reviews.map((r, i) => (
// 				<div
// 					key={i}
// 					className='border-b border-gray-200 pb-3 last:border-none'
// 				>
// 					<div className='font-semibold'>{r.author_name}</div>
// 					<div className='text-sm'>⭐ {r.rating}</div>
// 					<p className='mt-1 text-sm text-gray-700'>{r.text}</p>
// 				</div>
// 			))}
// 		</div>
// 	)
// }
// export default GoogleReviews
import { useEffect, useState } from 'react'

interface GoogleReview {
	author_name: string
	rating: number
	text: string
}

const GoogleReviews = () => {
	const [reviews, setReviews] = useState<GoogleReview[]>([])

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		if ((window as any).google) {
			init()
			return
		}

		const script = document.createElement('script')
		script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_REVIEWS_KEY}&libraries=places`
		script.async = true
		script.defer = true
		script.onload = init
		document.body.appendChild(script)

		function init() {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			if (!(window as any).google) return
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const service = new google.maps.places.PlacesService(
				document.createElement('div')
			)

			service.getDetails(
				{
					placeId: import.meta.env.VITE_GOOGLE_REVIEWS_PLACE_ID,
					fields: ['reviews']
				},

				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(place: any, status: any) => {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					if (status === google.maps.places.PlacesServiceStatus.OK) {
						setReviews(place?.reviews ?? [])
					}
				}
			)
		}
	}, [])

	return (
		<div className='flex flex-col gap-4 rounded-xl bg-white p-4'>
			{reviews.map((r, i) => (
				<div
					key={i}
					className='border-b border-gray-200 pb-3 last:border-none'
				>
					<div className='font-semibold'>{r.author_name}</div>
					<div className='text-sm'>⭐ {r.rating}</div>
					<p className='mt-1 text-sm text-gray-700'>{r.text}</p>
				</div>
			))}
		</div>
	)
}

export default GoogleReviews
