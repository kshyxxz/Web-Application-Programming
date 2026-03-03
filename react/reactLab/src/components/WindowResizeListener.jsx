import { useEffect, useState } from "react";

export default function WindowResizeListener() {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div>
			<p>Window inner width : {width}</p>
		</div>
	);
}
