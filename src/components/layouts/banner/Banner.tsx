import { Button } from '@components/ui/button/Button'
import { useBreakpoint } from '@hooks/useBreakpoint'

const Banner = () => {
	const { isMobile } = useBreakpoint()
	return (
		<div className='bg-primary relative my-20 overflow-hidden rounded-3xl md:my-24 md:rounded-4xl lg:my-28'>
			<div className='relative z-1 p-12 pb-0 text-white md:w-1/2 md:p-[72px] md:pr-9'>
				<div className='mb-12 flex flex-col gap-4 lg:mb-14 lg:gap-6'>
					<h4 className='text-lg leading-[140%] font-medium md:text-xl lg:text-2xl'>
						How do I get a free estimate?
					</h4>
					<p className='leading-[140%]'>
						Free damage estimate, full insurance support, and
						professional repairs — all in one place. Let us handle
						the stress, while you get paid.
					</p>
				</div>
				<Button className='max-md:px-6'>Get My Free Estimate</Button>
			</div>
			<div className='top-0 right-0 h-[396px] w-full md:absolute md:h-full md:w-3/4 lg:w-1/2'>
				<img
					src={isMobile ? 'banner-mobile.webp' : 'banner.webp'}
					srcSet={
						isMobile
							? 'banner-mobile.webp 1x, banner-mobile@2x.webp 2x'
							: 'banner.webp 1x, banner@2x.webp 2x'
					}
					alt='banner'
					className='h-full w-full object-cover object-left'
				/>
			</div>
		</div>
	)
}

export default Banner
