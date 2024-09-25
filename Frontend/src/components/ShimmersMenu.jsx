// ShimmersMenu.jsx
import React from 'react';

const ShimmersMenu = () => {
    return (
        <div className="w-full flex justify-center font-arial my-8">
            <div className='w-6/12'>
                {/* Breadcrumbs */}
                <p className='text-xs text-gray-600 flex'>
                    <span className="animate-pulse bg-gray-300 rounded w-24 h-4 mr-1"></span>
                    <span className='mx-1'>/</span>
                    <span className="animate-pulse bg-gray-300 rounded w-24 h-4 mr-1"></span>
                    <span className='mx-1'>/</span>
                    <span className="animate-pulse bg-gray-300 rounded w-24 h-4"></span>
                </p>

                {/* Restaurant Name */}
                <p className='text-2xl font-extrabold font-arial mt-6 mb-3 animate-pulse bg-gray-300 rounded w-3/4 h-8'></p>

                {/* Restaurant Info */}
                <div className='w-full h-[250px] rounded-2xl bg-gradient-to-t from-gray-300 to-white flex justify-center items-center p-6'>
                    <div className='border border-gray-300 h-full w-full rounded-2xl bg-white'>
                        <div className='flex items-center pt-2 px-2 text-2xl text-green-700'>
                            <div className="animate-pulse bg-gray-300 rounded-full w-8 h-8 mr-2"></div>
                            <div className='flex items-center'>
                                <p className='text-lg text-black font-bold font-arial mr-2 animate-pulse bg-gray-300 rounded w-32 h-6'></p>
                                <p className="text-sm font-semibold text-gray-400 mr-2"><span className="mr-1">•</span></p>
                                <p className='text-lg text-black font-bold animate-pulse bg-gray-300 rounded w-24 h-6'></p>
                            </div>
                        </div>

                        <p className='pl-3 my-2 text-orange-600 font-bold underline animate-pulse bg-gray-300 rounded w-1/2 h-4'></p>

                        <div className="pl-3 my-2 flex items-start gap-3 h-auto w-[300px]">
                            <div className='flex flex-col items-center justify-center'>
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                <div className="w-[1.5px] h-6 bg-gray-300"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            </div>
                            <div className='flex flex-col justify-center ml-2'>
                                <p className='flex items-center gap-2'>
                                    <span className='font-bold animate-pulse bg-gray-300 rounded w-16 h-4'></span>
                                    <span className='text-gray-500 font-normal animate-pulse bg-gray-300 rounded w-20 h-4'></span>
                                </p>
                                <p className='font-bold animate-pulse bg-gray-300 rounded w-24 h-4'></p>
                            </div>
                        </div>

                        <div className='border border-b-0 bg-gray-50 w-full'></div>
                        <p className='flex items-center gap-3 pl-3 mt-4'>
                            <span className='text-2xl animate-pulse bg-gray-300 rounded w-8 h-8'></span>
                            <span className='animate-pulse bg-gray-300 rounded w-32 h-4'></span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="animate-pulse p-2 w-1/4">
                            <div className="bg-gray-300 rounded-lg h-24 mb-2"></div>
                            <div className="mt-2 bg-gray-300 rounded h-4 w-3/4"></div>
                            <div className="mt-1 bg-gray-300 rounded h-4 w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShimmersMenu;
