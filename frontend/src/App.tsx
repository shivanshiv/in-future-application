import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Problems />
				<Workflow />
				<Contact />
			</main>
			<Footer />
		</>
	);
} 