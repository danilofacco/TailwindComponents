import { CheckIcon, MinusIcon, CheckCircleIcon, CalendarIcon, PlusIcon, UsersIcon, ViewBoardsIcon, ViewListIcon, XIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'

export default {
  title: 'TailwindUI/Marketing/Sections/Pricing',
};
export function FoutTiersWithToogle() {
  /* This example requires Tailwind CSS v2.0+ 
import { CheckIcon } from '@heroicons/react/solid'
*/
  const tiers = [
    {
      name: 'Hobby',
      href: '#',
      priceMonthly: 12,
      description: 'All the basics for starting a new business',
      includedFeatures: ['Potenti felis, in cras at at ligula nunc.', 'Orci neque eget pellentesque.'],
    },
    {
      name: 'Freelancer',
      href: '#',
      priceMonthly: 24,
      description: 'All the basics for starting a new business',
      includedFeatures: [
        'Potenti felis, in cras at at ligula nunc. ',
        'Orci neque eget pellentesque.',
        'Donec mauris sit in eu tincidunt etiam.',
      ],
    },
    {
      name: 'Startup',
      href: '#',
      priceMonthly: 32,
      description: 'All the basics for starting a new business',
      includedFeatures: [
        'Potenti felis, in cras at at ligula nunc. ',
        'Orci neque eget pellentesque.',
        'Donec mauris sit in eu tincidunt etiam.',
        'Faucibus volutpat magna.',
      ],
    },
    {
      name: 'Enterprise',
      href: '#',
      priceMonthly: 48,
      description: 'All the basics for starting a new business',
      includedFeatures: [
        'Potenti felis, in cras at at ligula nunc. ',
        'Orci neque eget pellentesque.',
        'Donec mauris sit in eu tincidunt etiam.',
        'Faucibus volutpat magna.',
        'Id sed tellus in varius quisque.',
        'Risus egestas faucibus.',
        'Risus cursus ullamcorper.',
      ],
    },
  ]


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
          <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              className="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
            >
              Monthly billing
            </button>
            <button
              type="button"
              className="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
            >
              Yearly billing
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Buy {tier.name}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SinglePriceWithDetails() {
  /* This example requires Tailwind CSS v2.0+
import { CheckCircleIcon } from '@heroicons/react/solid'
 */
  const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
  ]


  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Simple no-tricks pricing</h2>
            <p className="mt-4 text-xl text-gray-600">
              If you're not satisfied, contact us within the first 14 days and we'll send you a full refund.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Lifetime Membership</h3>
                <p className="mt-6 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                  repellendus etur quidem assumenda.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">Pay once, own it forever</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>$349</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">USD</span>
                </div>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    Learn about our membership policy
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Get Access
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-900">
                    Get a free sample <span className="font-normal text-gray-500">(20MB)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SinglePriceWithFeatureList() {
  /* This example requires Tailwind CSS v2.0+ 
import { CheckIcon } from '@heroicons/react/outline'
*/
  const features = [
    'Vitae in pulvinar odio id utobortis in inter.',
    'Sed sed id viverra viverra augue eget massa.',
    'Urna, gravida amet, a, integer venenatis.',
    'Lobortis sed pharetra amet vitae eleifend.',
    'Ullamcorper blandit a consequat donec elit aoreet.',
    'Dolor quo assumenda.',
    'Esse rerum distinctio maiores maiores.',
    'Eos enim officiis ratione.',
    'Tempore molestiae aliquid excepturi.',
    'Perspiciatis eveniet inventore eum et aliquam.',
  ]


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
              <span className="text-gray-900">Everything you need for </span>
              <span className="text-indigo-600">$99 a month</span>
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Includes every feature we offer plus unlimited projects and unlimited users.
            </p>
          </div>
          <a
            href="#"
            className="mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
          >
            Get started today
          </a>
        </div>
        <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Everything you need</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">All-in-one platform</p>
            <p className="mt-4 text-lg text-gray-500">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
              nec. Urna, sed a lectus elementum blandit et.
            </p>
          </div>
          <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
            <ul role="list" className="divide-y divide-gray-200">
              {features.slice(0, 5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="py-4 flex md:py-0 md:pb-4">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
            <ul role="list" className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
              {features.slice(5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="py-4 flex md:border-t-0 md:py-0 md:pb-4">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SplitWithBrandPanel() {
  /* This example requires Tailwind CSS v2.0+ 
import { CalendarIcon, CheckIcon, PlusIcon, UsersIcon, ViewBoardsIcon, ViewListIcon } from '@heroicons/react/outline'
*/
  const features = [
    {
      name: 'List view',
      icon: ViewListIcon,
      description:
        'Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.',
    },
    {
      name: 'Boards',
      icon: ViewBoardsIcon,
      description:
        'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
    },
    {
      name: 'Calendar',
      icon: CalendarIcon,
      description:
        'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
    },
    {
      name: 'Teams',
      icon: UsersIcon,
      description:
        'Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.',
    },
  ]
  const checklist = [
    'Unlimited projects',
    'No per user fees',
    'Unlimited storage',
    '24/7 support',
    'Cancel any time',
    '14 days free',
  ]


  return (
    <div className="relative bg-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-indigo-700" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
        <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Full-featured</h2>
            <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Everything you need to talk with your customers
            </p>
            <dl className="mt-12 space-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="bg-indigo-700 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
          <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
            <div>
              <h2 className="sr-only">Price</h2>
              <p className="relative grid grid-cols-2">
                <span className="flex flex-col text-center">
                  <span className="text-5xl font-extrabold text-white tracking-tight">$99</span>
                  <span className="mt-2 text-base font-medium text-indigo-200">Setup fee</span>
                  <span className="sr-only">plus</span>
                </span>
                <span
                  className="pointer-events-none absolute h-12 w-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  <PlusIcon className="h-6 w-6 text-indigo-300" aria-hidden="true" />
                </span>
                <span>
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-extrabold text-white tracking-tight">$4</span>
                    <span className="mt-2 text-base font-medium text-indigo-200">Per month</span>
                  </span>
                </span>
              </p>
            </div>
            <ul role="list" className="rounded overflow-hidden grid gap-px sm:grid-cols-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="bg-indigo-800 bg-opacity-50 py-4 px-4 flex items-center space-x-3 text-base text-white"
                >
                  <CheckIcon className="h-6 w-6 text-indigo-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="bg-white border border-transparent rounded-md w-full px-8 py-4 flex items-center justify-center text-lg leading-6 font-medium text-indigo-600 hover:bg-indigo-50 md:px-10"
            >
              Get started today
            </a>
            <a href="#" className="block text-center text-base font-medium text-indigo-200 hover:text-white">
              Try Workflow Lite for free
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ThreeTiersOnBrandAndFeatureComparison() {
  /* This example requires Tailwind CSS v2.0+
import { CheckIcon, XIcon } from '@heroicons/react/solid'
 */
  const plans = [
    {
      title: 'Starter',
      featured: false,
      description: 'All your essential business finances, taken care of.',
      priceMonthly: 5,
      priceYearly: 56,
      mainFeatures: [
        { id: 1, value: 'Basic invoicing' },
        { id: 2, value: 'Easy to use accounting' },
        { id: 3, value: 'Mutli-accounts' },
      ],
    },
    {
      title: 'Scale',
      featured: true,
      description: 'The best financial services for your thriving business.',
      priceMonthly: 19,
      priceYearly: 220,
      mainFeatures: [
        { id: 1, value: 'Advanced invoicing' },
        { id: 2, value: 'Easy to use accounting' },
        { id: 3, value: 'Mutli-accounts' },
        { id: 4, value: 'Tax planning toolkit' },
        { id: 5, value: 'VAT & VATMOSS filing' },
        { id: 6, value: 'Free bank transfers' },
      ],
    },
    {
      title: 'Growth',
      featured: false,
      description: 'Convenient features to take your business to the next level.',
      priceMonthly: 12,
      priceYearly: 140,
      mainFeatures: [
        { id: 1, value: 'Basic invoicing' },
        { id: 2, value: 'Easy to use accounting' },
        { id: 3, value: 'Mutli-accounts' },
        { id: 4, value: 'Tax planning toolkit' },
      ],
    },
  ]
  const features = [
    {
      title: 'Tax Savings',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Easy to use accounting',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Multi-accounts',
      tiers: [
        { title: 'starter', value: '3 accounts' },
        { title: 'popular', featured: true, value: 'Unlimited accounts' },
        { title: 'intermediate', value: '7 accounts' },
      ],
    },
    {
      title: 'Invoicing',
      tiers: [
        { title: 'starter', value: '3 invoices' },
        { title: 'popular', featured: true, value: 'Unlimited invoices' },
        { title: 'intermediate', value: '10 invoices' },
      ],
    },
    {
      title: 'Exclusive offers',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: '6 months free advisor',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Mobile and web access',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: false },
      ],
    },
  ]
  const perks = [
    {
      title: '24/7 customer support',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Instant notifications',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Budgeting tools',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Digital receipts',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Pots to separate money',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Free bank transfers',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: false },
      ],
    },
    {
      title: 'Business debit card',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: false },
      ],
    },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <div className="bg-gray-50">
      <div className="relative bg-indigo-600">
        {/* Overlapping background */}
        <div aria-hidden="true" className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block" />

        <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            <span className="block lg:inline">Simple pricing,</span>
            <span className="block lg:inline">no commitment.</span>
          </h1>
          <p className="mt-4 text-xl text-indigo-100">
            Everything you need, nothing you don't. Pick a plan that best suits your business.
          </p>
        </div>

        <h2 className="sr-only">Plans</h2>

        {/* Toggle */}
        <div className="relative mt-12 flex justify-center sm:mt-16">
          <div className="bg-indigo-700 p-0.5 rounded-lg flex">
            <button
              type="button"
              className="relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
            >
              Monthly billing
            </button>
            <button
              type="button"
              className="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
            >
              Yearly billing
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
          />

          <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={classNames(
                  plan.featured ? 'bg-white ring-2 ring-indigo-700 shadow-md' : 'bg-indigo-700 lg:bg-transparent',
                  'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                )}
              >
                <div>
                  <h3
                    className={classNames(
                      plan.featured ? 'text-indigo-600' : 'text-white',
                      'text-sm font-semibold uppercase tracking-wide'
                    )}
                  >
                    {plan.title}
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="mt-3 flex items-center">
                      <p
                        className={classNames(
                          plan.featured ? 'text-indigo-600' : 'text-white',
                          'text-4xl font-extrabold tracking-tight'
                        )}
                      >
                        ${plan.priceMonthly}
                      </p>
                      <div className="ml-4">
                        <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                          USD / mo
                        </p>
                        <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
                          Billed yearly (${plan.priceYearly})
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className={classNames(
                        plan.featured
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-white text-indigo-600 hover:bg-indigo-50',
                        'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                      )}
                    >
                      Buy {plan.title}
                    </a>
                  </div>
                </div>
                <h4 className="sr-only">Features</h4>
                <ul
                  role="list"
                  className={classNames(
                    plan.featured
                      ? 'border-gray-200 divide-gray-200'
                      : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                    'mt-7 border-t divide-y lg:border-t-0'
                  )}
                >
                  {plan.mainFeatures.map((mainFeature) => (
                    <li key={mainFeature.id} className="py-3 flex items-center">
                      <CheckIcon
                        className={classNames(
                          plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                          'w-5 h-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          plan.featured ? 'text-gray-600' : 'text-white',
                          'ml-3 text-sm font-medium'
                        )}
                      >
                        {mainFeature.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature comparison (up to lg) */}
      <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
        <h2 id="mobile-comparison-heading" className="sr-only">
          Feature comparison
        </h2>

        <div className="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
          {plans.map((plan, mobilePlanIndex) => (
            <div key="plan.title" className="border-t border-gray-200">
              <div
                className={classNames(
                  plan.featured ? 'border-indigo-600' : 'border-transparent',
                  '-mt-px pt-6 border-t-2 sm:w-1/2'
                )}
              >
                <h3 className={classNames(plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold')}>
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              </div>
              <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

              <div className="mt-6 relative">
                {/* Fake card background */}
                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'shadow-md' : 'shadow',
                      'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                    'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                  )}
                >
                  <dl className="divide-y divide-gray-200">
                    {features.map((feature) => (
                      <div
                        key={feature.title}
                        className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                      >
                        <dt className="pr-4 text-sm font-medium text-gray-600">{feature.title}</dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          {typeof feature.tiers[mobilePlanIndex].value === 'string' ? (
                            <span
                              className={classNames(
                                feature.tiers[mobilePlanIndex].featured ? 'text-indigo-600' : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {feature.tiers[mobilePlanIndex].value}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[mobilePlanIndex].value === true ? (
                                <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                              ) : (
                                <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">
                                {feature.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No'}
                              </span>
                            </>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                      'absolute right-0 w-1/2 h-full rounded-lg'
                    )}
                  />
                </div>
              </div>

              <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

              <div className="mt-6 relative">
                {/* Fake card background */}
                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'shadow-md' : 'shadow',
                      'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                    'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                  )}
                >
                  <dl className="divide-y divide-gray-200">
                    {perks.map((perk) => (
                      <div key={perk.title} className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                        <dt className="text-sm font-medium text-gray-600 sm:pr-4">{perk.title}</dt>
                        <dd className="text-center sm:px-4">
                          {perk.tiers[mobilePlanIndex].value === true ? (
                            <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                          ) : (
                            <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                          )}

                          <span className="sr-only">{perk.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No'}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                  <div
                    className={classNames(
                      plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                      'absolute right-0 w-1/2 h-full rounded-lg'
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature comparison (lg+) */}
      <section aria-labelledby="comparison-heading" className="hidden lg:block">
        <h2 id="comparison-heading" className="sr-only">
          Feature comparison
        </h2>

        <div className="max-w-7xl mx-auto py-24 px-8">
          <div className="w-full border-t border-gray-200 flex items-stretch">
            <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
              <h3 className="mt-auto text-sm font-bold text-gray-900">Catered for business</h3>
            </div>
            {plans.map((plan, planIdx) => (
              <div
                key={plan.title}
                aria-hidden="true"
                className={classNames(planIdx === plans.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4')}
              >
                <div
                  className={classNames(plan.featured ? 'border-indigo-600' : 'border-transparent', 'py-6 border-t-2')}
                >
                  <p className={classNames(plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold')}>
                    {plan.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            {/* Fake card backgrounds */}
            <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="w-full h-full bg-white rounded-lg shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="w-full h-full bg-white rounded-lg shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="w-full h-full bg-white rounded-lg shadow" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Business feature comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {features.map((feature) => (
                  <tr key={feature.title}>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                      {feature.title}
                    </th>
                    {feature.tiers.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                          'relative w-1/4 py-0 text-center'
                        )}
                      >
                        <span className="relative w-full h-full py-3">
                          {typeof tier.value === 'string' ? (
                            <span
                              className={classNames(
                                tier.featured ? 'text-indigo-600' : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {tier.value}
                            </span>
                          ) : (
                            <>
                              {tier.value === true ? (
                                <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                              ) : (
                                <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                            </>
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          <h3 className="mt-10 text-sm font-bold text-gray-900">Other perks</h3>

          <div className="mt-6 relative">
            {/* Fake card backgrounds */}
            <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="w-full h-full bg-white rounded-lg shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="w-full h-full bg-white rounded-lg shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="w-full h-full bg-white rounded-lg shadow" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Perk comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Perk</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {perks.map((perk) => (
                  <tr key={perk.title}>
                    <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                      {perk.title}
                    </th>
                    {perk.tiers.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                          'relative w-1/4 py-0 text-center'
                        )}
                      >
                        <span className="relative w-full h-full py-3">
                          {tier.value === true ? (
                            <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                          ) : (
                            <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                          )}

                          <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function ThreeTiersWithEmphasizedTier() {
  /* This example requires Tailwind CSS v2.0+ 
import { CheckIcon } from '@heroicons/react/outline'
*/
  const hobbyFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
  const scaleFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
  const growthFeatures = [
    'Quia rem est sed impedit magnam',
    'Dolorem vero ratione voluptates',
    'Qui sed ab doloribus voluptatem dolore',
    'Laborum commodi molestiae id et fugiat',
    'Nam ut ipsa nesciunt culpa modi dolor',
  ]


  return (
    <div className="bg-gray-900">
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            The right price for you, whoever you are
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus
            molestiae voluptatum.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-hobby">
                          Hobby
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span className="font-extrabold">79</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">/month</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-hobby"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                        Growth
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                          <span className="font-extrabold">149</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">/month</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {growthFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="#"
                          className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                          aria-describedby="tier-growth"
                        >
                          Start your trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-scale">
                          Scale
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span className="font-extrabold">349</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">/month</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {scaleFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ThreeTiers() {
  /* This example requires Tailwind CSS v2.0+ 
import { CheckIcon } from '@heroicons/react/outline'
*/
  const pricing = {
    tiers: [
      {
        title: 'Freelancer',
        price: 24,
        frequency: '/month',
        description: 'The essentials to provide your best work for clients.',
        features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
        cta: 'Monthly billing',
        mostPopular: false,
      },
      {
        title: 'Startup',
        price: 32,
        frequency: '/month',
        description: 'A plan that scales with your rapidly growing business.',
        features: [
          '25 products',
          'Up to 10,000 subscribers',
          'Advanced analytics',
          '24-hour support response time',
          'Marketing automations',
        ],
        cta: 'Monthly billing',
        mostPopular: true,
      },
      {
        title: 'Enterprise',
        price: 48,
        frequency: '/month',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
          'Unlimited products',
          'Unlimited subscribers',
          'Advanced analytics',
          '1-hour, dedicated support response time',
          'Marketing automations',
          'Custom integrations',
        ],
        cta: 'Monthly billing',
        mostPopular: false,
      },
    ],
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
        Pricing plans for teams of all sizes
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-500">
        Choose an affordable plan that's packed with the best features for engaging your audience, creating customer
        loyalty, and driving sales.
      </p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Most popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">${tier.price}</span>
                <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon className="flex-shrink-0 w-6 h-6 text-indigo-500" aria-hidden="true" />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className={classNames(
                tier.mostPopular
                  ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TwoTiersWithExtraTier() {
  /* This example requires Tailwind CSS v2.0+ 
import { CheckIcon } from '@heroicons/react/outline'
*/
  const tiers = [
    {
      name: 'Standard',
      href: '#',
      priceMonthly: 49,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      features: [
        'Pariatur quod similique',
        'Sapiente libero doloribus modi nostrum',
        'Vel ipsa esse repudiandae excepturi',
        'Itaque cupiditate adipisci quibusdam',
      ],
    },
    {
      name: 'Enterprise',
      href: '#',
      priceMonthly: 79,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      features: [
        'Pariatur quod similique',
        'Sapiente libero doloribus modi nostrum',
        'Vel ipsa esse repudiandae excepturi',
        'Itaque cupiditate adipisci quibusdam',
      ],
    },
  ]


  return (
    <div className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Pricing</h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              The right price for you, whoever you are
            </p>
            <p className="text-xl text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      ${tier.priceMonthly}
                      <span className="ml-1 text-2xl font-medium text-gray-500">/mo</span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                    Discounted
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  Get full access to all of standard license features for solo projects that make less than $20k gross
                  revenue for <span className="font-semibold text-gray-900">$29</span>.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Buy Discounted License
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WithComparisonTable() {
  /* This example requires Tailwind CSS v2.0+ 
import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/solid'
*/
  const tiers = [
    { name: 'Basic', href: '#', priceMonthly: 9, description: 'Quis suspendisse ut fermentum neque vivamus non tellus.' },
    {
      name: 'Essential',
      href: '#',
      priceMonthly: 29,
      description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    },
    {
      name: 'Premium',
      href: '#',
      priceMonthly: 59,
      description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
    },
  ]
  const sections = [
    {
      name: 'Features',
      features: [
        { name: 'Molestie lobortis massa.', tiers: { Basic: true, Essential: true, Premium: true } },
        { name: 'Urna purus felis.', tiers: { Basic: true, Essential: true, Premium: true } },
        { name: 'Tellus pulvinar sit dictum.', tiers: { Essential: true, Premium: true } },
        { name: 'Convallis.', tiers: { Essential: 'Up to 20 users', Premium: 'Up to 50 users' } },
      ],
    },
    {
      name: 'Reporting',
      features: [
        { name: 'Adipiscing.', tiers: { Basic: true, Essential: true, Premium: true } },
        { name: 'Eget risus integer.', tiers: { Essential: true, Premium: true } },
        { name: 'Gravida leo urna velit.', tiers: { Premium: true } },
        { name: 'Elementum ut dapibus mi feugiat cras nisl.', tiers: { Premium: true } },
      ],
    },
    {
      name: 'Support',
      features: [
        { name: 'Sit dignissim.', tiers: { Basic: true, Essential: true, Premium: true } },
        { name: 'Congue at nibh et.', tiers: { Essential: true, Premium: true } },
        { name: 'Volutpat feugiat mattis.', tiers: { Essential: true, Premium: true } },
        { name: 'Tristique pellentesque ornare diam sapien.', tiers: { Premium: true } },
      ],
    },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
        {/* xs to lg */}
        <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
          {tiers.map((tier, tierIdx) => (
            <section key={tier.name}>
              <div className="px-4 mb-8">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <a
                  href={tier.href}
                  className="mt-6 block border border-gray-800 rounded-md bg-gray-800 w-full py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Buy {tier.name}
                </a>
              </div>

              {sections.map((section) => (
                <table key={section.name} className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {section.features.map((feature) => (
                      <tr key={feature.name} className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700 text-right">{feature.tiers[tier.name]}</span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="ml-auto h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="ml-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

              <div
                className={classNames(
                  tierIdx < tiers.length - 1 ? 'py-5 border-b' : 'pt-5',
                  'border-t border-gray-200 px-4'
                )}
              >
                <a
                  href={tier.href}
                  className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Buy {tier.name}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="w-full h-px table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th className="pb-4 px-6 text-sm font-medium text-gray-900 text-left" scope="col">
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                    scope="col"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top" scope="row">
                  Pricing
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="h-full py-8 px-6 align-top">
                    <div className="relative h-full table">
                      <p>
                        <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                        <span className="text-base font-medium text-gray-500">/mo</span>
                      </p>
                      <p className="mt-4 mb-16 text-sm text-gray-500">{tier.description}</p>
                      <a
                        href={tier.href}
                        className="absolute bottom-0 flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                      >
                        Buy {tier.name}
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
                      colSpan={4}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th className="py-5 px-6 text-sm font-normal text-gray-500 text-left" scope="row">
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="py-5 px-6">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700">{feature.tiers[tier.name]}</span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="pt-5 px-6">
                    <a
                      href={tier.href}
                      className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                    >
                      Buy {tier.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
