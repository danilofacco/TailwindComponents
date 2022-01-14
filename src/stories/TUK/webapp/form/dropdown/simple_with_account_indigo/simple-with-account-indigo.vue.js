<template>
    <div class="mx-auto py-6">
        <div class="container flex justify-center mx-auto my-6">
            <div class="h-64 mb-32">
                <!-- Code block starts -->
                <div class="relative">
                    <div class="bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-700 w-40 cursor-pointer" data-menu>
                        <p class="pl-3 py-3 text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal font-normal">Basic Options</p>
                        <div class="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 15 12 9 18 15" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>
                    <ul class="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded mt-2 pb-1 w-48 absolute">
                        <li class="cursor-pointer rounded-t text-sm flex flex-col font-bold leading-3 tracking-normal pt-4 pb-3 mb-1 bg-indigo-700 text-white px-3">
                            <span class="font-medium">Steven Johnson</span>
                            <span class="font-normal mt-2">stevedoe@gmail.com</span>
                        </li>

                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Interface Settings</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Color Theme</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Wallpaper</li>
                        <li><hr class="border-gray-200 my-1" /></li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Notifications</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Alerts</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Email</li>
                        <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Push Notifications</li>
                    </ul>
                </div>
                <!-- Code block ends -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleWithAccountIndigo",
    mounted: function () {
        this.main();
    },
    methods: {
        main() {
            let elements = document.querySelectorAll("[data-menu]");
            for (let i = 0; i < elements.length; i++) {
                let main = elements[i];
                let andicators = main.querySelectorAll("svg");
                main.addEventListener("click", function () {
                    let element = main.parentElement.parentElement;
                    let child = element.querySelector("ul");
                    if (child.classList.contains("opacity-0")) {
                        child.classList.toggle("invisible");
                        child.classList.toggle("visible");
                        andicators[0].style.display = "block";
                        andicators[1].style.display = "none";
                    } else {
                        setTimeout(function () {
                            child.classList.toggle("invisible");
                            child.classList.toggle("visible");
                        }, 300);
                        andicators[0].style.display = "none";
                        andicators[1].style.display = "block";
                    }
                    child.classList.toggle("opacity-0");
                    child.classList.toggle("opacity-100");
                });
            }
        },
    },
};
</script>
