'use client'

import { GrAddCircle } from 'react-icons/gr';

const LogicNew = () => {
  return (
    <div className="flex mx-auto w-3/4 h-auto md:max-h-[72px]">
        <div className="flex items-center cursor-pointer">
          <GrAddCircle size={24} className="mr-2"/>
          <p>Add a new element</p>
        </div>
    </div>
  );
};

export default LogicNew;