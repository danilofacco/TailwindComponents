
export default {
  title: 'TailwindUI/Application UI/Layout/List Containers',
};
export function card_with_dividers__full_width_on_mobile() {

  const items = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    // More items...
  ]

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-4 py-4 sm:px-6">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
export function card_with_dividers() {
  const items = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    // More items...
  ]

  return (
    <div className="bg-white shadow overflow-hidden rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
export function flat_card_with_dividers() {
  const items = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    // More items...
  ]

  return (
    <div className="bg-white border border-gray-300 overflow-hidden rounded-md">
      <ul role="list" className="divide-y divide-gray-300">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
export function separate_cards__full_width_on_mobile() {
  const items = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    // More items...
  ]

  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
export function separate_cards() {
  const items = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    // More items...
  ]

  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
export function simple_with_dividers__full_width_on_mobile() {
  const items = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    // More items...
  ]

  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="px-4 py-4 sm:px-0">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
export function simple_with_dividers() {
  const items = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
    // More items...
  ]

  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="py-4">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}