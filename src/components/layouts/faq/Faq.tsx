import { faq } from '@assets/faq.data'
import Container from '@components/container/Container'
import Heading from '@components/heading/Heading'
import Accordion from '@components/ui/accordion/Accordion'

const Faq = () => {
	return (
		<section className='my-20 md:my-28'>
			<Container maxWidth={980}>
				<Heading className='mb-6 text-center md:mb-8 lg:mb-10'>
					FAQ
				</Heading>
				<div>
					<Accordion items={faq} />
				</div>
			</Container>
		</section>
	)
}

export default Faq
