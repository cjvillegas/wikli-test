<template>
	<div class="user-list-component">
		 <!-- Hero -->
		 <base-page-heading title="Users">
			 <template #extra>
			 	<b-breadcrumb class="breadcrumb-alt">
			 		<b-breadcrumb-item href="javascript:void(0)">Users</b-breadcrumb-item>
			 		<b-breadcrumb-item active>List</b-breadcrumb-item>
			 	</b-breadcrumb>
			 </template>
		</base-page-heading>
    	<!-- END Hero -->

    	<section class="pt-4 pl-6 pr-6">
		    <b-table-simple responsive bordered table-class="table-vcenter">
		    	<b-thead head-variant="dark">
		    		<b-tr>
		    			<b-th class="text-center" style="width: 50px;">ID</b-th>
		    			<b-th>Name</b-th>
		    			<b-th class="d-none d-sm-table-cell">Email</b-th>
		    			<b-th class="text-center">Contact Phone</b-th>
		    		</b-tr>
		    	</b-thead>
		    	<b-tbody>
		    		<b-tr v-for="user in users.slice(0, 6)" :key="user.id">
		    			<b-td class="text-center">
		    				<router-link :to="{name:`User Profile`, params: {id: user.id, user: user}}">{{ user.id }}</router-link>
		    			</b-td>
		    			<b-td class="font-w600 font-size-sm">
		    				{{ user.name }}
		    			</b-td>
		    			<b-td class="font-w600 font-size-sm">
		    				<span class="text-primary">{{ user.email }}</span>
		    			</b-td>
		    			<b-td class="d-none d-sm-table-cell">
		    				<span class="text-primary">{{ user.phone }}</span>
		    			</b-td>
		    			
		    		</b-tr>
		    	</b-tbody>
	    </b-table-simple>
	    </section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: [
					{
						id: 1,
						name: 'Adam McCoy',
						deadLink: 'javascript:void(0)',
						email: 'adam_mccoy@programming.com',
						phone: '(456) 123-7890'
					},
					{
						id: 2,
						name: 'Betty Kelley',
						deadLink: 'javascript:void(0)',
						email: 'betty_kelley@programming.como',
						phone: '(890) 456-1230'
					},
					{
						id: 3,
						name: 'Jesse Fisher',
						deadLink: 'javascript:void(0)',
						email: 'jesse_fisher@programming.com',
						phone: '(123) 456-7890'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	
</style>