
import DownloadIcon from '@heroicons/react/outline/DownloadIcon';
import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';
export default {
    title: 'SAS Blocks/CTA',
};
export const CTA1 = () => {
    const PrimaryButton = () => (
        <div className="pt-12">
            <button className="px-12 py-4 font-medium text-white rounded-lg text-desktop-paragraph font-dm-sans bg-slate-blue hover:opacity-90">
                Download for free
            </button>
        </div>
    );

    return (
        <section className="py-16 md:py-[90px] bg-slate-light px-6 md:px-0">
            <div className="max-w-6xl px-6 py-16 text-center md:py-24 md:m-auto bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl">
                <div className="max-w-xl m-auto">
                    <h5 className="text-base font-bold uppercase font-dm-sans text-slate-orange">
                        Call to action section
                    </h5>
                    <h2 className="mt-[18px] font-medium leading-snug text-mobile-h2 md:text-desktop-h2 font-dm-sans">
                        Bring more attention to a feature with a wide layout.
                    </h2>
                    <p className="font-dm-sans text-slate-body text-desktop-paragraph mt-[14px]">
                        Once you’ve communicated your value proposition, shed some light on critical
                        features loved by your customers.
                    </p>
                </div>
                <PrimaryButton />
            </div>
        </section>
    );
}

export const CTA2 = () => {
    const PrimaryButton = () => (
        <div>
            <button className="w-full px-8 py-4 font-medium text-white rounded-lg font-dm-sans bg-slate-blue hover:opacity-90 text-desktop-paragraph md:w-auto">
                Download For Free
            </button>
        </div>
    );

    const GenerateImage = ({ src }) => (
        <div className="flex justify-center">
            <img
                src={src}
                className="absolute top-0 filter brightness-[500] md:ml-[66px] md:mt-[-52px]"
            />
            <img src={src} className="relative" />
        </div>
    );
    return (
        <section className="md:pt-[142px] py-[48px] md:pb-[90px] bg-slate-light px-6 md:px-0 font-dm-sans">
            <div className="max-w-default md:justify-center md:flex md:items-start md:m-auto">
                <div className="w-full md:flex md:items-center md:justify-center">
                    <div className="md:mt-12">
                        <span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
                            NEW!
                        </span>
                        <h3 className="mt-6 font-medium leading-snug text-mobile-h3 md:text-mobile-h2 max-w-[362px]">
                            This SaaS template gets you up and running in no time.
                        </h3>
                        <div className="mt-8 md:mt-12">
                            <PrimaryButton />
                        </div>
                    </div>
                </div>
                <div className="relative w-full mt-12 md:mt-0">
                    <GenerateImage src="/assets/cta/cta-image.svg" />
                </div>
            </div>
        </section>
    );
}


