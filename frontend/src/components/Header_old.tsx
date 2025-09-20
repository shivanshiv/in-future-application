import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	const [open, setOpen] = useState(false);
	
	return (
		<header className="sticky top-0 z-50 glass-effect border-b border-white/20">
			<div className="container-xl flex h-16 items-center justify-between">
				<Link to="/" className="flex items-center gap-3 text-white group">
					<div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
						<div className="w-3 h-3 bg-white rounded-sm"></div>
					</div>
					<span className="text-xl font-bold tracking-tight group-hover:text-gradient transition-all duration-300">
						InFuture
					</span>
				</Link>
				
				<div className="hidden items-center gap-2 text-sm text-neutral-300 md:flex">
					<Link 
						to="/login" 
						className="btn-primary"
					>
						Login
					</Link>
				</div>
						>
							{item.label}
						</Link>
					))}
					<Link 
						to="/login" 
						className="btn-primary ml-2"
					>
						Login
					</Link>
				</nav>
				
				<button 
					className="md:hidden rounded-xl p-2 hover:bg-white/10 transition-colors duration-300" 
					onClick={() => setOpen((prev) => !prev)} 
					aria-label="Toggle menu"
				>
					<svg 
						width="20" 
						height="20" 
						viewBox="0 0 24 24" 
						fill="none" 
						className={`text-white transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
					>
						<path 
							stroke="currentColor" 
							strokeWidth="1.5" 
							d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
						/>
					</svg>
				</button>
			</div>
			
			{/* Mobile menu */}
			<div className={`md:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur-xl transition-all duration-300 ${
				open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
			}`}>
				<div className="container-xl flex flex-col gap-2 py-4">
					{nav.slice(0, 2).map((item) => (
						<Link 
							key={item.href} 
							to={item.href} 
							onClick={() => setOpen(false)} 
							className="btn-ghost w-full text-left transition-all duration-300 hover:scale-105"
						>
							{item.label}
						</Link>
					))}
					<Link 
						to="/login" 
						onClick={() => setOpen(false)} 
						className="btn-primary w-full mt-2"
					>
						Login
					</Link>
				</div>
			</div>
		</header>
	);
} 