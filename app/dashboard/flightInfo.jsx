import React from 'react';
import styles from './hotelInfo.module.css';
import Image from 'next/image';
import { airlinesImagesLinks } from '@/data/flight';
const FlightInfo = ({ flight }) => {
	return (
		<div className={styles.packageContainer}>
			<div className={styles.container}>
				<Image
					src={airlinesImagesLinks[flight.airlinesIndex]}
					alt="destination"
					width={1250}
					height={420}
					className={styles.logo}
				/>
			</div>
      <hr />
			<div className={styles.container}>
				<div className={styles.left}>
					<h2>{flight.from}</h2>
					to
					<h2>{flight.to}</h2>
				</div>

				<div className={styles.right}>
					<p>Person</p>
					<h4>{flight.passenger} Person</h4>
				</div>
			</div>
			<hr />
			<div className={styles.container}>
				<div className={styles.left}>
					<p>Price</p>
					<h4>${flight.flightPrice}.00</h4>
				</div>

				<div className={styles.right}>
					<p>Total</p>
					<h2>${flight.flightPrice * flight.passenger}.00</h2>
				</div>
			</div>
			<hr />
			<div className={styles.container}>
				<div className={styles.left}>
					<h2>Date</h2>
					<h4>
						{flight.departing} - {flight.returning}
					</h4>
				</div>

				<div className={styles.right}>
					<p>Status</p>
					<h4>Direct flight</h4>
				</div>
			</div>
		</div>
	);
};

export default FlightInfo;
