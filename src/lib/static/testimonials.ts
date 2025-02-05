type Testimonial = {
	rating: number;
	review: string;
};

// Source: ProductHunt, BetaList, Microlaunch
const testimonials: Testimonial[] = [
	{
		rating: 5,
		review:
			'I am a freelance motion designer and after using Yappa for over a week now I can say that it has improved my workflow. The calendar sync feature in particular is helping me a lot. I highly recommend Yappa to fellow freelancers!'
	},
	{
		rating: 5,
		review:
			"Super impressed with this product. It's clean, quick and simple to use. I have a few different calendars and frequently double booked or missed appointments because they weren't synced. I haven't tried the project tracking functionality yet but plan to start soon."
	},
	{
		rating: 5,
		review: 'Tried, tested, loved it and would definitely recommend it.'
	},
	{
		rating: 5,
		review:
			"As a freelancer, having access to all of Yappa's productivity tools in a single package has helped me stay focused while working for multiple clients!"
	},
	{
		rating: 5,
		review:
			'Yappa is key to properly track my work as a freelancer. Simple and elegant, I love using it!'
	},
	{
		rating: 5,
		review: 'Game changer for freelancers. Love the new contract reviews!'
	},
	{
		rating: 5,
		review:
			'Wow, Yappa has seriously upgraded my freelance game! The booking links are super simple to set up, and the whole platform is a great to use.'
	},
	{
		rating: 5,
		review:
			'Yappa has transformed my freelance workflow! The tools are fantastic, and the founder is incredibly responsive to feedback, constantly improving the user experience. It feels great to be part of a platform that truly values its users.'
	},
	{
		rating: 5,
		review:
			"Yappa has been a game-changer for client communication from a graphic designer's perspective. I can schedule meetings and track my time all in one place, keeping everything organized without the usual back-and-forth. It’s made feedback clearer, revisions faster, and my whole workflow so much smoother."
	}
];

export default testimonials;
