<template>
	<div class="home-view">
		<img class="logo" src="/logo.png" alt="JADES">
		<h1>{{ $t('smsVerify') }}</h1>
		<form>
			<div class="form-control">
				<label for="code">{{ $t('timeLeftForVerification', { time: mmss() }) }}</label>
				<input v-model="form.code" disabled type="text" id="code" :placeholder="$t('pleaseEnterCode')" />
			</div>
			<div class="buttons">
				<button @click="continueForm()" :disabled="!form.code">{{ $t('continue') }}</button>
				<button @click="sendAgain()" :disabled="!sendAgainState">{{ $t('sendSmsAgain') }}</button>
			</div>
		</form>
	</div>
</template>
<script>
export default {
	name: 'SMSView',
	data() {
		return {
			form: {
				code: '',
			},
			sendAgainState: true,
			timeLeft: 300
		};
	},
	methods: {
		continueForm() {
			this.$router.push({ name: 'home' });
		},
		sendAgain() {
			this.sendAgainState = false
			setTimeout(() => {
				this.sendAgainState = true
			}, 5000)
		},
		mmss() {
			let minutes = Math.floor(this.timeLeft / 60)
			let seconds = this.timeLeft - minutes * 60
			return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
		}
	},
	mounted() {
		setTimeout(() => {
			this.form.code = '3169'
		}, 3000)
		setInterval(() => {
			this.timeLeft = this.timeLeft - 1
		}, 1000)
	}
}
</script>
<style scoped>
</style>
