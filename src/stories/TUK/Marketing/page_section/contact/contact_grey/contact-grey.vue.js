<template>
    <div class="container mx-auto pt-16 px-4">
        <div class="bg-gray-100 py-12 xl:pl-20 pl-10 rounded">
            <h1 class="text-gray-800 xl:text-4xl text-3xl font-extrabold pt-6 pb-5">Get In touch</h1>
            <p class="text-xl text-gray-600 pb-8 font-normal">
                545, Street 11, Block F
                <br />
                Dean Boulevard, Ohio
            </p>
            <ul class="xl:flex w-2/4 justify-between pb-6">
                <li>
                    <div class="flex sm:mb-4 mb-2 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                                <polyline points="3 7 12 13 21 7"></polyline>
                            </svg>
                        </div>
                        <p class="pl-2 text-base text-gray-600 font-normal">Info@alphad.com</p>
                    </div>
                </li>
                <li>
                    <div class="flex sm:mb-4 mb-1 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1"></path>
                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                            </svg>
                        </div>
                        <p class="pl-2 text-base text-gray-600 font-normal">+1 (308) 321 321</p>
                    </div>
                </li>
                <li>
                    <a href="javascript:void(0)" class="text-indigo-700 text-sm font-bold underline">View Job Openings</a>
                </li>
            </ul>
        </div>
        <div class="xl:flex lg:flex bg-indigo-700 p-5 xl:rounded">
            <div class="w-full bg-white h-full rounded">
                <form id="contact" class="py-5 xl:px-12 px-4 xl:w-3/5 lg:w-3/5" v-on:submit.prevent>
                    <h1 class="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
                    <div class="block xl:flex w-full flex-wrap justify-between mb-6">
                        <div class="xl:w-2/4 max-w-xs mb-6 xl:mb-0">
                            <div class="flex flex-col">
                                <label for="first_name" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">First Name</label>
                                <input required id="first_name" name="first_name" type="text" class="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 w-full flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="First Name" />
                            </div>
                        </div>
                        <div class="xl:w-2/4 max-w-xs xl:flex xl:justify-end">
                            <div class="flex flex-col">
                                <label for="last_name" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Last Name</label>
                                <input required id="last_name" name="last_name" type="text" class="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <div class="block xl:flex w-full justify-between flex-wrap">
                        <div class="xl:w-2/4 max-w-xs mt-6 xl:mt-0">
                            <div class="flex flex-col">
                                <label for="email" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Email</label>
                                <input required id="email" name="email" type="email" class="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Email" />
                            </div>
                        </div>
                        <div class="xl:w-2/4 max-w-xs xl:flex xl:justify-end">
                            <div class="flex flex-col mt-6 xl:mt-0">
                                <label for="phone" class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">Phone</label>
                                <input required id="phone" name="phone" type="tel" class="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full mt-6">
                        <div class="flex flex-col">
                            <label class="text-sm font-semibold text-gray-800 mb-2" for="message">Message</label>
                            <textarea name="message" placeholder="Send a message" class="text-sm border-gray-300 border mb-6 rounded py-2 outline-none resize-none px-3 focus:outline-none focus:border focus:border-indigo-700" rows="5" id="message"></textarea>
                        </div>
                        <button type="submit" class="focus:outline-none bg-indigo-700 mb-1 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactGrey",
    mounted() {
        this.submit();
    },
    methods: {
        submit() {
            let form = document.getElementById("contact");
            form.addEventListener(
                "submit",
                function (event) {
                    event.preventDefault();
                    let elements = form.elements;
                    let payload = {};
                    for (let i = 0; i < elements.length; i++) {
                        let item = elements.item(i);
                        switch (item.type) {
                            case "checkbox":
                                payload[item.name] = item.checked;
                                break;
                            case "submit":
                                break;
                            default:
                                payload[item.name] = item.value;
                                break;
                        }
                    }
                    // Place your API call here to submit your payload.
                    // console.log("payload", payload);
                },
                true
            );
        },
    },
};
</script>
