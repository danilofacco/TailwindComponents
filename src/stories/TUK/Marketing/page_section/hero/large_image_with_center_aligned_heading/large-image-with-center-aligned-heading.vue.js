<template>
    <div class="relative min-h-screen">
        <img src="https://images.unsplash.com/photo-1609910276422-d1892a5c6463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" class="absolute h-full object-cover object-center w-full" />
        <div class="lg:w-96 w-64 z-40 fixed z-40 top-0 bg-gray-800 shadow flex-col justify-between pb-12 transition duration-150 ease-in-out h-full" style="transform: translateX(-500px)" id="mobile-nav">
            <div class="lg:px-6 px-4 flex justify-between items-center pt-16">
                <a href="javascript:void(0)" class="cursor-pointer">
                    <img src="https://i.ibb.co/z7zB0mg/REELS.png" class="lg:w-28 w-16" />
                </a>
                <div class="cursor-pointer lg:block hidden" id="cross" @click="sidebarHandler(false)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
                        <rect x="4.09033" y="0.0544434" width="50" height="5" rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                        <rect x="0.554688" y="36.4097" width="50" height="5" rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                    </svg>
                </div>
                <div class="cursor-pointer lg:hidden block" id="cross" @click="sidebarHandler(false)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40" fill="none">
                        <rect x="4.09033" y="0.0544434" width="50" height="5" rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                        <rect x="0.554688" y="36.4097" width="50" height="5" rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                    </svg>
                </div>
            </div>
            <div class="lg:px-6 px-4">
                <ul class="mt-36">
                    <a href="javascript:void(0)" class="cursor-pointer">
                        <li class="text-base font-bold bg-indigo-700 hover:bg-indigo-700 lg:py-6 py-3 lg:px-10 px-5 text-white rounded-full">Home</li>
                    </a>
                    <a href="javascript:void(0)" class="cursor-pointer">
                        <li class="text-base font-bold text-white lg:py-6 py-3 lg:px-10 px-5 hover:bg-indigo-700 rounded-full my-6">Gallery</li>
                    </a>
                    <a href="javascript:void(0)" class="cursor-pointer">
                        <li class="text-base font-bold text-white lg:py-6 py-3 lg:px-10 px-5 hover:bg-indigo-700 rounded-full">Contact</li>
                    </a>
                </ul>
            </div>
        </div>
        <div class="absolute bg-gray-900 h-full w-full opacity-25"></div>
        <div class="mx-auto container lg:px-0 px-4 h-full relative">
            <div class="lg:flex hidden items-center pt-16 absolute w-full 2xl:px-0 px-4">
                <div class="cursor-pointer pr-6" id="menu" @click="sidebarHandler(true)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="31" viewBox="0 0 50 31" fill="none">
                        <rect x="50" y="31" width="50" height="5" rx="2.5" transform="rotate(180 50 31)" fill="white" />
                        <rect x="50" y="5" width="50" height="5" rx="2.5" transform="rotate(180 50 5)" fill="white" />
                        <rect x="35" y="18" width="35" height="5" rx="2.5" transform="rotate(180 35 18)" fill="white" />
                    </svg>
                </div>
                <a href="javascript:void(0)" class="cursor-pointer">
                    <img src="https://i.ibb.co/z7zB0mg/REELS.png" class="w-28" />
                </a>
            </div>
            <nav class="lg:hidden">
                <div class="flex pt-8 items-center px-4">
                    <div class="cursor-pointer pr-6" id="menu" @click="sidebarHandler(true)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 31" fill="none">
                            <rect x="50" y="31" width="50" height="5" rx="2.5" transform="rotate(180 50 31)" fill="white" />
                            <rect x="50" y="5" width="50" height="5" rx="2.5" transform="rotate(180 50 5)" fill="white" />
                            <rect x="35" y="18" width="35" height="5" rx="2.5" transform="rotate(180 35 18)" fill="white" />
                        </svg>
                    </div>
                    <a href="javascript:void(0)">
                        <div>
                            <img src="https://cdn.tuk.dev/assets/templates/reels/logo.png" alt="" id="logo" class="w-20" />
                        </div>
                    </a>
                </div>
            </nav>
            <div class="flex flex-col items-center justify-end lg:pb-28 pb-14 pt-96">
                <h1 class="lg:text-7xl text-4xl text-white font-bold py-16 text-center">EVERYDAY LIFE, <span class="font-light">CAPTURED</span></h1>
                <a href="javascript:void(0)"> <button class="text-2xl font-bold text-white border-4 border-white hover:bg-white hover:text-black rounded-full lg:py-5 py-3 lg:px-28 px-14 focus:outline-none">View Gallery</button> </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        sidebarHandler(check) {
            let sideBar = document.getElementById("mobile-nav");
            if (check) {
                sideBar.style.transform = "translateX(-0px)";
                logo.classList.add("hidden");
            } else {
                sideBar.style.transform = "translateX(-500px)";
                logo.classList.remove("hidden");
            }
        },
    },
};
</script>
