

export default {
  title: 'TailwindUI/Application UI/Layout/Containers',
};
export function ConstrainedToBreakpointWithPaddedContent() {
  return <div className="container mx-auto px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
export function ConstrainedWithPaddedContent() {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
export function FullWidthOnMobileConstrainedToBreakpointWithPaddedContentAboveMobile() {
  return <div className="container mx-auto sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
export function full_width_on_mobile__constrained_with_padded_content_above() {
  return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{/* Content goes here */}</div>
}
export function narrow_constrained_with_padded_content() {
  return (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
    <div className="max-w-3xl mx-auto">{/* Content goes here */}</div>
  </div>)
}