import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
export default {
  title: 'TUK/Marketing/Page Section/Content',
};

export function TwoEventsWithSlider() {
  return (<div className="px-6 xl:px-0 mx-auto container py-16">
    <div className="">
      <div className="">
        <div className="lg:flex flex-wrap items-center">
          <div className="lg:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
            <div className="w-full">
              <h1 className="text-2xl lg:text-4xl font-bold text-indigo-900 tracking-wider lg:w-11/12 leading-relaxed">New Events by Jesscia Geller</h1>
              <div className="py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="2" viewBox="0 0 60 2" fill="none">
                  <rect width="60" height="2" fill="#E53E3E"></rect>
                </svg>
              </div>
              <div className="flex w-full pt-8">
                <button className="bg-red-600 text-white py-5 px-6 mr-2" id="prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="26" viewBox="0 0 14 26" fill="none">
                    <path d="M12.5 2L1.5 13L12.5 24" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
                <button className="bg-red-600 text-white py-5 px-6" id="next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="26" viewBox="0 0 14 26" fill="none">
                    <path d="M1.5 24L12.5 13L1.5 2" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 w-full md:mt-10 lg:mt-0">
            <div className="slider">
              <div className="slide-ana">
                <div className="lg:flex" classNameName="transform: translateX(0%)">
                  <div className="">
                    <div className="relative h-96">
                      <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection1.png" alt="" />
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                      <p className="py-3 text-sm text-gray-700 leading-7">Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum nec ipsu.</p>
                      <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                      <div className="pt-6">
                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                          <div className="flex items-center">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">4:00pm to 6:00pm</p>
                          </div>
                          <div className="flex items-center pl-2">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <circle cx="8" cy="8.1665" r="2.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">Manhattan, NY</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:ml-8">
                    <div className="relative h-96">
                      <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection2.png" alt="" />
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                      <p className="py-3 text-sm text-gray-700 leading-7">Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum nec ipsu.</p>
                      <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                      <div className="pt-6">
                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                          <div className="flex items-center">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">4:00pm to 6:00pm</p>
                          </div>
                          <div className="flex items-center pl-2">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <circle cx="8" cy="8.1665" r="2.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">Manhattan, NY</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex" classNameName="transform: translateX(100%)">
                  <div className="">
                    <div className="relative h-96">
                      <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection1.png" alt="" />
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                      <p className="py-3 text-sm text-gray-700 leading-7">Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum nec ipsu.</p>
                      <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                      <div className="pt-6">
                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                          <div className="flex items-center">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">4:00pm to 6:00pm</p>
                          </div>
                          <div className="flex items-center pl-2">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <circle cx="8" cy="8.1665" r="2.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">Manhattan, NY</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:ml-8">
                    <div className="relative h-96">
                      <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection2.png" alt="" />
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                      <p className="py-3 text-sm text-gray-700 leading-7">Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum nec ipsu.</p>
                      <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                      <div className="pt-6">
                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                          <div className="flex items-center">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">4:00pm to 6:00pm</p>
                          </div>
                          <div className="flex items-center pl-2">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <circle cx="8" cy="8.1665" r="2.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">Manhattan, NY</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex" classNameName="transform: translateX(200%)">
                  <div className="">
                    <div className="relative h-96">
                      <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection1.png" alt="" />
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                      <p className="py-3 text-sm text-gray-700 leading-7">Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum nec ipsu.</p>
                      <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                      <div className="pt-6">
                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                          <div className="flex items-center">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">4:00pm to 6:00pm</p>
                          </div>
                          <div className="flex items-center pl-2">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <circle cx="8" cy="8.1665" r="2.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">Manhattan, NY</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:ml-8">
                    <div className="relative h-96">
                      <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection2.png" alt="" />
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                      <p className="py-3 text-sm text-gray-700 leading-7">Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum nec ipsu.</p>
                      <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                      <div className="pt-6">
                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                          <div className="flex items-center">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">4:00pm to 6:00pm</p>
                          </div>
                          <div className="flex items-center pl-2">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <circle cx="8" cy="8.1665" r="2.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">Manhattan, NY</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex" classNameName="transform: translateX(300%)">
                  <div className="">
                    <div className="relative h-96">
                      <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection1.png" alt="" />
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                      <p className="py-3 text-sm text-gray-700 leading-7">Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum nec ipsu.</p>
                      <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                      <div className="pt-6">
                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                          <div className="flex items-center">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">4:00pm to 6:00pm</p>
                          </div>
                          <div className="flex items-center pl-2">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <circle cx="8" cy="8.1665" r="2.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">Manhattan, NY</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:ml-8">
                    <div className="relative h-96">
                      <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection2.png" alt="" />
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                      <p className="py-3 text-sm text-gray-700 leading-7">Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum nec ipsu.</p>
                      <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                      <div className="pt-6">
                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                          <div className="flex items-center">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="7.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">4:00pm to 6:00pm</p>
                          </div>
                          <div className="flex items-center pl-2">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <circle cx="8" cy="8.1665" r="2.5" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </div>
                            <p className="pl-1">Manhattan, NY</p>
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
    </div>
  </div>)
}
export function ThreeByTwoWithLightBackground() {
  return (<div className="pt-16 pb-32">
    <div className="w-full mx-auto container 2xl:px-0 xl:px-4 px-8">
      <div className="flex items-center justify-between">
        <div className="md:w-2/5 w-1/3 relative z-0 pr-4">
          <hr />
        </div>
        <div className="text-center w-28">
          <p className="text-gray-900 text-center relative z-20 text-base flex-shrink-0 flex font-light bg-white">Featured Work</p>
        </div>
        <div className="md:w-2/5 w-1/3 pl-4">
          <hr />
        </div>
      </div>
      <div className="md:mt-48 mt-40">
        <div className="flex md:flex-row flex-col flex-wrap items-center xl:justify-between justify-center">
          <div className="px-2 sm:flex sm:items-center sm:justify-center md:mt-0 mt-16 xl:w-1/3 sm:w-1/2">
            <div className="bg-indigo-700 flex px-5 items-center justify-center relative xl:w-full h-full pb-32">
              <img className="w-full object-cover object-center -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-1.png" alt="a building with multiple windows" role="img" />
              <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                <hr className="w-16 border-2 bg-white border-white" />
                <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
              </div>
            </div>
          </div>
          <div className="px-2 sm:flex sm:items-center sm:justify-center md:mt-0 mt-48 xl:w-1/3 sm:w-1/2 xl:-mb-48">
            <div className="bg-indigo-700 flex px-5 items-center justify-center relative xl:w-full h-full pb-32">
              <img className="w-full object-cover object-center -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-2.png" alt="a building made of mirrored glass" role="img" />
              <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                <hr className="w-16 border-2 bg-white border-white" />
                <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
              </div>
            </div>
          </div>
          <div className="px-2 sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-48 mt-48 xl:w-1/3 sm:w-1/2">
            <div className="bg-indigo-700 flex px-5 items-center justify-center relative h-full pb-32">
              <img className="w-full object-cover object-center -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-3.png" alt="A balcony with lights in the background" role="img" />
              <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                <hr className="w-16 border-2 bg-white border-white" />
                <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48">
        <div className="flex md:flex-row flex-col flex-wrap items-center xl:justify-between justify-center">
          <div className="px-2 sm:flex sm:items-center sm:justify-center md:mt-0 mt-16 xl:w-1/3 sm:w-1/2">
            <div className="bg-indigo-700 flex px-5 items-center justify-center relative xl:w-full h-full pb-32">
              <img className="w-full object-cover object-center -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-4.png" alt="A gray building wall with multiple windows" role="img" />
              <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                <hr className="w-16 border-2 bg-white border-white" />
                <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
              </div>
            </div>
          </div>
          <div className="px-2 sm:flex sm:items-center sm:justify-center md:mt-0 mt-48 xl:w-1/3 sm:w-1/2 xl:-mb-48">
            <div className="bg-indigo-700 flex px-5 items-center justify-center relative xl:w-full h-full pb-32">
              <img className="w-full object-cover object-center -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-5.png" alt="A tall building having multiple windows and hazy sky in the back." role="img" />
              <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                <hr className="w-16 border-2 bg-white border-white" />
                <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
              </div>
            </div>
          </div>
          <div className="px-2 sm:flex sm:items-center sm:justify-center xl:mt-0 lg:mt-48 mt-48 xl:w-1/3 sm:w-1/2">
            <div className="bg-indigo-700 flex px-5 items-center justify-center relative h-full pb-32">
              <img className="w-full object-cover object-center -mt-32" src="https://cdn.tuk.dev/assets/templates/reels/building-6.png" alt="A house with multiple pillars and overcast sky in the back" role="img" />
              <div className="absolute bottom-0 left-0 mb-12 ml-7 flex items-center">
                <hr className="w-16 border-2 bg-white border-white" />
                <p className="text-2xl font-light leading-normal ml-2 text-white">New Building</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
export function CenterAlignedButtonWithImages() {
  return (<section>
    <div className="mx-auto container z-40 lg:mt-40 mt-20 lg:px-0 px-4">
      <div className="flex items-center justify-center">
        <hr className="w-2.5 h-16 bg-indigo-700" />
        <h1 className="text-4xl font-bold text-color-black pl-7"><span className="text-2xl font-normal">Take a look at our </span>Menu</h1>
      </div>
      <div className="lg:flex items-center justify-center mt-24 h-full">
        <div className="lg:w-1/4 relative">
          <img src="https://cdn.tuk.dev/assets/templates/foodies/bg-white.png" className="absolute left-0 top-0 z-0 -mt-7 lg:block hidden" />
          <img className="w-full h-full relative z-10 lg:pl-7 lg:my-0 my-4" />
          <img className="w-full h-full lg:pt-7 lg:my-0 my-4" />
        </div>
        <div className="lg:w-1/3 lg:mx-8">
          <img className="w-full h-full lg:-pt-4 lg:my-0 my-4" />
          <img className="w-full h-full lg:pt-3 lg:my-0 my-4" />
        </div>
        <div className="lg:w-1/4">
          <img className="w-full h-full lg:my-0 my-4 xl:block hidden" />
          <img className="w-full h-full lg:my-0 my-4 xl:hidden block" />
          <div className="relative">
            <img className="w-full h-full lg:pt-7 relative z-10 lg:pr-7 lg:pb-7 lg:my-0 my-4" />
            <img src="https://cdn.tuk.dev/assets/templates/foodies/bg-white.png" className="lg:block hidden absolute right-0 bottom-0 z-0 2xl:h-72 h-48 lg:my-0 my-4" />
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center xl:mt-36 mt-12">
      <router-link to="/FoodiesMenu">
        <button className="py-2.5 lg:px-11 px-6 lg:text-3xl text-base font-semibold leading-loose text-indigo-700 focus:outline-none button-transparent border-2 border-indigo-700 b-r-10 lg:mr-10">Browse Menu</button>
      </router-link>
    </div>
  </section>)
}
export function Content() {
  return (<div className="overflow-x-hidden">
    <div className="container mx-auto flex flex-col items-center justify-center px-10 py-24">
      <div className="flex flex-col xl:px-24">
        <h1 tabindex="0" role="heading" className="focus:outline-none">
          <span>
            <img src="https://i.ibb.co/sJ3KMpq/Journey.png" alt="Journey," role="text" />
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold leading-loose text-gray-800 sm:ml-40">made memorable</span>
        </h1>
        <div className="flex md:pt-16 pt-10 items-center md:pb-32 pb-12">
          <div className="hidden sm:block">
            <hr className="transform -rotate-90 w-14 h-0.5 border-gray-800" />
          </div>
          <div>
            <p tabindex="-1" role="contentinfo" className="focus:outline-none text-sm sm:text-base leading-normal text-gray-600 text-justify lg:text-left">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
      </div>

      <div>
        <img src="https://i.ibb.co/v1ZQWVN/david-kovalenko-G85-Vu-Tpw6jg-unsplash-1-1.png" alt="A big plane in forest" role="img" />
      </div>

      <div className="flex flex-col xl:px-24 md:pt-32 pt-12">
        <h1 tabindex="0" role="heading" className="focus:outline-none">
          <span>
            <img src="https://i.ibb.co/X2MSKdD/services.png" role="text" alt="Services," />
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-gray-800 sm:ml-56">you will love</span>
        </h1>
        <div className="flex items-center md:py-16 py-10">
          <div className="hidden sm:inline-flex">
            <hr className="transform -rotate-90 w-14 h-0.5 border-gray-800" />
          </div>
          <div>
            <p tabindex="0" role="contentinfo" className="focus:outline-none text-sm sm:text-base leading-normal text-gray-600 text-justify lg:text-left">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export function Content1() {
  return (<div className="py-8 w-full px-6    ">
    <img src="https://i.ibb.co/QkynWXF/peter-olexa-p-L7-Ire-X9-AGY-unsplash-10.png" alt="main" className="w-full h-full object-fit object-center" />
    <div className="xl:flex items-center justify-between md:pt-16 pt-8 xl:px-8">
      <h1 className="md:text-5xl text-2xl font-bold md:leading-none leading-6 text-gray-800 xl:w-2/5" >Stay on top of the curve <br />and always ahead </h1>
      <p className="md:text-xl text-lg leading-normal text-gray-800 2xl:pt-0 md:pt-6 pt-3 xl:w-3/5 xl:pl-20">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /></p>
    </div>
  </div>)
}
export function Content2() {
  return (<div className="py-8 flex items-stretch justify-center w-full">
    <div className="w-2/3 md:pr-5 md:pt-0">
      <img src="https://i.ibb.co/0mrQW7c/2.png" alt="img" className="w-full" />
      <div className="md:pt-16 pt-6">
        <p className="md:text-6xl text-2xl font-bold md:leading-10 leading-6 text-gray-800">Purpose and Usage</p>
        <p className="md:text-xl text-base md:pt-8 pt-4 leading-normal text-gray-800 hidden sm:block">Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. </p>
        <p className="md:text-xl text-base md:pt-8 pt-4 leading-normal text-gray-800 sm:hidden">Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada. </p>
      </div>
    </div>
    <div className="w-1/3 overflow-hidden relative ml-2 md:ml-5">
      <img src="https://i.ibb.co/sj4dfWX/1.png" alt="img" className="w-full absolute inset-0 w-full h-full" />
    </div>
  </div>)
}
export function Content3() {
  //     import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
  // import "pure-react-carousel/dist/react-carousel.es.css";
  return (
    <div>

      <CarouselProvider isIntrinsicHeight={true} totalSlides={3}>
        <div className="lg:hidden px-6 xl:px-0 overflow-y-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col lg:items-center justify-center w-full  py-1">
              <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">Updated line</h1>
            </div>
            <div className="w-full flex flex-col items-end justify-center">
              <p className="text-lg text-gray-100">
                <span id="current"></span>
                <span className="text-gray-800"></span>
              </p>
              <div className="my-4 flex items-center">
                <ButtonBack>
                  <button aria-controls="slide" aria-label="slide back" className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer mr-4 p-2 flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="5" y1="12" x2="9" y2="16" />
                      <line x1="5" y1="12" x2="9" y2="8" />
                    </svg>
                  </button>
                </ButtonBack>
                <ButtonNext>
                  <div aria-controls="slide" aria-label="slide forward" className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer flex items-center justify-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </div>
                </ButtonNext>
              </div>
            </div>
            <div className="flex justify-between">
              <Slider>
                <Slide index={0}>
                  <div className="w-full px-5">
                    <div className="w-full flex justify-center items-center flex-col rounded-md">
                      <div style={{ "background-image": "url('https://i.ibb.co/93dVNbx/Rectangle-27.png');" }} className="relative  bg-cover w-full flex justify-center  flex-col rounded-md ">
                        <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">Who doesn’t love a good swim</h1>

                        <button className="focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="w-full px-5">
                    <div className=" w-full flex justify-center items-center flex-col rounded-md">
                      <div style={{ "background-image": "url('https://i.ibb.co/M6jV7ty/Rectangle-28.png');" }} className="relative bg-cover w-full flex justify-center  flex-col rounded-md ">
                        <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">A truly immersive experience like never before</h1>

                        <button className="focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="w-full px-5">
                    <div className="w-full flex justify-center items-center flex-col rounded-md">
                      <div style={{ "background-image": "url('https://i.ibb.co/Lgjy80Y/Content-image-1.png');" }} className="relative bg-cover w-full flex justify-center flex-col rounded-md ">
                        <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">Maybe a walk on the beach could help</h1>

                        <button className="focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
            </div>
          </div>
        </div>
      </CarouselProvider>
      <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3}>
        <div className="hidden lg:block px-6 xl:px-0 ">
          <div className="container mx-auto">
            <div className="flex flex-row">
              <div role="article" className="flex flex-col items-left justify-center w-full py-10">
                <h1 className="font-bold text-gray-800 text-3xl md:text-5xl">Updated line</h1>
              </div>
              <div className="w-full flex flex-col items-end justify-end pr-24 my-3">
                <p className="text-lg text-gray-100">
                  <span id="current3"></span>
                  <span className="text-gray-800"></span>
                </p>
              </div>
              <div className="my-4 flex items-center">
                <ButtonBack>
                  <button aria-controls="slide" aria-label="slide back" className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer mr-4 p-2 flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="5" y1="12" x2="9" y2="16" />
                      <line x1="5" y1="12" x2="9" y2="8" />
                    </svg>
                  </button>
                </ButtonBack>
                <ButtonNext>
                  <div aria-controls="slide" aria-label="slide forward" className="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer flex items-center justify-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </div>
                </ButtonNext>
              </div>
            </div>
            <div id="slide" aria-roledescription="carousel" aria-label="about healt care" className="slider3">
              <div className="slide-ana3">
                <Slider>
                  <Slide index={0}>
                    <div className="grid grid-cols-3  gap-6">
                      <div aria-live="off" aria-roledescription="slide1" className="">
                        <div style={{ "background-image": "url('https://i.ibb.co/93dVNbx/Rectangle-27.png');" }} className="relative  bg-cover w-full flex justify-center  flex-col rounded-md ">
                          <h1 className="w-40 text-white font-semibold text-left text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">Who doesn’t love a good swim</h1>

                          <button className="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <div aria-live="off" aria-roledescription="slide2" className=" w-full flex justify-center items-center flex-colrounded-md ">
                          <div style={{ "background-image": "url('https://i.ibb.co/M6jV7ty/Rectangle-28.png');" }} className="relative  bg-cover w-full flex justify-center  flex-col rounded-md ">
                            <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">A truly immersive experience like never before</h1>

                            <button className="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div aria-live="off" aria-roledescription="slide3" className="bg-white w-full flex justify-center items-center flex-col rounded-md ">
                          <div style={{ "background-image": "url('https://i.ibb.co/Lgjy80Y/Content-image-1.png');" }} className="relative  bg-cover w-full flex justify-center  flex-col rounded-md ">
                            <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">Maybe a walk on the beach could help</h1>

                            <button className="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="grid grid-cols-3 gap-6">
                      <div className=" ">
                        <div aria-live="off" aria-roledescription="slide4" className="bg-white w-full flex justify-center items-center flex-col  rounded-md ">
                          <div style={{ "background-image": "url('https://i.ibb.co/93dVNbx/Rectangle-27.png');" }} className="relative  bg-cover w-full flex justify-center  flex-col  rounded-md ">
                            <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">Who doesn’t love a good swim</h1>

                            <button className="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className=" ">
                        <div aria-live="off" aria-roledescription="slide5" className="bg-white w-full flex justify-center items-center flex-col  rounded-md">
                          <div style={{ "background-image": "url('https://i.ibb.co/M6jV7ty/Rectangle-28.png');" }} className="relative  bg-cover w-full flex justify-center  flex-col  rounded-md ">
                            <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">A truly immersive experience like never before</h1>

                            <button className="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className=" ">
                        <div aria-live="off" aria-roledescription="slide6" className="bg-white w-full flex justify-center items-center flex-col  rounded-md">
                          <div style={{ "background-image": "url('https://i.ibb.co/Lgjy80Y/Content-image-1.png');" }} className="relative  bg-cover w-full flex justify-center  flex-col  rounded-md ">
                            <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">Maybe a walk on the beach could help</h1>

                            <button className="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="grid grid-cols-3 gap-6">
                      <div className=" ">
                        <div aria-live="off" aria-roledescription="slide7" className="bg-white w-full flex justify-center items-center flex-col  rounded-md">
                          <div style={{ "background-image": "url('https://i.ibb.co/93dVNbx/Rectangle-27.png');" }} className="relative  bg-cover w-full flex justify-center  flex-col  rounded-md ">
                            <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">Who doesn’t love a good swim</h1>

                            <button className="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className=" ">
                        <div aria-live="off" aria-roledescription="slide8" className="bg-white w-full flex justify-center items-center flex-col  rounded-md">
                          <div style={{ "background-image": "url('https://i.ibb.co/M6jV7ty/Rectangle-28.png');" }} className="relative  bg-cover w-full flex justify-center  flex-col  rounded-md ">
                            <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">A truly immersive experience like never before</h1>

                            <button className="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className=" ">
                        <div aria-live="off" aria-roledescription="slide9" className="bg-white w-full flex justify-center items-center flex-col  rounded-md">
                          <div style={{ "background-image": "url('https://i.ibb.co/Lgjy80Y/Content-image-1.png');" }} className="relative  bg-cover w-full flex justify-center  flex-col  rounded-md ">
                            <h1 className="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded  h-64 relative">Maybe a walk on the beach could help</h1>

                            <button className="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
}
export function Content4() {
  return (<>
    <div className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-50" style={{ height: 1000 }}>
      <div className="md:flex items-center justify-between w-full bg-gray-50">
        <div className="xl:w-1/3 md:w-1/2 w-full">
          <h1 role="heading" className="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-gray-800">
            Think<span className="font-normal italic"> out loud </span>
          </h1>
          <p role="contentinfo" className="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12">
            Don’t get carried away with super-short paragraphs. The secret to one-sentence paragraphs is to use them like a spice: A pinch of cumin can make a meal more savor.
          </p>
          <div className="mt-10">
            <button className="flex items-center md:p-3 p-1 focus:outline-none text-xl font-medium leading-5 text-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              Discover more
              <svg className="ml-8" width={45} height={40} viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.2113 33.7887C11.0161 33.9839 11.0157 34.3009 11.2157 34.4911C13.956 37.0978 17.3821 38.8765 21.0982 39.6157C24.9778 40.3874 28.9991 39.9913 32.6537 38.4776C36.3082 36.9638 39.4318 34.4004 41.6294 31.1114C43.827 27.8224 45 23.9556 45 20C45 16.0444 43.827 12.1776 41.6294 8.8886C39.4318 5.59961 36.3082 3.03616 32.6537 1.52241C28.9991 0.00865715 24.9778 -0.38741 21.0982 0.384294C17.3821 1.12346 13.956 2.90221 11.2157 5.50886C11.0157 5.69911 11.0161 6.01609 11.2113 6.21127C11.4065 6.40645 11.7225 6.4059 11.9227 6.21592C14.523 3.74892 17.7711 2.06527 21.2932 1.36468C24.9789 0.631541 28.7993 1.00781 32.2711 2.44591C35.743 3.88401 38.7105 6.31934 40.7983 9.44394C42.8861 12.5685 44.0004 16.2421 44.0004 20C44.0004 23.7579 42.8861 27.4315 40.7983 30.5561C38.7105 33.6807 35.743 36.116 32.2711 37.5541C28.7993 38.9922 24.9789 39.3685 21.2932 38.6353C17.7711 37.9347 14.523 36.2511 11.9227 33.7841C11.7225 33.5941 11.4065 33.5935 11.2113 33.7887Z"
                  fill="#1F2937"
                />
                <path d="M1 20H29" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 28L29 20" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 12L29 20" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
          <p role="contentinfo" className=" focus:outline-none text-base leading-6 mb-8 text-gray-600 md:mt-0 mt-10">
            “Don’t get carried away with super-short paragraphs. The secret to one-sentence paragraphs is to use them like a spice: A pinch of cumin can make a meal more savory, but I don’t want to eat a plateful of the stuff.”
          </p>
          <div className="w-full">
            <img src="https://i.ibb.co/wMd2Q4B/new.png" alt="Purple flowers on a book" className="md:w-full sm:w-1/2 w-full" />
            <div className="flex items-center mt-8">
              <p role="contentinfo" className="text-xl focus:outline-none font-semibold leading-5 text-gray-700">
                Picture description
              </p>
              <p role="contentinfo" className="text-xl focus:outline-none italic font-italic leading-5 pl-2 text-gray-700">
                Specification
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}
export function Content5() {
  return (<div>
    <div className="2xl:mx-auto 2xl:container 2xl:p-20 md:p-10 p-8 ">
      <div>
        <img src="https://i.ibb.co/gynWGZF/puppy.png" alt="image of a dog" className="w-full md:block hidden" />
        <img src="https://i.ibb.co/LR8LRcK/tablet.png" alt="image of a dog" className="w-full h-80 object-cover object-center md:hidden" />
      </div>
      <div className="lg:px-28 md:px-20 lg:-mt-40 sm:-mt-28 -mt-28 relative z-30">
        <div className="bg-white shadow-md rounded-md py-16 2xl:px-28 md:px-12 px-4 flex flex-col items-center justify-center">
          <h1 className="lg:text-5xl text-3xl font-bold text-gray-800 text-center">Spoil your furry friend</h1>
          <p className="text-base leading-6 text-center text-gray-600 md:w-10/12 w-full mt-6">Using a motivational quote that speaks to you is a great way to start a journal page or begin your writing for the day. Just having that first quote to get the ideas going is an invaluable tool.</p>
          <div className="mt-10 flex lg:flex-row flex-col items-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center" role="img" aria-label="phone number">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15 7C15.5304 7 16.0391 7.21071 16.4142 7.58579C16.7893 7.96086 17 8.46957 17 9" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15 3C16.5913 3 18.1174 3.63214 19.2426 4.75736C20.3679 5.88258 21 7.4087 21 9" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <p className="w-80 mt-4 text-base leading-normal text-center text-gray-600">Whether article spirits new her covered hastily sitting her.</p>
            </div>
            <div className="flex flex-col items-center justify-center lg:mt-0 mt-10">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center" role="img" aria-label="money">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M12.8 6.99997C12.6188 6.68573 12.3557 6.42668 12.0386 6.25053C11.7215 6.07438 11.3625 5.98777 11 5.99997H9C8.46957 5.99997 7.96086 6.21069 7.58579 6.58576C7.21071 6.96083 7 7.46954 7 7.99997C7 8.53041 7.21071 9.03911 7.58579 9.41419C7.96086 9.78926 8.46957 9.99997 9 9.99997H11C11.5304 9.99997 12.0391 10.2107 12.4142 10.5858C12.7893 10.9608 13 11.4695 13 12C13 12.5304 12.7893 13.0391 12.4142 13.4142C12.0391 13.7893 11.5304 14 11 14H9C8.63749 14.0122 8.27849 13.9256 7.96142 13.7494C7.64435 13.5733 7.38115 13.3142 7.2 13"
                    stroke="#1F2937"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="w-80 mt-4 text-base leading-normal text-center text-gray-600">Whether article spirits new her covered hastily sitting her.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
export function Content6() {
  return (<>
    <div>
      <div className="dark:bg-gray-900">
        <div className="mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
          <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
            <div>
              <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 font-medium leading-none">Kanban Software</p>
            </div>
            <div className="md:mt-3">
              <p className="text-gray-800 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">Trello x Webber</p>
            </div>
            <div className="md:mt-3">
              <p className="lg:text-base text-sm leading-normal text-gray-600 dark:text-gray-300">Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <div className="grid grid-cols-2 mt-8 gap-y-6">
              <div>
                <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                  Industry: <span className="font-semibold md:font-medium">Technology</span>
                </p>
              </div>
              <div>
                <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                  Use case: <span className="font-semibold md:font-medium">Developer operations</span>
                </p>
              </div>
              <div>
                <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                  Since: <span className="font-semibold md:font-medium">2018</span>
                </p>
              </div>
              <div>
                <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                  Package: <span className="font-semibold md:font-medium">Enterprise+ </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
            <img className="w-full" src="https://i.ibb.co/181DvLN/Project-Cover-6.png" alt="laptops" />
          </div>
        </div>
        <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
          <div className="flex flex-col justify-start items-start xl:w-2/4">
            <div>
              <h2 className="text-gray-800 dark:text-white lg:text-3xl text-2xl font-bold leading-7">The details</h2>
            </div>
            <div className="mt-8">
              <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a
                short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
              </p>
            </div>
            <div className="mt-8 w-full">
              <img className="w-full" src="https://i.ibb.co/X5br8Zg/Rectangle-44.png" alt="office" />
            </div>
            <div className="mt-8 flex justify-start items-start flex-col">
              <div>
                <p className="text-gray-800 dark:text-white lg:text-base text-sm font-semibold leading-none">Breakdown of milestones</p>
              </div>
              <div className="text-gray-800 dark:text-white mt-4 lg:text-base text-sm leading-normal">
                <ul>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Mauris ullamcorper neque sed mauris gravida, vel mollis velit molestie.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Donec iaculis erat in vulputate venenatis.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Vestibulum et velit et metus commodo iaculis.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Sed et urna a felis accumsan commodo vel vel nibh.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Praesent sollicitudin nulla non sollicitudin varius.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Integer convallis orci sed diam volutpat feugiat.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">- Donec posuere arcu non semper maximus.</li>
                </ul>
              </div>
              <div className="mt-8 flex-col justify-start items-start">
                <div>
                  <img className="w-full" src="https://i.ibb.co/S7LSZpk/Rectangle-45.png" alt="girl" />
                </div>
                <div className="mt-8">
                  <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                    Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create
                    a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:px-8 px-4 md:px-0 lg:px-16 mt-10 xl:mt-0 h-full xl:w-2/5 w-full flex justify-center items-center bg-gradient-to-l from-indigo-600 to-indigo-700">
            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center my-10">
              <div>
                <p className="md:text-2xl text-lg font-semibold text-center lg:text-left leading-normal text-white">Get Webber for your organization</p>
              </div>
              <div className="mt-8">
                <p className="md:text-base text-xs text-center lg:text-left leading-normal text-white">If you're looking for random facts, you've arrived at the correct webpage. The Random Fact Generator has thousands of facts ready to be revealed with a simple click of a mouse.</p>
              </div>
              <div className="mt-8 flex flex-row justify-start items-center space-x-4">
                <div className>
                  <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 bg-white rounded-sm text-indigo-700 hover:bg-gray-100">Start trial</button>
                </div>
                <div className>
                  <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 text-white rounded-sm hover:bg-white hover:text-indigo-700">Contact sales</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-900">
        <div className="mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
          <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
            <div>
              <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 font-medium leading-none">Kanban Software</p>
            </div>
            <div className="md:mt-3">
              <p className="text-gray-800 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">Trello x Webber</p>
            </div>
            <div className="md:mt-3">
              <p className="lg:text-base text-sm leading-normal text-gray-600 dark:text-gray-300">Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <div className="grid grid-cols-2 mt-8 gap-y-6">
              <div>
                <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                  Industry: <span className="font-semibold md:font-medium">Technology</span>
                </p>
              </div>
              <div>
                <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                  Use case: <span className="font-semibold md:font-medium">Developer operations</span>
                </p>
              </div>
              <div>
                <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                  Since: <span className="font-semibold md:font-medium">2018</span>
                </p>
              </div>
              <div>
                <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                  Package: <span className="font-semibold md:font-medium">Enterprise+ </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
            <img className="w-full" src="https://i.ibb.co/181DvLN/Project-Cover-6.png" alt="laptops" />
          </div>
        </div>
        <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
          <div className="flex flex-col justify-start items-start xl:w-2/4">
            <div>
              <h2 className="text-gray-800 dark:text-white lg:text-3xl text-2xl font-bold leading-7">The details</h2>
            </div>
            <div className="mt-8">
              <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a
                short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
              </p>
            </div>
            <div className="mt-8 w-full">
              <img className="w-full" src="https://i.ibb.co/X5br8Zg/Rectangle-44.png" alt="office" />
            </div>
            <div className="mt-8 flex justify-start items-start flex-col">
              <div>
                <p className="text-gray-800 dark:text-white lg:text-base text-sm font-semibold leading-none">Breakdown of milestones</p>
              </div>
              <div className="text-gray-800 dark:text-white mt-4 lg:text-base text-sm leading-normal">
                <ul>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Mauris ullamcorper neque sed mauris gravida, vel mollis velit molestie.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Donec iaculis erat in vulputate venenatis.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Vestibulum et velit et metus commodo iaculis.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Sed et urna a felis accumsan commodo vel vel nibh.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Praesent sollicitudin nulla non sollicitudin varius.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">
                    <div>-</div>
                    <div>Integer convallis orci sed diam volutpat feugiat.</div>
                  </li>
                  <li className="flex justify-start items-start space-x-1 flex-row">- Donec posuere arcu non semper maximus.</li>
                </ul>
              </div>
              <div className="mt-8 flex-col justify-start items-start">
                <div>
                  <img className="w-full" src="https://i.ibb.co/S7LSZpk/Rectangle-45.png" alt="girl" />
                </div>
                <div className="mt-8">
                  <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                    Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create
                    a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:px-8 px-4 md:px-0 lg:px-16 mt-10 xl:mt-0 h-full xl:w-2/5 w-full flex justify-center items-center bg-gradient-to-l from-indigo-600 to-indigo-700">
            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center my-10">
              <div>
                <p className="md:text-2xl text-lg font-semibold text-center lg:text-left leading-normal text-white">Get Webber for your organization</p>
              </div>
              <div className="mt-8">
                <p className="md:text-base text-xs text-center lg:text-left leading-normal text-white">If you're looking for random facts, you've arrived at the correct webpage. The Random Fact Generator has thousands of facts ready to be revealed with a simple click of a mouse.</p>
              </div>
              <div className="mt-8 flex flex-row justify-start items-center space-x-4">
                <div className>
                  <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 bg-white rounded-sm text-indigo-700 hover:bg-gray-100">Start trial</button>
                </div>
                <div className>
                  <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 text-white rounded-sm hover:bg-white hover:text-indigo-700">Contact sales</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}
export function Content7() {
  return (<div className="dark:bg-gray-900">
    <section className="py-14 px-6 lg:px-0 bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto container flex justify-start xl:items-start items-center flex-col">
        <div className="mt-14">
          <p className="text-gray-800 dark:text-white text-3xl font-bold leading-7">More case studies</p>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-12 md:gap-x-20 gap-x-12 mb-14 gap-y-10 xl:gap-y-0">
          <div className="flex flex-justify-start items-start flex-col w-full md:w-64">
            <div className="w-full">
              <img src="https://i.ibb.co/vmLtmLd/Project-Cover-7.png" className="md:w-auto w-full" alt="atm" />
            </div>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-none">Kanban Software</p>
            </div>
            <div className="mt-3">
              <p className="text-gray-800 dark:text-white md:text-2xl text-base font-extrabold leading-7">Swiss Airline</p>
            </div>
            <div className="mt-2">
              <p className="text-gray-600 dark:text-gray-300 md:text-sm text-xs leading-tight">Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <a href="javascript:void(0)" className="focus:outline-none mt-4 flex flex-row justify-center items-center hover:text-indigo-600 text-indigo-700">
              <p className="md:text-sm text-xs font-medium leading-none underline mr-1">Read story</p>
              <svg className="mt-1" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.16699 4H12.8337" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 0.666504L12.8333 3.99984" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="flex flex-justify-start items-start flex-col w-full md:w-64">
            <div className="w-full">
              <img src="https://i.ibb.co/0CNpWrp/Project-Cover-8.png" className="md:w-auto w-full" alt="disable-man" />
            </div>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-none">Kanban Software</p>
            </div>
            <div className="mt-3">
              <p className="text-gray-800 dark:text-white md:text-2xl text-base font-extrabold leading-7">Kling and Sons</p>
            </div>
            <div className="mt-2">
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-tight">Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <a href="javascript:void(0)" className="focus:outline-none mt-4 flex flex-row justify-center items-center hover:text-indigo-600 text-indigo-700">
              <p className="md:text-sm text-xs font-medium leading-none underline mr-1">Read story</p>
              <svg className="mt-1" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.16699 4H12.8337" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 0.666504L12.8333 3.99984" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="flex flex-justify-start items-start flex-col w-full md:w-64">
            <div className="w-full">
              <img src="https://i.ibb.co/vdvfp1V/Project-Cover-9.png" className="md:w-auto w-full" alt="laptops" />
            </div>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-none">Kanban Software</p>
            </div>
            <div className="mt-3">
              <p className="text-gray-800 dark:text-white md:text-2xl text-base font-extrabold leading-7">Cassin - Zemlak</p>
            </div>
            <div className="mt-2">
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-tight">Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <a href="javascript:void(0)" className="focus:outline-none mt-4 flex flex-row justify-center items-center hover:text-indigo-600 text-indigo-700">
              <p className="md:text-sm text-xs font-medium leading-none underline mr-1">Read story</p>
              <svg className="mt-1" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.16699 4H12.8337" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 0.666504L12.8333 3.99984" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="flex flex-justify-start items-start flex-col w-full md:w-64">
            <div className="w-full">
              <img src="https://i.ibb.co/FYjWwdM/Project-Cover-10.png" className="md:w-auto w-full" alt="men working" />
            </div>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-none">Kanban Software</p>
            </div>
            <div className="mt-3">
              <p className="text-gray-800 dark:text-white md:text-2xl text-base font-extrabold leading-7">Russel - Kertzmann</p>
            </div>
            <div className="mt-2">
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-tight">Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <a href="javascript:void(0)" className="focus:outline-none mt-4 flex flex-row justify-center items-center hover:text-indigo-600 text-indigo-700">
              <p className="md:text-sm text-xs font-medium leading-none underline mr-1">Read story</p>
              <svg className="mt-1" width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.16699 4H12.8337" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 0.666504L12.8333 3.99984" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>)
}
export function Content8() {
  return (<div className="dark:bg-gray-900">
    <section className="mx-auto container pt-20">
      <div className="flex md:flex-row flex-col justify-around items-center pb-10 md:pb-20">
        <div className="flex flex-col justify-start items-center space-y-20 md:mt-36 mt-20">
          <div className="flex flex-col justify-start items-start w-4/5">
            <div>
              <img src="https://i.ibb.co/1fn7KtC/Project-Cover.png" alt="two-men-working" />
            </div>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm font-medium leading-none text-right">Technology - SaaS</p>
            </div>
            <div className="mt-3">
              <h2 className="text-gray-800 dark:text-white text-lg md:text-3xl font-extrabold leading-7">Adobe Systems Inc</h2>
            </div>
            <div className="mt-2">
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-base leading-normal">Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <a href="javascript:void(0)" className="text-indigo-700 hover:text-indigo-600 focus:outline-none focus:text-blue-800 mt-4 flex flex-row justify-center items-center">
              <p className="text-xs md:text-sm font-medium leading-none underline">Read story</p>
              <svg className="mt-1 ml-0.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16678 10H15.8334" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 13.3333L15.8333 10" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 6.66663L15.8333 9.99996" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col justify-start items-start w-4/5">
            <div>
              <img src="https://i.ibb.co/17Pn2s5/Project-Cover-1.png" alt="disable-man-with-robotic-arms" />
            </div>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm font-medium leading-none text-right">Technology - SaaS</p>
            </div>
            <div className="mt-3">
              <h2 className="text-gray-800 dark:text-white md:text-3xl text-lg font-extrabold leading-7">Gutkowski, Schuppe and Pagac</h2>
            </div>
            <div className="mt-2">
              <p className="text-gray-600 dark:text-gray-300 md:text-base text-xs leading-normal">Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <a href="javascript:void(0)" className="text-indigo-700 hover:text-indigo-600 focus:outline-none mt-4 flex flex-row justify-center items-center">
              <p className="md:text-sm text-xs font-medium leading-none underline">Read story</p>
              <svg className="mt-1 ml-0.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16678 10H15.8334" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 13.3333L15.8333 10" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 6.66663L15.8333 9.99996" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col justify-start items-start w-4/5">
            <div>
              <img src="https://i.ibb.co/j3Jz4c9/Project-Cover-2.png" alt="boy-with-virtual-glasses" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center space-y-20 mt-20">
          <div className="flex flex-col justify-start items-start w-4/5">
            <div>
              <img src="https://i.ibb.co/kDSLzhq/Project-Cover-3.png" alt="laptops" />
            </div>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm font-medium leading-none text-right">Kanban Software</p>
            </div>
            <div className="mt-3">
              <h2 className="text-gray-800 dark:text-white md:text-3xl text-lg font-extrabold leading-7">Trello</h2>
            </div>
            <div className="mt-2">
              <p className="text-gray-600 dark:text-gray-300 md:text-base text-xs leading-normal">Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <a href="javascript:void(0)" className="text-indigo-700 hover:text-indigo-600 focus:outline-none mt-4 flex flex-row justify-center items-center">
              <p className="md:text-sm text-xs font-medium leading-none underline">Read story</p>
              <svg className="mt-1 ml-0.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16678 10H15.8334" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 13.3333L15.8333 10" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 6.66663L15.8333 9.99996" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col justify-start items-start w-4/5">
            <div>
              <img src="https://i.ibb.co/JQZb67n/Project-Cover-4.png" alt="atm" />
            </div>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-300 md:text-sm text-xs font-medium leading-none text-right">Airline</p>
            </div>
            <div className="mt-3">
              <h2 className="text-gray-800 dark:text-white md:text-3xl text-lg font-extrabold leading-7">Swiss Airline</h2>
            </div>
            <div className="mt-2">
              <p className="text-gray-600 dark:text-gray-300 md:text-base text-xs leading-normal">Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <a href="javascript:void(0)" className="text-indigo-700 hover:text-indigo-600 focus:outline-none mt-4 flex flex-row justify-center items-center">
              <p className="md:text-sm text-xs font-medium leading-none underline">Read story</p>
              <svg className="mt-1 ml-0.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16678 10H15.8334" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 13.3333L15.8333 10" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 6.66663L15.8333 9.99996" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col justify-start items-start w-4/5">
            <div>
              <img src="https://i.ibb.co/XZz2Nd7/Project-Cover-5.png" alt="laptop" />
            </div>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-300 md:text-sm text-xs font-medium leading-none text-right">Kanban Software</p>
            </div>
            <div className="mt-3">
              <h2 className="text-gray-800 dark:text-white md:text-3xl text-lg font-extrabold leading-7">Mann and Sons</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>)
}
export function ContentSection() {
  return (<div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
    <div className="xl:w-1/2 w-11/12">
      <h1 role="heading" tabIndex={0} className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
        Touching hundreds of lives
      </h1>
      <h2 role="contentinfo" tabIndex={0} className="text-base leading-normal text-center text-gray-600 mt-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing
      </h2>
    </div>
    <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4">
      <div className="mt-24">
        <div className="flex items-end ">
          <img tabIndex={0} src="https://i.ibb.co/kBgtHK6/Rectangle-5.png" alt="girl with blue background" className="w-20 h-20 rounded-lg mr-6" />
          <img tabIndex={0} src="https://i.ibb.co/9nLBtjx/Rectangle-3.png" alt="guy winking" className="w-48 h-36 rounded-lg" />
        </div>
        <div className="flex items-center justify-end my-6">
          <img tabIndex={0} src="https://i.ibb.co/jRbF1KF/Rectangle-4.png" alt="guy smiling" />
        </div>
        <div className="flex items-start">
          <img tabIndex={0} src="https://i.ibb.co/Sf4Q94L/Rectangle-6.png" alt="girl with bluw background" className="w-48 h-48 rounded-lg" />
          <img tabIndex={0} src="https://i.ibb.co/fnNqJrx/Rectangle-7.png" alt="guy with glasses" className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit" />
        </div>
      </div>
      <div className="ml-6 mt-32">
        <img tabIndex={0} src="https://i.ibb.co/LSxy7fy/Rectangle-9.png" className="w-72 h-80 rounded-lg" alt="guy with sunglasses" />
        <div className="flex items-start mt-6">
          <img tabIndex={0} src="https://i.ibb.co/X8PKD3q/Rectangle-8.png" alt="girl  laughing" className="w-48 h-48 rounded-lg" />
          <img tabIndex={0} src="https://i.ibb.co/2Yj51CY/Rectangle-13.png" alt="guy with glasses" className="w-20 h-20 rounded-lg ml-6 object-cover object-fit" />
        </div>
      </div>
      <div className="mt-14 ml-6">
        <div className="lg:flex ">
          <div>
            <img tabIndex={0} src="https://i.ibb.co/bWGVSkP/Rectangle-10.png" alt="group of friends" className="w-96 h-72 rounded-lg object-center object-fit" />
          </div>
          <div>
            <div className="flex ml-6">
              <img tabIndex={0} src="https://i.ibb.co/80jvpSv/Rectangle-16.png" className="w-20 h-20 rounded-lg mt-14" alt="man" />
              <img tabIndex={0} src="https://i.ibb.co/6PR2Y74/Rectangle-15.png" className="w-20 h-24 rounded-lg ml-6" alt="woman" />
            </div>
            <img tabIndex={0} src="https://i.ibb.co/M5rvjhk/Rectangle-14.png" alt="boy with blonde hair" className="ml-6 mt-6 w-48 h-32 rounded-lg" />
          </div>
        </div>
        <div className="mt-6 flex">
          <img tabIndex={0} className="w-48 h-48 rounded-lg" src="https://i.ibb.co/GPpMsbr/Rectangle-12.png" alt="young girl with red hair" />
          <img tabIndex={0} className="w-72 h-56 rounded-lg ml-6" src="https://i.ibb.co/VBcgkVL/Rectangle-11.png" alt="young girl with red hair" />
        </div>
      </div>
    </div>
  </div>)
}
export function ElegantWithDarkGrayCard() {
  return (<>
    <div className="mx-auto container mt-0 lg:my-16 my-10 px-4 lg:px-0">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="f-f-d-s text-2xl lg:text-6xl leading-normal tracking-wide text-gray-800 text-center">Upcoming Exhibitions</h1>
      </div>
      <div className="lg:flex items-center justify-center mt-4 lg:mt-32">
        <div className="lg:w-1/2 h-1/3">
          <img src="https://cdn.tuk.dev/assets/templates/Fabterior/Section7(1).png" alt className="w-full h-full" />
        </div>
        <div className="mt-4 lg:mt-0 py-12 px-8 lg:px-12 bg-gray-700 lg:w-2/5 lg:-ml-12 text-white f-f-l">
          <div className="lg:text-4xl text-2xl font-normal leading-9 pb-6 f-f-d-s">Extra Space</div>
          <div className="flex items-center font-lato">
            <div className="text-sm lg:text-lg font-normal color-white mb-4">Nov 01 - 10</div>
            <span className="dot-color text-2xl px-2 mb-4">•</span>
            <div className="text-sm lg:text-lg font-normal color-white mb-4">James Haul</div>
          </div>
          <div className="pb-6 leading-6 f-f-l text-base lg:text-2xl leading-9">Our mission is to help people visualize, create & maintain beautiful homes. We bring to you inspiring visuals of cool homes, specific spaces, architectural marvels, and new design trends.</div>
          <button className="border-b border-white lg:text-2xl text-base leading-6 f-f-l font-bold">Read More</button>
        </div>
      </div>
    </div>
  </>)
}
export function ProjectsWithLeftAlignedAddress() {
  return (<>
    <div className="mx-auto container ">
      <div className="xl:flex flex-wrap items-center justify-between relative py-10 lg:py-28 2xl:px-0 xl:px-20 px-4">
        <div className="xl:w-1/2 w-full md:w-auto flex flex-col sm:items-center lg:items-start">
          <div className="md:w-10/12 relative md:flex items-center justify-between">
            <div className="md:flex items-center justify-between w-full">
              <div className="transform mb-4 md:mb-0 lg:-ml-10 md:-rotate-90">
                <p className="text-2xl font-semibold tracking-wider leading-normal text-gray-900">Projects</p>
              </div>
              <div className="md:pl-20">
                <h1 className="hidden xl:block text-5xl font-bold tracking-wider text-gray-800 uppercase">
                  OUR<span className="text-indigo-800"> WORK</span>
                </h1>
                <h1 className="xl:hidden text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800 uppercase">
                  OUR<span className="text-indigo-800"> WORK</span>
                </h1>
                <p className="text-gray-800 leading-8 tracking-wide mt-6 text-base md:text-lg">We bring our A-team to every engagement, starting with the Alpha Way, our step-by-step formula .</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:flex-row items-center justify-start lg:justify-start md:justify-center mt-5 md:mt-24">
            <img src="https://cdn.tuk.dev/assets/templates/radian/projects(1).png" alt="building project" className="md:w-auto w-full md:h-auto h-full object-center object-full" />
            <div className="border border-black py-6 2xl:px-6 text-gray-800 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">308 Negra Arroyo Lane, ABQ, New Mexico.</div>
          </div>
          <div className="flex flex-col md:flex-row w-full items-center justify-start lg:justify-start md:justify-center mt-5 md:mt-20">
            <img src="https://cdn.tuk.dev/assets/templates/radian/projects(4).png" alt="building project" className="md:w-auto w-full md:h-auto h-full object-center object-full" />
            <div className="border border-black py-6 2xl:px-6 text-gray-800 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">308 Negra Arroyo Lane, ABQ, New Mexico.</div>
          </div>
          <div className="mt-5 xl:mt-24 mt-5 xl:mt-24 xl:block flex items-center md:justify-end justify-center w-full xl:block hidden">
            <button className="py-4 px-6 shadow-xl text-lg tracking-wider text-white hover:opacity-90 ease-in duration-150 flex border border-black items-center bg-gray-900">
              View All Projects
              <div className="w-8 h-8 rounded-full border border-black flex items-center cursor-pointer justify-center ml-5 md:ml-10 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14" fill="none">
                  <path d="M0.827637 7.0004H11.6896" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.03418 1.4741L11.6893 7.0004" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.03427 12.5265L11.6894 7.00022" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="xl:w-1/2 w-full md:w-auto flex flex-col mt-5 md:mt-10 xl:mt-0">
          <div className="flex flex-col md:flex-row flex-col-reverse items-center justify-center lg:justify-end relative">
            <div className="border border-black py-6 2xl:px-6 text-gray-800 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">308 Negra Arroyo Lane, ABQ, New Mexico.</div>
            <img src="https://cdn.tuk.dev/assets/templates/radian/projects(2).png" alt="building project" className="md:w-auto w-full md:h-auto h-full object-center object-full" />
            <div className="absolute z-10 right-0 bottom-0 pb-36 sm:pb-28 sm:pr-10 lg:pr-0 xl:-mr-8 md:pb-8">
              <button className="py-4 px-6 shadow-xl text-lg tracking-wider text-gray-800 hover:bg-gray-200 ease-in duration-150 flex border border-black items-center bg-white">
                View Project
                <div className="w-8 h-8 rounded-full border border-black flex items-center cursor-pointer justify-center ml-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14" fill="none">
                    <path d="M0.827637 7.0004H11.6896" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.03418 1.4741L11.6893 7.0004" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.03427 12.5265L11.6894 7.00022" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-col-reverse md:flex-row items-center justify-center lg:justify-end mt-5 md:mt-20">
            <div className="border border-black py-6 2xl:px-6 text-gray-800 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">308 Negra Arroyo Lane, ABQ, New Mexico.</div>
            <img src="https://cdn.tuk.dev/assets/templates/radian/projects(3).png" alt="building project" className="md:w-auto w-full md:h-auto h-full object-center object-full" />
          </div>
          <div className="flex flex-col flex-col-reverse md:flex-row items-center justify-center lg:justify-end mt-5 md:mt-20">
            <div className="border border-black py-6 2xl:px-6 text-gray-800 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base 2xl:text-2xl xl:text-lg leading-9 tracking-wider lg:w-1/6 w-full lg:text-2xl">308 Negra Arroyo Lane, ABQ, New Mexico.</div>
            <img src="https://cdn.tuk.dev/assets/templates/radian/projects(5).png" alt="building project" className="md:w-auto w-full md:h-auto h-full object-center object-full" />
          </div>
          <div className="mt-5 xl:mt-24 mt-5 xl:mt-24 xl:block flex items-center  justify-center md:justify-end md:pr-14 w-full xl:hidden block">
            <button className="py-2 px-3 shadow-xl text-base tracking-wider text-white hover:opacity-90  ease-in duration-150 flex border border-black items-center bg-gray-900">
              View All Projects
              <div className="w-8 h-8 rounded-full border border-black flex items-center cursor-pointer justify-center ml-5 md:ml-10 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14" fill="none">
                  <path d="M0.827637 7.0004H11.6896" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.03418 1.4741L11.6893 7.0004" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.03427 12.5265L11.6894 7.00022" stroke="#1A202C" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>)
}