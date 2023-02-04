import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			language: null,
			info: {}
		}
	},
	mutations: {
		increment(state) {
			state.count++
		}
	}
})
export default store
