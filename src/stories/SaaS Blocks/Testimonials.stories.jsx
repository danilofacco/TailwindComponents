export default {
	title: 'SAS Blocks/Testimonials',
};

export const Testimonial1 = () => {
	const TestimonialCard = ({ image }) => (
		<div className="w-full transition-all duration-300 bg-white rounded-2xl md:rounded-3xl hover:shadow-sm max-w-[362px]">
			<div className="p-5">
				<div className="flex justify-center max-w-[362px]">
					<img className="w-[50px] h-[50px] mr-[7px]" src={image} />
					<div className="space-y-2 text-left ml-[7px]">
						<p className="text-base leading-normal text-slate-body">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit, a
							volutpat enim.
						</p>
						<p className="text-sm opacity-50 text-slate-body">
							Cameron Williamson, CEO, Stripe
						</p>
					</div>
				</div>
			</div>
		</div>
	);

	const VideoTemplate = ({ background }) => (
		<div
			className={`relative rounded-2xl md:rounded-3xl min-h-[475px] w-full bg-cover ${background}`}
		>
			<div className="min-h-[475px] relative rounded-2xl md:rounded-3xl w-full bg-gradient-to-t from-black via-transparent to-transparent mix-blend-hard-light flex items-center justify-center group cursor-pointer">
				<img
					className="transition-all duration-300 w-11 h-11 group-hover:w-14 group-hover:h-14"
					src="/assets/testimonials/playbutton.png"
				/>{' '}
				<div className="absolute text-left left-4 bottom-4">
					<p className="px-4 py-4 text-white ">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
					</p>
				</div>
			</div>
		</div>
	);


	return (
		<section className="py-12 md:py-[90px] bg-slate-light font-dm-sans">
			<div className="text-center">
				<section className="mx-6 space-y-4 md:mx-0">
					<h5 className="text-base font-bold tracking-wider uppercase text-slate-orange ">
						We Love Our Customers
					</h5>
					<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 ">
						And they seem to love us
					</h2>
				</section>
				<section className="mx-6 md:mx-0 mt-[75px]">
					<div className="items-center justify-center max-w-6xl m-auto md:flex space-y-7 md:space-y-0 md:space-x-7 ">
						<div id={'left'} className="md:w-1/3 space-y-7">
							<TestimonialCard image={'/assets/testimonials/author1.png'} />
							<VideoTemplate background={'bg-person1'} />
							<TestimonialCard image={'/assets/testimonials/author2.png'} />
						</div>
						<div id={'center'} className="md:w-1/3 space-y-7">
							<VideoTemplate background={'bg-person2'} />
							<TestimonialCard image={'/assets/testimonials/author1.png'} />
							<VideoTemplate background={'bg-person3'} />
						</div>
						<div id={'right'} className="md:w-1/3 space-y-7">
							<TestimonialCard image={'/assets/testimonials/author1.png'} />
							<VideoTemplate background={'bg-person1'} />
							<TestimonialCard image={'/assets/testimonials/author2.png'} />
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}


export const Testimonial2 = () => (
	<section className="py-12 md:py-[90px] bg-slate-light">
		<div className="text-center">
			<section className="max-w-[720px] mx-6 md:m-auto">
				<h5 className="text-base font-bold tracking-wider uppercase text-slate-orange font-dm-sans">
					We Love Our Customers
				</h5>
				<h2 className="mt-4 md:mt-[18px] font-medium text-mobile-h2 md:text-desktop-h2 font-dm-sans">
					And they seem to love us
				</h2>
			</section>
			<section className="mx-6 mt-8 md:mt-[55px]">
				<div className="items-center justify-center md:max-w-default md:m-auto md:flex space-y-[30px] md:space-y-0 md:space-x-[30px]">
					<div className="relative rounded-2xl md:rounded-3xl min-h-[475px] w-full bg-cover bg-person1">
						<div className="min-h-[475px] m-auto relative rounded-2xl md:rounded-3xl w-full bg-gradient-to-t from-slate-headline via-transparent to-transparent mix-blend-hard-light flex items-center justify-center group cursor-pointer">
							<img
								className="transition-all duration-300 w-11 h-11 group-hover:w-14 group-hover:h-14"
								src="/assets/testimonials/playbutton.png"
							/>{' '}
							<div className="absolute text-left left-4 bottom-4">
								<p className="px-4 py-4 text-white font-dm-sans">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
								</p>
							</div>
						</div>
					</div>
					<div className="relative rounded-2xl md:rounded-3xl min-h-[475px] w-full bg-cover bg-person2">
						<div className="min-h-[475px] relative rounded-2xl md:rounded-3xl w-full bg-gradient-to-t from-slate-headline via-transparent to-transparent mix-blend-hard-light flex items-center justify-center group cursor-pointer">
							<img
								className="transition-all duration-300 w-11 h-11 group-hover:w-14 group-hover:h-14"
								src="/assets/testimonials/playbutton.png"
							/>{' '}
							<div className="absolute text-left left-4 bottom-4">
								<p className="px-4 py-4 text-white font-dm-sans">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
								</p>
							</div>
						</div>
					</div>
					<div className="relative rounded-2xl md:rounded-3xl min-h-[475px] w-full bg-cover bg-person3">
						<div className="min-h-[475px] relative rounded-2xl md:rounded-3xl w-full bg-gradient-to-t from-slate-headline via-transparent to-transparent mix-blend-hard-light flex items-center justify-center group cursor-pointer">
							<img
								className="transition-all duration-300 w-11 h-11 group-hover:w-14 group-hover:h-14"
								src="/assets/testimonials/playbutton.png"
							/>{' '}
							<div className="absolute text-left left-4 bottom-4">
								<p className="px-4 py-4 text-white font-dm-sans">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
);



export const Testimonial3 = () => {
	const TestimonialCard = ({ image }) => (
		<div className="w-full transition-all duration-300 bg-white rounded-2xl md:rounded-3xl hover:shadow-sm">
			<div className="p-5">
				<div className="flex justify-center max-w-[362px]">
					<img className="w-[50px] h-[50px] mr-[7px]" src={image} />
					<div className="text-left ml-[7px]">
						<p className="text-base leading-snug font-dm-sans text-slate-body">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit, a
							volutpat enim, massa id. Vestibulum faucibus.
						</p>
						<p className="text-sm mt-[6px] opacity-50 font-dm-sans text-slate-body">
							Cameron Williamson, CEO, Stripe
						</p>
					</div>
				</div>
			</div>
		</div>
	);
	return (
		<section className="py-12 md:py-[90px] bg-slate-light mb-6">
			<div className="text-center">
				<section className="max-w-[720px] md:m-auto mx-6">
					<h5 className="text-base font-bold tracking-wider uppercase text-slate-orange font-dm-sans">
						We Love Our Customers
					</h5>
					<h2 className="font-medium mt-4 md:mt-[18px] text-mobile-h2 md:text-desktop-h2 font-dm-sans">
						And they seem to love us
					</h2>
				</section>
				<section className="mt-8 md:mt-[55px]">
					<div className="mx-6 space-y-6 md:m-auto max-w-default">
						<div className="md:flex space-y-[30px] lg:space-y-0 lg:space-x-[30px]">
							<TestimonialCard image={'/assets/testimonials/author1.png'} />
							<TestimonialCard image={'/assets/testimonials/author2.png'} />
							<TestimonialCard image={'/assets/testimonials/author3.png'} />
						</div>
						<div className="md:flex space-y-7 lg:space-y-0 lg:space-x-7">
							<TestimonialCard image={'/assets/testimonials/author4.png'} />
							<TestimonialCard image={'/assets/testimonials/author5.png'} />
							<TestimonialCard image={'/assets/testimonials/author6.png'} />
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
export const Testimonial4 = () => (
	<section className="py-12 md:py-[90px] bg-slate-light">
		<div className="text-center">
			<section className="max-w-[720px] mx-6 md:m-auto">
				<h5 className="text-base font-bold tracking-wider uppercase text-slate-orange font-dm-sans">
					We Love Our Customers
				</h5>
				<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 mt-4 md:mt-[18px] font-dm-sans">
					And they seem to love us
				</h2>
			</section>
			<section className="mt-8 md:mt-[55px] mx-6">
				<div className="items-center justify-center max-w-[754px] m-auto lg:flex space-y-[30px] lg:space-y-0 lg:space-x-[30px]">
					<div className="relative px-[52px] py-[75px] bg-white rounded-3xl">
						<p className="absolute top-6 left-8 text-left text-slate-body opacity-10 text-[72px] leading-none font-dm-sans italic">
							"
						</p>
						<div>
							<div>
								<div className="relative flex items-center justify-center">
									<img
										className="w-16 h-16"
										src="/assets/testimonials/author1.png"
									/>
								</div>
							</div>
							<p className="mt-6 font-dm-sans text-slate-body text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit,
								a volutpat enim, massa id. Vestibulum faucibus.
							</p>
							<p className="mt-6 text-sm opacity-50 font-dm-sans text-slate-body">
								Cameron Williamson, CEO, Stripe
							</p>
						</div>
					</div>
					<div className="relative px-[52px] py-[75px] bg-white rounded-3xl">
						<p className="absolute top-6 left-8 text-left text-slate-body opacity-10 text-[72px] leading-none font-dm-sans italic">
							"
						</p>
						<div>
							<div>
								<div className="relative flex items-center justify-center">
									<img
										className="w-16 h-16"
										src="/assets/testimonials/author2.png"
									/>
								</div>
							</div>
							<p className="mt-6 font-dm-sans text-slate-body text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit,
								a volutpat enim, massa id. Vestibulum faucibus.
							</p>
							<p className="mt-6 text-sm opacity-50 font-dm-sans text-slate-body">
								Cameron Williamson, CEO, Stripe
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
);

export const Testimonial5 = () => (
	<section className="py-12 md:py-[90px] bg-slate-light font-dm-sans">
		<div className="text-center">
			<section className="max-w-[720px] mx-6 md:m-auto space-y-4">
				<h5 className="text-base font-bold tracking-wider uppercase text-slate-orange font-dm-sans">
					We Love Our Customers
				</h5>
				<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 font-dm-sans">
					And they seem to love us
				</h2>
			</section>
			<section className="mx-6 mt-8 md:mt-[55px]">
				<div className="max-w-[754px] m-auto bg-white rounded-2xl">
					<div className="flex px-6 py-12 md:px-24 md:py-[76px]">
						<div className="space-y-6">
							<div>
								<div className="relative flex items-center justify-center">
									<img
										className="w-16 h-16"
										src="/assets/testimonials/author1.png"
									/>
								</div>
								<p className="text-left text-slate-body opacity-10 text-[72px] leading-[0px] font-dm-sans italic">
									"
								</p>
							</div>
							<p className="font-dm-sans text-slate-body text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit,
								a volutpat enim, massa id. Vestibulum faucibus.
							</p>
							<p className="text-sm tracking-wider opacity-50 font-dm-sans text-slate-body">
								Cameron Williamson, CEO, Stripe
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
);



