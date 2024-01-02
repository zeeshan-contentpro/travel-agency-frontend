import React from 'react';
import styles from './flightBookingModal.module.css';
import Image from 'next/image';
import { airlinesImagesLinks } from '@/data/flight';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
export default function FlightBookingModal({showModal}) {
  const router = useRouter();
	const { data: session } = useSession();

	if (!localStorage.getItem('flightBookingStatus')) {
		return null;
	}
  const flightInfo = JSON.parse(
    localStorage.getItem('flightBookingStatus')
  );

  const onConfirmHandler = () => {
    if (session?.user){
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }
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
				<div className={styles.btnContainer}>
					<button className={styles.button} onClick={onConfirmHandler}>Confirm</button>
					<button className={styles.buttonCancel} onClick={()=>showModal(false)}>Cancel</button>
				</div>

			</div>
		</div>
	);
}
