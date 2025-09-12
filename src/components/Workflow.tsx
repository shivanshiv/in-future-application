const steps = [
	{ 
		n: '01', 
		title: 'Discovery & Planning', 
		desc: 'We understand your business needs, target audience, and goals. Students learn requirements gathering under expert guidance.',
		icon: '🔍'
	},
	{ 
		n: '02', 
		title: 'Design & Prototype', 
		desc: 'Create modern, responsive designs and interactive prototypes. Students practice UI/UX principles with senior oversight.',
		icon: '🎨'
	},
	{ 
		n: '03', 
		title: 'Development & Testing', 
		desc: 'Build your website using modern technologies with rigorous code reviews and quality assurance processes.',
		icon: '⚙️'
	},
	{ 
		n: '04', 
		title: 'Launch & Support', 
		desc: 'Deploy your website and provide ongoing support. Students gain real-world experience in maintenance and updates.',
		icon: '🚀'
	},
];

export default function Workflow() {
	return (
		<section id="workflow" className="section">
			<div className="container-xl">
				<div className="text-center mb-16">
					<h2 className="heading-2 mb-4">
						Our development <span className="text-gradient-accent">process</span>
					</h2>
					<p className="body-large max-w-2xl mx-auto">
						A proven four-step approach that delivers professional websites while providing hands-on learning for students.
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
							Professional quality + educational value in every project
						</span>
					</div>
				</div>
			</div>
		</section>
	);
} 