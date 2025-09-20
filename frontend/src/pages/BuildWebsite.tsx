import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
	{
		title: 'Business Websites',
		desc: 'Professional websites that represent your brand and convert visitors into customers.',
		features: ['Custom design', 'Mobile responsive', 'SEO optimized', 'Fast loading'],
		icon: '🏢',
		price: 'From $899'
	},
	{
		title: 'E-commerce Stores',
		desc: 'Complete online stores with payment processing, inventory management, and customer accounts.',
		features: ['Payment integration', 'Product catalog', 'Order management', 'Customer portal'],
		icon: '🛒',
		price: 'From $1,499'
	},
	{
		title: 'Portfolio Sites',
		desc: 'Showcase your work with stunning portfolio websites that highlight your skills and projects.',
		features: ['Gallery layouts', 'Project showcases', 'Contact forms', 'Social integration'],
		icon: '🎨',
		price: 'From $599'
	},
	{
		title: 'Landing Pages',
		desc: 'High-converting landing pages designed to capture leads and drive specific actions.',
		features: ['Conversion focused', 'A/B testing ready', 'Analytics integration', 'Fast deployment'],
		icon: '🚀',
		price: 'From $399'
	}
];

const technologies = [
	{ name: 'React', icon: '⚛️' },
	{ name: 'TypeScript', icon: '📘' },
	{ name: 'Tailwind CSS', icon: '🎨' },
	{ name: 'Next.js', icon: '▲' },
	{ name: 'Node.js', icon: '🟢' },
	{ name: 'MongoDB', icon: '🍃' }
];

export default function BuildWebsite() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
			<Header />
			
			{/* Hero Section - Business Style */}
			<section className="relative overflow-hidden pt-24">
				{/* Grid background pattern */}
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
				
				<div className="container-xl relative z-10 py-20">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-400/30 backdrop-blur-sm mb-6">
								<svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
								</svg>
								<span className="text-sm font-medium text-blue-300">Enterprise Website Solutions</span>
							</div>
							
							<h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
								Professional websites that{' '}
								<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
									drive results
								</span>
							</h1>
							
							<p className="text-xl text-gray-300 mb-8 leading-relaxed">
								Transform your business with custom websites built by our talented student developers under expert supervision. Get enterprise-quality results at a fraction of the cost.
							</p>
							
							<div className="flex flex-col sm:flex-row gap-4">
								<a href="#quote" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300 hover:scale-105 shadow-lg">
									Get Free Quote
									<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</a>
								<a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 border border-slate-600 text-gray-300 font-medium rounded-xl hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm">
									View Portfolio
									<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
							</div>
						</div>
						
						{/* Visual element */}
						<div className="relative">
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
								<div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8">
									<div className="space-y-4">
										<div className="flex items-center gap-3">
											<div className="w-3 h-3 bg-red-400 rounded-full"></div>
											<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
											<div className="w-3 h-3 bg-green-400 rounded-full"></div>
										</div>
										<div className="bg-slate-900/50 rounded-xl p-6 space-y-3">
											<div className="h-4 bg-gradient-to-r from-blue-400 to-transparent rounded w-3/4"></div>
											<div className="h-3 bg-gradient-to-r from-gray-400 to-transparent rounded w-1/2"></div>
											<div className="h-3 bg-gradient-to-r from-gray-500 to-transparent rounded w-2/3"></div>
											<div className="mt-4 grid grid-cols-2 gap-3">
												<div className="h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg"></div>
												<div className="h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Grid - Card Style */}
			<section id="services" className="py-24 bg-slate-800/30">
				<div className="container-xl">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4 text-white">
							Choose your <span className="text-blue-400">solution</span>
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							From simple landing pages to complex e-commerce platforms, we deliver exactly what your business needs.
						</p>
					</div>
					
					<div className="grid gap-6 lg:grid-cols-2">
						{services.map((service, index) => (
							<div 
								key={service.title} 
								className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
							>
								{/* Highlight for featured services */}
								{index === 1 && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
											Most Popular
										</div>
									</div>
								)}
								
								<div className="flex items-start gap-6">
									<div className="text-5xl group-hover:scale-110 transition-transform duration-300">
										{service.icon}
									</div>
									<div className="flex-1">
										<div className="flex items-center justify-between mb-4">
											<h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
												{service.title}
											</h3>
											<div className="text-right">
												<div className="text-2xl font-bold text-blue-400">{service.price}</div>
												<div className="text-sm text-gray-500">starting from</div>
											</div>
										</div>
										
										<p className="text-gray-300 mb-6 leading-relaxed">
											{service.desc}
										</p>
										
										<div className="grid grid-cols-2 gap-3 mb-6">
											{service.features.map((feature, featureIndex) => (
												<div key={featureIndex} className="flex items-center gap-2">
													<svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
														<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
													</svg>
													<span className="text-sm text-gray-300">{feature}</span>
												</div>
											))}
										</div>
										
										<button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300 hover:scale-[1.02]">
											Get Started
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Technology Stack - Modern Grid */}
			<section className="py-24">
				<div className="container-xl">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4 text-white">
							Built with cutting-edge <span className="text-cyan-400">technology</span>
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							We use industry-leading tools and frameworks to ensure your website is fast, secure, and scalable.
						</p>
					</div>
					
					<div className="grid grid-cols-3 md:grid-cols-6 gap-6">
						{technologies.map((tech, index) => (
							<div 
								key={tech.name} 
								className="group bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
									{tech.icon}
								</div>
								<div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
									{tech.name}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Quote Section */}
			<section id="quote" className="py-24 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
				<div className="container-xl">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl font-bold mb-6 text-white">
							Ready to transform your business online?
						</h2>
						<p className="text-xl text-gray-300 mb-12">
							Get a detailed quote tailored to your specific needs. Our team will analyze your requirements and provide a comprehensive proposal within 24 hours.
						</p>
						
						<div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
							<form className="grid md:grid-cols-2 gap-6">
								<input 
									type="text" 
									placeholder="Your Name" 
									className="bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
								/>
								<input 
									type="email" 
									placeholder="Email Address" 
									className="bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
								/>
								<select className="bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300">
									<option value="">Select Website Type</option>
									<option value="business">Business Website</option>
									<option value="ecommerce">E-commerce Store</option>
									<option value="portfolio">Portfolio Site</option>
									<option value="landing">Landing Page</option>
								</select>
								<input 
									type="text" 
									placeholder="Budget Range" 
									className="bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
								/>
								<textarea 
									placeholder="Tell us about your project..." 
									rows={4}
									className="md:col-span-2 bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
								></textarea>
								<button 
									type="submit"
									className="md:col-span-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-[1.02] shadow-lg"
								>
									Get Your Free Quote
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
} 