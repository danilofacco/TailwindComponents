export default {
  title: 'Tailwind UI/Application UI/Layout/Panels',
};
export function BasicCard() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
export function CardEdgeToEdgeOnMobile() {
  return (
    <>
      {/* Be sure to use this with a layout container that is full-width on mobile */}
      <div className="bg-white overflow-hidden shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}
export function CardWithFooter() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <div className="px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  )
}
export function CardWithGrayBody() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
export function CardWithGrayFooter() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  )
}
export function CardWithHeaderAndFooter() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <div className="px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  )
}
export function CardWithHeader() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
export function WellEdgeToEdgeOnMobile() {
  return (
    <>
      {/* Be sure to use this with a layout container that is full-width on mobile */}
      <div className="bg-gray-50 overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}
export function WellOnGray() {
  return (
    <div className="bg-gray-50 overflow-hidden rounded-lg">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
export function Well() {
  return (
    <div className="bg-gray-50 overflow-hidden rounded-lg">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}