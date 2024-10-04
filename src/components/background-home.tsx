'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface BlurImageWithTextProps {
	src: string
	alt: string
	logo?: string
	initialBlurDelay?: number
	textAppearDelay?: number
}

export function BlurImageWithText({
	src,
	logo,
	alt,
	initialBlurDelay = 2000,
	textAppearDelay = 4000
}: BlurImageWithTextProps) {
	const [isBlurred, setIsBlurred] = useState(false)
	const [showText, setShowText] = useState(false)
	const [isAnimating, setIsAnimating] = useState(true)

	useEffect(() => {
		const blurTimeout = setTimeout(() => {
			setIsBlurred(true)
		}, initialBlurDelay)

		const textTimeout = setTimeout(() => {
			setShowText(true)

			setTimeout(() => {
				setIsAnimating(false)
			}, 1000)
		}, textAppearDelay)

		return () => {
			clearTimeout(blurTimeout)
			clearTimeout(textTimeout)
		}
	}, [initialBlurDelay, textAppearDelay])

	return (
		<div className="relative h-full w-full">
			<div
				className={`absolute inset-0 bg-zinc-900 transition-opacity duration-1000 ${
					isBlurred ? 'opacity-80' : 'opacity-0'
				}`}
			/>
			<Image
				alt={alt}
				className={`h-full w-full object-cover transition-all duration-1000 ${
					isBlurred ? 'blur-md opacity-30' : 'blur-0'
				}`}
				quality={100}
				fill
				src={src}
			/>
			{showText && logo && (
				<div className="absolute inset-0 flex flex-col items-center justify-center gap-20">
					<div className="flex flex-col mt-52 items-center text-center">
						<Image
							width={320}
							height={200}
							alt={alt}
							className={`object-cover transition-all mb-10 opacity-0 duration-1000 ${
								isAnimating ? 'opacity-0' : 'opacity-100'
							}`}
							quality={100}
							src={logo}
						/>
						<h1
							className={` tracking-[4px] opacity-0 text-white transition-opacity duration-1000 ${
								isAnimating ? 'opacity-0' : 'opacity-100 '
							}`}
						>
							finanças para a vida.
						</h1>
					</div>
					<div className="mt-52">
						<Image
							width={52}
							height={52}
							alt={alt}
							className={`object-cover transition-all opacity-0 duration-1000 ${
								isAnimating ? ' opacity-0' : 'opacity-100'
							}`}
							quality={100}
							src={require('@/assets/ico-home.png')}
						/>
					</div>
				</div>
			)}
		</div>
	)
}
