<template>
	<div class="user-profile-component">
		 <!-- Hero -->
		 <base-page-heading title="Users">
			 <template #extra>
			 	<b-breadcrumb class="breadcrumb-alt">
			 		<b-breadcrumb-item href="#/users/list">Users</b-breadcrumb-item>
			 		<b-breadcrumb-item>Profile</b-breadcrumb-item>
			 		<b-breadcrumb-item active>{{ user ? user.name : null }}</b-breadcrumb-item>
			 	</b-breadcrumb>
			 </template>
		</base-page-heading>
    	<!-- END Hero -->

    	<section class="pt-4 pl-6 pr-6">
			<base-block title="Primary Darker" header-class="bg-primary-darker" themed>
	         	<div class="row">
	         		<div class="col-md-6">
	         			<p><b>Name: {{ user ? user.name : '' }}</b></p>
	         			<p><b>Email: {{ user ? user.email : '' }}</b></p>
	         		</div>

	         		<div class="col-md-6">
	         			<p><b>Phone Number: {{ user ? user.phone : '' }}</b></p>
	         			<p><b>Clients Website: N/A</b></p>
	         		</div>
	         	</div>  
	        </base-block>

	        <b-tabs 
	        	class="block mt-5" 
	        	nav-class="nav-tabs-block" 
	        	content-class="block-content"
	        	@change="tabChange">
	        	<b-tab title="Assessments" :active="activeTab === 'assessments'"  @click="tabChange('assessments')">
	        		<user-assessments></user-assessments>
	        	</b-tab>
	        	<b-tab title="Reports" :active="activeTab === 'reports'" @click="tabChange('reports')">
	        		<user-Reports></user-Reports>
	        	</b-tab>
	        </b-tabs>
        </section>
	</div>
</template>

<script>
	import UserReports from '~/views/pages/users/UserReports'
	import UserAssessments from '~/views/pages/users/UserAssessments'

	export default {
		data() {
			return {
				user: null,
				activeTab: null,
			}
		},
		components: {
			UserReports,
			UserAssessments
		},
		created() {
			if (!this.$route.params.user) {
				this.$router.push({path: '/users/list'});

				return
			}

			this.user = this.$route.params.user

			if (!this.$route.params.activeTab) {
				this.activeTab = 'assessments'

				this.modifyRoute()
			}
        },
        methods: {
        	tabChange(tab) {
	        	this.activeTab = tab

	        	this.modifyRoute()
	        },
	        modifyRoute() {
	        	let lowerCased = this.activeTab.toLowerCase()
        		let upperCased = `${lowerCased[0].toUpperCase()}${lowerCased.slice(1)}`

	        	let name = `User ${upperCased}`
	        	this.$router.push({name: name, params: {id: this.user.id, user: this.user, activeTab: this.activeTab}})
	        	// window.history.replaceState('', `Market Happer | Businesses`, `#${val.id}`)
	        }
        }
	}
</script>

<style lang="scss">
	
</style>