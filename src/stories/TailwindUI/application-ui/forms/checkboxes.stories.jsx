
export default {
  title: 'Tailwind UI/Application UI/Forms/Checkboxes',
};
 
export function ListWithChecboxOnRight() {
  return (
    <fieldset className="border-t border-b border-gray-200">
      <legend className="sr-only">Notifications</legend>
      <div className="divide-y divide-gray-200">
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-700">
              Comments
            </label>
            <p id="comments-description" className="text-gray-500">
              Get notified when someones posts a comment on a posting.
            </p>
          </div>
          <div className="ml-3 flex items-center h-5">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <label htmlFor="candidates" className="font-medium text-gray-700">
              Candidates
            </label>
            <p id="candidates-description" className="text-gray-500">
              Get notified when a candidate applies for a job.
            </p>
          </div>
          <div className="ml-3 flex items-center h-5">
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              Offers
            </label>
            <p id="offers-description" className="text-gray-500">
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>
          <div className="ml-3 flex items-center h-5">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
    </fieldset>
  )
}
export function ListWithDescription() {
  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">Notifications</legend>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            Comments
          </label>
          <p id="comments-description" className="text-gray-500">
            Get notified when someones posts a comment on a posting.
          </p>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="candidates"
            aria-describedby="candidates-description"
            name="candidates"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="candidates" className="font-medium text-gray-700">
            Candidates
          </label>
          <p id="candidates-description" className="text-gray-500">
            Get notified when a candidate applies for a job.
          </p>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="offers"
            aria-describedby="offers-description"
            name="offers"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="offers" className="font-medium text-gray-700">
            Offers
          </label>
          <p id="offers-description" className="text-gray-500">
            Get notified when a candidate accepts or rejects an offer.
          </p>
        </div>
      </div>
    </fieldset>
  )
}
export function ListWithInlineDescription() {
  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">Notifications</legend>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            New comments
          </label>
          <span id="comments-description" className="text-gray-500">
            <span className="sr-only">New comments </span>so you always know what's happening.
          </span>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="candidates"
            aria-describedby="candidates-description"
            name="candidates"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="candidates" className="font-medium text-gray-700">
            New candidates
          </label>
          <span id="candidates-description" className="text-gray-500">
            <span className="sr-only">New candidates </span>who apply for any open postings.
          </span>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="offers"
            aria-describedby="offers-description"
            name="offers"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="offers" className="font-medium text-gray-700">
            Offers
          </label>
          <span id="offers-description" className="text-gray-500">
            <span className="sr-only">Offers </span>when they are accepted or rejected by candidates.
          </span>
        </div>
      </div>
    </fieldset>
  )
}
export function SimpleListWithHeading() {

   const people = [
  { id: 1, name: 'Annette Black' },
  { id: 2, name: 'Cody Fisher' },
  { id: 3, name: 'Courtney Henry' },
  { id: 4, name: 'Kathryn Murphy' },
  { id: 5, name: 'Theresa Webb' },
]
  return (
    <fieldset>
      <legend className="text-lg font-medium text-gray-900">Members</legend>
      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        {people.map((person, personIdx) => (
          <div key={personIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm">
              <label htmlFor={`person-${person.id}`} className="font-medium text-gray-700 select-none">
                {person.name}
              </label>
            </div>
            <div className="ml-3 flex items-center h-5">
              <input
                id={`person-${person.id}`}
                name={`person-${person.id}`}
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}