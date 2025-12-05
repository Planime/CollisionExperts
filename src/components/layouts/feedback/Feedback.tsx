import Container from '@components/container/Container'
import Heading from '@components/heading/Heading'
import { Button } from '@components/ui/button/Button'
import { useEffect, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import 'swiper/css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import FeedbackCard from './FeedbackCard'

type GoogleReview = {
	author_name: string
	rating: number
	text: string
}

const placeId = 'ChIJ_2qwTGPZmoARvSGLq6JmJN0'
const apiKey = 'AIzaSyAurRtrcdHw_uKBh8eispUA3B57D0lLLAw'

const Feedback = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [reviews, setReviews] = useState<any[]>([])

	useEffect(() => {
		const loadScript = () => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			if ((window as any).google) {
				init()
				return
			}

			const script = document.createElement('script')
			script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
			script.async = true
			script.defer = true
			script.onload = init
			document.body.appendChild(script)
		}

		function init() {
			// Ensure google exists
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			if (!(window as any).google) return
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const service = new google.maps.places.PlacesService(
				document.createElement('div')
			)

			service.getDetails(
				{
					placeId,
					fields: ['reviews']
				},
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(place: any, status: any) => {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					if (status === google.maps.places.PlacesServiceStatus.OK) {
						const mapped = (place.reviews ?? []).map(
							(r: GoogleReview) => ({
								title: r.text?.slice(0, 50) || 'Review',
								description: r.text,
								name: r.author_name,
								avatarColor: '#1C68FF',
								rating: r.rating
							})
						)
						setReviews(mapped)
					}
				}
			)
		}

		loadScript()
	}, [])

	return (
		<section className='bg-white py-20 md:py-24 lg:py-28'>
			<Container>
				<div className='mb-6 items-center justify-between gap-4 md:mb-8 md:flex lg:mb-10'>
					<Heading className='max-md:text-center'>Feedbacks</Heading>

					 <a
                             href="https://maps.app.goo.gl/RAbmyLP1sFEEfxdMA"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="max-md:hidden"
                         >
                             <Button variant='light' size='md'>
                                 more reviews
                             </Button>
                         </a>
				</div>

				<Swiper
					modules={[Pagination]}
					spaceBetween={16}
					slidesPerView={1}
					navigation
					className='pb-9!'
					pagination={{ clickable: true }}
					breakpoints={{
						768: {
							slidesPerView: 2
						},
						1024: {
							slidesPerView: 3
						}
					}}
				>
					{reviews.map((review, index) => (
						<SwiperSlide key={index} className='h-auto!'>
							<FeedbackCard review={review} />
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</section>
	)
}

export default Feedback
