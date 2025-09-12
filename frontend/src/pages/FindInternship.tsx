import Header from '@/components/Header';
import Footer from '@/components/Footer';

const stats = [
	{ value: '50+', label: 'Students Hired' },
	{ value: '100+', label: 'Projects Completed' },
	{ value: '$25/hr', label: 'Starting Pay' },
	{ value: '95%', label: 'Hire Rate' }
];

const benefits = [
	{
		title: 'Paid Experience',
		desc: 'Earn competitive wages while gaining valuable real-world experience working on client projects.',
		icon: '💰'
	},
	{
		title: 'Expert Mentorship',
		desc: 'Learn directly from senior developers with years of industry experience and proven track records.',
		icon: '🧑‍🏫'
	},
	{
		title: 'Portfolio Projects',
		desc: 'Build an impressive portfolio with real client work that showcases your skills to future employers.',
		icon: '📁'
	},
	{
		title: 'Flexible Schedule',
		desc: 'Work part-time hours that fit around your class schedule and academic commitments.',
		icon: '🕐'
	},
	{
		title: 'Career Network',
		desc: 'Connect with industry professionals, clients, and other talented students in the tech field.',
		icon: '🌐'
	},
	{
		title: 'Skills Development',
		desc: 'Master cutting-edge technologies and frameworks used by top companies worldwide.',
		icon: '⚡'
	}
];

const skills = [
	{ name: 'React', icon: '⚛️' },
	{ name: 'TypeScript', icon: '📘' },
	{ name: 'Node.js', icon: '🟢' },
	{ name: 'Tailwind', icon: '🎨' },
	{ name: 'Next.js', icon: '▲' },
	{ name: 'MongoDB', icon: '🍃' },
	{ name: 'Figma', icon: '🎯' },
	{ name: 'Git', icon: '📊' }
];

export default function FindInternship() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900">
			<Header />
			
			{/* Hero Section - Student-Focused */}
			<section className="relative overflow-hidden pt-24">
				{/* Animated background elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
					<div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
				</div>
				
				<div className="container-xl relative z-10 py-20">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600/20 to-pink-600/20 border border-violet-400/30 backdrop-blur-sm mb-8">
								<span className="relative flex h-3 w-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
								</span>
								<span className="text-sm font-bold text-pink-300 uppercase tracking-wider">Now Hiring Students</span>
							</div>
							
							<h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
								<span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
									Launch
								</span>{' '}
								<span className="text-white">your tech career</span>
							</h1>
							
							<p className="text-xl text-gray-300 mb-8 leading-relaxed">
								Join our innovative team and gain real-world experience building websites for actual clients. Get paid while you learn from industry experts and build an impressive portfolio.
							</p>
							
							<div className="flex flex-col sm:flex-row gap-4">
								<a href="#apply" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-violet-500/25">
									Apply Now
									<svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</a>
								<a href="#benefits" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
									Learn More
									<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
								</a>
							</div>
						</div>
						
						{/* Visual Stats */}
						<div className="relative">
							<div className="grid grid-cols-2 gap-6">
								{stats.map((stat, index) => (
									<div 
										key={stat.label}
										className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
										style={{ animationDelay: `${index * 0.2}s` }}
									>
										<div className="text-4xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
											{stat.value}
										</div>
										<div className="text-gray-300 font-medium">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section - Card Grid */}
			<section id="benefits" className="py-24 bg-black/20">
				<div className="container-xl">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-black mb-6 text-white">
							Why students <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">love</span> working with us
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							We provide everything you need to grow as a developer while earning money and building real projects.
						</p>
					</div>
					
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{benefits.map((benefit) => (
							<div 
								key={benefit.title} 
								className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
							>
								{/* Hover effect background */}
								<div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-pink-600/0 group-hover:from-violet-600/10 group-hover:to-pink-600/5 transition-all duration-500"></div>
								
								<div className="relative z-10">
									<div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
										{benefit.icon}
									</div>
									
									<h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors duration-300">
										{benefit.title}
									</h3>
									
									<p className="text-gray-300 leading-relaxed">
										{benefit.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Skills Section - Interactive */}
			<section className="py-24">
				<div className="container-xl">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-black mb-6 text-white">
							Skills you'll <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">master</span>
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Work with cutting-edge technologies and frameworks used by top tech companies worldwide.
						</p>
					</div>
					
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
						{skills.map((skill, index) => (
							<div 
								key={skill.name} 
								className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 cursor-pointer"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
									{skill.icon}
								</div>
								<div className="font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 text-sm">
									{skill.name}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Application Form - Modern Design */}
			<section id="apply" className="py-24 bg-gradient-to-r from-violet-900/50 to-pink-900/50">
				<div className="container-xl">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-5xl font-black mb-6 text-white">
								Ready to <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">join us</span>?
							</h2>
							<p className="text-xl text-gray-300">
								Fill out the application below and we'll get back to you within 24 hours. No experience required - just passion and willingness to learn!
							</p>
						</div>
						
						<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label className="block text-white font-semibold mb-2">Full Name</label>
										<input 
											type="text" 
											className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none transition-colors duration-300"
											placeholder="John Doe"
										/>
									</div>
									<div>
										<label className="block text-white font-semibold mb-2">Email</label>
										<input 
											type="email" 
											className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none transition-colors duration-300"
											placeholder="john@example.com"
										/>
									</div>
								</div>
								
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label className="block text-white font-semibold mb-2">University/College</label>
										<input 
											type="text" 
											className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none transition-colors duration-300"
											placeholder="MIT"
										/>
									</div>
									<div>
										<label className="block text-white font-semibold mb-2">Year of Study</label>
										<select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-violet-500 focus:outline-none transition-colors duration-300">
											<option value="" className="bg-gray-800">Select Year</option>
											<option value="1" className="bg-gray-800">1st Year</option>
											<option value="2" className="bg-gray-800">2nd Year</option>
											<option value="3" className="bg-gray-800">3rd Year</option>
											<option value="4" className="bg-gray-800">4th Year</option>
											<option value="graduate" className="bg-gray-800">Graduate</option>
										</select>
									</div>
								</div>
								
								<div>
									<label className="block text-white font-semibold mb-2">Programming Experience</label>
									<textarea 
										placeholder="Tell us about your coding experience, projects you've worked on, languages you know..." 
										rows={4}
										className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none transition-colors duration-300 resize-none"
									></textarea>
								</div>
								
								<div>
									<label className="block text-white font-semibold mb-2">Portfolio/GitHub (Optional)</label>
									<input 
										type="url" 
										className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none transition-colors duration-300"
										placeholder="https://github.com/yourusername"
									/>
								</div>
								
								<div>
									<label className="block text-white font-semibold mb-2">Why do you want to join InFuture?</label>
									<textarea 
										placeholder="Share your motivation and what you hope to achieve..." 
										rows={4}
										className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none transition-colors duration-300 resize-none"
									></textarea>
								</div>
								
								<button 
									type="submit"
									className="w-full bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-violet-500/25"
								>
									Submit Application 🚀
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
