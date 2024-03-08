import { Link } from 'react-router-dom'
import imageUrl from '../assets/colombia.png'

export default function Hero() {
	return (
		<div className="fl w-100 w-50-l">
			<div className="pa4 pa3-ns ph4-ns">
				<h2 className="fw9 f3 db">Cambiemos la historia de nuestro país:</h2>
				<h2 className="fw9 f3 db mb3 mb4-ns pb2 f3 fw7 mt0 ttu georgia bb bb--black db">
					Comprando Colombiano
				</h2>

				<p className="lh-copy mt2 mt3-l f4">
					Los diseños nacionales están marcando tendencia, no solo por su
					belleza, sino por su excelente calidad, cada producto tiene su
					historia que, al ser colombiana, nos indentifica y nos hace sentir
					orgullosos.
				</p>
				<p className="lh-copy mt2 mt3-l f4">
					Una compra no es solo una transacción comercial, es también una
					transacción de poder. Cuando compramos, estamos dándole poder
					económico a la causa detrás de la personas que nos vende un producto o
					servicio.
				</p>
				<p className="lh-copy mt2 mt3-l f4">
					Apoyemos los emprendimientos locales
					<b> #ComprandoColombiano</b>
					<img
						src={imageUrl}
						alt="compra colombiano"
						className="h2 v-mid mb1"
					/>
				</p>
				<p className="lh-copy mt2 mt3-l f4">
					¿Conoces algún emprendimiento colombiano que te gustaría ver en el
					directorio de tiendas? &nbsp;
					<Link
						rel="noopener noreferrer"
						to="/agregar-al-directorio"
						className="f4 fw6 black link hover-gold underline-hover"
					>
						Registralo aquí
					</Link>
				</p>
			</div>
		</div>
	)
}