export const CTA3 = () => {

    const PrimaryButton = () => (
        <div>
            <button className="w-full px-8 py-4 font-medium text-white rounded-lg font-dm-sans bg-slate-blue hover:opacity-90 text-desktop-paragraph md:w-auto">
                Download For Free
            </button>
        </div>
    );

    const GenerateImageSection = () => (
        <div>
            <img src="/assets/cta/combined-3-banner.svg" />
        </div>
    );

    return (
        <section>
            <div className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
                <div className="m-auto max-w-default">
                    <div className="flex flex-col md:flex-row">
                        <div className="relative w-full">
                            <GenerateImageSection />
                        </div>
                        <div className="flex items-center w-full mt-[78px] md:mt-0">
                            <div className="max-w-[362px] m-auto">
                                <span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
                                    NEW!
                                </span>
                                <h3 className="mt-6 font-medium leading-snug text-mobile-h3 md:text-mobile-h2 ">
                                    This SaaS template gets you up and running in no time.
                                </h3>
                                <div className="mt-8 md:mt-12">
                                    <PrimaryButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export const CTA4 = () => {
    /*import DownloadIcon from '@heroicons/react/outline/DownloadIcon';*/



    const PrimaryButton = () => (
        <div>
            <button className="flex items-center justify-center w-full px-12 py-4 m-auto space-x-2 font-medium text-white transition-all duration-300 rounded-lg text-desktop-paragraph font-dm-sans bg-slate-blue filter hover:brightness-150 md:w-auto">
                <span>Download for free</span>
                <DownloadIcon className="w-5" />
            </button>
        </div>
    );

    return (
        <section className="py-12 md:py-[90px] bg-slate-light px-6 md:px-0 font-dm-sans">
            <div className="text-center max-w-default md:justify-center md:flex md:m-auto">
                <div>
                    <div className="m-auto max-w-[558px]">
                        <span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
                            NEW!
                        </span>
                        <h2 className="mt-8 font-medium leading-snug md:mt-12 text-mobile-h2 md:text-desktop-h2 text-slate-headline">
                            This SaaS template gets you up and running in no time.
                        </h2>
                        <div className="mt-8 md:mt-12">
                            <PrimaryButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const CTA5 = () => {
    /*import DownloadIcon from '@heroicons/react/outline/DownloadIcon';
    */
    const PrimaryButton = () => (
        <div>
            <button className="flex items-center justify-center w-full px-12 py-4 m-auto space-x-2 font-medium text-white transition-all duration-300 rounded-lg text-desktop-paragraph font-dm-sans bg-slate-blue filter hover:brightness-150 md:w-auto">
                <span>Download for free</span>
                <DownloadIcon className="w-5" />
            </button>
        </div>
    );
    return (
        <section className="py-12 md:py-[90px] bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end px-6 md:px-0 font-dm-sans">
            <div className="text-center max-w-default md:justify-center md:flex md:m-auto">
                <div>
                    <div className="m-auto max-w-[558px]">
                        <span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
                            NEW!
                        </span>
                        <h2 className="mt-8 font-medium leading-snug md:mt-12 text-mobile-h2 md:text-desktop-h2 text-slate-headline">
                            This SaaS template gets you up and running in no time.
                        </h2>
                        <div className="mt-8 md:mt-12">
                            <PrimaryButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const CTA6 = () => {
    const PrimaryButton = () => (
        <div>
            <button className="flex items-center justify-center w-full px-12 py-4 m-auto space-x-2 font-medium text-white transition-all duration-300 rounded-lg text-desktop-paragraph font-dm-sans bg-slate-blue filter hover:brightness-150 md:w-auto">
                <span>Download for free</span>
                <DownloadIcon className="w-5" />
            </button>
        </div>
    );
    return (
        <section>
            <div className="bg-cover bg-cta6 font-dm-sans">
                <div className="bg-[#12141A] bg-opacity-90 py-12 md:py-[90px] px-6 md:px-0">
                    <div className="m-auto max-w-default">
                        <div className="m-auto max-w-[558px] text-center">
                            <span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
                                NEW!
                            </span>
                            <h2 className="mt-8 font-medium leading-snug text-white md:mt-12 text-mobile-h2 md:text-desktop-h2">
                                This SaaS template gets you up and running in no time.
                            </h2>
                            <div className="mt-8 md:mt-12">
                                <PrimaryButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export const CTA7 = () => {
    const InputWithButton = () => (
        <div className="flex justify-between max-w-md px-2 py-2 m-auto border-opacity-10 border-[#19313C] border-2 rounded-lg focus-within:border-slate-blue transition-all duration-300">
            <input
                className="w-1/2 text-[18px] bg-transparent px-4 outline-none md:w-8/12 focus:outline-non font-dm-sans"
                type="email"
                placeholder="Email"
            ></input>
            <button className="w-1/2 px-6 py-3 text-white transition-all duration-300 rounded-lg outline-none filter hover:brightness-125 focus:outline-none md:w-4/12 bg-slate-blue font-dm-sans">
                Get Started
            </button>
        </div>
    );
    const PrimaryButton = () => (
        <div>
            <button className="flex items-center justify-center w-full px-12 py-4 m-auto space-x-2 font-medium text-white transition-all duration-300 rounded-lg text-desktop-paragraph font-dm-sans bg-slate-blue filter hover:brightness-150 md:w-auto">
                <span>Get Started</span>
            </button>
        </div>
    );

    return (
        <section className="py-12 md:py-[90px] bg-slate-light px-6 md:px-0 font-dm-sans">
            <div className="text-center max-w-default md:justify-center md:flex md:m-auto">
                <div>
                    <div className="m-auto max-w-[558px]">
                        <span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
                            NEW!
                        </span>
                        <h2 className="mt-8 font-medium leading-snug md:mt-12 text-mobile-h2 md:text-desktop-h2 text-slate-headline">
                            This SaaS template gets you up and running in no time.
                        </h2>
                        <div className="hidden mt-8 md:mt-12 md:block">
                            <InputWithButton />
                        </div>
                        <div className="mt-8 md:mt-12 md:hidden">
                            <input
                                className="w-full py-4 pl-6 bg-transparent border-2 rounded-lg border-slate-border text-desktop-paragraph"
                                type="email"
                                placeholder="Enter your email"
                            ></input>
                            <div className="mt-2">
                                <PrimaryButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const CTA8 = () => {
    /*import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon'; */

    const SignUpWithGoogleButton = () => (
        <button className="flex items-center justify-center w-full px-6 py-4 rounded-lg bg-slate-blue filter hover:brightness-125">
            <img src="/assets/cta/googlelogo.svg" />
            <span className="w-full text-white"> Sign Up With Google </span>
        </button>
    );

    const ContinueButton = () => (
        <button className="flex items-center justify-center w-full px-6 py-4 rounded-lg bg-slate-blue filter hover:brightness-125">
            <span className="text-white"> Continue </span>
            <ArrowRightIcon className="w-5 ml-[10px] text-white" />
        </button>
    );

    const InputWithLabel = () => (
        <div className="flex flex-col items-start space-y-1">
            <label className="text-base font-medium text-slate-body"> Email </label>
            <input className="w-full p-3 border-2 rounded-lg" type="email" placeholder="" />
        </div>
    );

    return (
        <section className="bg-slate-light font-dm-sans">
            <div className="py-12 mx-6 md:py-[90px] max-w-default md:m-auto">
                <div className="md:flex md:justify-center">
                    <div>
                        <div className="px-6 py-12 md:py-16 md:min-w-[558px] text-center bg-white md:px-24 rounded-3xl">
                            <h2 className="font-medium md:my-2 text-mobile-h2">Sign up in seconds</h2>
                            <div className="mt-8">
                                <SignUpWithGoogleButton />
                            </div>
                            <p className="mt-4 md:hidden">or</p>
                            <div className="mt-4 md:mt-6">
                                <InputWithLabel />
                            </div>
                            <div className="mt-4 md:mt-6">
                                <ContinueButton />
                            </div>
                            <div className="mt-8 text-center">
                                <p className="text-slate-body">
                                    Have an account?{' '}
                                    <a href="#">
                                        <span className="hover:underline text-slate-blue">Log in</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export const CTA9 = () => {

    /*import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';*/

    const TryItFreeButton = () => (
        <button className="flex items-center justify-center w-full px-12 py-4 space-x-3 rounded-lg bg-slate-blue hover:brightness-125">
            <span className="text-white"> Try It Free </span>
            <ArrowRightIcon className="w-5 text-white" />
        </button>
    );

    return (
        <section className="bg-slate-light font-dm-sans">
            <div className="py-12 mx-6 md:py-[90px] md:m-auto max-w-default">
                <div className="px-6 py-12 md:py-16 md:px-16 bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <h2 className="font-medium leading-tight text-center text-mobile-h2 text-slate-headline">
                            Spin up a SaaS website in minutes.
                        </h2>
                        <div className="w-full mt-8 md:w-auto md:mt-0">
                            <TryItFreeButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function CTA10() {
    /* import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon'; */
    const SignUpWithGoogleButton = () => (
        <button className="flex items-center justify-around w-full px-6 py-4 border-2 rounded-lg border-slate-blue group hover:bg-slate-blue">
            <img
                className="transition-all duration-300 filter group-hover:brightness-0 group-hover:invert"
                alt="Google Icon"
                src="/assets/cta/googleblue.svg"
            />
            <span className="w-full text-slate-blue group-hover:text-white"> Sign Up With Google </span>
        </button>
    );

    const SignUpWithFacebookButton = () => (
        <button className="flex items-center justify-around w-full px-6 py-4 transition-all duration-300 border-2 rounded-lg border-slate-blue group hover:bg-slate-blue">
            <img
                alt="Facebook Blue"
                className="transition-all duration-300 filter group-hover:brightness-0 group-hover:invert"
                src="/assets/cta/facebookblue.svg"
            />
            <span className="w-full transition-all duration-300 text-slate-blue group-hover:text-white">
                {' '}
                Sign Up With Facebook{' '}
            </span>
        </button>
    );

    const SignUpWithMicrosoftButton = () => (
        <button className="flex items-center justify-around w-full px-6 py-4 border-2 rounded-lg border-slate-blue group hover:bg-slate-blue">
            <img
                className="transition-all duration-300 filter group-hover:brightness-0 group-hover:invert"
                src="/assets/cta/microsoftblue.svg"
            />
            <span className="w-full text-slate-blue group-hover:text-white">
                Sign Up With Microsoft
            </span>
        </button>
    );

    const ContinueButton = () => (
        <button className="flex items-center justify-center w-full px-6 py-4 space-x-3 rounded-lg bg-slate-blue hover:opacity-90">
            <span className="text-white"> Continue </span>
            <ArrowRightIcon className="w-5 text-white" />
        </button>
    );

    const InputWithLabel = () => (
        <div className="flex flex-col space-y-1">
            <label className="text-base font-medium text-slate-body"> Email </label>
            <input className="p-3 border-2 rounded-lg" type="email" placeholder="" />
        </div>
    );
    return (
        <section className="bg-slate-light font-dm-sans">
            <div className="py-12 md:py-[90px] mx-6 max-w-default md:m-auto">
                <div className="flex justify-center">
                    <div>
                        <div className="px-6 py-12 md:py-16 md:min-w-[558px] bg-white md:px-24 rounded-3xl">
                            <h2 className="font-medium text-center md:my-2 text-mobile-h2">
                                Sign up in seconds
                            </h2>
                            <div className="mt-8">
                                <SignUpWithGoogleButton />
                            </div>
                            <div className="mt-6">
                                <SignUpWithFacebookButton />
                            </div>
                            <div className="mt-6">
                                <SignUpWithMicrosoftButton />
                            </div>
                            <div className="mt-6 text-center">
                                <p className="opacity-50 text-slate-body">or</p>
                            </div>
                            <div className="mt-6">
                                <InputWithLabel />
                            </div>
                            <div className="mt-6">
                                <ContinueButton />
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-slate-body">
                                    Have an account?{' '}
                                    <a href="#">
                                        <span className="hover:underline text-slate-blue">Log in</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export const CTA11 = () => {

    const AppStoreButton = () => (
        <button className="flex items-center justify-between px-6 py-3 space-x-3 text-base font-medium text-white transition-all duration-300 rounded-lg outline-none bg-slate-blue font-dm-sans focus:outline-none filter hover:brightness-125">
            <span>Download in App Store</span>
            <img className="w-4" src="/assets/cta/Apple.svg" />
        </button>
    );

    const PlayStoreButton = () => (
        <button className="flex items-center justify-between px-6 py-3 space-x-3 text-base font-medium text-white transition-all duration-300 rounded-lg outline-none bg-slate-blue font-dm-sans focus:outline-none filter hover:brightness-125">
            <span>Download in Google Play</span>
            <img className="w-4" src="/assets/cta/GooglePlay.svg" />
        </button>
    );

    return (
        <section className="py-12 md:py-[90px] bg-slate-light px-6 md:px-0 font-dm-sans">
            <div className="text-center max-w-default md:justify-center md:flex md:m-auto">
                <div>
                    <div className="m-auto max-w-[558px]">
                        <span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
                            NEW!
                        </span>
                        <h2 className="mt-8 font-medium leading-snug md:mt-12 text-mobile-h2 md:text-desktop-h2 text-slate-headline">
                            This SaaS template gets you up and running in no time.
                        </h2>
                        <div className="flex flex-col mt-8 space-y-3 md:space-y-0 md:space-x-4 md:flex-row md:mt-12">
                            <AppStoreButton />
                            <PlayStoreButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



