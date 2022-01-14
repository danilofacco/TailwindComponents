import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';
import MenuIcon from '@heroicons/react/outline/MenuAlt3Icon';
import KeyIcon from '@heroicons/react/outline/KeyIcon';
import XIcon from '@heroicons/react/outline/XIcon';
import MailIcon from '@heroicons/react/outline/MailIcon';
import { useState } from 'react';

export default {
	title: 'SAS Blocks/Sign In pages',
};



export const SignIn1 = () => {
	// import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';
	// import MenuIcon from '@heroicons/react/outline/MenuAlt3Icon';

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
		<section>
			<div className="relative pt-10 m-auto max-w-default">
				<div className="flex items-center justify-between mx-6">
					<div className="">
						<a href="">
							<img
								className="w-[200px] h-[42px] md:w-auto md:h-auto"
								src="/assets/footers/saaslogo.svg"
							/>
						</a>
					</div>
					<div className="md:hidden">
						<MenuIcon onClick={() => setShowMenu(!showMenu)} className="w-6" />
					</div>
				</div>
			</div>
		</section>
	);

	const InputWithLabel = ({ name, type, forgetPassword }) => (
		<div className="flex flex-col space-y-2">
			<div className="flex justify-between">
				<label className="text-base font-medium text-slate-body"> {name} </label>
				{forgetPassword && (
					<label className="text-base font-medium text-slate-body">
						<a href="" className="hover:text-slate-blue">
							Forget Password?
						</a>
					</label>
				)}
			</div>
			<input className="p-3 border-2 rounded-lg" type={type} placeholder="" />
		</div>
	);

	const ContinueButton = () => (
		<button className="flex items-center justify-center w-full px-6 py-4 space-x-2 rounded-lg bg-slate-blue filter hover:brightness-125">
			<span className="text-white"> Sign In </span>
			<ArrowRightIcon className="w-5 text-white" />
		</button>
	);

	const LogoColumn = ({ image }) => (
		<div className="w-full my-6 md:my-0 md:mx-0">
			<img className="w-8 m-auto" alt={'Logo'} src={image} />
		</div>
	);

	const Sidebar = () => (
		<div className="flex flex-col justify-between h-full p-10">
			<div>
				<a href="">
					<img src="/assets/footers/saaslogo.svg" />
				</a>
			</div>
			<div>
				<div className="flex justify-start space-x-12">
					<h1 className="text-base font-bold uppercase text-slate-body">
						{' '}
						Used by teams worldwide{' '}
					</h1>
					<img src="/assets/logos/orangebar.svg" alt="Orange Bar" />
				</div>
				<div className="flex flex-wrap mt-12 md:flex-nowrap lg:space-y-0">
					<LogoColumn image="/assets/logos/twitter.svg" />
					<LogoColumn image="/assets/logos/slack.svg" />
					<LogoColumn image="/assets/logos/dropbox.svg" />
					<LogoColumn image="/assets/logos/github.svg" />
					<LogoColumn image="/assets/logos/airtable.svg" />
				</div>
			</div>
		</div>
	);
	const [showMenu, setShowMenu] = useState(false);
	return (
		<section className="min-h-screen bg-white font-dm-sans">
			<div>
				<div className="md:hidden">
					<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
					{showMenu && <MobileMenu setShowMenu={setShowMenu} />}
				</div>
				<div className="mx-6 md:min-h-screen md:mx-0 md:flex">
					<div className="hidden md:block md:w-1/3 bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
						<Sidebar />
					</div>
					<div className="my-12 md:my-0 md:w-2/3">
						<div className="flex items-center justify-center h-full">
							<div className="w-[574px] max-w-xl space-y-8">
								<h1 className="font-medium text-mobile-h2"> Sign In </h1>
								<InputWithLabel name={'Email'} type={'email'} />
								<InputWithLabel
									forgetPassword
									name={'Password'}
									type={'password'}
								/>
								<ContinueButton />
								<div className="text-left">
									<p className="text-slate-body">
										Don't have an account?{' '}
										<a href="">
											<span className="underline text-slate-blue">
												Register
											</span>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};;


