 
 
import { UsersIcon } from '@heroicons/react/outline'
export default {
  title: 'Tailwind UI/Marketing/Sections/Stats Sections',
};
export function SimpleInCard() {
  /* This example requires Tailwind CSS v2.0+ */
 
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by developers from over 80 planets
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Pepperoni</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100%</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">24/7</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Calories</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100k</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SimpleOnBrand() {
  /* This example requires Tailwind CSS v2.0+ */
 
  return (
    <div className="bg-indigo-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by developers from over 80 planets</h2>
          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Pepperoni</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">100%</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Delivery</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Calories</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">100k+</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export function SplitWithImage() {
  /* This example requires Tailwind CSS v2.0+ 
import { UsersIcon } from '@heroicons/react/outline'

 */
return (
  <div className="relative bg-white">
    <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt="Support team"
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
      <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
        <div>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <UsersIcon className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Deliver what your customers want every time
        </h2>
        <p className="mt-6 text-lg text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa. Nostrum consectetur
          sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur
          deserunt voluptatibus.
        </p>
        <div className="mt-8 overflow-hidden">
          <dl className="-mx-8 -mt-8 flex flex-wrap">
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-gray-500">Delivery</dt>
              <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">24/7</dd>
            </div>
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-gray-500">Pepperoni</dt>
              <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">99.9%</dd>
            </div>
            <div className="flex flex-col px-8 pt-8">
              <dt className="order-2 text-base font-medium text-gray-500">Calories</dt>
              <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">100k+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
)
}

export function WithFadingBackgroundImage() {
  /* This example requires Tailwind CSS v2.0+ */
const metrics = [
  { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
  { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
  { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
  { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]

 
  return (
    <div className="relative bg-gray-900">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">Valuable Metrics</h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            Get actionable data that will help grow your business
          </p>
          <p className="mt-5 text-lg text-gray-300">
            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
            feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus
            nibh integer quis. Eu vulputate diam sit tellus quis at.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">{item.stat}</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
