import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import RequestBlood from './pages/RequestBlood';
import DonateBlood from './pages/DonateBlood';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/request" element={<RequestBlood />} />
        <Route path="/donate" element={<DonateBlood />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}