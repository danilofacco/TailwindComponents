
import ArrowRight from '@heroicons/react/solid/ArrowRightIcon';
import ChevronDownIcon from '@heroicons/react/outline/ChevronDownIcon';
import { useState } from 'react';
import BellIcon from '@heroicons/react/outline/BellIcon';
import HomeIcon from '@heroicons/react/outline/HomeIcon';
import BriefcaseIcon from '@heroicons/react/outline/BriefcaseIcon';
import CashIcon from '@heroicons/react/outline/CashIcon';
import ReceiptTaxIcon from '@heroicons/react/outline/ReceiptTaxIcon';

export default {
	title: 'SAS Blocks/Features',
};
export const Feature1 = () => (
	//import ArrowRight from '@heroicons/react/solid/ArrowRightIcon';

	<section className="bg-slate-light font-dm-sans">
		<div className="pt-[88px] pb-12 lg:pt-[130px] lg:pb-[90px] mx-6 lg:mx-auto max-w-default">
			<div className="flex flex-col lg:flex-row">
				<div className="w-full">
					<div className="bg-gradient-to-r lg:w-[558px] lg:h-[558px] flex items-center justify-center from-feeling-moody-start to-feeling-moody-end rounded-3xl">
						<img
							className="mb-[-40px] mt-[-40px]"
							src="/assets/features/common/invoice-detail-mockup.svg"
							alt=""
						/>
					</div>
				</div>
				<div>
					<div className="flex w-full lg:justify-end">
						<div className="lg:w-[460px]">
							<h2 className="font-medium leading-tight text-mobile-h2 lg:text-desktop-h2 text-slate-headline mt-[88px] lg:mt-0">
								Plug & play template to get you up and running fast.
							</h2>

							<div
								id={'item-container'}
								className="flex flex-col justify-between mt-12"
							>
								<div className="flex items-center">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
										<img src="/assets/features/chart.svg" alt="Chart Icon" />
									</div>
									<p className="ml-4 max-w-[250px] md:max-w-default text-desktop-paragraph text-slate-body">
										Explain your value prop as easily as possible.
									</p>
								</div>
								<div className="flex items-center w-full mt-6">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
										<img src="/assets/features/toggle.svg" alt="Switch Icon" />
									</div>
									<p className="ml-4 max-w-[250px] md:max-w-default text-desktop-paragraph text-slate-body">
										Communicate your most important features.
									</p>
								</div>
								<div className="flex items-center mt-6">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
										<img src="/assets/features/quote.svg" alt="Quote Icon" />
									</div>
									<p className="ml-4 text-desktop-paragraph text-slate-body">
										Close with killer testimonials.
									</p>
								</div>
							</div>
							<div className="mt-[60px]">
								<button className="flex items-center justify-center w-full px-8 py-4 font-medium text-center text-white rounded-lg lg:w-auto bg-slate-blue filter hover:brightness-125">
									<p>Primary</p>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);


export const Feature2 = () => (
	//import ArrowRight from '@heroicons/react/solid/ArrowRightIcon';

	<section className="bg-slate-light font-dm-sans">
		<div className="pt-[88px] pb-12 lg:pt-[130px] lg:pb-[90px] mx-6 lg:mx-auto max-w-default">
			<div className="flex flex-col lg:flex-row">
				<div className="w-full">
					<div className="bg-gradient-to-r lg:w-[558px] lg:h-[558px] flex items-center justify-center from-feeling-moody-start to-feeling-moody-end rounded-3xl">
						<img
							className="mb-[-40px] mt-[-40px]"
							src="/assets/features/common/invoice-detail-mockup.svg"
							alt=""
						/>
					</div>
				</div>
				<div>
					<div className="flex w-full lg:justify-end">
						<div className="lg:w-[460px]">
							<h2 className="font-medium leading-tight text-mobile-h2 lg:text-desktop-h2 text-slate-headline mt-[88px] lg:mt-0">
								Simplicity is key. Elevate your copy with a simple design
							</h2>
							<p className="mt-4 font-normal text-slate-body text-desktop-subheading">
								Here is a section with two features or points and a subheading.
							</p>
							<div
								id={'item-container'}
								className="flex flex-col justify-between mt-12 lg:flex-row"
							>
								<div className="lg:w-[185px]">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
										<img src="/assets/features/cart.svg" alt="" />
									</div>
									<h4 className="mt-4 text-xl font-medium text-slate-headline">
										A simple heading
									</h4>
									<p className="mt-4 text-slate-body text-desktop-paragraph">
										The point of a landing page is to make the case for your
										product.
									</p>
								</div>
								<div className="lg:w-[185px] mt-8 lg:mt-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
										<img src="/assets/features/metric.svg" alt="" />
									</div>
									<h4 className="mt-4 text-xl font-medium text-slate-headline">
										A simple heading
									</h4>
									<p className="mt-4 text-slate-body text-desktop-paragraph">
										The point of a landing page is to make the case for your
										product.
									</p>
								</div>
							</div>
							<div className="mt-[60px]">
								<button className="flex items-center justify-center w-full px-8 py-4 font-medium text-center text-white rounded-lg lg:w-auto bg-slate-blue filter hover:brightness-125">
									<p>Primary</p>
									<ArrowRight className="w-5 h-4 ml-3 text-white" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);



export const Feature3 = () => {
	const FeatureItem = () => (
		<div className="mt-8 md:mt-24 md:w-1/2 lg:w-1/3">
			<div className="w-full space-y-4">
				<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
					<img className="w-6" src="/assets/features/cart.svg" />
				</div>
				<h3 className="font-medium text-desktop-h4"> A simple heading </h3>
				<p className="font-normal font-dm-sans text-desktop-paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
		</div>
	);
	return (
		<section className="bg-slate-light font-dm-sans">
			<div className="max-w-default py-12 md:py-[90px] mx-6 lg:m-auto">
				<div className="md:w-7/12 space-y-7">
					<h1 className="font-medium leading-snug text-mobile-h2 md:text-desktop-h2">
						Simplicity is key. Elevate your copy with a simple design.
					</h1>
					<p className="font-normal text-desktop-subheading text-slate-body">
						Here is a section with two features or points and a subheading.
					</p>
				</div>
				<section className="md:-mt-8 space-y-14">
					<div className="flex flex-wrap items-center w-full">
						<FeatureItem />
						<FeatureItem />
						<FeatureItem />
						<FeatureItem />
						<FeatureItem />
						<FeatureItem />
					</div>
				</section>
			</div>
		</section>
	);
}


