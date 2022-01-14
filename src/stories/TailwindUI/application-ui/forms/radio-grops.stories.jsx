

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'


export default {
  title: 'Tailwind UI/Application UI/Forms/Radio Groups',
};

export function Cards() {

  /*
  import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'
*/
  const mailingLists = [
    { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
    { id: 2, title: 'Existing Customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
    { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <RadioGroup.Label className="text-base font-medium text-gray-900">Select a mailing list</RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {mailingLists.map((mailingList) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'ring-2 ring-indigo-500' : '',
                'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                <div className="flex-1 flex">
                  <div className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                      {mailingList.description}
                    </RadioGroup.Description>
                    <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                      {mailingList.users}
                    </RadioGroup.Description>
                  </div>
                </div>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600')}
                  aria-hidden="true"
                />
                <div
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-indigo-500' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
export function ColorPicker() {
  /* This example requires Tailwind CSS v2.0+ 
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
*/
  const colors = [
    { name: 'Pink', bgColor: 'bg-pink-500', selectedColor: 'ring-pink-500' },
    { name: 'Purple', bgColor: 'bg-purple-500', selectedColor: 'ring-purple-500' },
    { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
    { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
    { name: 'Yellow', bgColor: 'bg-yellow-500', selectedColor: 'ring-yellow-500' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [selectedColor, setSelectedColor] = useState(colors[1])

  return (
    <RadioGroup value={selectedColor} onChange={setSelectedColor}>
      <RadioGroup.Label className="block text-sm font-medium text-gray-700">Choose a label color</RadioGroup.Label>
      <div className="mt-4 flex items-center space-x-3">
        {colors.map((color) => (
          <RadioGroup.Option
            key={color.name}
            value={color}
            className={({ active, checked }) =>
              classNames(
                color.selectedColor,
                active && checked ? 'ring ring-offset-1' : '',
                !active && checked ? 'ring-2' : '',
                '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
              )
            }
          >
            <RadioGroup.Label as="p" className="sr-only">
              {color.name}
            </RadioGroup.Label>
            <span
              aria-hidden="true"
              className={classNames(color.bgColor, 'h-8 w-8 border border-black border-opacity-10 rounded-full')}
            />
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
export function ListsWithDescriptions() {
  const plans = [
    { id: 'small', name: 'Small', description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
    { id: 'medium', name: 'Medium', description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage' },
    { id: 'large', name: 'Large', description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage' },
  ]
  return (
    <fieldset>
      <legend className="sr-only">Plan</legend>
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id={plan.id}
                aria-describedby={`${plan.id}-description`}
                name="plan"
                type="radio"
                defaultChecked={plan.id === 'small'}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={plan.id} className="font-medium text-gray-700">
                {plan.name}
              </label>
              <p id={`${plan.id}-description`} className="text-gray-500">
                {plan.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
export function ListsWithDescriptionsInPanel() {
  /*
  import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
*/
  const settings = [
    { name: 'Public access', description: 'This project would be available to anyone who has the link' },
    { name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
    { name: 'Private to you', description: 'You are the only one able to access this project' },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [selected, setSelected] = useState(settings[0])

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
      <div className="bg-white rounded-md -space-y-px">
        {settings.map((setting, settingIdx) => (
          <RadioGroup.Option
            key={setting.name}
            value={setting}
            className={({ checked }) =>
              classNames(
                settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                'relative border p-4 flex cursor-pointer focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                    active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                    'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <div className="ml-3 flex flex-col">
                  <RadioGroup.Label
                    as="span"
                    className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium')}
                  >
                    {setting.name}
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="span"
                    className={classNames(checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm')}
                  >
                    {setting.description}
                  </RadioGroup.Description>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
export function ListWithInlineDescription() {

  const plans = [
    { id: 'small', name: 'Small', description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
    { id: 'medium', name: 'Medium', description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage' },
    { id: 'large', name: 'Large', description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage' },
  ]
  return (
    <fieldset>
      <legend className="sr-only">Plan</legend>
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id={plan.id}
                aria-describedby={`${plan.id}-description`}
                name="plan"
                type="radio"
                defaultChecked={plan.id === 'small'}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={plan.id} className="font-medium text-gray-700">
                {plan.name}
              </label>
              <span id={`${plan.id}-description`} className="text-gray-500">
                {plan.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
export function ListWithRadioOnRight() {

  const accounts = [
    { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
    { id: 'savings', name: 'Savings', description: 'Bank of America ••••0149' },
    { id: 'mastercard', name: 'Mastercard', description: 'Capital One ••••7877' },
  ]
  return (
    <div>
      <h2 className="text-lg leading-6 font-medium text-gray-900">Transfer funds</h2>
      <p className="mt-1 text-sm text-gray-500">Transfer your balance to your bank account.</p>
      <fieldset className="mt-2">
        <legend className="sr-only">Bank account</legend>
        <div className="divide-y divide-gray-200">
          {accounts.map((account, accountIdx) => (
            <div key={accountIdx} className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm">
                <label htmlFor={`account-${account.id}`} className="font-medium text-gray-700">
                  {account.name}
                </label>
                <p id={`account-${account.id}-description`} className="text-gray-500">
                  {account.description}
                </p>
              </div>
              <div className="ml-3 flex items-center h-5">
                <input
                  id={`account-${account.id}`}
                  aria-describedby={`account-${account.id}-description`}
                  name="account"
                  type="radio"
                  defaultChecked={account.id === 'checking'}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
export function SimpleInlineList() {

  const notificationMethods = [
    { id: 'email', title: 'Email' },
    { id: 'sms', title: 'Phone (SMS)' },
    { id: 'push', title: 'Push notification' },
  ]
  return (
    <div>
      <label className="text-base font-medium text-gray-900">Notifications</label>
      <p className="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === 'email'}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
export function SimpleListWithRadioOnRight() {
  const sides = [
    { id: null, name: 'None' },
    { id: 1, name: 'Baked beans' },
    { id: 2, name: 'Coleslaw' },
    { id: 3, name: 'French fries' },
    { id: 4, name: 'Garden salad' },
    { id: 5, name: 'Mashed potatoes' },
  ]
  return (
    <fieldset>
      <legend className="text-lg font-medium text-gray-900">Side</legend>
      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        {sides.map((side, sideIdx) => (
          <div key={sideIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm">
              <label htmlFor={`side-${side.id}`} className="font-medium text-gray-700 select-none">
                {side.name}
              </label>
            </div>
            <div className="ml-3 flex items-center h-5">
              <input
                id={`side-${side.id}`}
                name="plan"
                type="radio"
                defaultChecked={side.id === null}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )

}
export function SimpleList() {
  const notificationMethods = [
    { id: 'email', title: 'Email' },
    { id: 'sms', title: 'Phone (SMS)' },
    { id: 'push', title: 'Push notification' },
  ]
  return (
    <div>
      <label className="text-base font-medium text-gray-900">Notifications</label>
      <p className="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === 'email'}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )

}
export function SimpleTable() {
  /**
    import { useState } from 'react'
    import { RadioGroup } from '@headlessui/react'
*/
  const plans = [
    { name: 'Startup', priceMonthly: 29, priceYearly: 290, limit: 'Up to 5 active job postings' },
    { name: 'Business', priceMonthly: 99, priceYearly: 990, limit: 'Up to 25 active job postings' },
    { name: 'Enterprise', priceMonthly: 249, priceYearly: 2490, limit: 'Unlimited active job postings' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [selected, setSelected] = useState(plans[0])

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Pricing plans</RadioGroup.Label>
      <div className="relative bg-white rounded-md -space-y-px">
        {plans.map((plan, planIdx) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={({ checked }) =>
              classNames(
                planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                planIdx === plans.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center text-sm">
                  <span
                    className={classNames(
                      checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                      active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                      'h-4 w-4 rounded-full border flex items-center justify-center'
                    )}
                    aria-hidden="true"
                  >
                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <RadioGroup.Label
                    as="span"
                    className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'ml-3 font-medium')}
                  >
                    {plan.name}
                  </RadioGroup.Label>
                </div>
                <RadioGroup.Description className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                  <span className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'font-medium')}>
                    ${plan.priceMonthly} / mo
                  </span>{' '}
                  <span className={checked ? 'text-indigo-700' : 'text-gray-500'}>(${plan.priceYearly} / yr)</span>
                </RadioGroup.Description>
                <RadioGroup.Description
                  className={classNames(
                    checked ? 'text-indigo-700' : 'text-gray-500',
                    'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                  )}
                >
                  {plan.limit}
                </RadioGroup.Description>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
export function SmallCards() { 
  /*
  import { useState } from 'react'
  import { RadioGroup } from '@headlessui/react'
*/
  const memoryOptions = [
    { name: '4 GB', inStock: true },
    { name: '8 GB', inStock: true },
    { name: '16 GB', inStock: true },
    { name: '32 GB', inStock: true },
    { name: '64 GB', inStock: true },
    { name: '128 GB', inStock: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [mem, setMem] = useState(memoryOptions[2])

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">RAM</h2>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          See performance specs
        </a>
      </div>

      <RadioGroup value={mem} onChange={setMem} className="mt-2">
        <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {memoryOptions.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ active, checked }) =>
                classNames(
                  option.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed',
                  active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                  checked
                    ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                  'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                )
              }
              disabled={!option.inStock}
            >
              <RadioGroup.Label as="p">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
export function StackedCards() { /*
  
  import { useState } from 'react'
  import { RadioGroup } from '@headlessui/react'
*/
  const plans = [
    { name: 'Hobby', ram: '8GB', cpus: '4 CPUs', disk: '160 GB SSD disk', price: '$40' },
    { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256 GB SSD disk', price: '$80' },
    { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512 GB SSD disk', price: '$160' },
    { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1024 GB SSD disk', price: '$240' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [selected, setSelected] = useState(plans[0])

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="space-y-4">
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'ring-2 ring-indigo-500' : '',
                'relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center">
                  <div className="text-sm">
                    <RadioGroup.Label as="p" className="font-medium text-gray-900">
                      {plan.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="div" className="text-gray-500">
                      <p className="sm:inline">
                        {plan.ram} / {plan.cpus}
                      </p>{' '}
                      <span className="hidden sm:inline sm:mx-1" aria-hidden="true">
                        &middot;
                      </span>{' '}
                      <p className="sm:inline">{plan.disk}</p>
                    </RadioGroup.Description>
                  </div>
                </div>
                <RadioGroup.Description as="div" className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                  <div className="font-medium text-gray-900">{plan.price}</div>
                  <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
                </RadioGroup.Description>
                <div
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-indigo-500' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
} 
