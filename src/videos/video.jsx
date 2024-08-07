import { useParams } from "@solidjs/router"
import { lazy } from "solid-js"
import { createSignal } from "solid-js"
import { onMount } from "solid-js"
import "./Style.css"

export default function videos() {
	const params = useParams()
	const LazyVideo = lazy(() => import("./VideoComponent"))

	const [data, setData] = createSignal([])
	onMount(async () => {
		try {
			const response = await fetch(
				"https://my0yaokth97n.share.zrok.io/api/data"
			)

			// Проверьте, состояние ответа
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const result = await response.json()
			setData(result.result)
			console.log(result.result)
			console.log(data)
		} catch (error) {
			console.error("Ошибка при получении данных:", error)
			// Вы можете установить отдельное состояние для ошибок, если это необходимо
		}
	})
	return (
		<>
			<div className="animate__animated animate__backInLeft sidebar">
				<br />
				<div className="menu">
					<a href="/">
						<img
							className="animate__animated animate__bounceInDown logo1"
							src="/voobear/logo1.png"
							alt=""
						/>
					</a>
				</div>
				<div className="categories">
					<a href="/">
						<button className="sidebarBtn">
							<i class="fa-solid fa-house"></i>
							<p>Главная</p>
						</button>
					</a>
					<br />
					<button className="sidebarBtn">
						<i class="fa-solid fa-bolt"></i>
						<p>Тренды</p>
					</button>
					<br />
					<button className="sidebarBtn">
						<i class="fa-solid fa-circle"></i>
						<p>Стримы</p>
					</button>
					<br />
				</div>
			</div>
			<div className="player">
				<link rel="preload" href={"/" + params.video} as="video" />
				<LazyVideo data={params.video} />
			</div>
			<div className="infoVideo">
				<div className="title"></div>
			</div>
		</>
	)
}
