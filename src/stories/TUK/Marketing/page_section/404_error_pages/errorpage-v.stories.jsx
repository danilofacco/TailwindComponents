

export  function index() {
  return (
    <div className="2xl:container 2xl:mx-auto sm:py-16 lg:px-20 py-36 px-4">
    <div className="relative grid place-items-center py-40 md:py-60 lg:py-40">
      <div className="relative z-10">
        <div className="w-full h-full flex flex-col justify-center items-center text-white sm:px-12 px-6">
          <h1 className="md:text-6xl md:text-5xl text-4xl font-bold text-center text-gray-800">404 - looks like you’re lost</h1>
          <p className="text-md text-center text-gray-800 pt-2 sm:pt-4">
            Maybe this page used to exist or you just spelled something wrong. <br className="lg:block hidden" />
            Chances are you spelled something wrong, so can you double check the URL?
          </p>
          <button className="w-full sm:w-3/4 lg:w-auto mt-2 sm:mt-4 text-md leading-none text-center text-white bg-indigo-700 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-opacity-50 py-5 px-4 md:px-16">Return Home</button>
        </div>
      </div>
      <div className="absolute">
        <img className="hidden lg:block" src="https://i.ibb.co/LJKtdSz/Group-3.png" />
        <img className="hidden sm:block lg:hidden" src="https://i.ibb.co/zVQpwQM/Group-3-1.png" />
        <img className="sm:hidden" src="https://i.ibb.co/7XDwz1k/Group-3.png" />
      </div>
    </div>
  </div>
  );
}
export default {
  title: 'TUK/Marketing/Page Section/404 Error Pages/Error Page V',
};

