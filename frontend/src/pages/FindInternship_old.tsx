import Header from '@/components/Header';
import Footer from '@/components/Footer';

const opportunities = [
	{
		title: 'Frontend Developer Intern',
		desc: 'Work on client websites using React, TypeScript, and modern CSS frameworks.',
		requirements: ['Basic HTML/CSS/JavaScript', 'React fundamentals', 'Eager to learn'],
		benefits: ['Real project experience', 'Senior mentorship', 'Portfolio development'],
		icon: '💻',
		level: 'Beginner'
	},
	{
		title: 'Full-Stack Developer Intern',
		desc: 'Build complete web applications from frontend to backend with database integration.',
		requirements: ['JavaScript proficiency', 'Node.js basics', 'Database concepts'],
		benefits: ['End-to-end development', 'Technical leadership', 'Architecture exposure'],
		icon: '🚀',
		level: 'Intermediate'
	},
	{
		title: 'UI/UX Design Intern',
		desc: 'Create beautiful, user-friendly designs and collaborate with developers on implementation.',
		requirements: ['Design tools (Figma)', 'Basic design principles', 'Creative mindset'],
		benefits: ['Design portfolio', 'Client interaction', 'Design-dev collaboration'],
		icon: '🎨',
		level: 'Beginner'
	}
];

const benefits = [
	{
		title: 'Real Project Experience',
		desc: 'Work on actual client websites, not practice projects',
		icon: '🏗️'
	},
	{
		title: 'Expert Mentorship',
		desc: 'Learn from senior developers with industry experience',
		icon: '👨‍🏫'
	},
	{
		title: 'Flexible Schedule',
		desc: 'Part-time opportunities that fit your academic schedule',
		icon: '⏰'
	},
	{
		title: 'Portfolio Building',
		desc: 'Build an impressive portfolio with real client work',
		icon: '📂'
	},
	{
		title: 'Industry Network',
		desc: 'Connect with professionals and other aspiring developers',
		icon: '🤝'
	},
	{
		title: 'Career Guidance',
		desc: 'Get advice on career paths and job opportunities',
		icon: '🎯'
	}
];

export default function FindInternship() {
	return (
		<div className="min-h-screen">
			<Header />
			
			{/* Hero Section */}
			<section className="relative overflow-hidden min-h-screen flex items-center">
				<div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800"></div>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-900/20 via-transparent to-transparent"></div>
				
				<div className="container-xl relative z-10 py-20">
					<div className="max-w-4xl mx-auto text-center">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600/20 to-primary-500/20 border border-primary-400/30 backdrop-blur-sm mb-8">
							<div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
							<span className="text-sm font-medium text-primary-300">Student Opportunities</span>
						</div>
						
						<h1 className="heading-1 mb-6">
							Launch your career with{' '}
							<span className="text-gradient">real experience</span>
						</h1>
						
						<p className="body-large max-w-3xl mx-auto mb-10">
							Join our internship program and work on real client projects while learning from experienced developers. Build your portfolio, gain valuable skills, and start your tech career.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a href="#opportunities" className="btn-primary">
								View Opportunities
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
								</svg>
							</a>
							<a href="#apply" className="btn-ghost">
								Apply Now
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="section-alt">
				<div className="container-xl">
					<div className="text-center mb-16">
						<h2 className="heading-2 mb-4">
							Why intern with <span className="text-gradient">InFuture</span>?
						</h2>
						<p className="body-large max-w-2xl mx-auto">
							We provide real-world experience, mentorship, and career growth opportunities that prepare you for success in tech.
						</p>
					</div>
					
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{benefits.map((benefit, index) => (
							<div 
								key={benefit.title} 
								className="card p-6 group hover:scale-105 transition-all duration-300"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
									{benefit.icon}
								</div>
								<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
									{benefit.title}
								</h3>
								<p className="body text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
									{benefit.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Opportunities Section */}
			<section id="opportunities" className="section">
				<div className="container-xl">
					<div className="text-center mb-16">
						<h2 className="heading-2 mb-4">
							Current <span className="text-gradient-accent">opportunities</span>
						</h2>
						<p className="body-large max-w-2xl mx-auto">
							Choose from various internship positions that match your skills and interests.
						</p>
					</div>
					
					<div className="grid gap-8 lg:grid-cols-3">
						{opportunities.map((opportunity, index) => (
							<div 
								key={opportunity.title} 
								className="card-elevated p-8 group hover:scale-105 transition-all duration-300"
								style={{ animationDelay: `${index * 0.2}s` }}
							>
								<div className="flex items-center gap-4 mb-6">
									<div className="text-4xl group-hover:scale-110 transition-transform duration-300">
										{opportunity.icon}
									</div>
									<div>
										<div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent-600/20 text-accent-300 border border-accent-400/30 mb-2">
											{opportunity.level}
										</div>
										<h3 className="heading-3 text-white group-hover:text-gradient transition-all duration-300">
											{opportunity.title}
										</h3>
									</div>
								</div>
								
								<p className="body text-neutral-300 mb-6 group-hover:text-neutral-200 transition-colors duration-300">
									{opportunity.desc}
								</p>
								
								<div className="space-y-4 mb-6">
									<div>
										<h4 className="font-medium text-white mb-2">Requirements</h4>
										<div className="space-y-1">
											{opportunity.requirements.map((req, reqIndex) => (
												<div key={reqIndex} className="flex items-center gap-2">
													<div className="w-2 h-2 bg-primary-400 rounded-full"></div>
													<span className="text-sm text-neutral-400">{req}</span>
												</div>
											))}
										</div>
									</div>
									
									<div>
										<h4 className="font-medium text-white mb-2">Benefits</h4>
										<div className="space-y-1">
											{opportunity.benefits.map((benefit, benefitIndex) => (
												<div key={benefitIndex} className="flex items-center gap-2">
													<div className="w-2 h-2 bg-accent-400 rounded-full"></div>
													<span className="text-sm text-neutral-400">{benefit}</span>
												</div>
											))}
										</div>
									</div>
								</div>
								
								<button className="btn-primary w-full">
									Apply Now
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Application Process */}
			<section className="section-alt">
				<div className="container-xl">
					<div className="text-center mb-16">
						<h2 className="heading-2 mb-4">
							Simple <span className="text-gradient">application process</span>
						</h2>
						<p className="body-large max-w-2xl mx-auto">
							Getting started is easy. Follow these steps to begin your internship journey with us.
						</p>
					</div>
					
					<div className="grid gap-8 md:grid-cols-4">
						{['Apply Online', 'Skills Assessment', 'Interview', 'Start Learning'].map((step, index) => (
							<div key={step} className="text-center relative">
								{index < 3 && (
									<div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 z-0"></div>
								)}
								<div className="relative z-10">
									<div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
										{index + 1}
									</div>
									<h3 className="text-lg font-semibold text-white mb-2">{step}</h3>
									<p className="text-sm text-neutral-400">
										{index === 0 && 'Submit your application and portfolio'}
										{index === 1 && 'Complete a brief skills evaluation'}
										{index === 2 && 'Meet with our team for a chat'}
										{index === 3 && 'Begin your learning journey'}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section id="apply" className="section">
				<div className="container-xl">
					<div className="text-center max-w-3xl mx-auto">
						<h2 className="heading-2 mb-6">
							Ready to start your <span className="text-gradient">career journey</span>?
						</h2>
						<p className="body-large mb-8">
							Join our community of aspiring developers and start building your future in tech today.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a href="#contact" className="btn-primary">
								Apply Now
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
							<a href="/build-website" className="btn-ghost">
								View Our Work
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
} 