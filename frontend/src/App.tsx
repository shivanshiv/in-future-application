import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JobApplicationAdmin from './components/JobApplicationAdmin';

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Workflow />} />
                    <Route path='/admin/applications' element={<JobApplicationAdmin />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}