'use client'
import { FaArrowRightLong } from "react-icons/fa6";
const LogicBox = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto w-3/4 border rounded-lg border-[#1565C0] h-auto md:max-h-[72px]">
      <div className="w-full md:w-3/5 flex items-center p-1">
        <div className="flex items-center p-3">
          <h1 className="text-xl mr-2">Question 1:</h1>
          <FaArrowRightLong className="mr-3"/>
          <p>Option: </p>
          <FaArrowRightLong className="mx-3"/>
          <h1 className="text-xl mr-2">Question 2</h1>
        </div>
      </div>
      <div className="w-full md:w-2/5 flex items-end justify-center md:justify-end px-2">
        <div className="flex text-sm gap-2">
          <p className="cursor-pointer">Edit</p>
          <p className="cursor-pointer">Delete</p>
        </div>
      </div>
    </div>
  );
};

export default LogicBox;