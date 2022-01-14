export default {
	title: 'SAS Blocks/Footers',
};

export const Footer1 = () => (
	<footer className="bg-slate-light font-dm-sans">
		<div className="py-12 md:py-[90px] mx-6 max-w-default md:m-auto">
			<div className="items-center md:space-x-12 md:flex">
				<img src="/assets/footers/saaslogo.svg" />
				<p className="mt-6 text-sm font-normal md:mt-0 md:w-1/5 text-slate-body">
					ZipBooks theme makes it easy to start your next SaaS landing page.{' '}
				</p>
			</div>
			<hr className="my-6" />
			<div className="flex justify-between">
				<p> Copyright 2021 </p>
				<div className="flex space-x-10">
					<img src="/assets/footers/twitter.svg" />
					<img src="/assets/footers/facebook.svg" />
					<img src="/assets/footers/youtube.svg" />
				</div>
			</div>
		</div>
	</footer>
);

export const Footer2 = () => (
	<footer className="bg-slate-light font-dm-sans">
		<div className="py-12 md:py-[90px] mx-10 max-w-default md:m-auto">
			<hr className="hidden md:block mb-11" />
			<div>
				<div className="md:space-x-12 md:flex">
					<div className="w-full">
						<div className="md:my-0">
							<img className="h-12" src="/assets/footers/saaslogo.svg" />
							<p className="my-8 text-base text-slate-heading">
								ZipBooks theme makes it easy to start your next SaaS landing page.
							</p>
							<div>
								<div className="flex justify-between">
									<img src="/assets/footers/twitter.svg" />
									<img src="/assets/footers/facebook.svg" />
									<img src="/assets/footers/youtube.svg" />
									<p className="text-sm font-normal text-slate-body">
										Copyright 2021
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full mt-12 md:mt-0">
						<div>
							<p className="text-xl font-medium text-slate-headline">
								Why SaaS Blocks?
							</p>
							<ul className="mt-[42px] space-y-4">
								<a href="#">
									<li className="mt-4 text-base font-normal ">Highly flexible</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">Copy & paste</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">
										Any layout imaginable
									</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">
										Get started faster
									</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">
										Focus on what matters
									</li>
								</a>
							</ul>
						</div>
					</div>
					<div className="w-full mt-10 md:mt-0">
						<div>
							<p className="text-xl font-medium text-slate-headline">
								Why not other themes?
							</p>
							<ul className="mt-[42px] space-y-4">
								<a href="#">
									<li className="mt-4 text-base font-normal">
										Made specifically for SaaS
									</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">
										Bigger variety of blocks
									</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">
										Continously expanded
									</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">
										Webflow coming soon
									</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">HTML coming soon</li>
								</a>
							</ul>
						</div>
					</div>
					<div className="w-full mt-10 md:mt-0">
						<div>
							<p className="text-xl font-medium text-slate-headline">Company</p>
							<ul className="mt-[42px] space-y-4">
								<a href="#">
									<li className="mt-4 text-base font-normal">About</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">Contact</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">Privacy</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">Terms</li>
								</a>
								<a href="#">
									<li className="mt-4 text-base font-normal">Contact</li>
								</a>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
);



export const Footer3 = () => {
	const CookieBanner = () => (
		<div>
			<div className="flex px-4 py-3 bg-white rounded-full space-x-7 md:min-w-[460px]">
				<img src="/assets/footers/cookie.svg" />
				<p className="text-sm font-normal text-slate-body">
					By using our website you agree to our <u>cookie</u> policy.
				</p>
			</div>
		</div>
	);
	return (
		<footer className="bg-slate-light font-dm-sans">
			<div className="max-w-default py-12 md:py-[90px] mx-6 md:m-auto">
				<div>
					<div className="md:space-x-12 md:flex text-slate-headline">
						<div className="w-full">
							<div className="md:my-0">
								<img className="h-8" src="/assets/footers/saaslogo.svg" />
							</div>
						</div>
						<div className="w-full mt-[42px] md:mt-0">
							<div>
								<p className="text-base font-medium uppercase">Why SaaS Blocks?</p>
								<ul className="mt-6 space-y-4">
									<a href="">
										<li className="mt-4 text-sm font-normal">Highly flexible</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">Copy & paste</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">
											Any layout imaginable
										</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">Get started faster</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">
											Focus on what matters
										</li>
									</a>
								</ul>
							</div>
						</div>
						<div className="w-full  mt-[42px] md:mt-0">
							<div>
								<p className="text-base font-medium uppercase">Benefits</p>
								<ul className="mt-6 space-y-4">
									<a href="">
										<li className="mt-4 text-sm font-normal">
											Made specifically for SaaS
										</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">
											Bigger variety of blocks
										</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">
											Continously expanded
										</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">
											Webflow coming soon
										</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">HTML coming soon</li>
									</a>
								</ul>
							</div>
						</div>
						<div className="w-full mt-[42px] md:mt-0">
							<div>
								<p className="text-base font-medium uppercase">Company</p>
								<ul className="mt-6 space-y-4">
									<a href="">
										<li className="mt-4 text-sm font-normal">About</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">Contact</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">Privacy</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">Terms</li>
									</a>
									<a href="">
										<li className="mt-4 text-sm font-normal">Contact</li>
									</a>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-6 mt-[60px] md:space-x-6 md:flex md:space-y-0">
					<div className="flex items-center space-x-6">
						<p className="text-[13px]">© SaaS Blocks</p>
						<p className="text-[13px]">Terms</p>
						<p className="text-[13px]">Privacy</p>
					</div>
					<CookieBanner />
				</div>
			</div>
		</footer>
	);

}
