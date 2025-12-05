import { stepsList } from '@assets/steps.data'
import BeforeAfterSlider from '@components/before-after-slider/BeforeAfterSlider'
import Container from '@components/container/Container'
import Heading from '@components/heading/Heading'

import StepItem from './StepItem'

const Steps = () => {
	return (
		<section className='my-20 md:my-24 lg:my-28'>
			<Container>
				<Heading className='mb-8 lg:text-center'>
					How it works <span className='text-accent'>3 steps</span>
				</Heading>
				<div className='mb-20 flex flex-col gap-10 md:mb-26 lg:mb-32 lg:flex-row'>
					{stepsList.map((step, index) => (
						<StepItem step={step} key={index} idx={index} />
					))}
				</div>
				<BeforeAfterSlider before='before.webp' after='after.webp' />
			</Container>
		</section>
	)
}

export default Steps
