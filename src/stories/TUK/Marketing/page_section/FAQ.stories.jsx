import React, { useState } from "react";
export default {
    title: 'TUK/Marketing/Page Section/FAQ',
};
export function DropdownOptions(){
        //import React, { useState } from "react";
        const [question, setquestion] = useState(0);
        return (
            <div className="container mx-auto pt-16">
                <div className="w-11/12 xl:w-full mx-auto">
                    <div className="pb-12">
                        <p className="text-gray-500 text-base lg:text-lg uppercase leading-tight mb-4">start with the basics</p>
                        <h1 className="xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800">Frequently Asked Questions</h1>
                    </div>
                    <div>
                        <div className="mx-auto shadow">
                            <div className="xl:px-8 lg:px-8 md:px-8 sm:px-8 px-4">
                                <div>
                                    <div className="flex py-6 justify-between items-center border-b border-gray-200">
                                        <h1 className="text-base md:text-xl lg:text-2xl text-indigo-700 font-bold">Interface and Display</h1>
                                        <div data-menu className="cursor-pointer" onClick={() => (question === 0 ? setquestion(null) : setquestion(0))}>
                                            {question === 0 ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    {question === 0 && (
                                        <ul>
                                            <li className="xl:py-8 lg:py-8 md:py-8 sm:py-8 py-4">
                                                <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                                <p className="xl:w-10/12 w-full text-gray-600 lg:text-base text-sm">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                                            </li>
                                            <li className="py-4 md:py-6 lg:py-8">
                                                <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                                <p className="xl:w-10/12 lg:w-10/12 w-full text-gray-600 text-base">Modify the visual appearance of your site – including colors, fonts, margins and other style-related properties – with a sophisticated style.</p>
                                            </li>
                                            <li className="py-4 md:py-6 lg:py-8">
                                                <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                                <p className="xl:w-10/12 w-full text-gray-600 lg:text-base text-sm">Instead of just giving you the tools to create your own site, they offer you a list of themes you can choose from. Thus a handy product</p>
                                            </li>
                                            <li className="py-4 md:py-6 lg:py-8">
                                                <p className="text-gray-800 text-2xl xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                                <p className="xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-full text-gray-600 text-base">We have chosen the bright color palettes that arouse the only positive emotions. The kit that simply assures to be loved by everyone.</p>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <div>
                                    <div className="flex py-6 justify-between items-center border-b border-gray-200">
                                        <h1 className="text-base md:text-xl lg:text-2xl text-indigo-700 font-bold">Interface and Display</h1>
                                        <div data-menu className="cursor-pointer" onClick={() => (question === 1 ? setquestion(null) : setquestion(1))}>
                                            {question === 1 ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    {question === 1 && (
                                        <ul>
                                            <li className="xl:py-8 lg:py-8 md:py-8 sm:py-8 py-4">
                                                <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                                <p className="xl:w-10/12 w-full text-gray-600 lg:text-base text-sm">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                                            </li>
                                            <li className="py-4 md:py-6 lg:py-8">
                                                <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                                <p className="xl:w-10/12 lg:w-10/12 w-full text-gray-600 text-base">Modify the visual appearance of your site – including colors, fonts, margins and other style-related properties – with a sophisticated style.</p>
                                            </li>
                                            <li className="py-4 md:py-6 lg:py-8">
                                                <p className="text-gray-800 md:text-xl lg:text-2xl xl:w-10/12 w-full lg:mb-4 mb-2">What does lorem ipsum actually mean?</p>
                                                <p className="xl:w-10/12 w-full text-gray-600 lg:text-base text-sm">Instead of just giving you the tools to create your own site, they offer you a list of themes you can choose from. Thus a handy product</p>
                                            </li>
                                            <li className="py-4 md:py-6 lg:py-8">
                                                <p className="text-gray-800 text-2xl xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                                <p className="xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-full text-gray-600 text-base">We have chosen the bright color palettes that arouse the only positive emotions. The kit that simply assures to be loved by everyone.</p>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
 }
export function Faq(){
    return(
        <div className="container mx-auto flex flex-col items-center justify-center py-24">
        <div className="px-4 sm:px-0">
            <h1 className="text-2xl sm:text-3xl font-bold md:leading-loose text-gray-800 px-8">Hello, how can we help?</h1>
            <div className="flex items-center mt-8 border rounded border-gray-600 p-2 justify-between">
                <input type="text" className="md:ml-5 md:w-auto w-full text-base leading-none text-gray-600 focus:outline-none" placeholder="Ask a question" />
                <button className="py-3 px-5 bg-indigo-700 rounded text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-500">Search</button>
            </div>
        </div>
        <div role="list" className="mt-16 flex flex-wrap items-center justify-center gap-6">
            <div role="listitem" tabindex="0" className="flex flex-col items-center justify-center space-y-6 shadow-lg border rounded border-indigo-700 px-16 py-10">
                <div className="">
                    <svg role="img" aria-label="Settings Icons" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </div>
                <a href="javascript:void(0)" className="text-xl font-medium leading-tight text-indigo-700">Account Settings</a>
            </div>
            <div role="listitem" tabindex="0" className="flex flex-col items-center justify-center space-y-6 shadow-lg rounded px-16 py-10 cursor-pointer border border-transparent hover:border-indigo-700 focus:border-indigo-700">
                <div className="">
                    <img src="https://i.ibb.co/PzbHxb1/Frame.png" role="img" alt="Planner Icon" />
                </div>
                <a href="javascript:void(0)" className="text-xl font-medium leading-tight text-gray-800">Pricing and Plan</a>
            </div>
            <div role="listitem" tabindex="0" className="flex flex-col items-center justify-center space-y-6 shadow-lg rounded px-16 py-10 cursor-pointer border border-transparent hover:border-indigo-700 focus:border-indigo-700">
                <div className="">
                    <img src="https://i.ibb.co/7SPS2Zz/Frame-1.png" alt="Delivery car Icon" role="img" />
                </div>
                <a href="javascript:void(0)" className="text-xl font-medium leading-tight text-gray-800">Delivery Methods</a>
            </div>
            <div role="listitem" tabindex="0" className="flex flex-col items-center justify-center space-y-6 shadow-lg rounded px-16 py-10 cursor-pointer border border-transparent hover:border-indigo-700 focus:border-indigo-700">
                <div className="">
                    <img src="https://i.ibb.co/zPj0yXG/Frame-2.png" alt="Resgister Icon" role="img" />
                </div>
                <a href="javascript:void(0)" className="text-xl font-medium leading-tight text-gray-800">Usage guidelines</a>
            </div>
        </div>
    </div>
    )
 }
export function Faq1(){ 
     //import React, { useState } from "react";
     const [show, setShow] = useState(false);
     return (
         <>
             <div className="bg-gray-100">
                 <div className="container mx-auto">
                     <div role="article" className="bg-gray-100 py-12 md:px-8">
                         <div className="px-4 xl:px-0 py-10">
                             <div className="flex flex-col lg:flex-row flex-wrap">
                                 <div className="mt-4 lg:mt-0 lg:w-3/5">
                                     <div>
                                         <h1 className="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12">Frequently asked questions</h1>
                                     </div>
                                 </div>
                                 <div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                                     <div className="pt-2 relative  text-gray-600">
                                         <input className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                                         <button type="submit" className="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 focus:rounded-full  focus:bg-gray-100 focus:ring-indigo-700 bg-white focus:outline-none absolute right-0 top-0 mt-5 mr-4">
                                             <svg className=" h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: "new 0 0 56.966 56.966" }} xmlSpace="preserve" width="512px" height="512px">
                                                 <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                             </svg>
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="px-6 xl:px-0">
                             <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                                 <div role="cell" className="bg-gray-100">
                                     <div className="bg-white p-5 rounded-md relative h-full w-full">
                                         {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                         <span>
                                             <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" />
                                         </span>
                                         <h1 className="pb-4 text-2xl font-semibold">Account Overview</h1>
                                         <div className="my-5">
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                 </svg>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100">First time, what do I do next?</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100">Changing you profile picture and other information</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</h4>
                                             </div>
                                         </div>
                                         <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                             <p>Show All</p>
                                             <div>
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                     <line x1={5} y1={12} x2={19} y2={12} />
                                                     <line x1={15} y1={16} x2={19} y2={12} />
                                                     <line x1={15} y1={8} x2={19} y2={12} />
                                                 </svg>
                                             </div>
                                         </a>
                                     </div>
                                 </div>
                                 <div role="cell" className="bg-gray-100">
                                     <div className="bg-white p-5 rounded-md relative h-full w-full">
                                         {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                         <span>
                                             <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/bdGyLYk/pricetags-1.png" alt="pricetags-1" />
                                         </span>
                                         <h1 className="pb-4 text-2xl font-semibold">Subscription Plans</h1>
                                         <div className="my-5">
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy?</h4>
                                             </div>
                                         </div>
                                         <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                             <p>Show All</p>
                                             <div>
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                     <line x1={5} y1={12} x2={19} y2={12} />
                                                     <line x1={15} y1={16} x2={19} y2={12} />
                                                     <line x1={15} y1={8} x2={19} y2={12} />
                                                 </svg>
                                             </div>
                                         </a>
                                     </div>
                                 </div>
                                 <div role="cell" className="bg-gray-100">
                                     <div className="bg-white p-5 rounded-md relative h-full w-full">
                                         {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                         <span>
                                             <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/GT4KHvJ/card-1.png" alt="home-1" />
                                         </span>
                                         <h1 className="pb-4 text-2xl font-semibold">Payment Options</h1>
                                         <div className="my-5">
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</h4>
                                             </div>
                                         </div>
                                         <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                             <p>Show All</p>
                                             <div>
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                     <line x1={5} y1={12} x2={19} y2={12} />
                                                     <line x1={15} y1={16} x2={19} y2={12} />
                                                     <line x1={15} y1={8} x2={19} y2={12} />
                                                 </svg>
                                             </div>
                                         </a>
                                     </div>
                                 </div>
                                 <div role="cell" className="bg-gray-100">
                                     <div className="bg-white p-5 rounded-md  h-full relative w-full">
                                         {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                         <span>
                                             <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/rG4r6NJ/notifications-1.png" alt="home-1" />
                                         </span>
                                         <h1 className="pb-4 text-2xl font-semibold">Notification Settings</h1>
                                         <div className="my-5">
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</h4>
                                             </div>
                                         </div>
                                         <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                             <p>Show All</p>
                                             <div>
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                     <line x1={5} y1={12} x2={19} y2={12} />
                                                     <line x1={15} y1={16} x2={19} y2={12} />
                                                     <line x1={15} y1={8} x2={19} y2={12} />
                                                 </svg>
                                             </div>
                                         </a>
                                     </div>
                                 </div>
                                 <div role="cell" className="bg-gray-100">
                                     <div className="relative bg-white p-5 rounded-md relative h-full w-full">
                                         {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                         <span>
                                             <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/HFC1hqn/people-1.png" alt="home-1" />
                                         </span>
                                         <h1 className="pb-4 text-2xl font-semibold">Profile Preferences</h1>
                                         <div className="my-5">
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                             </div>
                                         </div>
                                         <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                             <p>Show All</p>
                                             <div>
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                     <line x1={5} y1={12} x2={19} y2={12} />
                                                     <line x1={15} y1={16} x2={19} y2={12} />
                                                     <line x1={15} y1={8} x2={19} y2={12} />
                                                 </svg>
                                             </div>
                                         </a>
                                     </div>
                                 </div>
                                 <div role="cell" className="bg-gray-100">
                                     <div className="relative bg-white p-5 rounded-md relative h-full  w-full">
                                         {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
                                         <span>
                                             <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/QX80fYm/lock-closed-1.png" alt="home-1" />
                                         </span>
                                         <h1 className="pb-4 text-2xl font-semibold">Privacy and Cookies</h1>
                                         <div className="my-5">
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">First time, what do I do next?</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">Changing you profile picture and other information</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">I didnt get a confirmation email, what should I do next</h4>
                                             </div>
                                             <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                 <div>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                     </svg>
                                                 </div>
                                                 <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">What is the refund policy if I have to cancel during the month</h4>
                                             </div>
                                         </div>
                                         <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                             <p>Show All</p>
                                             <div>
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                     <line x1={5} y1={12} x2={19} y2={12} />
                                                     <line x1={15} y1={16} x2={19} y2={12} />
                                                     <line x1={15} y1={8} x2={19} y2={12} />
                                                 </svg>
                                             </div>
                                         </a>
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
export function Faq2(){
      //import React, { useState } from "react";
      const [box1, setBox1] = useState(false);
      const [box2, setBox2] = useState(false);
      const [box3, setBox3] = useState(false);
      const [box4, setBox4] = useState(false);
  
      return (
          <div> 
              <div>
                  <img src="https://i.ibb.co/DQ4FZhL/pattern-bg.png" alt="blue pattern background" class="absolute w-full h-64 md:h-96 object-center object-fit z-0" />
                  <div class="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
                      <div class="md:py-36 py-20">
                          <h1 role="heading" class="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white">
                              Frequently asked questions
                          </h1>
                      </div>
                      <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
                          <div class="bg-white shadow rounded p-8">
                              <div class="flex items-center justify-between">
                                  <div>
                                      <h2 class="text-base font-semibold leading-none text-gray-800">Why should I use your service?</h2>
                                  </div>
                                  <button onClick={() => setBox1(!box1)} class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                      {box1 ? (
                                          <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                      ) : (
                                          <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                      )}
                                  </button>
                              </div>
  
                              {box1 && (
                                  <ul class="">
                                      <li>
                                          <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                                      </li>
                                  </ul>
                              )}
                          </div>
                          <div class="bg-white shadow rounded p-8 mt-8">
                              <div class="flex items-center justify-between">
                                  <div>
                                      <h2 class="text-base font-semibold leading-none text-gray-800">What payment method I can use?</h2>
                                  </div>
                                  <button
                                      onClick={() => {
                                          setBox2(!box2);
                                      }}
                                      data-menu
                                      class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                  >
                                      {box2 ? (
                                          <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                      ) : (
                                          <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                      )}
                                  </button>
                              </div>
                              {box2 && (
                                  <ul>
                                      <li>
                                          <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                                      </li>
                                  </ul>
                              )}
                          </div>
                          <div class="bg-white shadow rounded p-8 mt-8">
                              <div class="flex items-center justify-between">
                                  <div>
                                      <h2 class="text-base font-semibold leading-none text-gray-800">Is your service safe to use?</h2>
                                  </div>
                                  <button
                                      onClick={() => {
                                          setBox3(!box3);
                                      }}
                                      data-menu
                                      class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                  >
                                      {box3 ? (
                                          <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                      ) : (
                                          <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                      )}
                                  </button>
                              </div>
                              {box3 && (
                                  <ul>
                                      <li>
                                          <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                                      </li>
                                  </ul>
                              )}
                          </div>
                          <div class="bg-white shadow rounded p-8 mt-8">
                              <div class="flex items-center justify-between">
                                  <div>
                                      <h2 class="text-base font-semibold leading-none text-gray-800">How to recover password?</h2>
                                  </div>
                                  <button onClick={() => setBox4(!box4)} data-menu class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                      {box4 ? (
                                          <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                      ) : (
                                          <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                      )}
                                  </button>
                              </div>
                              {box4 && (
                                  <ul>
                                      <li>
                                          <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                                      </li>
                                  </ul>
                              )}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
 }
export function Faq3(){ 
    return (
        <>
            <div>
                <div className="relative py-16 bg-gradient-to-b from-indigo-700 to-indigo-600 flex justify-center items-center">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white">How can we help you?</h1>
                        <div className="bg-indigo-800 rounded relative mt-6 lg:mt-14 py-4 pl-4 flex items-center w-full">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx={10} cy={10} r={7} />
                                    <line x1={21} y1={21} x2={15} y2={15} />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search for answers" className=" ml-4 w-full bg-transparent text-base leading-none text-white placeholder-white focus:outline-none" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto py-9 flex flex-col items-center justify-center">
                    <div role="list" className="w-11/12 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                                <div className="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                            <circle cx={12} cy={12} r={3} />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">Getting Started</p>
                                        <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                                <div className="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">User Account</p>
                                        <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                                <div className="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-horizontal" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx={14} cy={6} r={2} />
                                            <line x1={4} y1={6} x2={12} y2={6} />
                                            <line x1={16} y1={6} x2={20} y2={6} />
                                            <circle cx={8} cy={12} r={2} />
                                            <line x1={4} y1={12} x2={6} y2={12} />
                                            <line x1={10} y1={12} x2={20} y2={12} />
                                            <circle cx={17} cy={18} r={2} />
                                            <line x1={4} y1={18} x2={15} y2={18} />
                                            <line x1={19} y1={18} x2={20} y2={18} />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">Product Features</p>
                                        <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                                <div className="flex">
                                    <div>
                                        <svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3125 23.7188L2.0625 16.5L10.3125 9.28125M22.6875 23.7188L30.9375 16.5L22.6875 9.28125" stroke="#3730A3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">Customization Options</p>
                                        <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                                <div className="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x={3} y={5} width={18} height={14} rx={3} />
                                            <line x1={3} y1={10} x2={21} y2={10} />
                                            <line x1={7} y1={15} x2="7.01" y2={15} />
                                            <line x1={11} y1={15} x2={13} y2={15} />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">Payment Gateways</p>
                                        <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                                <div className="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x={5} y={11} width={14} height={10} rx={2} />
                                            <circle cx={12} cy={16} r={1} />
                                            <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-base font-medium leading-none text-gray-800">Security Options</p>
                                        <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mt-9 md:mt-11 lg:mt-16">
                        <div className="text-center">
                            <h1 className="text-3xl font-medium leading-loose text-gray-800">Didn’t find an answer?</h1>
                            <p className="mx-4 md:mx-0 mb-4 text-base leading-none text-gray-600 mt-4">Our team is just an email away and ready to answer your questions</p>
                        </div>
                        <div role="list" aria-label="Our Team mates" className="flex flex-wrap items-center justify-around mt-2 ">
                            <div role="listitem" className="focus:outline-none">
                                <img src="https://i.ibb.co/zS3y67Q/Unsplash-Avatars-0000s-0019-analise-benevides-88w-Kdd-JTwp8-unsplash-1.png" alt="Display avatar of julia john" role="img" />
                                <p className="text-base font-semibold leading-none text-gray-800 mt-2">Julia John</p>
                                <p className="text-base leading-none text-gray-600 mt-2">Designer</p>
                            </div>
                            <div role="listitem" className="focus:outline-none">
                                <img src="https://i.ibb.co/vJSM2Ch/Unsplash-Avatars-0004s-0005-laurence-cruz-P7yvmaj-Pvk-M-unsplash.png" alt="Display avatar of Tom Koch" role="img" />
                                <p className="text-base font-semibold leading-none text-gray-800 mt-2">Tom Koch</p>
                                <p className="text-base leading-none text-gray-600 mt-2">Developer</p>
                            </div>
                            <div role="listitem" className="focus:outline-none">
                                <img src="https://i.ibb.co/0tzwY54/Unsplash-Avatars-0004s-0012-tiffany-collins-Gsy-St-BSs-Yd0-unsplash.png" alt="Display avatar of Kera Ann" role="img" />
                                <p className="text-base font-semibold leading-none text-gray-800 mt-2">Kera Ann</p>
                                <p className="text-base leading-none text-gray-600 mt-2">Designer</p>
                            </div>
                            <div role="listitem" className="focus:outline-none">
                                <img src="https://i.ibb.co/DWMLC3n/Unsplash-Avatars-0004s-0013-sirio-w-Siku-Nio6-UY-unsplash.png" alt="Display Avatar of Glenn Jo" role="img" />
                                <p className="text-base font-semibold leading-none text-gray-800 mt-2">Glenn Jo</p>
                                <p className="text-base leading-none text-gray-600 mt-2">Support</p>
                            </div>
                            <div role="listitem" className="focus:outline-none">
                                <img src="https://i.ibb.co/vkHZYXY/Unsplash-Avatars-0004s-0029-azamat-zhanisov-4yh-Hhp-AMC3-U-unsplash.png" alt="Display avatar of Shing Co" role="img" />
                                <p className="text-base font-semibold leading-none text-gray-800 mt-2">Xhing Co</p>
                                <p className="text-base leading-none text-gray-600 mt-2">Support</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="mt-4 md:mt-6 py-3 px-6 bg-indigo-800 hover:bg-indigo-700 rounded text-white text-center font-medium text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export function Faq4(){ 
    return(<div>
        <div className="py-40 relative">
            <img src="https://i.ibb.co/V3z3q8r/rectangle-bg.png" alt="background-image" className="w-full z-0 absolute h-full object-cover object-center inset-0" />
            <div className="relative z-20">
                <h1 className="lg:text-5xl sm:text-4xl text-3xl text-center font-semibold leading-10 text-gray-800">How can we help you?</h1>
                <div className="w-full flex items-center justify-center">
                    <div className="lg:w-1/3 md:w-6/12 w-10/12 flex mt-12 cursor-pointer">
                        <input type="search" placeholder="Search" className="placeholder-gray-600 text-base focus:outline-none w-full leading-none text-gray-600 p-4 bg-white" />
                        <div className="bg-indigo-800 w-12 flex items-center justify-center flex-shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14 14L10 10" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="-mt-24 relative z-20 2xl:container 2xl:mx-auto px-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 pb-12">
            <div className="bg-white shadow-md rounded   h-64 flex flex-col items-center justify-start pt-8">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.6562 8.625H9.34375C6.56507 8.625 4.3125 10.8776 4.3125 13.6562V32.3438C4.3125 35.1224 6.56507 37.375 9.34375 37.375H36.6562C39.4349 37.375 41.6875 35.1224 41.6875 32.3438V13.6562C41.6875 10.8776 39.4349 8.625 36.6562 8.625Z" stroke="#3730A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.3125 17.25H41.6875H4.3125ZM11.5 26.9531H15.8125V28.75H11.5V26.9531Z" stroke="#3730A3" stroke-width="2" stroke-linejoin="round" />
                    </svg>
                </div>
                <p className="text-base font-medium mt-4 leading-4 text-gray-800">Billing questions</p>
                <p className="w-56 text-base leading-6 mt-4 text-center text-gray-600">Answer to your questions about billing and payment methods.</p>
            </div>
            <div className="bg-white shadow-md rounded   h-64 flex flex-col items-center justify-start pt-8">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 21.0833C27.2342 21.0833 30.6667 17.6509 30.6667 13.4167C30.6667 9.18248 27.2342 5.75 23 5.75C18.7659 5.75 15.3334 9.18248 15.3334 13.4167C15.3334 17.6509 18.7659 21.0833 23 21.0833Z" stroke="#3730A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5 40.25V36.4167C11.5 34.3833 12.3077 32.4333 13.7455 30.9955C15.1833 29.5577 17.1333 28.75 19.1667 28.75H26.8333C28.8667 28.75 30.8167 29.5577 32.2545 30.9955C33.6923 32.4333 34.5 34.3833 34.5 36.4167V40.25" stroke="#3730A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <p className="text-base font-medium mt-4 leading-4 text-gray-800">Account questions</p>
                <p className="w-56 text-base leading-6 mt-4 text-center text-gray-600">Answer to your questions about accounts and privacy.</p>
            </div>
            <div className="bg-white shadow-md rounded   h-64 flex flex-col items-center justify-start pt-8">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M33.5833 21.084H14.4166C12.2995 21.084 10.5833 22.8002 10.5833 24.9173V36.4173C10.5833 38.5344 12.2995 40.2506 14.4166 40.2506H33.5833C35.7003 40.2506 37.4166 38.5344 37.4166 36.4173V24.9173C37.4166 22.8002 35.7003 21.084 33.5833 21.084Z" stroke="#3730A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23.9999 32.5833C25.0585 32.5833 25.9166 31.7252 25.9166 30.6667C25.9166 29.6081 25.0585 28.75 23.9999 28.75C22.9414 28.75 22.0833 29.6081 22.0833 30.6667C22.0833 31.7252 22.9414 32.5833 23.9999 32.5833Z" stroke="#3730A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.3333 21.0833V13.4167C16.3333 11.3833 17.141 9.43329 18.5788 7.99551C20.0165 6.55774 21.9666 5.75 23.9999 5.75C26.0332 5.75 27.9833 6.55774 29.4211 7.99551C30.8588 9.43329 31.6666 11.3833 31.6666 13.4167V21.0833" stroke="#3730A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="43.641" height="46" fill="white" transform="translate(0.179443)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <p className="text-base font-medium mt-4 leading-4 text-gray-800">Security questions</p>
                <p className="w-56 text-base leading-6 mt-4 text-center text-gray-600">Answer to your questions about security options and privacy</p>
            </div>
        </div>
    </div>)
}
export function Faq5(){
    return(<div className="2xl:mx-auto 2xl:container xl:px-20 sm:px-6 px-4 py-12">
    <div className="flex flex-col items-center justify-center">
        <h1 className="lg:text-5xl text-3xl font-bold text-gray-800 text-center">Frequently Asked Questions</h1>
        <p className="text-base leading-6 mt-4 2xl:w-2/5 md:w-1/2 text-center text-gray-600">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
    </div>
    <div className="md:flex hidden items-center xl:justify-start justify-between mt-12">
        <button className="text-xl border-b-2 border-indigo-700 pb-2 font-semibold leading-5 focus:outline-none xl:mr-20 text-indigo-700">Account Setting</button>
        <button className="text-xl border-b-2 border-transparent pb-2 focus:border-indigo-700 hover:border-indigo-700 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-600 focus:text-indigo-700 hover:text-indigo-700">Pricing Plan</button>
        <button className="text-xl border-b-2 border-transparent pb-2 focus:border-indigo-700 hover:border-indigo-700 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-600 focus:text-indigo-700 hover:text-indigo-700">Delivery Methods</button>
        <button className="text-xl border-b-2 border-transparent pb-2 focus:border-indigo-700 hover:border-indigo-700 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-600 focus:text-indigo-700 hover:text-indigo-700">Usage Guidelines</button>
        <button className="text-xl border-b-2 border-transparent pb-2 focus:border-indigo-700 hover:border-indigo-700 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-600 focus:text-indigo-700 hover:text-indigo-700">Other Plans</button>
    </div>
    <div className="md:hidden relative w-full mx-auto bg-white rounded mt-12">
        <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="8 9 12 5 16 9" />
                <polyline points="16 15 12 19 8 15" />
            </svg>
        </div>
        <select aria-label="Selected tab" className="form-select block w-full p-3 border rounded border-gray-200 text-gray-600 appearance-none bg-transparent relative z-10">
            <option selected className="text-base text-indigo-700">Account Setting</option>
            <option className="text-base leading-none text-gray-600">Pricing Plan</option>
            <option className="text-base leading-none text-gray-600">Delivery Methods</option>
            <option className="text-base leading-none text-gray-600">Usage Guidelines</option>
        </select>
    </div>
    <div className="flex flex-col mt-12">
        <div className="w-full lg:flex items-stretch">
            <div className="lg:w-1/2 lg:mr-4 lg:mb-0 mb-10">
                <h2 className="text-base font-semibold leading-4 text-gray-800">Are random sentences computer generated?</h2>
                <p className="text-base leading-6 text-gray-600 mt-4">No, the random sentences in our generator are not computer generated. We considered using computer generated sentences when building this tool, but found the results to be disappointing. Even though it took a lot of time, all the sentences in this generator were created by us.</p>
            </div>
            <div className="lg:w-1/2 mr-4">
                <h2 className="text-base font-semibold leading-4 text-gray-800">Can i write random sentences?</h2>
                <p className="text-base leading-6 text-gray-600 mt-4">No, the random sentences in our generator are not computer generated. We considered using computer generated sentences when building this tool, but found the results to be disappointing. Even though it took a lot of time, all the sentences in this generator were created by us.</p>
            </div>
        </div>
        <div className="w-full lg:flex items-stretch mt-10">
            <div className="lg:w-1/2 lg:mr-4 lg:mb-0 mb-10">
                <h2 className="text-base font-semibold leading-4 text-gray-800">Are random sentences computer generated?</h2>
                <p className="text-base leading-6 text-gray-600 mt-4">No, the random sentences in our generator are not computer generated. We considered using computer generated sentences when building this tool, but found the results to be disappointing. Even though it took a lot of time, all the sentences in this generator were created by us.</p>
            </div>
            <div className="lg:w-1/2 mr-4">
                <h2 className="text-base font-semibold leading-4 text-gray-800">Can i write random sentences?</h2>
                <p className="text-base leading-6 text-gray-600 mt-4">No, the random sentences in our generator are not computer generated. We considered using computer generated sentences when building this tool, but found the results to be disappointing. Even though it took a lot of time, all the sentences in this generator were created by us.</p>
            </div>
        </div>
    </div>
</div>
)
 }
export function Faq6(){ 
    return (
        <div className="dark:bg-gray-900">
          <section className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="mx-auto container lg:px-10 xl:px-0">
              <div className="flex justify-center items-center flex-col">
                <div className="text-center flex items-center justify-center">
                  <h2 className="text-gray-800 dark:text-white md:text-6xl text-4xl font-black">Frequently asked questions</h2>
                </div>
                <div className="px-10 lg:px-0 grid lg:grid-cols-2 grid-cols-1 lg:justify-between justify-center items-start md:mt-28 mt-16 lg:gap-x-32 md:gap-y-14 gap-y-7">
                  <div className="flex justify-start items-start flex-col">
                    <div>
                      <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">How do I use the webber for 3+ members?</h3>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                      <p>Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story.</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-start flex-col">
                    <div>
                      <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">What does early access mean</h3>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                      <p>Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story.</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-start flex-col">
                    <div>
                      <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">Whats the best way to make the most out of it?</h3>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                      <p>Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story.</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-start flex-col">
                    <div>
                      <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">How are enterprise package customers accomodated?</h3>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                      <p>Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story.</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-start flex-col">
                    <div>
                      <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">How do I use the webber for 3+ members</h3>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                      <p>Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story.</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-start flex-col">
                    <div>
                      <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">How do I use the webber for 3+ members</h3>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                      <p>Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}
export function GrayBackgroundSimple(){
       //import React, { useState } from "react";
       const [question, setquestion] = useState(0);
       return (
           <div className="pt-16">
               <div className="container mx-auto pt-16 bg-gray-100">
                   <div className="text-center pb-3 md:pb-10 xl:pb-20">
                       <p className="text-gray-500 text-base lg:text-lg uppercase leading-tight mb-4">start with the basics</p>
                       <h1 className="px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800">Frequently Asked Questions</h1>
                   </div>
                   <div className="w-10/12 mx-auto">
                       <ul>
                           <li className="py-6 border-gray-200 border-solid border-b">
                               <div className="flex justify-between items-center">
                                   <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">What does lorem ipsum actually mean?</h3>
                                   <div className="cursor-pointer" onClick={() => (question === 0 ? setquestion(null) : setquestion(0))}>
                                       {question === 0 ? (
                                           <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                               <path stroke="none" d="M0 0h24v24H0z" />
                                               <circle cx={12} cy={12} r={9} />
                                               <line x1={9} y1={12} x2={15} y2={12} />
                                           </svg>
                                       ) : (
                                           <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                               <path stroke="none" d="M0 0h24v24H0z" />
                                               <circle cx={12} cy={12} r={9} />
                                               <line x1={9} y1={12} x2={15} y2={12} />
                                               <line x1={12} y1={9} x2={12} y2={15} />
                                           </svg>
                                       )}
                                   </div>
                               </div>
                               {question === 0 && <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                           </li>
                           <li className="py-6 border-gray-200 border-solid border-b">
                               <div className="flex justify-between items-center">
                                   <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">How do we know what kind of sounds dinosaurs made?</h3>
                                   <div className="cursor-pointer" onClick={() => (question === 1 ? setquestion(null) : setquestion(1))}>
                                       {question === 1 ? (
                                           <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                               <path stroke="none" d="M0 0h24v24H0z" />
                                               <circle cx={12} cy={12} r={9} />
                                               <line x1={9} y1={12} x2={15} y2={12} />
                                           </svg>
                                       ) : (
                                           <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                               <path stroke="none" d="M0 0h24v24H0z" />
                                               <circle cx={12} cy={12} r={9} />
                                               <line x1={9} y1={12} x2={15} y2={12} />
                                               <line x1={12} y1={9} x2={12} y2={15} />
                                           </svg>
                                       )}
                                   </div>
                               </div>
                               {question === 1 && <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                           </li>
                           <li className="py-6 border-gray-200 border-solid border-b">
                               <div className="flex justify-between items-center">
                                   <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">Why work from home is not as fun as we thought it would be?</h3>
                                   <div className="cursor-pointer" onClick={() => (question === 2 ? setquestion(null) : setquestion(2))}>
                                       {question === 2 ? (
                                           <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                               <path stroke="none" d="M0 0h24v24H0z" />
                                               <circle cx={12} cy={12} r={9} />
                                               <line x1={9} y1={12} x2={15} y2={12} />
                                           </svg>
                                       ) : (
                                           <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                               <path stroke="none" d="M0 0h24v24H0z" />
                                               <circle cx={12} cy={12} r={9} />
                                               <line x1={9} y1={12} x2={15} y2={12} />
                                               <line x1={12} y1={9} x2={12} y2={15} />
                                           </svg>
                                       )}
                                   </div>
                               </div>
                               {question === 2 && <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                           </li>
                           <li className="py-6 border-gray-200 border-solid border-b">
                               <div className="flex justify-between items-center">
                                   <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">In what way did human beings started using words?</h3>
                                   <div className="cursor-pointer" onClick={() => (question === 3 ? setquestion(null) : setquestion(3))}>
                                       {question === 3 ? (
                                           <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                               <path stroke="none" d="M0 0h24v24H0z" />
                                               <circle cx={12} cy={12} r={9} />
                                               <line x1={9} y1={12} x2={15} y2={12} />
                                           </svg>
                                       ) : (
                                           <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                               <path stroke="none" d="M0 0h24v24H0z" />
                                               <circle cx={12} cy={12} r={9} />
                                               <line x1={9} y1={12} x2={15} y2={12} />
                                               <line x1={12} y1={9} x2={12} y2={15} />
                                           </svg>
                                       )}
                                   </div>
                               </div>
                               {question === 3 && <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                           </li>
                           <li className="py-6 border-gray-200 border-solid border-b">
                               <div className="flex justify-between items-center">
                                   <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">Which is the least developed area in the world</h3>
                                   <div className="cursor-pointer" onClick={() => (question === 4 ? setquestion(null) : setquestion(4))}>
                                       {question === 4 ? (
                                           <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                               <path stroke="none" d="M0 0h24v24H0z" />
                                               <circle cx={12} cy={12} r={9} />
                                               <line x1={9} y1={12} x2={15} y2={12} />
                                           </svg>
                                       ) : (
                                           <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                               <path stroke="none" d="M0 0h24v24H0z" />
                                               <circle cx={12} cy={12} r={9} />
                                               <line x1={9} y1={12} x2={15} y2={12} />
                                               <line x1={12} y1={9} x2={12} y2={15} />
                                           </svg>
                                       )}
                                   </div>
                               </div>
                               {question === 4 && <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
       );
}
export function LeftAlignedLinksWithGradient(){
    return(
        <div className="mx-auto container py-12 px-4">
        <div className="px-6 lg:px-12 py-6 lg:py-12 relative rounded-3xl overflow-hidden">
            <img src="https://i.ibb.co/99JQ8Nf/prodify-bg.png" alt="Background with gradient-color" aria-hidden="true" className="absolute inset-0 object-cover object-center w-full h-full" />
            <div className="relative z-10">
                <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold f-f-l mb-4 md:mb-8 xl:mb-12">Not what you were looking for?</h1>

                <h2 className="text-base md:text-lg lg:text-xl font-semibold f-f-r cursor-pointer text-white hover:text-gray-100 mb-2 md:mb-4 lg:mb-7 underline "><a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white" > 1. How to setup your workspace in less than 10 minutes </a></h2>
               
                
                <h2  className="text-base md:text-lg lg:text-xl font-semibold f-f-r cursor-pointer text-white hover:text-gray-100 mb-2 md:mb-4 lg:mb-7 underline "><a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white" >2. Bringing your team upto speed with real-time collaboration</a></h2>
               
                
                <h2 className="text-base md:text-lg lg:text-xl font-semibold f-f-r cursor-pointer text-white hover:text-gray-100 mb-2 md:mb-4 lg:mb-7 underline "><a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white" >2. Bringing your team upto speed with real-time collaboration</a></h2>
               
              
                <h2 className="text-base md:text-lg lg:text-xl f-f-r cursor-pointer text-white hover:text-gray-100 underline "><a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white" >1. How to setup your workspace in less than 10 minutes</a></h2>
                  
            </div>
        </div>
    </div>
    )
}
export function TabView(){
    return(
        <div className="pb-16"  >
      
            <div className="container mx-auto">
                <div className="w-11/12 xl:w-full mx-auto pt-16">
                    <div className="pt-4 pb-6 md:pb-8 lg:pb-10 xl:pb-12">
                        <p className="text-gray-500 text-lg uppercase leading-tight mb-4">star with the basics</p>
                        <h1 className="xl:text-5xl text-3xl font-extrabold text-gray-800">Frequently Asked Questions</h1>
                    </div>
                    <div>
                        <div className="xl:hidden mb-8 relative">
                            <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="8 9 12 5 16 9" />
                                    <polyline points="16 15 12 19 8 15" />
                                </svg>
                            </div>
                            <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                                <option className="text-sm text-gray-600">Products</option>
                                <option className="text-sm text-gray-600">Billing</option>
                                <option selected className="text-sm text-gray-600">Services</option>
                                <option className="text-sm text-gray-600">Portal</option>
                                <option className="text-sm text-gray-600">Customer Services</option>
                            </select>
                        </div>
                        <div className="w-full xl:w-6/12 hidden xl:block">
                            <ul className="flex justify-between mb-2">
                                <li><a href="javascript:void(0)" onclick="showActive(1)" className="text-indigo-700 xl:text-base text-sm cursor-pointer ">Services</a></li>
                                <li><a href="javascript:void(0)" onclick="showActive(2)" className="text-gray-500 xl:text-base text-sm cursor-pointer  ">Products</a></li>
                                <li><a href="javascript:void(0)" onclick="showActive(3)" className="text-gray-500 xl:text-base text-sm cursor-pointer  ">Billing</a></li>
                                <li><a href="javascript:void(0)" onclick="showActive(4)" className="text-gray-500 xl:text-base text-sm cursor-pointer  ">Portal</a></li>
                                <li><a href="javascript:void(0)" onclick="showActive(5)" className="text-gray-500 xl:text-base text-sm cursor-pointer  ">Customer Services</a></li>
                            </ul>
                        </div>
                        <div className="relative h-2 bg-gray-200 rounded-lg mb-8 hidden xl:block">
                            <div id="active" className="transition ease-in-out duration-150 absolute h-2 bg-indigo-700 rounded-lg md:w-16 w-10"></div>
                        </div>

                        <div className="mx-auto">
                            <ul className="bg-gray-100 rounded">
                                <li className="border-gray-200 border-solid border-b xl:p-8 lg:p-8 md:p-8 sm:p-8 p-4 rounded">
                                    <p className="text-gray-800 text-2xl xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                    <p className="xl:w-10/12 w-full text-gray-600 text-base leading-8">Yes. AIBI certifications include the required material with your enrollment. It can be accessed across any and all devices and is available to you immediately after signup. Membership does not expire.</p>
                                </li>
                                <li className="border-gray-200 border-solid border-b xl:p-8 lg:p-8 md:p-8 sm:p-8 p-4">
                                    <p className="text-gray-800 text-2xl xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                    <p className="xl:w-10/12 w-full text-gray-600 text-base leading-8">ou will earn an Americas International Business Institute (AIBI) certificate for resume & employment purposes upon completion of the course modules & the final exam.</p>
                                </li>
                                <li className="border-gray-200 border-solid border-b xl:p-8 lg:p-8 md:p-8 sm:p-8 p-4">
                                    <p className="text-gray-800 text-2xl xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                    <p className="xl:w-10/12 lg:w-10/12 w-full text-gray-600 text-base leading-8">According to Harvard University, open book exams better help students apply, analyze, synthesize, compare/contrast or evaluate information.</p>
                                </li>
                                <li className="border-gray-200 border-solid border-b xl:p-8 lg:p-8 md:p-8 sm:p-8 p-4 rounded">
                                    <p className="text-gray-800 text-2xl xl:w-10/12 w-full mb-4">What does lorem ipsum actually mean?</p>
                                    <p className="xl:w-10/12 lg:w-10/12 w-full text-gray-600 text-base leading-8">You will earn an Americas International Business Institute (AIBI) certificate for resume & employment purposes upon completion of the course modules & the final exam.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
    </div> 
    )
}
