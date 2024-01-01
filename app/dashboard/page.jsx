'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import styles from './page.module.css';
import HotelInfo from './hotelInfo';
import FlightInfo from './flightInfo';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
	const { data: session } = useSession();
	const [hotelData, setHotelData] = useState(null);
	const [flightData, setFlightData] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const user = localStorage.getItem('userId');
		if (!user) {
			router.push('/login');
		}
	}, []);

	useEffect(() => {
		// Retrieve data from localStorage
		const dataFromLocalStorage = localStorage.getItem('hotelInfo');
		if (dataFromLocalStorage) {
			const parsedData = JSON.parse(dataFromLocalStorage);
			setHotelData(parsedData);
		}
		const dataFromLocalStorage2 = localStorage.getItem(
			'flightBookingStatus'
		);
		if (dataFromLocalStorage2) {
			const parsedData = JSON.parse(dataFromLocalStorage2);
			setFlightData(parsedData);
		}
	}, []);

	return (
		<div className={styles.main}>
			<h1>Dashboard</h1>
			<div className={styles.profile}>
				<div>
					<Image
						src={session?.user.image || '/logo.svg'}
						alt=""
						height={100}
						width={100}
						className={styles.profileImage}
					/>
				</div>
				<div>
					<h3>Hello {session?.user?.name}</h3>
					<p>{session?.user?.email}</p>
					{/* <p>{session?.user?.phone}</p> */}
				</div>
			</div>

			<div className={styles.bookedContainer}>
				<h2>Your Booked Package Details</h2>
				<hr />
				<div className={styles.bookedData}>
					{hotelData ? (
						<HotelInfo hotel={hotelData} />
					) : (
						<p>No Package booked yet.</p>
					)}
				</div>
			</div>

			<div className={styles.bookedContainer}>
				<h2>Your Booked Flight Details</h2>
				<hr />
				<div className={styles.bookedData}>
					{flightData ? (
						<FlightInfo flight={flightData} />
					) : (
						<p>No Flight booked yet.</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
