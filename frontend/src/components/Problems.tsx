const items = [
	{
		title: 'Outdated Software Models',
		desc: 'Traditional software industry and universities still teach outdated Software 1.0 models. We introduce Software 3.0 as a better direction for the industry.',
		icon: '🔄'
	},
	{
		title: 'AI Tools Without Communication',
		desc: 'Many companies jump into AI tools without meaningful client communication, and compliance restrictions prevent direct application. We ensure compliant AI integration.',
		icon: '⚡'
	},
	{
		title: 'Education Gap in Industry',
		desc: 'Schools lag behind industry development. We involve students in real client projects for hands-on experience while providing full quality assurance.',
		icon: '🎓'
	},
];

export default function Problems() {
	return (
		<section id="problems" className="section-alt">
			<div className="container-xl">
				<div className="text-center mb-16">
					<h2 className="heading-2 mb-4">
						Industry <span className="text-gradient">challenges</span> we tackle
					</h2>
					<p className="body-large max-w-2xl mx-auto">
						We are tackling three main problems in the software industry and education, bridging the gap between outdated practices and future-ready solutions.
					</p>
				</div>
				
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{items.map((item, index) => (
						<div 
							key={item.title} 
							className="card-elevated p-8 group hover:scale-105 transition-all duration-300"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
								{item.icon}
							</div>
							<h3 className="heading-3 text-white mb-4 group-hover:text-gradient transition-all duration-300">
								{item.title}
							</h3>
							<p className="body text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
} 