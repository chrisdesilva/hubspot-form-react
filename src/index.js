import React, { useEffect, useState } from 'react';

const HubspotFormReact = (props) => {
	const [ email, setEmail ] = useState('');
	const [ thankYou, showThankYou ] = useState(false);
	const [ IP, setIP ] = useState('');

	// Get IP address from client for Hubspot analytics
	async function fetchIP() {
		const res = await fetch('https://ip.nf/me.json');
		res.json().then((res) => setIP(res.ip.ip)).catch((err) => console.log(err));
	}

	useEffect(() => {
		fetchIP();
	});

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `https://api.hsforms.com/submissions/v3/integration/submit/${props.portalId}/${props.formId}`;

		// hsCookie gets the data necessary to track Hubspot analytics
		const hsCookie = document.cookie.split(';').reduce((cookies, cookie) => {
			const [ name, value ] = cookie.split('=').map((c) => c.trim());
			cookies[name] = value;
			return cookies;
		}, {});

		//   field names are all set to match internal values on Hubspot
		const data = {
			fields: [
				{
					name: `email`,
					value: `${email}`
				}
				// {
				// 	name: `${props.name2}`,
				// 	value: `${props.value2}`
				// },
				// {
				// 	name: `${props.name3}`,
				// 	value: `${props.value3}`
				// },
				// {
				// 	name: `${props.name4}`,
				// 	value: `${props.value4}`
				// },
				// {
				// 	name: `${props.name5}`,
				// 	value: `${props.value5}`
				// }
			],
			context: {
				hutk: hsCookie.hubspotutk,
				pageUri: `${props.pageUri}`,
				pageName: `${props.pageName}`,
				ipAddress: `${IP}`
			}
		};

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((response) => console.log('success', response))
			.catch((error) => console.log('error: ', error));
		showThankYou(true);
		setEmail('');
	};

	return (
		<form className={props.formClass} onSubmit={handleSubmit}>
			<label htmlFor="email">Email address</label>
			<input
				className={props.inputClass}
				type="email"
				name="email"
				placeholder="Enter your email address"
				onChange={handleChange}
				value={email}
				required
			/>
			{/* <div style={{ display: 'none' }}>
				<input type="text" name={props.name2} value={props.value2} readOnly />
				<input type="text" name={props.name3} value={props.value3} readOnly />
				<input type="text" name={props.name4} value={props.value4} readOnly />
				<input type="text" name={props.name5} value={props.value5} readOnly />
			</div> */}
			{thankYou ? (
				<p>{props.submitMessage}</p>
			) : (
				<input
					className={props.submitButtonClass}
					value={props.submitButtonValue}
					id={props.submitButtonId}
					type="submit"
				/>
			)}
		</form>
	);
};
export default HubspotFormReact;
