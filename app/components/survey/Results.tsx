'use client';

import Title from "../Title";
import Sidebar from "../sidebar/Sidebar";

const Results = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div>
                <Sidebar />
            </div>
            <div className="w-full md:ml-[238px] md:mt-[65px]">
                <Title title="Results"/>
            </div>
        </div>
    )
}

export default Results;