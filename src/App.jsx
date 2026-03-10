import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fundraiser from './pages/Fundraiser';
import CampaignDetail from './pages/CampaignDetail';
import Blog from './pages/Blog';
import DonationPage from './pages/DonationPage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import Transparency from './pages/Transparency';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fundraiser" element={<Fundraiser />} />
            <Route path="/campaign/:id" element={<CampaignDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/donate/:id" element={<DonationPage />} />
            <Route path="/contact" element={<ContactUs />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
