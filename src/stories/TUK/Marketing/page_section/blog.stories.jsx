import React from "react";
export default {
    title: 'TUK/Marketing/Page Section/Blog',
};
export function TwoColumnsWithMainAndSupporting() {
    return (
        <>
            <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
                <div className="mx-auto container">
                    <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Latest from our Blog</h1>
                    <div className="mt-12 lg:mt-24">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            <div>
                                <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png" alt="computer" />
                                <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                                    <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                </div>
                                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                    <h1 className="text-4xl text-gray-900 font-semibold tracking-wider">Transactions</h1>
                                    <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.</p>
                                    <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                                        <p className="text-base tracking-wide text-indigo-500">Read more</p>
                                        <svg className="ml-3 lg:ml-6" xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                                            <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1 8.53662H19" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="h-5 w-2" />
                                </div>
                            </div>
                            <div>
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png" alt="games" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                            <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                        </div>
                                        <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                                            <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png" alt="notes" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                            <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                        </div>
                                        <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                                            <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                            <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                        </div>
                                        <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                                            <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png" alt="worker" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                            <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                        </div>
                                        <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                                            <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export function ThreeColCardStyleWithSlider() {
    return (<section>
        <div className="lg:hidden px-6 xl:px-0">
            <div className="container mx-auto pt-16 lg:pt-40">
                <div className="flex flex-col lg:items-center justify-center w-full py-10">
                    <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">Health Tips and Tricks</h1>
                    <p className="mt-2.5 text-2xl">A Collection of guides, tips, suggestions and tricks to improve your Health</p>
                </div>
                <div className="w-full flex flex-col items-end justify-center">
                    <p className="text-lg text-indigo-700"><span id="current">01</span><span className="text-gray-800">/3</span></p>
                    <div className="my-4 flex items-center">
                        <div className="cursor-pointer mr-4 border border-gray-300 p-2 flex items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="5" y1="12" x2="9" y2="16" />
                                <line x1="5" y1="12" x2="9" y2="8" />
                            </svg>
                        </div>
                        <div className="cursor-pointer mr-4 border p-2 flex border border-indigo-700 text-indigo-700 items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="15" y1="16" x2="19" y2="12" />
                                <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between -mx-5">
                    <div className="slider">
                        <div className="slide-ana">
                            <div className="w-full px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_1.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 text-center px-6">Qualitative research in nursing and healthcare</h2>
                                    <div className="w-8/12 flex mt-3 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">05 min read</p>
                                        <p className="cursor-pointer">Healthcare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_2.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Journal of the healthcare management</h2>
                                    <div className="w-8/12 flex mt-3 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">03 min read</p>
                                        <p className="cursor-pointer">Management</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_3.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Solving covid pandemic’s health crisis</h2>
                                    <div className="w-8/12 flex mt-3 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">02 min read</p>
                                        <p className="cursor-pointer">Corona Virus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 w-full flex items-center justify-center">
                <button className="text-white hover:opacity-90 lg:text-2xl font-semibold bg-indigo-700 px-6 lg:px-12 py-3 lg:py-6 rounded">Read More</button>
            </div>
        </div>
        <div className="hidden lg:block px-6 xl:px-0">
            <div className="container mx-auto pt-16 lg:pt-40">
                <div className="flex flex-col items-center justify-center w-full py-10">
                    <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">Health Tips and Tricks</h1>
                    <p className="mt-2.5 lg:w-2/5 text-center text-2xl">A Collection of guides, tips, suggestions and tricks to improve your Health</p>
                </div>
                <div className="w-full flex flex-col items-end justify-end pr-24">
                    <p className="text-lg text-indigo-700"><span id="current3">01</span><span className="text-gray-800">/03</span></p>
                    <div className="my-4 flex items-center">
                        <div className="cursor-pointer mr-4 border border-gray-300 p-2 flex items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="5" y1="12" x2="9" y2="16" />
                                <line x1="5" y1="12" x2="9" y2="8" />
                            </svg>
                        </div>
                        <div className="cursor-pointer border p-2 flex border border-indigo-700 text-indigo-700 items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="15" y1="16" x2="19" y2="12" />
                                <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="slider3">
                    <div className="slide-ana3">
                        <div className="flex justify-between -mx-5">
                            <div className="w-1/3 px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_1.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Qualitative research in nursing and healthcare</h2>
                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">05 min read</p>
                                        <p className="cursor-pointer">Healthcare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_2.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Journal of the healthcare management</h2>
                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">03 min read</p>
                                        <p className="cursor-pointer">Management</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_3.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Solving covid pandemic’s mental health crisis</h2>
                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">02 min read</p>
                                        <p className="cursor-pointer">Corona Virus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between -mx-5">
                            <div className="w-1/3 px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_1.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Qualitative research in nursing and healthcare</h2>
                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">05 min read</p>
                                        <p className="cursor-pointer">Healthcare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_2.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Journal of the healthcare management</h2>
                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">03 min read</p>
                                        <p className="cursor-pointer">Management</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_3.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Solving covid pandemic’s mental health crisis</h2>
                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">02 min read</p>
                                        <p className="cursor-pointer">Corona Virus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between -mx-5">
                            <div className="w-1/3 px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_1.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Qualitative research in nursing and healthcare</h2>
                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">05 min read</p>
                                        <p className="cursor-pointer">Healthcare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_2.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Journal of the healthcare management</h2>
                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">03 min read</p>
                                        <p className="cursor-pointer">Management</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 px-5">
                                <div className="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div className="rounded w-full h-64 relative">
                                        <img className="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_3.png" />
                                    </div>
                                    <h2 className="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Solving covid pandemic’s mental health crisis</h2>
                                    <div className="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p className="cursor-pointer">02 min read</p>
                                        <p className="cursor-pointer">Corona Virus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24 w-full flex items-center justify-center">
                <button className="text-white hover:opacity-90 lg:text-2xl font-semibold bg-indigo-700 px-6 lg:px-12 py-3 lg:py-6 rounded">Read More</button>
            </div>
        </div>
    </section>)
}
export function Blog() {
    return (<div>
        
        <div className="bg-indigo-50 relative">
            <div role="article" className="focus:outline-none xl:container xl:mx-auto py-8 px-4">
                <h1 className="xl:w-7/12 text-4xl focus:outline-none md:text-5xl text-left f-m-w text-gray-800 font-bold pt-0">News, reviews and everything in between</h1>
                <div className="pt-14 xl:px-0 px-4">
                    <div className="w-full xl:flex">
                        <div className="xl:w-3/5 w-full">
                            <div className="relative md:flex items-start mb-8 bg-white rounded-md shadow-md md:p-0 p-4">
                                <img role="img" aria-label="bag on a table" src="https://i.ibb.co/PxMNGGv/Rectangle-38.png" alt="Rectangle-38" className="focus:outline-none md:w-64 md:h-64 sm:w-auto w-full h-full" />
                                <div className="md:ml-6 mr-6">
                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline">
                                        {" "}
                                        <h3 className="focus:outline-none f-m-m lg:text-3xl text-2xl font-semibold leading-14 mt-6 ">Figma Config 2021: What you need to know</h3>
                                    </a>
                                    <p className="focus:outline-none text-sm f-m-m text-gray-700 my-5">Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper turpis erat tempus, viverra aliquet.</p>
                                    <div className="xl:mt-2 lg:mt-16 mt-0">
                                        <div className="flex items-end justify-between">
                                            <div className="flex items-center">
                                                <div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
                                                    <img src="https://i.ibb.co/hHC3GKF/Ellipse-1-1.png" alt="Ellipse-1" role="img" />
                                                </div>
                                                <div className="pl-2">
                                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600">
                                                        <h3 className="f-f-l text-xs md:text-base">Emilie Ngyuen</h3>
                                                    </a>
                                                    <h4 className="f-f-r text-xs text-gray-600">Principal @ Figma</h4>
                                                </div>
                                            </div>
                                            <div className="flex space-x-1 items-center justify-end  text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p className="md:text-sm text-xs leading-3 text-gray-500">6 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative md:flex p-6 items-start mb-8 bg-white justify-right items-center gap-x-2 shadow-md rounded-md">
                                <img tabindex="0" role="img" aria-label="bag on a table" alt="bag on table" src="https://i.ibb.co/f4mS86s/Rectangle.png" className=" focus:outline-none lg:w-32 md:w-48 flex-shrink-0 sm:w-auto w-full" />
                                <div className="md:pl-6 w-full">
                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline">
                                        {" "}
                                        <h3 className="md:w-80 focus:outline-none f-m-m md:text-2xl text-lg md:pt-0 pt-6 font-semibold md:leading-9 ">The world of minecraft just got way better</h3>
                                    </a>

                                    <div className=" mt-5">
                                        <div className="flex items-end justify-between">
                                            <div className="flex items-center">
                                                <div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
                                                    <img src="https://i.ibb.co/fdBG4hH/Ellipse-1-2.png" alt="Ellipse-1" role="img" />
                                                </div>
                                                <div className="pl-2">
                                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600">
                                                        <h3 className="f-f-l text-xs md:text-base">Don Norman</h3>
                                                    </a>
                                                    <h4 className="f-f-r text-xs text-gray-600">Gaming Wiz @ Twitch</h4>
                                                </div>
                                            </div>
                                            <div className="flex space-x-1 items-center justify-end  text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p className="md:text-sm text-xs leading-3 text-gray-500">6 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-20 md:flex p-6 items-start mb-8 bg-white justify-right items-center gap-x-2 shadow-md shadow-lg">
                                <img tabindex="0" role="img" aria-label="bag on a table" alt="bag on table" src="https://i.ibb.co/F8qv7B8/Rectangle-1.png" className=" focus:outline-none lg:w-32 md:w-48 flex-shrink-0 sm:w-auto w-full" />
                                <div className="md:pl-6 w-full">
                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline">
                                        {" "}
                                        <h3 className="md:w-80 focus:outline-none f-m-m md:text-2xl text-lg md:pt-0 pt-6 font-semibold md:leading-9 ">Radio buttons, checkboxes and switches. A guide.</h3>
                                    </a>

                                    <div className="lg:mt-5 mt-10">
                                        <div className="flex items-end justify-between">
                                            <div className="flex items-center">
                                                <div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
                                                    <img src="https://i.ibb.co/tcnkzJF/Ellipse-1-3.png" alt="Ellipse-1" role="img" />
                                                </div>
                                                <div className="pl-2">
                                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600">
                                                        <h3 className="f-f-l text-xs md:text-base">Carolyn Smith</h3>
                                                    </a>
                                                    <h4 className="f-f-r text-xs text-gray-600">UI Designer @ NoCode</h4>
                                                </div>
                                            </div>
                                            <div className="flex space-x-1 items-center justify-end  text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p className="md:text-sm text-xs leading-3 text-gray-500">6 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="xl:w-1/2 w-full xl:ml-8">
                            <div className="relative md:flex p-6 items-start mb-8 bg-white items-center gap-x-2 shadow-md rounded-md">
                                <img tabindex="0" role="img" aria-label="bag on a table" alt="bag on table" src="https://i.ibb.co/DtNc2Zb/Rectangle-2.png" className=" focus:outline-none lg:w-32 md:w-48 flex-shrink-0 sm:w-auto w-full" />
                                <div className="md:pl-6 w-full">
                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline">
                                        {" "}
                                        <h3 className="focus:outline-none f-m-m md:text-3xl text-lg lg:pt-0 pt-6 font-semibold md:leading-9 ">Designing for usability &amp; inclusivity</h3>
                                    </a>
                                    <div className="lg:mt-5 mt-8">
                                        <div className="flex items-end justify-between">
                                            <div className="flex items-center">
                                                <div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
                                                    <img src="https://i.ibb.co/prFjHj7/Ellipse-1.png" alt="Ellipse-1" role="img" />
                                                </div>
                                                <div className="pl-2">
                                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600">
                                                        <h3 className="f-f-l text-xs md:text-base">Gayle Chavez</h3>
                                                    </a>
                                                    <h4 className="f-f-r text-xs text-gray-600">UX Specialist @ NNG</h4>
                                                </div>
                                            </div>
                                            <div className="flex space-x-1 items-center justify-end  text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p className="md:text-sm text-xs leading-3 text-gray-500">6 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative md:flex p-6 items-start mb-8 bg-white items-center gap-x-2 shadow-md rounded-md">
                                <img role="img" aria-label="bag on a table" alt="bag on table" src="https://i.ibb.co/ww06zZR/Rectangle-3.png" className=" focus:outline-none lg:w-32 md:w-48 flex-shrink-0 sm:w-auto w-full" />
                                <div className="md:pl-6 w-full">
                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline">
                                        {" "}
                                        <h3 className="focus:outline-none f-m-m md:text-3xl text-lg lg:pt-0 pt-6 font-semibold md:leading-9 ">XD is getting an update, and we’re excited</h3>
                                    </a>
                                    <div className="lg:mt-5 mt-10">
                                        <div className="flex items-end justify-between">
                                            <div className="flex items-center">
                                                <div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
                                                    <img src="https://i.ibb.co/gJRTZLK/Ellipse-1-4.png" alt="Ellipse-1" role="img" />
                                                </div>
                                                <div className="pl-2">
                                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600">
                                                        <h3 className="f-f-l text-xs md:text-base">Dortha Ray</h3>
                                                    </a>
                                                    <h4 className="f-f-r text-xs text-gray-600">Design Lead @ Adobe</h4>
                                                </div>
                                            </div>
                                            <div className="flex space-x-1 items-center justify-end  text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p className="md:text-sm text-xs leading-3 text-gray-500">6 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-20 md:flex p-6 items-start mb-8 bg-white items-center gap-x-2 shadow-md rounded-md">
                                <img role="img" aria-label="bag on a table" alt="bag on table" src="https://i.ibb.co/YLgB4Q2/Rectangle-4.png" className=" focus:outline-none lg:w-32 md:w-48 flex-shrink-0 sm:w-auto w-full" />
                                <div className="md:pl-6 w-full">
                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline">
                                        {" "}
                                        <h3 className="focus:outline-none f-m-m md:text-3xl text-lg lg:pt-0 pt-6 font-semibold md:leading-9 ">Engineering for scalibility: The future</h3>
                                    </a>
                                    <div className="lg:mt-5 mt-10">
                                        <div className="flex items-end justify-between">
                                            <div className="flex items-center">
                                                <div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
                                                    <img src="https://i.ibb.co/fkxLFDk/Ellipse-1-5.png" alt="Ellipse-1" role="img" />
                                                </div>
                                                <div className="pl-2">
                                                    <a href="javascript:void(0)" className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600">
                                                        <h3 className="f-f-l text-xs md:text-base">Amie White</h3>
                                                        <h4 className="f-f-r text-xs text-gray-600">Engineer @ Devsio</h4>
                                                    </a>
                                                </div>
                                            </div>
                                            <a href="javascript:void(0)" className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600">
                                                <div className="flex space-x-1 items-center justify-end  text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    <p className="md:text-sm text-xs leading-3 text-gray-500">6 min read</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="javascript:void(0)" className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600">
                                <div className="mt-14 flex items-right justify-end">
                                    <button className="flex items-center justify-center mt-7 md:text-sm md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none xl:leading-4 hover:underline hover:text-indigo-800">
                                        See More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <a href="javascript:void(0)" className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600">
                        <div className="absolute bottom-0">
                            <img src="https://i.ibb.co/kyPsDKc/Group-2.png" alt="Group-2" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>)
}
export function Blog1() {
    return (<div>
        <div className="flex w-full justify-center py-12 px-4">
            <div className="w-full lg:w-11/12 2xl:w-9/12">
                <div className="md:flex items-start">
                    <img className="mt-6 w-full md:w-auto object-cover object-center" alt="thumbnail" src="https://images.prismic.io/tailwindblogsrepo/51563da0-4af5-42af-9613-100b8d982eb0_design-for-devs-part-1.jpg?auto=compress,format&rect=0,0,800,800&w=256&h=256" />
                    <div className="pt-8 md:pl-8 lg:pl-16 lg:pt-4 pb-4">
                        <div className="flex items-center">
                            <p className="text-sm lg:text-base leading-none uppercase text-gray-500 dark:text-gray-300">Others</p>
                            <div className="w-1 h-1 bg-gray-500 dark:bg-gray-300 rounded-full mx-2" />
                            <p className="text-sm lg:text-base leading-none text-gray-500 dark:text-gray-300">09 February 2021</p>
                        </div>
                        <div className="py-2 xl:py-4">
                            <a href="javascript:void(0)">
                                <p className="text-2xl lg:text-4xl font-bold xl:leading-10 text-gray-900 dark:text-gray-50">Design for developers series - Part 1: General Fixes</p>
                            </a>
                        </div>
                        <div>
                            <div className="text-base lg:text-xl leading-7 text-gray-600 dark:text-gray-400">
                                <p>Note! This series is meant to only be a summarized overview of popular approaches, tips &amp; tricks regarding UI in today’s industry specifically for any developer looking to make their front-end game instantly stronger.</p>
                            </div>
                        </div>
                        <div className="w-full justify-between mt-4 items-center">
                            <div className="md:-mx-2 flex items-center flex-wrap">
                                <div className="flex items-center justify-center p-2 m-2 bg-gray-200 dark:bg-gray-800 rounded">
                                    <p className="text-sm lg:text-base leading-none text-gray-600 dark:text-gray-300">accessibility</p>
                                </div>
                                <div className="flex items-center justify-center p-2 m-2 bg-gray-200 dark:bg-gray-800 rounded">
                                    <p className="text-sm lg:text-base leading-none text-gray-600 dark:text-gray-300">user interface</p>
                                </div>
                                <div className="flex items-center justify-center p-2 m-2 bg-gray-200 dark:bg-gray-800 rounded">
                                    <p className="text-sm lg:text-base leading-none text-gray-600 dark:text-gray-300">design</p>
                                </div>
                                <div className="flex items-center justify-center p-2 m-2 bg-gray-200 dark:bg-gray-800 rounded">
                                    <p className="text-sm lg:text-base leading-none text-gray-600 dark:text-gray-300">development</p>
                                </div>
                                <div className="flex items-center justify-center p-2 m-2 bg-gray-200 dark:bg-gray-800 rounded">
                                    <p className="text-sm lg:text-base leading-none text-gray-600 dark:text-gray-300">digital wellbeing</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm lg:text-base leading-none text-gray-600 dark:text-gray-300">
                                    Posted By&nbsp;
                                    <a href="javascript:void(0)">
                                        <span className="text-blue-500 underline">TUK Team</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export function Blog2() {
    return (
        <>
            <div className="w-full md:flex items-center justify-between md:pt-0 pt-12">
                <div className="md:w-5/12 w-full">
                    <h1 role="heading" className="lg:text-6xl text-3xl font-extrabold leading-tight text-gray-800">The best destinations!</h1>
                    <p role="contentinfo" className="text-base leading-6 pt-4 text-gray-600">Join us for a trip that you won’t be forgettig anytime soon, a world tour that spans from across your living room to the end of your driveway, because thats what it’s all about.</p>
                    <button className="xl:pt-7 pt-4 text-base flex items-center p-2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:text-indigo-600 focus:outline-none font-medium leading-4 text-indigo-700">
                        Read more
                        <svg className="ml-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33301 8H12.6663" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.66699 12L12.667 8" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.66699 4L12.667 8" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="md:w-1/2 w-full">
                    <img src="https://i.ibb.co/DYQx3sr/blogg.png" className="md:w-full w-9/12" alt="hot air ballons" />
                </div>
            </div>
            <div className="pt-16 relative">
                <div className="h-72 w-full bg-gray-100 absolute z-0 mt-4"></div>
                <h2 role="heading" className="text-2xl font-semibold leading-6 text-gray-800 relative z-20">Top Picks</h2>
                <div className="relative z-40 flex w-full sm:flex-row flex-col sm:flex-wrap items-center sm:justify-between justify-center pt-6">
                    <div className="2xl:w-auto xl:w-96 lg:w-72 md:w-56 sm:w-64 w-80 sm:pb-0 pb-8">
                        <div className="relative w-full">
                            <div className="absolute bottom-0 left-0 px-7 py-4 bg-white text-base font-medium leading-6 text-gray-800">Music</div>
                            <img className="w-full" src="https://i.ibb.co/6W2Yvdj/muzik.png" alt="music keyboard" />
                        </div>
                        <p className="lg:w-72 pt-4 text-base font-semibold leading-normal text-gray-800">How playing music every morning can boost your creativity?</p>
                        <div className="flex items-center pt-4">
                            <img className="w-6 h-6 shadow rounded-full" src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" />
                            <p className="text-xs ml-2 leading-3 text-gray-800">Jennifer Wright</p>
                        </div>
                    </div>
                    <div className="2xl:w-auto xl:w-96 lg:w-72 md:w-56 sm:w-64 w-80 lg:px-0 px-1">
                        <div className="relative w-full">
                            <div className="absolute bottom-0 left-0 px-7 py-4 bg-white text-base font-medium leading-6 text-gray-800">Art</div>
                            <img className="w-full" src="https://i.ibb.co/yVdVvgd/art.png" alt="arts" />
                        </div>
                        <p className="lg:w-72 pt-4 text-base font-semibold leading-normal text-gray-800">10 tips for creating a successful business from your art</p>
                        <div className="flex items-center pt-4">
                            <img className="w-6 h-6 shadow rounded-full" src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" />
                            <p className="text-xs ml-2 leading-3 text-gray-800">Jennifer Wright</p>
                        </div>
                    </div>
                    <div className="2xl:w-auto xl:w-96 lg:w-72 md:w-56 sm:w-64 w-80 md:pt-0 pt-8">
                        <div className="relative w-full">
                            <div className="absolute bottom-0 left-0 px-7 py-4 bg-white text-base font-medium leading-6 text-gray-800">Photography</div>
                            <img className="w-full" src="https://i.ibb.co/0B96c7y/photograph.png" alt="image of a person" />
                        </div>
                        <p className="lg:w-72 pt-4 text-base font-semibold leading-normal text-gray-800">How can you learn professional photography by only watching videos?</p>
                        <div className="flex items-center pt-4">
                            <img className="w-6 h-6 shadow rounded-full" src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" />
                            <p className="text-xs ml-2 leading-3 text-gray-800">Jennifer Wright</p>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export function Blog3() {
    return (<>
        <div className="py-24 flex-col items-center justify-center  px-4">
            <h1 role="heading" className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800">
                Read Our Latest
            </h1>
            <p role="contentinfo" className="text-base leading-normal text-center text-gray-600 mt-4">
                Whether article spirits new her covered hastily sitting her. Money witty books nor son
            </p>
            <div className="2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6">
                <div className="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
                    <div>
                        <img src="https://i.ibb.co/hKV7YhC/blog-1.png" alt="woman smiling" />
                        <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                        <div className="mt-6 flex items-center cursor-pointer">
                            <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                            <svg width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5H15" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 9L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                    </div>
                    <div className="lg:mt-10">
                        <img src="https://i.ibb.co/WkCydhJ/blog-4.png" alt="coffe pouring" />
                        <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                        <div className="mt-6 flex items-center cursor-pointer">
                            <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                            <svg width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5H15" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 9L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                    </div>
                </div>
                <div className="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
                    <div>
                        <img src="https://i.ibb.co/SmNSVs8/blog-2.png" alt="plant held by a man" />
                        <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                        <div className="mt-6 flex items-center cursor-pointer">
                            <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                            <svg width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5H15" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 9L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                    </div>
                    <div className="lg:mt-10">
                        <img src="https://i.ibb.co/3pMc5WS/blog-5.png" alt="lady with plant" />
                        <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                        <div className="mt-6 flex items-center cursor-pointer">
                            <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                            <svg width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5H15" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 9L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                    </div>
                </div>
                <div className="flex xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto">
                    <div>
                        <img src="https://i.ibb.co/TLJdmSt/new-img-2.png" alt="Delighful breakfast" />
                        <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                        <div className="mt-6 flex items-center cursor-pointer">
                            <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                            <svg width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5H15" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 9L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                    </div>
                    <div className="xl:mt-10">
                        <img src="https://i.ibb.co/c8dPSYB/blog-6.png" alt="hats with image frame in middle" />
                        <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">Busting myths about hair</h2>
                        <div className="mt-6 flex items-center cursor-pointer">
                            <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">5 min read</p>
                            <svg width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5H15" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 9L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 1L15 5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">23, Feburary 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export function Blog4() {
    return (<>
        <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-10 px-6 py-20">
            <div className="lg:flex justify-center">
                <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
                    <img src="https://i.ibb.co/ZY43FRd/blog-1-desktop.png" alt="fingerprint recognition" className="lg:w-full w-auto" />
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <p className="text-base leading-4 text-gray-500">5 feb</p>
                                <p className="text-base leading-none text-gray-500 ml-12">5 min read</p>
                            </div>
                            <div className="flex items-center">
                                <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M64 1H0" stroke="#6B7280" />
                                </svg>
                                <p className="text-base leading-none text-gray-500 ml-2">Jeff Bill</p>
                            </div>
                        </div>
                        <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">Chip fingerprint technology for secure transaction</h1>
                        <p className="text-base leading-6 text-gray-600 mt-2">The emerge of internet of Things has brought in, rather urgently, a need for low-cost security technology. While passwords and other such forms of encription are software base, there is also a need for security level</p>
                    </div>
                </div>
                <div className="lg:ml-6 lg:mt-0 mt-7 2xl:w-3/12 lg:w-4/12 w-full flex lg:flex-col sm:flex-row flex-col items-center justify-between">
                    <div className="lg:w-auto sm:w-1/2">
                        <img src="https://i.ibb.co/d6jQJyY/blog-2-desktop.png" alt="flying letters" className="w-full" />
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="text-base leading-4 text-gray-500">5 feb</p>
                                    <p className="text-base leading-none text-gray-500 ml-12">5 min read</p>
                                </div>
                                <div className="flex items-center">
                                    <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M64 1H0" stroke="#6B7280" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-500 ml-2">Jeff Bill</p>
                                </div>
                            </div>
                            <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">Internet of things</h1>
                            <p className="text-base leading-6 text-gray-600 mt-2">The emerge of internet of Things has brought in a need for low-cost security technology.</p>
                        </div>
                    </div>
                    <div className="lg:mt-6 sm:mt-0 mt-6 lg:ml-0 sm:ml-6 lg:w-auto sm:w-1/2">
                        <img src="https://i.ibb.co/9cN11LT/blog-3-desktop.png" alt="robotic arm" className="w-full" />
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="text-base leading-4 text-gray-500">5 feb</p>
                                    <p className="text-base leading-none text-gray-500 ml-12">5 min read</p>
                                </div>
                                <div className="flex items-center">
                                    <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M64 1H0" stroke="#6B7280" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-500 ml-2">Jeff Bill</p>
                                </div>
                            </div>
                            <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">Internet of things</h1>
                            <p className="text-base leading-6 text-gray-600 mt-2">The emerge of internet of Things has brought in a need for low-cost security technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export function Blog5() {
    return (<div>
        <div className="2xl:p-20 p-6 xl:mx-auto xl:container">
            <div className="md:flex items-center justify-between">
                <div className="lg:w-2/5 md:w-1/2 md:mr-6 ">
                    <p className="text-xl font-semibold leading-5 text-gray-800">-Travel Blog</p>
                    <h1 className="lg:text-5xl text-3xl font-bold mt-4 text-gray-800">Taking you through Sahara desert</h1>
                    <div className="flex items-center lg:mt-8 mt-6">
                        <img src="https://i.ibb.co/87cJQ5G/Mask-Group.png" alt="profile-picture" className="w-10 h-10" />
                        <div>
                            <p className="text-base text-gray-800 ml-4">
                                By <span className="underline cursor-pointer">Rowan Aguilar</span>
                            </p>
                        </div>
                    </div>
                    <p className="text-base leading-6 text-gray-600 lg:mt-16 mt-12">
                        A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age so they can understand it's not literally raining cats and dogs, and it's just raining really hard. This is an simple way to illustrate what an idiom is that kids can easily conceptualize.A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age so they can understand it's not literally raining cats and dogs, and it's just raining really hard. This is an simple way to illustrate what an idiom is that kids
                        can easily conceptualize.
                    </p>
                    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700  focus:outline-none text-lg lg:mt-8 mt-6 font-semibold text-gray-800 flex items-center justify-center">
                        Continue Reading
                        <div className="ml-3 mt-1.5">
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16602 4H12.8327" stroke="#1F2937" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.5 7.33333L12.8333 4" stroke="#1F2937" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.5 0.666656L12.8333 3.99999" stroke="#1F2937" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </button>
                    <p className="text-base leading-4 mt-2 text-gray-800">(10 minute read)</p>
                </div>
                <div className="lg:w-2/5 md:w-1/2 h-full md:mt-0 mt-6">
                    <img src="https://i.ibb.co/G5Q79bL/jeep.png" alt="old land rover" className="h-full object-cover object-center rounded-md md:block hidden" />
                    <img src="https://i.ibb.co/hcJDTb2/pexels-oziel-g-mez-2893696-1.png" alt="old land rover" className="h-auto sm:w-auto w-full object-cover object-center rounded-md md:hidden block" />
                </div>
            </div>
        </div>
    </div>)
}
export function BlogLarge() {
    return (<div className="py-16 sm:py-24 md:py-44 lg:py-20 px-4">
        <div className>
            <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-gray-800 text-center font-extrabold mb-4">Our Blog Posts</h1>
            <p className="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">Don’t focus on having a great blog. Focus on producing a blog that’s great for your readers.” As a blogger, everything you do flows from understanding your audience and seeking to help them.</p>
        </div>
        <div className="lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around pt-8">
            <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative pb-16 lg:pb-10 xl:max-w-sm  lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                <div className="shadow h-64 rounded z-10">
                    <img src="https://cdn.tuk.dev/assets/photo-1573451444472-7b0b275ab824.jfif" alt className="h-full w-full object-cover overflow-hidden rounded" />
                </div>
                <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                    <p className="uppercase text-sm text-indigo-700 text-center pb-3">VEHICLE</p>
                    <p className="text-lg text-gray-800 text-center pb-3">The way I drive and handle a car, is an expression of my inner feeling.</p>
                    <p className="text-sm text-gray-800 text-center">
                        May 13, 2019 by
                        <a href="javascript:void(0)">
                            <span className="text-indigo-700 cursor-pointer">Silene Cox</span>
                        </a>
                    </p>
                </div>
            </div>
            <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative pb-16 lg:pb-10 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                <div className="shadow h-64 rounded">
                    <img src="https://cdn.tuk.dev/assets/photo-1544476915-ed1370594142.jfif" alt className="h-full w-full object-cover overflow-hidden rounded" />
                </div>
                <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                    <p className="uppercase text-sm text-indigo-700 text-center pb-3">Work</p>
                    <p className="text-lg text-gray-800 text-center pb-3">I'm a greater believer in luck, and I find the harder I work the more I have of it.</p>
                    <p className="text-sm text-gray-800 text-center">
                        May 13, 2019 by
                        <a href="javascript:void(0)">
                            <span className="text-indigo-700 cursor-pointer">Sansa Rollins</span>
                        </a>
                    </p>
                </div>
            </div>
            <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative pb-16 lg:pb-10 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                <div className="shadow h-64 rounded">
                    <img src="https://cdn.tuk.dev/assets/photo-1462331940025-496dfbfc7564.jfif" alt className="h-full w-full object-cover overflow-hidden rounded" />
                </div>
                <div className="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                    <p className="uppercase text-sm text-indigo-700 text-center pb-3">Productivity</p>
                    <p className="text-lg text-gray-800 text-center pb-3">Productivity is being able to do things that you were never able to do before.</p>
                    <p className="text-sm text-gray-800 text-center">
                        May 13, 2019 by
                        <a href="javascript:void(0)">
                            <span className="text-indigo-700 cursor-pointer">Ashley Wilson</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>)
}
export function BlogSimple() {
    return (<div className="container mx-auto lg:w-11/12 pt-16">
        <div className="mb-12 xl:w-full lg:w-full w-11/12 mx-auto">
            <h1 className="xl:text-5xl text-3xl pt-4 xl:pt-0 text-gray-800 xl:text-left font-extrabold mb-4">Popular Blog Posts</h1>
            <p className="text-xl text-gray-600 xl:w-7/12 mx-auto xl:mx-0">Content: Selling to people through social media is like going to a party, meeting somebody for the first time, and then saying, “Hey, do you want to buy this Tupperware..</p>
        </div>
        <div className="lg:flex md:flex sm:flex xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-0 lg:pr-4 xl:pl-0">
                <div className="h-48 bg-cover rounded">
                    <img src="https://cdn.tuk.dev/assets/photo-1557804506-669a67965ba0.jfif" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                </div>
                <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                    <p className="uppercase text-sm text-indigo-700 pb-3 text-center">LEADERSHIP</p>
                    <p className="text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                    <p className="text-sm text-gray-600 text-center">
                        May 13, 2019 by{" "}
                        <a href="javascript:void(0)">
                            <span className="text-indigo-700 cursor-pointer">Sameul Guzman</span>
                        </a>
                    </p>
                </div>
            </div>
            <div className="xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-4 lg:pr-0">
                <div className="h-48 bg-cover rounded">
                    <img src="https://cdn.tuk.dev/assets/photo-1547306843-f8fea4d65f9b.jfif" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                </div>
                <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                    <p className="uppercase text-sm text-indigo-700 pb-3 text-center">LEADERSHIP</p>
                    <p className="text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                    <p className="text-sm text-gray-600 text-center">
                        May 13, 2019 by{" "}
                        <a href="javascript:void(0)">
                            <span className="text-indigo-700 cursor-pointer">Sameul Guzman</span>
                        </a>
                    </p>
                </div>
            </div>
            <div className="xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-4 lg:pr-0">
                <div className="h-48 bg-cover rounded">
                    <img src="https://cdn.tuk.dev/assets/photo-1559125148-869baf508c95.jfif" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                </div>
                <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                    <p className="uppercase text-sm text-indigo-700 pb-3 text-center">LEADERSHIP</p>
                    <p className="text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                    <p className="text-sm text-gray-600 text-center">
                        May 13, 2019 by{" "}
                        <a href="javascript:void(0)">
                            <span className="text-indigo-700 cursor-pointer">Sameul Guzman</span>
                        </a>
                    </p>
                </div>
            </div>
            <div className="xl:mb-0 mb-8 lg:w-1/4 xl:w-1/4 w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-5/12 sm:mx-auto xl:pr-4 lg:pl-4 lg:pr-0">
                <div className="h-48 bg-cover rounded">
                    <img src="https://cdn.tuk.dev/assets/photo-1513759565286-20e9c5fad06b.jfif" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                </div>
                <div className="px-4 pt-4 pb-5 bg-white border-b border-gray-300">
                    <p className="uppercase text-sm text-indigo-700 pb-3 text-center">LEADERSHIP</p>
                    <p className="text-center text-xl font-semibold pb-4">How To Build Diverse Networks That Last</p>
                    <p className="text-sm text-gray-600 text-center">
                        May 13, 2019 by{" "}
                        <a href="javascript:void(0)">
                            <span className="text-indigo-700 cursor-pointer">Sameul Guzman</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>)
}
export function BlogSliderWithSearch() {
    return (<div className="container py-10 mx-auto pt-16">
        <div className="mb-12 xl:w-full w-11/12 mx-auto">
            <h1 className="xl:text-5xl text-3xl pt-4 xl:pt-0 text-gray-800 xl:text-left font-extrabold mb-4">Popular Blog Posts</h1>
            <p className="text-xl text-gray-600 xl:w-7/12 mx-auto xl:mx-0">If you love writing or making music or blogging or any sort of performing art, then do it. Do it with everything you’ve got. Just don’t plan on using it as a shortcut to making a living.</p>
        </div>
        <div className="xl:flex lg:flex md:flex xl:w-full mx-auto xl:mx-0 w-11/12 flex-wrap mb-32 justify-between">
            <div className="xl:w-9/12 lg:w-2/3 md:w-2/3 relative bg-center bg-cover bg-no-repeat h-64">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_4.png" alt className="h-full w-full object-cover overflow-hidden absolute rounded shadow" />
                <div className="absolute bottom-0 w-11/12 ml-2 xl:mx-0 lg:mx-0 xl:w-8/12 lg:w-8/12 xl:ml-24 lg:ml-24 rounded-md lg:-mb-48 sm:-mb-32 -mb-56 xl:-mb-40">
                    <div className="xl:w-3/12 w-6/12 lg:w-3/12 bg-white py-4 px-8 rounded-t-md">
                        <div className="flex justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#d0d9e3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7f91b1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full bg-white shadow rounded-tr-md rounded-b-md">
                        <div className="py-4 px-6">
                            <p className="text-sm text-indigo-700 pb-1">LEADERSHIP</p>
                            <p className="text-xl text-gray-800 font-bold pb-2">Productivity tips for effective leaders</p>
                            <p className="text-base text-gray-600">Placing effectiveness over efficiency should be your daily mantra. You can never complete everything, yet you can finish the tasks.</p>
                        </div>
                        <div className="border-t border-gray-300 flex justify-between">
                            <p className="text-sm text-gray-600 py-4 pl-8">
                                May 13, 2019 by
                                <a href="javascript:void(0)">
                                    <span className="text-indigo-700">Sameul Guzman</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:w-3/12 lg:w-1/3 md:w-1/3 xl:pl-10 lg:pl-10 md:pl-10 mt-64 xl:mt-0 md:mt-0 lg:mt-0">
                <div className="border-gray-400 border h-full xl:h-64 lg:h-64 md:h-64 overflow-y-auto rounded-lg">
                    <div className="flex items-center bg-gray-100 px-3 rounded-lg mt-5 mx-4 mb-5">
                        <div className="mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={10} cy={10} r={7} />
                                <line x1={21} y1={21} x2={15} y2={15} />
                            </svg>
                        </div>
                        <input type="text" placeholder="Search blogs" className="text-gray-500 text-sm bg-transparent focus:outline-none py-3 w-full" />
                    </div>
                    <div className="mx-5">
                        <div className="cursor-pointer mb-4">
                            <p className="text-sm text-indigo-700 pb-1 uppercase">Business</p>
                            <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                        </div>
                        <div className="cursor-pointer mb-4">
                            <p className="text-sm text-indigo-700 pb-1 uppercase">Business</p>
                            <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                        </div>
                        <div className="cursor-pointer mb-4">
                            <p className="text-sm text-indigo-700 pb-1 uppercase">Business</p>
                            <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                        </div>
                        <div className="cursor-pointer mb-4">
                            <p className="text-sm text-indigo-700 pb-1 uppercase">Business</p>
                            <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export function BlogSmall() {
    return (<div className="container mx-auto pt-16">
        <div className="mb-12 xl:w-full w-11/12 mx-auto">
            <h1 className="xl:text-5xl pt-4 xl:pt-0 text-gray-800 xl:text-left font-extrabold mb-4 text-3xl">Popular Blog Posts</h1>
            <p className="text-xl text-gray-600 xl:w-7/12 mx-auto xl:mx-0">Blogging is to writing what extreme sports are to athletics: more free-form, more accident-prone, less formal, more alive. It is, in many ways, writing out loud.</p>
        </div>
        <div className="xl:flex lg:flex sm:flex-1 md:flex flex-wrap">
            <div className="lg:w-5/12 xl:w-4/12 w-11/12 mx-auto xl:mx-0 md:w-5/12 flex sm:mx-auto mb-6 items-center">
                <div className="h-32 w-2/5">
                    <img src="https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt className="h-full w-full object-cover overflow-hidden rounded" />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                    <p className="uppercase text-sm text-indigo-700 pb-2">FOOD</p>
                    <p className="text-base text-gray-800 pb-2">The way I drive and handle a car, is an expression of my inner feeling.</p>
                    <p className="text-xs text-gray-600">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
            <div className="lg:w-5/12 xl:w-4/12 w-11/12 mx-auto xl:mx-0 md:w-5/12 flex sm:mx-auto mb-6 items-center">
                <div className="h-32 w-2/5">
                    <img
                        src="https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80
"
                        alt
                        className="h-full w-full object-cover overflow-hidden rounded"
                    />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                    <p className="uppercase text-sm text-indigo-700 pb-2">GOOGLE</p>
                    <p className="text-base text-gray-800 pb-2">I'm a greater believer in luck, and I find the harder I work the more I have of it.</p>
                    <p className="text-xs text-gray-600">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
            <div className="lg:w-5/12 xl:w-4/12 w-11/12 mx-auto xl:mx-0 md:w-5/12 flex sm:mx-auto mb-6 items-center">
                <div className="h-32 w-2/5">
                    <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt className="h-full w-full object-cover overflow-hidden rounded" />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                    <p className="uppercase text-sm text-indigo-700 pb-2">GALAXY</p>
                    <p className="text-base text-gray-800 pb-2">Productivity is being able to do things that you were never able to do before.</p>
                    <p className="text-xs text-gray-600">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
            <div className="lg:w-5/12 xl:w-4/12 w-11/12 mx-auto xl:mx-0 md:w-5/12 flex sm:mx-auto mb-6 items-center">
                <div className="h-32 w-2/5">
                    <img
                        src="https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80
"
                        alt
                        className="h-full w-full object-cover overflow-hidden rounded"
                    />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                    <p className="uppercase text-sm text-indigo-700 pb-2">GOOGLE</p>
                    <p className="text-base text-gray-800 pb-2">The way I drive and handle a car, is an expression of my inner feeling.</p>
                    <p className="text-xs text-gray-600">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
            <div className="lg:w-5/12 xl:w-4/12 w-11/12 mx-auto xl:mx-0 md:w-5/12 flex sm:mx-auto mb-6 items-center">
                <div className="h-32 w-2/5">
                    <img src="https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt className="h-full w-full object-cover overflow-hidden rounded" />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                    <p className="uppercase text-sm text-indigo-700 pb-2">FOOD</p>
                    <p className="text-base text-gray-800 pb-2">I'm a greater believer in luck, and I find the harder I work the more I have of it.</p>
                    <p className="text-xs text-gray-600">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
            <div className="lg:w-5/12 xl:w-4/12 w-11/12 mx-auto xl:mx-0 md:w-5/12 flex sm:mx-auto mb-6 items-center">
                <div className="h-32 w-2/5">
                    <img
                        src="https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80
"
                        alt
                        className="h-full w-full object-cover overflow-hidden rounded"
                    />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                    <p className="uppercase text-sm text-indigo-700 pb-2">GOOGLE</p>
                    <p className="text-base text-gray-800 pb-2">Productivity is being able to do things that you were never able to do before.</p>
                    <p className="text-xs text-gray-600">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
            <div className="lg:w-5/12 xl:w-4/12 w-11/12 mx-auto xl:mx-0 md:w-5/12 flex sm:mx-auto mb-6 items-center">
                <div className="h-32 w-2/5">
                    <img src="https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt className="h-full w-full object-cover overflow-hidden rounded" />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                    <p className="uppercase text-sm text-indigo-700 pb-2">FOOD</p>
                    <p className="text-base text-gray-800 pb-2">The way I drive and handle a car, is an expression of my inner feeling.</p>
                    <p className="text-xs text-gray-600">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
            <div className="lg:w-5/12 xl:w-4/12 w-11/12 mx-auto xl:mx-0 md:w-5/12 flex sm:mx-auto mb-6 items-center">
                <div className="h-32 w-2/5">
                    <img
                        src="https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80
"
                        alt
                        className="h-full w-full object-cover overflow-hidden rounded"
                    />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                    <p className="uppercase text-sm text-indigo-700 pb-2">GOOGLE</p>
                    <p className="text-base text-gray-800 pb-2">I'm a greater believer in luck, and I find the harder I work the more I have of it.</p>
                    <p className="text-xs text-gray-600">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
            <div className="lg:w-5/12 xl:w-4/12 w-11/12 mx-auto xl:mx-0 md:w-5/12 flex sm:mx-auto mb-6 items-center">
                <div className="h-32 w-2/5">
                    <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt className="h-full w-full object-cover overflow-hidden rounded" />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                    <p className="uppercase text-sm text-indigo-700 pb-2">GALAXY</p>
                    <p className="text-base text-gray-800 pb-2">Productivity is being able to do things that you were never able to do before.</p>
                    <p className="text-xs text-gray-600">May 13, 2019 by Allison Fox</p>
                </div>
            </div>
        </div>
    </div>)
}
export function CardStyleWithFeaturedPostAndPolls() {
    return (<div role="article" tabindex="0" className="focus:outline-none py-12 md:px-8">
        <div className="px-4 xl:px-0 py-10">
            <div className="flex flex-col flex-col-reverse lg:flex-row flex-wrap">
                <div className="mt-4 lg:mt-0 lg:w-3/5">
                    <div>
                        <h1 tabindex="0" className="focus:outline-none text-2xl lg:text-4xl font-bold text-indigo-900 tracking-normal lg:w-11/12">The latest news from ground zero</h1>
                        <div className="py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="2" viewBox="0 0 60 2" fill="none">
                                <rect width="60" height="2" fill="#E53E3E"></rect>
                            </svg>
                        </div>
                        <p tabindex="0" className="focus:outline-none font-normal text-gray-700 leading-7 lg:w-9/12">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-6 xl:px-0">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                <div className="bg-gray-100">
                    <div className="relative h-96 w-full">
                        <img tabindex="0" role="img" aria-label="american flag" className="focus:outline-none absolute inset-0 object-center object-cover h-full w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-12/blog_alt(1).png" alt="americanflag" />
                    </div>

                    <div className="py-6 px-4">
                        <button className="hover:opacity-90 focus:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none py-1.5 px-3 bg-red-600 uppercase text-white text-sm font-medium mb-5">Culture</button>
                        <h1 tabindex="0" className="focus:outline-none text-2xl text-indigo-900 font-bold">Policy Level Decisions</h1>
                        <p tabindex="0" className="focus:outline-none py-3 text-sm text-gray-700 leading-8">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.</p>
                        <div className="pt-6">
                            <div className="sm:flex justify-between w-full items-center text-gray-600 text-sm">
                                <div className="flex items-center">
                                    <div tabindex="0" aria-label="time icon" role="img" className="focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                            <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <p tabindex="0" className="focus:outline-none pl-1">5 minute read</p>
                                </div>
                                <div className="sm:pt-0 pt-3 flex items-center">
                                    <p tabindex="0" className="focus:outline-none font-medium">12th August, 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="relative h-96 w-full">
                        <img tabindex="0" role="img" aria-label="mills" className="focus:outline-none absolute inset-0 object-center object-cover h-full w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-12/blog_alt(2).png" alt="mills" />
                    </div>

                    <div className="py-6 px-4">
                        <button className="focus:outline-none hover:opacity-90 focus:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none hover:opacity-90 py-1.5 px-3 bg-red-600 uppercase text-white text-sm font-medium mb-5">Culture</button>
                        <h1 tabindex="0" className="focus:outline-none text-2xl text-indigo-900 font-bold">Policy Level Decisions</h1>
                        <p tabindex="0" className="focus:outline-none py-3 text-sm text-gray-700 leading-8">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.</p>
                        <div className="pt-6">
                            <div className="sm:flex justify-between w-full items-center text-gray-600 text-sm">
                                <div className="flex items-center">
                                    <div tabindex="0" aria-label="time icon" role="img" className="focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                            <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <p tabindex="0" className="focus:outline-none pl-1">5 minute read</p>
                                </div>
                                <div className="sm:pt-0 pt-3 flex items-center">
                                    <p tabindex="0" className="focus:outline-none font-medium">12th August, 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div tabindex="0" className="focus:outline-none py-10 md:py-56 lg:py-0 px-4 bg-gradient-to-br from-indigo-700 to-indigo-800">
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-sm text-white">Economy</p>
                        <p className="text-xl text-white tracking-wide font-bold leading-9 pt-1">Economic reform: To do or not to do. An in-depth analysis of how socialism is making a comeback in the USA</p>
                    </div>
                </div>
                <div tabindex="0" className="focus:outline-none py-10 lg:py-0 px-4 bg-gradient-to-br from-red-700 to-red-800">
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-sm text-white">Poll</p>
                        <p className="text-xl text-white tracking-wide font-bold leading-9 pt-1">Will the prelimenary debate determine the likelyhood of the next presedential candidate</p>
                        <p className="text-white italic underline text-sm font-semibold pt-7 cursor-pointer">Take the poll</p>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="relative h-96 w-full">
                        <img tabindex="0" role="img" aria-label="mills" className="focus:outline-none absolute inset-0 object-center object-cover h-full w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-12/blog_alt(3).png" alt="mills" />
                    </div>

                    <div className="py-6 px-4">
                        <button className="hover:opacity-90 focus:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none hover:opacity-90 py-1.5 px-3 bg-red-600 uppercase text-white text-sm font-medium mb-5">Culture</button>
                        <h1 tabindex="0" className="focus:outline-none text-2xl text-indigo-900 font-bold">Policy Level Decisions</h1>
                        <p tabindex="0" className="focus:outline-none py-3 text-sm text-gray-700 leading-8">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.</p>
                        <div className="pt-6">
                            <div className="sm:flex justify-between w-full items-center text-gray-600 text-sm">
                                <div className="flex items-center">
                                    <div tabindex="0" aria-label="time icon" role="img" className="focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                            <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <p tabindex="0" className="focus:outline-none pl-1">5 minute read</p>
                                </div>
                                <div className="sm:pt-0 pt-3 flex items-center">
                                    <p tabindex="0" className="focus:outline-none font-medium">12th August, 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="relative h-96 w-full">
                        <img tabindex="0" role="img" aria-label="american flag" className="focus:outline-none absolute inset-0 object-center object-cover h-full w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-12/blog_alt(1).png" alt="american flag" />
                    </div>

                    <div className="py-6 px-4">
                        <button className="hover:opacity-90 focus:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none hover:opacity-90 py-1.5 px-3 bg-red-600 uppercase text-white text-sm font-medium mb-5">Culture</button>
                        <h1 tabindex="0" className="focus:outline-none text-2xl text-indigo-900 font-bold">Policy Level Decisions</h1>
                        <p tabindex="0" className="focus:outline-none py-3 text-sm text-gray-700 leading-8">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.</p>
                        <div className="pt-6">
                            <div className="sm:flex justify-between w-full items-center text-gray-600 text-sm">
                                <div className="flex items-center">
                                    <div tabindex="0" aria-label="time icon" role="img" className="focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                            <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <p tabindex="0" className="focus:outline-none pl-1">5 minute read</p>
                                </div>
                                <div className="sm:pt-0 pt-3 flex items-center">
                                    <p tabindex="0" className="focus:outline-none font-medium">12th August, 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export function HeroBlogWithTrending() {
    return (<div className="container mx-auto pt-16">
        <div className="mb-12 xl:w-full w-11/12 mx-auto">
            <h1 className="xl:text-5xl text-3xl pt-4 xl:pt-0 text-gray-800 xl:text-left font-extrabold mb-4">Popular Blog Posts</h1>
            <p className="text-xl text-gray-600 xl:w-7/12 mx-auto xl:mx-0">Blogging has turned the publishing world on its head. It allows you to write and publish anything, from anywhere, and have it be immediately available to billions of people all around the world.</p>
        </div>
        <div className="relative bg-center bg-cover bg-no-repeat mb-40 w-11/12 mx-auto xl:w-full h-64">
            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_0.png" alt className="h-full w-full object-cover overflow-hidden absolute rounded" />
            <div className="absolute bottom-0 w-11/12 ml-2 xl:mx-0 lg:mx-0 xl:w-6/12 lg:w-6/12 xl:ml-12 lg:ml-12 rounded-md lg:-mb-56 sm:-mb-48 -mb-64 xl:-mb-24">
                <div className="w-full py-5 px-6 bg-white shadow rounded">
                    <p className="text-sm text-indigo-700 pb-1">LEADERSHIP</p>
                    <p className="text-xl text-gray-800 font-bold pb-2">Productivity tips for effective leaders</p>
                    <p className="text-base text-gray-600">Drop the 9-to-5 Schedule. It's no longer news that the traditional 9-to-5 workday is not the optimal productivity time span.</p>
                    <div className="pt-4 flex justify-between">
                        <p className="text-sm text-gray-600">
                            May 13, 2019 by{" "}
                            <a href="javascript:void(0)">
                                <span className="text-indigo-700">Sameul Guzman</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-32 md:pt-12 xl:pt-0 xl:w-full w-11/12 mx-auto border-b .border-gray-300">
            <p className="mb-4 font-bold text-gray-800 text-base">Trending Posts</p>
            <div className="xl:flex lg:flex sm:flex-1 md:flex flex-wrap justify-between">
                <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
                    <div className="h-16 w-20">
                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_1.png" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                    </div>
                    <div className="pt-3 pb-3 ml-2 pr-5">
                        <p className="uppercase text-xs text-indigo-700">Business</p>
                        <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
                    <div className="h-16 w-20">
                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_2.png" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                    </div>
                    <div className="pt-3 pb-3 ml-2 pr-5">
                        <p className="uppercase text-xs text-indigo-700">Business</p>
                        <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
                    <div className="h-16 w-20">
                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_3.png" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                    </div>
                    <div className="pt-3 pb-3 ml-2 pr-5">
                        <p className="uppercase text-xs text-indigo-700">Business</p>
                        <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
                    <div className="h-16 w-20">
                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_4.png" alt className="h-full w-full object-cover overflow-hidden rounded shadow" />
                    </div>
                    <div className="pt-3 pb-3 ml-2">
                        <p className="uppercase text-xs text-indigo-700">Business</p>
                        <p className="text-base text-gray-800">Productivity Tips for Effective Leaders</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export function ImageCentricTwoColumn() {
    return (<div className="container mx-auto px-4">
        <h1 className="text-5xl text-center f-m-w text-indigo-700 font-bold pt-0">Our Blogs</h1>
        <div className="pt-14 xl:px-0 px-4">
            <div className="w-full lg:flex">
                <div className="lg:w-1/2">
                    <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog1.png" className="w-full" />
                    <div className="mt-8 lg:mb-0 mb-8">
                        <h1 className="f-m-m text-2xl font-semibold leading-7">Beautiful Italy, Travel Blog</h1>
                        <p className="text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="mt-6">
                            <a href="">
                                <p className="text-indigo-700 underline text-base font-semibold f-m-m">Read More</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:ml-8">
                    <div className="lg:flex items-start mb-8">
                        <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog2.png" className="w-full" />
                        <div className="lg:ml-6">
                            <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">A Broken Backpack</h1>
                            <p className="text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="mt-4">
                                <a href="">
                                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">Read More</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex items-start mb-8">
                        <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog3.png" className="w-full" />
                        <div className="lg:ml-6">
                            <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">My life’s a Movie</h1>
                            <p className="text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="mt-4">
                                <a href="">
                                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">Read More</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex items-start mb-8">
                        <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog4.png" className="w-full" />
                        <div className="lg:ml-6">
                            <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">Lilii’s Travel Plans</h1>
                            <p className="text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="mt-4">
                                <a href="">
                                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">Read More</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center my-16 w-full">
            <button className="hover:bg-gray-200 border border-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">Browse More</button>
        </div>
    </div>)
}