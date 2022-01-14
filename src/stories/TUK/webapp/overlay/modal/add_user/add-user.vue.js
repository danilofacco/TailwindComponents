<template>
  <body style="min-height: 900px" class="flex items-center justify-center">
    <div class="w-full flex justify-center py-12" id="button">
      <button
        class="
          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
          focus:outline-none
          mx-auto
          transition
          duration-150
          ease-in-out
          hover:bg-indigo-600
          bg-indigo-700
          rounded
          text-white
          px-4
          sm:px-8
          py-2
          text-xs
          sm:text-sm
        "
        @click="popuphandler(true)"
      >
        Open Modal
      </button>
    </div>

    <div v-if="show" id="popup" class="z-50 fixed w-full flex justify-center inset-0">
      <div
        @click="popuphandler(false)"
        class="w-full h-full bg-gray-900 z-0 absolute inset-0"
      ></div>
      <div class="mx-auto container">
        <div class="flex items-center justify-center h-full w-full">
          <div
            class="
              bg-white
              rounded-md
              shadow
              fixed
              overflow-y-auto
              sm:h-auto
              w-10/12
              md:w-8/12
              lg:w-1/2
              2xl:w-2/5
            "
          >
            <div
              class="
                bg-gray-100
                rounded-tl-md rounded-tr-md
                px-4
                md:px-8
                md:py-4
                py-7
                flex
                items-center
                justify-between
              "
            >
              <p class="text-base font-semibold">Create New User</p>
              <button
                role="button"
                aria-label="close label"
                @click="popuphandler(false)"
                class="
                  focus:ring-2 focus:ring-offset-2 focus:ring-gray-600
                  focus:outline-none
                "
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7L7 21"
                    stroke="#A1A1AA"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7 7L21 21"
                    stroke="#A1A1AA"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
              <div class="flex items-center justify-center">
                <div
                  tabindex="0"
                  aria-label="img"
                  role="img"
                  class="
                    focus:outline-none
                    w-40
                    h-40
                    p-16
                    bg-gray-100
                    rounded-md
                    flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 12H22.515"
                      stroke="#94A3B8"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M25.5 6H10.5C8.01472 6 6 8.01472 6 10.5V25.5C6 27.9853 8.01472 30 10.5 30H25.5C27.9853 30 30 27.9853 30 25.5V10.5C30 8.01472 27.9853 6 25.5 6Z"
                      stroke="#94A3B8"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6 22.4999L12 16.4999C12.6841 15.8417 13.4601 15.4951 14.25 15.4951C15.0399 15.4951 15.8159 15.8417 16.5 16.4999L24 23.9999"
                      stroke="#94A3B8"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M21 20.9999L22.5 19.4999C23.1841 18.8417 23.9601 18.4951 24.75 18.4951C25.5399 18.4951 26.3159 18.8417 27 19.4999L30 22.4999"
                      stroke="#94A3B8"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <form class="mt-11">
                <div class="flex items-center space-x-9">
                  <input
                    placeholder="Full Name"
                    class="
                      focus:ring-2 focus:ring-gray-400
                      w-1/2
                      focus:outline-none
                      placeholder-gray-500
                      py-3
                      px-3
                      text-sm
                      leading-none
                      text-gray-800
                      bg-white
                      border
                      rounded
                      border-gray-200
                    "
                  />
                  <input
                    placeholder="Age"
                    type="number"
                    min="0"
                    class="
                      focus:ring-2 focus:ring-gray-400
                      w-1/2
                      focus:outline-none
                      placeholder-gray-500
                      py-3
                      px-3
                      text-sm
                      leading-none
                      text-gray-800
                      bg-white
                      border
                      rounded
                      border-gray-200
                    "
                  />
                </div>
                <div class="flex items-center space-x-9 mt-8">
                  <input
                    placeholder="Email"
                    type="email"
                    class="
                      focus:ring-2 focus:ring-gray-400
                      w-1/2
                      focus:outline-none
                      placeholder-gray-500
                      py-3
                      px-3
                      text-sm
                      leading-none
                      text-gray-800
                      bg-white
                      border
                      rounded
                      border-gray-200
                    "
                  />
                  <div
                    tabindex="0"
                    class="
                      focus:outline-none
                      focus:ring-2 focus:ring-gray-400
                      w-1/2
                      bg-white
                      border
                      rounded
                      border-gray-200
                      py-2.5
                      px-3
                    "
                  >
                    <select
                      aria-label="select an option"
                      class="text-sm text-gray-500 w-full focus:outline-none"
                    >
                      <option selected="" disabled="" value="">Category</option>
                      <option>Designer</option>
                      <option>Developer</option>
                    </select>
                  </div>
                </div>
                <div class="mt-8">
                  <textarea
                    placeholder="Description"
                    class="
                      focus:outline-none
                      focus:ring-2 focus:ring-gray-400
                      py-3
                      pl-3
                      overflow-y-auto
                      h-24
                      border
                      placeholder-gray-500
                      rounded
                      border-gray-200
                      w-full
                      resize-none
                      focus:outline-none
                    "
                  ></textarea>
                </div>
              </form>
              <div class="flex items-center justify-between mt-9">
                <button
                  role="button"
                  aria-label="close button"
                  @click="popuphandler(false)"
                  class="
                    focus:ring-2 focus:ring-offset-2
                    focus:bg-gray-600
                    focus:ring-gray-600
                    focus:outline-none
                    px-6
                    py-3
                    bg-gray-600
                    hover:bg-gray-500
                    shadow
                    rounded
                    text-sm text-white
                  "
                >
                  Cancel
                </button>
                <button
                  aria-label="add user"
                  role="button"
                  class="
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800
                    focus:outline-none
                    px-6
                    py-3
                    bg-indigo-700
                    hover:bg-opacity-80
                    shadow
                    rounded
                    text-sm text-white
                  "
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {
      show: true
    };
  },
  methods: {
    popuphandler(flag) {
      if (flag) {
        this.show = true
      } else {
        this.show = false
      }
    },
  },
};
</script>

<style scoped>
</style>
