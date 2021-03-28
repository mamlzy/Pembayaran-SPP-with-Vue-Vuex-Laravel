<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">
        <span class="page-title-icon bg-gradient-primary text-white mr-2">
          <i class="mdi mdi-account-multiple"></i>
        </span>Student</h3>
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
        <!-- <div>
          <button class="btn btn-gradient-primary mb-3" @click="openModalAdd()">Tambah Data</button>
        </div> -->
        <div>
          <vue-good-table
            :columns="columns"
            :rows="students"
            styleClass="vgt-table striped"
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
                  @click="deleteStudent(props.row)"
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
    <EditStudent/>
    <AddStudent/>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import EditStudent from './EditStudent'
import AddStudent from './AddStudent'

export default {
  name: 'Student',
  components: {
    EditStudent,
    AddStudent
  },
  data(){
    return {
      columns: [
        {
          label: 'NISN',
          field: 'id',
          thClass: 'bg-pink',
          tdClass: 'bg-light',
          tdClass: 'bg-light',
        },
        {
          label: 'NIS',
          field: 'nis',
          thClass: 'bg-pink',
          tdClass: 'bg-light',
        },
        {
          label: 'Nama',
          field: 'nama',
          thClass: 'bg-pink',
          tdClass: 'bg-light',
        },
        {
          label: 'Kelas',
          field: 'nama_kelas',
          thClass: 'bg-pink',
          tdClass: 'bg-light',
        },
        {
          label: 'Alamat',
          field: 'alamat',
          thClass: 'bg-pink',
          tdClass: 'bg-light',
        },
        {
          label: 'No Telepon',
          field: 'no_telp',
          thClass: 'bg-pink',
          tdClass: 'bg-light',
        },
        {
          label: 'SPP',
          field: 'spp',
          thClass: 'bg-pink',
          tdClass: 'bg-light',
        },
        {
          label: 'Action',
          field: 'action',
          sortable: false,
          thClass: 'bg-pink',
          tdClass: 'bg-light',
        },
      ],
    };
  },
  computed: {
    ...mapState('student', ['students'])
  },
  methods: {
    ...mapActions('student', ['getStudents']),
    openModalAdd() {
      this.$bvModal.show('modal-add-student')
    },
    openModalUpdate(payload) {
      this.$store.commit('student/SET_DATA_UPDATE', payload)
      this.$bvModal.show('modal-edit-student')
    },
    deleteStudent(payload) {
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
          this.$store.dispatch('student/deleteStudent', payload)
          .then((resp) => {
            if (resp.status === 200) {
              this.$store.dispatch('student/getStudents');
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
    this.getStudents()
  }
}
</script>

<style>

</style>