import { Link } from 'react-router-dom';

export default function Hero() {
	return (
		<section className="relative overflow-hidden min-h-screen flex items-center">
			{/* Animated background */}
			<div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800"></div>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent"></div>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-900/20 via-transparent to-transparent"></div>
			
			{/* Floating particles effect */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400/30 rounded-full animate-float"></div>
				<div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent-400/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
				<div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary-300/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
			</div>
			
			<div className="container-xl relative z-10 py-20 sm:py-24">
				<div className="max-w-4xl mx-auto text-center">
					<div className="animate-fade-in">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-600/20 to-accent-500/20 border border-accent-400/30 backdrop-blur-sm mb-8">
							<div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
							<span className="text-sm font-medium text-accent-300">Software 3.0</span>
						</div>
						
						<h1 className="heading-1 mb-6 animate-slide-up">
							Build reliable websites with{' '}
							<span className="text-gradient">affordable excellence</span>
						</h1>
						
						<p className="body-large max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
							We are InFuture — your trusted partner for reliable and affordable website development. We deliver professional solutions while providing valuable internship opportunities for students to grow into skilled developers.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
							<Link to="/build-website" className="btn-primary">
								Start Building
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</Link>
							<Link to="/find-internship" className="btn-ghost">
								Student Opportunities
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
				
				{/* Stats section */}
				<div className="mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
						<div className="text-center">
							<div className="text-3xl font-bold text-gradient mb-2">100+</div>
							<div className="text-sm text-neutral-400">Websites Delivered</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-gradient-accent mb-2">30%</div>
							<div className="text-sm text-neutral-400">Cost Savings</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-gradient mb-2">50+</div>
							<div className="text-sm text-neutral-400">Student Interns Trained</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
} 