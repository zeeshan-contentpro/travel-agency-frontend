import React from 'react';
import styles from './FlightBookingModal.module.css';
import Image from 'next/image';
import { airlinesImagesLinks } from '@/data/flight';
export default function FlightBookingModal() {
	if (!localStorage.getItem('flightBookingStatus')) {
		return null;
	}
  const flightInfo = JSON.parse(
    localStorage.getItem('flightBookingStatus')
  );

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<h2>Confirm Flight Booking</h2>
				<br />
				<Image
					src={airlinesImagesLinks[flightInfo.airlinesIndex]}
					alt="destination"
					width={1250}
					height={420}
					className={styles.logo}
				/>
				<br />
				<p>
					Flight Price: <b>${flightInfo?.flightPrice}.00</b>
				</p>
				<br />
				<p>
					Departure: <b>{flightInfo?.from}</b>
				</p>
				<p>Arrival: <b>{flightInfo?.to}</b> </p>
				<p>Departing: <b>{flightInfo?.departing}</b> </p>
				<p>Returning: <b>{flightInfo?.returning}</b> </p>
				<p>Passengers: <b>{flightInfo?.passenger}</b> </p>
				<br />
				<button className={styles.button}>Confirm</button>
			</div>
		</div>
	);
}
