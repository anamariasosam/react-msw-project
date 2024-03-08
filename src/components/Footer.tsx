export default function Footer() {
	return (
		<footer className="pv4 ph3 ph5-m ph6-l mid-gray">
			<small className="f4 db tc ttu b roboto">
				- Apoya el talento local -
			</small>
			<div className="tc mt3">
				<p className="f5 b lh-solid">
					Hecho con 🩷 por una &nbsp;
					<a
						href="https://www.x.com/anamariasosam/"
						className="link b hot-pink ttu"
					>
						colombiana
					</a>
				</p>
				<p className="f5 db lh-solid ttu">
					© {new Date().getFullYear()} Comprando Colombiano
				</p>
			</div>
		</footer>
	)
}
