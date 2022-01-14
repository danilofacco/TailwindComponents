<template>
    <div class="bg-gray-200 dark:bg-gray-900 h-full">
        <div class="mx-auto flex justify-center sm:justify-end pt-16 sm:pt-6 pb-6 sm:pb-16 relative h-64 overflow-x-hidden">
            <!--code for notification starts-->
            <div role="alert" class="sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 xl:w-5/12 mx-auto absolute left-0 sm:left-auto right-0 sm:top-0 sm:w-1/2 w-10/12 bg-white dark:bg-gray-800 shadow-lg rounded flex pr-4 py-4 transition duration-150 ease-in-out" id="notification">
                <div class="absolute right-0 mr-4 text-gray-500 dark:text-gray-100 dark:hover:text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out cursor-pointer" @click="closeModal()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
                <div class="pr-3 pl-4">
                    <div class="h-12 w-12 sm:h-10 sm:w-10 rounded-full">
                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/notifications/n_1.png" alt="" class="h-full w-full object-cover rounded-full shadow" />
                    </div>
                </div>
                <div>
                    <p class="text-sm text-gray-800 dark:text-gray-100 font-semibold">Ashley Wilson</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400 font-normal">Has requested to follow you.</p>
                    <div class="flex items-center pt-2">
                        <button class="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs">Accept</button>
                        <button class="bg-gray-200 dark:bg-gray-700 dark:text-indigo-600 dark:hover:bg-gray-600 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-xs ml-2" @click="closeModal()">Decline</button>
                    </div>
                </div>
            </div>
            <!--code for notification ends-->
        </div>
    </div>
</template>

<script>
export default {
    name: "AvatarWithMultipleButtons",
    mounted: function () {
        this.onLoad();
    },
    methods: {
        onLoad() {
            var Notification = document.getElementById("notification");
            Notification.style.transform = "translateX(150%)";
            Notification.classList.remove("hidden");
            setTimeout(function () {
                Notification.style.transform = "translateX(0%)";
            }, 1000);
        },
        closeModal() {
            var Notification = document.getElementById("notification");
            Notification.style.transform = "translateX(150%)";
        },
    },
};
</script>
