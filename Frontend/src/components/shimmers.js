import React from 'react';
import Loader from "./Loader"
const Shimmer = () => {
    return (
        <div className='w-[1200px] flex flex-col'>
            <div className='bg-gray-800 w-full h-[300px]'>
                <Loader />
            </div>
            <div className="flex mt-6 animate-pulse justify-center">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="w-[250px] h-[280px] mx-6 rounded-lg flex flex-col justify-between p-4">
                        <div className="h-[60%] bg-gray-300 rounded-lg"></div>
                        <div className="space-y-2 mt-4">
                            <div className="h-6 bg-gray-300 rounded-lg w-[60%]"></div>
                            <div className="h-6 bg-gray-300 rounded-lg w-[30%]"></div>
                            <div className="h-4 bg-gray-300 rounded-lg w-full"></div>
                            <div className="h-4 bg-gray-300 rounded-lg w-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div >

    );
};

export default Shimmer;
