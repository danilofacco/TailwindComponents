import React, { useState } from "react";

export default {
  title: 'TUK/Marketing/Page Section/Contact',
};

export function ThreeInputsFieldWithBlueBackground() {
  return (
    <>
      <div class="mx-auto container w-full flex justify-center py-20">
        <div class="w-full max-w-lg">
          <div class="bg-indigo-800 flex w-full justify-center items-center pt-8 pb-9">
            <div class="flex flex-col items-center">
              <div>
                <img src="https://cdn.tuk.dev/assets/components/111220/cn/logo(1).png" alt="" />
              </div>
              <div class="py-8 text-white flex flex-col items-center">
                <h1 class="font-medium text-2xl">Get Onboard Now</h1>
                <p class="py-3 italic text-sm">Latest updates for you</p>
              </div>
              <div>
                <form action="">
                  <div class="flex flex-col items-center">
                    <input class="h-12 bg-indigo-900 pl-6 placeholder-white text-white focus:outline-none text-lg" placeholder="Your Name" type="text" name="" id="" />
                    <input class="h-12 bg-indigo-900 pl-6 placeholder-white text-white focus:outline-none text-lg mt-3" placeholder="Email" type="email" name="" id="" />
                    <input class="h-12 bg-indigo-900 pl-6 placeholder-white text-white focus:outline-none text-lg mt-3" placeholder="Zip Code" type="text" name="" id="" />
                    <button class="hover:opacity-90 w-full py-3 px-4 bg-red-600 text-sm uppercase text-white mt-3 focus:outline-none">JOIN US TODAY</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Contact() {
  return (
    <div className="bg-gray-50">
      <div className="w-full h-full lg:flex items-start justify-center xl:py-20 py-8 px-4">
        <div className="lg:w-1/2 xl:mr-12 lg:mr-6">
          <img tabIndex={0} src="https://i.ibb.co/n0f7Np4/pexels-anna-shvets-4588047-1.png" alt="image of a dog with heart" className="w-full h-full" />
          <div className="flex flex-wrap items-center mt-8">
            <div arial-label="Address" className="mr-6 border md:w-auto w-full rounded border-gray-200 py-6 pr-9 pl-6">
              <p className="text-base font-semibold leading-4 text-gray-900">Los Angeles</p>
              <p className="text-base leading-4 mt-4 text-gray-600">190 Collins Street</p>
              <p className="text-base leading-4 mt-2 text-gray-600">CA 9090 USA</p>
            </div>
            <div className="mr-6 border md:w-auto w-full md:mt-0 mt-4  rounded border-gray-200 py-6 pr-9 pl-6">
              <p className="text-base font-semibold leading-4 text-gray-900">Berln</p>
              <p className="text-base leading-4 mt-4 text-gray-600">190 Collins Street</p>
              <p className="text-base leading-4 mt-2 text-gray-600">CA 9090 USA</p>
            </div>
            <div className="mr-6 xl:mt-0 md:w-auto w-full lg:mt-4 md:mt-0 mt-4 border rounded border-gray-200 py-6 pr-9 pl-6">
              <p className="text-base font-semibold leading-4 text-gray-900">Maldives</p>
              <p className="text-base leading-4 mt-4 text-gray-600">190 Collins Street</p>
              <p className="text-base leading-4 mt-2 text-gray-600">CA 9090 USA</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 xl:pl-12 lg:pl-6 lg:pt-0 pt-4">
          <h1 aria-label="Get in touch" role="heading" className="text-3xl font-bold   text-gray-900">
            Get in touch
          </h1>
          <p role="contentinfo" className="mt-4 text-base leading-6 text-gray-600 lg:block hidden">
            It is a long established fact that a reader <br /> will be distracted by the readable{" "}
          </p>
          <p role="contentinfo" className="mt-4 text-base leading-6 text-gray-600 lg:hidden">
            It is a long established fact that a reader will be distracted by the readable{" "}
          </p>
          <div className="xl:flex items-center justify-between mt-10">
            <div>
              <p className="text-base font-medium leading-4 mb-4 text-gray-800">First Name</p>
              <input type="name" aria-label="Please input first name" className="xl:w-48 w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500" placeholder="eg. William" />
            </div>
            <div className="xl:ml-6 xl:mt-0 mt-4">
              <p className="text-base font-medium leading-4 mb-4 text-gray-800">Last Name</p>
              <input type="name" aria-label="Please input Last name" className="xl:w-48 w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500" placeholder="eg. Smith" />
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base font-medium leading-4 mb-4 text-gray-800">Email Address</p>
            <input type="email" aria-label="Please enter email" className="w-full p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500" placeholder="eg. william.smith@doeco.com" />
          </div>
          <div className="mt-6">
            <p className="text-base font-medium leading-4 mb-4 text-gray-800">Message </p>
            <textarea aria-label="Please leave comments" className="w-full resize-none h-40 p-3 text-base leading-none text-gray-500 bg-gray-100 rounded placeholder-gray-500" defaultValue={""} />
          </div>
          <button role="button" arial-label="send message " className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 text-base font-semibold leading-4 py-6 px-8 text-white bg-indigo-700 rounded mt-12">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
export function Contact1() {
  //import React, { useState } from "react"; 
  const [show, setShow] = useState(false);
  return (
    <div className="bg-gradient-to-b from-purple-600 to-indigo-700 h-96 w-full">
      <div className="md:px-20 px-4 py-8">
        <div className="flex items-center justify-between">
          <div>
            <svg width={96} height={16} viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.539773 3.63636H4.91477V15H8.80682V3.63636H13.1818V0.454545H0.539773V3.63636ZM16.2802 15.1705C17.7006 15.1705 18.7731 14.6875 19.4336 13.4659H19.5188V15H23.1836V7.52841C23.1836 5.51136 21.2731 3.94886 18.1552 3.94886C14.8952 3.94886 13.2901 5.65341 13.1552 7.64205H16.7631C16.8555 6.96733 17.3526 6.64773 18.0984 6.64773C18.7802 6.64773 19.2631 6.96023 19.2631 7.52841V7.55682C19.2631 8.18892 18.5671 8.38778 16.7347 8.52273C14.4833 8.68608 12.729 9.59517 12.729 11.9886C12.729 14.1619 14.1921 15.1705 16.2802 15.1705ZM17.5586 12.6989C16.891 12.6989 16.4222 12.3722 16.4222 11.7614C16.4222 11.2003 16.82 10.767 17.729 10.625C18.354 10.5256 18.8796 10.3977 19.2915 10.2273V11.1364C19.2915 12.1307 18.4464 12.6989 17.5586 12.6989ZM28.9773 8.86364C28.9844 7.78409 29.5952 7.13068 30.5682 7.13068C31.5554 7.13068 32.1378 7.78409 32.1307 8.86364V15H36.0511V8.03977C36.0582 5.66761 34.5597 3.94886 32.2443 3.94886C30.6392 3.94886 29.3679 4.78693 28.892 6.16477H28.7784V4.09091H25.0568V15H28.9773V8.86364ZM37.9865 15H41.907V11.9034L42.4964 11.1577L44.7195 15H49.2081L45.3871 8.87074L49.0945 4.09091H44.6911L42.049 7.75568H41.907V0.454545H37.9865V15ZM57.8995 5H61.6779C61.6637 2.14489 59.462 0.255681 55.9393 0.255681C52.4805 0.255681 50.0373 2.11648 50.0586 4.88636C50.0515 7.15909 51.6282 8.4233 54.2063 8.97727L55.6552 9.28977C57.2745 9.64489 57.8285 10.0497 57.8427 10.7102C57.8285 11.4276 57.1751 11.9318 55.9109 11.9318C54.3981 11.9318 53.5032 11.2216 53.4393 9.88636H49.6893C49.7035 13.5369 52.1751 15.1705 55.9677 15.1705C59.6538 15.1705 61.8626 13.5795 61.8768 10.7102C61.8626 8.49432 60.5415 6.93892 57.3313 6.25L56.1381 5.99432C54.7603 5.70312 54.1424 5.2983 54.1779 4.60227C54.185 3.96307 54.7177 3.49432 55.9393 3.49432C57.2177 3.49432 57.8214 4.0554 57.8995 5ZM67.3562 8.86364C67.3633 7.78409 67.9883 7.13068 68.9471 7.13068C69.9485 7.13068 70.5167 7.78409 70.5096 8.86364V15H74.43V8.03977C74.4371 5.65341 72.9315 3.94886 70.6232 3.94886C69.011 3.94886 67.8178 4.77273 67.3278 6.16477H67.2141V0.454545H63.4357V15H67.3562V8.86364ZM81.6211 15.1989C85.1722 15.1989 87.2745 12.9261 87.2745 9.57386C87.2745 6.22159 85.1722 3.94886 81.6211 3.94886C78.07 3.94886 75.9677 6.22159 75.9677 9.57386C75.9677 12.9261 78.07 15.1989 81.6211 15.1989ZM81.6495 12.3011C80.5984 12.3011 79.9734 11.2571 79.9734 9.54545C79.9734 7.83381 80.5984 6.78977 81.6495 6.78977C82.6438 6.78977 83.2688 7.83381 83.2688 9.54545C83.2688 11.2571 82.6438 12.3011 81.6495 12.3011ZM95.3711 4.09091H93.4961V1.47727H89.5756V4.09091H88.1836V6.93182H89.5756V11.8608C89.5472 14.1477 90.9606 15.3054 93.6665 15.1562C94.5543 15.1065 95.2148 14.9219 95.57 14.8153L95.0018 12.0597C94.8526 12.0952 94.4691 12.1733 94.2347 12.1733C93.7234 12.1733 93.4961 11.946 93.4961 11.4915V6.93182H95.3711V4.09091Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="hidden lg:flex items-center">
            <p tabIndex={0} role="button" className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 cursor-pointer text-white">
              Home
            </p>
            <p tabIndex={0} role="button" className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">
              About
            </p>
            <p tabIndex={0} role="button" className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">
              Pages
            </p>
            <p tabIndex={0} role="button" className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">
              Doc
            </p>
            <p tabIndex={0} role="button" className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">
              Contact
            </p>
            <button className="text-base font-medium leading-none text-indigo-700 py-4 px-5 bg-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-gray-300">Get it now</button>
          </div>
          <div className="lg:hidden text-white" onClick={() => setShow(!show)}>
            {show ? (
              <div id="close" className=" close-m-menu" onclick="MenuHandler(false)">
                <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            ) : (
              <svg id="open" onclick="MenuHandler(true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            )}
          </div>
        </div>
        {show && (
          <nav className="lg:hidden relative z-40">
            <div className="w-full">
              <div className="visible flex items-center">
                <ul id="list" className=" p-2 bg-white absolute rounded top-0 left-0 right-0 shadow mt-6">
                  <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Home</span>
                    </a>
                  </li>
                  <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">About</span>
                    </a>
                  </li>
                  <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Page</span>
                    </a>
                  </li>
                  <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Doc</span>
                    </a>
                  </li>
                  <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
      </div>
      <div className="w-full flex items-center justify-center my-12">
        <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s chat and get a quote!</p>
          <div className="md:flex items-center mt-12">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">Name</label>
              <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
              <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">Company name</label>
              <input tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">Country</label>
              <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800">Message</label>
              <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
            </div>
          </div>
          <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
          <div className="flex items-center justify-center w-full">
            <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Contact2() {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center">
        <div className="py-20 lg:py-24">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 lg:px-16 text-center uppercase">Get in touch with us</h1>
          <div className="mt-10 md:mt-16 w-full h-full px-4 sm:px-0">
            <input type="email" placeholder="Your Email" className="bg-gray-100 rounded w-full p-4 text-base leading-none text-gray-600 focus:outline-none border  border-transparent focus:border-gray-600" />
            <textarea type="text" aria-label=" your message" placeholder="Your Message" className="bg-gray-100 rounded text-base leading-none text-gray-600 mt-4 w-full h-64 pt-4 pl-4 resize-none focus:outline-none border border-2 border-transparent focus:border-gray-600" defaultValue={""} />
            <button className="bg-indigo-700 hover:bg-indigo-600 rounded text-base font-medium leading-none text-white py-4 w-full mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Your Message</button>
          </div>
          <div className="mt-20 md:mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 ">
            <div>
              <div className="flex justify-center">
                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 10.9375C13.3629 10.9375 14.0625 10.2379 14.0625 9.375C14.0625 8.51206 13.3629 7.8125 12.5 7.8125C11.6371 7.8125 10.9375 8.51206 10.9375 9.375C10.9375 10.2379 11.6371 10.9375 12.5 10.9375Z" fill="#4338CA" />
                  <path
                    d="M12.5 1.5625C8.19238 1.5625 4.6875 4.91455 4.6875 9.0332C4.6875 10.9946 5.58154 13.603 7.34473 16.7861C8.76074 19.3418 10.3989 21.6528 11.251 22.8027C11.395 22.9992 11.5832 23.159 11.8005 23.2691C12.0177 23.3793 12.2579 23.4367 12.5015 23.4367C12.745 23.4367 12.9852 23.3793 13.2025 23.2691C13.4197 23.159 13.608 22.9992 13.752 22.8027C14.6025 21.6528 16.2422 19.3418 17.6582 16.7861C19.4185 13.604 20.3125 10.9956 20.3125 9.0332C20.3125 4.91455 16.8076 1.5625 12.5 1.5625ZM12.5 12.5C11.8819 12.5 11.2777 12.3167 10.7638 11.9733C10.2499 11.63 9.8494 11.1419 9.61288 10.5709C9.37635 9.99987 9.31447 9.37153 9.43505 8.76534C9.55562 8.15915 9.85325 7.60233 10.2903 7.16529C10.7273 6.72825 11.2842 6.43062 11.8903 6.31005C12.4965 6.18947 13.1249 6.25135 13.6959 6.48788C14.2669 6.7244 14.755 7.12494 15.0983 7.63884C15.4417 8.15275 15.625 8.75693 15.625 9.375C15.6241 10.2035 15.2946 10.9979 14.7087 11.5837C14.1229 12.1696 13.3285 12.4991 12.5 12.5Z"
                    fill="#4338CA"
                  />
                </svg>
              </div>
              <h2 className="text-base font-medium leading-none text-center text-gray-800 mt-6">Address</h2>
              <div className="flex justify-center">
                <p className="w-40 md:w-48 text-base leading-normal text-center text-gray-600 mt-2">132, Les Doulgas Cresent Avenue NY, 1504 DB</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 10.9375C13.3629 10.9375 14.0625 10.2379 14.0625 9.375C14.0625 8.51206 13.3629 7.8125 12.5 7.8125C11.6371 7.8125 10.9375 8.51206 10.9375 9.375C10.9375 10.2379 11.6371 10.9375 12.5 10.9375Z" fill="#4338CA" />
                  <path
                    d="M12.5 1.5625C8.19238 1.5625 4.6875 4.91455 4.6875 9.0332C4.6875 10.9946 5.58154 13.603 7.34473 16.7861C8.76074 19.3418 10.3989 21.6528 11.251 22.8027C11.395 22.9992 11.5832 23.159 11.8005 23.2691C12.0177 23.3793 12.2579 23.4367 12.5015 23.4367C12.745 23.4367 12.9852 23.3793 13.2025 23.2691C13.4197 23.159 13.608 22.9992 13.752 22.8027C14.6025 21.6528 16.2422 19.3418 17.6582 16.7861C19.4185 13.604 20.3125 10.9956 20.3125 9.0332C20.3125 4.91455 16.8076 1.5625 12.5 1.5625ZM12.5 12.5C11.8819 12.5 11.2777 12.3167 10.7638 11.9733C10.2499 11.63 9.8494 11.1419 9.61288 10.5709C9.37635 9.99987 9.31447 9.37153 9.43505 8.76534C9.55562 8.15915 9.85325 7.60233 10.2903 7.16529C10.7273 6.72825 11.2842 6.43062 11.8903 6.31005C12.4965 6.18947 13.1249 6.25135 13.6959 6.48788C14.2669 6.7244 14.755 7.12494 15.0983 7.63884C15.4417 8.15275 15.625 8.75693 15.625 9.375C15.6241 10.2035 15.2946 10.9979 14.7087 11.5837C14.1229 12.1696 13.3285 12.4991 12.5 12.5Z"
                    fill="#4338CA"
                  />
                </svg>
              </div>
              <h2 className="text-base font-medium leading-none text-center text-gray-800 mt-6">Address</h2>
              <div className="flex justify-center">
                <p className="w-40 md:w-48 text-base leading-normal text-center text-gray-600 mt-2">132, Los Vegas Cresent Avenue NY, 1504 DB</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex justify-center">
                <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 10.9375C13.3629 10.9375 14.0625 10.2379 14.0625 9.375C14.0625 8.51206 13.3629 7.8125 12.5 7.8125C11.6371 7.8125 10.9375 8.51206 10.9375 9.375C10.9375 10.2379 11.6371 10.9375 12.5 10.9375Z" fill="#4338CA" />
                  <path
                    d="M12.5 1.5625C8.19238 1.5625 4.6875 4.91455 4.6875 9.0332C4.6875 10.9946 5.58154 13.603 7.34473 16.7861C8.76074 19.3418 10.3989 21.6528 11.251 22.8027C11.395 22.9992 11.5832 23.159 11.8005 23.2691C12.0177 23.3793 12.2579 23.4367 12.5015 23.4367C12.745 23.4367 12.9852 23.3793 13.2025 23.2691C13.4197 23.159 13.608 22.9992 13.752 22.8027C14.6025 21.6528 16.2422 19.3418 17.6582 16.7861C19.4185 13.604 20.3125 10.9956 20.3125 9.0332C20.3125 4.91455 16.8076 1.5625 12.5 1.5625ZM12.5 12.5C11.8819 12.5 11.2777 12.3167 10.7638 11.9733C10.2499 11.63 9.8494 11.1419 9.61288 10.5709C9.37635 9.99987 9.31447 9.37153 9.43505 8.76534C9.55562 8.15915 9.85325 7.60233 10.2903 7.16529C10.7273 6.72825 11.2842 6.43062 11.8903 6.31005C12.4965 6.18947 13.1249 6.25135 13.6959 6.48788C14.2669 6.7244 14.755 7.12494 15.0983 7.63884C15.4417 8.15275 15.625 8.75693 15.625 9.375C15.6241 10.2035 15.2946 10.9979 14.7087 11.5837C14.1229 12.1696 13.3285 12.4991 12.5 12.5Z"
                    fill="#4338CA"
                  />
                </svg>
              </div>
              <h2 className="text-base font-medium leading-none text-center text-gray-800 mt-6">Address</h2>
              <div className="justify-center flex">
                <p className="w-40 md:w-48 text-base leading-normal text-center text-gray-600 mt-2">132,Los Angelos Cresent Avenue NY, 1504 DB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Contact3() {
  return (
    <>
      <div className="container mx-auto py-10 px-5">
        <div className="relative md:block flex flex-col-reverse">
          <iframe id="iframe" className="w-full md:absolute right-0 md:h-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429154.75848513725!2d-117.38916630193054!3d32.824817514402476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1593793817578!5m2!1sen!2s" width={425} height={250} style={{ border: 0 }} allowFullScreen title="maps" />
          <div className>
            <div className="container xl:w-1/3 md:w-1/2 relative z-30 bg-gradient-to-r from-white via-white to-transparent md:pl-6 py-4 sm:py-10 lg:py-40">
              <div className="lg:w-96">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-10 text-gray-800">LET’S TALK</h1>
                <p className="text-base leading-normal text-gray-600 mt-4 lg:mt-2">
                  We are here to answer any questions <br />
                  you may have about our ui kit
                </p>
              </div>
              <div className="mt-8 lg:mt-16">
                <h2 className="lg:w-64 text-xl lg:text-2xl font-semibold leading-normal text-gray-800">Address</h2>
                <p className="sm:w-1/2 text-base leading-normal text-gray-600 mt-2">132, Les Doulgas Cresent Avenue NY, 1504 DB</p>
              </div>
              <div className="mt-8 lg:mt-12">
                <h2 className="lg:w-64 text-xl lg:text-2xl font-semibold leading-normal text-gray-800">Phone</h2>
                <p className="text-base leading-normal text-gray-600 mt-2">+1(888)24-2174 | +1(888)25-6666</p>
              </div>
              <div className="mt-8 lg:mt-12">
                <h2 className="lg:w-64 text-xl lg:text-2xl font-semibold leading-normal text-gray-800">Email</h2>
                <p className="text-base leading-normal text-gray-600 mt-2">creativestudionewyork12@gmail.com</p>
              </div>
              <button className="mt-8 lg:mt-10 px-8 py-4 hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium text-center text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Send Email</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Contact4() {
  return (
    <div className="py-12 2xl:px-20 px-6 xl:mx-auto xl:container">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-gray-800 text-center">Contact us</h1>
        <p className="text-base leading-normal text-center text-gray-600 mt-5 md:w-3/5">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age so they can understand it's not literally raining cats and dogs.</p>

        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 gap-6">
          <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center">
            <div className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center" role="img" aria-label="phone number">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.4503 16.3503C21.2056 16.0897 20.3417 15.3191 18.7536 14.2995C17.1537 13.2711 15.9739 12.6298 15.6354 12.4803C15.6056 12.4671 15.5728 12.4622 15.5404 12.4663C15.508 12.4703 15.4773 12.4831 15.4517 12.5033C14.9065 12.9284 13.9887 13.7094 13.9395 13.7516C13.6217 14.0239 13.6217 14.0239 13.3615 13.9391C12.904 13.7891 11.4828 13.0344 10.2443 11.7931C9.00591 10.5519 8.21231 9.09547 8.06231 8.63844C7.97653 8.37781 7.97653 8.37781 8.24981 8.06C8.292 8.01078 9.07341 7.09297 9.49856 6.54828C9.51873 6.52263 9.53152 6.49197 9.53557 6.45959C9.53962 6.42722 9.53476 6.39435 9.52153 6.36453C9.372 6.02562 8.73075 4.84625 7.70231 3.2464C6.68138 1.65875 5.91169 0.794843 5.65106 0.550155C5.62715 0.527586 5.59758 0.511886 5.56549 0.504709C5.5334 0.497532 5.49997 0.499143 5.46872 0.509374C4.55769 0.822445 3.67869 1.22192 2.84372 1.70234C2.03766 2.17092 1.27455 2.70973 0.563246 3.3125C0.538416 3.33361 0.519801 3.36108 0.509396 3.39196C0.498991 3.42285 0.497189 3.45598 0.504184 3.48781C0.602152 3.94437 1.07043 5.85031 2.52356 8.49031C4.00622 11.1847 5.03372 12.5652 7.21106 14.735C9.38841 16.9048 10.8125 17.9942 13.5097 19.4769C16.1497 20.93 18.0565 21.3987 18.5122 21.4958C18.5441 21.5027 18.5772 21.5009 18.6082 21.4905C18.6391 21.4801 18.6667 21.4615 18.6879 21.4367C19.2906 20.7254 19.8293 19.9623 20.2976 19.1562C20.778 18.3212 21.1774 17.4422 21.4906 16.5312C21.5006 16.5002 21.5022 16.4671 21.4951 16.4353C21.488 16.4035 21.4725 16.3741 21.4503 16.3503Z"
                  fill="#4338CA"
                />
              </svg>
            </div>
            <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">Phone</p>
            <p className="text-base mt-4 leading-4 text-center text-gray-600">(007) 095-6890</p>
          </div>
          <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center">
            <div className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center" role="img" aria-label="email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.0805 7.89188L12.3394 3.07922C12.2338 3.02717 12.1177 3.00009 12 3.00009C11.8823 3.00009 11.7662 3.02717 11.6606 3.07922L1.92188 7.89188C1.79594 7.95315 1.68968 8.04846 1.61512 8.16701C1.54056 8.28556 1.50068 8.42262 1.5 8.56266V20.25C1.50055 20.3491 1.52062 20.4471 1.55907 20.5384C1.59751 20.6298 1.65357 20.7126 1.72405 20.7823C1.79453 20.8519 1.87804 20.907 1.96981 20.9444C2.06159 20.9817 2.15982 21.0006 2.25891 21H21.7411C21.8402 21.0006 21.9384 20.9817 22.0302 20.9444C22.122 20.907 22.2055 20.8519 22.2759 20.7823C22.3464 20.7126 22.4025 20.6298 22.4409 20.5384C22.4794 20.4471 22.4994 20.3491 22.5 20.25V8.56266C22.4995 8.42286 22.46 8.28598 22.3859 8.16745C22.3117 8.04893 22.206 7.95348 22.0805 7.89188ZM12 4.5886L20.1094 8.5936L11.8734 12.6614L3.76406 8.65641L12 4.5886Z"
                  fill="#4338CA"
                />
              </svg>
            </div>
            <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">Email</p>
            <p className="text-base mt-4 leading-4 text-center text-gray-600">Alphasquad@gmail.com</p>
          </div>
          <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center">
            <div className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center" role="img" aria-label="location">
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 0.5C3.85953 0.5 0.5 3.52391 0.5 7.25C0.5 13.25 8 21.5 8 21.5C8 21.5 15.5 13.25 15.5 7.25C15.5 3.52391 12.1405 0.5 8 0.5ZM8 11C7.40666 11 6.82664 10.8241 6.33329 10.4944C5.83994 10.1648 5.45542 9.69623 5.22836 9.14805C5.0013 8.59987 4.94189 7.99667 5.05764 7.41473C5.1734 6.83279 5.45912 6.29824 5.87868 5.87868C6.29824 5.45912 6.83279 5.1734 7.41473 5.05764C7.99667 4.94189 8.59987 5.0013 9.14805 5.22836C9.69623 5.45542 10.1648 5.83994 10.4944 6.33329C10.8241 6.82664 11 7.40666 11 8C10.9991 8.79538 10.6828 9.55794 10.1204 10.1204C9.55794 10.6828 8.79538 10.9991 8 11Z"
                  fill="#4338CA"
                />
              </svg>
            </div>
            <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">Address</p>
            <p className="text-base mt-4 leading-6 text-center text-gray-600 w-48">13420 -Oak Street, New York City (9134200)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Contact5() {
  return (
    <div className="xl:container xl:mx-auto py-12 lg:py-0">
      <div className="flex flex-col lg:flex-row justify-center items-center items-strech h-full mx-4">
        <div className="lg:w-full 2xl:w-3/5">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 w-11/12">Get in touch</h1>
          <p className="mt-3 lg:mt-4 text-base leading-normal text-gray-600 md:w-8/12 2xl:w-7/12">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age so</p>
        </div>
        <div className="lg:w-full 2xl:w-2/5 flex w-full bg-gray-50  flex-col justify-center px-5 py-5 md:px-7 md:py-7 lg:py-12 lg:px-20 mt-2 md:mt-6 lg:mt-0">
          <h2 className="text-lg font-semibold text-gray-800">Send us a message</h2>
          <input className="rounded-md border border-gray-300 mt-4 md:mt-6 p-4 text-base text-gray-600 focus:outline-none focus:border-gray-700" type="text" aria-label="Name" placeholder="Enter your Name" />
          <input className="rounded-md border border-gray-300 mt-4 p-4 text-base text-gray-600 focus:outline-none focus:border-gray-700" type="email" aria-label="Email" placeholder="Enter your email" />
          <textarea name="" id="" aria-label="Your message" placeholder="Message" className="w-full h-48 lg:h-36 xl:h-48 2xl:h-56 mt-4 md:mt-6 p-4 rounded-md border border-gray-300 resize-none text-base text-gray-600 focus:outline-none focus:border-gray-700"></textarea>
          <button className="bg-indigo-700 hover:bg-indigo-600 rounded-md mt-4 md:mt-5 leading-4 p-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Send</button>
        </div>
      </div>
    </div>
  );
}

export function ContactGrey() {
  return (
    <div className="container mx-auto pt-16 px-4 ">
      <div className="bg-gray-100 py-12 xl:pl-20 pl-10 rounded">
        <h1 className="text-gray-800 xl:text-4xl text-3xl font-extrabold pt-6 pb-5">Get In touch</h1>
        <p className="text-xl text-gray-600 pb-8 font-normal">
          545, Street 11, Block F <br />
          Dean Boulevard, Ohio
        </p>
        <ul className="xl:flex w-2/4 justify-between pb-6">
          <li>
            <div className="flex sm:mb-4 mb-2 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={5} width={18} height={14} rx={2} />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </div>
              <p className="pl-2 text-base text-gray-600 font-normal">Info@alphad.com</p>
            </div>
          </li>
          <li>
            <div className="flex sm:mb-4 mb-1 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </div>
              <p className="pl-2 text-base text-gray-600 font-normal">+1 (308) 321 321</p>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)" className="text-indigo-700 text-sm font-bold underline">
              View Job Openings
            </a>
          </li>
        </ul>
      </div>
      <div className="xl:flex lg:flex bg-indigo-700 p-5 xl:rounded">
        <div className="w-full bg-white h-full rounded">
          <form id="contact" className="py-5 xl:px-12 px-4 xl:w-3/5 lg:w-3/5">
            <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="xl:w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label htmlFor="first_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    First Name
                  </label>
                  <input required id="first_name" name="first_name" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 w-full flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="First Name" />
                </div>
              </div>
              <div className="xl:w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col">
                  <label htmlFor="last_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Last Name
                  </label>
                  <input required id="last_name" name="last_name" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Last Name" />
                </div>
              </div>
            </div>
            <div className="block xl:flex w-full justify-between flex-wrap">
              <div className="xl:w-2/4 max-w-xs mt-6 xl:mt-0">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Email
                  </label>
                  <input required id="email" name="email" type="email" className="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Email" />
                </div>
              </div>
              <div className="xl:w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col mt-6 xl:mt-0">
                  <label htmlFor="phone" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Phone
                  </label>
                  <input required id="phone" name="phone" type="tel" className="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Phone Number" />
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea name="message" placeholder="Send a message" className="text-sm border-gray-300 border mb-6 rounded py-2 outline-none resize-none px-3 focus:outline-none focus:border focus:border-indigo-700" rows={5} id="message" defaultValue={""} />
              </div>
              <button type="submit" className="focus:outline-none bg-indigo-700 mb-1 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function ContactIndigo() {
  return (
    <div className="container mx-auto pt-16">
      <div className="lg:flex">
        <div className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
            <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you.</p>
            <div className="flex pb-4 items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </div>
              <p className="pl-4 text-white text-base">+1 (308) 321 321</p>
            </div>
            <div className="flex items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={5} width={18} height={14} rx={2} />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </div>
              <p className="pl-4 text-white text-base">Info@alphas.com</p>
            </div>
            <p className="text-lg text-white pt-10 tracking-wide">
              545, Street 11, Block F <br />
              Dean Boulevard, Ohio
            </p>
            <a href="javascript:void(0)">
              <p className="text-white pt-16 font-bold tracking-wide underline">View Job Openings</p>
            </a>
          </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
          <form id="contact" className="bg-white py-4 px-8 rounded-tr rounded-br">
            <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Full Name
                  </label>
                  <input required id="full_name" name="full_name" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                </div>
              </div>
              <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Email
                  </label>
                  <input required id="email" name="email" type="email" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap">
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                    Phone
                  </label>
                  <input required id="phone" name="phone" type="tel" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea placeholder name="message" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows={8} id="message" defaultValue={""} />
              </div>
              <button type="submit" className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function ContactUs() {
  return (
    <div className="relative h-full"> 
      <iframe id="iframe" className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429154.75848513725!2d-117.38916630193054!3d32.824817514402476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1593793817578!5m2!1sen!2s" width="425" height="250" style={{border:0, height:"700px"}}  allowfullscreen="" title="maps"></iframe>
      <div className="container mx-auto w-full z-40 absolute bottom-0 right-0 lg:mb-32 mb-56 xl:w-3/12 lg:w-1/2 sm:w-8/12 w-11/12 lg:mr-20 md:mr-32">
        <div className="flex justify-center lg:justify-end px-4">
          <div className="bg-white shadow rounded-lg p-8 sm:p-12 w-full">
            <h1 className="text-xl sm:text-2xl font-semibold leading-normal text-gray-800">How can we help?</h1>
            <div className="mt-4 sm:mt-16 flex flex-col w-full space-y-10">
              <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="Name" />
              <input type="email" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="E-mail" />
              <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="Phone" />
              <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="Group Or Company" />
              <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="How can we help?" />
              <div>
                <button className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-upload" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4b5563" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                    <polyline points="9 15 12 12 15 15" />
                    <line x1="12" y1="12" x2="12" y2="21" />
                  </svg>
                  <p className="text-sm sm:text-base text-gray-600">Upload File</p>
                </button>
              </div>
              <button className="flex bg-indigo-700 rounded justify-center items-center py-2 sm:py-4 text-xs sm:text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600">Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative z-20 bg-indigo-700 pt-20 pb-8 md:pt-16 md:pb-8 px-4">
        <div className="container mx-auto flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between">
          <div className="flex space-x-6 flex-row lg:space-x-0 sm:items-start justify-between lg:justify-center">
            <div className="pr-4">
              <h1 className="text-base sm:text-2xl font-medium text-white">Address</h1>
              <p className="text-xs sm:text-base leading-normal text-white sm:mt-4 lg:w-1/2">105 A 7th Street New York, NY 10003 Office</p>
            </div>
            <div className="">
              <h1 className="text-base sm:text-2xl font-medium text-white">Contact</h1>
              <p className="text-xs sm:text-base leading-normal text-white sm:mt-4 lg:w-1/2">www.studio153@gmail.com</p>
              <p className="text-xs sm:text-base leading-normal text-white">0355-54545411</p>
            </div>
          </div>
          <div className="flex items-center lg:items-end justify-center space-x-6">
            <a href="javascript:void(0)" className="bg-indigo-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white hover:bg-indigo-500">
              <svg aria-label="open instagram" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram h-5 w-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
            <a href="javascript:void(0)" className="bg-indigo-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white hover:bg-indigo-500">
              <svg aria-label="open drible" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ball-basketball h-5 w-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <line x1="5.65" y1="5.65" x2="18.35" y2="18.35" />
                <line x1="5.65" y1="18.35" x2="18.35" y2="5.65" />
                <path d="M12 3a9 9 0 0 0 9 9" />
                <path d="M3 12a9 9 0 0 1 9 9" />
              </svg>
            </a>
            <a href="javascript:void(0)" className="bg-indigo-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white hover:bg-indigo-500">
              <svg aria-label="open twitter" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter h-5 w-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </a>
            <a href="javascript:void(0)" className="bg-indigo-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white hover:bg-indigo-500">
              <svg aria-label="open youtube" xmlns="http://www.w3.org/2000/svg " className="icon icon-tabler icon-tabler-brand-youtube h-5 w-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="4" />
                <path d="M10 9l5 3l-5 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export function ContactWithMap() {
  return (
    <div className="container mx-auto pt-16">
      <div className="xl:flex lg:flex">
        <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full">
          <form id="contact" className="bg-white py-5 px-8">
            <h1 className="xl:text-4xl text-3xl text-gray-800 font-extrabold mb-8">Send Us A Message</h1>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label for="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Full Name</label>
                  <input required id="full_name" name="full_name" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                </div>
              </div>
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label for="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Email</label>
                  <input required id="email" name="email" type="email" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap">
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label for="phone" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Phone</label>
                  <input required id="phone" name="phone" type="tel" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="" />
                </div>
              </div>
            </div>
            <div className="lg:w-full sm:w-1/2 mt-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-800 mb-2" for="message">Message</label>
                <textarea placeholder="" className="text-sm border-gray-300 border mb-6 rounded py-2 outline-none resize-none px-3 xl:w-11/12" rows="5" id="message"></textarea>
              </div>
              <button className="focus:outline-none bg-indigo-700 mb-1 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">Submit</button>
            </div>
          </form>
        </div>
        <div className="xl:w-2/5 lg:w-2/5 py-16 flex items-center">
          <div className="w-5/6 mx-auto">
            <p className="text-base text-gray-600 tracking-wide font-normal">
              545, Street 11, Block F
              <br />
              Dean Boulevard, Ohio
            </p>
            <div className="flex justify-between mt-6 mb-3">
              <div className="flex items-center">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <polyline points="3 7 12 13 21 7"></polyline>
                  </svg>
                </div>
                <p className="pl-2 text-gray-600 text-sm font-normal">Info@alphad.com</p>
              </div>
              <div className="flex items-center">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <p className="pl-2 text-gray-600 text-sm font-normal">+1 (308) 321 321</p>
              </div>
            </div>
            <iframe className="w-full rounded shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429154.75848513725!2d-117.38916630193054!3d32.824817514402476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1593793817578!5m2!1sen!2s" width="425" height="250" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>

  );
}

export function DividedWithAddressAndContactSections() {
  return (
    <>
      <div className="py-4 lg:py-8  relative">
        <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" alt="map" />
        <div className="xl:mx-auto xl:container  relative ">
          <div className="flex flex-wrap xl:mx-auto xl:container">
            <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
              <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden" alt="map" />
              <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                <div className="w-full 2xl:pl-48 xl:pt-1">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">We’re Here</h1>
                  <div className="w-full md:w-10/12 mt-3">
                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">We believe digital innovation is at the heart of every business success</h2>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Address</h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">Office #13, NSTP, NUST University H-12 Sector, Islamabad</h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Contact</h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 051 4567890 (Phone)</h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 123 4567890 (Cell)</h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Email</h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">alphasquad@example.com</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
              <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-indigo-700">Let’s Talk</h1>
                <div className="w-full 2xl:w-8/12 mt-3">
                  <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">For enquiries, please email us using the form below</h2>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">Name</p>
                    <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Justin Timberlake" />
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">Email Address</p>
                    <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="email" placeholder="example@mail.com" />
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">Message</p>
                    <textarea className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800" type="text" placeholder="Write us something..." defaultValue={""} />
                  </div>
                  <div className="py-5">
                    <button className="py-3 md:py-5 px-5 md:px-10 bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">Send</button>
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

export function GridStyleLocationsWithImage() {
  return (
    <div className="mx-auto container py-12 lg:px-52 px-4">
      <div className="flex items-center justify-center">
        <hr className="w-2.5 h-16 bg-indigo-700" />
        <h1 className="text-3xl font-bold text-gray-900 pl-7">Locations</h1>
      </div>
      <div className="lg:mt-16 mt-8 flex lg:flex-row flex-col lg:items-stretch sm:items-center">
        <div className="lg:w-1/2 sm:w-1/2 lg:border-r border-black lg:pr-12 xl:pr-24 lg:pb-24">
          <img alt="cafe interior" loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/cafe.png" className="w-full object-cover object-center h-full" />
        </div>
        <div className="lg:w-1/2">
          <div className="lg:pb-24 lg:pl-24 lg:pt-0 pt-8">
            <div>
              <p className="text-2xl font-semibold">New Jersey, USA</p>
              <p className="text-lg pt-5">2464 Royal Ln. Mesa, New Jersey 45463</p>
              <p className="text-lg pt-1">(316) 555-0116</p>
              <p className="text-lg pt-1">New Jersey</p>
            </div>

            <div className="lg:pt-24 pt-8">
              <p className="text-2xl font-semibold">New Jersey, USA</p>
              <p className="text-lg pt-5">2464 Royal Ln. Mesa, New Jersey 45463</p>
              <p className="text-lg pt-1">(316) 555-0116</p>
              <p className="text-lg pt-1">New Jersey</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex-row flex-col flex sm:items-center justify-center w-full">
        <div className="lg:w-2/5 lg:border-t lg:border-r border-black">
          <div className="lg:pr-24 lg:pt-24 pt-8 lg:pb-24">
            <p className="text-2xl font-semibold">SanFrancisco, USA</p>
            <p className="text-lg pt-5">2464 Royal Ln. Mesa, New Jersey 45463</p>
            <p className="text-lg pt-1">(316) 555-0116</p>
            <p className="text-lg pt-1">New Jersey</p>
          </div>
        </div>
        <div className="lg:w-2/5 lg:border-t border-black">
          <div className="lg:pl-24 lg:pt-24 pt-8 lg:pb-24">
            <div>
              <p className="text-2xl font-semibold">SanFrancisco, USA</p>
              <p className="text-lg pt-5">2464 Royal Ln. Mesa, New Jersey 45463</p>
              <p className="text-lg pt-1">(316) 555-0116</p>
              <p className="text-lg pt-1">New Jersey</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
} 