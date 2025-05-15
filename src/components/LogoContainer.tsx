import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";

function LogoContainer() {
	return (
		<div>
			<a href="https://vite.dev" target="_blank" rel="noreferrer">
				<img src={viteLogo} className="logo" alt="Vite logo" />
			</a>
			<a href="https://react.dev" target="_blank" rel="noreferrer">
				<img src={reactLogo} className="logo react" alt="React logo" />
			</a>
		</div>
	);
}

export default LogoContainer;
