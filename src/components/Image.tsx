type ImageProps = {
	imgUrl: string
	width: number
	store: string
}

const Image = ({ imgUrl, width, store }: ImageProps) => {
	const image = {
		backgroundColor: '#FFDFDF',
		backgroundImage: `url(${imgUrl})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	}

	const classes = `fl pv1 ph1 w-50 w-${width}-l`

	return (
		<div className={classes}>
			<div className="cover pv5 pv6-m pv7-l hide-child" style={image}>
				<span className="di v-mid w-100 h-100 child bg-black-80 ph4-ns pv3-ns pa2">
					<a
						href={`https://www.instagram.com/${store}/`}
						className="f5 white link"
						target="_blank"
						rel="noopener noreferrer"
					>
						@{store}
					</a>
				</span>
			</div>
		</div>
	)
}

export default Image
