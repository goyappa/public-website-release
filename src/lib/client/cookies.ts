import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const cookieConsentConfig: CookieConsentConfig = {
	root: 'body',
	autoShow: true,
	//disablePageInteraction: true,
	hideFromBots: true,
	mode: 'opt-in',
	// revision: 0,

	cookie: {
		name: 'yappa_cc_cookie',
		domain: 'goyappa.com',
		path: '/',
		sameSite: 'Lax',
		expiresAfterDays: 90
	},

	// https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
	guiOptions: {
		consentModal: {
			layout: 'cloud inline',
			position: 'bottom center',
			equalWeightButtons: true,
			flipButtons: false
		},
		preferencesModal: {
			layout: 'box',
			equalWeightButtons: true,
			flipButtons: false
		}
	},

	onFirstConsent: ({ cookie }) => { },

	onConsent: ({ cookie }) => {
		const consentedToClarity = Object.values(cookie.services)
			.flat()
			.some((service) => service === 'clarity');
		try {
			window?.clarity('consent', consentedToClarity);
		} catch (error) {
			console.error('Clarity consent error:', error);
		}
	},

	onChange: ({ changedCategories, changedServices }) => { },

	onModalReady: ({ modalName }) => { },

	onModalShow: ({ modalName }) => { },

	onModalHide: ({ modalName }) => { },

	categories: {
		necessary: {
			enabled: true, // this category is enabled by default
			readOnly: true // this category cannot be disabled
		},
		analytics: {
			autoClear: {
				cookies: [
					{
						name: /^_ga/ // regex: match all cookies starting with '_ga'
					},
					{
						name: '_gid' // string: exact cookie name
					},
					{
						name: '_clck'
					},
					{
						name: '_clsk'
					},
					{
						name: 'CLID'
					},
					{
						name: 'ANONCHK'
					},
					{
						name: 'MR'
					},
					{
						name: 'MUID'
					},
					{
						name: 'SM'
					}
				]
			},

			// https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
			services: {
				clarity: {
					label: 'Microsoft Clarity',
					onAccept: () => { },
					onReject: () => { }
				}
			}
		},
		ads: {}
	},

	language: {
		default: 'en',
		translations: {
			en: {
				consentModal: {
					title: 'We use cookies',
					description:
						'Cookies help us deliver the best experience on our website. By using our website, you agree to the use of cookies. Find out how we use cookies on our website in our privacy policy and cookies policy.',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					showPreferencesBtn: 'Manage individual preferences',
					closeIconLabel: 'Reject all and close modal',
					footer: `
                      <a href="https://goyappa.com/legal/privacy-policy" target="_blank">Privacy Policy</a> <a href="https://goyappa.com/legal/cookies-policy" target="_blank">Cookies Policy</a>
                  `
				},
				preferencesModal: {
					title: 'Manage cookie preferences',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					savePreferencesBtn: 'Accept current selection',
					closeIconLabel: 'Close modal',
					serviceCounterLabel: 'Service|Services',
					sections: [
						{
							title: 'Your privacy choices',
							description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`
						},
						{
							title: 'Strictly necessary',
							description:
								'These cookies are essential for the proper functioning of the website and cannot be disabled.',

							//this field will generate a toggle linked to the 'necessary' category
							linkedCategory: 'necessary',
							cookieTable: {
								caption: 'Cookie table',
								headers: {
									name: 'Cookie',
									domain: 'Domain',
									desc: 'Description'
								},
								body: [
									{
										name: 'yappa_cc_cookie',
										domain: 'goyappa.com',
										desc: 'Stores the user’s cookie consent state for the current domain.'
									}
								]
							}
						},
						{
							title: 'Performance and analytics',
							description:
								'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
							linkedCategory: 'analytics',
							cookieTable: {
								caption: 'Cookie table',
								headers: {
									name: 'Cookie',
									domain: 'Domain',
									desc: 'Description'
								},
								body: [
									{
										name: '_clck',
										domain: 'goyappa.com',
										desc: 'Persists the Clarity User ID and preferences, unique to that site is attributed to the same user ID.'
									},
									{
										name: '_clsk',
										domain: 'goyappa.com',
										desc: 'Connects multiple page views by a user into a single Clarity session recording.'
									},
									{
										name: 'CLID',
										domain: 'www.clarity.ms',
										desc: 'Identifies the first-time Clarity saw this user on any site using Clarity.'
									},
									{
										name: 'ANONCHK',
										domain: 'goyappa.com',
										desc: "Indicates whether MUID is transferred to ANID, a cookie used for advertising. Clarity doesn't use ANID and so this is always set to 0."
									},
									{
										name: 'MR',
										domain: 'goyappa.com',
										desc: 'Indicates whether to refresh MUID.'
									},
									{
										name: 'MUID',
										domain: 'clarity.ms',
										desc: 'Identifies unique web browsers visiting Microsoft sites. These cookies are used for advertising, site analytics, and other operational purposes.'
									},
									{
										name: 'SM',
										domain: 'goyappa.com',
										desc: 'Used in synchronizing the MUID across Microsoft domains.	'
									}
								]
							}
						}
					]
				}
			}
		}
	}
};
