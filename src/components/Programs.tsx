const visionPoints = [
	{
		title: 'From Software 1.0 to 3.0 Evolution',
		desc: 'Traditional software development relies on explicit programming (Software 1.0). AI introduced neural networks and data-driven development (Software 2.0). We are pioneering Software 3.0 - where AI agents collaborate with humans to build meaningful applications.',
		features: [
			'Teaching next-generation programming paradigms',
			'Bridging the gap between academic and industry practices',
			'Preparing students for the AI-augmented future',
			'Creating human-centered AI development workflows'
		],
		icon: '🚀',
		highlight: 'Primary'
	},
	{
		title: 'Empowering Student Developers',
		desc: 'We believe the future of software belongs to those who understand both human needs and AI capabilities. Our mission is to guide students in this transition while solving real industry problems.',
		features: [
			'Real client projects with mentorship and quality assurance',
			'Hands-on experience with cutting-edge AI tools',
			'Dedicated internship pathways for women engineers',
			'Building the next generation of Software 3.0 developers'
		],
		icon: '💡',
		highlight: 'Accent'
	}
];

export default function Programs() {
	return (
		<section id="programs" className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
			</div>

			<div className="container-xl relative z-10">
				{/* Header Section */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30 backdrop-blur-sm">
						<span className="relative flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
						</span>
						<span className="text-sm font-bold text-purple-300 uppercase tracking-wider">Software 3.0 Vision</span>
					</div>
					
					<h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
						Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">vision</span> for the future
					</h2>
					<p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
						We are shaping the next era of software development by bridging AI and human creativity, while empowering students to become the builders of tomorrow's technology landscape.
					</p>
				</div>
				
				{/* Vision Cards */}
				<div className="grid gap-12 lg:grid-cols-2 mb-20">
					{visionPoints.map((vision, index) => (
						<div 
							key={vision.title} 
							className="group relative"
							style={{ animationDelay: `${index * 0.3}s` }}
						>
							{/* Card Background */}
							<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 rounded-3xl group-hover:border-purple-500/50 transition-all duration-500"></div>
							
							{/* Hover Glow Effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/5 rounded-3xl transition-all duration-500"></div>
							
							<div className="relative z-10 p-10">
								{/* Icon */}
								<div className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center text-4xl backdrop-blur-sm border border-purple-400/20 group-hover:scale-110 transition-transform duration-300">
									{vision.icon}
								</div>
								
								{/* Content */}
								<h3 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors duration-300">
									{vision.title}
								</h3>
								<p className="text-lg text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
									{vision.desc}
								</p>
								
								{/* Features */}
								<div className="space-y-4 mb-8">
									{vision.features.map((feature, featureIndex) => (
										<div 
											key={featureIndex}
											className="flex items-start gap-4 group/feature"
										>
											<div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 group-hover/feature:scale-125 transition-transform duration-300 flex-shrink-0"></div>
											<span className="text-gray-400 group-hover/feature:text-gray-300 transition-colors duration-300 leading-relaxed">
												{feature}
											</span>
										</div>
									))}
								</div>
								
								{/* Button */}
								<a 
									href="/find-internship"
									className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
								>
									Explore Details
									<svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</a>
							</div>
						</div>
					))}
				</div>
				
				{/* Call to Action */}
				<div className="text-center">
					<div className="inline-block p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-500 max-w-lg mx-auto group">
						<div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center text-3xl backdrop-blur-sm border border-purple-400/20 group-hover:scale-110 transition-transform duration-300">
							🌟
						</div>
						<h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
							Ready to build the future?
						</h4>
						<p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
							Join our community of next-generation developers and help shape Software 3.0
						</p>
						<a 
							href="/find-internship"
							className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group-hover:scale-105"
						>
							Explore Opportunities
							<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}