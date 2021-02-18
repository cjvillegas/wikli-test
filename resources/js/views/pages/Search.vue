<style>
  .block-header-default {
    background-color: #0b2f66 !important;
    margin: 0 10px;
    max-height: 500px !important;
    overflow: auto !important;
    border: 1px solid #e3e6db;
  }
  .block-title, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
      color: white !important;
      text-transform: capitalize;
  }
  .table thead th {
    background: #0b2f66 !important;
    border: none !important;
    color: white !important;
    text-transform: capitalize !important;
  }

  .block-content {
  }

  .col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 10px !important;
    padding-top: 10px !important;
  }
</style>

<template>
<div style="background: white">
    <!-- Results -->
    <base-block title="Users" header-bg>
        <b-row class="text-center">
        <b-col sm="5" lg="5">
        </b-col>
        <b-col sm="7" lg="7">
            <b-row>
                <b-col sm="4" lg="4">
                    <div class="content">
                        <b-form @submit.stop.prevent>
                            <b-input-group>
                                <b-form-input class="form-control" placeholder="Search.."></b-form-input>
                                <template #append>
                                    <b-input-group-text>
                                        <i class="fa fa-fw fa-search"></i>
                                    </b-input-group-text>
                                </template>
                            </b-input-group>
                        </b-form>
                    </div>
                </b-col>
                <b-col sm="4" lg="4">
                    <div class="content">
                        <b-form @submit.stop.prevent>
                            <b-input-group>
                                <b-form-input class="form-control" placeholder=""></b-form-input>
                                <template #append>
                                    <b-input-group-text>
                                        <i class="fa fa-angle-down"></i>
                                    </b-input-group-text>
                                </template>
                            </b-input-group>
                        </b-form>
                    </div>
                </b-col>
                <b-col sm="4" lg="4">
                    <div class="content">
                        <b-form @submit.stop.prevent>
                            <b-input-group>
                                <b-form-input class="form-control" placeholder="All Users"></b-form-input>
                                <template #append>
                                    <b-input-group-text>
                                        <i class="fa fa-angle-down"></i>
                                    </b-input-group-text>
                                </template>
                            </b-input-group>
                        </b-form>
                    </div>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
    <b-table-simple striped table-class="table-vcenter">
        <b-thead>
            <b-tr>
                <b-th>Name</b-th>
                <b-th class="d-none d-sm-table-cell">Role</b-th>
                <b-th class="d-none d-sm-table-cell">Email</b-th>
                <b-th class="d-none d-lg-table-cell" style="width: 15%;">Office Phone</b-th>
                <b-th class="text-center" style="width: 110px;">Mobile Phone</b-th>
                <b-th class="text-center" style="width: 110px;">2FA Phone</b-th>
                <b-th class="text-center" style="width: 50px;">Last Login</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="user in users" :key="user.id">
                <b-td class="font-w600">
                    <a :href="`${user.href}`">{{ user.name }}</a>
                </b-td>
                <b-td class="d-none d-sm-table-cell">
                    {{ user.role }}
                </b-td>
                <b-td class="d-none d-sm-table-cell">
                    {{ user.email}}
                </b-td>
                <b-td class="d-none d-sm-table-cell">
                    123456789
                </b-td>
                <b-td class="d-none d-sm-table-cell">
                    123456789
                </b-td>
                <b-td class="d-none d-sm-table-cell">
                    123456789
                </b-td>
                <b-td class="d-none d-sm-table-cell">
                    Feb 10, 2021
                </b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>

    </base-block>
    <!-- Users -->
    <!-- END Users -->
<!-- END Results -->
</div>
</template>

<script>
export default {
    data() {
        return {
            rows: 40,
            perPage: 10,
            currentPage: 1,
            users: [{
                    id: 1,
                    name: 'Admin, Admin',
                    role: 'Site Admin',
                    email: 'stevebretz@gmail.com'
                },
                {
                    id: 2,
                    name: 'Accessor, Steve',
                    role: 'Accessor',
                    email: 'stevebretz_accessor@gmail.com'
                },
                {
                    id: 3,
                    name: 'Baron, Niq',
                    role: 'Site Admin',
                    email: 'niq@gmail.com'
                },
                {
                    id: 4,
                    name: 'Bower, Mark',
                    role: 'See user profile for roles',
                    email: 'stevebretz@gmail.com'
                },
                {
                    id: 5,
                    name: 'Admin, Admin',
                    role: 'See user profile for roles',
                    email: 'stevebretz@gmail.com'
                }
            ]
        }
    }
}
</script>
