import { createRouter, createWebHashHistory } from 'vue-router'
import store from './store.js'
import IntroView from './views/IntroView.vue'
import InfoView from './views/InfoView.vue'
import HomeView from './views/HomeView.vue'
import SMSView from './views/SMSView.vue'

const routes = [
	{ name: 'home', path: '/', component: HomeView },
	{ name: 'intro', path: '/intro', component: IntroView },
	{ name: 'info', path: '/info', component: InfoView },
	{ name: 'sms', path: '/sms', component: SMSView }
]
const router = createRouter({
	history: createWebHashHistory(),
	routes
})
router.beforeEach((to, from) => {
	if (!store.state.language && to.name !== 'intro') {
		return { name: 'intro' }
	}
	return
})
export default router
