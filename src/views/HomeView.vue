<template>
	<div class="home-view">
		<img class="logo" src="/logo.png" alt="JADES">
		<div class="scroll-element">
			<div @click="callHelp" class="scroll-indicator">
				<h1>DESTEK İSTE</h1>
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 101 101" style="enable-background:new 0 0 101 101;" xml:space="preserve" class="svg--circle1 ">
					<circle class="st25" cx="50.5" cy="50.5" r="49.7"></circle>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 140 140" style="enable-background:new 0 0 140 140;" xml:space="preserve" class="svg--circle2 ">
					<circle class="st15" cx="70" cy="70" r="69"></circle>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 180 180" style="enable-background:new 0 0 180 180;" xml:space="preserve" class="svg--circle3 ">
					<circle class="st16" cx="90" cy="90" r="88.9"></circle>
				</svg>
			</div>
		</div>
		<div v-if="help" class="help">
			<div class='dino'></div>
			<div class='eye'></div>
			<div class='mouth'></div>
			<div class='ground'></div>
			<div class='comets'></div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'HomeView',
	data() {
		return {
			help: false
		};
	},
	methods: {
		callHelp() {
			this.help = true
			setTimeout(() => {
				this.help = false
			}, 5000)
		}
	}
}
</script>
<style scoped>
.help {
	background: #fff;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	z-index: 99;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.home-view {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

h1 {
	margin: 0;
	font-size: 1.5rem;
	white-space: pre-wrap;
	max-width: calc(var(--size) / 2);
	line-height: 1.3;
	z-index: 1;
	font-style: normal;
	font-weight: 900;
	animation: Opacity-anim 2s infinite;
	animation-timing-function: ease-in-out;
}

@keyframes Opacity-anim {
	0% {
		font-size: 1.5rem;
	}
	40% {
		font-size: 2rem;
	}
	60% {
		font-size: 1.8rem;
	}
	100% {
		font-size: 1.5rem;
	}
}

.st15 {
	fill: none;
	stroke: #FAFAFA;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-miterlimit: 10;
	stroke-dasharray: 9.687071e-02, 11.6245;
}

.st16 {
	fill: none;
	stroke: #FAFAFA;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-miterlimit: 10;
	stroke-dasharray: 9.579536e-02, 19.1591;
}

.st25 {
	fill: none;
	stroke: #FAFAFA;
	stroke-width: 1.414;
	stroke-miterlimit: 10;
	stroke-dasharray: 4.7293, 4.7293;
}

.scroll-element {
	position: relative;
	overflow: hidden;
}

.scroll-indicator {
	height: var(--size);
	width: var(--size);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.scroll-indicator > * {
	border-radius: 50%;
}

.scroll-indicator .svg--circle1 {
	height: calc(var(--size) * 0.6);
	width: calc(var(--size) * 0.6);
	animation-duration: 12000ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-name: spin_clockwise;
	position: absolute;
}

.scroll-indicator .svg--circle2 {
	height: calc(var(--size) * 0.8);
	width: calc(var(--size) * 0.8);
	animation-duration: 12000ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-name: spin_clockwise;
	position: absolute;
}

.scroll-indicator .svg--circle3 {
	height: var(--size);
	width: var(--size);
	animation-duration: 12000ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-name: spin_clockwise;
	position: absolute;
}

@keyframes spin_clockwise {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}




@-webkit-keyframes eye {
	0% {
		box-shadow:  3em -9em #535353;
	}
	5% {
		box-shadow: 0 0 0 0 #535353;
	}
	50% {
		box-shadow:  0em 0em #535353;
	}
}
@-moz-keyframes eye {
	0% {
		box-shadow:  3em -9em #535353;
	}
	5% {
		box-shadow: 0 0 0 0 #535353;
	}
	50% {
		box-shadow:  0em 0em #535353;
	}
}
@keyframes eye {
	0% {
		box-shadow:  3em -9em #535353;
	}
	5% {
		box-shadow: 0 0 0 0 #535353;
	}
	50% {
		box-shadow:  0em 0em #535353;
	}
}
@-webkit-keyframes mouth {
	0% {
		box-shadow:  6em -4em #535353 , 7em -4em #535353 , 8em -4em #535353;
	}
	50% {
		box-shadow:  5em -3em #535353 , 6em -3em #535353 , 7em -3em #535353 , 8em -3em #535353;
	}
}
@-moz-keyframes mouth {
	0% {
		box-shadow:  6em -4em #535353 , 7em -4em #535353 , 8em -4em #535353;
	}
	50% {
		box-shadow:  5em -3em #535353 , 6em -3em #535353 , 7em -3em #535353 , 8em -3em #535353;
	}
}
@keyframes mouth {
	0% {
		box-shadow:  6em -4em #535353 , 7em -4em #535353 , 8em -4em #535353;
	}
	50% {
		box-shadow:  5em -3em #535353 , 6em -3em #535353 , 7em -3em #535353 , 8em -3em #535353;
	}
}
@-webkit-keyframes comets {
	0% {
		box-shadow:  -23em -23em #535353,  -20em -20em #535353,  -18em -18em #535353,  -17em -17em #535353,  -16em -16em #535353,  -15em -15em #535353,  -13em -14em #535353 , -12em -14em #535353 , -11em -14em #535353,  -14em -13em #535353 , -13em -13em #535353 , -12em -13em #535353 , -11em -13em #535353 , -10em -13em #535353,  -14em -12em #535353 , -13em -12em #535353 , -11em -12em #535353 , -10em -12em #535353,  -14em -11em #535353 , -13em -11em #535353 , -12em -11em #535353 , -11em -11em #535353 , -10em -11em #535353,  -13em -10em #535353 , -12em -10em #535353 , -11em -10em #535353,  -9em -19em #535353,  -8em -18em #535353,  -7em -17em #535353,  -6em -16em #535353 , -5em -16em #535353,  -6em -15em #535353 , -5em -15em #535353;
	}
	33% {
		box-shadow:  -24em -24em #535353,  -21em -21em #535353,  -18em -18em #535353,  -17em -17em #535353,  -16em -16em #535353,  -15em -15em #535353,  -13em -14em #535353 , -12em -14em #535353 , -11em -14em #535353,  -14em -13em #535353 , -13em -13em #535353 , -12em -13em #535353 , -11em -13em #535353 , -10em -13em #535353,  -14em -12em #535353 , -13em -12em #535353 , -11em -12em #535353 , -10em -12em #535353,  -14em -11em #535353 , -13em -11em #535353 , -12em -11em #535353 , -11em -11em #535353 , -10em -11em #535353,  -13em -10em #535353 , -12em -10em #535353 , -11em -10em #535353,  -10em -20em #535353,  -9em -19em #535353,  -8em -18em #535353,  -7em -17em #535353,  -6em -16em #535353 , -5em -16em #535353,  -6em -15em #535353 , -5em -15em #535353;
	}
	66% {
		box-shadow:  -26em -26em #535353,  -22em -22em #535353,  -18em -18em #535353,  -17em -17em #535353,  -16em -16em #535353,  -15em -15em #535353,  -13em -14em #535353 , -12em -14em #535353 , -11em -14em #535353,  -14em -13em #535353 , -13em -13em #535353 , -12em -13em #535353 , -11em -13em #535353 , -10em -13em #535353,  -14em -12em #535353 , -13em -12em #535353 , -11em -12em #535353 , -10em -12em #535353,  -14em -11em #535353 , -13em -11em #535353 , -12em -11em #535353 , -11em -11em #535353 , -10em -11em #535353,  -13em -10em #535353 , -12em -10em #535353 , -11em -10em #535353,  -11em -21em #535353,  -9em -19em #535353,  -8em -18em #535353,  -7em -17em #535353,  -6em -16em #535353 , -5em -16em #535353,  -6em -15em #535353 , -5em -15em #535353;
	}
}
@-moz-keyframes comets {
	0% {
		box-shadow:  -23em -23em #535353,  -20em -20em #535353,  -18em -18em #535353,  -17em -17em #535353,  -16em -16em #535353,  -15em -15em #535353,  -13em -14em #535353 , -12em -14em #535353 , -11em -14em #535353,  -14em -13em #535353 , -13em -13em #535353 , -12em -13em #535353 , -11em -13em #535353 , -10em -13em #535353,  -14em -12em #535353 , -13em -12em #535353 , -11em -12em #535353 , -10em -12em #535353,  -14em -11em #535353 , -13em -11em #535353 , -12em -11em #535353 , -11em -11em #535353 , -10em -11em #535353,  -13em -10em #535353 , -12em -10em #535353 , -11em -10em #535353,  -9em -19em #535353,  -8em -18em #535353,  -7em -17em #535353,  -6em -16em #535353 , -5em -16em #535353,  -6em -15em #535353 , -5em -15em #535353;
	}
	33% {
		box-shadow:  -24em -24em #535353,  -21em -21em #535353,  -18em -18em #535353,  -17em -17em #535353,  -16em -16em #535353,  -15em -15em #535353,  -13em -14em #535353 , -12em -14em #535353 , -11em -14em #535353,  -14em -13em #535353 , -13em -13em #535353 , -12em -13em #535353 , -11em -13em #535353 , -10em -13em #535353,  -14em -12em #535353 , -13em -12em #535353 , -11em -12em #535353 , -10em -12em #535353,  -14em -11em #535353 , -13em -11em #535353 , -12em -11em #535353 , -11em -11em #535353 , -10em -11em #535353,  -13em -10em #535353 , -12em -10em #535353 , -11em -10em #535353,  -10em -20em #535353,  -9em -19em #535353,  -8em -18em #535353,  -7em -17em #535353,  -6em -16em #535353 , -5em -16em #535353,  -6em -15em #535353 , -5em -15em #535353;
	}
	66% {
		box-shadow:  -26em -26em #535353,  -22em -22em #535353,  -18em -18em #535353,  -17em -17em #535353,  -16em -16em #535353,  -15em -15em #535353,  -13em -14em #535353 , -12em -14em #535353 , -11em -14em #535353,  -14em -13em #535353 , -13em -13em #535353 , -12em -13em #535353 , -11em -13em #535353 , -10em -13em #535353,  -14em -12em #535353 , -13em -12em #535353 , -11em -12em #535353 , -10em -12em #535353,  -14em -11em #535353 , -13em -11em #535353 , -12em -11em #535353 , -11em -11em #535353 , -10em -11em #535353,  -13em -10em #535353 , -12em -10em #535353 , -11em -10em #535353,  -11em -21em #535353,  -9em -19em #535353,  -8em -18em #535353,  -7em -17em #535353,  -6em -16em #535353 , -5em -16em #535353,  -6em -15em #535353 , -5em -15em #535353;
	}
}
@keyframes comets {
	0% {
		box-shadow:  -23em -23em #535353,  -20em -20em #535353,  -18em -18em #535353,  -17em -17em #535353,  -16em -16em #535353,  -15em -15em #535353,  -13em -14em #535353 , -12em -14em #535353 , -11em -14em #535353,  -14em -13em #535353 , -13em -13em #535353 , -12em -13em #535353 , -11em -13em #535353 , -10em -13em #535353,  -14em -12em #535353 , -13em -12em #535353 , -11em -12em #535353 , -10em -12em #535353,  -14em -11em #535353 , -13em -11em #535353 , -12em -11em #535353 , -11em -11em #535353 , -10em -11em #535353,  -13em -10em #535353 , -12em -10em #535353 , -11em -10em #535353,  -9em -19em #535353,  -8em -18em #535353,  -7em -17em #535353,  -6em -16em #535353 , -5em -16em #535353,  -6em -15em #535353 , -5em -15em #535353;
	}
	33% {
		box-shadow:  -24em -24em #535353,  -21em -21em #535353,  -18em -18em #535353,  -17em -17em #535353,  -16em -16em #535353,  -15em -15em #535353,  -13em -14em #535353 , -12em -14em #535353 , -11em -14em #535353,  -14em -13em #535353 , -13em -13em #535353 , -12em -13em #535353 , -11em -13em #535353 , -10em -13em #535353,  -14em -12em #535353 , -13em -12em #535353 , -11em -12em #535353 , -10em -12em #535353,  -14em -11em #535353 , -13em -11em #535353 , -12em -11em #535353 , -11em -11em #535353 , -10em -11em #535353,  -13em -10em #535353 , -12em -10em #535353 , -11em -10em #535353,  -10em -20em #535353,  -9em -19em #535353,  -8em -18em #535353,  -7em -17em #535353,  -6em -16em #535353 , -5em -16em #535353,  -6em -15em #535353 , -5em -15em #535353;
	}
	66% {
		box-shadow:  -26em -26em #535353,  -22em -22em #535353,  -18em -18em #535353,  -17em -17em #535353,  -16em -16em #535353,  -15em -15em #535353,  -13em -14em #535353 , -12em -14em #535353 , -11em -14em #535353,  -14em -13em #535353 , -13em -13em #535353 , -12em -13em #535353 , -11em -13em #535353 , -10em -13em #535353,  -14em -12em #535353 , -13em -12em #535353 , -11em -12em #535353 , -10em -12em #535353,  -14em -11em #535353 , -13em -11em #535353 , -12em -11em #535353 , -11em -11em #535353 , -10em -11em #535353,  -13em -10em #535353 , -12em -10em #535353 , -11em -10em #535353,  -11em -21em #535353,  -9em -19em #535353,  -8em -18em #535353,  -7em -17em #535353,  -6em -16em #535353 , -5em -16em #535353,  -6em -15em #535353 , -5em -15em #535353;
	}
}
@-webkit-keyframes ground {
	0% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  8em 8em #535353 , 9em 8em #535353 , 10em 8em #535353,  -7em 9em #535353 , -6em 9em #535353,  6em 10em #535353 , 7em 10em #535353,  -10em 11em #535353 , -9em 11em #535353;
	}
	15% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  4em 8em #535353 , 5em 8em #535353 , 6em 8em #535353,  -12em 9em #535353 , -11em 9em #535353,  2em 10em #535353 , 3em 10em #535353,  10em 11em #535353 , 11em 11em #535353;
	}
	30% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  0em 8em #535353 , 1em 8em #535353 , 2em 8em #535353,  8em 9em #535353 , 9em 9em #535353,  -2em 10em #535353 , -1em 10em #535353,  6em 11em #535353 , 7em 11em #535353;
	}
	45% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  -4em 8em #535353 , -3em 8em #535353 , -2em 8em #535353,  4em 9em #535353 , 5em 9em #535353,  -6em 10em #535353 , -5em 10em #535353,  2em 11em #535353 , 3em 11em #535353;
	}
	60% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  -8em 8em #535353 , -7em 8em #535353 , -6em 8em #535353,  0em 9em #535353 , 1em 9em #535353,  -10em 10em #535353 , -9em 10em #535353,  -2em 11em #535353 , -1em 11em #535353;
	}
	75% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  -12em 8em #535353 , -11em 8em #535353 , -10em 8em #535353,  -4em 9em #535353 , -3em 9em #535353,  10em 10em #535353 , 11em 10em #535353,  -6em 11em #535353 , -5em 11em #535353;
	}
}
@-moz-keyframes ground {
	0% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  8em 8em #535353 , 9em 8em #535353 , 10em 8em #535353,  -7em 9em #535353 , -6em 9em #535353,  6em 10em #535353 , 7em 10em #535353,  -10em 11em #535353 , -9em 11em #535353;
	}
	15% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  4em 8em #535353 , 5em 8em #535353 , 6em 8em #535353,  -12em 9em #535353 , -11em 9em #535353,  2em 10em #535353 , 3em 10em #535353,  10em 11em #535353 , 11em 11em #535353;
	}
	30% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  0em 8em #535353 , 1em 8em #535353 , 2em 8em #535353,  8em 9em #535353 , 9em 9em #535353,  -2em 10em #535353 , -1em 10em #535353,  6em 11em #535353 , 7em 11em #535353;
	}
	45% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  -4em 8em #535353 , -3em 8em #535353 , -2em 8em #535353,  4em 9em #535353 , 5em 9em #535353,  -6em 10em #535353 , -5em 10em #535353,  2em 11em #535353 , 3em 11em #535353;
	}
	60% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  -8em 8em #535353 , -7em 8em #535353 , -6em 8em #535353,  0em 9em #535353 , 1em 9em #535353,  -10em 10em #535353 , -9em 10em #535353,  -2em 11em #535353 , -1em 11em #535353;
	}
	75% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  -12em 8em #535353 , -11em 8em #535353 , -10em 8em #535353,  -4em 9em #535353 , -3em 9em #535353,  10em 10em #535353 , 11em 10em #535353,  -6em 11em #535353 , -5em 11em #535353;
	}
}
@keyframes ground {
	0% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  8em 8em #535353 , 9em 8em #535353 , 10em 8em #535353,  -7em 9em #535353 , -6em 9em #535353,  6em 10em #535353 , 7em 10em #535353,  -10em 11em #535353 , -9em 11em #535353;
	}
	15% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  4em 8em #535353 , 5em 8em #535353 , 6em 8em #535353,  -12em 9em #535353 , -11em 9em #535353,  2em 10em #535353 , 3em 10em #535353,  10em 11em #535353 , 11em 11em #535353;
	}
	30% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  0em 8em #535353 , 1em 8em #535353 , 2em 8em #535353,  8em 9em #535353 , 9em 9em #535353,  -2em 10em #535353 , -1em 10em #535353,  6em 11em #535353 , 7em 11em #535353;
	}
	45% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  -4em 8em #535353 , -3em 8em #535353 , -2em 8em #535353,  4em 9em #535353 , 5em 9em #535353,  -6em 10em #535353 , -5em 10em #535353,  2em 11em #535353 , 3em 11em #535353;
	}
	60% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  -8em 8em #535353 , -7em 8em #535353 , -6em 8em #535353,  0em 9em #535353 , 1em 9em #535353,  -10em 10em #535353 , -9em 10em #535353,  -2em 11em #535353 , -1em 11em #535353;
	}
	75% {
		box-shadow:  -12em 6em #535353 , -11em 6em #535353 , -10em 6em #535353 , -9em 6em #535353 , -8em 6em #535353 , -7em 6em #535353 , -6em 6em #535353 , 4em 6em #535353 , 5em 6em #535353 , 6em 6em #535353 , 7em 6em #535353 , 8em 6em #535353 , 9em 6em #535353 , 10em 6em #535353 , 11em 6em #535353 , 12em 6em #535353,  -12em 8em #535353 , -11em 8em #535353 , -10em 8em #535353,  -4em 9em #535353 , -3em 9em #535353,  10em 10em #535353 , 11em 10em #535353,  -6em 11em #535353 , -5em 11em #535353;
	}
}
@-webkit-keyframes dino {
	0% {
		box-shadow:  2em -10em #535353 , 3em -10em #535353 , 4em -10em #535353 , 5em -10em #535353 , 6em -10em #535353 , 7em -10em #535353 , 8em -10em #535353 , 9em -10em #535353,  1em -9em #535353 , 2em -9em #535353 , 4em -9em #535353 , 5em -9em #535353 , 6em -9em #535353 , 7em -9em #535353 , 8em -9em #535353 , 9em -9em #535353 , 10em -9em #535353,  1em -8em #535353 , 2em -8em #535353 , 3em -8em #535353 , 4em -8em #535353 , 5em -8em #535353 , 6em -8em #535353 , 7em -8em #535353 , 8em -8em #535353 , 9em -8em #535353 , 10em -8em #535353,  1em -7em #535353 , 2em -7em #535353 , 3em -7em #535353 , 4em -7em #535353 , 5em -7em #535353 , 6em -7em #535353 , 7em -7em #535353 , 8em -7em #535353 , 9em -7em #535353 , 10em -7em #535353,  1em -6em #535353 , 2em -6em #535353 , 3em -6em #535353 , 4em -6em #535353 , 5em -6em #535353 , 6em -6em #535353 , 7em -6em #535353 , 8em -6em #535353 , 9em -6em #535353 , 10em -6em #535353,  1em -5em #535353 , 2em -5em #535353 , 3em -5em #535353 , 4em -5em #535353 , 5em -5em #535353,  0em -4em #535353 , 1em -4em #535353 , 2em -4em #535353 , 3em -4em #535353 , 4em -4em #535353 , 5em -4em #535353,  -9em -3em #535353 , -3em -3em #535353 , -2em -3em #535353 , -1em -3em #535353 , 0em -3em #535353 , 1em -3em #535353 , 2em -3em #535353 , 3em -3em #535353 , 4em -3em #535353,  -9em -2em #535353 , -2em -2em #535353 , -1em -2em #535353 , 0em -2em #535353 , 1em -2em #535353 , 2em -2em #535353 , 3em -2em #535353 , 4em -2em #535353,  -9em -1em #535353 , -8em -1em #535353 , -3em -1em #535353 , -2em -1em #535353 , -1em -1em #535353 , 0em -1em #535353 , 1em -1em #535353 , 2em -1em #535353 , 3em -1em #535353 , 4em -1em #535353 , 5em -1em #535353 , 6em -1em #535353,  -9em 0em #535353 , -8em 0em #535353 , -7em 0em #535353 , -4em 0em #535353 , -3em 0em #535353 , -2em 0em #535353 , -1em 0em #535353 , 0em 0em #535353 , 1em 0em #535353 , 2em 0em #535353 , 3em 0em #535353 , 4em 0em #535353 , 6em 0em #535353,  -9em 1em #535353 , -8em 1em #535353 , -7em 1em #535353 , -6em 1em #535353 , -5em 1em #535353 , -4em 1em #535353 , -3em 1em #535353 , -2em 1em #535353 , -1em 1em #535353 , 0em 1em #535353 , 1em 1em #535353 , 2em 1em #535353 , 3em 1em #535353 , 4em 1em #535353,  -8em 2em #535353 , -7em 2em #535353 , -6em 2em #535353 , -5em 2em #535353 , -4em 2em #535353 , -3em 2em #535353 , -2em 2em #535353 , -1em 2em #535353 , 0em 2em #535353 , 1em 2em #535353 , 2em 2em #535353 , 3em 2em #535353 , 4em 2em #535353,  -7em 3em #535353 , -6em 3em #535353 , -5em 3em #535353 , -4em 3em #535353 , -3em 3em #535353 , -2em 3em #535353 , -1em 3em #535353 , 0em 3em #535353 , 1em 3em #535353 , 2em 3em #535353 , 3em 3em #535353,  -6em 4em #535353 , -5em 4em #535353 , -4em 4em #535353 , -3em 4em #535353 , -2em 4em #535353 , -1em 4em #535353 , 0em 4em #535353 , 1em 4em #535353 , 2em 4em #535353,  -5em 5em #535353 , -4em 5em #535353 , -3em 5em #535353 , -2em 5em #535353 , -1em 5em #535353 , 0em 5em #535353 , 1em 5em #535353,  -4em 6em #535353 , -3em 6em #535353 , 0em 6em #535353 , 1em 6em #535353,  -3em 7em #535353 , -2em 7em #535353 , 1em 7em #535353,  1em 8em #535353,  1em 9em #535353 , 2em 9em #535353;
	}
	50% {
		box-shadow:  2em -10em #535353 , 3em -10em #535353 , 4em -10em #535353 , 5em -10em #535353 , 6em -10em #535353 , 7em -10em #535353 , 8em -10em #535353 , 9em -10em #535353,  1em -9em #535353 , 2em -9em #535353 , 4em -9em #535353 , 5em -9em #535353 , 6em -9em #535353 , 7em -9em #535353 , 8em -9em #535353 , 9em -9em #535353 , 10em -9em #535353,  1em -8em #535353 , 2em -8em #535353 , 3em -8em #535353 , 4em -8em #535353 , 5em -8em #535353 , 6em -8em #535353 , 7em -8em #535353 , 8em -8em #535353 , 9em -8em #535353 , 10em -8em #535353,  1em -7em #535353 , 2em -7em #535353 , 3em -7em #535353 , 4em -7em #535353 , 5em -7em #535353 , 6em -7em #535353 , 7em -7em #535353 , 8em -7em #535353 , 9em -7em #535353 , 10em -7em #535353,  1em -6em #535353 , 2em -6em #535353 , 3em -6em #535353 , 4em -6em #535353 , 5em -6em #535353 , 6em -6em #535353 , 7em -6em #535353 , 8em -6em #535353 , 9em -6em #535353 , 10em -6em #535353,  1em -5em #535353 , 2em -5em #535353 , 3em -5em #535353 , 4em -5em #535353 , 5em -5em #535353,  -3em -4em #535353 , -2em -4em #535353 , 0em -4em #535353 , 1em -4em #535353 , 2em -4em #535353 , 3em -4em #535353 , 4em -4em #535353 , 5em -4em #535353,  -9em -3em #535353 , -2em -3em #535353 , -1em -3em #535353 , 0em -3em #535353 , 1em -3em #535353 , 2em -3em #535353 , 3em -3em #535353 , 4em -3em #535353,  -9em -2em #535353 , -2em -2em #535353 , -1em -2em #535353 , 0em -2em #535353 , 1em -2em #535353 , 2em -2em #535353 , 3em -2em #535353 , 4em -2em #535353,  -9em -1em #535353 , -8em -1em #535353 , -3em -1em #535353 , -2em -1em #535353 , -1em -1em #535353 , 0em -1em #535353 , 1em -1em #535353 , 2em -1em #535353 , 3em -1em #535353 , 4em -1em #535353,  -9em 0em #535353 , -8em 0em #535353 , -7em 0em #535353 , -4em 0em #535353 , -3em 0em #535353 , -2em 0em #535353 , -1em 0em #535353 , 0em 0em #535353 , 1em 0em #535353 , 2em 0em #535353 , 3em 0em #535353 , 4em 0em #535353 , 5em 0em #535353 , 6em 0em #535353,  -9em 1em #535353 , -8em 1em #535353 , -7em 1em #535353 , -6em 1em #535353 , -5em 1em #535353 , -4em 1em #535353 , -3em 1em #535353 , -2em 1em #535353 , -1em 1em #535353 , 0em 1em #535353 , 1em 1em #535353 , 2em 1em #535353 , 3em 1em #535353 , 4em 1em #535353 , 6em 1em #535353,  -8em 2em #535353 , -7em 2em #535353 , -6em 2em #535353 , -5em 2em #535353 , -4em 2em #535353 , -3em 2em #535353 , -2em 2em #535353 , -1em 2em #535353 , 0em 2em #535353 , 1em 2em #535353 , 2em 2em #535353 , 3em 2em #535353 , 4em 2em #535353,  -7em 3em #535353 , -6em 3em #535353 , -5em 3em #535353 , -4em 3em #535353 , -3em 3em #535353 , -2em 3em #535353 , -1em 3em #535353 , 0em 3em #535353 , 1em 3em #535353 , 2em 3em #535353 , 3em 3em #535353,  -6em 4em #535353 , -5em 4em #535353 , -4em 4em #535353 , -3em 4em #535353 , -2em 4em #535353 , -1em 4em #535353 , 0em 4em #535353 , 1em 4em #535353 , 2em 4em #535353,  -5em 5em #535353 , -4em 5em #535353 , -3em 5em #535353 , -2em 5em #535353 , -1em 5em #535353 , 0em 5em #535353 , 1em 5em #535353,  -4em 6em #535353 , -3em 6em #535353 , -2em 6em #535353 , 1em 6em #535353 , 2em 6em #535353,  -4em 7em #535353 , -3em 7em #535353,  -4em 8em #535353,  -4em 9em #535353 , -3em 9em #535353;
	}
}
@-moz-keyframes dino {
	0% {
		box-shadow:  2em -10em #535353 , 3em -10em #535353 , 4em -10em #535353 , 5em -10em #535353 , 6em -10em #535353 , 7em -10em #535353 , 8em -10em #535353 , 9em -10em #535353,  1em -9em #535353 , 2em -9em #535353 , 4em -9em #535353 , 5em -9em #535353 , 6em -9em #535353 , 7em -9em #535353 , 8em -9em #535353 , 9em -9em #535353 , 10em -9em #535353,  1em -8em #535353 , 2em -8em #535353 , 3em -8em #535353 , 4em -8em #535353 , 5em -8em #535353 , 6em -8em #535353 , 7em -8em #535353 , 8em -8em #535353 , 9em -8em #535353 , 10em -8em #535353,  1em -7em #535353 , 2em -7em #535353 , 3em -7em #535353 , 4em -7em #535353 , 5em -7em #535353 , 6em -7em #535353 , 7em -7em #535353 , 8em -7em #535353 , 9em -7em #535353 , 10em -7em #535353,  1em -6em #535353 , 2em -6em #535353 , 3em -6em #535353 , 4em -6em #535353 , 5em -6em #535353 , 6em -6em #535353 , 7em -6em #535353 , 8em -6em #535353 , 9em -6em #535353 , 10em -6em #535353,  1em -5em #535353 , 2em -5em #535353 , 3em -5em #535353 , 4em -5em #535353 , 5em -5em #535353,  0em -4em #535353 , 1em -4em #535353 , 2em -4em #535353 , 3em -4em #535353 , 4em -4em #535353 , 5em -4em #535353,  -9em -3em #535353 , -3em -3em #535353 , -2em -3em #535353 , -1em -3em #535353 , 0em -3em #535353 , 1em -3em #535353 , 2em -3em #535353 , 3em -3em #535353 , 4em -3em #535353,  -9em -2em #535353 , -2em -2em #535353 , -1em -2em #535353 , 0em -2em #535353 , 1em -2em #535353 , 2em -2em #535353 , 3em -2em #535353 , 4em -2em #535353,  -9em -1em #535353 , -8em -1em #535353 , -3em -1em #535353 , -2em -1em #535353 , -1em -1em #535353 , 0em -1em #535353 , 1em -1em #535353 , 2em -1em #535353 , 3em -1em #535353 , 4em -1em #535353 , 5em -1em #535353 , 6em -1em #535353,  -9em 0em #535353 , -8em 0em #535353 , -7em 0em #535353 , -4em 0em #535353 , -3em 0em #535353 , -2em 0em #535353 , -1em 0em #535353 , 0em 0em #535353 , 1em 0em #535353 , 2em 0em #535353 , 3em 0em #535353 , 4em 0em #535353 , 6em 0em #535353,  -9em 1em #535353 , -8em 1em #535353 , -7em 1em #535353 , -6em 1em #535353 , -5em 1em #535353 , -4em 1em #535353 , -3em 1em #535353 , -2em 1em #535353 , -1em 1em #535353 , 0em 1em #535353 , 1em 1em #535353 , 2em 1em #535353 , 3em 1em #535353 , 4em 1em #535353,  -8em 2em #535353 , -7em 2em #535353 , -6em 2em #535353 , -5em 2em #535353 , -4em 2em #535353 , -3em 2em #535353 , -2em 2em #535353 , -1em 2em #535353 , 0em 2em #535353 , 1em 2em #535353 , 2em 2em #535353 , 3em 2em #535353 , 4em 2em #535353,  -7em 3em #535353 , -6em 3em #535353 , -5em 3em #535353 , -4em 3em #535353 , -3em 3em #535353 , -2em 3em #535353 , -1em 3em #535353 , 0em 3em #535353 , 1em 3em #535353 , 2em 3em #535353 , 3em 3em #535353,  -6em 4em #535353 , -5em 4em #535353 , -4em 4em #535353 , -3em 4em #535353 , -2em 4em #535353 , -1em 4em #535353 , 0em 4em #535353 , 1em 4em #535353 , 2em 4em #535353,  -5em 5em #535353 , -4em 5em #535353 , -3em 5em #535353 , -2em 5em #535353 , -1em 5em #535353 , 0em 5em #535353 , 1em 5em #535353,  -4em 6em #535353 , -3em 6em #535353 , 0em 6em #535353 , 1em 6em #535353,  -3em 7em #535353 , -2em 7em #535353 , 1em 7em #535353,  1em 8em #535353,  1em 9em #535353 , 2em 9em #535353;
	}
	50% {
		box-shadow:  2em -10em #535353 , 3em -10em #535353 , 4em -10em #535353 , 5em -10em #535353 , 6em -10em #535353 , 7em -10em #535353 , 8em -10em #535353 , 9em -10em #535353,  1em -9em #535353 , 2em -9em #535353 , 4em -9em #535353 , 5em -9em #535353 , 6em -9em #535353 , 7em -9em #535353 , 8em -9em #535353 , 9em -9em #535353 , 10em -9em #535353,  1em -8em #535353 , 2em -8em #535353 , 3em -8em #535353 , 4em -8em #535353 , 5em -8em #535353 , 6em -8em #535353 , 7em -8em #535353 , 8em -8em #535353 , 9em -8em #535353 , 10em -8em #535353,  1em -7em #535353 , 2em -7em #535353 , 3em -7em #535353 , 4em -7em #535353 , 5em -7em #535353 , 6em -7em #535353 , 7em -7em #535353 , 8em -7em #535353 , 9em -7em #535353 , 10em -7em #535353,  1em -6em #535353 , 2em -6em #535353 , 3em -6em #535353 , 4em -6em #535353 , 5em -6em #535353 , 6em -6em #535353 , 7em -6em #535353 , 8em -6em #535353 , 9em -6em #535353 , 10em -6em #535353,  1em -5em #535353 , 2em -5em #535353 , 3em -5em #535353 , 4em -5em #535353 , 5em -5em #535353,  -3em -4em #535353 , -2em -4em #535353 , 0em -4em #535353 , 1em -4em #535353 , 2em -4em #535353 , 3em -4em #535353 , 4em -4em #535353 , 5em -4em #535353,  -9em -3em #535353 , -2em -3em #535353 , -1em -3em #535353 , 0em -3em #535353 , 1em -3em #535353 , 2em -3em #535353 , 3em -3em #535353 , 4em -3em #535353,  -9em -2em #535353 , -2em -2em #535353 , -1em -2em #535353 , 0em -2em #535353 , 1em -2em #535353 , 2em -2em #535353 , 3em -2em #535353 , 4em -2em #535353,  -9em -1em #535353 , -8em -1em #535353 , -3em -1em #535353 , -2em -1em #535353 , -1em -1em #535353 , 0em -1em #535353 , 1em -1em #535353 , 2em -1em #535353 , 3em -1em #535353 , 4em -1em #535353,  -9em 0em #535353 , -8em 0em #535353 , -7em 0em #535353 , -4em 0em #535353 , -3em 0em #535353 , -2em 0em #535353 , -1em 0em #535353 , 0em 0em #535353 , 1em 0em #535353 , 2em 0em #535353 , 3em 0em #535353 , 4em 0em #535353 , 5em 0em #535353 , 6em 0em #535353,  -9em 1em #535353 , -8em 1em #535353 , -7em 1em #535353 , -6em 1em #535353 , -5em 1em #535353 , -4em 1em #535353 , -3em 1em #535353 , -2em 1em #535353 , -1em 1em #535353 , 0em 1em #535353 , 1em 1em #535353 , 2em 1em #535353 , 3em 1em #535353 , 4em 1em #535353 , 6em 1em #535353,  -8em 2em #535353 , -7em 2em #535353 , -6em 2em #535353 , -5em 2em #535353 , -4em 2em #535353 , -3em 2em #535353 , -2em 2em #535353 , -1em 2em #535353 , 0em 2em #535353 , 1em 2em #535353 , 2em 2em #535353 , 3em 2em #535353 , 4em 2em #535353,  -7em 3em #535353 , -6em 3em #535353 , -5em 3em #535353 , -4em 3em #535353 , -3em 3em #535353 , -2em 3em #535353 , -1em 3em #535353 , 0em 3em #535353 , 1em 3em #535353 , 2em 3em #535353 , 3em 3em #535353,  -6em 4em #535353 , -5em 4em #535353 , -4em 4em #535353 , -3em 4em #535353 , -2em 4em #535353 , -1em 4em #535353 , 0em 4em #535353 , 1em 4em #535353 , 2em 4em #535353,  -5em 5em #535353 , -4em 5em #535353 , -3em 5em #535353 , -2em 5em #535353 , -1em 5em #535353 , 0em 5em #535353 , 1em 5em #535353,  -4em 6em #535353 , -3em 6em #535353 , -2em 6em #535353 , 1em 6em #535353 , 2em 6em #535353,  -4em 7em #535353 , -3em 7em #535353,  -4em 8em #535353,  -4em 9em #535353 , -3em 9em #535353;
	}
}
@keyframes dino {
	0% {
		box-shadow:  2em -10em #535353 , 3em -10em #535353 , 4em -10em #535353 , 5em -10em #535353 , 6em -10em #535353 , 7em -10em #535353 , 8em -10em #535353 , 9em -10em #535353,  1em -9em #535353 , 2em -9em #535353 , 4em -9em #535353 , 5em -9em #535353 , 6em -9em #535353 , 7em -9em #535353 , 8em -9em #535353 , 9em -9em #535353 , 10em -9em #535353,  1em -8em #535353 , 2em -8em #535353 , 3em -8em #535353 , 4em -8em #535353 , 5em -8em #535353 , 6em -8em #535353 , 7em -8em #535353 , 8em -8em #535353 , 9em -8em #535353 , 10em -8em #535353,  1em -7em #535353 , 2em -7em #535353 , 3em -7em #535353 , 4em -7em #535353 , 5em -7em #535353 , 6em -7em #535353 , 7em -7em #535353 , 8em -7em #535353 , 9em -7em #535353 , 10em -7em #535353,  1em -6em #535353 , 2em -6em #535353 , 3em -6em #535353 , 4em -6em #535353 , 5em -6em #535353 , 6em -6em #535353 , 7em -6em #535353 , 8em -6em #535353 , 9em -6em #535353 , 10em -6em #535353,  1em -5em #535353 , 2em -5em #535353 , 3em -5em #535353 , 4em -5em #535353 , 5em -5em #535353,  0em -4em #535353 , 1em -4em #535353 , 2em -4em #535353 , 3em -4em #535353 , 4em -4em #535353 , 5em -4em #535353,  -9em -3em #535353 , -3em -3em #535353 , -2em -3em #535353 , -1em -3em #535353 , 0em -3em #535353 , 1em -3em #535353 , 2em -3em #535353 , 3em -3em #535353 , 4em -3em #535353,  -9em -2em #535353 , -2em -2em #535353 , -1em -2em #535353 , 0em -2em #535353 , 1em -2em #535353 , 2em -2em #535353 , 3em -2em #535353 , 4em -2em #535353,  -9em -1em #535353 , -8em -1em #535353 , -3em -1em #535353 , -2em -1em #535353 , -1em -1em #535353 , 0em -1em #535353 , 1em -1em #535353 , 2em -1em #535353 , 3em -1em #535353 , 4em -1em #535353 , 5em -1em #535353 , 6em -1em #535353,  -9em 0em #535353 , -8em 0em #535353 , -7em 0em #535353 , -4em 0em #535353 , -3em 0em #535353 , -2em 0em #535353 , -1em 0em #535353 , 0em 0em #535353 , 1em 0em #535353 , 2em 0em #535353 , 3em 0em #535353 , 4em 0em #535353 , 6em 0em #535353,  -9em 1em #535353 , -8em 1em #535353 , -7em 1em #535353 , -6em 1em #535353 , -5em 1em #535353 , -4em 1em #535353 , -3em 1em #535353 , -2em 1em #535353 , -1em 1em #535353 , 0em 1em #535353 , 1em 1em #535353 , 2em 1em #535353 , 3em 1em #535353 , 4em 1em #535353,  -8em 2em #535353 , -7em 2em #535353 , -6em 2em #535353 , -5em 2em #535353 , -4em 2em #535353 , -3em 2em #535353 , -2em 2em #535353 , -1em 2em #535353 , 0em 2em #535353 , 1em 2em #535353 , 2em 2em #535353 , 3em 2em #535353 , 4em 2em #535353,  -7em 3em #535353 , -6em 3em #535353 , -5em 3em #535353 , -4em 3em #535353 , -3em 3em #535353 , -2em 3em #535353 , -1em 3em #535353 , 0em 3em #535353 , 1em 3em #535353 , 2em 3em #535353 , 3em 3em #535353,  -6em 4em #535353 , -5em 4em #535353 , -4em 4em #535353 , -3em 4em #535353 , -2em 4em #535353 , -1em 4em #535353 , 0em 4em #535353 , 1em 4em #535353 , 2em 4em #535353,  -5em 5em #535353 , -4em 5em #535353 , -3em 5em #535353 , -2em 5em #535353 , -1em 5em #535353 , 0em 5em #535353 , 1em 5em #535353,  -4em 6em #535353 , -3em 6em #535353 , 0em 6em #535353 , 1em 6em #535353,  -3em 7em #535353 , -2em 7em #535353 , 1em 7em #535353,  1em 8em #535353,  1em 9em #535353 , 2em 9em #535353;
	}
	50% {
		box-shadow:  2em -10em #535353 , 3em -10em #535353 , 4em -10em #535353 , 5em -10em #535353 , 6em -10em #535353 , 7em -10em #535353 , 8em -10em #535353 , 9em -10em #535353,  1em -9em #535353 , 2em -9em #535353 , 4em -9em #535353 , 5em -9em #535353 , 6em -9em #535353 , 7em -9em #535353 , 8em -9em #535353 , 9em -9em #535353 , 10em -9em #535353,  1em -8em #535353 , 2em -8em #535353 , 3em -8em #535353 , 4em -8em #535353 , 5em -8em #535353 , 6em -8em #535353 , 7em -8em #535353 , 8em -8em #535353 , 9em -8em #535353 , 10em -8em #535353,  1em -7em #535353 , 2em -7em #535353 , 3em -7em #535353 , 4em -7em #535353 , 5em -7em #535353 , 6em -7em #535353 , 7em -7em #535353 , 8em -7em #535353 , 9em -7em #535353 , 10em -7em #535353,  1em -6em #535353 , 2em -6em #535353 , 3em -6em #535353 , 4em -6em #535353 , 5em -6em #535353 , 6em -6em #535353 , 7em -6em #535353 , 8em -6em #535353 , 9em -6em #535353 , 10em -6em #535353,  1em -5em #535353 , 2em -5em #535353 , 3em -5em #535353 , 4em -5em #535353 , 5em -5em #535353,  -3em -4em #535353 , -2em -4em #535353 , 0em -4em #535353 , 1em -4em #535353 , 2em -4em #535353 , 3em -4em #535353 , 4em -4em #535353 , 5em -4em #535353,  -9em -3em #535353 , -2em -3em #535353 , -1em -3em #535353 , 0em -3em #535353 , 1em -3em #535353 , 2em -3em #535353 , 3em -3em #535353 , 4em -3em #535353,  -9em -2em #535353 , -2em -2em #535353 , -1em -2em #535353 , 0em -2em #535353 , 1em -2em #535353 , 2em -2em #535353 , 3em -2em #535353 , 4em -2em #535353,  -9em -1em #535353 , -8em -1em #535353 , -3em -1em #535353 , -2em -1em #535353 , -1em -1em #535353 , 0em -1em #535353 , 1em -1em #535353 , 2em -1em #535353 , 3em -1em #535353 , 4em -1em #535353,  -9em 0em #535353 , -8em 0em #535353 , -7em 0em #535353 , -4em 0em #535353 , -3em 0em #535353 , -2em 0em #535353 , -1em 0em #535353 , 0em 0em #535353 , 1em 0em #535353 , 2em 0em #535353 , 3em 0em #535353 , 4em 0em #535353 , 5em 0em #535353 , 6em 0em #535353,  -9em 1em #535353 , -8em 1em #535353 , -7em 1em #535353 , -6em 1em #535353 , -5em 1em #535353 , -4em 1em #535353 , -3em 1em #535353 , -2em 1em #535353 , -1em 1em #535353 , 0em 1em #535353 , 1em 1em #535353 , 2em 1em #535353 , 3em 1em #535353 , 4em 1em #535353 , 6em 1em #535353,  -8em 2em #535353 , -7em 2em #535353 , -6em 2em #535353 , -5em 2em #535353 , -4em 2em #535353 , -3em 2em #535353 , -2em 2em #535353 , -1em 2em #535353 , 0em 2em #535353 , 1em 2em #535353 , 2em 2em #535353 , 3em 2em #535353 , 4em 2em #535353,  -7em 3em #535353 , -6em 3em #535353 , -5em 3em #535353 , -4em 3em #535353 , -3em 3em #535353 , -2em 3em #535353 , -1em 3em #535353 , 0em 3em #535353 , 1em 3em #535353 , 2em 3em #535353 , 3em 3em #535353,  -6em 4em #535353 , -5em 4em #535353 , -4em 4em #535353 , -3em 4em #535353 , -2em 4em #535353 , -1em 4em #535353 , 0em 4em #535353 , 1em 4em #535353 , 2em 4em #535353,  -5em 5em #535353 , -4em 5em #535353 , -3em 5em #535353 , -2em 5em #535353 , -1em 5em #535353 , 0em 5em #535353 , 1em 5em #535353,  -4em 6em #535353 , -3em 6em #535353 , -2em 6em #535353 , 1em 6em #535353 , 2em 6em #535353,  -4em 7em #535353 , -3em 7em #535353,  -4em 8em #535353,  -4em 9em #535353 , -3em 9em #535353;
	}
}

.mouth, .eye, .dino {
	width: 1em;
	height: 1em;
}

.dino {
	-webkit-animation: dino 0.25s both steps(1) infinite;
	-moz-animation: dino 0.25s both steps(1) infinite;
	animation: dino 0.25s both steps(1) infinite;
}

.eye {
	-webkit-animation: eye 4s both steps(1) infinite;
	-moz-animation: eye 4s both steps(1) infinite;
	animation: eye 4s both steps(1) infinite;
}

.mouth {
	-webkit-animation: mouth 4s both steps(1) infinite;
	-moz-animation: mouth 4s both steps(1) infinite;
	animation: mouth 4s both steps(1) infinite;
}

.ground {
	-webkit-animation: ground 0.5s both steps(1) infinite;
	-moz-animation: ground 0.5s both steps(1) infinite;
	animation: ground 0.5s both steps(1) infinite;
}

.comets {
	-webkit-animation: comets 0.5s both steps(1) infinite;
	-moz-animation: comets 0.5s both steps(1) infinite;
	animation: comets 0.5s both steps(1) infinite;
}
</style>
