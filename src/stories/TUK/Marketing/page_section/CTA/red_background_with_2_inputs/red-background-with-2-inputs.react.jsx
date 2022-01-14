import React from "react";
function IndexPage() {
    return (
        <>
            <div className="px-6  bg-gradient-to-r from-red-600 to-red-800 py-16">
                <div className="mx-auto container">
                    <div className="flex lg:flex-row flex-col lg:justify-between w-full items-center">
                        <div className="flex items-center flex-col text-white">
                            <h1 className="uppercase text-4xl font-semibold">DONATE</h1>
                            <div className="flex items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={30} viewBox="0 0 25 24" fill="none">
                                        <path d="M25 9.16672L15.9161 8.57113L12.495 0L9.07397 8.57113L0 9.16672L6.95967 15.0601L4.67588 24L12.495 19.071L20.3142 24L18.0304 15.0601L25 9.16672Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={30} viewBox="0 0 25 24" fill="none">
                                        <path d="M25 9.16672L15.9161 8.57113L12.495 0L9.07397 8.57113L0 9.16672L6.95967 15.0601L4.67588 24L12.495 19.071L20.3142 24L18.0304 15.0601L25 9.16672Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={30} viewBox="0 0 25 24" fill="none">
                                        <path d="M25 9.16672L15.9161 8.57113L12.495 0L9.07397 8.57113L0 9.16672L6.95967 15.0601L4.67588 24L12.495 19.071L20.3142 24L18.0304 15.0601L25 9.16672Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={30} viewBox="0 0 25 24" fill="none">
                                        <path d="M25 9.16672L15.9161 8.57113L12.495 0L9.07397 8.57113L0 9.16672L6.95967 15.0601L4.67588 24L12.495 19.071L20.3142 24L18.0304 15.0601L25 9.16672Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={30} viewBox="0 0 25 24" fill="none">
                                        <path d="M25 9.16672L15.9161 8.57113L12.495 0L9.07397 8.57113L0 9.16672L6.95967 15.0601L4.67588 24L12.495 19.071L20.3142 24L18.0304 15.0601L25 9.16672Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 flex md:flex-row flex-col lg:items-center w-full md:w-auto">
                            <input className="h-12 bg-white pl-4 placeholder-gray-600 text-gray-700 focus:outline-none text-lg md:mr-8 w-full sm:w-64 md:w-auto" placeholder="Email" type="email" name id />
                            <input className="mt-4 md:mt-0 h-12 sm:w-32 bg-white pl-4 placeholder-gray-600 text-gray-700 focus:outline-none text-lg md:mr-8" placeholder="Zip Code" type="text" name id />
                            <button className="hover:opacity-90 mt-4 md:mt-0 w-24 lg:w-full py-3 px-4 bg-white text-lg leading-6 uppercase text-gray-700 focus:outline-none">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
