'use client'

import { useEffect, useState } from 'react';
import AdminNavbar from '../components/navbar/AdminNavbar';
import Home from '../components/survey/Home';
import Edit from '../components/survey/Edit';
import Integrations from '../components/survey/Integrations';
import Results from '../components/survey/Results';
import Share from '../components/survey/Share';
import Profile from '../components/survey/Profile';
import authService from '../services/auth.service';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Survey = () => {
  const [activeMenu, setActiveMenu] = useState<string>('home');
  const [content, setContent] = useState<JSX.Element>();
  const router = useRouter();
  useEffect(() => {
    if (!authService.isLoggedIn()) {
      router.push('/');
      toast.error('You must be logged in to access!');
    }

    setContent(<Home toggleEdit={handleMenuChange}/>)
  }, []);

  const handleMenuChange = (menuName: string) => {
    setActiveMenu(menuName);
    switch (menuName) {
      case 'home':
        setContent(<Home toggleEdit={handleMenuChange}/>);
        break;
      case 'share':
        setContent(<Share toggleHome={handleMenuChange}/>);
        break;
      case 'profile':
          setContent(<Profile />);
          break;
      case 'edit':
        setContent(<Edit toggleHome={handleMenuChange}/>);
        break;
      case 'integrations':
        setContent(<Integrations toggleHome={handleMenuChange}/>);
        break;
      case 'results':
        setContent(<Results toggleHome={handleMenuChange}/>);
        break;
      default:
        setContent(<Home toggleEdit={handleMenuChange}/>);
    }
  };

  return (
    <div>
      <AdminNavbar activeMenu={activeMenu} onMenuChange={handleMenuChange} toggleEdit={handleMenuChange}/>
      {content}
    </div>
  );
};

export default Survey;