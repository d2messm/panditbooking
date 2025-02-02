import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import PujaList from './components/PujaList';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import ProtectedRoute from './components/ProtectedRoute';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import ServicesPage from './pages/ServicesPage';
import PaymentPage from './pages/PaymentPage';
import PaymentInfoPage from './pages/PaymentInfoPage';
import BookingFlowPage from './pages/BookingFlowPage';
import PujaDetailPage from './pages/PujaDetailPage';
import BookingPuja from './pages/BookingPuja';
import CategoryPage from './pages/CategoryPage';
import { useBookingFlowStore } from './stores/bookingFlowStore';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TestimonialsPage from './components/Testimonials';
import Testimonials from './components/Testimonials';

function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <PujaList />
      <Testimonials />
    </div>
  );
}

// Create a protected route component
const ProtectedBookingRoute = () => {
  const { bookingDetails } = useBookingFlowStore();
  
  if (!bookingDetails.puja_id) {
    return <Navigate to="/services" replace />;
  }
  
  return <BookingFlowPage />;
};

function App() {
  return (
    <Router>
      <Layout className="sticky top-0 z-50 bg-white shadow-lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route 
            path="/booking-puja/:id" 
            element={
              <ProtectedRoute>
                <BookingPuja />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/book" 
            element={
              <ProtectedRoute>
                <ProtectedBookingRoute />
              </ProtectedRoute>
            } 
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route 
            path="/payment" 
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            } 
          />
          <Route path="/payment-info" element={<PaymentInfoPage />} />
          <Route path="/booking/:step" element={<BookingFlowPage />} />
          <Route path="/puja/:id" element={<PujaDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;