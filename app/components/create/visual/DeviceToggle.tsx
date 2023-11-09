'use client';

import React, { useState } from 'react';
import { AiOutlineDesktop, AiOutlineMobile } from 'react-icons/ai';
import DesktopVisual from './DesktopVisual';
import MobileVisual from './MobileVisual';

const DeviceToggle = () => {
  const [activeIcon, setActiveIcon] = useState('desktop');

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
  };

  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="flex justify-center p-1 gap-3 w-1/3">
          <AiOutlineMobile
            size={25}
            className={`cursor-pointer ${
              activeIcon === 'mobile' ? 'text-[#1565C0]' : ''
            }`}
            onClick={() => handleIconClick('mobile')}
          />
          <AiOutlineDesktop
            size={25}
            className={`cursor-pointer ${
              activeIcon === 'desktop' ? 'text-[#1565C0]' : ''
            }`}
            onClick={() => handleIconClick('desktop')}
          />
        </div>
      </div>
      <div className="h-auto md:h-[480px]">
        {activeIcon === 'mobile' ? <MobileVisual /> : <DesktopVisual />}
      </div>
    </div>
  );
};

export default DeviceToggle;