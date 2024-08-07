import { createSignal } from "solid-js"
import "animate.css"
import "./App.css"
import { onMount } from "solid-js"
import Test from "./videos/video"
function App() {
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
						<button className="active">
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
				<div className="settingsButton">
					<i class="fa-solid fa-gear"></i>
				</div>
				<div className="closeButton">
					<i class="fa-solid fa-bars"></i>
				</div>
			</div>

			<div className="videos">
				{data().map((item) => (
					<div className="animate__animated animate__slideInDown video1">
						<div className="titles">
							<a href={"voobear/" + "video" + "/" + item.id + item.video}>
								<img src={item.image} alt="" />
							</a>
							<div className="avatar">
								<img
									src="/voobear/chanel1.jpg"
									alt=""
									width="42px"
									height="42px"
								/>
							</div>
							<p className="title">{item.title}</p>
						</div>
						<div className="chanelName">
							<p>Ker</p>
							<i class="fa-solid fa-circle-check"></i>
						</div>
						<div className="info">
							<p>2 Млрд просмотров</p>
							<i class="fa-solid fa-circle"></i>
							<p className="timeUp">1 день назад</p>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
export default App
