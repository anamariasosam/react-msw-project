export default function LoadingSpinner() {
	return (
		<div className="flex justify-center items-center h-64">
			<svg
				data-testid="loading-spinner"
				width="200px"
				height="200px"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
				className="lds-ripple"
			>
				<circle
					cx="50"
					cy="50"
					r="36.978"
					fill="none"
					stroke="#FFA3D7"
					strokeWidth="2"
				>
					<animate
						attributeName="r"
						calcMode="spline"
						values="0;40"
						keyTimes="0;1"
						dur="1"
						keySplines="0 0.2 0.8 1"
						begin="-0.5s"
						repeatCount="indefinite"
					></animate>
					<animate
						attributeName="opacity"
						calcMode="spline"
						values="1;0"
						keyTimes="0;1"
						dur="1"
						keySplines="0.2 0 0.8 1"
						begin="-0.5s"
						repeatCount="indefinite"
					></animate>
				</circle>
				<circle
					cx="50"
					cy="50"
					r="19.2193"
					fill="none"
					stroke="#FF80CC"
					strokeWidth="2"
				>
					<animate
						attributeName="r"
						calcMode="spline"
						values="0;40"
						keyTimes="0;1"
						dur="1"
						keySplines="0 0.2 0.8 1"
						begin="0s"
						repeatCount="indefinite"
					></animate>
					<animate
						attributeName="opacity"
						calcMode="spline"
						values="1;0"
						keyTimes="0;1"
						dur="1"
						keySplines="0.2 0 0.8 1"
						begin="0s"
						repeatCount="indefinite"
					></animate>
				</circle>
			</svg>
		</div>
	)
}
