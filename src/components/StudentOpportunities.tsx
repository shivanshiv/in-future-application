export default function StudentOpportunities() {
	return (
		<section id="student-opportunities" className="py-24 bg-slate-800">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
						Student <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Opportunities</span>
					</h2>
					<p className="text-lg text-gray-400">
						Join our mission to shape the future of software development while gaining valuable experience and building your career.
					</p>
				</div>

				{/* Opportunities Grid */}
				<div className="grid gap-8 lg:grid-cols-3 mb-16">
					{/* Web Development Internships */}
					<div className="bg-slate-700 border border-slate-600 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
						<div className="text-4xl mb-6">💻</div>
						<h3 className="text-xl font-bold text-white mb-4">Web Development Internships</h3>
						<p className="text-gray-300 mb-6">
							Work on real client projects while learning modern web technologies. Get hands-on experience with React, Node.js, and cutting-edge tools.
						</p>
						<ul className="space-y-2 mb-6">
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
								Real project experience
							</li>
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
								Mentorship from senior developers
							</li>
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
								Flexible schedules for students
							</li>
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
								Portfolio development
							</li>
						</ul>
						<a 
							href="/find-internship"
							className="inline-flex items-center justify-center w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors duration-300"
						>
							Apply Now
						</a>
					</div>

					{/* AI & Software 3.0 Training */}
					<div className="bg-slate-700 border border-slate-600 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
						<div className="text-4xl mb-6">🤖</div>
						<h3 className="text-xl font-bold text-white mb-4">AI & Software 3.0 Training</h3>
						<p className="text-gray-300 mb-6">
							Learn the future of software development where AI agents collaborate with humans to build meaningful applications.
						</p>
						<ul className="space-y-2 mb-6">
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
								Next-generation programming paradigms
							</li>
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
								AI-augmented development workflows
							</li>
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
								Industry-standard practices
							</li>
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
								Compliance-first approach
							</li>
						</ul>
						<a 
							href="/find-internship"
							className="inline-flex items-center justify-center w-full px-6 py-3 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition-colors duration-300"
						>
							Learn More
						</a>
					</div>

					{/* Women in Tech Program */}
					<div className="bg-slate-700 border border-slate-600 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300">
						<div className="text-4xl mb-6">👩‍💻</div>
						<h3 className="text-xl font-bold text-white mb-4">Women in Tech Program</h3>
						<p className="text-gray-300 mb-6">
							Dedicated support and opportunities for women engineers to thrive in the tech industry with mentorship and career guidance.
						</p>
						<ul className="space-y-2 mb-6">
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-pink-400 rounded-full"></div>
								Dedicated mentorship programs
							</li>
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-pink-400 rounded-full"></div>
								Leadership development
							</li>
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-pink-400 rounded-full"></div>
								Networking opportunities
							</li>
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<div className="w-2 h-2 bg-pink-400 rounded-full"></div>
								Career advancement support
							</li>
						</ul>
						<a 
							href="/find-internship"
							className="inline-flex items-center justify-center w-full px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors duration-300"
						>
							Join Program
						</a>
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center">
					<div className="bg-slate-700 border border-slate-600 rounded-2xl p-12 max-w-2xl mx-auto">
						<div className="text-5xl mb-6">🚀</div>
						<h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
						<p className="text-gray-300 mb-8">
							Join our community of student developers and help shape the future of Software 3.0.
						</p>
						<a 
							href="/find-internship"
							className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
						>
							Explore All Opportunities
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
