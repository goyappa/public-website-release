type FAQ = {
	question: string;
	answer: string;
};

const faqs: FAQ[] = [
	{
		question: 'What calendars can I use with Yappa?',
		answer:
			'Yappa supports Google and Microsoft calendars, ensuring you can integrate all your schedules seamlessly.'
	},
	{
		question: 'How many calendars can I connect to Yappa?',
		answer: 'As many as you want! Yappa does not limit the number of accounts you can connect.'
	},
	{
		question: 'How long does it take for calendar updates to show up in Yappa?',
		answer:
			'Most updates will show up within a minute. However, some updates may take up to 5 minutes.'
	},
	{
		question: 'Can I use Yappa without connecting a calendar account?',
		answer:
			"Yes, you can use Yappa without connecting a calendar account. However, you will only be able to use a subset of Yappa's features, namely Time Tracking, Projects and Contract Reviews. To use the full set of features, you will need to connect at least one calendar account."
	},
	{
		question: 'Can I try Yappa without committing to a subscription?',
		answer:
			'Yes, you can try Yappa for free for 14 days without providing a credit card. To continue using Yappa after the trial period, you must add a credit card to your billing details.'
	},
	{
		question: "Are the reviews generated with Yappa's Contract Reviews feature legal advice?",
		answer:
			'While the Contract Reviews feature is designed to help users get a better understanding of their contracts, the reviews are not a substitute for legal advice. Always consult a legal professional before signing any contract.'
	}
];

export default faqs;
