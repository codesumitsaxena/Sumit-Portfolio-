import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Navbtn = () => {
  const [active, setActive] = useState('home');
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', icon: <HomeIcon fontSize="small" />, label: 'Home', path: '/' },
    { id: 'about', icon: <InfoIcon fontSize="small" />, label: 'About', path: '/about' },
    { id: 'projects', icon: <WorkIcon fontSize="small" />, label: 'Projects', path: '/project' },
    { id: 'contact', icon: <ContactMailIcon fontSize="small" />, label: 'Contact', path: '/contact' },
  ];

  return (
    <div
      className="position-fixed bottom-0 start-50 translate-middle-x bg-white py-2 px-4 shadow d-flex justify-content-around w-100"
      style={{ zIndex: 1000, borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
    >
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`d-flex flex-column align-items-center ${active === item.id ? 'text-primary' : 'text-secondary'}`}
          onClick={() => {
            setActive(item.id);
            navigate(item.path);
          }}
          style={{ cursor: 'pointer' }}
        >
          <div style={{ color: active === item.id ? '#1976d2' : '#6c757d' }}>
            {item.icon}
          </div>
          <span
            className="mt-1"
            style={{
              fontSize: '0.75rem',
              fontWeight: active === item.id ? 'bold' : 'normal',
            }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navbtn;
