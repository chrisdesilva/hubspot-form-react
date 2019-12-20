import React, { useEffect, useState } from 'react';

const HubspotFormReact = (props) => {
	const [ email, setEmail ] = useState('');
	const [ thankYou, showThankYou ] = useState(false);
	const [ IP, setIP ] = useState('');
	const dataFields = [ { name: 'email', value: `${email}` } ];

	// Get IP address from client for Hubspot analytics
	async function fetchIP() {
		const res = await fetch('https://ip.nf/me.json');
		res.json().then((res) => setIP(res.ip.ip)).catch((err) => console.log(err));
	}

	useEffect(() => {
		fetchIP();
		if (props.fields) {
			const customFields = props.fields.map((field) => {
				return {
					name: field.name,
					value: field.value
				};
			});
			dataFields.concat(customFields);
		}
	}, []);

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

		const data = {
			fields: dataFields,
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
		props.onSubmit();
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
			{props.fields && (
				<div className={props.divClass}>
					{props.fields.map((field) => {
						return (
							<input
								type={field.type}
								id={field.name}
								name={field.name}
								value={field.value}
								placeholder={field.name}
								readOnly
							/>
						);
					})}
				</div>
			)}
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
