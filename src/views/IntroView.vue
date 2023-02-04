<template>
	<div class="intro-view">
		<img class="logo" src="/logo.png" alt="JADES">
		<ul>
			<li @click="chooseLanguage('tr')">Türkçe</li>
			<li @click="chooseLanguage('en')">English</li>
			<li @click="chooseLanguage('de')">Deutsch</li>
			<li @click="chooseLanguage('ru')">Русский</li>
			<li @click="chooseLanguage('ku')">Kurmançî</li>
			<li @click="chooseLanguage('ja')">日本語</li>
			<li @click="chooseLanguage('ko')">한국어</li>
			<li @click="chooseLanguage('cn')">中文</li>
			<li @click="chooseLanguage('ar')">العربية</li>
			<li @click="chooseLanguage('pt')">Português</li>
			<li @click="chooseLanguage('it')">Italiano</li>
			<li @click="chooseLanguage('fr')">Français</li>
			<li @click="chooseLanguage('es')">Español</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'IntroView',
	methods: {
		chooseLanguage(language) {
			this.$i18n.locale = language
			this.$router.push({ name: 'info' })
			this.$store.state.language = language
			document.documentElement.classList.remove('rtl')
			if (language === 'ar') {
				document.documentElement.classList.add('rtl')
			}
		}
	}
}
</script>
<style scoped>
.intro-view {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
}
ul {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	font-style: italic;
	text-transform: uppercase;
}
li {
	flex: 1 1 calc(50% - 1rem);
	background: linear-gradient(to bottom,black,#8d0304);
	font-weight: bolder;
	margin-bottom: 2rem;
	margin-right: 1rem;
	padding: .5rem 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
li:first-child {
	flex: 2 1 100%
}
li:nth-child(2n+1) {
	margin-right: 0;
}
.rtl li:nth-child(2n) {
	margin-left: 1rem;
	margin-right: 0;
}
</style>
