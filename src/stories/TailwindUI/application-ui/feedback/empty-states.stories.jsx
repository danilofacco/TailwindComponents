
import { PlusIcon, PlusSmIcon } from '@heroicons/react/solid'
import { ChevronRightIcon } from '@heroicons/react/solid'
import {
  SpeakerphoneIcon, TerminalIcon,
  CalendarIcon,
  ClockIcon,
  PhotographIcon,
  TableIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from '@heroicons/react/outline'

export default {
  title: 'Tailwind UI/Application UI/Feedback/Empty States',
};


export function Simple() {
  /* This example requires Tailwind CSS v2.0+ 
  import { PlusIcon } from '@heroicons/react/solid'
  */
  return (
    <div className="text-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No projects</h3>
      <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Project
        </button>
      </div>
    </div>
  )
}
export function WithDashedBorder() {
  return (
    <button
      type="button"
      className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
        />
      </svg>
      <span className="mt-2 block text-sm font-medium text-gray-900">Create a new database</span>
    </button>
  )
}
export function WithRecomendationGrid() {
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

import { PlusIcon } from '@heroicons/react/solid'
*/
  const people = [
    {
      name: 'Lindsay Walton',
      handle: 'lindsaywalton',
      email: 'lindsaywalton@example.com',
      role: 'Front-end Developer',
      imageId: '1517841905240-472988babdf9',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Courtney Henry',
      handle: 'courtneyhenry',
      email: 'courtneyhenry@example.com',
      role: 'Designer',
      imageId: '1438761681033-6461ffad8d80',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Tom Cook',
      handle: 'tomcook',
      email: 'tomcook@example.com',
      role: 'Director, Product Development',
      imageId: '1472099645785-5658abf4ff4e',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Whitney Francis',
      handle: 'whitneyfrancis',
      email: 'whitneyfrancis@example.com',
      role: 'Copywriter',
      imageId: '1517365830460-955ce3ccd263',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leonard Krasner',
      handle: 'leonardkrasner',
      email: 'leonardkrasner@example.com',
      role: 'Senior Designer',
      imageId: '1519345182560-3f2917c472ef',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Floyd Miles',
      handle: 'floydmiles',
      email: 'floydmiles@example.com',
      role: 'Principal Designer',
      imageId: '1463453091185-61582044d556',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  return (
    <div className="max-w-md mx-auto sm:max-w-3xl">
      <div>
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <h2 className="mt-2 text-lg font-medium text-gray-900">Add team members</h2>
          <p className="mt-1 text-sm text-gray-500">You haven’t added any team members to your project yet.</p>
        </div>
        <form className="mt-6 sm:flex sm:items-center" action="#">
          <label htmlFor="emails" className="sr-only">
            Email addresses
          </label>
          <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
            <input
              type="text"
              name="emails"
              id="emails"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-32 sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter an email"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-4 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
              >
                <option>Can edit</option>
                <option>Can view</option>
              </select>
            </div>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
            <button
              type="submit"
              className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send invite
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Recommended team members</h3>
        <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {people.map((person, personIdx) => (
            <li key={personIdx}>
              <button
                type="button"
                className="group p-2 w-full flex items-center justify-between rounded-full border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="min-w-0 flex-1 flex items-center space-x-3">
                  <span className="block flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                  </span>
                  <span className="block min-w-0 flex-1">
                    <span className="block text-sm font-medium text-gray-900 truncate">{person.name}</span>
                    <span className="block text-sm font-medium text-gray-500 truncate">{person.role}</span>
                  </span>
                </span>
                <span className="flex-shrink-0 h-10 w-10 inline-flex items-center justify-center">
                  <PlusIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export function WithRecomendations() {
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

import { PlusSmIcon } from '@heroicons/react/solid'
*/
  const people = [
    {
      name: 'Lindsay Walton',
      handle: 'lindsaywalton',
      email: 'lindsaywalton@example.com',
      role: 'Front-end Developer',
      imageId: '1517841905240-472988babdf9',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Courtney Henry',
      handle: 'courtneyhenry',
      email: 'courtneyhenry@example.com',
      role: 'Designer',
      imageId: '1438761681033-6461ffad8d80',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Tom Cook',
      handle: 'tomcook',
      email: 'tomcook@example.com',
      role: 'Director, Product Development',
      imageId: '1472099645785-5658abf4ff4e',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  return (
    <div className="max-w-lg mx-auto">
      <div>
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <h2 className="mt-2 text-lg font-medium text-gray-900">Add team members</h2>
          <p className="mt-1 text-sm text-gray-500">
            You haven’t added any team members to your project yet. As the owner of this project, you can manage team
            member permissions.
          </p>
        </div>
        <form action="#" className="mt-6 flex">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter an email"
          />
          <button
            type="submit"
            className="ml-4 flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send invite
          </button>
        </form>
      </div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Team members previously added to projects
        </h3>
        <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
          {people.map((person, personIdx) => (
            <li key={personIdx} className="py-4 flex items-center justify-between space-x-3">
              <div className="min-w-0 flex-1 flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                  <p className="text-sm font-medium text-gray-500 truncate">{person.role}</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <PlusSmIcon className="-ml-1 mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-900">
                    {' '}
                    Invite <span className="sr-only">{person.name}</span>{' '}
                  </span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export function WithStartingPoints() {
  /* This example requires Tailwind CSS v2.0+ 
import {
 CalendarIcon,
 ClockIcon,
 PhotographIcon,
 TableIcon,
 ViewBoardsIcon,
 ViewListIcon,
} from '@heroicons/react/outline'
*/
  const items = [
    {
      title: 'Create a List',
      description: 'Another to-do system you’ll try but eventually give up on.',
      icon: ViewListIcon,
      background: 'bg-pink-500',
    },
    {
      title: 'Create a Calendar',
      description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
      icon: CalendarIcon,
      background: 'bg-yellow-500',
    },
    {
      title: 'Create a Gallery',
      description: 'Great for mood boards and inspiration.',
      icon: PhotographIcon,
      background: 'bg-green-500',
    },
    {
      title: 'Create a Board',
      description: 'Track tasks in different stages of your project.',
      icon: ViewBoardsIcon,
      background: 'bg-blue-500',
    },
    {
      title: 'Create a Spreadsheet',
      description: 'Lots of numbers and things — good for nerds.',
      icon: TableIcon,
      background: 'bg-indigo-500',
    },
    {
      title: 'Create a Timeline',
      description: 'Get a birds-eye-view of your procrastination.',
      icon: ClockIcon,
      background: 'bg-purple-500',
    },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900">Projects</h2>
      <p className="mt-1 text-sm text-gray-500">
        You haven’t created a project yet. Get started by selecting a template or start from an empty project.
      </p>
      <ul role="list" className="mt-6 border-t border-b border-gray-200 py-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 p-2 flex items-center space-x-4 rounded-xl hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500">
              <div
                className={classNames(
                  item.background,
                  'flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg'
                )}
              >
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {item.title}
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Or start from an empty project<span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  )
}
export function WithTemplates() {
  /* This example requires Tailwind CSS v2.0+ 
import { ChevronRightIcon } from '@heroicons/react/solid'
import { CalendarIcon, SpeakerphoneIcon, TerminalIcon } from '@heroicons/react/outline'
*/
  const items2 = [
    {
      name: 'Marketing Campaign',
      description: 'I think the kids call these memes these days.',
      href: '#',
      iconColor: 'bg-pink-500',
      icon: SpeakerphoneIcon,
    },
    {
      name: 'Engineering Project',
      description: 'Something really expensive that will ultimately get cancelled.',
      href: '#',
      iconColor: 'bg-purple-500',
      icon: TerminalIcon,
    },
    {
      name: 'Event',
      description: 'Like a conference all about you that no one will care about.',
      href: '#',
      iconColor: 'bg-yellow-500',
      icon: CalendarIcon,
    },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-lg font-medium text-gray-900">Create your first project</h2>
      <p className="mt-1 text-sm text-gray-500">Get started by selecting a template or start from an empty project.</p>
      <ul role="list" className="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200">
        {items2.map((item, itemIdx) => (
          <li key={itemIdx}>
            <div className="relative group py-4 flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span
                  className={classNames(item.iconColor, 'inline-flex items-center justify-center h-10 w-10 rounded-lg')}
                >
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-gray-900">
                  <a href={item.href}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {item.name}
                  </a>
                </div>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <div className="flex-shrink-0 self-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex">
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Or start from an empty project<span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  )
}
