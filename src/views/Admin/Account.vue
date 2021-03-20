<template>
  <!-- <div class="col-md-6 grid-margin stretch-card m-auto">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title text-center">Add New Account</h4>
        <ValidationObserver v-slot="{ handleSubmit }">
          <b-form class="forms-sample" ref="" @submit.prevent="handleSubmit(onSubmit)">
            <div class="form-group">
              <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
                <label for="name">Name</label>
                <input type="text" v-model="name" class="form-control" id="name" placeholder="Name">
                <span class="small text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider v-slot="{ errors }" name="Email" rules="required">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                <span class="small text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider v-slot="{ errors }" name="role" rules="required">
                <label for="">Role</label>
                <b-form-select
                  v-model="role"
                  :options="options"
                  required
                >
                  <template #first>
                    <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                  </template>
                </b-form-select>
                <span class="small text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider v-slot="{ errors }" name="password" rules="required">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                <span class="small text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider v-slot="{ errors }" name="Password Confirmation" rules="required">
                <label for="exampleInputConfirmPassword1">Confirm Password</label>
                <input type="password" v-model="password_confirmation" class="form-control" id="exampleInputConfirmPassword1" placeholder="Password">
                <span class="small text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="float-right">
              <button class="btn btn-danger mr-2">Reset</button>
              <button type="submit" class="btn btn-gradient-primary mr-2">Submit</button>
            </div>
          </b-form>
        </ValidationObserver>
      </div>
    </div>
  </div> -->
  <div>
    <div class="page-header">
      <h3 class="page-title">Accounts</h3>
      <!-- <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">UI Elements</a></li>
          <li class="breadcrumb-item active" aria-current="page">Typography</li>
        </ol>
      </nav> -->
    </div>
    <div class="card">
      <div class="card-header ">
        <button type="button" class="btn ml-3 btn-social-icon-text btn-gradient-primary" @click="openModalAdd()">
          Add Data
          <i class="mdi mdi-plus-box"></i>
        </button>
      </div>
      <div class="card-body">
        <div>
          <vue-good-table
            :columns="columns"
            :rows="users"
            :search-options="{
              enabled: true,
              placeholder: 'Search this table',
            }"
            :pagination-options="{
              enabled: true,
              mode: 'pages',
              perPage: 5
            }">
              <!-- if Empty -->
              <div slot="emptystate" class="text-center">
                Data Tidak Ditemukan
              </div>
              
              <!-- Custom Rows -->
              <template slot="table-row" slot-scope="props">
                <!-- Table Action -->
                <span v-if="props.column.field == 'action'">
                  <button
                  class="btn btn-success btn-sm btn-block"
                  @click="openModalUpdate(props.row)"
                  >
                    <i class=""></i>
                    Edit
                  </button>
                  <button
                    class="btn btn-danger btn-sm btn-block"
                    @click="deleteAccount(props.row)"
                  >
                    <i class=""></i>
                    Delete
                  </button>
                </span>
              </template>
          </vue-good-table>
        </div>
      </div>
    </div>
      <EditAccount/>
      <AddAccount/>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import EditAccount from './EditAccount'
import AddAccount from './AddAccount'

export default {
  name: 'Account',
  components: {
    EditAccount,
    AddAccount
  },
  data() {
    return {
      columns: [
        {
          label: 'No',
          field: 'id',
          thClass: 'bg-primary',
        },
        {
          label: 'Name',
          field: 'name',
          thClass: 'bg-primary',
        },
        {
          label: 'Email',
          field: 'email',
          thClass: 'bg-primary',
        },
        {
          label: 'Role',
          field: 'role',
          thClass: 'bg-primary',
        },
        {
          label: 'Action',
          field: 'action',
          thClass: 'bg-primary',
        },
      ],
    }
  },
  computed: {
    ...mapState('user', ['users'])
  },
  methods: {
    ...mapActions('user', ['getUsers']),
    openModalAdd() {
      this.$bvModal.show('modal-add-account')
    },
    openModalUpdate(payload) {
      this.$store.commit('user/SET_DATA_UPDATE', payload)
      this.$bvModal.show('modal-edit-account')
    },
    deleteAccount(payload) {
      this.$store.dispatch('user/deleteUser', payload)
      .then((resp) => {
        if (resp.status === 200) {
          this.$store.dispatch('user/getUsers');
          // this.$swal('Updated !!', 'AUDIENCES has been updated ', 'success');
        } else {
          console.log('Add error')
          // this.$swal(`${resp.code}`, `${resp.error}`, 'error');
        }
      })
      .catch((err) => {
        console.log(err);
        // this.$swal(`Gagal`, `Email atau nomor telepon sudah terdaftar`, 'error');
      });
    }
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<style>

</style>