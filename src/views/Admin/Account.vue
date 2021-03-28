<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">
        <span class="page-title-icon bg-gradient-primary text-white mr-2">
          <i class="mdi mdi-account"></i>
        </span>Accounts</h3>
      <!-- <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">UI Elements</a></li>
          <li class="breadcrumb-item active" aria-current="page">Typography</li>
        </ol>
      </nav> -->
    </div>
    <div class="card shadow">
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
                Data Not Found
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
          thClass: 'bg-pink',
        },
        {
          label: 'Name',
          field: 'name',
          thClass: 'bg-pink',
        },
        {
          label: 'Email',
          field: 'email',
          thClass: 'bg-pink',
        },
        {
          label: 'Role',
          field: 'role',
          thClass: 'bg-pink',
        },
        {
          label: 'Action',
          field: 'action',
          sortable: false,
          thClass: 'bg-pink',
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
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('user/deleteUser', payload)
          .then((resp) => {
            if (resp.status === 200) {
              this.$store.dispatch('user/getUsers');
              Swal.fire('Deleted!','Your data has been deleted.','success')
            } else {
              console.log('Add error')
              Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
            }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
          });
        }
      })
    }
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<style>

</style>