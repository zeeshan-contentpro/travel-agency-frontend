'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import FlightResultCard from './flightResultCard';
import { citiesArray } from '@/data/cities';
import { randomNumberGenerator } from '@/utility/utility';
import FlightBookingModal from './flightBookingModal';

const Flight = ({
	imageUrl = 'https://images.unsplash.com/photo-1532364158125-02d75a0f7fb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}) => {
	const [data, setData] = useState();
	const [showFlightData, setShowFlightData] = useState(false);
	const [showModal, setShowModal] = useState(false);
	function handleChange(event) {
		const { name, value } = event.target;
		setData({ ...data, [name]: value });
	}

	useEffect(() => {
		if (data?.from && data?.to) {
			if (data?.from === data?.to) {
				setShowFlightData(false);
			}
		}
	}, [data]);

	const renderDestinationFrom = () => {
		return (
			<>
				{citiesArray.map((item, i) => {
					return (
						<option key={i} value={item}>
							{item}
						</option>
					);
				})}
			</>
		);
	};

	function searchValidation() {
		if (!data) {
			return false;
		}
		if (data?.from && data?.to && data?.departing && data?.passenger) {
			if (data?.from !== data?.to) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	function renderSearchResultForRandomNumberOfTime() {
		const randomCount = randomNumberGenerator(1, 15);
		const renderArray = Array.from({ length: randomCount });
		return (
			<>
				{renderArray.map((_, index) => (
					<div key={index}>
						<FlightResultCard
							from={data?.from}
							to={data?.to}
							passenger={data?.passenger}
							departing={data?.departing}
							returning={data?.returning}
							showModal={setShowModal}
						/>
					</div>
				))}
			</>
		);
	}

	return (
		<>
			{showModal && <FlightBookingModal showModal={setShowModal}/>}
			<div
				className={styles.main}
				style={{ backgroundImage: `url(${imageUrl})` }}
			>
				<div className={styles.header}>
					<Image
						src={imageUrl}
						alt="destination"
						width={1280}
						height={720}
					/>
					<br />
					<div className={styles.topContainer}>
						<div className={styles.title}>
							<h2 style={{ color: 'white' }}>Where to Fly?</h2>
						</div>
						<br />
						<div className={styles.flightContainer}>
							<div className={styles.top}>
								<div className={styles.left}>
									<div className={styles.inputContainer}>
										<label className={styles.inputLabel} htmlFor="from">Departure</label>
										<select
											name="from"
											className={styles.input}
											onChange={handleChange}
										>
											<option disabled selected hidden>
												Departure
											</option>
											{renderDestinationFrom()}
										</select>
									</div>
									<div className={styles.inputContainer}>
										<label className={styles.inputLabel} htmlFor="to">Destination</label>
										<select
											name="to"
											className={styles.input}
											onChange={handleChange}
										>
											<option disabled selected hidden>
												Destination
											</option>
											{renderDestinationFrom()}
										</select>
									</div>
									<div className={styles.inputContainer}>
										<label className={styles.inputLabel} htmlFor="departing">
											Departing Date
										</label>
										<input
											className={styles.input}
											type="date"
											name="departing"
											onChange={handleChange}
										/>
									</div>
									<div className={styles.inputContainer}>
										<label className={styles.inputLabel} htmlFor="departing">
											Returning Date
										</label>
										<input
											className={styles.input}
											type="date"
											name="returning"
											onChange={handleChange}
										/>
									</div>

									<div className={styles.inputContainer}>
										<label className={styles.inputLabel} htmlFor="passenger">
											Passengers
										</label>
										<select
											name="passenger"
											className={styles.input}
											onChange={handleChange}
										>
											<option disabled selected hidden>
												Passenger
											</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
										</select>
									</div>
								</div>

								<div className={styles.right}>
									<p
										className={styles.button}
										onClick={() =>
											searchValidation()
												? setShowFlightData(true)
												: alert(
														'Please fill all the fields'
												  )
										}
									>
										Search
									</p>
								</div>
							</div>
						</div>
					</div>

					<div
						className={styles.container}
						style={!showFlightData ? { display: 'none' } : {}}
					>
						{renderSearchResultForRandomNumberOfTime()}
					</div>
				</div>
			</div>
		</>
	);
};

export default Flight;
