import React, { useEffect } from 'react';
import styles from './flightResultCard.module.css';
import Image from 'next/image';
import { randomNumberGenerator } from '../../utility/utility';
import { IoAirplaneSharp } from 'react-icons/io5';
import { airlinesImagesLinks } from '@/data/flight';
import FlightBookingModal from './flightBookingModal';
export default function FlightResultCard({
	from,
	to,
	departing,
	returning,
	passenger,
	showModal,
}) {
	const economyPrice = randomNumberGenerator(1000, 5000);
	const businessPrice = randomNumberGenerator(5000, 10000);
	const firstClassPrice = randomNumberGenerator(10000, 15000);
	const getAirlinesLogoIndex = randomNumberGenerator(
		0,
		airlinesImagesLinks.length - 1
	);

	const randomTime = () => {
		let hrs = Math.round(Math.random() * 24);
		let mins = Math.round(Math.random() * 60);
		var hFormat = hrs < 10 ? '0' : '';
		var mFormat = mins < 10 ? '0' : '';
		var amPm = hrs < 12 ? 'AM' : 'PM';
		var is12 = hrs % 12 === 0;

		return amPm === 'AM' && !is12
			? String(hFormat + hrs + ':' + mFormat + mins + ' ' + amPm)
			: 'AM' && is12
			? String(12 + ':' + mFormat + mins + ' ' + amPm)
			: is12
			? String(hFormat + hrs + ':' + mFormat + mins + ' ' + amPm)
			: String(hFormat + (hrs - 12) + ':' + mFormat + mins + ' ' + amPm);
	};
	const renderPrice = (price) => {
		return (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '5px',
					marginBottom: '10px',
				}}
			>
				<h3 className={styles.price}>${price}.00</h3>
				<small style={{ color: 'gray' }}>only</small>
			</div>
		);
	};
	const onFlightSelectHandler = (price) => {
		const flightBookingStatus = {
			from: from,
			to: to,
			departing: departing,
			returning: returning,
			passenger: passenger,
			airlinesIndex: getAirlinesLogoIndex,
			flightPrice: price,
		}
		localStorage.setItem(
			'flightBookingStatus',
			JSON.stringify(flightBookingStatus)
		);
		showModal(true);
	};
	return (
		<>
			<div className={styles.main}>
				<div className={styles.box1}>
					<Image
						src={airlinesImagesLinks[getAirlinesLogoIndex]}
						alt="destination"
						width={1250}
						height={420}
						className={styles.logo}
					/>
					<br />
					<div className={styles.infoContainer}>
						<div>
							<p>{from}</p>
							<h3>{randomTime()}</h3>
						</div>
						<div className={styles.icon}>
							<IoAirplaneSharp />
							<small className={styles.small}>
								Direct flight
							</small>
						</div>

						<div>
							<p>{to}</p>
							<h3>{randomTime()}</h3>
						</div>
					</div>
					<div className={styles.date}>
						<small>Departing: {departing}</small>
						{returning && <small>Returning: {returning}</small>}
					</div>
				</div>
				<div className={styles.box}>
					<div
						className={styles.info}
						onClick={() => onFlightSelectHandler(economyPrice)}
					>
						<h5>Economy</h5>
						{renderPrice(economyPrice)}

						<p>Handbag: Not more than 7 kg</p>
						<p>Sky star mile</p>
						<p>Non smoking cabin</p>
						<small className={styles.small}>
							{randomNumberGenerator(10, 20)} Seats available
						</small>
					</div>
				</div>
				<div className={styles.box}>
					<div
						className={styles.info}
						onClick={() => onFlightSelectHandler(businessPrice)}
					>
						<h5>Business</h5>
						{renderPrice(businessPrice)}

						<p>Handbag: Not more than 8 kg</p>
						<p>Sky star mile</p>
						<p>Non smoking cabin</p>
						<small className={styles.small}>
							{randomNumberGenerator(10, 20)} Seats available
						</small>
					</div>
				</div>
				<div className={styles.box}>
					<div
						className={styles.info}
						onClick={() => onFlightSelectHandler(firstClassPrice)}
					>
						<h5>First class</h5>
						{renderPrice(firstClassPrice)}

						<p>Handbag: Not more than 10 kg</p>
						<p>Sky star mile</p>
						<p>Non smoking cabin</p>
						<small className={styles.small}>
							{randomNumberGenerator(10, 20)} Seats available
						</small>
					</div>
				</div>
			</div>
		</>
	);
}
