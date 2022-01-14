import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'

export default {
  title: 'Tailwind UI/Application UI/Navigation/Vertical Navigation',
};
export function onGray() {
  /* This example requires Tailwind CSS v2.0+  
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'
*/
  const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true, count: '5' },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false, count: '19' },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false, count: '20+' },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'flex items-center px-3 py-2 text-sm font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <item.icon
            className={classNames(item.current ? 'text-gray-500' : 'text-gray-400', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6')}
            aria-hidden="true"
          />
          <span className="truncate">{item.name}</span>
          {item.count ? (
            <span
              className={classNames(
                item.current ? 'bg-gray-50' : 'bg-gray-200 text-gray-600',
                'ml-auto inline-block py-0.5 px-3 text-xs rounded-full'
              )}
            >
              {item.count}
            </span>
          ) : null}
        </a>
      ))}
    </nav>
  )
}

export function Simple() {
  /* This example requires Tailwind CSS v2.0+ */
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Documents', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'flex items-center px-3 py-2 text-sm font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <span className="truncate">{item.name}</span>
        </a>
      ))}
    </nav>
  )
}

export function WithBadges() {
  /* This example requires Tailwind CSS v2.0+ */
  const navigation = [
    { name: 'Dashboard', href: '#', current: true, count: '5' },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false, count: '19' },
    { name: 'Calendar', href: '#', current: false, count: '20+' },
    { name: 'Documents', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <span className="truncate">{item.name}</span>
          {item.count ? (
            <span
              className={classNames(
                item.current ? 'bg-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200',
                'ml-auto inline-block py-0.5 px-3 text-xs rounded-full'
              )}
            >
              {item.count}
            </span>
          ) : null}
        </a>
      ))}
    </nav>
  )
}

export function WithIconsAndBadges() {
  /* This example requires Tailwind CSS v2.0+ 
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'
*/
  const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true, count: '5' },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false, count: '19' },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false, count: '20+' },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <item.icon
            className={classNames(
              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
              'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
            )}
            aria-hidden="true"
          />
          <span className="truncate">{item.name}</span>
          {item.count ? (
            <span
              className={classNames(
                item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200',
                'ml-auto inline-block py-0.5 px-3 text-xs rounded-full'
              )}
            >
              {item.count}
            </span>
          ) : null}
        </a>
      ))}
    </nav>
  )
}

export function WithIcons() {
  /* This example requires Tailwind CSS v2.0+  
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'
*/
  const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <item.icon
            className={classNames(
              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
              'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
            )}
            aria-hidden="true"
          />
          <span className="truncate">{item.name}</span>
        </a>
      ))}
    </nav>
  )
}

export function WithSecondaryNavigation() {
  /* This example requires Tailwind CSS v2.0+  
  import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'
  */
  const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  ]
  const secondaryNavigation = [
    { name: 'Website redesign', href: '#' },
    { name: 'GraphQL API', href: '#' },
    { name: 'Customer migration guides', href: '#' },
    { name: 'Profit sharing program', href: '#' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <nav aria-label="Sidebar">
      <div className="space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            <item.icon
              className={classNames(
                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
              )}
              aria-hidden="true"
            />
            <span className="truncate">{item.name}</span>
          </a>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
          Projects
        </h3>
        <div className="mt-1 space-y-1" aria-labelledby="projects-headline">
          {secondaryNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              <span className="truncate">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
