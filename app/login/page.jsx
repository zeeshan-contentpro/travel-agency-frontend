/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await signIn('credentials', {
				email,
				password,
				redirect: false,
			});

			if (res.error) {
				setError('Invalid credentials');
				return;
			}
			router.push('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	const handleClickGoogle = async () => {
		await signIn('google', {
			callbackUrl: '/dashboard',
		});
	};

	const handleClickFacebook = async () => {
		await signIn('facebook', {
			callbackUrl: '/dashboard',
		});
	};

	const { data: session } = useSession({
		required: false,
	});

	useEffect(() => {
		const user = localStorage.getItem('user');
		if (!user) {
			router.push('/login');
		}
	},[])

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.headerContainer}>
					<h1 className={styles.header}>Welcome!</h1>
					<p className={styles.subheader}>
						Welcome to Tavel Buddy! Sign In to continue
					</p>
				</div>

				<div className={styles.inputSocial}>
					<FcGoogle
						className={styles.socialIcon}
						onClick={handleClickGoogle}
					/>
					<FaFacebookF
						className={styles.socialIcon}
						onClick={handleClickFacebook}
					/>
				</div>

				<span className={styles.spanText}>Or Sign In with</span>

				<form onSubmit={handleSubmit} className={styles.inputForm}>
					<div className={styles.inputItems}>
						<label
							htmlFor="email_field"
							className={styles.inputLabel}
						>
							Email
						</label>
						<input
							type="email"
							id="email_field"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="example@gmail.com"
							className={styles.inputItem}
						/>
					</div>
					<div className={styles.inputItems}>
						<label
							htmlFor="password_field"
							className={styles.inputLabel}
						>
							Password
						</label>
						<input
							type="password"
							id="password_field"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Your Password"
							className={styles.inputItem}
						/>
					</div>
					<div className={styles.inputText}></div>
					<button type="submit" className={styles.inputButton}>
						Sign In
					</button>

					{error && (
						<div className={styles.error}>
							<p>{error}</p>
						</div>
					)}

					<p className={styles.bottomText}>
						Don't have an account ?{' '}
						<Link href="/signup" className={styles.inputText}>
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
