import ShieldIcon from '@heroicons/react/outline/ShieldCheckIcon';
import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';
import LightningBoltIcon from '@heroicons/react/outline/LightningBoltIcon';
import BellIcon from '@heroicons/react/outline/BellIcon';
import XIcon from '@heroicons/react/outline/XIcon';

import { useState } from 'react';

export default {
	title: 'SAS Blocks/Heros',
};

export const Hero1 = () => {
	// import ShieldIcon from '@heroicons/react/outline/ShieldCheckIcon';
	// import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';
	// import LightningBoltIcon from '@heroicons/react/outline/LightningBoltIcon';
	// import BellIcon from '@heroicons/react/outline/BellIcon';
	// import XIcon from '@heroicons/react/outline/XIcon';

	// import { useState } from 'react';

	const MenuItems = [
		{
			title: 'Secure & Private',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <ShieldIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Simple Analytics',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <ChartBarIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Lightning Fast',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <LightningBoltIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Auto Reminders',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <BellIcon className="w-5 h-5 text-slate-blue" />,
		},
	];

	const Navlink = ({ links }) =>
		links.map((link) => (
			<p key={link.url}>
				<a
					className="font-medium transition-all duration-300 hover:text-slate-blue"
					href={link.url}
				>
					<li>{link.name}</li>
				</a>
			</p>
		));

	const linkArray = [
		{
			name: 'Industries',
			url: '#',
		},
		{
			name: 'Product',
			url: '#',
		},
		{
			name: 'Price',
			url: '#',
		},
		{
			name: 'About',
			url: '#',
		},
	];

	const MobileMenu = ({ setShowMenu }) => (
		<section className="md:hidden">
			<div className="absolute top-0 w-full min-h-[295px] p-2">
				<div className="w-full p-6 bg-white rounded-2xl">
					<div className="flex items-center justify-between">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="">
							<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<XIcon
									onClick={() => setShowMenu(false)}
									className="w-6 h-6 text-slate-headline"
								/>
							</ul>
						</div>
					</div>
					<div>
						<ul className="mt-6 space-y-4">
							<Navlink links={linkArray} />
						</ul>
					</div>
					<div>
						<button className="w-full mt-5 bg-slate-blue py-[10px] text-white rounded-lg px-6">
							Button
						</button>
					</div>
				</div>
			</div>
		</section>
	);

	const Nav = ({ showMenu, setShowMenu }) => (
		<nav>
			<div className="px-6 pt-6 m-auto md:pt-[53px] max-w-default md:px-0">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<a href="#">
							<img
								className="h-8 cursor-pointer md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
					</div>
					<div className="relative">
						{!showMenu ? (
							<img
								onClick={() => setShowMenu(!showMenu)}
								className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
								src="/assets/heros/menu.svg"
								alt="Menu"
							/>
						) : (
							<XIcon
								onClick={() => setShowMenu(!showMenu)}
								className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
							/>
						)}
						{showMenu && <HoverMenu />}
					</div>
				</div>
			</div>
		</nav>
	);

	const HoverMenu = () => (
		<section className="absolute rounded-2xl right-2 top-14 shadow-slight">
			<div className="mr-[-12px] w-[375px] px-4 py-6 bg-white rounded-2xl">
				{MenuItems.map((menuItem) => (
					<a href={menuItem.url}>
						<div className="p-4 hover:bg-[#114BE0] rounded-2xl hover:bg-opacity-5 transition-all duration-300 cursor-pointer">
							<div className="flex">
								<div className="p-4 bg-[#114BE0] bg-opacity-10 rounded-xl">
									{menuItem.icon}
								</div>
								<div className="ml-4">
									<p className="font-medium">{menuItem.title}</p>
									<p className="text-opacity-75 text-slate-body text-[15px]">
										{menuItem.subtitle}
									</p>
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);

	const ImageSection = () => (
		<div className="flex items-center justify-center bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl">
			<img className="-mt-10 -mb-10" src="/assets/heros/hero1banner.svg" alt="" />
		</div>
	);

	const [showMenu, setShowMenu] = useState(false);
	return (
		<section className="font-dm-sans bg-slate-light pb-[90px]">
			<Nav setShowMenu={setShowMenu} showMenu={showMenu} />
			{showMenu && <MobileMenu setShowMenu={setShowMenu} />}

			<section className="px-6 mt-20 md:mt-24 md:px-0">
				<div className="m-auto max-w-default">
					<div className="flex flex-col items-center md:flex-row">
						<div className="w-full md:mr-[17px] order-2 md:order-1">
							<div className="mt-[90px] md:mt-0">
								<h1 className="font-medium text-mobile-h1 md:text-desktop-h1 text-slate-headline">
									Billing Simplified
								</h1>
								<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px]">
									A subheading that addresses the what, the why we should care and
									hopefully some social proof.
								</p>
								<div className="mt-9">
									<button className="w-full px-8 py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
										Try it free
									</button>
									<p className="text-slate-body text-[13px] mt-3 text-center md:text-left">
										No credit card required
									</p>
								</div>
								<div className="mt-12 md:mr-5 pb-12 md:pb-[90px]">
									<div className="flex flex-col items-start justify-center px-4 py-6 bg-white md:pt-5 md:pr-10 md:flex-row md:pl-7 md:pb-9 rounded-2xl">
										<img
											className="w-16 h-16 m-auto"
											src="/assets/heros/person1.svg"
											alt="Person Profile Picture"
										/>
										<div className="mt-4 text-center md:mt-0 md:ml-7 md:text-left">
											<p className=" text-slate-body text-desktop-paragraph">
												“A testimonial that absolutely nails the value
												proposition in a sentence or two”.
											</p>
											<p className="text-[13px] text-slate-body opacity-50 mt-3">
												Cameron Williamson, CEO, Stripe
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full md:ml-[17px] order-1 md:order-2 md:mb-[90px]">
							<ImageSection />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};


export const Hero2 = () => {
	// import ShieldIcon from '@heroicons/react/outline/ShieldCheckIcon';
	// import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';
	// import LightningBoltIcon from '@heroicons/react/outline/LightningBoltIcon';
	// import BellIcon from '@heroicons/react/outline/BellIcon';
	// import XIcon from '@heroicons/react/outline/XIcon';

	// import { useState } from 'react';

	const MenuItems = [
		{
			title: 'Secure & Private',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <ShieldIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Simple Analytics',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <ChartBarIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Lightning Fast',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <LightningBoltIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Auto Reminders',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <BellIcon className="w-5 h-5 text-slate-blue" />,
		},
	];

	const Navlink = ({ links }) =>
		links.map((link) => (
			<p key={link.url}>
				<a
					className="font-medium transition-all duration-300 hover:text-slate-blue"
					href={link.url}
				>
					<li>{link.name}</li>
				</a>
			</p>
		));

	const linkArray = [
		{
			name: 'Industries',
			url: '#',
		},
		{
			name: 'Product',
			url: '#',
		},
		{
			name: 'Price',
			url: '#',
		},
		{
			name: 'About',
			url: '#',
		},
	];

	const MobileMenu = ({ setShowMenu }) => (
		<section className="md:hidden">
			<div className="absolute top-0 w-full min-h-[295px] p-2">
				<div className="w-full p-6 bg-white rounded-2xl">
					<div className="flex items-center justify-between">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="">
							<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<XIcon
									onClick={() => setShowMenu(false)}
									className="w-6 h-6 text-slate-headline"
								/>
							</ul>
						</div>
					</div>
					<div>
						<ul className="mt-6 space-y-4">
							<Navlink links={linkArray} />
						</ul>
					</div>
					<div>
						<button className="w-full mt-5 bg-slate-blue py-[10px] text-white rounded-lg px-6">
							Button
						</button>
					</div>
				</div>
			</div>
		</section>
	);

	const HoverMenu = () => (
		<section className="absolute rounded-2xl right-2 top-14 shadow-slight">
			<div className="mr-[-12px] w-[375px] px-4 py-6 bg-white rounded-2xl">
				{MenuItems.map((menuItem) => (
					<a href={menuItem.url}>
						<div className="p-4 hover:bg-[#114BE0] rounded-2xl hover:bg-opacity-5 transition-all duration-300 cursor-pointer">
							<div className="flex">
								<div className="p-4 bg-[#114BE0] bg-opacity-10 rounded-xl">
									{menuItem.icon}
								</div>
								<div className="ml-4">
									<p className="font-medium">{menuItem.title}</p>
									<p className="text-opacity-75 text-slate-body text-[15px]">
										{menuItem.subtitle}
									</p>
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);

	const Nav = ({ showMenu, setShowMenu }) => (
		<nav>
			<div className="px-6 pt-6 m-auto md:pt-[53px] max-w-default md:px-0">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<a href="#">
							<img
								className="h-8 cursor-pointer md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
					</div>
					<div className="relative">
						{!showMenu ? (
							<img
								onClick={() => setShowMenu(!showMenu)}
								className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
								src="/assets/heros/menu.svg"
								alt="Menu"
							/>
						) : (
							<XIcon
								onClick={() => setShowMenu(!showMenu)}
								className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
							/>
						)}
						<div className="hidden md:block">{showMenu && <HoverMenu />}</div>
					</div>
				</div>
			</div>
		</nav>
	);
	const [showMenu, setShowMenu] = useState(false);
	return (
		<section className="font-dm-sans bg-slate-light">
			<Nav setShowMenu={setShowMenu} showMenu={showMenu} />
			{showMenu && <MobileMenu setShowMenu={setShowMenu} />}

			<section className="m-auto md:mt-20 px-6 md:px-0 max-w-default pb-12 md:pb-[138px]">
				<div className="flex flex-col text-center">
					<div className="order-2 mt-12 md:order-1 md:mt-0">
						<h1 className="font-medium text-mobile-h1 md:text-desktop-h1 text-slate-headline max-w-[754px] m-auto">
							Billing Simplified
						</h1>
						<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px] max-w-[754px] m-auto">
							A subheading that addresses the what, the why we should care and
							hopefully some social proof.
						</p>
						<div className="mt-8">
							<button className="w-full px-8 py-4 text-white rounded-lg bg-slate-blue filter hover:brightness-125 text-desktop-paragraph md:w-auto">
								Try it free
							</button>
							<p className="text-slate-body text-[13px] mt-3">
								No credit card required
							</p>
						</div>
					</div>
					<div className="flex order-1 px-8 mt-12 md:mt-24 md:order-2 bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-2xl">
						<img
							src="/assets/heros/groupbanner.svg"
							className="pt-4 md:pt-[60px] m-auto -mb-6 md:-mb-12"
							alt=""
						/>
					</div>
				</div>
			</section>
		</section>
	);
};

export const Hero3 = () => {
	// import ShieldIcon from '@heroicons/react/outline/ShieldCheckIcon';
	// import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';
	// import LightningBoltIcon from '@heroicons/react/outline/LightningBoltIcon';
	// import BellIcon from '@heroicons/react/outline/BellIcon';
	// import XIcon from '@heroicons/react/outline/XIcon';

	// import { useState } from 'react';

	const MenuItems = [
		{
			title: 'Secure & Private',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <ShieldIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Simple Analytics',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <ChartBarIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Lightning Fast',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <LightningBoltIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Auto Reminders',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <BellIcon className="w-5 h-5 text-slate-blue" />,
		},
	];

	const Navlink = ({ links }) =>
		links.map((link) => (
			<p key={link.url}>
				<a
					className="font-medium transition-all duration-300 hover:text-slate-blue"
					href={link.url}
				>
					<li>{link.name}</li>
				</a>
			</p>
		));

	const linkArray = [
		{
			name: 'Industries',
			url: '#',
		},
		{
			name: 'Product',
			url: '#',
		},
		{
			name: 'Price',
			url: '#',
		},
		{
			name: 'About',
			url: '#',
		},
	];

	const MobileMenu = ({ setShowMenu }) => (
		<section className="md:hidden">
			<div className="absolute top-0 w-full min-h-[295px] p-2">
				<div className="w-full p-6 bg-white rounded-2xl">
					<div className="flex items-center justify-between">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="">
							<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<XIcon
									onClick={() => setShowMenu(false)}
									className="w-6 h-6 text-slate-headline"
								/>
							</ul>
						</div>
					</div>
					<div>
						<ul className="mt-6 space-y-4">
							<Navlink links={linkArray} />
						</ul>
					</div>
					<div>
						<button className="w-full mt-5 bg-slate-blue py-[10px] text-white rounded-lg px-6">
							Button
						</button>
					</div>
				</div>
			</div>
		</section>
	);

	const HoverMenu = () => (
		<section className="absolute rounded-2xl right-2 top-14 shadow-slight">
			<div className="mr-[-12px] w-[375px] px-4 py-6 bg-white rounded-2xl">
				{MenuItems.map((menuItem) => (
					<a href={menuItem.url}>
						<div className="p-4 hover:bg-[#114BE0] rounded-2xl hover:bg-opacity-5 transition-all duration-300 cursor-pointer">
							<div className="flex">
								<div className="p-4 bg-[#114BE0] bg-opacity-10 rounded-xl">
									{menuItem.icon}
								</div>
								<div className="ml-4">
									<p className="font-medium">{menuItem.title}</p>
									<p className="text-opacity-75 text-slate-body text-[15px]">
										{menuItem.subtitle}
									</p>
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);

	const Nav = ({ showMenu, setShowMenu }) => (
		<nav>
			<div className="px-6 pt-6 m-auto md:pt-[53px] max-w-default md:px-0">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<a href="#">
							<img
								className="h-8 cursor-pointer md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
					</div>
					<div className="relative">
						{!showMenu ? (
							<img
								onClick={() => setShowMenu(!showMenu)}
								className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
								src="/assets/heros/menu.svg"
								alt="Menu"
							/>
						) : (
							<XIcon
								onClick={() => setShowMenu(!showMenu)}
								className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
							/>
						)}
						<div className="hidden md:block">{showMenu && <HoverMenu />}</div>
					</div>
				</div>
			</div>
		</nav>
	);

	const ImageSection = () => (
		<div className="flex items-center justify-center bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl">
			<img className="-mt-10 -mb-10" src="/assets/heros/invoicedetailbanner.svg" alt="" />
		</div>
	);

	const [showMenu, setShowMenu] = useState(false);

	return (
		<section className="md:pb-[130px] font-dm-sans bg-slate-light">
			<Nav setShowMenu={setShowMenu} showMenu={showMenu} />
			{showMenu && <MobileMenu setShowMenu={setShowMenu} />}

			<section className="px-6 mt-20 md:mt-24 md:px-0">
				<div className="m-auto max-w-default">
					<div className="flex flex-col items-center md:flex-row">
						<div className="w-full md:mr-[17px] order-2 md:order-1">
							<div className="mt-[90px] md:mt-0">
								<h1 className="font-medium text-mobile-h1 md:text-desktop-h1 text-slate-headline">
									Billing Simplified
								</h1>
								<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px]">
									A subheading that addresses the what, the why we should care and
									hopefully some social proof.
								</p>
								<div className="flex flex-col md:space-x-2 md:flex-row mt-9">
									<input
										type="email"
										className="py-4 pl-6 bg-white border-2 rounded-lg text-slate-body placeholder-slate-body text-desktop-paragraph placeholder-opacity-30 border-slate-border min-w-[262px]"
										placeholder="Email"
									/>
									<button className="w-full px-8 py-4 mt-4 text-white rounded-lg md:mt-0 bg-slate-blue filter hover:brightness-125 text-desktop-paragraph md:w-auto">
										Try it free
									</button>
								</div>
								<div className="mt-12 md:mr-5 pb-12 md:pb-[90px]">
									<div className="flex flex-col items-start justify-center px-4 py-6 bg-white md:pt-5 md:pr-10 md:flex-row md:pl-7 md:pb-9 rounded-2xl">
										<img
											className="w-16 h-16 m-auto"
											src="/assets/heros/person1.svg"
											alt="Person Profile Picture"
										/>
										<div className="mt-4 text-center md:mt-0 md:ml-7 md:text-left">
											<p className=" text-slate-body text-desktop-paragraph">
												“A testimonial that absolutely nails the value
												proposition in a sentence or two”.
											</p>
											<p className="text-[13px] text-slate-body opacity-50 mt-3">
												Cameron Williamson, CEO, Stripe
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full md:ml-[17px] order-1 md:order-2">
							<ImageSection />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export const Hero4 = () => {
	// import XIcon from '@heroicons/react/outline/XIcon';
	// import { useState } from 'react';

	const Navlink = ({ links }) =>
		links.map((link) => (
			<p key={link.url}>
				<a
					className="font-medium transition-all duration-300 hover:text-slate-blue"
					href={link.url}
				>
					<li>{link.name}</li>
				</a>
			</p>
		));

	const linkArray = [
		{
			name: 'Industries',
			url: '#',
		},
		{
			name: 'Product',
			url: '#',
		},
		{
			name: 'Price',
			url: '#',
		},
		{
			name: 'About',
			url: '#',
		},
	];

	const Nav = ({ setShowMobileMenu }) => (
		<nav>
			<div className="px-6 pt-6 m-auto md:pt-[53px] max-w-default md:px-0">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:w-auto md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="">
							<ul className="hidden ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<Navlink links={linkArray} />
							</ul>
						</div>
					</div>
					<div className="block cursor-pointer md:hidden">
						<img
							onClick={() => setShowMobileMenu(true)}
							className="w-6 h-6 md:w-8 md:h-8"
							src="/assets/heros/menu.svg"
							alt="Menu"
						/>
					</div>
					<div className="hidden md:block">
						<div className="space-x-3">
							<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white transition-all duration-300">
								Android App
							</button>
							<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white transition-all duration-300">
								iOS App
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);

	const ImageSection = () => (
		<img className="max-h-[659px]" src="/assets/heros/invoicedetailbanner.svg" alt="" />
	);

	const MobileMenu = ({ setShowMobileMenu }) => (
		<section className="md:hidden">
			<div className="absolute top-0 w-full min-h-[295px] p-2">
				<div className="w-full p-6 bg-white rounded-2xl">
					<div className="flex items-center justify-between">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="">
							<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<XIcon
									onClick={() => setShowMobileMenu(false)}
									className="w-6 h-6 text-slate-headline"
								/>
							</ul>
						</div>
					</div>
					<div>
						<ul className="mt-6 space-y-4">
							<Navlink links={linkArray} />
						</ul>
					</div>
					<div>
						<button className="w-full mt-5 bg-slate-blue py-[10px] text-white rounded-lg px-6">
							Button
						</button>
					</div>
				</div>
			</div>
		</section>
	);

	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<section className="font-dm-sans bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end pb-12 md:pb-[90px]">
			<Nav setShowMobileMenu={setShowMobileMenu} />
			{showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
			<section className="px-6 mt-12 md:mt-24 md:px-0">
				<div className="m-auto max-w-default">
					<div className="flex flex-col items-center md:flex-row">
						<div className="w-full md:mr-[17px] order-2 md:order-1">
							<div className="mt-[48px] md:mt-0">
								<h1 className="font-medium leading-none text-mobile-h1 md:text-desktop-h1 text-slate-headline">
									Billing Simplified
								</h1>
								<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px]">
									A subheading that addresses the what, the why we should care and
									hopefully some social proof.
								</p>
								<div className="mt-9">
									<button className="w-full px-8 py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
										Download the app
									</button>
									<p className="text-slate-body text-[13px] mt-3 hidden md:block">
										No credit card required
									</p>
								</div>
								<div className="mt-12 md:mr-5 pb-12 md:pb-[90px]">
									<div className="flex flex-col items-start justify-center px-4 py-6 bg-white md:pt-5 md:pr-10 md:flex-row md:pl-7 bg-opacity-40 md:pb-9 rounded-2xl">
										<img
											className="w-16 h-16 m-auto"
											src="/assets/heros/person1.svg"
											alt="Person Profile Picture"
										/>
										<div className="mt-4 text-center md:mt-0 md:ml-7 md:text-left">
											<p className=" text-slate-body text-desktop-paragraph">
												“A testimonial that absolutely nails the value
												proposition in a sentence or two”.
											</p>
											<p className="text-[13px] text-slate-body opacity-50 mt-3">
												Cameron Williamson, CEO, Stripe
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="order-1 w-full md:order-2">
							<div className="flex justify-center md:justify-end">
								<ImageSection />
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};



export const Hero5 = () => {
	// import ShieldIcon from '@heroicons/react/outline/ShieldCheckIcon';
	// import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';
	// import LightningBoltIcon from '@heroicons/react/outline/LightningBoltIcon';
	// import BellIcon from '@heroicons/react/outline/BellIcon';
	// import XIcon from '@heroicons/react/outline/XIcon';

	// import { useState } from 'react';

	const Navlink = ({ links }) =>
		links.map((link) => (
			<p key={link.url}>
				<a
					className="font-medium transition-all duration-300 hover:text-slate-blue"
					href={link.url}
				>
					<li>{link.name}</li>
				</a>
			</p>
		));

	const linkArray = [
		{
			name: 'Industries',
			url: '#',
		},
		{
			name: 'Product',
			url: '#',
		},
		{
			name: 'Price',
			url: '#',
		},
		{
			name: 'About',
			url: '#',
		},
	];

	const MenuItems = [
		{
			title: 'Secure & Private',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <ShieldIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Simple Analytics',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <ChartBarIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Lightning Fast',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <LightningBoltIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Auto Reminders',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <BellIcon className="w-5 h-5 text-slate-blue" />,
		},
	];

	const HoverMenu = () => (
		<section className="absolute rounded-2xl right-2 top-14 shadow-slight">
			<div className="mr-[-12px] w-[375px] px-4 py-6 bg-white rounded-2xl">
				{MenuItems.map((menuItem) => (
					<a href={menuItem.url}>
						<div className="p-4 hover:bg-[#114BE0] rounded-2xl hover:bg-opacity-5 transition-all duration-300 cursor-pointer">
							<div className="flex">
								<div className="p-4 bg-[#114BE0] bg-opacity-10 rounded-xl">
									{menuItem.icon}
								</div>
								<div className="ml-4">
									<p className="font-medium">{menuItem.title}</p>
									<p className="text-opacity-75 text-slate-body text-[15px]">
										{menuItem.subtitle}
									</p>
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);

	const MobileMenu = ({ setShowMenu }) => (
		<section className="md:hidden">
			<div className="absolute top-0 w-full min-h-[295px] p-2">
				<div className="w-full p-6 bg-white rounded-2xl">
					<div className="flex items-center justify-between">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="">
							<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<XIcon
									onClick={() => setShowMenu(false)}
									className="w-6 h-6 text-slate-headline"
								/>
							</ul>
						</div>
					</div>
					<div>
						<ul className="mt-6 space-y-4">
							<Navlink links={linkArray} />
						</ul>
					</div>
					<div>
						<button className="w-full mt-5 bg-slate-blue py-[10px] text-white rounded-lg px-6">
							Button
						</button>
					</div>
				</div>
			</div>
		</section>
	);

	const Nav = ({ showMenu, setShowMenu }) => (
		<nav>
			<div className="px-6 pt-6 m-auto md:pt-[53px] max-w-default md:px-0">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:w-auto cursor-pointer md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
					</div>
					<div className="relative">
						{!showMenu ? (
							<img
								onClick={() => setShowMenu(!showMenu)}
								className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
								src="/assets/heros/menu.svg"
								alt="Menu"
							/>
						) : (
							<XIcon
								onClick={() => setShowMenu(!showMenu)}
								className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
							/>
						)}
						<div className="hidden md:block">{showMenu && <HoverMenu />}</div>
					</div>
				</div>
			</div>
		</nav>
	);

	const ImageSection = () => (
		<img className="max-h-[659px]" src="/assets/heros/invoicedetailbanner.svg" alt="" />
	);
	const [showMenu, setShowMenu] = useState(false);
	return (
		<section className="bg-center bg-cover font-dm-sans bg-hero-5">
			<div className="bg-cover bg-trans-grad">
				<Nav setShowMenu={setShowMenu} showMenu={showMenu} />
				{showMenu && <MobileMenu setShowMenu={setShowMenu} />}
				<section className="px-6 mt-20 md:mt-[102px] pb-[60px] md:px-0">
					<div className="m-auto max-w-default">
						<div className="flex flex-col items-center md:flex-row">
							<div className="w-full md:mr-[17px] order-2 md:order-1">
								<div className="mt-[48px] md:mt-0">
									<h1 className="font-medium text-mobile-h1 md:text-desktop-h1 text-slate-headline">
										Billing Simplified
									</h1>
									<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px]">
										A subheading that addresses the what, the why we should care
										and hopefully some social proof.
									</p>
									<div className="mt-9">
										<button className="w-full px-8 py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
											Download the app
										</button>
										<p className="text-slate-body text-[13px] mt-3 hidden md:block">
											No credit card required
										</p>
									</div>
									<div className="mt-12 md:mr-5 pb-12 md:pb-[90px]">
										<div className="flex flex-col items-start justify-center px-4 py-6 transition-all duration-300 bg-white bg-opacity-40 md:pt-5 md:pr-10 md:flex-row md:pl-7 md:pb-9 rounded-2xl">
											<img
												className="w-16 h-16 m-auto"
												src="/assets/heros/person1.svg"
												alt="Person Profile Picture"
											/>
											<div className="mt-4 text-center md:mt-0 md:ml-7 md:text-left">
												<p className=" text-slate-body text-desktop-paragraph">
													“A testimonial that absolutely nails the value
													proposition in a sentence or two”.
												</p>
												<p className="text-[13px] text-slate-body opacity-50 mt-3">
													Cameron Williamson, CEO, Stripe
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="order-1 w-full md:order-2">
								<div className="flex justify-center md:justify-end">
									<ImageSection />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};


export const Hero6 = () => {
	// import XIcon from '@heroicons/react/outline/XIcon';
	// import { useState } from 'react';

	const Navlink = ({ links }) =>
		links.map((link) => (
			<p key={link.url}>
				<a
					className="font-medium transition-all duration-300 hover:text-slate-blue"
					href={link.url}
				>
					<li>{link.name}</li>
				</a>
			</p>
		));

	const linkArray = [
		{
			name: 'Industries',
			url: '#',
		},
		{
			name: 'Product',
			url: '#',
		},
		{
			name: 'Price',
			url: '#',
		},
		{
			name: 'About',
			url: '#',
		},
	];

	const Nav = ({ setShowMobileMenu }) => (
		<nav>
			<div className="m-auto max-w-default">
				<div className="md:h-[130px] flex items-center justify-between">
					<div className="flex items-center">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:w-auto md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="hidden md:block">
							<ul className="hidden ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<Navlink links={linkArray} />
							</ul>
						</div>
					</div>
					<div className="block md:hidden">
						<img
							onClick={() => setShowMobileMenu(true)}
							className="w-6 h-6 md:w-8 md:h-8"
							src="/assets/heros/menu.svg"
							alt="Menu"
						/>{' '}
					</div>
					<div className="hidden md:block">
						<div className="space-x-3">
							<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white duration-300 transition-all">
								Android App
							</button>
							<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white duration-300 transition-all">
								iOS App
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);

	const MobileMenu = ({ setShowMobileMenu }) => (
		<section className="md:hidden">
			<div className="absolute top-0 w-full min-h-[295px] p-2">
				<div className="w-full p-6 bg-white rounded-2xl">
					<div className="flex items-center justify-between">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="">
							<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<XIcon
									onClick={() => setShowMobileMenu(false)}
									className="w-6 h-6 text-slate-headline"
								/>
							</ul>
						</div>
					</div>
					<div>
						<ul className="mt-6 space-y-4">
							<Navlink links={linkArray} />
						</ul>
					</div>
					<div>
						<button className="w-full mt-5 bg-slate-blue py-[10px] text-white rounded-lg px-6">
							Button
						</button>
					</div>
				</div>
			</div>
		</section>
	);

	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<section className="pt-6 overflow-hidden bg-slate-light font-dm-sans md:pt-0 md:px-0">
			<div className="px-6">
				<Nav setShowMobileMenu={setShowMobileMenu} />
			</div>
			{showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
			<section className="px-6">
				<div className="mt-20 text-center max-w-[790px] m-auto">
					<h1 className="font-medium leading-snug text-mobile-h1 md:text-desktop-h1 text-slate-headline">
						Billing Simplified
					</h1>
					<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px] ">
						Start billing like a pro and get paid within minutes.
					</p>
					<div className="mt-12">
						<button className="w-full px-8 py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
							Download the app
						</button>
					</div>
					<div className="flex justify-center mt-12 md:mt-20 pb-12 md:pb-[90px] relative">
						<div className="absolute top-0 w-[1000px] mt-32 bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-full h-[1000px]"></div>
						<div className="absolute top-0 w-[1000px] mt-32 bg-gradient-to-b from-transparent to-white rounded-full h-[1000px]"></div>
						<img
							className="relative"
							src="/assets/heros/mockupphone.svg"
							alt="Mockup"
						/>
					</div>
				</div>
			</section>
		</section>
	);
};


export const Hero7 = () => {
	// import XIcon from '@heroicons/react/outline/XIcon';
	// import { useState } from 'react';

	const Navlink = ({ links }) =>
		links.map((link) => (
			<p key={link.url}>
				<a
					className="font-medium transition-all duration-300 hover:text-slate-blue"
					href={link.url}
				>
					<li>{link.name}</li>
				</a>
			</p>
		));

	const linkArray = [
		{
			name: 'Industries',
			url: '#',
		},
		{
			name: 'Product',
			url: '#',
		},
		{
			name: 'Price',
			url: '#',
		},
		{
			name: 'About',
			url: '#',
		},
	];

	const Nav = ({ setShowMobileMenu }) => (
		<nav>
			<div className="m-auto max-w-default">
				<div className="md:h-[130px] flex items-center justify-between">
					<div className="flex items-center">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:w-auto md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="hidden md:block">
							<ul className="hidden ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<Navlink links={linkArray} />
							</ul>
						</div>
					</div>
					<div className="block md:hidden">
						<img
							onClick={() => setShowMobileMenu(true)}
							className="w-6 h-6 md:w-8 md:h-8"
							src="/assets/heros/menu.svg"
							alt="Menu"
						/>{' '}
					</div>
					<div className="hidden md:block">
						<div className="space-x-3">
							<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white duration-300 transition-all">
								Android App
							</button>
							<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white duration-300 transition-all">
								iOS App
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);

	const MobileMenu = ({ setShowMobileMenu }) => (
		<section className="md:hidden">
			<div className="absolute top-0 w-full min-h-[295px] p-2">
				<div className="w-full p-6 bg-white rounded-2xl">
					<div className="flex items-center justify-between">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="">
							<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<XIcon
									onClick={() => setShowMobileMenu(false)}
									className="w-6 h-6 text-slate-headline"
								/>
							</ul>
						</div>
					</div>
					<div>
						<ul className="mt-6 space-y-4">
							<Navlink links={linkArray} />
						</ul>
					</div>
					<div>
						<button className="w-full mt-5 bg-slate-blue py-[10px] text-white rounded-lg px-6">
							Button
						</button>
					</div>
				</div>
			</div>
		</section>
	);

	const ImageSection = () => (
		<div className="flex items-center justify-center bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl">
			<img
				className="-mt-10 -mb-10 max-h-[366px] md:max-h-[668px]"
				src="/assets/heros/mockupphone.svg"
				alt=""
			/>
		</div>
	);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<section className="pt-6 overflow-hidden bg-slate-light font-dm-sans md:pt-0 md:px-0 pb-12 md:pb-[90px]">
			<div className="px-6">
				<Nav setShowMobileMenu={setShowMobileMenu} />
			</div>
			{showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
			<section className="px-6 mt-20 md:mt-24">
				<div className="m-auto max-w-default">
					<div className="flex flex-col items-center md:flex-row">
						<div className="w-full md:mr-[17px] order-2 md:order-1">
							<div className="mt-[90px] md:mt-0">
								<h1 className="font-medium leading-snug text-mobile-h1 md:text-desktop-h1 text-slate-headline">
									Billing Simplified
								</h1>
								<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px]">
									A subheading that addresses the what, the why we should care and
									hopefully some social proof.
								</p>
								<div className="flex flex-col mt-9 md:space-x-3 md:flex-row">
									<button className="flex items-center justify-center w-full px-8 py-4 mt-4 text-white rounded-lg md:mt-0 bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
										iOS App
										<span>
											<img
												className="ml-3"
												src="/assets/heros/apple.svg"
												alt=""
											/>
										</span>
									</button>
									<button className="flex items-center justify-center w-full px-8 py-4 mt-4 text-white rounded-lg md:mt-0 bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
										Android App
										<span>
											<img
												className="ml-3"
												src="/assets/heros/android.svg"
												alt=""
											/>
										</span>
									</button>
								</div>
								<div className="mt-12 md:mr-5 pb-12 md:pb-[90px]">
									<div className="flex flex-col items-start justify-center px-4 py-6 bg-white md:pt-5 md:pr-10 md:flex-row md:pl-7 md:pb-9 rounded-2xl">
										<img
											className="w-16 h-16 m-auto"
											src="/assets/heros/person1.svg"
											alt="Person Profile Picture"
										/>
										<div className="mt-4 text-center md:mt-0 md:ml-7 md:text-left">
											<p className=" text-slate-body text-desktop-paragraph">
												“A testimonial that absolutely nails the value
												proposition in a sentence or two”.
											</p>
											<p className="text-[13px] text-slate-body opacity-50 mt-3">
												Cameron Williamson, CEO, Stripe
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full md:ml-[17px] order-1 md:order-2">
							<ImageSection />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};


export const Hero8 = () => {
	// import XIcon from '@heroicons/react/outline/XIcon';
	// import { useState } from 'react';

	const Navlink = ({ links }) =>
		links.map((link) => (
			<p key={link.url}>
				<a
					className="font-medium transition-all duration-300 hover:text-slate-blue"
					href={link.url}
				>
					<li>{link.name}</li>
				</a>
			</p>
		));

	const linkArray = [
		{
			name: 'Industries',
			url: '#',
		},
		{
			name: 'Product',
			url: '#',
		},
		{
			name: 'Price',
			url: '#',
		},
		{
			name: 'About',
			url: '#',
		},
	];

	const Nav = ({ setShowMobileMenu }) => (
		<nav>
			<div className="m-auto max-w-default">
				<div className="md:h-[130px] flex items-center justify-between">
					<div className="flex items-center">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:w-auto md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="hidden md:block">
							<ul className="hidden ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<Navlink links={linkArray} />
							</ul>
						</div>
					</div>
					<div className="block md:hidden">
						<img
							onClick={() => setShowMobileMenu(true)}
							className="w-6 h-6 md:w-8 md:h-8"
							src="/assets/heros/menu.svg"
							alt="Menu"
						/>{' '}
					</div>
					<div className="hidden md:block">
						<div className="space-x-3">
							<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white duration-300 transition-all">
								Android App
							</button>
							<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white duration-300 transition-all">
								iOS App
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);

	const MobileMenu = ({ setShowMobileMenu }) => (
		<section className="md:hidden">
			<div className="absolute top-0 w-full min-h-[295px] p-2">
				<div className="w-full p-6 bg-white rounded-2xl">
					<div className="flex items-center justify-between">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="">
							<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<XIcon
									onClick={() => setShowMobileMenu(false)}
									className="w-6 h-6 text-slate-headline"
								/>
							</ul>
						</div>
					</div>
					<div>
						<ul className="mt-6 space-y-4">
							<Navlink links={linkArray} />
						</ul>
					</div>
					<div>
						<button className="w-full mt-5 bg-slate-blue py-[10px] text-white rounded-lg px-6">
							Button
						</button>
					</div>
				</div>
			</div>
		</section>
	);

	const ImageSection = () => (
		<div className="flex items-center justify-center rounded-full bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end h-[327px] w-[327px] md:h-[560px] md:w-[560px]">
			<img
				className="-mt-10 -mb-10 max-h-[366px] md:max-h-[668px]"
				src="/assets/heros/mockupphone.svg"
				alt=""
			/>
		</div>
	);

	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<section className="pt-6 overflow-hidden bg-slate-light font-dm-sans md:pt-0 md:px-0 pb-12 md:pb-[90px]">
			<div className="px-6">
				<Nav setShowMobileMenu={setShowMobileMenu} />
			</div>
			{showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
			<section className="px-6 mt-20 md:mt-24">
				<div className="m-auto max-w-default">
					<div className="flex flex-col items-center md:flex-row">
						<div className="w-full md:mr-[17px] order-2 md:order-1">
							<div className="mt-[90px] md:mt-0">
								<h1 className="font-medium text-mobile-h1 md:text-desktop-h1 text-slate-headline">
									Billing Simplified
								</h1>
								<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px]">
									A subheading that addresses the what, the why we should care and
									hopefully some social proof.
								</p>
								<div className="flex flex-col mt-9 md:space-x-3 md:flex-row">
									<button className="flex items-center justify-center w-full px-8 py-4 mt-4 text-white rounded-lg md:mt-0 bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
										iOS App
										<span>
											<img
												className="ml-3"
												src="/assets/heros/apple.svg"
												alt=""
											/>
										</span>
									</button>
									<button className="flex items-center justify-center w-full px-8 py-4 mt-4 text-white rounded-lg md:mt-0 bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
										Android App
										<span>
											<img
												className="ml-3"
												src="/assets/heros/android.svg"
												alt=""
											/>
										</span>
									</button>
								</div>
								<div className="mt-12 md:mr-5 md:pb-[90px]">
									<div className="flex flex-col items-start justify-center px-4 py-6 bg-white md:pt-5 md:pr-10 md:flex-row md:pl-7 md:pb-9 rounded-2xl">
										<img
											className="w-16 h-16 m-auto"
											src="/assets/heros/person1.svg"
											alt="Person Profile Picture"
										/>
										<div className="mt-4 text-center md:mt-0 md:ml-7 md:text-left">
											<p className=" text-slate-body text-desktop-paragraph">
												“A testimonial that absolutely nails the value
												proposition in a sentence or two”.
											</p>
											<p className="text-[13px] text-slate-body opacity-50 mt-3">
												Cameron Williamson, CEO, Stripe
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full md:ml-[17px] order-1 md:order-2">
							<ImageSection />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};



export const Hero9 = () => {
	// import XIcon from '@heroicons/react/outline/XIcon';
	// import { useState } from 'react';

	const Navlink = ({ links }) =>
		links.map((link) => (
			<p key={link.url}>
				<a
					className="font-medium transition-all duration-300 hover:text-slate-blue"
					href={link.url}
				>
					<li>{link.name}</li>
				</a>
			</p>
		));

	const linkArray = [
		{
			name: 'Industries',
			url: '#',
		},
		{
			name: 'Product',
			url: '#',
		},
		{
			name: 'Price',
			url: '#',
		},
		{
			name: 'About',
			url: '#',
		},
	];

	const Nav = ({ setShowMobileMenu }) => (
		<nav>
			<div className="m-auto max-w-default">
				<div className="md:h-[130px] flex items-center justify-between">
					<div className="flex items-center">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:w-auto md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="hidden md:block">
							<ul className="hidden ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<Navlink links={linkArray} />
							</ul>
						</div>
					</div>
					<div className="block md:hidden">
						<img
							onClick={() => setShowMobileMenu(true)}
							className="w-6 h-6 md:w-8 md:h-8"
							src="/assets/heros/menu.svg"
							alt="Menu"
						/>{' '}
					</div>
					<div className="hidden md:block">
						<div className="space-x-3">
							<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white duration-300 transition-all">
								Button
							</button>
							<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white duration-300 transition-all">
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);

	const MobileMenu = ({ setShowMobileMenu }) => (
		<section className="md:hidden">
			<div className="absolute top-0 w-full min-h-[295px] p-2">
				<div className="w-full p-6 bg-white rounded-2xl">
					<div className="flex items-center justify-between">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="">
							<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<XIcon
									onClick={() => setShowMobileMenu(false)}
									className="w-6 h-6 text-slate-headline"
								/>
							</ul>
						</div>
					</div>
					<div>
						<ul className="mt-6 space-y-4">
							<Navlink links={linkArray} />
						</ul>
					</div>
					<div>
						<button className="w-full mt-5 bg-slate-blue py-[10px] text-white rounded-lg px-6">
							Button
						</button>
					</div>
				</div>
			</div>
		</section>
	);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<section>
			<div>
				<div className="md:max-h-screen pt-6 pb-[50px] md:pb-[90px] md:px-0 bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end font-dm-sans md:pt-0 relative">
					<div className="px-6">
						<Nav setShowMobileMenu={setShowMobileMenu} />
					</div>
					{showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
					<section className="relative px-6 m-auto md:px-0 max-w-default">
						<div className="mt-[50px] md:mt-20 text-center m-auto">
							<div className="max-w-[790px] m-auto">
								<h1 className="font-medium text-slate-headline text-mobile-h1 md:text-desktop-h1">
									Billing simplified.
								</h1>
								<p className="mt-[30px] text-desktop-subheading">
									A subheading that addresses the what, the why we should care and
									hopefully some social proof.
								</p>
							</div>
							<div className="flex flex-col justify-center mt-8 md:space-x-4 md:flex-row md:mt-10">
								<button className="px-8 py-4 font-medium text-white rounded-lg bg-slate-blue text-desktop-paragraph filter hover:brightness-125">
									Sign up for free
								</button>
								<button className="px-8 py-4 mt-2 font-medium transition-all duration-300 border-2 rounded-lg md:mt-0 text-slate-blue border-slate-blue hover:text-white hover:bg-slate-blue text-desktop-paragraph">
									Product Preview
								</button>
							</div>
							<div className="relative mt-[56px] md:mt-20 flex items-center justify-center h-[194px] md:h-[680px] bg-white bg-opacity-70 rounded-3xl">
								<img
									className="h-[188px] md:h-auto mt-8 md:mt-[100px]"
									src="/assets/heros/groupbanner.svg"
									alt=""
								/>
							</div>
							<div className="pt-[143px] clear-both" />
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export const Hero10 = () => {
	// import ShieldIcon from '@heroicons/react/outline/ShieldCheckIcon';
	// import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';
	// import LightningBoltIcon from '@heroicons/react/outline/LightningBoltIcon';
	// import BellIcon from '@heroicons/react/outline/BellIcon';
	// import XIcon from '@heroicons/react/outline/XIcon';

	// import { useState } from 'react';

	const Navlink = ({ links }) =>
		links.map((link) => (
			<p key={link.url}>
				<a
					className="font-medium transition-all duration-300 hover:text-slate-blue"
					href={link.url}
				>
					<li>{link.name}</li>
				</a>
			</p>
		));

	const linkArray = [
		{
			name: 'Industries',
			url: '#',
		},
		{
			name: 'Product',
			url: '#',
		},
		{
			name: 'Price',
			url: '#',
		},
		{
			name: 'About',
			url: '#',
		},
	];

	const MenuItems = [
		{
			title: 'Secure & Private',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <ShieldIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Simple Analytics',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <ChartBarIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Lightning Fast',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <LightningBoltIcon className="w-5 h-5 text-slate-blue" />,
		},
		{
			title: 'Auto Reminders',
			subtitle: 'Amet vel nulla aliquam non purus.',
			url: '#',
			icon: <BellIcon className="w-5 h-5 text-slate-blue" />,
		},
	];

	const HoverMenu = () => (
		<section className="absolute rounded-2xl right-2 top-14 shadow-slight">
			<div className="mr-[-12px] w-[375px] px-4 py-6 bg-white rounded-2xl">
				{MenuItems.map((menuItem) => (
					<a href={menuItem.url}>
						<div className="p-4 hover:bg-[#114BE0] rounded-2xl hover:bg-opacity-5 transition-all duration-300 cursor-pointer">
							<div className="flex">
								<div className="p-4 bg-[#114BE0] bg-opacity-10 rounded-xl">
									{menuItem.icon}
								</div>
								<div className="ml-4">
									<p className="font-medium">{menuItem.title}</p>
									<p className="text-opacity-75 slate-body text-[15px]">
										{menuItem.subtitle}
									</p>
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);

	const MobileMenu = ({ setShowMenu }) => (
		<section className="md:hidden">
			<div className="absolute top-0 w-full min-h-[295px] p-2">
				<div className="w-full p-6 bg-white rounded-2xl">
					<div className="flex items-center justify-between">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
						<div className="">
							<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
								<XIcon
									onClick={() => setShowMenu(false)}
									className="w-6 h-6 text-slate-headline"
								/>
							</ul>
						</div>
					</div>
					<div>
						<ul className="mt-6 space-y-4">
							<Navlink links={linkArray} />
						</ul>
					</div>
					<div>
						<button className="w-full mt-5 bg-slate-blue py-[10px] text-white rounded-lg px-6">
							Button
						</button>
					</div>
				</div>
			</div>
		</section>
	);

	const Nav = ({ showMenu, setShowMenu }) => (
		<nav>
			<div className="px-6 pt-6 m-auto md:pt-[53px] max-w-default md:px-0">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<a href="#">
							<img
								className="h-[42px] w-[200px] md:w-auto cursor-pointer md:h-auto"
								src="/assets/heros/saaslogo.svg"
								alt="Logo"
							/>
						</a>
					</div>
					<div className="relative">
						{!showMenu ? (
							<img
								onClick={() => setShowMenu(!showMenu)}
								className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
								src="/assets/heros/menu.svg"
								alt="Menu"
							/>
						) : (
							<XIcon
								onClick={() => setShowMenu(!showMenu)}
								className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
							/>
						)}
						<div className="hidden md:block">{showMenu && <HoverMenu />}</div>
					</div>
				</div>
			</div>
		</nav>
	);

	const ImageSection = () => (
		<div className="flex items-start md:justify-end px-4 md:px-9 py-6 md:py-0 w-full h-full md:w-[722px] md:h-[500px] bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl">
			<img className="w-full h-full" src="/assets/heros/groupbanner.svg" alt="" />
		</div>
	);

	const [showMenu, setShowMenu] = useState(false);
	return (
		<section className="overflow-hidden font-dm-sans bg-slate-light">
			<Nav setShowMenu={setShowMenu} showMenu={showMenu} />
			{showMenu && <MobileMenu setShowMenu={setShowMenu} />}
			<section className="px-6 mb-12 md:mb-[21px] mt-20 md:mt-24 md:px-0">
				<div className="m-auto max-w-default">
					<div className="flex flex-col items-center md:items-start md:flex-row">
						<div className="w-full md:mr-[17px] order-2 md:order-1">
							<div className="mt-[48px] md:mt-0">
								<h1 className="font-medium text-mobile-h1 md:text-desktop-h1 text-slate-headline">
									Billing Simplified
								</h1>
								<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px]">
									A subheading that addresses the what, the why we should care and
									hopefully some social proof.
								</p>
								<div className="mt-9">
									<button className="w-full px-8 py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
										Try it free
									</button>
									<p className="text-slate-body text-[13px] mt-3 text-center md:text-left">
										No credit card required
									</p>
								</div>
								<div className="mt-12 md:mr-5 pb-12 md:pb-[90px]">
									<div className="flex flex-col items-start justify-center px-4 py-6 bg-white md:pt-5 md:pr-10 md:flex-row md:pl-7 md:pb-9 rounded-2xl">
										<img
											className="w-16 h-16 m-auto"
											src="/assets/heros/person1.svg"
											alt="Person Profile Picture"
										/>
										<div className="mt-4 text-center md:mt-0 md:ml-7 md:text-left">
											<p className=" text-slate-body text-desktop-paragraph">
												“A testimonial that absolutely nails the value
												proposition in a sentence or two”.
											</p>
											<p className="text-[13px] text-slate-body opacity-50 mt-3">
												Cameron Williamson, CEO, Stripe
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="md:w-1/2 md:pl-[117px] order-1 md:order-2">
							<ImageSection />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};










