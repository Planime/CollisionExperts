import { create } from 'zustand'

interface ScrollStore {
	activeSection: string | null
	setActiveSection: (section: string) => void
	scrollToSection: (id: string) => void
}

export const useScrollStore = create<ScrollStore>(set => ({
	activeSection: null,

	setActiveSection: section => set({ activeSection: section }),

	scrollToSection: id => {
		const element = document.getElementById(id)
		const header = document.querySelector('header')
		const headerHeight = header ? header.clientHeight : 0

		if (element) {
			const top =
				element.getBoundingClientRect().top +
				window.scrollY -
				headerHeight

			// INSTANT SCROLL — NO SMOOTH ANIMATION
			window.scrollTo({
				top,
				behavior: 'auto' // IMPORTANT: disables slow smooth scroll
			})

			set({ activeSection: id })
		}
	}
}))