export const SignIn2 = () => {
	// import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';
	// import MenuIcon from '@heroicons/react/outline/MenuAlt3Icon';

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
		<section>
			<div className="relative pt-10 m-auto max-w-default">
				<div className="flex items-center justify-between mx-6">
					<div className="">
						<a href="">
							<img
								className="w-[200px] h-[42px] md:w-auto md:h-auto"
								src="/assets/footers/saaslogo.svg"
							/>
						</a>
					</div>
					<div className="md:hidden">
						<MenuIcon onClick={() => setShowMenu(!showMenu)} className="w-6" />
					</div>
				</div>
			</div>
		</section>
	);

	const InputWithLabel = ({ name, type, forgetPassword }) => (
		<div className="flex flex-col space-y-2">
			<div className="flex justify-between">
				<label className="text-base font-medium text-slate-body"> {name} </label>
				{forgetPassword && (
					<label className="text-base font-medium text-slate-body">
						<a href="" className="hover:text-slate-blue">
							Forget Password?
						</a>
					</label>
				)}
			</div>
			<input className="p-3 border-2 rounded-lg" type={type} placeholder="" />
		</div>
	);

	const ContinueButton = () => (
		<button className="flex items-center justify-center w-full px-6 py-4 space-x-2 rounded-lg bg-slate-blue filter hover:brightness-125">
			<span className="text-white"> Sign In </span>
			<ArrowRightIcon className="w-5 text-white" />
		</button>
	);

	const LogoColumn = ({ image }) => (
		<div className="w-full my-6 md:my-0 md:mx-0 filter invert">
			<img className="w-8 m-auto" alt={'Logo'} src={image} />
		</div>
	);

	const Sidebar = () => (
		<div className="flex flex-col justify-between h-full p-10 bg-black bg-opacity-50">
			<div>
				<img src="/assets/register-pages/saaslogo-white.svg" />
			</div>
			<div>
				<div className="flex justify-start space-x-12">
					<h1 className="text-base font-bold text-white uppercase">
						{' '}
						Used by teams worldwide{' '}
					</h1>
					<img src="/assets/logos/orangebar.svg" alt="Orange Bar" />
				</div>
				<div className="flex flex-wrap mt-12 md:flex-nowrap lg:space-y-0">
					<LogoColumn image="/assets/logos/twitter.svg" />
					<LogoColumn image="/assets/logos/slack.svg" />
					<LogoColumn image="/assets/logos/dropbox.svg" />
					<LogoColumn image="/assets/logos/github.svg" />
					<LogoColumn image="/assets/logos/airtable.svg" />
				</div>
			</div>
		</div>
	);

	const [showMenu, setShowMenu] = useState(false);
	return (
		<section className="min-h-screen bg-white font-dm-sans">
			<div>
				<div className="md:hidden">
					<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
					{showMenu && <MobileMenu setShowMenu={setShowMenu} />}
				</div>
				<div className="mx-6 md:min-h-screen md:mx-0 md:flex">
					<div className="hidden bg-cover md:block md:w-1/3 bg-register-page">
						<Sidebar />
					</div>
					<div className="my-12 md:my-0 md:w-2/3">
						<div className="flex items-center justify-center h-full">
							<div className="w-[574px] max-w-xl space-y-8">
								<h1 className="font-medium text-mobile-h2"> Sign In </h1>
								<InputWithLabel name={'Email'} type={'email'} />
								<InputWithLabel
									forgetPassword
									name={'Password'}
									type={'password'}
								/>
								<ContinueButton />
								<div className="text-left">
									<p className="text-slate-body">
										Don't have an account?{' '}
										<a href="">
											<span className="underline text-slate-blue">
												Register
											</span>
										</a>
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

export const SignIn3 = () => {
	// import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';
	// import MenuIcon from '@heroicons/react/outline/MenuAlt3Icon';

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
		<section>
			<div className="relative py-10 m-auto max-w-default">
				<div className="flex items-center justify-between mx-10">
					<div className="">
						<a href="">
							<img
								className="w-[200px] h-[42px] md:w-auto md:h-auto"
								src="/assets/footers/saaslogo.svg"
							/>
						</a>
					</div>
					<div className="hidden md:space-x-12 md:flex">
						<a href="">
							<p className="text-slate-headline text-desktop-paragraph hover:text-slate-blue">
								{' '}
								Sign up{' '}
							</p>
						</a>
					</div>
					<div className="md:hidden">
						<MenuIcon onClick={() => setShowMenu(!showMenu)} className="w-6" />
					</div>
				</div>
			</div>
		</section>
	);

	const InputWithLabel = ({ name, type }) => (
		<div className="flex flex-col space-y-1">
			<label className="text-base font-medium text-slate-body"> {name} </label>
			<input className="p-3 border-2 rounded-lg md:min-w-[362px]" type={type} placeholder="" />
		</div>
	);

	const ContinueButton = () => (
		<button className="flex items-center justify-center w-full px-6 py-4 space-x-2 rounded-lg bg-slate-blue hover:brightness-125 filter">
			<span className="text-white"> Continue </span>
			<ArrowRightIcon className="w-5 text-white" />
		</button>
	);

	const [showMenu, setShowMenu] = useState(false);
	return (
		<section className="min-h-screen font-dm-sans bg-slate-light">
			<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
			{showMenu && <MobileMenu setShowMenu={setShowMenu} />}
			<div className="mx-6 max-w-default md:m-auto">
				<div className="justify-center md:flex">
					<div>
						<div className="p-6 space-y-6 bg-white md:p-[60px] rounded-3xl md:min-w-[482px]">
							<h2 className="my-2 font-medium text-[32px] text-center">Sign in</h2>
							<InputWithLabel name={'Email'} type={'email'} />
							<InputWithLabel name={'Password'} type={'password'} />
							<ContinueButton />
							<div className="text-center">
								<p className="text-slate-body">
									No account?{' '}
									<a href="">
										<span className="underline text-slate-blue">Sign up</span>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const SignIn4 = () => {
	// import MailIcon from '@heroicons/react/outline/MailIcon';
	// import MenuIcon from '@heroicons/react/outline/MenuAlt3Icon';

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
		<section>
			<div className="relative py-10 m-auto max-w-default">
				<div className="flex items-center justify-between mx-10">
					<div className="">
						<a href="">
							<img
								className="w-[200px] h-[42px] md:w-auto md:h-auto"
								src="/assets/footers/saaslogo.svg"
							/>
						</a>
					</div>
					<div className="hidden md:space-x-12 md:flex">
						<a href="">
							<p className="text-slate-headline text-desktop-paragraph hover:text-slate-blue">
								{' '}
								Sign In{' '}
							</p>
						</a>
					</div>
					<div className="md:hidden">
						<MenuIcon onClick={() => setShowMenu(!showMenu)} className="w-6" />
					</div>
				</div>
			</div>
		</section>
	);

	const SignUpWithGoogleButton = () => (
		<button className="flex items-center justify-center w-full px-6 py-4 border-2 rounded-lg border-slate-blue md:min-w-[362px] group hover:bg-slate-blue transition-all duration-300">
			<img
				className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0"
				src="/assets/cta/googleblue.svg"
			/>
			<span className="w-full transition-all duration-300 text-slate-blue group-hover:text-white">
				{' '}
				Sign In With Google{' '}
			</span>
		</button>
	);

	const SignUpWithFacebookButton = () => (
		<button className="flex items-center justify-center w-full px-6 py-4 border-2 rounded-lg border-slate-blue md:min-w-[362px] group hover:bg-slate-blue transition-all duration-300">
			<img
				className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0"
				src="/assets/cta/facebookblue.svg"
			/>
			<span className="w-full transition-all duration-300 text-slate-blue group-hover:text-white">
				{' '}
				Sign In With Facebook{' '}
			</span>
		</button>
	);

	const SignUpWithMicrosoftButton = () => (
		<button className="flex items-center justify-center w-full px-6 py-4 border-2 rounded-lg border-slate-blue md:min-w-[362px] group hover:bg-slate-blue transition-all duration-300">
			<img
				className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0"
				src="/assets/cta/microsoftblue.svg"
			/>
			<span className="w-full transition-all duration-300 text-slate-blue group-hover:text-white">
				{' '}
				Sign In With Microsoft{' '}
			</span>
		</button>
	);

	const InputWithLabel = ({ name, type }) => (
		<div className="flex flex-col space-y-1">
			<label className="text-base font-medium text-slate-body"> {name} </label>
			<input className="p-3 border-2 rounded-lg md:min-w-[362px]" type={type} placeholder="" />
		</div>
	);

	const ContinueButton = () => (
		<button className="flex items-center justify-center w-full px-6 py-4 space-x-2 rounded-lg bg-slate-blue hover:brightness-125 filter">
			<span className="text-white"> Sign in with email </span>
			<MailIcon className="w-5 text-white" />
		</button>
	);

	const [showMenu, setShowMenu] = useState(false);

	return (
		<section className="min-h-screen font-dm-sans bg-slate-light">
			<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
			{showMenu && <MobileMenu setShowMenu={setShowMenu} />}
			<div className="mx-6 max-w-default md:m-auto">
				<div className="justify-center md:flex">
					<div>
						<div className="p-6 space-y-4 bg-white md:p-[60px] rounded-3xl md:min-w-[482px]">
							<h2 className="my-2 font-medium text-[32px] text-center">Sign in</h2>
							<SignUpWithGoogleButton />
							<SignUpWithFacebookButton />
							<SignUpWithMicrosoftButton />
							<div className="text-center">
								<p className="opacity-50 text-slate-body">or</p>
							</div>

							<ContinueButton />
							<div className="text-center">
								<p className="text-slate-body">
									No account?{' '}
									<a href="">
										<span className="underline text-slate-blue">Sign up</span>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};


export const SignIn5 = () => {
	// import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';
	// import MailIcon from '@heroicons/react/outline/MailIcon';
	// import KeyIcon from '@heroicons/react/outline/KeyIcon';

	const Nav = () => (
		<section>
			<div className="max-w-6xl pt-[72px] pb-[57px] m-auto">
				<div className="flex items-center justify-center mx-10">
					<div className="">
						<img alt="SaaS Logo" src="/assets/footers/saaslogo.svg" />
					</div>
				</div>
			</div>
		</section>
	);

	const InputWithLabel = ({ name, type, icon }) => (
		<div className="flex md:min-w-[362px] flex-col mt-6">
			<label className="text-base font-medium text-slate-body"> </label>
			<div className="flex border-2 rounded-lg">
				{icon}
				<input
					className="w-full p-3 outline-none focus-within:outline-none focus:outline-none"
					type={type}
					placeholder={name}
				/>
			</div>
		</div>
	);

	const ContinueButton = () => (
		<button className="flex items-center justify-center w-full px-6 py-4 space-x-2 rounded-lg bg-slate-blue filter hover:brightness-125">
			<span className="text-white"> Continue </span>
			<ArrowRightIcon className="w-5 text-white" />
		</button>
	);

	return (
		<section className="min-h-screen font-dm-sans bg-slate-light">
			<Nav />
			<div className="mx-6 max-w-default md:m-auto">
				<div className="justify-center md:flex">
					<div>
						<div className="p-6 md:p-[60px] bg-white md:m-auto rounded-3xl md:max-w-[482px]">
							<h2 className="my-2 font-medium text-[32px] text-center">Sign in</h2>
							<InputWithLabel
								name={'Email'}
								type={'email'}
								icon={
									<MailIcon className="text-[#19313C] text-opacity-20 w-5 ml-4 mt-4 mb-4 mr-2" />
								}
							/>
							<InputWithLabel
								name={'Password'}
								type={'password'}
								icon={
									<KeyIcon className="text-[#19313C] text-opacity-20 w-5 ml-4 mt-4 mb-4 mr-2" />
								}
							/>
							<div className="mt-6">
								<ContinueButton />
							</div>
							<div className="mt-6 text-center">
								<p className="text-slate-body">
									No account?{' '}
									<span className="underline text-slate-blue">Sign up</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}





