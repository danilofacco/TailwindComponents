<template>
  <body class="bg-gray-300 py-8 flex min-h-screen justify-center">
    <div>
      <button
        class="
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
          focus:bg-gray-100
          w-64
          p-4
          shadow
          rounded
          bg-white
          text-sm
          font-medium
          leading-none
          text-gray-800
          flex
          items-center
          justify-between
          cursor-pointer
        "
        @click="show=!show"
      >
        Channels
        <div>
          <div class="" v-if="!show" id="close">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                fill="#1F2937"
              />
            </svg>
          </div>
          <div v-if="show" id="open">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                fill="#1F2937"
              />
            </svg>
          </div>
        </div>
      </button>
      <div class="w-64 mt-2 p-4 bg-white shadow rounded" v-if="show" id="dropdown">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <svg
              role="button"
              aria-label="dropdown"
              tabindex="0"
              @click="drop1=!drop1"
              onkeypress="toggleSubDir(1)"
              class="
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                rounded-md
              "
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 3L7.5 6L4.5 9"
                stroke="#4B5563"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="pl-4 flex items-center">
              <div
                class="
                  bg-gray-100
                  dark:bg-gray-800
                  border
                  rounded-sm
                  border-gray-200
                  dark:border-gray-700
                  w-3
                  h-3
                  flex flex-shrink-0
                  justify-center
                  items-center
                  relative
                "
              >
                <input
                  aria-labelledby="fb1"
                  type="checkbox"
                  class="
                    focus:opacity-100
                    checkbox
                    opacity-0
                    absolute
                    cursor-pointer
                    w-full
                    h-full
                  "
                />
                <div
                  class="check-icon hidden bg-indigo-700 text-white rounded-sm"
                >
                  <svg
                    class="icon icon-tabler icon-tabler-check"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
              <p
                id="fb1"
                tabindex="0"
                class="
                  focus:outline-none
                  text-sm
                  leading-normal
                  ml-2
                  text-gray-800
                "
              >
                Facebook
              </p>
            </div>
          </div>
          <p
            tabindex="0"
            class="
              focus:outline-none
              w-8
              text-xs
              leading-3
              text-right text-indigo-700
            "
          >
            2,381
          </p>
        </div>
        <div id="sublist1" class="pl-8 pt-5" v-if="drop1">
          <div class="flex items-center justify-between">
            <div class="pl-4 flex items-center">
              <div
                class="
                  bg-gray-100
                  dark:bg-gray-800
                  border
                  rounded-sm
                  border-gray-200
                  dark:border-gray-700
                  w-3
                  h-3
                  flex flex-shrink-0
                  justify-center
                  items-center
                  relative
                "
              >
                <input
                  aria-labelledby="usa1"
                  type="checkbox"
                  class="
                    focus:opacity-100
                    checkbox
                    opacity-0
                    absolute
                    cursor-pointer
                    w-full
                    h-full
                  "
                />
                <div
                  class="check-icon hidden bg-indigo-700 text-white rounded-sm"
                >
                  <svg
                    class="icon icon-tabler icon-tabler-check"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
              <p
                id="usa1"
                tabindex="0"
                class="
                  focus:outline-none
                  text-sm
                  leading-normal
                  ml-2
                  text-gray-800
                "
              >
                USA
              </p>
            </div>
            <p
              tabindex="0"
              class="
                focus:outline-none
                w-8
                text-xs
                leading-3
                text-right text-indigo-700
              "
            >
              2,381
            </p>
          </div>
          <div class="flex pt-4 items-center justify-between">
            <div class="pl-4 flex items-center">
              <div
                class="
                  bg-gray-100
                  dark:bg-gray-800
                  border
                  rounded-sm
                  border-gray-200
                  dark:border-gray-700
                  w-3
                  h-3
                  flex flex-shrink-0
                  justify-center
                  items-center
                  relative
                "
              >
                <input
                  aria-labelledby="ger1"
                  type="checkbox"
                  class="
                    focus:opacity-100
                    checkbox
                    opacity-0
                    absolute
                    cursor-pointer
                    w-full
                    h-full
                  "
                />
                <div
                  class="check-icon hidden bg-indigo-700 text-white rounded-sm"
                >
                  <svg
                    class="icon icon-tabler icon-tabler-check"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
              <p
                id="ger1"
                tabindex="0"
                class="
                  focus:outline-none
                  text-sm
                  leading-normal
                  ml-2
                  text-gray-800
                "
              >
                Germany
              </p>
            </div>
            <p
              tabindex="0"
              class="
                focus:outline-none
                w-8
                text-xs
                leading-3
                text-right text-indigo-700
              "
            >
              2,381
            </p>
          </div>
          <div class="flex pt-4 items-center justify-between">
            <div class="pl-4 flex items-center">
              <div
                class="
                  bg-gray-100
                  dark:bg-gray-800
                  border
                  rounded-sm
                  border-gray-200
                  dark:border-gray-700
                  w-3
                  h-3
                  flex flex-shrink-0
                  justify-center
                  items-center
                  relative
                "
              >
                <input
                  aria-labelledby="italy1"
                  type="checkbox"
                  class="
                    focus:opacity-100
                    checkbox
                    opacity-0
                    absolute
                    cursor-pointer
                    w-full
                    h-full
                  "
                />
                <div
                  v-if="drop1"
                  class="check-icon bg-indigo-700 text-white rounded-sm"
                >
                  <svg
                    class="icon icon-tabler icon-tabler-check"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
              <p
                id="italy1"
                tabindex="0"
                class="
                  focus:outline-none
                  text-sm
                  leading-normal
                  ml-2
                  text-gray-800
                "
              >
                Italy
              </p>
            </div>
            <p
              tabindex="0"
              class="
                focus:outline-none
                w-8
                text-xs
                leading-3
                text-right text-indigo-700
              "
            >
              2,381
            </p>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center">
              <svg
                role="button"
                aria-label="dropdown"
                tabindex="0"
                @click="drop1=!drop1"
                @keypress="drop1=!drop1"
                class="
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                  rounded-md
                "
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 3L7.5 6L4.5 9"
                  stroke="#4B5563"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="pl-4 flex items-center">
                <div
                  class="
                    bg-gray-100
                    dark:bg-gray-800
                    border
                    rounded-sm
                    border-gray-200
                    dark:border-gray-700
                    w-3
                    h-3
                    flex flex-shrink-0
                    justify-center
                    items-center
                    relative
                  "
                >
                  <input
                    aria-labelledby="twitter2"
                    type="checkbox"
                    class="
                      focus:opacity-100
                      checkbox
                      opacity-0
                      absolute
                      cursor-pointer
                      w-full
                      h-full
                    "
                  />
                  <div
                    class="
                      check-icon
                      hidden
                      bg-indigo-700
                      text-white
                      rounded-sm
                    "
                  >
                    <svg
                      class="icon icon-tabler icon-tabler-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p
                  id="twitter2"
                  tabindex="0"
                  class="
                    focus:outline-none
                    text-sm
                    leading-normal
                    ml-2
                    text-gray-800
                  "
                >
                  Twitter
                </p>
              </div>
            </div>
            <p
              tabindex="0"
              class="
                focus:outline-none
                w-8
                text-xs
                leading-3
                text-right text-indigo-700
              "
            >
              3,521
            </p>
          </div>
          <div id="sublist2" class="pl-8 pt-5" v-if="drop1">
            <div class="flex items-center justify-between">
              <div class="pl-4 flex items-center">
                <div
                  class="
                    bg-gray-100
                    dark:bg-gray-800
                    border
                    rounded-sm
                    border-gray-200
                    dark:border-gray-700
                    w-3
                    h-3
                    flex flex-shrink-0
                    justify-center
                    items-center
                    relative
                  "
                >
                  <input
                    aria-labelledby="usa2"
                    type="checkbox"
                    class="
                      focus:opacity-100
                      checkbox
                      opacity-0
                      absolute
                      cursor-pointer
                      w-full
                      h-full
                    "
                  />
                  <div
                    class="
                      check-icon
                      hidden
                      bg-indigo-700
                      text-white
                      rounded-sm
                    "
                  >
                    <svg
                      class="icon icon-tabler icon-tabler-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p
                  id="usa2"
                  tabindex="0"
                  class="
                    focus:outline-none
                    text-sm
                    leading-normal
                    ml-2
                    text-gray-800
                  "
                >
                  USA
                </p>
              </div>
              <p
                tabindex="0"
                class="
                  focus:outline-none
                  w-8
                  text-xs
                  leading-3
                  text-right text-indigo-700
                "
              >
                2,381
              </p>
            </div>
            <div class="flex pt-4 items-center justify-between">
              <div class="pl-4 flex items-center">
                <div
                  class="
                    bg-gray-100
                    dark:bg-gray-800
                    border
                    rounded-sm
                    border-gray-200
                    dark:border-gray-700
                    w-3
                    h-3
                    flex flex-shrink-0
                    justify-center
                    items-center
                    relative
                  "
                >
                  <input
                    aria-labelledby="ger2"
                    type="checkbox"
                    class="
                      focus:opacity-100
                      checkbox
                      opacity-0
                      absolute
                      cursor-pointer
                      w-full
                      h-full
                    "
                  />
                  <div
                    class="
                      check-icon
                      hidden
                      bg-indigo-700
                      text-white
                      rounded-sm
                    "
                  >
                    <svg
                      class="icon icon-tabler icon-tabler-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p
                  id="ger2"
                  tabindex="0"
                  class="
                    focus:outline-none
                    text-sm
                    leading-normal
                    ml-2
                    text-gray-800
                  "
                >
                  Germany
                </p>
              </div>
              <p
                tabindex="0"
                class="
                  focus:outline-none
                  w-8
                  text-xs
                  leading-3
                  text-right text-indigo-700
                "
              >
                2,381
              </p>
            </div>
            <div class="flex pt-4 items-center justify-between">
              <div class="pl-4 flex items-center">
                <div
                  class="
                    bg-gray-100
                    dark:bg-gray-800
                    border
                    rounded-sm
                    border-gray-200
                    dark:border-gray-700
                    w-3
                    h-3
                    flex flex-shrink-0
                    justify-center
                    items-center
                    relative
                  "
                >
                  <input
                    aria-labelledby="italy2"
                    type="checkbox"
                    class="
                      focus:opacity-100
                      checkbox
                      opacity-0
                      absolute
                      cursor-pointer
                      w-full
                      h-full
                    "
                  />
                  <div
                    class="
                      check-icon
                      hidden
                      bg-indigo-700
                      text-white
                      rounded-sm
                    "
                  >
                    <svg
                      class="icon icon-tabler icon-tabler-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p
                  id="italy2"
                  tabindex="0"
                  class="
                    focus:outline-none
                    text-sm
                    leading-normal
                    ml-2
                    text-gray-800
                  "
                >
                  Italy
                </p>
              </div>
              <p
                tabindex="0"
                class="
                  focus:outline-none
                  w-8
                  text-xs
                  leading-3
                  text-right text-indigo-700
                "
              >
                2,381
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center">
              <svg
                role="button"
                aria-label="dropdown"
                tabindex="0"
                @click="drop2=!drop2"
                @keypress="drop2=!drop2"
                class="
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                  rounded-md
                "
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 3L7.5 6L4.5 9"
                  stroke="#4B5563"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="pl-4 flex items-center">
                <div
                  class="
                    bg-gray-100
                    dark:bg-gray-800
                    border
                    rounded-sm
                    border-gray-200
                    dark:border-gray-700
                    w-3
                    h-3
                    flex flex-shrink-0
                    justify-center
                    items-center
                    relative
                  "
                >
                  <input
                    aria-labelledby="insta3"
                    type="checkbox"
                    class="
                      focus:opacity-100
                      checkbox
                      opacity-0
                      absolute
                      cursor-pointer
                      w-full
                      h-full
                    "
                  />
                  <div
                    class="
                      check-icon
                      hidden
                      bg-indigo-700
                      text-white
                      rounded-sm
                    "
                  >
                    <svg
                      class="icon icon-tabler icon-tabler-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p
                  id="insta3"
                  tabindex="0"
                  class="
                    focus:outline-none
                    text-sm
                    leading-normal
                    ml-2
                    text-gray-800
                  "
                >
                  Instagram
                </p>
              </div>
            </div>
            <p
              tabindex="0"
              class="
                focus:outline-none
                w-8
                text-xs
                leading-3
                text-right text-indigo-700
              "
            >
              5,142
            </p>
          </div>
          <div id="sublist3" v-if="drop2" class="pl-8 pt-5">
            <div class="flex items-center justify-between">
              <div class="pl-4 flex items-center">
                <div
                  class="
                    bg-gray-100
                    dark:bg-gray-800
                    border
                    rounded-sm
                    border-gray-200
                    dark:border-gray-700
                    w-3
                    h-3
                    flex flex-shrink-0
                    justify-center
                    items-center
                    relative
                  "
                >
                  <input
                    aria-labelledby="usa3"
                    type="checkbox"
                    class="
                      focus:opacity-100
                      checkbox
                      opacity-0
                      absolute
                      cursor-pointer
                      w-full
                      h-full
                    "
                  />
                  <div
                    class="
                      check-icon
                      hidden
                      bg-indigo-700
                      text-white
                      rounded-sm
                    "
                  >
                    <svg
                      class="icon icon-tabler icon-tabler-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p
                  id="usa3"
                  tabindex="0"
                  class="
                    focus:outline-none
                    text-sm
                    leading-normal
                    ml-2
                    text-gray-800
                  "
                >
                  USA
                </p>
              </div>
              <p
                tabindex="0"
                class="
                  focus:outline-none
                  w-8
                  text-xs
                  leading-3
                  text-right text-indigo-700
                "
              >
                2,381
              </p>
            </div>
            <div class="flex pt-4 items-center justify-between">
              <div class="pl-4 flex items-center">
                <div
                  class="
                    bg-gray-100
                    dark:bg-gray-800
                    border
                    rounded-sm
                    border-gray-200
                    dark:border-gray-700
                    w-3
                    h-3
                    flex flex-shrink-0
                    justify-center
                    items-center
                    relative
                  "
                >
                  <input
                    aria-labelledby="germany3"
                    type="checkbox"
                    class="
                      focus:opacity-100
                      checkbox
                      opacity-0
                      absolute
                      cursor-pointer
                      w-full
                      h-full
                    "
                  />
                  <div
                    class="
                      check-icon
                      hidden
                      bg-indigo-700
                      text-white
                      rounded-sm
                    "
                  >
                    <svg
                      class="icon icon-tabler icon-tabler-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p
                  id="germany3"
                  tabindex="0"
                  class="
                    focus:outline-none
                    text-sm
                    leading-normal
                    ml-2
                    text-gray-800
                  "
                >
                  Germany
                </p>
              </div>
              <p
                tabindex="0"
                class="
                  focus:outline-none
                  w-8
                  text-xs
                  leading-3
                  text-right text-indigo-700
                "
              >
                2,381
              </p>
            </div>
            <div class="flex pt-4 items-center justify-between">
              <div class="pl-4 flex items-center">
                <div
                  class="
                    bg-gray-100
                    dark:bg-gray-800
                    border
                    rounded-sm
                    border-gray-200
                    dark:border-gray-700
                    w-3
                    h-3
                    flex flex-shrink-0
                    justify-center
                    items-center
                    relative
                  "
                >
                  <input
                    aria-labelledby="italy3"
                    type="checkbox"
                    class="
                      focus:opacity-100
                      checkbox
                      opacity-0
                      absolute
                      cursor-pointer
                      w-full
                      h-full
                    "
                  />
                  <div
                    class="
                      check-icon
                      hidden
                      bg-indigo-700
                      text-white
                      rounded-sm
                    "
                  >
                    <svg
                      class="icon icon-tabler icon-tabler-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p
                  id="italy3"
                  tabindex="0"
                  class="
                    focus:outline-none
                    text-sm
                    leading-normal
                    ml-2
                    text-gray-800
                  "
                >
                  Italy
                </p>
              </div>
              <p
                tabindex="0"
                class="
                  focus:outline-none
                  w-8
                  text-xs
                  leading-3
                  text-right text-indigo-700
                "
              >
                2,381
              </p>
            </div>
          </div>
        </div>

        <button
          class="
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700
            focus:outline-none
            focus:bg-indigo-200
            text-xs
            bg-indigo-100
            hover:bg-indigo-200
            rounded-md
            mt-6
            font-medium
            py-2
            w-full
            leading-3
            text-indigo-700
          "
        >
          Select
        </button>
      </div>
    </div>    
  </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {
      show: true,
      drop: false,
      drop1: false,
      drop2: true
    };
  },
  methods: {},
};
</script>

<style scoped>
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
