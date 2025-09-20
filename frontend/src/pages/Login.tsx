import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Login() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
			<Header />
			
			<section className="py-24 min-h-screen flex items-center">
				<div className="container-xl">
					<div className="max-w-md mx-auto">
						<div className="text-center mb-8">
							<h1 className="text-4xl font-bold mb-4 text-white">
								Welcome back
							</h1>
							<p className="text-gray-400">
								Sign in to your InFuture account
							</p>
						</div>
						
						<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
							<form className="space-y-6">
								<div>
									<label className="block text-white font-medium mb-2">Email</label>
									<input 
										type="email" 
										className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
										placeholder="your@email.com"
									/>
								</div>
								
								<div>
									<label className="block text-white font-medium mb-2">Password</label>
									<input 
										type="password" 
										className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
										placeholder="••••••••"
									/>
								</div>
								
								<div className="flex items-center justify-between">
									<label className="flex items-center">
										<input type="checkbox" className="rounded bg-white/5 border-white/20 text-primary-500 focus:ring-primary-500" />
										<span className="ml-2 text-gray-400 text-sm">Remember me</span>
									</label>
									<a href="#" className="text-primary-400 hover:text-primary-300 text-sm transition-colors duration-300">
										Forgot password?
									</a>
								</div>
								
								<button 
									type="submit"
									className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold py-3 rounded-xl hover:from-primary-500 hover:to-primary-400 transition-all duration-300 hover:scale-[1.02]"
								>
									Sign In
								</button>
								
								<div className="text-center">
									<span className="text-gray-400 text-sm">
										Don't have an account?{' '}
										<a href="#" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
											Sign up
										</a>
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