export const Feature4 = () => {
	const FeatureItem = ({ className }) => (
		<div className={`md:w-1/2 ${className}`}>
			<div className="w-full space-y-4">
				<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
					<img className="w-6" src="/assets/features/cart.svg" />
				</div>
				<h3 className="font-bold text-desktop-h4"> A simple heading </h3>
				<p className="font-normal font-dm-sans text-desktop-paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
		</div>
	);
	return (
		<section className="bg-slate-light font-dm-sans">
			<div className="max-w-default py-12 md:py-[90px] mx-6 lg:m-auto">
				<div className="w-full">
					<div className="md:w-7/12 space-y-7">
						<h1 className="font-medium leading-snug text-mobile-h2 md:text-desktop-h2 text-slate-headline">
							Simplicity is key. Elevate your copy with a simple design.
						</h1>
						<p className="font-normal text-desktop-subheading text-slate-body">
							Here is a section with two features or points and a subheading.
						</p>
					</div>
				</div>
				<div className="items-center justify-center mt-0 md:flex md:mt-[80px]">
					<div className="flex flex-wrap items-center md:w-1/2">
						<FeatureItem className="mt-8 md:mt-0" />
						<FeatureItem className="mt-8 md:mt-0" />
						<FeatureItem className="mt-8 md:mt-20" />
						<FeatureItem className="mt-8 md:mt-20" />
					</div>
					<div className="flex items-center justify-center m-auto mt-24 md:mt-0 bg-gradient-to-r">
						<div className="h-[320px] w-[320px] md:w-[460px] justify-center md:h-[460px] flex items-center bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl">
							<img
								className="md:h-[600px]"
								src="/assets/features/common/invoice-detail-mockup.svg"
								alt="Banner"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}



export const Feature5 = () => {
	const FeatureItem = () => (
		<div className="mt-24 md:w-1/2 lg:w-1/3">
			<div className="w-full space-y-4 text-center">
				<div className="flex items-center justify-center w-full">
					<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
						<img className="w-6" src="/assets/features/cart.svg" />
					</div>
				</div>
				<h3 className="text-xl font-medium"> A simple heading </h3>
				<p className="font-normal font-dm-sans text-desktop-paragraph">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
		</div>
	);
	return (
		<section className="text-center bg-slate-light font-dm-sans">
			<div className="max-w-default py-12 md:py-[90px] mx-6 md:m-auto">
				<div className="m-auto max-w-[680px] space-y-7">
					<h1 className="font-medium text-mobile-h2 md:text-desktop-h2">
						Simplicity is key. Elevate your copy with a simple design.
					</h1>
					<p className="font-normal text-desktop-subheading text-slate-body">
						Here is a section with two features or points and a subheading.
					</p>
				</div>
				<section className="-mt-8 space-y-14">
					<div className="flex flex-wrap items-center w-full">
						<FeatureItem />
						<FeatureItem />
						<FeatureItem />
						<FeatureItem />
						<FeatureItem />
						<FeatureItem />
					</div>
				</section>
			</div>
		</section>
	);
}

export const Feature6 = () => {
	const LogoCircle = ({ logoLink, logoAlt }) => (
		<div className="shadow-md w-[75px] h-[75px] md:w-[90px] md:h-[90px] md:mr-[56px] flex items-center justify-center first:mt-[47px] last:mb-[56px] mt-[67px] rounded-full p-5">
			<img className="" src={logoLink} alt={logoAlt} />
		</div>
	);

	return (
		<section className="bg-slate-light py-[88px] px-6 md:px-0 md:py-[90px] font-dm-sans">
			<div className="flex flex-col m-auto md:flex-row max-w-default">
				<div className="order-2 w-full mt-[88px] md:mt-0 md:order-1">
					<div className="max-w-[460px]">
						<h2 className="font-medium leading-snug text-slate-heading text-mobile-h2 md:text-desktop-h2">
							Simplicity is key. <br /> Elevate your copy with a simple design.
						</h2>
						<div className="flex justify-between item-center">
							<div className="flex flex-col justify-center">
								<LogoCircle
									logoLink={'/assets/features/bluelogos/twitter.svg'}
									logoAlt="Twitter"
								/>
								<LogoCircle
									logoLink={'/assets/features/bluelogos/dropbox.svg'}
									logoAlt="Dropbox"
								/>
							</div>
							<div className="flex flex-col justify-center">
								<LogoCircle
									logoLink={'/assets/features/bluelogos/airtable.svg'}
									logoAlt="Airtable"
								/>
								<LogoCircle
									logoLink={'/assets/features/bluelogos/slack.svg'}
									logoAlt="Slack"
								/>
								<LogoCircle
									logoLink={'/assets/features/bluelogos/github.svg'}
									logoAlt="GitHub"
								/>
							</div>
							<div className="flex flex-col justify-center">
								<LogoCircle
									logoLink={'/assets/features/bluelogos/digitalocean.svg'}
									logoAlt="Digital Ocean"
								/>
								<LogoCircle
									logoLink={'/assets/features/bluelogos/notion.svg'}
									logoAlt="notion"
								/>
							</div>
						</div>
						<p className="mt-10 text-desktop-paragraph text-slate-body">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor sapien
							faucibus vel nibh. Vel, neque, sapien, eget amet cursus vitae. Nullam nunc
							tristique sem proin et tincidunt vestibulum ut. Magna mollis bibendum
							sagittis urna ut vitae, vitae id arcu. Ut nibh vitae risus magna risus,
							interdum vel ornare laoreet.
						</p>
						<p className="mt-10 text-desktop-paragraph text-slate-body">
							Morbi sed commodo volutpat arcu. Ultricies nulla tortor mauris lorem. Metus
							lacinia praesent mattis iaculis congue. Ut quam imperdiet nisl nulla euismod
							urna erat. Euismod sed diam faucibus odio convallis turpis risus id.
							Pulvinar auctor cum eget fames. Condimentum enim integer sed consectetur
							lectus morbi ornare proin tincidunt. Nibh nunc nec faucibus diam nunc, et
							pharetra proin. Tincidunt pellentesque ultricies viverra tellus congue.
							Ipsum netus placerat euismod sem ipsum iaculis pulvinar elementum turpis.
						</p>
					</div>
				</div>
				<div className="order-1 w-full md:order-2">
					<div className="flex items-center justify-center bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-2xl">
						<img
							className="-mt-10 -mb-10"
							src="/assets/features/feature6banner.svg"
							alt="Banner"
						/>
					</div>
				</div>
			</div>
		</section>
	);

}


export const Feature7 = () => {
	//import ChevronDownIcon from '@heroicons/react/outline/ChevronDownIcon';
	//import { useState } from 'react';
	const tabs = [
		{
			name: 'Tab One',
			id: 'tab-one',
		},
		{
			name: 'Tab Two',
			id: 'tab-two',
		},
		{
			name: 'Tab Three',
			id: 'tab-three',
		},
		{
			name: 'Tab Four',
			id: 'tab-four',
		},
	];

	const [openMenu, setOpenMenu] = useState(false);
	const [selectedID, setSelectedID] = useState(tabs[0].id);




	const MobileMenu = () => (
		<div>
			<div></div>
		</div>
	);

	const Header = ({ openMenu, setOpenMenu, selectedID, setSelectedID }) => (
		<section className="max-w-[680px] m-auto">
			<div>
				<h2 className="font-medium leading-tight text-center text-mobile-h2 md:text-desktop-h2 text-slate-headline">
					Tabs are a simple way to highlight your app's features.
				</h2>
				<h5 className="font-normal mt-[30px] text-desktop-subheading text-slate-body text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</h5>
			</div>
			<div className="hidden md:block mt-[54px]">
				<div
					className={`items-center justify-center md:h-auto overflow-hidden space-y-4 md:space-y-0 md:flex md:space-x-6`}
				>
					{tabs.map((tab) => (
						<div
							onClick={() => setSelectedID(tab.id)}
							key={tab.id}
							className={` ${selectedID == tab.id
								? 'bg-slate-blue text-white'
								: 'bg-[#f2f2f2] text-slate-body'
								} px-6 py-4 md:py-2 rounded-full cursor-pointer  group hover:bg-slate-blue hover:text-white`}
						>
							<span className="group-hover:text-white">{tab.name}</span>
						</div>
					))}
				</div>
			</div>
			<div className="box-border relative mt-8 md:hidden">
				<ChevronDownIcon className="absolute right-0 w-4 mr-10 top-5" />
				<select className="w-full px-6 py-4 bg-transparent border-2 border-gray-200 rounded-full outline-none appearance-none focus:outline-none">
					{tabs.map((tab) => (
						<option key={tab.id} value={tab.id}>
							{tab.name}
						</option>
					))}
				</select>
			</div>
		</section>
	);

	/**
	 * USE 'selectedID' to set the currently selected tab.
	 */

	const SelectedDetailTab = ({ selectedID }) => {
		if (selectedID == 'tab-one') {
			return (
				<div className="flex items-center justify-center p-8 mx-6 md:mx-0 rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
					<img src="/assets/features/showcase-area.svg" alt="" />
				</div>
			);
		}
		if (selectedID == 'tab-two') {
			return (
				<div className="flex items-center justify-center p-8 mx-6 md:mx-0 rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
					<img src="/assets/features/showcase-area.svg" alt="" />
				</div>
			);
		}
		if (selectedID == 'tab-three') {
			return (
				<div className="flex items-center justify-center p-8 mx-6 md:mx-0 rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
					<img src="/assets/features/showcase-area.svg" alt="" />
				</div>
			);
		}
		if (selectedID == 'tab-four') {
			return (
				<div className="flex items-center justify-center p-8 mx-6 md:mx-0 rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
					<img src="/assets/features/showcase-area.svg" alt="" />
				</div>
			);
		}
	};
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="mx-6 md:mx-0" id={'feature-7-container'}>
				<Header
					openMenu={openMenu}
					setOpenMenu={setOpenMenu}
					selectedID={selectedID}
					setSelectedID={setSelectedID}
				/>
			</div>
			<div className="m-auto mt-12 max-w-default">
				<SelectedDetailTab selectedID={selectedID} />
			</div>
		</section>
	);
};




