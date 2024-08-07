import { memo, Suspense } from "solid-js/web"
export default function VideoComponent(props) {
	return (
		<>
			<link rel="preload" href={"/" + props.data} as="video" />
			<Suspense fallback={<div>Загрузка...</div>}>
				<video
					preload="metadata"
					controls
					src={"/voobear" + "/" + props.data}
				></video>
			</Suspense>
		</>
	)
}
