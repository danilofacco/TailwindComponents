

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'

export default {
  title: 'Tailwind UI/Application UI/Headings/Section Headings',
};

 
export function Simple() {
  return (
    <div className="pb-5 border-b border-gray-200">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Job Postings</h3>
    </div>
  )
}
export function WithAction() {
  return (
    <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Job Postings</h3>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create new job
        </button>
      </div>
    </div>
  )
}
export function WithActionsAndTabs() {
  /*
 This example requires Tailwind CSS v2.0+ 
 
 This example requires some changes to your config:
 
 ```
 // tailwind.config.js
 module.exports = {
   // ...
   plugins: [
     // ...
     require('@tailwindcss/forms'),
   ],
 }
 ```
*/
const tabs = [
 { name: 'Applied', href: '#', current: false },
 { name: 'Phone Screening', href: '#', current: false },
 { name: 'Interview', href: '#', current: true },
 { name: 'Offer', href: '#', current: false },
 { name: 'Hired', href: '#', current: false },
]

function classNames(...classes) {
 return classes.filter(Boolean).join(' ')
} 
  return (
    <div className="relative pb-5 border-b border-gray-200 sm:pb-0">
      <div className="md:flex md:items-center md:justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Candidates</h3>
        <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Share
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
export function WithActions() {
  return (
    <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Job Postings</h3>
      <div className="mt-3 flex sm:mt-0 sm:ml-4">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Share
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create
        </button>
      </div>
    </div>
  )
}
export function WithBadgeAndDropdown() {
  /* This example requires Tailwind CSS v2.0+ 
 import { Fragment } from 'react'
 import { Menu, Transition } from '@headlessui/react'
 import { DotsVerticalIcon } from '@heroicons/react/solid'
 */
 function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
 } 
  return (
    <div className="pb-5 border-b border-gray-200">
      <div className="sm:flex sm:justify-between sm:items-baseline">
        <div className="sm:w-0 sm:flex-1">
          <h1 id="message-heading" className="text-lg font-medium text-gray-900">
            Full-Stack Developer
          </h1>
          <p className="mt-1 text-sm text-gray-500 overflow-hidden overflow-ellipsis">Checkout and Payments Team</p>
        </div>

        <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Open
          </span>
          <Menu as="div" className="ml-3 relative inline-block text-left">
            <div>
              <Menu.Button className="-my-2 p-2 rounded-full bg-white flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <span className="sr-only">Open options</span>
                <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex justify-between px-4 py-2 text-sm'
                        )}
                      >
                        <span>Edit</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex justify-between px-4 py-2 text-sm'
                        )}
                      >
                        <span>Duplicate</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'w-full flex justify-between px-4 py-2 text-sm'
                        )}
                      >
                        <span>Archive</span>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}
export function WithDescription() {
  return (
    <div className="pb-5 border-b border-gray-200">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Job Postings</h3>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
        Fringilla egestas justo massa purus sagittis malesuada.
      </p>
    </div>
  )
}
export function WithInlineTabs() {
 
const tabsOpen = [
  { name: 'Open', href: '#', current: true },
  { name: 'Closed', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} 

  return (
    <div className="border-b border-gray-200">
      <div className="sm:flex sm:items-baseline">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Issues</h3>
        <div className="mt-4 sm:mt-0 sm:ml-10">
          <nav className="-mb-px flex space-x-8">
            {tabsOpen.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
export function WithInputGroup() {

  /*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```

import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'
*/

  return (
    <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Job Postings</h3>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <label htmlFor="mobile-search-candidate" className="sr-only">
          Search
        </label>
        <label htmlFor="desktop-search-candidate" className="sr-only">
          Search
        </label>
        <div className="flex rounded-md shadow-sm">
          <div className="relative flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="mobile-search-candidate"
              id="mobile-search-candidate"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:hidden border-gray-300"
              placeholder="Search"
            />
            <input
              type="text"
              name="desktop-search-candidate"
              id="desktop-search-candidate"
              className="hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300"
              placeholder="Search candidates"
            />
          </div>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span className="ml-2">Sort</span>
            <ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
export function WithLabel() {
  return (
    <div className="pb-5 border-b border-gray-200">
      <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
        <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">Job Postings</h3>
        <p className="ml-2 mt-1 text-sm text-gray-500 truncate">in Engineering</p>
      </div>
    </div>
  )
}
export function WithTabs() {
  /*
 This example requires Tailwind CSS v2.0+ 
 
 This example requires some changes to your config:
 
 ```
 // tailwind.config.js
 module.exports = {
   // ...
   plugins: [
     // ...
     require('@tailwindcss/forms'),
   ],
 }
 ```
*/
  const tabs = [
    { name: 'Applied', href: '#', current: false },
    { name: 'Phone Screening', href: '#', current: false },
    { name: 'Interview', href: '#', current: true },
    { name: 'Offer', href: '#', current: false },
    { name: 'Hired', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className="pb-5 border-b border-gray-200 sm:pb-0">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Candidates</h3>
      <div className="mt-3 sm:mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )

}