export const Feature8 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="bg-white mx-6 md:m-auto max-w-default rounded-3xl md:h-[580px] md:overflow-y-hidden">
				<div className="items-center justify-center h-full md:flex">
					<div className="md:w-1/2 px-6 md:px-[102px] h-full">
						<div className="flex items-center h-full">
							<div className="py-12 text-center md:py-0">
								<h2 className="font-medium leading-snug text-mobile-h2 md:text-desktop-h2 text-slate-headline">
									Highlight a key selling point
								</h2>
								<p className="pt-6 text-desktop-subheading">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
								<p className="pt-6 underline cursor-pointer text-desktop-paragraph">
									Learn more
								</p>
							</div>
						</div>
					</div>
					<div className="pb-12 mx-6 md:pb-0 md:mx-0 md:w-1/2">
						<div className="md:my-[32px] md:mx-7">
							<img src="/assets/features/feature9banner.svg" alt="banner" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};


export const Feature9 = () => {

	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="bg-white mx-6 md:m-auto max-w-default rounded-3xl md:h-[580px] md:overflow-y-hidden">
				<div className="items-center justify-center h-full md:flex">
					<div className="pt-10 mx-6 md:pt-0 md:mx-0 md:w-1/2">
						<div className="md:my-[32px] md:mx-7">
							<img src="/assets/features/feature9banner.svg" alt="banner" />
						</div>
					</div>
					<div className="md:w-1/2 px-6 md:px-[102px] h-full">
						<div className="flex items-center h-full">
							<div className="py-12 text-center md:py-0">
								<h2 className="font-medium leading-snug text-mobile-h2 md:text-desktop-h2 text-slate-headline">
									Highlight a key selling point
								</h2>
								<p className="pt-6 text-desktop-subheading">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
								<p className="pt-6 underline cursor-pointer text-desktop-paragraph">
									Learn more
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};


export const Feature10 = () => {

	//import ArrowRight from '@heroicons/react/solid/ArrowRightIcon';

	const HighlightText = () => (
		<div className="md:w-1/2 mt-8 md:mt-0 md:px-[102px] h-full">
			<div className="flex items-center h-full">
				<div>
					<h2 className="font-medium w-[279px] md:w-auto m-auto text-center text-mobile-h2 md:text-desktop-h2 text-slate-headline md:text-left">
						Highlight a key selling point
					</h2>
					<p className="pt-6 text-center text-desktop-paragraph md:text-left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<div className="mt-8">
						<div className="relative flex items-center px-2 py-2 bg-white rounded-2xl">
							<div className="bg-[#F4E3B8] rounded-2xl w-[54px] h-[54px] p-[14px] flex items-center justify-center">
								<img src="/assets/features/receipt.svg" className="w-6 h-6" />
							</div>
							<p className="pl-4 font-medium text-desktop-paragraph text-slate-headline">
								Replaces ExpenseMonkey
							</p>
							<div className="pl-7">
								<img
									className="absolute w-5 top-3 right-3"
									src="/assets/features/greentick.svg"
									alt="Green Tick"
								/>
							</div>
						</div>
					</div>
					<div className="mt-3">
						<div className="relative flex items-center px-2 py-2 bg-white rounded-2xl">
							<div className="bg-[#FBE7E2] flex items-center justify-center  rounded-2xl w-[54px] h-[54px] p-[14px]">
								<img src="/assets/features/reload.svg" className="w-6 h-6" />
							</div>
							<p className="pl-4 font-medium text-desktop-paragraph text-slate-headline">
								Replaces Recurrrly
							</p>
							<div className="pl-7">
								<img
									className="absolute w-5 top-3 right-3"
									src="/assets/features/greentick.svg"
									alt="Green Tick"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="mx-6 md:m-auto max-w-default rounded-3xl md:overflow-y-hidden">
				<div className="items-center justify-center h-full md:flex">
					<div className="relative md:w-1/2 md:mt-0">
						<img src="/assets/features/feature10banner.svg" alt="Banner" />
					</div>
					<HighlightText />
					<p className="flex justify-center mt-8 md:hidden text-slate-blue">
						<p className="text-desktop-paragraph">Learn about this feature</p>
						<ArrowRight className="w-3 ml-3" />
					</p>
				</div>
			</div>
		</section>
	);
};



