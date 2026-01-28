import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VisionMission from './pages/VisionMission';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import MemberProfile from './pages/MemberProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-x-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vandm" element={<VisionMission />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/member/:id" element={<MemberProfile />} />
        </Routes>

        <footer className="py-8 text-center text-gray-400 dark:text-gray-500 text-sm mt-12 border-t dark:border-gray-800">
          <p>&copy; 2024 Jengset Dev Group. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
