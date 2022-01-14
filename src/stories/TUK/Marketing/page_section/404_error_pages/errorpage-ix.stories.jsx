export  function index() {
    return (
        <>
        <img className="absolute w-full h-full top-0 z-0" src="https://i.ibb.co/61c3kt9/Error-Page.png" />
        <div className="grid place-items-center relative z-10 text-gray-800">
            <div className="bg-white border rounded-md grid place-items-center my-8 py-16 px-4 md:px-16 lg:px-20">
                <img className="hidden md:block" src="https://i.ibb.co/mHB3PBq/error-1-1.png" alt="broken screen" />
                <img className="md:hidden" src="https://i.ibb.co/wyR8vc9/Group.png" alt="broken screen" />
                <h1 className="text-3xl lg:text-4xl font-bold pt-12 sm:pt-14 lg:pt-8">Oh no!</h1>
                <p className="py-6 md:py-8">
                    We’re usually a treasure chest of knowledge, <br />
                    but we couldn’t find what you’re looking for
                </p>
                <button className="text-white bg-indigo-700 hover:bg-indigo-800 border rounded-md py-4 px-8 w-full lg:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Try Again</button>
            </div>
        </div>
        </>
    );
}
export default {
    title: 'TUK/Marketing/Page Section/404 Error Pages/Error Page IX',
};