export const Feature11 = () => {
	//import { useState } from 'react';

	const Header = () => (
		<section className="pt-12 md:pt-[90px] max-w-[680px] m-auto">
			<div>
				<h2 className="font-medium leading-tight text-center text-slate-headline text-mobile-h2 md:text-desktop-h2">
					Tabs are a simple way to highlight your app's features.
				</h2>
				<h5 className="font-normal mt-[30px] text-desktop-subheading text-slate-body text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</h5>
			</div>
		</section>
	);

	const MenuItems = [
		{
			name: 'Sample Feature 1',
			id: 'sample-feature-1',
		},
		{
			name: 'Sample Feature 2',
			id: 'sample-feature-2',
		},
	];

	const TabMenu = ({ selectedID, setSelectedID }) => (
		<section className="md:pt-[44px] md:mr-[30px]">
			<div className="flex justify-center w-full md:w-auto md:justify-start">
				<div className="w-full space-y-4 md:w-auto">
					{MenuItems.map((item, index) => (
						<div
							onClick={() => setSelectedID(item.id)}
							key={index}
							className={`hover:bg-white hover:shadow-slight transition-all duration-300 w-full md:min-w-[264px] px-4 py-[14px] flex items-center rounded-2xl cursor-pointer ${item.id == selectedID && 'bg-white shadow-slight'
								}`}
						>
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/database.svg" alt="Database" />
							</div>
							<p className="ml-4 text-desktop-paragraph"> {item.name} </p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
	const [selectedID, setSelectedID] = useState(MenuItems[0].id);
	return (
		<section className="min-h-screen bg-slate-light font-dm-sans">
			<div className="mx-6 md:mx-0" id={'feature-7-container'}>
				<Header />
			</div>
			<div className="pb-[90px] mx-6 pt-[26px] max-w-default md:m-auto">
				<div className="flex flex-col justify-center md:flex-row">
					<div>
						<TabMenu selectedID={selectedID} setSelectedID={setSelectedID} />
					</div>
					<div className="mt-[44px]">
						<div className="p-8 rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
							<img src="/assets/features/showcase-area.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};


export const Feature12 = () => {
	//import { useState } from 'react';

	const Header = () => (
		<section className="pt-12 md:pt-[90px] max-w-[680px] m-auto">
			<div>
				<h2 className="font-medium leading-tight text-center text-slate-headline text-mobile-h2 md:text-desktop-h2">
					Tabs are a simple way to highlight your app's features.
				</h2>
				<h5 className="font-normal mt-[30px] text-desktop-subheading text-slate-body text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</h5>
			</div>
		</section>
	);

	const MenuItems = [
		{
			name: 'Sample Feature 1',
			id: 'sample-feature-1',
		},
		{
			name: 'Sample Feature 2',
			id: 'sample-feature-2',
		},
		{
			name: 'Sample Feature 3',
			id: 'sample-feature-3',
		},
	];

	const TabMenu = ({ selectedID, setSelectedID }) => {
		return (
			<section className="md:pt-[44px] md:ml-[30px]">
				<div className="flex justify-center w-full md:w-auto md:justify-start">
					<div className="w-full space-y-4 md:w-auto">
						{MenuItems.map((item, index) => (
							<div
								onClick={() => setSelectedID(item.id)}
								key={index}
								className={`hover:bg-white hover:shadow-slight transition-all duration-300 w-full md:min-w-[264px] px-4 py-[14px] flex items-center rounded-2xl cursor-pointer ${item.id == selectedID && 'bg-white shadow-slight'
									}`}
							>
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
									<img src="/assets/features/database.svg" alt="Database" />
								</div>
								<p className="ml-4 text-desktop-paragraph"> {item.name} </p>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	};

	const [selectedID, setSelectedID] = useState(MenuItems[0].id);
	return (
		<section className="min-h-screen bg-slate-light font-dm-sans">
			<div className="mx-6 md:mx-0" id={'feature-7-container'}>
				<Header />
			</div>
			<div className="pb-[90px] mx-6 pt-[26px] max-w-default md:m-auto">
				<div className="flex flex-col justify-center md:flex-row">
					<div className="mt-[44px] order-2 md:order-1">
						<div className="p-8 rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
							<img src="/assets/features/showcase-area.svg" alt="" />
						</div>
					</div>
					<div className="order-1 md:order-2">
						<TabMenu selectedID={selectedID} setSelectedID={setSelectedID} />
					</div>
				</div>
			</div>
		</section>
	);
};



export const Feature13 = () => {

	const HighlightText = () => (
		<div className="md:w-1/2 md:px-[102px] h-full">
			<div className="flex items-center h-full">
				<div>
					<h2 className="font-medium w-[279px] md:w-auto m-auto text-center text-mobile-h2 md:text-desktop-h2 text-slate-headline md:text-left">
						Highlight a key selling point
					</h2>
					<p className="pt-6 text-center text-desktop-paragraph md:text-left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<div className="mt-8">
						<div className="relative flex items-center px-2 py-2 bg-white rounded-2xl">
							<div className="bg-[#F4E3B8] rounded-2xl w-[54px] h-[54px] p-[18px]">
								<img src="/assets/features/receipt.svg" className="w-5" />
							</div>
							<p className="pl-4 font-medium text-desktop-paragraph text-slate-headline">
								Replaces ExpenseMonkey
							</p>
							<div className="pl-7">
								<img
									className="absolute w-5 top-3 right-3"
									src="/assets/features/greentick.svg"
									alt="Green Tick"
								/>
							</div>
						</div>
					</div>
					<div className="mt-3">
						<div className="relative flex items-center px-2 py-2 bg-white rounded-2xl">
							<div className="bg-[#FBE7E2] rounded-2xl w-[54px] h-[54px] p-[18px]">
								<img src="/assets/features/reload.svg" className="w-5" />
							</div>
							<p className="pl-4 font-medium text-desktop-paragraph text-slate-headline">
								Replaces Recurrrly
							</p>
							<div className="pl-7">
								<img
									className="absolute w-5 top-3 right-3"
									src="/assets/features/greentick.svg"
									alt="Green Tick"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="mx-6 md:m-auto max-w-default rounded-3xl md:overflow-y-hidden">
				<div className="items-center justify-center h-full md:flex">
					<HighlightText />
					<div className="relative mt-8 md:w-1/2 md:mt-0">
						<img src="/assets/features/feature13banner.svg" alt="Banner" />
					</div>
				</div>
			</div>
		</section>
	);
};

export const Feature14 = () => {
	return (
		<section className="bg-slate-light pb-12 pt-12 md:pt-[133px] md:pb-[90px] font-dm-sans">
			<div className="bg-white max-w-[1330px] mx-6 md:m-auto rounded-3xl">
				<div className="flex flex-col md:flex-row justify-between md:px-[92px] px-6">
					<div className="max-w-[558px] my-12 md:my-[113px]">
						<h5 className="text-base font-bold uppercase text-slate-orange">
							A feature section
						</h5>
						<h2 className="mt-[18px] text-mobile-h2 md:text-desktop-h2 font-medium leading-tight">
							Bring more attention to a feature with a wide layout.
						</h2>
						<p className="mt-[14px] text-desktop-paragraph">
							Once you’ve communicated your value proposition, shed some light on
							critical features loved by your customers.
						</p>
						<button className="w-full px-8 py-4 mt-10 font-medium text-white rounded-lg bg-slate-blue text-desktop-paragraph filter hover:brightness-125 md:w-auto">
							Action Button
						</button>
					</div>
					<div className="">
						<div className="bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end w-[279px] h-[279px] md:w-[460px] md:h-[460px] rounded-full m-auto flex justify-center md:mt-[-43px] mb-12 md:mb-0">
							<img
								className="h-[270px] md:h-[500px]"
								src="/assets/features/common/invoice-detail-mockup.svg"
								alt="mockup"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};



export const Feature15 = () => {

	const FeatureRow = ({ icon }) => (
		<div className="max-w-[362px] mt-3 md:mt-0 min-w-[362px] pt-[18px] md:pt-[60px]">
			<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
				<img src={icon} alt="Icon" />
			</div>
			<h2 className="pt-4 text-xl font-medium"> A simple heading </h2>
			<p className="pt-4 text-desktop-paragraph">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nec cursus turpis arcu amet
				enim, massa ac.
			</p>
		</div>
	);
	return (
		<section className="bg-slate-light font-dm-sans pt-[30px] pb-12 md:pb-[90px]">
			<div className="max-w-[754px] m-auto">
				<div className="flex flex-wrap justify-between mx-6 md:mx-0">
					<FeatureRow icon={'/assets/features/metric.svg'} />
					<FeatureRow icon={'/assets/features/virtualassistant.svg'} />
					<FeatureRow icon={'/assets/features/appleoutline.svg'} />
					<FeatureRow icon={'/assets/features/toggle.svg'} />
				</div>
			</div>
		</section>
	);
};

export const Feature16 = () => {
	return (
		<section className="bg-slate-light font-dm-sans px-6 md:px-0 py-12 md:py-[90px]">
			<div className="m-auto bg-white max-w-default md:bg-gradient-to-r md:from-feeling-moody-start md:to-feeling-moody-end rounded-3xl">
				<div className="flex flex-col items-center justify-center md:flex-row">
					<div className="w-full px-6 pt-10 m-auto md:px-0 md:pt-0">
						<div className="max-w-[363px] m-auto">
							<div>
								<span className="px-6 py-2 rounded-full bg-slate-orange text-white uppercase font-bold text-[13px] md:text-[15px]">
									Customer Showcase
								</span>
							</div>
							<div className="mt-8">
								<h4 className="font-medium text-mobile-h2 text-slate-headline md:text-desktop-h2">
									Stripe
								</h4>
							</div>
							<div className="mt-6">
								<p className="leading-snug text-slate-body text-desktop-paragraph">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
									enim mi purus, turpis interdum elementum. In magna.
								</p>
							</div>
							<div>
								<button className="flex items-center px-8 py-4 mt-8 font-medium text-white rounded-lg bg-slate-blue text-desktop-paragraph group filter hover:brightness-125">
									See customer story
									<span className="ml-2">
										<img
											src="/assets/features/rightarrow.svg"
											alt="Right Arrow"
										/>
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-end w-full overflow-hidden rounded-lg">
						<img className="" src="/assets/features/feature16banner.svg" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export const Feature17 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto max-w-default bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end md:h-[600px] rounded-3xl">
				<div className="flex flex-col h-full md:flex-row">
					<div className="flex  md:ml-[113px] w-full">
						<div className="max-w-[363px] m-auto px-6 md:px-0 mt-12 md:mt-auto">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/virtualassistant.svg" alt="" />
							</div>
							<div>
								<h2 className="mt-6 font-medium leading-snug text-mobile-h2 md:text-desktop-h2 text-slate-headline">
									Showcase your mobile designs and functions.
								</h2>
								<p className="mt-6 font-normal text-desktop-paragraph text-slate-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
							<div>
								<button className="flex items-center w-full px-8 py-4 mt-8 text-base font-medium text-white rounded-lg md:mt-6 bg-slate-blue md:text-desktop-paragraph md:w-auto text-desktop-paragraph filter hover:brightness-125">
									Get it in the apple store
									<span className="ml-2">
										<img
											className="w-4 -mt-1"
											src="/assets/cta/Apple.svg"
											alt="Apple"
										/>
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className="flex items-end justify-start w-full px-6 md:px-0">
						<div className="mt-12 md:ml-10 md:mt-0">
							<img
								className="md:h-[529px]"
								src="/assets/features/blankphone.svg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};




export const Feature18 = () => {

	const FeatureBlock = ({ img, heading, description }) => (
		<div className="ml-6 mr-6 md:ml-[0px] md:w-1/3 mt-[30px] md:mr-[30px]">
			<div className="text-center p-9 md:min-w-[362px] rounded-3xl bg-white">
				<div className="w-12 h-12 p-3 m-auto rounded-full bg-slate-orange">
					<img src={img} alt="" />
				</div>
				<h5 className="mt-4 text-xl font-medium"> {heading}</h5>
				<p className="mt-4 font-normal text-desktop-paragraph"> {description}</p>
			</div>
		</div>
	);
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="m-auto max-w-default">
				<h2 className="mx-6 font-medium text-center text-mobile-h2 md:text-desktop-h2 md:mx-0">
					How to use this template
				</h2>
				<div className="mt-6">
					<div className="md:flex">
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
					</div>
					<div className="md:flex">
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export const Feature19 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="m-auto max-w-default">
				<h2 className="text-mobile-h2 md:text-desktop-h2 mx-6 font-medium text-center max-w-[680px] md:m-auto text-slate-headline leading-tight">
					Worry no more. This section addresses all objections.
				</h2>
				<div className="mt-[70px] mx-6 md:mx-0">
					<div className="max-w-[402px] flex space-x-4 items-start m-auto mt-10">
						<img src="/assets/features/singleorangecheck.svg" alt="" />
						<p className="text-desktop-paragraph">
							<span className="font-bold">Lorem ipsum</span> dolor sit amet,
							consectetur adipiscing elit. Commodo at vel in semper dictum ridiculus
							in adipiscing.
						</p>
					</div>
					<div className="max-w-[402px] flex space-x-4 items-start m-auto mt-10">
						<img src="/assets/features/singleorangecheck.svg" alt="" />
						<p className="text-desktop-paragraph">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo at vel
							in&nbsp;
							<span className="font-bold">semper dictum</span> ridiculus in
							adipiscing.
						</p>
					</div>
					<div className="max-w-[402px] flex space-x-4 items-start m-auto mt-10">
						<img src="/assets/features/singleorangecheck.svg" alt="" />
						<p className="text-desktop-paragraph">
							Lorem ipsum dolor sit amet, consectetur{' '}
							<span className="font-bold">adipiscing elit</span>. Commodo at vel in
							semper dictum ridiculus in adipiscing.{' '}
						</p>
					</div>
					<div className="max-w-[402px] flex space-x-4 items-start m-auto mt-10">
						<img src="/assets/features/singleorangecheck.svg" alt="" />
						<p className="text-desktop-paragraph">
							Lorem ipsum <span className="font-bold">dolor sit amet</span>,
							consectetur <span className="font-bold">adipiscing elit</span>. Commodo
							at vel in semper dictum ridiculus in adipiscing.{' '}
						</p>
					</div>
					<div className="max-w-[402px] flex space-x-4 items-start m-auto mt-10">
						<img src="/assets/features/singleorangecheck.svg" alt="" />
						<p className="text-desktop-paragraph">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo at vel
							in&nbsp;
							<span className="font-bold">semper dictum</span> ridiculus in
							adipiscing.
						</p>
					</div>
					<div className="max-w-[402px] flex space-x-4 items-start m-auto mt-10">
						<img src="/assets/features/singleorangecheck.svg" alt="" />
						<p className="text-desktop-paragraph">
							Lorem ipsum <span className="font-bold">dolor sit amet</span>,
							consectetur <span className="font-bold">adipiscing elit</span>. Commodo
							at vel in semper dictum ridiculus in adipiscing.{' '}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Feature20 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="mx-6 bg-white max-w-default md:m-auto rounded-3xl">
				<div className="py-12 md:pt-[120px] md:pb-[80px]">
					<div className="mx-6 text-center">
						<h2 className="text-mobile-h2 md:text-desktop-h2 max-w-[680px] leading-tight font-medium m-auto">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</h2>
						<p className="mt-[30px] font-normal text-desktop-subheading">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
					<div className="mt-[74px] mx-6 md:mx-[98px]">
						<div className="rounded-2xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
							<img
								className="pt-6 pb-4 m-auto"
								src="/assets/features/showcase-area.svg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};


export const Feature21 = () => {
	//import ArrowRight from '@heroicons/react/solid/ArrowRightIcon';
	const HighlightText = () => (
		<div className="md:w-1/2 md:px-[102px] h-full">
			<div className="flex items-center h-full">
				<div>
					<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 text-slate-headline">
						{' '}
						Highlight a key selling point{' '}
					</h2>
					<p className="pt-6 text-desktop-paragraph">
						{' '}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
					</p>
					<div className="mt-8">
						<div className="relative flex items-center px-2 py-2 bg-white rounded-2xl">
							<div className="bg-[#F4E3B8] rounded-2xl w-[54px] h-[54px] p-[18px]">
								<img src="/assets/features/receipt.svg" className="w-5" />
							</div>
							<p className="pl-4 font-medium text-desktop-paragraph text-slate-headline">
								{' '}
								Replaces ExpenseMonkey{' '}
							</p>
							<div className="pl-7">
								<img
									className="absolute w-5 top-3 right-3"
									src="/assets/features/greentick.svg"
									alt="Green Tick"
								/>
							</div>
						</div>
					</div>
					<div className="mt-3">
						<div className="relative flex items-center px-2 py-2 bg-white rounded-2xl">
							<div className="bg-[#FBE7E2] rounded-2xl w-[54px] h-[54px] p-[18px]">
								<img src="/assets/features/reload.svg" className="w-5" />
							</div>
							<p className="pl-4 font-medium text-desktop-paragraph text-slate-headline">
								{' '}
								Replaces Recurrrly{' '}
							</p>
							<div className="pl-7">
								<img
									className="absolute w-5 top-3 right-3"
									src="/assets/features/greentick.svg"
									alt="Green Tick"
								/>
							</div>
						</div>
					</div>
					<div className="mt-8">
						<a href="">
							<div className="flex">
								<p className="text-desktop-paragraph text-slate-body hover:underline">
									Learn about this feature
								</p>
								<ArrowRight className="w-4 ml-4" />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="m-auto mx-6 max-w-default rounded-3xl md:mx-auto">
				<div className="items-center justify-center h-full md:flex">
					<HighlightText />
					<div className="md:w-1/2 mt-9 md:mt-0">
						<div className="md:my-[32px] md:mx-[28px]">
							<div className="bg-gradient-to-r from-feeling-moody-start flex justify-center items-center to-feeling-moody-end m-auto h-[326px] w-[326px] md:h-[516px] md:w-[516px] rounded-full p-[42px]">
								<img
									src="/assets/features/common/invoice-detail-mockup.svg"
									alt="Mockup"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Feature22 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto max-w-default">
				<div className="md:flex md:space-x-[87px]">
					<div className="text-center md:w-1/2">
						<div className="flex flex-col items-center md:items-start md:flex-row">
							<div className="flex order-2 mt-8 text-left md:mt-0 md:order-1">
								<div className>
									<p className="text-[26px] font-bold text-[#19313C] opacity-20">
										01
									</p>
								</div>
								<div className="ml-8">
									<h4 className="text-xl font-medium">A simple heading</h4>
									<p className="mt-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
							<div className="order-1 mt-12 md:order-2 md:mt-0">
								<div className="rounded-full bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end bg-opacity-10">
									<img
										src="/assets/features/platform/platform1.svg"
										alt="Platform 1"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center md:w-1/2">
						<div className="flex flex-col items-center md:items-start md:flex-row">
							<div className="flex order-2 mt-8 text-left md:mt-0 md:order-1">
								<div className>
									<p className="text-[26px] font-bold text-[#19313C] opacity-20">
										03
									</p>
								</div>
								<div className="ml-8">
									<h4 className="text-xl font-medium">A simple heading</h4>
									<p className="mt-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
							<div className="order-1 mt-12 md:order-2 md:mt-0">
								<div className="rounded-full bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end bg-opacity-10">
									<img
										src="/assets/features/platform/platform2.svg"
										alt="Platform 3"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="md:flex md:space-x-[87px] md:mt-[96px]">
					<div className="text-center md:w-1/2">
						<div className="flex flex-col items-center md:items-start md:flex-row">
							<div className="flex order-2 mt-8 text-left md:mt-0 md:order-1">
								<div className>
									<p className="text-[26px] font-bold text-[#19313C] opacity-20">
										02
									</p>
								</div>
								<div className="ml-8">
									<h4 className="text-xl font-medium">A simple heading</h4>
									<p className="mt-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
							<div className="order-1 mt-12 md:order-2 md:mt-0">
								<div className="rounded-full bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end bg-opacity-10">
									<img
										src="/assets/features/platform/platform3.svg"
										alt="Platform 2"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center md:w-1/2">
						<div className="flex flex-col items-center md:items-start md:flex-row">
							<div className="flex order-2 mt-8 text-left md:mt-0 md:order-1">
								<div className>
									<p className="text-[26px] font-bold text-[#19313C] opacity-20">
										04
									</p>
								</div>
								<div className="ml-8">
									<h4 className="text-xl font-medium">A simple heading</h4>
									<p className="mt-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
							<div className="order-1 mt-12 md:order-2 md:mt-0">
								<div className="rounded-full bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end bg-opacity-10">
									<img
										src="/assets/features/platform/platform4.svg"
										alt="Platform 4"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Feature23 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto max-w-default">
				<h2 className="text-mobile-h2 md:text-desktop-h2 font-medium text-slate-headline max-w-[558px] leading-tight">
					Create the perfect website in seconds.
				</h2>
				<p className="text-desktop-subheading mt-8 text-slate-body max-w-[460px]">
					Here is a section with two features or points and a subheading.
				</p>
			</div>
			<div className="mt-[60px]">
				<div className="m-auto md:flex max-w-default">
					<div className="md:min-w-[362px]">
						<div className="bg-white rounded-3xl py-9 px-[30px]">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/tiktok.svg" alt="Tiktok" />
							</div>
							<h4 className="mt-4 text-xl font-medium">A simple heading </h4>
							<p className="mt-4 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className="md:min-w-[362px]">
						<div className="bg-white rounded-3xl mt-[30px] md:mt-0 md:ml-[30px] py-9 px-[30px]">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/messenger.svg" alt="Messenger" />
							</div>
							<h4 className="mt-4 text-xl font-medium">A simple heading </h4>
							<p className="mt-4 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className="md:min-w-[362px]">
						<div className="bg-white rounded-3xl mt-[30px] md:mt-0 md:ml-[30px] py-9 px-[30px]">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/privacy.svg" alt="Privacy" />
							</div>
							<h4 className="mt-4 text-xl font-medium">A simple heading </h4>
							<p className="mt-4 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export const Feature24 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto bg-white max-w-default rounded-3xl">
				<div className="py-12 md:py-[60px] px-6 md:px-16 md:flex justify-between">
					<div className="max-w-[320px]">
						<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 text-slate-headline">
							Swift Company
						</h2>
						<p className="text-desktop-paragraph mt-[18px] font-normal text-slate-body">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
							egestas semper massa, nullam neque sem bibendum ultrices. Scelerisque
							arcu a nec vitae eu elit.
						</p>
						<div className="flex items-center mt-10 space-x-3">
							<a className="font-normal cursor-pointer text-desktop-paragraph text-slate-body hover:underline">
								Read full cast study
							</a>
							<span>
								<img src="/assets/features/arrowright.svg" alt="" />
							</span>
						</div>
					</div>
					<div className="max-w-[589px] mt-12 md:mt-0">
						<img
							className="md:min-h-[350px]"
							src="/assets/features/graph.svg"
							alt="Graph"
						/>
						<div className="mt-10 md:flex md:mt-12">
							<div>
								<h4 className="font-bold text-xl text-[#33C1AE]">+240% ROI</h4>
								<p className="mt-4 text-desktop-paragraph">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
								</p>
							</div>
							<div className="mt-[30px] md:mt-0">
								<h4 className="font-bold text-xl text-[#33C1AE]">-8% Churn</h4>
								<p className="mt-4 text-desktop-paragraph">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Feature25 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto max-w-default">
				<div className="justify-between md:flex">
					<div className="max-w-[362px]">
						<h2 className="font-medium leading-tigh t text-mobile-h2 text-slate-heading">
							Simplicity is key. Elevate your copy with a simple design.
						</h2>
						<p className="mt-8 text-desktop-subheading text-slate-body">
							Here is a section with two features or points and a subheading.
						</p>
					</div>
					<div className="md:flex md:ml-32">
						<div className="mt-8 md:mt-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/instagram.svg" alt="Instagram" />
							</div>
							<h4 className="mt-4 text-xl font-medium">A simple heading </h4>
							<p className="mt-4 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
							<a href="">
								<p className="mt-4 cursor-pointer text-desktop-paragraph text-slate-body hover:underline">
									Details
								</p>
							</a>
						</div>
						<div className="mt-8 md:mt-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/messenger.svg" alt="Privacy" />
							</div>
							<h4 className="mt-4 text-xl font-medium">A simple heading </h4>
							<p className="mt-4 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
							<a href="">
								<p className="mt-4 cursor-pointer text-desktop-paragraph text-slate-body hover:underline">
									Details
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};



export const Feature26 = () => {


	const TextPanel = ({ icon, title, subtitle }) => (
		<div className="max-w-[328px] mt-[40px] md:mt-[70px]">
			<div className="flex flex-col items-center justify-center text-center md:text-left md:items-start md:flex-row">
				<div className="md:mt-[-12px] flex-shrink-0 w-12 h-12 p-3 mr-4 rounded-full bg-slate-orange">
					<img src={icon} alt={title} />
				</div>
				<div>
					<h4 className="mt-4 font-medium text-desktop-h4 md:mt-0">{title}</h4>
					<p className="mt-4 text-desktop-paragraph text-slate-body">{subtitle}</p>
				</div>
			</div>
		</div>
	);
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto bg-white max-w-default rounded-3xl pb-12 md:pb-[90px] pt-[20px]">
				<div className="md:flex md:justify-center">
					<div className="flex flex-col items-center justify-center w-full px-3 md:px-0">
						<TextPanel
							icon={'/assets/features/Play.svg'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<TextPanel
							icon={'/assets/features/Verified.svg'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<TextPanel
							icon={'/assets/features/3D.svg'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
					</div>
					<div className="flex flex-col items-center w-full md:items-start">
						<img
							className="mt-16 md:mt-[-88px] w-[228px] md:w-[356px]"
							src="/assets/features/platform/platform2.svg"
							alt="Platform 2"
						/>
						<div className="hidden md:block">
							<span className="px-6 py-2 text-white rounded-full bg-slate-orange font-bold text-[15px]">
								NEW!
							</span>
						</div>
						<div className="max-w-[362px] mt-4 px-6 md:px-0">
							<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 text-slate-headline">
								Simplicity is key
							</h2>
							<p className="mt-5 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum.
							</p>
							<button className="w-full px-8 py-4 mt-8 font-medium text-white rounded-lg bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
								Primary Button
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Feature27 = () => {
	return (
		<section className="min-h-screen bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end font-dm-sans py-12 md:py-[180px] px-6 md:px-0">
			<div className="m-auto text-center max-w-default">
				<div className="max-w-[754px] m-auto">
					<h5 className="text-base font-bold uppercase text-slate-orange">
						Feels like magic
					</h5>
					<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 max-w-[680px] m-auto leading-tight mt-8">
						Pre-made layouts to get you started even faster.
					</h2>
					<p className="text-[21px]  max-w-[754px] font-normal mt-8 text-slate-body">
						Save time with pre-made layouts and swap out only the sections you need.
					</p>
				</div>
				<div className="mt-12 md:mt-[80px]">
					<img src="/assets/features/feature27/feature27banner.svg" alt="Image" />
				</div>
				<div className="flex items-center justify-center mt-8">
					<button className="flex items-center justify-center w-full px-8 py-4 font-medium text-white rounded-lg md:w-auto text-desktop-paragraph bg-slate-blue hover:brightness-125 filter">
						See all layouts{' '}
						<span className="ml-2">
							<img src="/assets/features/rightarrow.svg" alt="Right Arrow" />
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export const Feature28 = () => {
	return (
		<section className="bg-cover md:min-h-screen bg-3d-mockup font-dm-sans">
			<div className="px-6 py-12 bg-cover md:min-h-screen bg-trans-grad md:px-0 md:py-0">
				<div className="flex items-center justify-center md:min-h-screen">
					<div className="md:min-w-[558px] max-w-[558px] px-6 md:px-0 bg-white rounded-2xl">
						<div className="my-[61px] text-center max-w-[362px] m-auto">
							<h3 className="font-medium text-mobile-h2">
								60+ Blocks. Endless Possibilities{' '}
							</h3>
							<p className="text-[18px] mt-4 text-slate-body">
								Create your perfect layout.
							</p>
							<div className="flex justify-center mt-8">
								<button className="bg-slate-blue px-6 py-2.5 text-white rounded-lg flex items-center text-base w-full justify-center md:w-auto hover:brightness-125 filter">
									Get SaaS Blocks{' '}
									<span className="ml-2.5">
										<img src="/assets/features/favorite.svg" alt="Heart" />
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};



export const Feature29 = () => {
	const TextBox = ({ no, title, subtitle }) => (
		<div className="flex mt-[44px] md:mt-0">
			<p className="font-bold text-[26px] text-slate-orange mr-4">{no}</p>
			<div className="max-w-[300px] ml-4">
				<p className="font-medium text-[20px]">{title}</p>
				<p className="mt-4 text-[18px] font-normal text-slate-body">{subtitle}</p>
			</div>
		</div>
	);
	return (
		<section className="bg-slate-light font-dm-sans py-[48px] md:py-[90px] px-6 md:px-0">
			<div className="max-w-[945px] m-auto">
				<div className="flex flex-col justify-between md:flex-row">
					<div className="flex flex-col justify-around order-2 md:order-1 mt-[11px] md:mt-0">
						<TextBox
							no={'01'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<TextBox
							no={'02'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<TextBox
							no={'03'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<TextBox
							no={'04'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
					</div>
					<div className="flex items-center justify-center order-1 md:ml-8 md:order-2">
						<div className="absolute w-[337px] h-[337px]  md:w-[558px] md:h-[558px] bg-gradient-to-r from-feeling-moody-start rounded-full to-feeling-moody-end"></div>
						<img
							className="relative w-3/4 md:w-auto"
							src="/assets/features/common/invoice-detail-mockup.svg"
							alt="Mobile Image Banner"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Feature30 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto max-w-default">
				<div className="max-w-[558px] m-auto">
					<h2 className="font-medium leading-tight text-center text-mobile-h2 md:text-desktop-h2">
						Create the perfect website in seconds.
					</h2>
				</div>
				<div className="mt-[60px] mx-3 md:mx-auto">
					<div className="md:flex">
						<div className="md:w-1/3 md:ml-[30px] mt-10 md:mt-0">
							<img src="/assets/features/sampleimage1.svg" alt="Sample Image" />
							<div className="mt-10">
								<h4 className="text-xl font-medium text-slate-headline">
									A simple heading
								</h4>
								<p className="mt-6 text-desktop-paragraph text-slate-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
									eget condimentum sed ipsum eget interdum eu.
								</p>
							</div>
						</div>
						<div className="md:w-1/3 md:ml-[30px] mt-10 md:mt-0">
							<img src="/assets/features/sampleimage2.svg" alt="Sample Image" />
							<div className="mt-10">
								<h4 className="text-xl font-medium text-slate-headline">
									A simple heading
								</h4>
								<p className="mt-6 text-desktop-paragraph text-slate-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
									eget condimentum sed ipsum eget interdum eu.
								</p>
							</div>
						</div>
						<div className="md:w-1/3 md:ml-[30px] mt-10 md:mt-0">
							<img src="/assets/features/sampleimage3.svg" alt="Sample Image" />
							<div className="mt-10">
								<h4 className="text-xl font-medium text-slate-headline">
									A simple heading
								</h4>
								<p className="mt-6 text-desktop-paragraph text-slate-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
									eget condimentum sed ipsum eget interdum eu.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export const Feature31 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto max-w-default">
				<div className="flex flex-col items-center md:flex-row">
					<div id="left" className="h-full">
						<div className="flex flex-col justify-between h-full">
							<div className="flex">
								<p className="font-bold text-[26px] text-[#19313C] opacity-20 mr-4">
									01
								</p>
								<div className="max-w-[300px] ml-4">
									<p className="text-xl font-bold">A simple heading</p>
									<p className="mt-4 text-base font-normal text-slate-body">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
							<div className="flex md:mt-[158px] mt-[44px]">
								<p className="font-bold text-[26px] text-[#19313C] opacity-20 mr-4">
									02
								</p>
								<div className="max-w-[300px] ml-4">
									<p className="font-bold text-[20px]">A simple heading</p>
									<p className="mt-4 text-base font-normal text-slate-body">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="ml-[30px] mr-[30px] mt-[81px] md:mt-[0px]" id="center">
						<div className="w-[284px] h-[284px] md:w-[362px] md:h-[362px] bg-gradient-to-r from-feeling-moody-start rounded-full to-feeling-moody-end flex items-center justify-center">
							<img
								className="z-10 w-full h-full mt-10"
								src={'/assets/features/platform/platform2.svg'}
								alt="Platform 1"
							/>
						</div>
					</div>
					<div id="right">
						<div className="flex flex-col justify-between h-full">
							<div className="flex mt-[44px] md:mt-0">
								<p className="font-bold text-[26px] text-[#19313C] opacity-20 mr-4">
									03
								</p>
								<div className="max-w-[300px] ml-4">
									<p className="font-bold text-[20px]">A simple heading</p>
									<p className="mt-4 text-base font-normal text-slate-body">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
							<div className="flex mt-[44px] md:mt-[158px]">
								<p className="font-bold text-[26px] text-[#19313C] opacity-20 mr-4">
									04
								</p>
								<div className="max-w-[300px] ml-4">
									<p className="font-bold text-[20px]">A simple heading</p>
									<p className="mt-4 text-base font-normal text-slate-body">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};



export const Feature33 = () => {

	const FeatureTile = ({ title, subtitle, image }) => (
		<div className="text-center px-6 md:px-[98px] py-12 md:py-0">
			<div className="md:w-[362px] md:h-[362px] flex items-center justify-center bg-gradient-to-r from-feeling-moody-start rounded-full md:mt-[-60px] to-feeling-moody-end">
				<img className="z-10 w-full m-auto" src={image} alt="Platform 1" />
			</div>
			<h2 className="text-slate-headline text-mobile-h2 md:text-desktop-h2 mt-[60px] font-medium">
				{title}
			</h2>
			<p className="mt-6 slate-body text-desktop-paragraph">{subtitle}</p>
			<div className="mt-10 md:mb-16">
				<button className="w-full py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph filter hover:brightness-125">
					Primary
				</button>
			</div>
		</div>
	);

	return (
		<section>
			<div className="bg-slate-light font-dm-sans pt-[48px] pb-12 md:pt-[150px] md:pb-[90px] px-6 md:px-0">
				<div>
					<div className="m-auto max-w-default md:flex">
						<div className="md:mr-[15px] w-full bg-white rounded-3xl">
							<FeatureTile
								title={'Limitless Possibilities'}
								subtitle={
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi fames tincidunt ornare volutpat. Sit ac tortor eget eu, pellentesque feugiat elementum.'
								}
								image={'/assets/features/platform/platform3.svg'}
							/>
						</div>
						<div className="mt-[30px] md:mt-0 md:ml-[15px] w-full bg-white rounded-3xl">
							<FeatureTile
								title={'In a Limitless World'}
								subtitle={
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi fames tincidunt ornare volutpat. Sit ac tortor eget eu, pellentesque feugiat elementum.'
								}
								image={'/assets/features/platform/platform2.svg'}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Feature34 = () => {
	return (
		<section className="bg-gradient-to-r from-[#E1ECF6] to-[#F0E3E3] font-dm-sans py-[48px] md:py-[90px] px-6 md:px-0">
			<div>
				<div className="max-w-[754px] m-auto">
					<h2 className="font-medium text-mobile-h2 md:text-[42px] leading-tight text-center">
						Large blocks are a great way to emphasize a key feature.
					</h2>
				</div>
				<div className="flex justify-center mt-[75px]">
					<img src="/assets/features/browsermockup.svg" alt="Mockup Image" />
				</div>
			</div>
		</section>
	);
};






















