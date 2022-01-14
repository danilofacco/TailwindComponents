<template>
    <div>
        <div class="py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div class="relative p-4 md:p-8 bg-white dark:bg-gray-800 shadow-md rounded border border-gray-400">
                    <div class="w-full flex items-center justify-start text-gray-600 dark:text-gray-400 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-upload" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <polyline points="7 9 12 4 17 9" />
                            <line x1="12" y1="4" x2="12" y2="16" />
                        </svg>
                        <h1 class="text-left text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight ml-2">Upload Files</h1>
                    </div>
                    <p class="mb-5 text-sm text-gray-600 dark:text-gray-400 text-left font-normal">Attach files for portfolio</p>
                    <div class="flex items-center justify-start w-full mb-8 border border-dashed border-indigo-700 rounded-lg p-3">
                        <div class="cursor-pointer text-indigo-700 dark:text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-upload" width="48" height="48" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                                <polyline points="9 15 12 12 15 15" />
                                <line x1="12" y1="12" x2="12" y2="21" />
                            </svg>
                        </div>
                        <p class="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-left ml-4">
                            Drag and drop here or
                            <span class="cursor-pointer text-indigo-700 dark:text-indigo-600">browse</span>
                        </p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <div class="items-center text-gray-600 dark:text-gray-400 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            </svg>
                            <p class="text-gray-800 dark:text-gray-100 font-normal text-base tracking-normal ml-2 mr-4">Big Project.pdf</p>
                            <p class="text-gray-600 dark:text-gray-400 font-normal text-base tracking-normal">37%</p>
                        </div>
                        <div class="cursor-pointer text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative mb-6 mt-4">
                        <hr class="h-1 rounded-sm bg-gray-200" />
                        <hr class="absolute top-0 h-1 w-5/12 rounded-sm bg-indigo-700" />
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <div class="items-center text-gray-600 dark:text-gray-400 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            </svg>
                            <p class="text-gray-800 dark:text-gray-100 font-normal text-base tracking-normal ml-2 mr-4">Big Project.pdf</p>
                            <p class="text-gray-600 dark:text-gray-400 font-normal text-base tracking-normal">77%</p>
                        </div>
                        <div class="cursor-pointer text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative mb-6 mt-4">
                        <hr class="h-1 rounded-sm bg-gray-200" />
                        <hr class="absolute top-0 h-1 w-9/12 rounded-sm bg-indigo-700" />
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <div class="items-center text-gray-600 dark:text-gray-400 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            </svg>
                            <p class="text-gray-800 dark:text-gray-100 font-normal text-base tracking-normal ml-2 mr-4">Big Project.pdf</p>
                            <p class="text-gray-600 dark:text-gray-400 font-normal text-base tracking-normal">60%</p>
                        </div>
                        <div class="cursor-pointer text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative mb-8 mt-4">
                        <hr class="h-1 rounded-sm bg-gray-200" />
                        <hr class="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                    </div>
                    <div class="flex items-center justify-start w-full">
                        <button class="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                        <button class="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" @click="modalHandler()">Cancel</button>
                    </div>
                    <div class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:text-gray-400 transition duration-150 ease-in-out" @click="modalHandler()">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center py-12" id="button">
            <button class="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" @click="modalHandler(true)">Open Modal</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeftAlignedShort",
    methods: {
        modalHandler(val) {
            let modal = document.getElementById("modal");
            if (val) {
                this.fadeIn(modal);
            } else {
                this.fadeOut(modal);
            }
        },
        fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= 0.1) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        },
        fadeIn(el, display) {
            el.style.opacity = 0;
            el.style.display = display || "flex";
            (function fade() {
                let val = parseFloat(el.style.opacity);
                if (!((val += 0.2) > 1)) {
                    el.style.opacity = val;
                    requestAnimationFrame(fade);
                }
            })();
        },
    },
};
</script>
