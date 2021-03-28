<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">
        <span class="page-title-icon bg-gradient-primary text-white mr-2">
          <i class="mdi mdi-book-open-page-variant"></i>
        </span>Major</h3>
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
            :rows="majors"
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
                    @click="deleteMajor(props.row)"
                  >
                    <i class=""></i>
                    Delete
                  </button>
                </span>
              </template>
          </vue-good-table>
        </div>
      </div>
      <EditMajor/>
      <AddMajor/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import EditMajor from './EditMajor'
import AddMajor from './AddMajor'

export default {
  name: 'Major',
  components: {
    EditMajor,
    AddMajor
  },
  data(){
    return {
      columns: [
        {
          label: 'No',
          field: 'id',
          thClass: 'bg-pink',
        },
        {
          label: 'Nama Jurusan',
          field: 'nama_jurusan',
          thClass: 'bg-pink',
        },
        {
          label: 'Deskripsi',
          field: 'deskripsi',
          thClass: 'bg-pink',
        },
        {
          label: 'Action',
          field: 'action',
          sortable: false,
          thClass: 'bg-pink',
        },
      ],
    };
  },
  computed: {
    ...mapState('major', ['majors'])
  },
  methods: {
    ...mapActions('major', ['getMajors']),
    openModalAdd() {
      this.$bvModal.show('modal-add-major')
    },
    openModalUpdate(payload) {
      console.log("modal major")
      this.$store.commit('major/SET_DATA_UPDATE', payload)
      this.$bvModal.show('modal-edit-major')
    },
    deleteMajor(payload) {
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
          this.$store.dispatch('major/deleteMajor', payload)
          .then((resp) => {
            if (resp.status === 200) {
              this.$store.dispatch('major/getMajors');
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
    this.getMajors()
  }
}
</script>

<style>

</style>