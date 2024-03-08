import Image from '../components/Image'
import Hero from '../components/Hero'

const topImages = [
	{
		store: 'fehandbags',
		url: '//images.ctfassets.net/8dn2sxbm6d1v/2zHLJZMTxvWlBqY48dqAew/dd726a2cb8ced6c2a1dd3e068cfbdfe0/fehandbags.jpg',
	},
	{
		store: 'parchitapcf',
		url: '//images.ctfassets.net/8dn2sxbm6d1v/ecxUZuP59Dtpkf9tdYbwx/ed49d080a79a1438e70771f4b19d50d4/parchita.jpg',
	},
	{
		store: 'accesoriosavemaria',
		url: '//images.ctfassets.net/8dn2sxbm6d1v/6CGwaWRvq8BcgZNGPqGAtg/aa46c991c76356731c477ad579802a9d/avemaria.jpg',
	},
	{
		store: 'ziggys_spot',
		url: '//images.ctfassets.net/8dn2sxbm6d1v/5z4fLiPu3R0OTQOec1XDGx/06aa778febe824c8bfd0c2387907a6f6/ziggys_spot.jpg',
	},
]

const bottomImages = [
	{
		store: 'amecosmeticos',
		url: '//images.ctfassets.net/8dn2sxbm6d1v/41U9rrr4ulZgIxCDI0Tz5f/203736467c954340bed649d5e980166f/amecosmeticos.jpg',
	},
	{
		store: 'bionica_co',
		url: '//images.ctfassets.net/8dn2sxbm6d1v/5GJ46ldyRhTCBvfTAJwZUO/f4faa43adc097d18f3a629146e76960b/bionica.jpg',
	},
	{
		store: 'costera_bw',
		url: '//images.ctfassets.net/8dn2sxbm6d1v/4rUFM3R8wquFFKlty1YFh5/28879374d5e13a2c4984f0cd9d67047e/costera.jpg',
	},
	{
		store: 'animalista_',
		url: '//images.ctfassets.net/8dn2sxbm6d1v/6cgI3ORiHBKxpyVnYGb2u2/2bcb8de42794e87e582b8b116e58b921/animalista.jpg',
	},
]

const createImage = (images: typeof topImages) =>
	images.map((image, index) => (
		<Image
			imgUrl={image.url}
			store={image.store}
			key={image.store}
			width={index === 1 ? 50 : 25}
		/>
	))

const topImagesList = createImage(topImages)
const bottomImagesList = createImage(bottomImages)

export default function Home() {
	return (
		<main className="w-100 cf dark-gray pa3 pa4-l mw9 center">
			{topImagesList}

			<Hero />

			{bottomImagesList}
		</main>
	)
}
