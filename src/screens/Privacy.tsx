const Privacy = () => {
	return (
		<div className="px-6 py-12 md:px-16 lg:px-32 max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

			<p className="mb-4">
				<b>Collision Experts</b> (“we”, “us”, or “our”) is committed to protecting
				your privacy. This Privacy Policy explains how we collect, use, store, and
				protect information submitted through our website, including our contact
				form and any uploaded files.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-3">Information We Collect</h2>
			<ul className="list-disc pl-6 mb-4">
				<li>Name</li>
				<li>Email address</li>
				<li>Phone number</li>
				<li>Message contents</li>
				<li>Uploaded files (photos, documents)</li>
				<li>
					Technical data collected by Google reCAPTCHA (IP address, device
					information)
				</li>
			</ul>

			<h2 className="text-2xl font-semibold mt-8 mb-3">How We Use Information</h2>
			<ul className="list-disc pl-6 mb-4">
				<li>Responding to your inquiry</li>
				<li>Providing estimates and customer service</li>
				<li>Reviewing uploaded files</li>
				<li>Protecting our website from spam and abuse</li>
			</ul>

			<h2 className="text-2xl font-semibold mt-8 mb-3">Sharing Information</h2>
			<p className="mb-4">We only share your data with:</p>
			<ul className="list-disc pl-6 mb-4">
				<li>EmailJS (form processing and email delivery)</li>
				<li>Google reCAPTCHA (spam protection)</li>
			</ul>

			<h2 className="text-2xl font-semibold mt-8 mb-3">Data Retention</h2>
			<p className="mb-4">
				We retain your information only as long as needed to respond to your
				request or as required by law.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-3">Your Rights</h2>
			<ul className="list-disc pl-6 mb-4">
				<li>Request a copy of your data</li>
				<li>Ask us to delete your data</li>
			</ul>
			<p className="mb-4">
				To exercise these rights contact us at:{' '}
				<b>collisionexperts.claims@gmail.com</b>
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-3">Consent</h2>
			<p className="mb-4">
				By submitting your information through our website, you consent to the
				collection and use of your data as described in this policy.
			</p>

			<p className="mt-10 text-sm text-gray-500">
				This site is protected by reCAPTCHA and the Google{' '}
				<a
					className="underline"
					target="_blank"
					href="https://policies.google.com/privacy"
				>
					Privacy Policy
				</a>{' '}
				and{' '}
				<a
					className="underline"
					target="_blank"
					href="https://policies.google.com/terms"
				>
					Terms of Service
				</a>{' '}
				apply.
			</p>
		</div>
	)
}

export default Privacy
