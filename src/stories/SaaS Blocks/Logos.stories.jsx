import ArrowRight from '@heroicons/react/outline/ArrowRightIcon';
import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';
export default {
	title: 'SAS Blocks/Logos',
};

export const Logo1 = () => {
	const LogoColumn = ({ image }) => (
		<div className="w-1/2 my-6 md:my-0 md:mx-0">
			<img className="m-auto" alt={'Logo'} src={image} />
		</div>
	);

	return (
		<section className="bg-slate-light font-dm-sans">
			<div className="max-w-default mx-6 py-12 md:py-[90px] md:m-auto">
				<div className="flex flex-col items-center md:flex-row">
					<h5 className="font-normal normal-case md:font-bold text-desktop-subheading md:text-base text-slate-body md:uppercase">
						Used by teams worldwide
					</h5>
					<img
						className="mt-8 ml-8 md:mt-0"
						src="/assets/logos/orangebar.svg"
						alt="Orange Bar"
					/>
				</div>
				<div className="flex flex-wrap mt-12 md:flex-nowrap">
					<LogoColumn image="/assets/logos/twitter.svg" />
					<LogoColumn image="/assets/logos/slack.svg" />
					<LogoColumn image="/assets/logos/dropbox.svg" />
					<LogoColumn image="/assets/logos/github.svg" />
					<LogoColumn image="/assets/logos/airtable.svg" />
					<LogoColumn image="/assets/logos/digitalocean.svg" />
					<LogoColumn image="/assets/logos/notion.svg" />
				</div>
			</div>
		</section>
	);
}


export const Logo2 = () => {

	//import ArrowRight from '@heroicons/react/outline/ArrowRightIcon';

	const LogoColumn = ({ image }) => (
		<div className="w-1/2 my-6 md:my-0 md:mx-0">
			<img className="m-auto" alt={'Logo'} src={image} />
		</div>
	);
	return (
		<section className="bg-slate-light font-dm-sans">
			<div className="max-w-default py-12 md:py-[90px] m-auto">
				<div className="text-center">
					<h1 className="mx-12 text-desktop-subheading md:text-base md:font-bold md:uppercase text-slate-orange">
						Trusted by Industry Leaders
					</h1>
				</div>
				<div className="flex flex-wrap mt-4 md:mt-12 md:flex-nowrap lg:space-y-0">
					<LogoColumn image="/assets/logos/twitter.svg" />
					<LogoColumn image="/assets/logos/slack.svg" />
					<LogoColumn image="/assets/logos/dropbox.svg" />
					<LogoColumn image="/assets/logos/github.svg" />
					<LogoColumn image="/assets/logos/airtable.svg" />
					<LogoColumn image="/assets/logos/notion.svg" />
				</div>
				<div className="flex flex-wrap md:mt-12 md:flex-nowrap lg:space-y-0">
					<LogoColumn image="/assets/logos/microsoft.svg" />
					<LogoColumn image="/assets/logos/netflix.svg" />
					<LogoColumn image="/assets/logos/notion.svg" />
					<LogoColumn image="/assets/logos/zoom.svg" />
					<LogoColumn image="/assets/logos/amazon.svg" />
					<LogoColumn image="/assets/logos/digitalocean.svg" />
				</div>
				<div className="flex justify-center w-full mt-12 md:hidden">
					<button className="py-[10px] px-6 bg-slate-blue rounded-lg text-white filter hover:brightness-125 flex items-center">
						View customer stories
						<ArrowRight className="w-3 ml-3 text-white" />
					</button>
				</div>
			</div>
		</section>
	);
}

export const Logo3 = () => {
	const LogoColumn = ({ image }) => (
		<div className="w-1/2 my-6 transition-all duration-300 md:my-0 md:mx-0 opacity-30 hover:opacity-100">
			<img className="m-auto" alt={'Logo'} src={image} />
		</div>
	);
	return (
		<section className="bg-slate-light font-dm-sans">
			<div className="py-12 md:py-[90px] m-auto  max-w-default">
				<div className="text-center">
					<h1 className="mx-6 text-desktop-subheading md:text-base md:font-bold md:uppercase md:mx-12 text-slate-orange">
						Used by teams worldwide
					</h1>
				</div>
				<div className="flex flex-wrap mt-12 md:flex-nowrap lg:space-y-0">
					<LogoColumn image="/assets/logos/twitter.svg" />
					<LogoColumn image="/assets/logos/slack.svg" />
					<LogoColumn image="/assets/logos/dropbox.svg" />
					<LogoColumn image="/assets/logos/github.svg" />
					<LogoColumn image="/assets/logos/airtable.svg" />
					<LogoColumn image="/assets/logos/digitalocean.svg" />
					<LogoColumn image="/assets/logos/notion.svg" />
				</div>
			</div>
		</section>
	);
}



export const Logo4 = () => {
	//import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';
	const LogoColumn = ({ image }) => (
		<div className="flex items-center justify-center w-1/2 my-2 transition-all duration-300 md:my-0 md:mx-0">
			<div className="flex items-center w-full h-full py-6 mx-2 bg-white rounded-2xl">
				<img className="m-auto" alt={'Logo'} src={image} />
			</div>
		</div>
	);

	const CTAButton = () => (
		<button className="flex items-center justify-center w-full px-6 py-3 space-x-3 transition-all duration-300 bg-transparent border-2 rounded-lg md:w-auto border-slate-blue hover:bg-slate-blue group">
			<span className="transition-all duration-300 text-slate-blue group-hover:text-white">
				View customer stories
			</span>
			<ArrowRightIcon className="w-4 transition-all duration-300 text-slate-blue group-hover:text-white" />
		</button>
	);

	return (
		<section className="min-h-screen bg-slate-light font-dm-sans">
			<div className="max-w-6xl py-24 m-auto">
				<div className="space-y-6 text-center">
					<h2 className="mx-12 text-base uppercase md:font-bold text-slate-orange">
						Success stories
					</h2>
					<h1 className="mx-12 text-[26px] text-slate-body font-medium md:text-[42px]">
						Trusted by the world’s leading companies{' '}
					</h1>
				</div>
				<div className="flex flex-wrap mx-4 mt-12 md:space-x-8 md:flex-nowrap lg:space-y-0">
					<LogoColumn image="/assets/logos/zapiercolor.svg" />
					<LogoColumn image="/assets/logos/slackcolor.svg" />
					<LogoColumn image="/assets/logos/jiracolor.svg" />
					<LogoColumn image="/assets/logos/githubcolor.svg" />
					<LogoColumn image="/assets/logos/trellocolor.svg" />
					<LogoColumn image="/assets/logos/dropboxcolor.svg" />
				</div>
				<div className="flex items-center justify-center mx-6 md:w-auto mt-14">
					<CTAButton />
				</div>
			</div>
		</section>
	);
}
