import React from "react";
export default {
    title: 'TUK/Marketing/Page Section/About',
};
export function About(){
    return (
        <div>
            <div className="py-12 2xl:px-20 px-6 xl:mx-auto xl:container" >
                <div className="md:flex items-center justify-between">
                    <div className="xl:w-5/12 md:w-1/2 xl:pr-16 md:pr-8">
                        <h1 role="heading" className="lg:text-5xl text-3xl font-bold leading-tight text-gray-800">
                            How many letters are in the alphabet?
                        </h1>
                        <p role="contentinfo" className="mt-4 text-base leading-6 text-gray-600">
                            There are currently 26 letters in the English alphabet, but there was once a 27th letter. In fact, it still exists on computer keyboards. The 27th letter was "Et" and referred to as an "ampersand" or more commonly.
                        </p>
                        <button role="button" aria-label="explore more" className="sm:w-auto w-full mt-10 text-base font-medium leading-none text-white bg-indigo-700 rounded md:p-4 p-6 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 focus:outline-none">
                            Explore More
                        </button>
                    </div>
                    <div className="xl:w-2/5 md:w-1/2 w-full md:mt-0 mt-4">
                        <img src="https://i.ibb.co/wNG9Nk1/pexels-fauxels-3183166-1.png" alt="woman working" className="md:w-auto w-full" />
                    </div>
                </div>
                <div className="flex flex-wrap md:mt-16 mt-8 gap-6 flex items-center justify-between">
                    <div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-indigo-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">1</div>
                            <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">Extraordinary Performance</h2>
                        </div>
                        <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">A phrase is a short selection of words which when put together create a concept.</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-indigo-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">2</div>
                            <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">Extraordinary Performance</h2>
                        </div>
                        <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">A phrase is a short selection of words which when put together create a concept.</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-indigo-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">3</div>
                            <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">Extraordinary Performance</h2>
                        </div>
                        <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">A phrase is a short selection of words which when put together create a concept.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function About1() {

    return(<div className="xl:container xl:mx-auto" >
        <div className=" flex flex-col md:flex-row items-strech justify-center">
            <div className="md:w-3/5 relative">
                <img src="https://i.ibb.co/2Y2W5h2/florian-klauer-mk7-D-4-UCfmg-unsplash-1.png" alt="A typewriter" role="img" className="absolute inset-0 object-cover object-center w-full h-full hidden lg:block rounded" />
                <img src="https://i.ibb.co/PZRDh0s/florian-klauer-mk7-D-4-UCfmg-unsplash-1-1-1.png" alt="A typewriter" role="img" className="absolute inset-0 object-cover object-center w-full h-full lg:hidden rounded" />
                <img src="https://i.ibb.co/CsYRYtk/florian-klauer-mk7-D-4-UCfmg-unsplash-1-1.png" alt="A typewriter" role="img" className="object-cover object-center w-full h-full md:hidden rounded" />
            </div>
            <div className="md:w-2/5 flex justify-center items-center -mt-14 md:-mt-0 md:-ml-12 lg:-ml-16 md:py-24 lg:py-36 relative z-10 mx-4 md:mx-0">
                <div className="bg-gray-800 p-8 lg:p-10">
                    <p role="heading" className="text-base leading-none lg:text-xl lg:leading-tight text-white">About us</p>
                    <p className="text-2xl md:text-4xl lg:text-5xl font-semibold lg:font-bold md:leading-10 text-white mt-6 md:mt-4 lg:mt-8" >Here is all you need to know about us</p>
                    <p className="text-base leading-normal text-white mt-4 lg:mt-6">Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs.<br className="lg:hidden" /><br className="lg:hidden" />At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called.No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken.</p>

                </div>
            </div>
        </div>
    </div>)

}
export function About2() {
    return (
        <>
            <div className="py-16">
                <div className="xl:container xl:mx-auto  px-4 flex flex-col md:items-center justify-between md:flex-row">
                    <div className="mb-8 lg:mb-0 xl:w-1/3 md:w-1/2 w-full lg:pr-0 md:pr-4 pr-0">
                        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold  text-gray-800  pr-16 lg:pr-0">Who we are</h1>
                        <p className="mt-4 text-base leading-normal text-gray-600 lg:w-10/12 w-full xl:w-96 xl:pr-0 lg:pr-16 pr-0 ">We are designers, developer, and testers. We provide best design solution to our clients. Working perfectly with our clients.</p>
                        <button className="w-auto mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-indigo-600 rounded text-base font-medium leading-none text-center text-white">Know more</button>
                    </div>
                    <div className="md:w-1/2">
                        <div className="sm:flex justify-between w-full h-auto">
                            <div className="h-48 md:h-64 lg:h-72 sm:block hidden rounded relative">
                                <img className=" rounded inset-0 sm:w-72 w-full h-full object-cover object-top xl:object-center" src="https://i.ibb.co/qRfFZMt/michael-dam-m-EZ3-Po-FGs-k-unsplash-1.png" alt="Display Picture of Jack Bill" role="img" />
                                <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                                    <h5 className="text-base leading-none text-gray-800 mb-2">Anna Bill</h5>
                                    <p className="text-base font-semibold leading-none text-gray-600">Support</p>
                                </div>
                            </div>
                            <div className="h-48 md:h-64 lg:h-72 rounded sm:block hidden relative sm:ml-6 sm:mt-0 mt-4">
                                <img className=" rounded inset-0 w-full  h-full object-cover object-center" src="https://i.ibb.co/CVPZJXC/pexels-italo-melo-2379004-1.png" alt="Display Picture of Dan Joseph" role="img" />
                                <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                                    <h5 className="text-base leading-none text-gray-800 mb-2">Dan Joseph</h5>
                                    <p className="text-base font-semibold leading-none text-gray-600">Manager</p>
                                </div>
                            </div>
                            <div className="h-full sm:w-auto w-10/12 sm:hidden block rounded relative">
                                <img className=" rounded   w-full h-full object-cover object-top xl:object-center" src="https://i.ibb.co/kJBqSy6/mob-img-1.png" alt="Display Picture of Jack Bill" role="img" />
                                <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                                    <h5 className="text-base leading-none text-gray-800 mb-2">Anna Bill</h5>
                                    <p className="text-base font-semibold leading-none text-gray-600">Support</p>
                                </div>
                            </div>
                            <div className="h-full sm:w-auto w-10/12 rounded sm:hidden block relative sm:ml-6 sm:mt-0 mt-4">
                                <img className=" rounded  w-full  h-full object-cover object-center" src="https://i.ibb.co/cry3nM8/mob-img-2.png" alt="Display Picture of Dan Joseph" role="img" />
                                <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                                    <h5 className="text-base leading-none text-gray-800 mb-2">Dan Joseph</h5>
                                    <p className="text-base font-semibold leading-none text-gray-600">Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-48 md:h-64 lg:h-72 sm:block hidden rounded relative mt-6">
                            <img className="absolute rounded inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co/XSRytCy/img-3.png" alt="A group of four people" role="img" />
                            <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                                <h5 className="text-base leading-none text-gray-800 mb-2">Anna, Bill, Sam, Ashly</h5>
                                <p className="text-base font-semibold leading-none text-gray-600">Designers</p>
                            </div>
                        </div>
                        <div className=" h-72 sm:w-auto w-10/12 sm:hidden block  rounded relative mt-6">
                            <img className="absolute rounded inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co/SBGQchk/mob-img-3.png" alt="A group of four people" role="img" />
                            <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                                <h5 className="text-base leading-none text-gray-800 mb-2">Anna, Bill, Sam, Ashly</h5>
                                <p className="text-base font-semibold leading-none text-gray-600">Designers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export function About3() {

    return(
        <div className="flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center">
            <div className="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="md:text-5xl text-3xl font-bold text-center text-gray-800">Wild Goose Chase</h1>
                    <p className="sm:w-96 w-full mt-6 text-base leading-6 text-center text-gray-600">A phrase is a short selection of words which when put together create a concept.</p>
                    <div className="md:mt-14 mt-12 flex flex-col items-center">
                        <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="money">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M16.7333 8.99994C16.4918 8.58096 16.1409 8.23555 15.7181 8.00068C15.2954 7.76582 14.8167 7.65034 14.3333 7.66661H11.6667C10.9594 7.66661 10.2811 7.94756 9.78105 8.44766C9.28095 8.94776 9 9.62603 9 10.3333C9 11.0405 9.28095 11.7188 9.78105 12.2189C10.2811 12.719 10.9594 12.9999 11.6667 12.9999H14.3333C15.0406 12.9999 15.7189 13.2809 16.219 13.781C16.719 14.2811 17 14.9594 17 15.6666C17 16.3739 16.719 17.0521 16.219 17.5522C15.7189 18.0523 15.0406 18.3333 14.3333 18.3333H11.6667C11.1833 18.3495 10.7046 18.2341 10.2819 17.9992C9.85913 17.7643 9.5082 17.4189 9.26667 16.9999"
                                    stroke="#4338CA"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">A phrase is a short selection of words which when put together create a concept. There are eight types of phrases.</p>
                    </div>
                    <div className="mt-7 flex flex-col items-center">
                        <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="phone">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66667 2.33331H9L11.6667 8.99998L8.33333 11C9.76128 13.8954 12.1046 16.2387 15 17.6666L17 14.3333L23.6667 17V22.3333C23.6667 23.0406 23.3857 23.7188 22.8856 24.2189C22.3855 24.719 21.7072 25 21 25C15.799 24.6839 10.8935 22.4753 7.20911 18.7909C3.52467 15.1064 1.31607 10.201 1 4.99998C1 4.29274 1.28095 3.61446 1.78105 3.11436C2.28115 2.61426 2.95942 2.33331 3.66667 2.33331Z" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 6.33331C17.7072 6.33331 18.3855 6.61426 18.8856 7.11436C19.3857 7.61446 19.6667 8.29274 19.6667 8.99998" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 1C19.1217 1 21.1566 1.84286 22.6569 3.34315C24.1571 4.84344 25 6.87827 25 9" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">A phrase is a short selection of words which when put together create a concept.</p>
                    </div>
                    <div className="mt-7 flex flex-col items-center">
                        <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="ideas">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99967 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V7.99998C1.33301 8.73636 1.92996 9.33331 2.66634 9.33331H7.99967C8.73605 9.33331 9.33301 8.73636 9.33301 7.99998V2.66665C9.33301 1.93027 8.73605 1.33331 7.99967 1.33331Z" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.99967 14.6667H2.66634C1.92996 14.6667 1.33301 15.2636 1.33301 16V21.3334C1.33301 22.0697 1.92996 22.6667 2.66634 22.6667H7.99967C8.73605 22.6667 9.33301 22.0697 9.33301 21.3334V16C9.33301 15.2636 8.73605 14.6667 7.99967 14.6667Z" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.3337 14.6667H16.0003C15.2639 14.6667 14.667 15.2636 14.667 16V21.3334C14.667 22.0697 15.2639 22.6667 16.0003 22.6667H21.3337C22.07 22.6667 22.667 22.0697 22.667 21.3334V16C22.667 15.2636 22.07 14.6667 21.3337 14.6667Z" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.667 5.33331H22.667" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.667 1.33331V9.33331" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">Whether article spirits new her covered hastily sitting her. Money witty</p>
                    </div>
                    <div className="mt-7 flex flex-col items-center">
                        <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="bright ideas">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5333 4.46667L20.6 5.4M1 13H2.33333H1ZM13 1V2.33333V1ZM23.6667 13H25H23.6667ZM4.46667 4.46667L5.4 5.4L4.46667 4.46667Z" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M8.99967 18.3334C7.8803 17.4938 7.05345 16.3234 6.63625 14.9878C6.21905 13.6523 6.23265 12.2193 6.67512 10.8919C7.11759 9.56444 7.9665 8.4099 9.10161 7.59176C10.2367 6.77362 11.6005 6.33337 12.9997 6.33337C14.3989 6.33337 15.7626 6.77362 16.8977 7.59176C18.0328 8.4099 18.8818 9.56444 19.3242 10.8919C19.7667 12.2193 19.7803 13.6523 19.3631 14.9878C18.9459 16.3234 18.119 17.4938 16.9997 18.3334C16.4791 18.8487 16.0871 19.4793 15.8555 20.1742C15.6239 20.8691 15.5591 21.6088 15.6663 22.3334C15.6663 23.0406 15.3854 23.7189 14.8853 24.219C14.3852 24.7191 13.7069 25 12.9997 25C12.2924 25 11.6142 24.7191 11.1141 24.219C10.614 23.7189 10.333 23.0406 10.333 22.3334C10.4403 21.6088 10.3755 20.8691 10.1438 20.1742C9.91221 19.4793 9.52025 18.8487 8.99967 18.3334"
                                    stroke="#4338CA"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M9.93359 19.6666H16.0669" stroke="#4338CA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">A phrase is a short selection of words which when put together create a concept.</p>
                    </div>
                </div>
            </div>
            <div className="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2">
                <img src="https://i.ibb.co/7SmJNvH/about-image.png" alt="image ow a woman studying" className="h-full rounded-md object-cover object-center md:block hidden" />
                <img src="https://i.ibb.co/NT0VJcd/pexels-la-miko-3681591-1.png" alt="image ow a woman studying" className="h-auto w-auto md:hidden block" />
            </div>
        </div>
    )
}
export function About4() {
return( <div className="2xl:mx-auto 2xl:container xl:px-20 md:px-6 p-4 py-12 lg:flex items-stretch  justify-between">
<div className="lg:w-4/12 md:pr-14 pr-4">
    <div className="">
        <h1 className="lg:text-5xl text-3xl font-bold text-gray-800">About us</h1>
        <p className="text-base leading-6 text-gray-600 mt-4">Whether article spirits new her covered hastily sitting her. Money witty books nor son add</p>
    </div>
    <div className="mt-12">
        <h2 className="text-base font-semibold leading-none text-gray-800">1 Extraordinary Performance</h2>
        <p className="text-base leading-6 text-gray-600 mt-4">A phrase is a short selection of words which when put together create a concept.</p>
    </div>
    <div className="mt-12">
        <h2 className="text-base font-semibold leading-none text-gray-800">2 Extraordinary Performance</h2>
        <p className="text-base leading-6 text-gray-600 mt-4">A phrase is a short selection of words which when put together create a concept.</p>
    </div>
    <div className="mt-12">
        <h2 className="text-base font-semibold leading-none text-gray-800">3 Extraordinary Performance</h2>
        <p className="text-base leading-6 text-gray-600 mt-4">A phrase is a short selection of words which when put together create a concept.</p>
    </div>
    <div className="mt-12">
        <h2 className="text-base font-semibold leading-none text-gray-800">4 Extraordinary Performance</h2>
        <p className="text-base leading-6 text-gray-600 mt-4">A phrase is a short selection of words which when put together create a concept.</p>
    </div>
</div>
<div className="xl:w-1/2  sm:w-8/12 relative lg:mt-0 mt-12 lg:flex hidden items-center lg:justify-end justify-center ">
    <img src="https://i.ibb.co/GcW89gm/img1.png" className="w-8/12 h-full object-cover object-center md:flex hidden" alt="group meeting"/>
    <img src="https://i.ibb.co/ZYYffvx/img2.png" className="md:w-auto w-full md:absolute top-0 h-full py-8 left-0 md:ml-10 object-cover object-center" alt="lady working"/>
</div>
<div className="lg:mt-0 mt-12 lg:hidden md:block hidden w-full">
    <img src="https://i.ibb.co/L9RDbBd/Group-811183.png" alt="lady workin"  className="w-full"/>
</div>
<div className="mt-12 md:hidden w-full">
    <img src="https://i.ibb.co/ZYYffvx/img2.png" alt="woman working" className="w-full"/>
</div>
</div>    )
} 
export function About5() {
return( <div className="lg:py-16 md:py-12 py-10 xl:flex items-stretch justify-center w-full xl:space-x-32 space-y-6 xl:space-y-0">
<div className="w-full">
  <h1 className="lg:text-5xl md:text-4xl leading- leading-66md: md:leading-9 xl:leading-10 text-2xl font-bold text-gray-800">What We Offer</h1>
  <p className="text-base leading-6 text-gray-600 mt-4">While random text is mostly intended to just fill up the blank spaces, for many practical purposes you essentially want the look and feel of the dummy text you are going to use to be as close as possible</p>
  <p className="text-base leading-6 text-gray-600 mt-6">Considering that different language, writing style and substance of text result in an endless variety of different word combinations and visual impressions</p>
  <h2 className="text-xl font-semibold leading-5 mt-12 text-gray-800">Areas we target</h2>
  <ul className="list-disc mt-6 ml-6">
    <li className="text-base font-medium leading-6 md:leading-4 text-gray-600">While random text is mostly intended to just fill up the blank spaces</li>
    <li className="text-base mt-4 font-medium leading-6 md:leading-4 text-gray-600">While random text is mostly intended to just fill up the blank spaces</li>
    <li className="text-base mt-4 font-medium leading-6 md:leading-4 text-gray-600">While random text is mostly intended to just fill up the blank spaces</li>
  </ul>
  <h2 className="text-xl font-semibold leading-5 mt-12 text-gray-800">Our standout story</h2>
  <p className="text-base leading-6 text-gray-600 mt-4">Considering that different language, writing style and substance of text result in an endless variety of different word combinations and visual impressions that a piece of text can have and make, it is always a plus to have it use the right kind of words and look like the final product as much as possible.</p>
</div>
<div className=" w-full lg:mt-0 mt-6">
  <img  src="https://i.ibb.co/Mp6RkNd/women-smiling-image.png" alt="image of women smiling" className=" w-full rounded-md hidden xl:block" />
  <img src="https://i.ibb.co/s3NpSsN/pexels-andrea-piacquadio-3769021-1.png" alt="image of women smiling" className="xl:hidden hidden md:block w-full rounded-md" />
<img src="https://i.ibb.co/2N2XNfx/pexels-andrea-piacquadio-3769021-1.png" alt="image of women smiling" className="md:hidden w-full rounded-md" />
  <a href="javascript:void(0)">
    <p className="text-base font-medium mt-4 leading-4 cursor-pointer hover:underline focus:underline focus:outline-none text-gray-800">Important Information</p>
  </a>
</div>
</div>)
}
export function About6() {
return(
<div className="lg:py-16 md:py-12 py-10 w-full">
<div className="flex flex-col items-center justify-center">
  <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-6 md:leading-9 lg:leading-10 text-center text-gray-800">Progress Narrative</h1>
  <p className="text-base leading-6 mt-6 text-center text-gray-600 2xl:w-2/5 md:w-10/12 w-full mt-4">Considering that different language, writing style and substance of text result in an endless variety of different word combinations and visual impressions</p>
</div>
<div className="mt-12">
  <div className="xl:flex items-start xl:space-x-32 space-y-12 xl:space-y-0 justify-between w-full">
    <div className="w-full">
      <h2 className="text-xl font-semibold leading-5 text-gray-800">Vision</h2>
      <p className="text-base leading-6 text-gray-600 mt-6">Considering that different language, writing style and substance of text result in an endless variety of different word combinations and visual impressions</p>
      <p className="text-base leading-6 text-gray-600 mt-4">While random text is mostly intended to just fill up the blank spaces, for many practical purposes you essentially want the look and feel of the dummy text you are going to use to be as close as possible</p>
      </div>
    <div className="w-full">
      <p className="text-xl font-semibold leading-5 text-gray-800">Our standout story</p>
      <p className="text-base leading-normal text-gray-600 mt-4">Considering that different language, writing style and substance of text result in an endless variety of different word combinations and visual impressions that a piece of text can have and make</p>
      <p className="text-base leading-normal text-gray-600 mt-6">Considering that different language, writing style and substance of text result in an endless variety of different word combinations and visual impressions that a piece of text can have and make</p>
    </div>
  </div>
  <h2 className="text-xl font-semibold leading-5 mt-12 text-gray-800">Areas we target</h2>
  <ul className="list-disc mt-6 ml-6">
    <li className="text-base  leading-6 md:leading-4 text-gray-600">While random text is mostly intended to just fill up the blank spaces</li>
    <li className="text-base mt-4  leading-6 md:leading-4 text-gray-600">While random text is mostly intended to just fill up the blank spaces</li>
    <li className="text-base mt-4  leading-6 md:leading-4 text-gray-600">While random text is mostly intended to just fill up the blank spaces</li>
  </ul>
  <button className="py-4 px-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 lg:w-auto w-full hover:bg-indigo-600 bg-indigo-700 text-white text-base font-medium rounded mt-12">Discover More</button>

 
</div>
</div>
)
}
export function AboutUs1() {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function AboutUs2() {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="lg:w-10/12 w-full">
                <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">About</p>
                <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">We are here to make great design accessible and delightfull for everyone</h2>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</p>
            </div>

            <div className="lg:mt-14 sm:mt-10 mt-12">
                <img className="lg:block hidden w-full" src="https://i.ibb.co/GvwJnvn/Group-736.png" alt="Group of people Chilling" />
                <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" />
                <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" />
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2 ">
                    <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
                </div>
            </div>
        </div>
    );
}
export function AboutUs3() {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-2">About</p>
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12">
                    <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">We are here to make great design accessible and delightfull for everyone</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <img className="lg:block hidden w-full" src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" />
                </div>
            </div>

            <div className="relative mt-24">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5V21" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 5V14" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <svg className="z-20 sm:block hidden" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">Founded</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">50M montly enrichments</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="sm:block hidden">
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">400k User</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            <div className="sm:hidden block relative mt-8">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#1F2937" />
                        <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">400k User</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                <div className="w-full lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Mission</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                        {/* <!-- Team Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg className="mr-6" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Team</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        {/* <!-- Board Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Board</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        {/* <!-- Press Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.5 10.5L18 19.5L31.5 10.5" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Press</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function AboutUs4() {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-800 bg-opacity-70 text-white sm:px-12 px-6 border rounded-md">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">All About Us</h2>
                        <p className="font-normal text-base leading-6 text-gray-300 mx-auto lg:w-8/12 xl:w-6/12 mt-6 text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have grante d to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</p>
                    </div>
                </div>
                <div>
                    <img className="lg:block hidden w-full border rounded-md" src="https://i.ibb.co/VCGbH9S/12.png" alt="people discussing something" />
                    <img className="lg:hidden sm:block hidden w-full border rounded-md" src="https://i.ibb.co/2yvrWVN/Rectangle-122-1.png" alt="people discussing something" />
                    <img className="sm:hidden block w-full border rounded-md" src="https://i.ibb.co/sWmx8k6/Rectangle-122.png" alt="people discussing something" />
                </div>
            </div>

            <div className="lg:mt-14 sm:mt-7 mt-14">
                <div className="flex lg:flex-row flex-col sm:gap-10 gap-8">
                    <div className="w-full lg:w-7/12 ">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full xl:w-9/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                        <p className="font-normal text-base leading-6 text-gray-600 w-full xl:w-9/12 mt-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>

                        <p className="font-normal text-xl leading-5 text-indigo-700 lg:mt-10 mt-8 underline hover:text-indigo-700 duration-100 cursor-pointer">Watch the video</p>
                    </div>
                    <div className=" relative cursor-pointer w-full lg:w-5/12 lg:mt-0 sm:mt-10 mt-8">
                        <img className="lg:block hidden w-full" src="https://i.ibb.co/NS8JynL/pexels-artem-podrez-8518616-1.png" alt="A women" />
                        <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/M7c9tFs/Group-807.png" alt="A women" />
                        <img className="sm:hidden block w-full" src="https://i.ibb.co/0rBHNLk/pexels-artem-podrez-8518616-1.png" alt="A women" />
                        <div className="absolute top-0 left-0 p-4">
                            <svg width="72" height="48" viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="72" height="48" rx="6" fill="#4338CA" />
                                <path d="M31 16V32L44 24L31 16Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export function AboutUs5() {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-full h-full flex flex-col justify-center items-center bg-indigo-700 bg-opacity-20 text-white sm:px-12 px-6 rounded-md">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">Discover about us</h2>
                        <svg className="mt-8 cursor-pointer hover:bg-gray-200 hover:bg-opacity-20 rounded-md" width="72" height="48" viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="71" height="47" rx="5.5" stroke="white" />
                            <path d="M31 16V32L44 24L31 16Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div>
                    <img className="rounded-md lg:block hidden w-full" src="https://i.ibb.co/17q26WL/qw.png" alt="A person Coding" />
                    <img className="rounded-md lg:hidden sm:block hidden w-full" src="https://i.ibb.co/pZX8cKM/Rectangle-122-1.png" alt="A person Coding" />
                    <img className="rounded-md sm:hidden block w-full" src="https://i.ibb.co/b3YLqxC/Rectangle-122.png" alt="A person Coding" />
                </div>
            </div>

            <div className="lg:mt-14 sm:mt-7 mt-14">
                <div className="flex lg:flex-row flex-col items-center">
                    <div className="w-full lg:w-7/12">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                        <p className="pr-6 font-normal text-base leading-6 text-gray-600 mt-6 w-full xl:w-9/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                        <p className="pr-6 font-normal text-base leading-6 text-gray-600 w-full xl:w-9/12 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    </div>
                    <div className="lg:pt-16 xl:pt-0 cursor-pointer w-full lg:w-5/12 lg:mt-0 sm:mt-10 mt-8">
                        <div className="w-full grid sm:grid-cols-2 grid-cols-1">
                            {/* <!-- Company Founded --> */}
                            <div className="pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">Company founded</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                    <div className="-mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div></div>

                            {/* <!-- 500k For Responsiveness STARTS--> */}
                            <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="font-semibold text-xl leading-5 text-gray-800">500k Monthly Users</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                    <div className="mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 500k For Responsiveness ENDS--> */}

                            <div className="border-r-2 border-gray-200"></div>

                            {/* <!-- 500k monthly Views --> */}

                            <div className="sm:block hidden pb-7">
                                <div className="flex justify-between">
                                    <div className="-mt-1 -ml-2">
                                        <svg className="" width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6" cy="6" r="5.5" transform="rotate(-180 6 6)" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" transform="rotate(-180 18 6)" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" transform="rotate(-180 42 6)" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="26" cy="6" r="1.5" transform="rotate(-180 26 6)" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="50" cy="6" r="1.5" transform="rotate(-180 50 6)" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="34" cy="6" r="1.5" transform="rotate(-180 34 6)" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="58" cy="6" r="1.5" transform="rotate(-180 58 6)" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                    <div className="ml-auto w-auto">
                                        <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">500k monthly views</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                </div>
                            </div>

                            <div></div>

                            {/* <!-- 200k Users For Responsiveness STARTS--> */}

                            <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">200k Users</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                    <div className="-mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 200k Users For Responsiveness ENDS--> */}

                            <div></div>

                            {/* <!-- 200k Users --> */}

                            <div className="sm:block hidden pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="font-semibold text-xl leading-5 text-gray-800">200k Users</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                    <div className="mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div></div>

                            {/* <!-- 200+ Team For Responsiveness STARTS--> */}

                            <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="font-semibold text-xl leading-5 text-gray-800">500k Monthly Users</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                    <div className="mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 200+ Team For Responsiveness ENDS--> */}

                            <div className=""></div>

                            {/* <!-- 200+ Team --> */}

                            <div className="sm:block hidden pb-5">
                                <div className="flex justify-between">
                                    <div className="-mt-1 -ml-2">
                                        <svg className="" width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6" cy="6" r="5.5" transform="rotate(-180 6 6)" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" transform="rotate(-180 18 6)" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" transform="rotate(-180 42 6)" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="26" cy="6" r="1.5" transform="rotate(-180 26 6)" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="50" cy="6" r="1.5" transform="rotate(-180 50 6)" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="34" cy="6" r="1.5" transform="rotate(-180 34 6)" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="58" cy="6" r="1.5" transform="rotate(-180 58 6)" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                    <div className="ml-auto w-auto">
                                        <h2 className="-mt-2 w-auto font-semibold text-xl leading-5 text-gray-800">200+ Team</h2>
                                        <p className="w-auto font-normal text-base leading-6 text-gray-600 mt-2">It is a long established in 1988</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function CenterAlignedSquareWithSurroundImage() {
    return (
        <div className="py-12 px-6 md:px-12">
            <div className="items-center justify-center lg:flex hidden">
                <div className="relative">
                    <img loading="lazy" src="https://i.ibb.co/DQKs2x3/Rectangle-21.png" className="absolute left-0 top-0 z-0 h-52 w-56" />
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-1.png" className="mt-8 ml-8 relative z-10 abt-us-img" />
                    <div className="flex items-center transform -rotate-90 absolute left-0 bottom-0 -ml-20 mb-20">
                        <p className="text-lg font-semibold leading-snug text-justify text-indigo-700 mr-2">Restaurant</p>
                        <hr className="w-12 bg-indigo-700 h-1 border border-indigo-700 mr-8" />
                    </div>
                </div>
                <div className="about-us-card py-14 px-7 border border-color-black mx-10">
                    <p className="text-2xl font-bold text-black text-center">About Us</p>
                    <p className="text-base leading-7 text-justify text-gray-800 pt-4">Here is what you always need. View our food collection and order yummy and healthy food within minutes. Here is what you always need. View our food collection and order yummy and healthy food within minutes ....</p>
                </div>
                <div className="relative">
                    <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-2.png" className="abt-us-img -mt-8 mr-8 relative z-10" />
                    <img loading="lazy" src="https://i.ibb.co/DQKs2x3/Rectangle-21.png" className="absolute bottom-0 right-0 -mb-8 -mr-8 z-0 h-56" />
                    <div className="flex items-center transform -rotate-90 absolute right-0 top-0 -mr-20">
                        <hr className="w-12 bg-indigo-700 h-1 border border-indigo-700 mr-2" />
                        <p className="text-lg font-semibold leading-snug text-justify text-indigo-700 mr-8">Owner</p>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="items-center justify-center lg:hidden flex flex-col md:flex-row">
                <div className="w-11/12 md:w-auto flex flex-col md:flex-row items-center">
                    <div>
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-1.png" className="md:w-48 md:h-48 w-full h-full object-cover object-center" />
                        <div className="flex items-center justify-end my-2">
                            <hr className="w-12 bg-indigo-700 h-1 border border-indigo-700 mr-8" />
                            <p className="text-lg font-semibold leading-snug text-justify text-indigo-700 mr-2">Restaurant</p>
                        </div>
                    </div>
                    <div className="py-7 px-3 md:px-5 md:py-9 lg:py-14 lg:px-7 border border-color-black my-4 md:mx-5">
                        <p className="text-2xl font-bold text-black text-center">About Us</p>
                        <p className="text-base xl:leading-7 text-justify text-gray-800 pt-4">Here is what you always need. View our food collection and order yummy and healthy food within minutes. Here is what you always need. View our food collection and order yummy and healthy food within minutes ....</p>
                    </div>
                    <div>
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-2.png" className="md:w-48 md:h-48 w-full h-full object-cover object-center" />
                        <div className="flex items-center justify-end right-0 top-0 my-2">
                            <hr className="w-12 bg-indigo-700 h-1 border border-indigo-700 mr-8" />
                            <p className="text-lg font-semibold leading-snug text-justify text-indigo-700">Owner</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
        </div>
    );
}
export function SimpleTextWtihinSquare() {
    return (
        <>
            <div className="mx-auto container lg:mt-60 mt-10 px-4 lg:px-0">
                <div className="lg:flex justify-center">
                    <div className="lg:w-2/5">
                        <div className="border-2 border-black px-4 py-4 lg:py-10 lg:px-10 bottom-0 my-8 block lg:hidden">
                            <div className="flex flex-col">
                                <div className="lg:text-4xl text-2xl text-gray-900 leading-9 font-bold f-f-d-s pb-6 text-left">About Us</div>
                                <div className="lg:text-2xl text-base tracking-tight f-f-l text-gray-700 lg:leading-8">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper.</div>
                                <button className="text-base md:text-xl lg:text-2xl  lg:leading-5 f-f-l underline text-left font-bold focus:outline-none text-black-color mt-4 md:mt-6 lg:mt-8">Know More</button>
                            </div>
                        </div>
                        <div className="w-full">
                            <img className="h-full w-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(1).png" alt />
                        </div>
                        <div className="border-2 border-black px-4 py-10 lg:px-10 bottom-0 mt-8 hidden lg:block">
                            <div className="flex flex-col">
                                <div className="text-xl md:text-2xl lg:text-4xl text-gray-800 leading-9 f-f-d-s pb-6 text-left">About Us</div>
                                <div className="text-base md:text-xl lg:text-2xl tracking-tight f-f-l text-gray-700 leading-8">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper.</div>
                                <button className="text-base md:text-xl lg:text-2xl  lg:leading-5 f-f-l underline text-left font-bold focus:outline-none text-black-color mt-4 md:mt-6 lg:mt-8">Know More</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 lg:pl-8">
                        <div className="xl:h-2/5 lg:mt-0 mt-8">
                            <img className="w-full h-full bg-cover bg-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(2).png" alt />
                        </div>
                        <div className="w-full mt-8">
                            <img className="w-full bg-cover bg-center" src="https://cdn.tuk.dev/assets/templates/Fabterior/section6(3).png" alt />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export function UserInformationWithRightAlignedMap() {
    return (
        <>
            <div className="mx-auto container">
                <div className="my-4 max-w-6xl bg-gray-100">
                    <div className="lg:flex justify-between">
                        <div className="pl-5 py-5">
                            <h1 className="text-xl font-semibold text-gray-700">Seller information</h1>
                            <div className="flex items-center py-5">
                                <img src="https://cdn.tuk.dev/assets/templates/classified/12.png" className="w-12 h-12 rounded-full" />
                                <div className="ml-4">
                                    <h3 className="text-sm text-gray-700">Thomas Geller</h3>
                                    <p className="text-xs text-gray-600">Joined on 12 September 2020</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center lg:mt-0 mt-4">
                                <a href="javascript:void(0)">
                                    {" "}
                                    <button className="py-2 px-6 bg-indigo-700 text-white text-sm mr-4 focus:outline-none">Chat With Thomas</button>
                                </a>
                                <a href="javascript:void(0)">
                                    {" "}
                                    <button className="py-2 px-6 bg-transparent border border border-indigo-700 text-indigo-700 text-sm focus:outline-none">Call Thomas</button>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-60 lg:mt-0 mt-4">
                            <img src="https://cdn.tuk.dev/assets/templates/classified/map.png" className="h-full w-full" />
                        </div>
                    </div>
                </div>
                <div className="my-4 max-w-6xl bg-gray-100 p-5">
                    <h1 className="text-xl font-semibold text-gray-700">Additional details</h1>
                    <div className="lg:flex justify-between items-center mt-5">
                        <div className="lg:w-1/3">
                            <div>
                                <div className="flex text-sm">
                                    <h4 className="text-gray-700 mr-2">Brand:</h4>
                                    <h4>Iphone</h4>
                                </div>
                                <div>
                                    <div className="flex text-sm my-4">
                                        <h4 className="text-gray-700 mr-2">Color:</h4>
                                        <h4>Black</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div>
                                <div className="flex text-sm">
                                    <h4 className="text-gray-700 mr-2">Condition:</h4>
                                    <h4>Mint Condition</h4>
                                </div>
                                <div>
                                    <div className="flex text-sm my-4">
                                        <h4 className="text-gray-700 mr-2">Additional Items:</h4>
                                        <h4>Phone Cover and Pouch</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div>
                                <div className="flex text-sm">
                                    <h4 className="text-gray-700 mr-2">Owner:</h4>
                                    <h4>First owner</h4>
                                </div>
                                <div>
                                    <div className="flex text-sm my-4">
                                        <h4 className="text-gray-700 mr-2">Used For:</h4>
                                        <h4>8 months</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 max-w-6xl bg-gray-100 p-5">
                    <h1 className="text-xl font-semibold text-gray-700">Sellers Comments</h1>
                    <p className="text-xs leading-snug text-gray-600 py-3 lg:pr-32">
                        Duis congue mattis odio, a posuere urna feugiat id. Praesent id est tellus. Sed mollis ex at dapibus hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas.
                        <br />
                        <br />
                        Duis congue mattis odio, a posuere urna feugiat id. Praesent id est tellus. Sed mollis ex at dapibus hendrerit. Curabitur efficitur nulla at finibus suscipit. Duis efficitur lobortis diam vitae egestas.
                    </p>
                </div>
            </div>
        </>
    );
}
