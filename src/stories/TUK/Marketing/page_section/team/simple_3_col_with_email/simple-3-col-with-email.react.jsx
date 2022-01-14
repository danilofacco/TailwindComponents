import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="mx-auto container px-4 lg:px-0 lg:mt-40 mt-10">
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="f-f-d-s text-2xl lg:text-6xl leading-normal tracking-wide text-gray-800 text-center">Our Talented Team</h1>
                    <p className="lg:text-2xl text-base font-normal tracking-tight leading-9 py-3 lg:w-2/5 text-gray-700 text-center">Dive into our projects from small businesses to Enterprise solutions. Record of delivering</p>
                </div>
                <div className="mt-10 lg:mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="flex flex-col items-center justify-center">
                            <div className="lg:w-96 w-full h-80">
                                <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section5(1).png" alt className="w-full h-full" />
                            </div>
                            <div className="uppercase text-gray-900 lg:text-4xl text-xl leading-9 font-bold f-f-l">Alex Bryan</div>
                            <div>
                                <p className="lg:text-2xl text-base leading-6 font-normal f-f-l text-gray-700 lg:py-5 py-3">sand.j@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="lg:w-96 w-full h-80">
                                <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section5(2).png" alt className="w-full h-full" />
                            </div>
                            <div className="uppercase text-gray-900 lg:text-4xl text-xl leading-9 font-bold f-f-l">Alex Bryan</div>
                            <div>
                                <p className="lg:text-2xl text-base leading-6 font-normal f-f-l text-gray-700 lg:py-5 py-3">sand.j@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="lg:w-96 w-full h-80">
                                <img src="https://cdn.tuk.dev/assets/templates/Fabterior/section5(3).png" alt className="w-full h-full" />
                            </div>
                            <div className="uppercase text-gray-900 lg:text-4xl text-xl leading-9 font-bold f-f-l">Alex Bryan</div>
                            <div>
                                <p className="lg:text-2xl text-base leading-6 font-normal f-f-l text-gray-700 lg:py-5 py-3">sand.j@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 lg:mt-32 flex justify-center w-full">
                        <button className="hover:opacity-90 px-4 lg:px-16 py-4 bg-gray-700text-sm lg:text-2xl text-white uppercase f-f-l  font-bold">View all</button>
                    </div>
                </div>
            </div>
        </>
    );
}
