<template>
  <body class="flex items-center justify-center px-4 py-8">
    <div
      class="
        px-4
        shadow
        rounded-lg
        sm:px-6
        md:px-8
        pt-5
        pb-11
        md:w-1/2
        w-full
        sm:border-r
        border-gray-200
      "
    >
      <div class="sm:flex items-center justify-between">
        <div>
          <p class="text-base font-bold leading-none text-gray-800">
            Employee Performance
          </p>
          <p class="text-xs leading-3 text-gray-600 mt-2">
            as of 25 May 2019, 09:41 PM
          </p>
        </div>
        <div
          class="
            w-40
            sm:w-auto
            mt-4
            sm:mt-0
            py-3
            px-4
            flex
            items-center
            text-sm
            font-medium
            leading-none
            text-gray-600
            bg-gray-100
            hover:bg-gray-200
            cursor-pointer
            rounded
          "
        >
          <p>Sort By:</p>
          <select
            aria-label="sort by"
            class="focus:outline-none bg-transparent ml-1"
          >
            <option class="text-sm text-indigo-800">Latest</option>
            <option class="text-sm text-indigo-800">Oldest</option>
            <option class="text-sm text-indigo-800">Latest</option>
          </select>
        </div>
      </div>
      <div class="mt-9">
        <p class="text-sm font-medium tracking-wide leading-none text-gray-600">
          8 task completed out of 10
        </p>
        <div class="w-full bg-gray-200 rounded-full h-1 mt-4">
          <div class="bg-green w-3/4 rounded-full h-1"></div>
        </div>
      </div>
      <div
        class="
          px-9
          w-full
          flex
          items-center
          justify-between
          mt-12
          border-b border-gray-200
          pb-6
        "
      >
        <div class="flex flex-col items-center">
          <button
            class="
              opacity-50
              text-xs
              font-medium
              leading-3
              text-center text-gray-600
              focus:outline-none
              focus:text-indigo-700
              hover:text-indigo-700
            "
          >
            Sun
          </button>
          <button
            class="
              px-1.5
              py-1.5
              bg-indigo-700
              rounded-full
              focus:outline-none
              text-xs
              leading-3
              text-center text-white
              mt-1
            "
          >
            23
          </button>
        </div>
        <div class="flex flex-col items-center">
          <button
            class="
              opacity-50
              text-xs
              font-medium
              leading-3
              text-center
              focus:outline-none
              text-indigo-700
            "
          >
            Mon
          </button>
          <button
            class="
              px-1.5
              py-1.5
              bg-transparent
              focus:bg-indigo-700
              focus:font-bold
              focus:text-white
              rounded-full
              focus:outline-none
              text-xs
              leading-3
              text-center text-indigo-700
              mt-1
            "
          >
            24
          </button>
        </div>
        <div class="flex flex-col items-center">
          <button
            class="
              opacity-50
              text-xs
              font-medium
              leading-3
              text-center text-gray-600
              focus:outline-none
              focus:text-indigo-700
              hover:text-indigo-700
            "
          >
            Tue
          </button>
          <button
            class="
              px-1.5
              py-1.5
              bg-transparent
              focus:bg-indigo-700
              focus:font-bold
              focus:text-white
              rounded-full
              focus:outline-none
              text-xs
              leading-3
              text-center text-gray-600
              mt-1
            "
          >
            25
          </button>
        </div>
        <div class="flex flex-col items-center">
          <button
            class="
              opacity-50
              text-xs
              font-medium
              leading-3
              text-center text-gray-600
              focus:outline-none
              focus:text-indigo-700
              hover:text-indigo-700
            "
          >
            Wed
          </button>
          <button
            class="
              px-1.5
              py-1.5
              bg-transparent
              focus:bg-indigo-700
              focus:font-bold
              focus:text-white
              rounded-full
              focus:outline-none
              text-xs
              leading-3
              text-center text-gray-600
              mt-1
            "
          >
            26
          </button>
        </div>
        <div class="flex flex-col items-center">
          <button
            class="
              opacity-50
              text-xs
              font-medium
              leading-3
              text-center text-gray-600
              focus:outline-none
              focus:text-indigo-700
              hover:text-indigo-700
            "
          >
            Thu
          </button>
          <button
            class="
              px-1.5
              py-1.5
              bg-transparent
              focus:bg-indigo-700
              focus:font-bold
              focus:text-white
              rounded-full
              focus:outline-none
              text-xs
              leading-3
              text-center text-gray-600
              mt-1
            "
          >
            27
          </button>
        </div>
        <div class="flex flex-col items-center">
          <button
            class="
              opacity-50
              text-xs
              font-medium
              leading-3
              text-center text-gray-600
              focus:outline-none
              focus:text-indigo-700
              hover:text-indigo-700
            "
          >
            Fri
          </button>
          <button
            class="
              px-1.5
              py-1.5
              bg-transparent
              focus:bg-indigo-700
              focus:font-bold
              focus:text-white
              rounded-full
              focus:outline-none
              text-xs
              leading-3
              text-center text-gray-600
              mt-1
            "
          >
            28
          </button>
        </div>
        <div class="flex flex-col items-center">
          <button
            class="
              opacity-50
              text-xs
              font-medium
              leading-3
              text-center text-gray-600
              focus:outline-none
              focus:text-indigo-700
              hover:text-indigo-700
            "
          >
            Sat
          </button>
          <button
            class="
              px-1.5
              py-1.5
              bg-transparent
              focus:bg-indigo-700
              focus:font-bold
              focus:text-white
              rounded-full
              focus:outline-none
              text-xs
              leading-3
              text-center text-gray-600
              mt-1
            "
          >
            29
          </button>
        </div>
      </div>
      <div class="mt-8">
        <div class="sm:flex justify-between items-end">
          <div>
            <p
              class="
                text-base
                font-medium
                leading-none
                text-gray-700
                whitespace-nowrap
              "
            >
              Marketing Keynote Presentation
            </p>
            <div class="flex items-center space-x-5 mt-4">
              <div class="flex items-center">
                <div class="focus:outline-none">
                  <svg
                    aria-label="date"
                    role="img"
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 1H13.6667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.5 6H13.6667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.5 11H13.6667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16663 1V1.00667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16663 6V6.00667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16663 11C1.16663 11 1.16663 11.0041 1.16663 11.0067"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="text-sm leading-none text-gray-600 ml-2">04/07</p>
              </div>
              <div class="flex items-center">
                <div class="focus:outline-none">
                  <svg
                    aria-label="comments"
                    role="img"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 9.1665V9.17484"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6.66669 9.1665V9.17484"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13.3333 9.1665V9.17484"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="text-sm leading-none text-gray-600 ml-2">23</p>
              </div>
              <div class="flex items-center">
                <div class="focus:outline-none">
                  <svg
                    aria-label="pinned"
                    role="img"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="text-sm leading-none text-gray-600 ml-2">04/07</p>
              </div>
            </div>
          </div>
          <button
            class="
              mt-4
              sm:mt-0
              focus:outline-none
              px-5
              py-2
              bg-green-100
              text-green-700
              rounded
              text-sm
              leading-none
            "
          >
            Completed
          </button>
        </div>
        <div class="sm:flex justify-between items-end mt-10">
          <div>
            <p class="text-base font-medium leading-none text-gray-700">
              UX Wireframes
            </p>
            <div class="flex items-center space-x-5 mt-4">
              <div class="flex items-center">
                <div class="focus:outline-none">
                  <svg
                    aria-label="date"
                    role="img"
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 1H13.6667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.5 6H13.6667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.5 11H13.6667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16663 1V1.00667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16663 6V6.00667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16663 11C1.16663 11 1.16663 11.0041 1.16663 11.0067"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="text-sm leading-none text-gray-600 ml-2">04/07</p>
              </div>
              <div class="flex items-center">
                <div class="focus:outline-none">
                  <svg
                    aria-label="comments"
                    role="img"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 9.1665V9.17484"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6.66669 9.1665V9.17484"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13.3333 9.1665V9.17484"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="text-sm leading-none text-gray-600 ml-2">23</p>
              </div>
              <div class="flex items-center">
                <div class="focus:outline-none">
                  <svg
                    aria-label="pinned"
                    role="img"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="text-sm leading-none text-gray-600 ml-2">04/07</p>
              </div>
            </div>
          </div>
          <button
            class="
              mt-4
              sm:mt-0
              focus:outline-none
              px-5
              py-2
              bg-green-100
              text-green-700
              rounded
              text-sm
              leading-none
            "
          >
            Completed
          </button>
        </div>
        <div class="sm:flex justify-between items-end mt-10">
          <div>
            <p class="text-base font-medium leading-none text-gray-700">
              Vue integration
            </p>
            <div class="flex items-center space-x-5 mt-4">
              <div class="flex items-center">
                <div class="focus:outline-none">
                  <svg
                    aria-label="date"
                    role="img"
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 1H13.6667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.5 6H13.6667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.5 11H13.6667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16663 1V1.00667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16663 6V6.00667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1.16663 11C1.16663 11 1.16663 11.0041 1.16663 11.0067"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="text-sm leading-none text-gray-600 ml-2">04/07</p>
              </div>
              <div class="flex items-center">
                <div class="focus:outline-none">
                  <svg
                    aria-label="comments"
                    role="img"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 9.1665V9.17484"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6.66669 9.1665V9.17484"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13.3333 9.1665V9.17484"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="text-sm leading-none text-gray-600 ml-2">23</p>
              </div>
              <div class="flex items-center">
                <div class="focus:outline-none">
                  <svg
                    aria-label="pinned"
                    role="img"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p class="text-sm leading-none text-gray-600 ml-2">04/07</p>
              </div>
            </div>
          </div>
          <button
            class="
              mt-4
              sm:mt-0
              focus:outline-none
              px-7
              py-2
              bg-red-100
              text-red-700
              rounded
              text-sm
              leading-none
            "
          >
            Pending
          </button>
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
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
