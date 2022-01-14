<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="md:w-96 rounded shadow-lg p-5 bg-white w-full">
                <h1 class="text-lg font-bold leading-7 text-gray-800">Progress</h1>
                <div class="flex items-end justify-between pt-7">
                    <div class="flex flex-col">
                        <h1 class="text-base font-medium leading-4 text-gray-800">All Invoices</h1>
                        <p class="pt-1 text-xs leading-3 text-gray-600">Monthly Analysis</p>
                    </div>
                    <div><p class="text-base font-semibold leading-4 text-indigo-700">$6,390</p></div>
                </div>
                <div class="w-full bg-indigo-50 h-2 mr-1 relative rounded mt-3">
                    <div class="h-2 w-48 bg-indigo-500 rounded"></div>
                </div>
                <div class="flex items-end justify-between pt-6">
                    <div class="flex flex-col">
                        <h1 class="text-base font-medium leading-4 text-gray-800">Pending</h1>
                        <p class="pt-1 text-xs leading-3 text-gray-600">Weekly Analysis</p>
                    </div>
                    <div><p class="text-base font-semibold leading-4 text-blue-500">$1,320</p></div>
                </div>
                <div class="w-full bg-blue-50 h-2 mr-1 relative rounded mt-3">
                    <div class="h-2 w-32 bg-blue-500 rounded"></div>
                </div>
                <div class="flex items-end justify-between pt-6">
                    <div class="flex flex-col">
                        <h1 class="text-base font-medium leading-4 text-gray-800">Pending</h1>
                        <p class="pt-1 text-xs leading-3 text-gray-600">Daily Analysis</p>
                    </div>
                    <div><p class="text-base font-semibold leading-4 text-green-500">$6,320</p></div>
                </div>
                <div class="w-full bg-green-50 h-2 mr-1 relative rounded mt-3">
                    <div class="h-2 w-32 bg-green-500 rounded"></div>
                </div>
                <div class="flex items-end justify-between pt-6">
                    <div class="flex flex-col">
                        <h1 class="text-base font-medium leading-4 text-gray-800">Upcoming</h1>
                        <p class="pt-1 text-xs leading-3 text-gray-600">Monthly Analysis</p>
                    </div>
                    <div><p class="text-base font-semibold leading-4 text-pink-500">$6,320</p></div>
                </div>
                <div class="w-full bg-pink-50 h-2 mr-1 relative rounded mt-3">
                    <div class="h-2 w-32 bg-pink-500 rounded"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
