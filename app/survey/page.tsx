'use client'

import { useState } from 'react';
import AdminNavbar from '../components/navbar/AdminNavbar';
import Home from '../components/survey/Home';
import Create from '../components/survey/Create';
import Integrations from '../components/survey/Integrations';
import Results from '../components/survey/Results';
import Share from '../components/survey/Share';
import Profile from '../components/survey/Profile';

const Survey = () => {
  const [activeMenu, setActiveMenu] = useState<string>('home');
  const [content, setContent] = useState<JSX.Element>(<Home />);

  const handleMenuChange = (menuName: string) => {
    setActiveMenu(menuName);
    switch (menuName) {
      case 'home':
        setContent(<Home />);
        break;
      case 'share':
        setContent(<Share />);
        break;
      case 'profile':
          setContent(<Profile />);
          break;
      case 'create':
        setContent(<Create />);
        break;
      case 'integrations':
        setContent(<Integrations />);
        break;
      case 'results':
        setContent(<Results />);
        break;
      default:
        setContent(<Home />);
    }
  };

  return (
    <div>
      <AdminNavbar activeMenu={activeMenu} onMenuChange={handleMenuChange}/>
      {content}
    </div>
  );
};

export default Survey;