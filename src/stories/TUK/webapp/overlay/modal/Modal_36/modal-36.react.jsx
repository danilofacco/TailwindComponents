import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
              
                        <div role="alert" className="container mx-auto flex justify-center px-4">
                            <div className="relative bg-white dark:bg-gray-800 w-80 sm:w-full md:w-10/12 lg:w-1/2 xl:w-5/12 shadow rounded">
                                <div className="sm:flex items-center">
                                    <img className="w-full h-56 sm:h-auto  object-cover object-center sm:w-auto rounded-tl rounded-tr sm:rounded-tr-none sm:rounded-bl" src="https://i.ibb.co/9Vr3R0M/Rectangle-138.png" />
                                    <div className="px-6 py-6">
                                        <p className="text-2xl font-bold leading-5 text-gray-800 dark:text-gray-100">Best Seller</p>
                                        <p className="text-base font-medium leading-none text-indigo-700 dark:text-indigo-600 py-4">Our best sellers are back with a bang</p>
                                        <p className="text-sm leading-5 text-gray-600 dark:text-gray-300">621 components and 30 premium tailwind templates are being offered in such a small price. Go get it!</p>
                                        <div className="flex items-center justify-between pt-4">
                                            <button className="text-sm font-medium leading-none text-gray-100 px-4 py-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded focus:outline-none">Pay now</button>
                                            <p className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100">$189</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out" >
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
              
        </>
    );
}

export default Index;
