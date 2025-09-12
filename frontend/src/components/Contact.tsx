export default function Contact() {
	return (
		<section id="contact" className="section">
			<div className="container-xl">
				<div className="grid gap-12 lg:grid-cols-2 items-center">
					<div className="animate-fade-in">
						<h2 className="heading-2 mb-6">
							Get your <span className="text-gradient">website built</span>
						</h2>
						<p className="body-large mb-8">
							Ready to build a professional website? Get a free quote and discover how our student-mentor model delivers quality results at affordable prices.
						</p>
						
						<div className="space-y-6">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<div>
									<h4 className="font-semibold text-white">Email</h4>
									<p className="text-neutral-400">hello@infuture.studio</p>
								</div>
							</div>
							
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-600 to-accent-500 flex items-center justify-center">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</div>
								<div>
									<h4 className="font-semibold text-white">Location</h4>
									<p className="text-neutral-400">Remote-first • Global reach</p>
								</div>
							</div>
							
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<div>
									<h4 className="font-semibold text-white">Response Time</h4>
									<p className="text-neutral-400">Free quote within 24 hours</p>
								</div>
							</div>
						</div>
					</div>
					
					<div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
						<form className="card-elevated p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
							<div className="text-center mb-6">
								<h3 className="text-xl font-semibold text-white mb-2">Get your free quote</h3>
								<p className="text-sm text-neutral-400">Tell us about your website needs and we'll get back to you within 24 hours</p>
							</div>
							
							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
									<input 
										className="w-full rounded-xl bg-white/[0.05] border border-white/10 px-4 py-3 text-white placeholder-neutral-500 outline-none ring-2 ring-transparent focus:ring-primary-500 focus:border-primary-400 transition-all duration-300" 
										placeholder="Your name" 
									/>
								</div>
								
								<div>
									<label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
									<input 
										type="email" 
										className="w-full rounded-xl bg-white/[0.05] border border-white/10 px-4 py-3 text-white placeholder-neutral-500 outline-none ring-2 ring-transparent focus:ring-primary-500 focus:border-primary-400 transition-all duration-300" 
										placeholder="you@company.com" 
									/>
								</div>
								
								<div>
									<label className="block text-sm font-medium text-neutral-300 mb-2">Website Type</label>
									<select className="w-full rounded-xl bg-white/[0.05] border border-white/10 px-4 py-3 text-white outline-none ring-2 ring-transparent focus:ring-primary-500 focus:border-primary-400 transition-all duration-300">
										<option value="">Select website type</option>
										<option value="business">Business Website</option>
										<option value="ecommerce">E-commerce Store</option>
										<option value="portfolio">Portfolio Site</option>
										<option value="landing">Landing Page</option>
										<option value="other">Other</option>
									</select>
								</div>
								
								<div>
									<label className="block text-sm font-medium text-neutral-300 mb-2">Tell us about your project</label>
									<textarea 
										className="w-full rounded-xl bg-white/[0.05] border border-white/10 px-4 py-3 text-white placeholder-neutral-500 outline-none ring-2 ring-transparent focus:ring-primary-500 focus:border-primary-400 transition-all duration-300" 
										rows={4} 
										placeholder="Describe your website needs, features, timeline, and budget"
									/>
								</div>
							</div>
							
							<button className="btn-primary w-full" type="submit">
								Get Free Quote
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
} 