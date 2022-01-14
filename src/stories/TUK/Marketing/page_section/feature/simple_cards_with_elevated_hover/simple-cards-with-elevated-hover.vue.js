<template>
    <section class="px-6 xl:px-0">
        <div class="container mx-auto py-20">
            <div class="flex flex-col items-center justify-center w-full py-10">
                <h1 class="font-semibold text-gray-800 text-3xl md:text-4xl">Our Services</h1>
                <hr class="w-24 h-1 bg-indigo-700 rounded-full" />
            </div>

            <div class="lg:flex items-center justify-between lg:-mx-5">
                <div class="lg:w-1/3 px-5">
                    <div class="bg-white flex justify-center items-center flex-col border border-gray-200rounded-md p-8">
                        <img class="mb-4" src="https://cdn.tuk.dev/assets/templates/weCare/pill.png" />
                        <h2 class="text-2xl font-bold mb-6 text-indigo-700 text-center lg:text-left">Medical facility</h2>
                        <p class="lg:w-2/3 mb-6 text-center">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut.</p>
                        <a class="text-indigo-700 underline cursor-pointer">View more</a>
                    </div>
                </div>
                <div class="lg:w-1/3 px-5 py-8 lg:py-0">
                    <div class="bg-indigo-700 shadow-lg text-white flex justify-center items-center flex-col border border-gray-200rounded-md p-8">
                        <img class="mb-4" src="https://cdn.tuk.dev/assets/templates/weCare/heart.png" />
                        <h2 class="text-2xl font-bold mb-6 text-white text-center lg:text-left">HealthCare</h2>
                        <p class="lg:w-2/3 mb-6 text-center text-white">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut.</p>
                        <a class="text-white underline cursor-pointer">View more</a>
                    </div>
                </div>
                <div class="lg:w-1/3 px-5">
                    <div class="bg-white flex justify-center items-center flex-col border border-gray-200rounded-md p-8">
                        <img class="mb-4" src="https://cdn.tuk.dev/assets/templates/weCare/ambulance.png" />
                        <h2 class="text-2xl font-bold mb-6 text-indigo-700 text-center lg:text-left">24 hours Service</h2>
                        <p class="lg:w-2/3 mb-6 text-center">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut.</p>
                        <a class="text-indigo-700 underline cursor-pointer">View more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Index",
};
</script>
