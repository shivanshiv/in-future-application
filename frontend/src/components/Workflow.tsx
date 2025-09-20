const steps = [
	{ 
		n: '01', 
		title: 'Student-Led Discovery', 
		desc: 'Students conduct initial client interviews and requirements gathering under senior mentorship, gaining real-world communication skills.',
		icon: '🔍'
	},
	{ 
		n: '02', 
		title: 'Collaborative Design', 
		desc: 'Students create initial designs and prototypes while experienced designers provide guidance and quality reviews.',
		icon: '🎨'
	},
	{ 
		n: '03', 
		title: 'Mentored Development', 
		desc: 'Students build core features with continuous code reviews and mentorship to ensure professional standards and learning outcomes.',
		icon: '⚙️'
	},
	{ 
		n: '04', 
		title: 'Quality Assurance & Launch', 
		desc: 'Our experienced team conducts thorough testing and final optimizations before launch, ensuring client satisfaction.',
		icon: '🚀'
	},
];

export default function Workflow() {
	return (
		<section id="workflow" className="section">
			<div className="container-xl">
				<div className="text-center mb-16">
					<h2 className="heading-2 mb-4">
						Our core <span className="text-gradient-accent">workflow</span>
					</h2>
					<p className="body-large max-w-3xl mx-auto">
						Students are involved in the initial stages of client web development projects to gain hands-on experience, while our company provides full quality assurance throughout the process.
					</p>
				</div>
				
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{steps.map((step, index) => (
						<div 
							key={step.n} 
							className="relative group"
						>
							{/* Connection line for desktop */}
							{index < steps.length - 1 && (
								<div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 z-0"></div>
							)}
							
							<div className="card p-8 relative z-10 group-hover:scale-105 transition-all duration-300">
								<div className="flex items-center gap-4 mb-4">
									<div className="text-3xl group-hover:scale-110 transition-transform duration-300">
										{step.icon}
									</div>
									<div className="text-primary-400 font-bold text-xl">
										{step.n}
									</div>
								</div>
								
								<h3 className="heading-3 text-white mb-3 group-hover:text-gradient transition-all duration-300">
									{step.title}
								</h3>
								
								<p className="body text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
									{step.desc}
								</p>
							</div>
						</div>
					))}
				</div>
				
				{/* Process flow visualization */}
				<div className="mt-16 text-center">
					<div className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass-effect">
						<div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
						<span className="text-sm font-medium text-neutral-300">
							Building dedicated internship pathways with focus on women engineers
						</span>
					</div>
				</div>
			</div>
		</section>
	);
} 