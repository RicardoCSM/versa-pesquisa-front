'use client';

import Sidebar from "../sidebar/Sidebar";

const Results = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div>
                <Sidebar />
            </div>
            <div>
                <h1>Results</h1>
            </div>
        </div>
    )
}

export default Results;