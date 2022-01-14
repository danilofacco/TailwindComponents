 
import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default {
  title: 'Tailwind UI/Application UI/Forms/Action Panels',
};

 
export function SimpleWell(){  
  return (
  <div className="bg-gray-50 sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Need more bandwidth?</h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.</p>
      </div>
      <div className="mt-5">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
        >
          Contact sales
        </button>
      </div>
    </div>
  </div>
)}
export function Simple(){  
  return (
  <div className="bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Delete your account</h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>Once you delete your account, you will lose all data associated with it.</p>
      </div>
      <div className="mt-5">
        <button
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
        >
          Delete account
        </button>
      </div>
    </div>
  </div>
)}
export function WithButtonAtTopRight(){  
  return (
  <div className="bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <div className="sm:flex sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Manage subscription</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque
              repudiandae nam.
            </p>
          </div>
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Change plan
          </button>
        </div>
      </div>
    </div>
  </div>
)}
export function WithButtonOnRight(){  
  return (
  <div className="bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Manage subscription</h3>
      <div className="mt-2 sm:flex sm:items-start sm:justify-between">
        <div className="max-w-xl text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque
            repudiandae nam.
          </p>
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Change plan
          </button>
        </div>
      </div>
    </div>
  </div>
)
} 
export function WithInput(){ 
  return (
  <div className="bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Update your email</h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>Change the email address you want associated with your account.</p>
      </div>
      <form className="mt-5 sm:flex sm:items-center">
        <div className="w-full sm:max-w-xs">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="you@example.com"
          />
        </div>
        <button
          type="submit"
          className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Save
        </button>
      </form>
    </div>
  </div>
)}
export function WithLink(){  
  return (
  <div className="bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Continuous Integration</h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae
          ad.
        </p>
      </div>
      <div className="mt-3 text-sm">
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
          {' '}
          Learn more about our CI features <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
)}
export function WithToogle(){ 
  /* This example requires Tailwind CSS v2.0+ 
  import { useState } from 'react'
  import { Switch } from '@headlessui/react'
  */
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
    const [enabled, setEnabled] = useState(false)
  
    return (
      <div className="bg-white shadow sm:rounded-lg">
        <Switch.Group as="div" className="px-4 py-5 sm:p-6">
          <Switch.Label as="h3" className="text-lg leading-6 font-medium text-gray-900" passive>
            Renew subscription automatically
          </Switch.Label>
          <div className="mt-2 sm:flex sm:items-start sm:justify-between">
            <div className="max-w-xl text-sm text-gray-500">
              <Switch.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex
                maiores nostrum.
              </Switch.Description>
            </div>
            <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={classNames(
                  enabled ? 'bg-indigo-600' : 'bg-gray-200',
                  'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                )}
              >
                <span
                  aria-hidden="true"
                  className={classNames(
                    enabled ? 'translate-x-5' : 'translate-x-0',
                    'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                  )}
                />
              </Switch>
            </div>
          </div>
        </Switch.Group>
      </div>
    )}
export function WithWell(){ 
  return (
  <div className="bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Payment method</h3>
      <div className="mt-5">
        <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
          <h4 className="sr-only">Visa</h4>
          <div className="sm:flex sm:items-start">
            <svg className="h-8 w-auto sm:flex-shrink-0 sm:h-6" viewBox="0 0 36 24" aria-hidden="true">
              <rect width={36} height={24} fill="#224DBA" rx={4} />
              <path
                fill="#fff"
                d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
              />
            </svg>
            <div className="mt-3 sm:mt-0 sm:ml-4">
              <div className="text-sm font-medium text-gray-900">Ending with 4242</div>
              <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                <div>Expires 12/20</div>
                <span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
                  &middot;
                </span>
                <div className="mt-1 sm:mt-0">Last updated on 22 Aug 2017</div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}