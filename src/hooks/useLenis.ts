// /src/libs/useLenis.ts
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export default function useLenis() {
	useEffect(() => {
		const lenis = new Lenis({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			smooth: true,
			duration: 0.7,
			easing: t => t
		})

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)

		return () => lenis.destroy()
	}, [])
}
