
import { SortAscendingIcon, UsersIcon, QuestionMarkCircleIcon, ExclamationCircleIcon, MailIcon } from '@heroicons/react/solid'

export default {
  title: 'TailwindUI/Application UI/Forms/Input Groups',
};

export function InputWithAddOn() {
  return (
    <div>
      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
        Company Website
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
          http://
        </span>
        <input
          type="text"
          name="company-website"
          id="company-website"
          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
          placeholder="www.example.com"
        />
      </div>
    </div>
  )
}
export function InputWithCornerHint() {
  return (<div>
    <div className="flex justify-between">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <span className="text-sm text-gray-500" id="email-optional">
        Optional
      </span>
    </div>
    <div className="mt-1">
      <input
        type="email"
        name="email"
        id="email"
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="you@example.com"
        aria-describedby="email-optional"
      />
    </div>
  </div>
  )
}
export function InputWithGrayBackgroundAndBottomBorder() {
  return (
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name
      </label>
      <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
          placeholder="Jane Doe"
        />
      </div>
    </div>
  )
}
export function InputWithHiddenLabel() {
  return (
    <div>
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
  )
}
export function InputWithInlineAddOn() {
  return (
    <div>
      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
        Company Website
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">http://</span>
        </div>
        <input
          type="text"
          name="company-website"
          id="company-website"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:pl-14 sm:text-sm border-gray-300 rounded-md"
          placeholder="www.example.com"
        />
      </div>
    </div>
  )
}
export function InputWithInlineLeadingAddOnAndTrailingDropdown() {
  return (
    <div>
      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
        Price
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  )
}
export function InputWithInlineLeadingAndTrailingAddOns() {
  return (
    <div>
      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
        Price
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="0.00"
          aria-describedby="price-currency"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            USD
          </span>
        </div>
      </div>
    </div>
  )
}
export function InputWithInlineLeadingDropdown() {
  return (
    <div>
      <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            id="country"
            name="country"
            autoComplete="country"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option>US</option>
            <option>CA</option>
            <option>EU</option>
          </select>
        </div>
        <input
          type="text"
          name="phone-number"
          id="phone-number"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
          placeholder="+1 (555) 987-6543"
        />
      </div>
    </div>
  )
}
export function InputWithInsetLabel() {
  return (
    <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        placeholder="Jane Doe"
      />
    </div>
  )
}
export function InputWithKeyboardShortcut() {
  return (
    <div>
      <label htmlFor="search" className="block text-sm font-medium text-gray-700">
        Quick search
      </label>
      <div className="mt-1 relative flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  )
}
export function InputWithLabelAndHelpText() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
          aria-describedby="email-description"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500" id="email-description">
        We'll only use this for spam.
      </p>
    </div>
  )
}
export function InputWithLabel() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
      </div>
    </div>
  )
}
export function InputWithLeadingIconAndTrailingButton() {
  /*import { SortAscendingIcon, UsersIcon } from '@heroicons/react/solid' */
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Search candidates
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
            placeholder="John Doe"
          />
        </div>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Sort</span>
        </button>
      </div>
    </div>
  )
}
export function InputWithLeadingIcon() {
  /*import { MailIcon } from '@heroicons/react/solid'*/
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
      </div>
    </div>
  )
}
export function InputWithOverlappingLabel() {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
      >
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        placeholder="Jane Doe"
      />
    </div>
  )
}
export function InputWithPillShape() {
  return (
    <div>
      <label htmlFor="name" className="ml-px pl-4 block text-sm font-medium text-gray-700">
        Name
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="name"
          id="name"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
          placeholder="Jane Doe"
        />
      </div>
    </div>
  )
}
export function InputWithTrailingIcon() {
  /* import { QuestionMarkCircleIcon } from '@heroicons/react/solid'*/
  return (
    <div>
      <label htmlFor="account-number" className="block text-sm font-medium text-gray-700">
        Account number
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="account-number"
          id="account-number"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="000-00-0000"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
export function INputWithValidationError() {
  /*import { ExclamationCircleIcon } from '@heroicons/react/solid'*/
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
          placeholder="you@example.com"
          defaultValue="adamwathan"
          aria-invalid="true"
          aria-describedby="email-error"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        Your password must be less than 4 characters.
      </p>
    </div>
  )
}
export function InputsWithInsetLabelsAndSharedBorders() {
  return (
    <div className="isolate -space-y-px rounded-md shadow-sm">
      <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label htmlFor="name" className="block text-xs font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Jane Doe"
        />
      </div>
      <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label htmlFor="job-title" className="block w-full text-xs font-medium text-gray-700">
          Job Title
        </label>
        <input
          type="text"
          name="job-title"
          id="job-title"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Head of Tomfoolery"
        />
      </div>
    </div>
  )
}
export function InputsWithSharedBorders() {
  return (
    <div>
      <fieldset>
        <legend className="block text-sm font-medium text-gray-700">Card Details</legend>
        <div className="mt-1 bg-white rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="card-number" className="sr-only">
              Card number
            </label>
            <input
              type="text"
              name="card-number"
              id="card-number"
              className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
              placeholder="Card number"
            />
          </div>
          <div className="flex -space-x-px">
            <div className="w-1/2 flex-1 min-w-0">
              <label htmlFor="card-expiration-date" className="sr-only">
                Expiration date
              </label>
              <input
                type="text"
                name="card-expiration-date"
                id="card-expiration-date"
                className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                placeholder="MM / YY"
              />
            </div>
            <div className="flex-1 min-w-0">
              <label htmlFor="card-cvc" className="sr-only">
                CVC
              </label>
              <input
                type="text"
                name="card-cvc"
                id="card-cvc"
                className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                placeholder="CVC"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="mt-6 bg-white">
        <legend className="block text-sm font-medium text-gray-700">Billing address</legend>
        <div className="mt-1 rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div>
            <label htmlFor="postal-code" className="sr-only">
              ZIP / Postal code
            </label>
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-b-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
              placeholder="ZIP / Postal code"
            />
          </div>
        </div>
      </fieldset>
    </div>
  )
}
