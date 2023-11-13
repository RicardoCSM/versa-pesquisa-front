'use client';

const Pagination = () => {
    return (
        <div>
            <ul className="inline-flex -space-x-px text-sm h-8">
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-700 border border-gray-700 rounded-l-lg hover:text-gray-700">Previous</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 border border-gray-700 hover:text-gray-700">1</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 border border-gray-700 hover:text-gray-700">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-gray-700 border border-gray-700">3</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 border border-gray-700 hover:text-gray-700">4</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 border border-gray-700 hover:text-gray-700">5</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 border border-gray-700 rounded-r-lg hover:text-gray-700">Next</a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;