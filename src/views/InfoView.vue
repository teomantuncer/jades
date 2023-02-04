<template>
	<div class="intro-view">
		<img class="logo" src="/logo.png" alt="JADES">
		<template v-if="!stage">
			<h1>{{ $t('message') }}</h1>
			<div class="buttons">
				<button @click="yes()">{{ $t('yes') }}</button>
				<button @click="no()">{{ $t('no') }}</button>
			</div>
		</template>
		<template v-if="stage === 1">
			<form>
				<div class="form-control">
					<label for="tcNumber">{{ $t('tcNumber') }}:</label>
					<input v-model="form.tcNumber" disabled type="text" id="tcNumber" :placeholder="$t('pleaseEnterTcNumber')" />
				</div>
				<div class="form-control">
					<label for="name">{{ $t('name') }}:</label>
					<input v-model="form.name" disabled type="text" id="name" :placeholder="$t('pleaseEnterName')" />
				</div>
				<div class="form-control">
					<label for="surname">{{ $t('surname') }}:</label>
					<input v-model="form.surname" disabled type="text" id="surname" :placeholder="$t('pleaseEnterSurname')" />
				</div>
				<div class="form-control">
					<label for="birthyear">{{ $t('birthyear') }}:</label>
					<input v-model="form.birthyear" disabled type="text" id="birthyear" :placeholder="$t('pleaseEnterBirthyear')" />
				</div>
				<div class="form-control">
					<label for="cellNumber">{{ $t('cellNumber') }}:</label>
					<input v-model="form.cellNumber" disabled type="text" id="cellNumber" :placeholder="$t('pleaseEnterCellNumber')" />
				</div>
				<div class="form-control">
					<label for="applicationTermsOfUse">{{ $t('applicationTermsOfUse') }}:</label>
					<textarea type="text" id="applicationTermsOfUse" rows="5">{{ $t('applicationTermsOfUseContent') }}</textarea>
				</div>
				<div class="buttons">
					<button @click="saveAndContinue()">{{ $t('saveAndContinue') }}</button>
				</div>
			</form>
		</template>
		<template v-if="stage === 2">
			<form>
				<div class="form-control">
					<label for="tcNumber">{{ $t('documentSerialNumber') }}:</label>
					<input v-model="form.tcNumber" disabled type="text" id="tcNumber" :placeholder="$t('pleaseEnterTcNumber')" />
				</div>
				<div class="form-control">
					<label for="name">{{ $t('nationality') }}:</label>
					<input v-model="form.nationality" disabled type="text" id="name" :placeholder="$t('pleaseEnterNationality')" />
				</div>
				<div class="form-control">
					<label for="cellNumber">{{ $t('cellNumber') }}:</label>
					<input v-model="form.cellNumber" disabled type="text" id="cellNumber" :placeholder="$t('pleaseEnterCellNumber')" />
				</div>
				<div class="form-control">
					<label for="applicationTermsOfUse">{{ $t('applicationTermsOfUse') }}:</label>
					<textarea type="text" id="applicationTermsOfUse" rows="3">{{ $t('applicationTermsOfUseContent') }}</textarea>
				</div>
				<div class="buttons">
					<button @click="saveAndContinue()">{{ $t('saveAndContinue') }}</button>
				</div>
			</form>
		</template>
	</div>
</template>
<script>
export default {
	name: 'InfoView',
	data() {
		return {
			stage: null,
			form: {
				tcNumber: '12345678910',
				name: 'Ahmet',
				surname: 'Sonuç',
				birthyear: '1988',
				cellNumber: '+90 031 031 31 31',
				nationality: 'KIPRISLI'
			}
		}
	},
	methods: {
		yes() {
			this.stage = 1
		},
		no() {
			this.stage = 2
		},
		saveAndContinue() {
			this.$router.push({ name: 'sms' })
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
</style>
