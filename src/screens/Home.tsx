// import Container from '@components/container/Container'
// import Header from '@components/header/Header'
// import Hero from '@components/layouts/Hero'
// import Banner from '@components/layouts/banner/Banner'
// import ContactForm from '@components/layouts/contact-form/ContactForm'
// import Contacts from '@components/layouts/contacts/Contacts'
// import Faq from '@components/layouts/faq/Faq'
// import Feedback from '@components/layouts/feedback/Feedback'
// import Footer from '@components/layouts/footer/Footer'
// import Services from '@components/layouts/services/Services'
// import Steps from '@components/layouts/steps/Steps'
// import useLenis from '@hooks/useLenis'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useLayoutEffect, useRef } from 'react'
// gsap.registerPlugin(ScrollTrigger)
// function Home() {
// 	const heroRef = useRef(null)
// 	const nextRef = useRef(null)
// 	useLenis()
// 	useLayoutEffect(() => {
// 		const ctx = gsap.context(() => {
// 			// parallax hero background
// 			gsap.to('#hero .parallax-bg', {
// 				y: '-20%',
// 				scrollTrigger: {
// 					trigger: heroRef.current,
// 					start: 'top top',
// 					end: 'bottom top',
// 					scrub: true
// 				}
// 			})
// 			// hero content slight push
// 			gsap.to('#hero .hero-content', {
// 				y: '-10%',
// 				opacity: 0.7,
// 				scrollTrigger: {
// 					trigger: heroRef.current,
// 					start: 'top top',
// 					end: 'bottom top',
// 					scrub: true
// 				}
// 			})
// 			// next block reveal
// 			gsap.from(nextRef.current, {
// 				y: 100,
// 				opacity: 0,
// 				scrollTrigger: {
// 					trigger: nextRef.current,
// 					start: 'top 80%',
// 					end: 'top 50%',
// 					scrub: true
// 				}
// 			})
// 			// parallax between sections
// 			gsap.utils.toArray('.parallax-section').forEach(sec => {
// 				gsap.to(sec, {
// 					yPercent: -15,
// 					scrollTrigger: {
// 						trigger: sec,
// 						start: 'top bottom',
// 						end: 'bottom top',
// 						scrub: true
// 					}
// 				})
// 			})
// 		})
// 		return () => ctx.revert()
// 	}, [])
// 	return (
// 		<div className='wrapper'>
// 			<Header />
// 			<main>
// 				<div id='hero' ref={heroRef}>
// 					<Hero />
// 				</div>
// 				{/* Next block for scroll animation anchor */}
// 				<div ref={nextRef}>
// 					<Services isMobileSlider />
// 				</div>
// 				<Steps />
// 				<div id='feedback'>
// 					<Feedback />
// 				</div>
// 				<div id='payment'>
// 					<ContactForm />
// 				</div>
// 				<div id='faq'>
// 					<Faq />
// 				</div>
// 				<div id='contact'>
// 					<Contacts />
// 				</div>
// 				<Container className='my-28'>
// 					<Banner />
// 				</Container>
// 			</main>
// 			<Footer />
// 		</div>
// 	)
// }
// export default Home
// import Container from '@components/container/Container'
// import Header from '@components/header/Header'
// import Hero from '@components/layouts/Hero'
// import Banner from '@components/layouts/banner/Banner'
// import ContactForm from '@components/layouts/contact-form/ContactForm'
// import Contacts from '@components/layouts/contacts/Contacts'
// import Faq from '@components/layouts/faq/Faq'
// import Feedback from '@components/layouts/feedback/Feedback'
// import Footer from '@components/layouts/footer/Footer'
// import Services from '@components/layouts/services/Services'
// import Steps from '@components/layouts/steps/Steps'
// import useLenis from '@hooks/useLenis'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useLayoutEffect, useRef } from 'react'
// gsap.registerPlugin(ScrollTrigger)
// function Home() {
// 	const heroRef = useRef(null)
// 	const nextRef = useRef(null)
// 	useLenis()
// 	useLayoutEffect(() => {
// 		const ctx = gsap.context(() => {
// 			// parallax hero background
// 			gsap.to('#hero .parallax-bg', {
// 				y: '-20%',
// 				scrollTrigger: {
// 					trigger: heroRef.current,
// 					start: 'top top',
// 					end: 'bottom top',
// 					scrub: true
// 				}
// 			})
// 			// hero content slight push
// 			gsap.to('#hero .hero-content', {
// 				y: '-10%',
// 				opacity: 0.7,
// 				scrollTrigger: {
// 					trigger: heroRef.current,
// 					start: 'top top',
// 					end: 'bottom top',
// 					scrub: true
// 				}
// 			})
// 			// next block reveal
// 			gsap.from(nextRef.current, {
// 				y: 100,
// 				opacity: 0,
// 				scrollTrigger: {
// 					trigger: nextRef.current,
// 					start: 'top 80%',
// 					end: 'top 50%',
// 					scrub: true
// 				}
// 			})
// 			// parallax between sections
// 			gsap.utils.toArray('.parallax-section').forEach(sec => {
// 				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// 				// @ts-ignore
// 				gsap.to(sec, {
// 					yPercent: -15,
// 					scrollTrigger: {
// 						trigger: sec,
// 						start: 'top bottom',
// 						end: 'bottom top',
// 						scrub: true
// 					}
// 				})
// 			})
// 		})
// 		return () => ctx.revert()
// 	}, [])
// 	return (
// 		<div className='wrapper'>
// 			<Header />
// 			<main>
// 				<div id='hero' ref={heroRef}>
// 					<Hero />
// 				</div>
// 				{/* Next block for scroll animation anchor */}
// 				<div ref={nextRef}>
// 					<Services isMobileSlider />
// 				</div>
// 				<div className='parallax-section overlap-next'>
// 					<Steps />
// 				</div>
// 				<div id='feedback' className='parallax-section overlap-next'>
// 					<Feedback />
// 				</div>
// 				<div id='payment' className='parallax-section'>
// 					<ContactForm />
// 				</div>
// 				<div id='faq'>
// 					<Faq />
// 				</div>
// 				<div id='contact' className='parallax-section'>
// 					<Contacts />
// 				</div>
// 				<Container className='parallax-section my-28'>
// 					<Banner />
// 				</Container>
// 			</main>
// 			<Footer />
// 		</div>
// 	)
// }
// export default Home
import Container from '@components/container/Container'
import Header from '@components/header/Header'
import Hero from '@components/layouts/Hero'
import Banner from '@components/layouts/banner/Banner'
import ContactForm from '@components/layouts/contact-form/ContactForm'
import Contacts from '@components/layouts/contacts/Contacts'
import Faq from '@components/layouts/faq/Faq'
import Feedback from '@components/layouts/feedback/Feedback'
import Footer from '@components/layouts/footer/Footer'
import Services from '@components/layouts/services/Services'
import Steps from '@components/layouts/steps/Steps'
import useLenis from '@hooks/useLenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function Home() {
	const heroRef = useRef(null)
	const nextRef = useRef(null)

	useLenis()

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Параллакс только для hero
			gsap.to('#hero .parallax-bg', {
				y: '-20%',
				scrollTrigger: {
					trigger: heroRef.current,
					start: 'top top',
					end: 'bottom top',
					scrub: true
				}
			})

			gsap.to('#hero .hero-content', {
				y: '-10%',
				opacity: 0.7,
				scrollTrigger: {
					trigger: heroRef.current,
					start: 'top top',
					end: 'bottom top',
					scrub: true
				}
			})

			// Next block reveal
			gsap.from(nextRef.current, {
				y: 100,
				opacity: 0,
				scrollTrigger: {
					trigger: nextRef.current,
					start: 'top 80%',
					end: 'top 50%',
					scrub: true
				}
			})

			// Параллакс для остальных секций отключен
		})

		return () => ctx.revert()
	}, [])

	return (
		<div className='wrapper overflow-x-hidden'>
			<Header />
			<main>
				<div id='hero' ref={heroRef}>
					<Hero />
				</div>

				{/* Next block for scroll animation anchor */}
				<div ref={nextRef}>
					<Services />
				</div>

				<div className='overlap-next'>
					<Steps />
				</div>

				<div id='feedback' className='overlap-next'>
					<Feedback />
				</div>

				<div id='payment'>
					<ContactForm />
				</div>

				<div id='faq'>
					<Faq />
				</div>

				<div id='contact'>
					<Contacts />
				</div>

				<Container className='my-28'>
					<Banner />
				</Container>
			</main>
			<Footer />
		</div>
	)
}

export default Home
