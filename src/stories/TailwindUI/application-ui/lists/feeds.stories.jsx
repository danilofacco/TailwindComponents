 
 import { CheckIcon, ChatAltIcon, ThumbUpIcon, UserIcon, UserCircleIcon, TagIcon} from '@heroicons/react/solid'
 import { Fragment } from 'react'


export default {
  title: 'Tailwind UI/Application UI/Lists/Feeds',
}; 
export function SimpleWithIcons(){
/* This example requires Tailwind CSS v2.0+ 
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/solid'
*/
const timeline = [
  {
    id: 1,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

return (
  <div className="flow-root">
    <ul role="list" className="-mb-8">
      {timeline.map((event, eventIdx) => (
        <li key={event.id}>
          <div className="relative pb-8">
            {eventIdx !== timeline.length - 1 ? (
              <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
            ) : null}
            <div className="relative flex space-x-3">
              <div>
                <span
                  className={classNames(
                    event.iconBackground,
                    'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                  )}
                >
                  <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm text-gray-500">
                    {event.content}{' '}
                    <a href={event.href} className="font-medium text-gray-900">
                      {event.target}
                    </a>
                  </p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime={event.datetime}>{event.date}</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
}
export function StackedWithAvatars(){

const people = [
  {
    name: 'Lindsay Walton',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  // More people...
]
const activityItems = [
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  // More items...
]

return (
  <div>
    <ul role="list" className="divide-y divide-gray-200">
      {activityItems.map((activityItem) => (
        <li key={activityItem.id} className="py-4">
          <div className="flex space-x-3">
            <img className="h-6 w-6 rounded-full" src={activityItem.person.imageUrl} alt="" />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{activityItem.person.name}</h3>
                <p className="text-sm text-gray-500">{activityItem.time}</p>
              </div>
              <p className="text-sm text-gray-500">
                Deployed {activityItem.project} ({activityItem.commit} in master) to {activityItem.environment}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)  
}
export function WithMultipleItemTypes(){
  
  /*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          rose: colors.rose,
        },
      },
    },
  }
  ```

import { Fragment } from 'react'
import { ChatAltIcon, TagIcon, UserCircleIcon } from '@heroicons/react/solid'
*/
const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    type: 'assignment',
    person: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  },
  {
    id: 3,
    type: 'tags',
    person: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', href: '#', color: 'bg-rose-500' },
      { name: 'Accessibility', href: '#', color: 'bg-indigo-500' },
    ],
    date: '6h ago',
  },
  {
    id: 4,
    type: 'comment',
    person: { name: 'Jason Meyers', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
return (
  <div className="flow-root">
    <ul role="list" className="-mb-8">
      {activity.map((activityItem, activityItemIdx) => (
        <li key={activityItem.id}>
          <div className="relative pb-8">
            {activityItemIdx !== activity.length - 1 ? (
              <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
            ) : null}
            <div className="relative flex items-start space-x-3">
              {activityItem.type === 'comment' ? (
                <>
                  <div className="relative">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                      src={activityItem.imageUrl}
                      alt=""
                    />

                    <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                      <ChatAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm">
                        <a href={activityItem.person.href} className="font-medium text-gray-900">
                          {activityItem.person.name}
                        </a>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Commented {activityItem.date}</p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{activityItem.comment}</p>
                    </div>
                  </div>
                </>
              ) : activityItem.type === 'assignment' ? (
                <>
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                        <UserCircleIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5">
                    <div className="text-sm text-gray-500">
                      <a href={activityItem.person.href} className="font-medium text-gray-900">
                        {activityItem.person.name}
                      </a>{' '}
                      assigned{' '}
                      <a href={activityItem.assigned.href} className="font-medium text-gray-900">
                        {activityItem.assigned.name}
                      </a>{' '}
                      <span className="whitespace-nowrap">{activityItem.date}</span>
                    </div>
                  </div>
                </>
              ) : activityItem.type === 'tags' ? (
                <>
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                        <TagIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-0">
                    <div className="text-sm leading-8 text-gray-500">
                      <span className="mr-0.5">
                        <a href={activityItem.person.href} className="font-medium text-gray-900">
                          {activityItem.person.name}
                        </a>{' '}
                        added tags
                      </span>{' '}
                      <span className="mr-0.5">
                        {activityItem.tags.map((tag) => (
                          <Fragment key={tag.name}>
                            <a
                              href={tag.href}
                              className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                            >
                              <span className="absolute flex-shrink-0 flex items-center justify-center">
                                <span
                                  className={classNames(tag.color, 'h-1.5 w-1.5 rounded-full')}
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="ml-3.5 font-medium text-gray-900">{tag.name}</span>
                            </a>{' '}
                          </Fragment>
                        ))}
                      </span>
                      <span className="whitespace-nowrap">{activityItem.date}</span>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
}