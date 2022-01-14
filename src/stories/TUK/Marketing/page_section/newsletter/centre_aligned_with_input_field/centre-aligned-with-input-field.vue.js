<template>
    <div class="pt-16">
        <div class="w-full bg-indigo-700 sm:py-32 py-20">
            <div class="container mx-auto">
                <div class="xl:w-3/5 lg:w-3/5 w-10/12 mx-auto">
                    <h1 class="xl:text-5xl lg:text-5xl text-3xl text-center text-white pb-8">Sign Up for Product Updates</h1>
                    <p class="text-xl text-center text-white pb-16 xl:w-10/12 mx-auto">You can subscribe to our newsletter to get to know about our latest products and exciting offers.</p>
                    <div class="flex flex-col xl:flex-row lg:flex-row md:flex-row w-full justify-center">
                        <input type="text" placeholder="Your Email" id="email" aria-label="email" class="focus:outline-none xl:w-6/12 lg:w-9/12 w-full mb-2 xl:mb-0 lg:mb-0 md:mb-0 md:w-8/12 py-3 px-4 focus:border-indigo-700 border border-white rounded shadow text-gray-600" />
                        <button class="focus:outline-none hidden xl:block lg:block md:block sm:block bg-white py-3 px-8 rounded text-gray-600 hover:bg-gray-200 text-xl xl:ml-5 lg:ml-5 md:ml-5">Subscribe</button>
                        <button class="focus:outline-none block xl:hidden lg:hidden md:hidden sm:hidden bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 px-6 py-2 text-sm mt-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CentreAlignedWithInputField",
};
</script>
