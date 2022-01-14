<template>
  <body style="min-height: 500px">
    <div
      class="
        py-12
        dark:bg-black
        bg-gray-700
        transition
        duration-150
        ease-in-out
        z-10
        absolute
        top-0
        right-0
        bottom-0
        left-0
      "
      id="modal1"
      ref="modal1"
    >
      <div
        role="alert"
        class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
      >
        <div
          class="
            relative
            md:w-96
            rounded
            shadow-lg
            pt-8
            pb-6
            px-4
            dark:bg-gray-800
            bg-white
          "
        >
          <div class="flex flex-col justify-center items-center w-full">
            <img src="https://i.ibb.co/d40yzK2/White-in-Jacket10.png" />
            <div class="mt-6 flex flex-col items-center justify-center">
              <p
                class="
                  text-lg
                  font-bold
                  leading-none
                  text-gray-800
                  dark:text-gray-50
                "
              >
                Invite your friends
              </p>
              <p
                class="
                  text-xs
                  font-medium
                  leading-3
                  text-gray-500
                  dark:text-gray-400
                  mt-3
                "
              >
                Sharing is caring. Invite your friends to collaborate
              </p>
            </div>
          </div>
          <div
            class="
              border
              rounded-lg
              border-gray-200
              dark:border-gray-900
              dark:bg-gray-900
              bg-white
              pt-2
              px-2
              pb-8
              mt-4
              mb-6
            "
          >
            <div class="sm:flex items-center">
              <div
                class="
                  w-44
                  sm:w-auto
                  text-xs
                  font-medium
                  leading-3
                  text-gray-500
                  dark:text-gray-400
                  border
                  justify-between
                  rounded-lg
                  bg-gray-50
                  dark:bg-gray-800
                  border-gray-200
                  dark:border-gray-900
                  flex
                  items-center
                  py-1
                  px-2
                "
              >
                jim.dundler@mail.com
                <button
                  class="
                    focus:outline-none
                    ml-2
                    w-3
                    h-3
                    flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-x"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div
                class="
                  mt-2
                  sm:mt-0
                  sm:ml-2
                  w-44
                  sm:w-auto
                  text-xs
                  font-medium
                  leading-3
                  text-gray-500
                  dark:text-gray-400
                  justify-between
                  border
                  rounded-lg
                  bg-gray-50
                  dark:bg-gray-800
                  border-gray-200
                  dark:border-gray-900
                  flex
                  items-center
                  py-1
                  px-2
                "
              >
                pam.dundler@mail.com
                <button
                  class="
                    focus:outline-none
                    ml-2
                    w-3
                    h-3
                    flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-x"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="
                w-44
                mt-2
                text-xs
                font-medium
                leading-3
                text-gray-500
                dark:text-gray-400
                justify-between
                border
                rounded-lg
                bg-gray-50
                dark:bg-gray-800
                border-gray-200
                dark:border-gray-900
                flex
                items-center
                py-1
                px-2
              "
            >
              jim.dundler@mail.com
              <button
                class="
                  focus:outline-none
                  w-3
                  h-3
                  flex
                  items-center
                  justify-center
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-x"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="
                py-3
                px-16
                bg-indigo-700
                dark:bg-indigo-600
                rounded
                focus:outline-none
                hover:bg-opacity-80
                text-xs
                font-semibold
                leading-3
                text-gray-100
              "
            >
              Invite
            </button>
          </div>
          <div
            class="
              cursor-pointer
              absolute
              top-0
              right-0
              m-3
              dark:text-gray-100
              text-gray-400 text-gray-600
              transition
              duration-150
              ease-in-out
            "
            @click="modalHandler()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Close"
              class="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center py-12" id="button">
      <button
        class="
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
        @click="modalHandler(true)"
      >
        Open Modal
      </button>
    </div>    
  </body>
</template>

<script>
export default {
  data: function () {
    return {
      mobileMenu: true,
    };
  },
  methods: {
    modalHandler(val) {
      let modal = this.$refs.modal1;
      if (val) {
        fadeIn(modal);
      } else {
        fadeOut(modal);
      }
      function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
          if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
          } else {
            requestAnimationFrame(fade);
          }
        })();
      }
      function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
          let val = parseFloat(el.style.opacity);
          if (!((val += 0.2) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
          }
        })();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>


