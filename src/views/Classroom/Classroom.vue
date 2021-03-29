<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">
        <span class="page-title-icon bg-gradient-primary text-white mr-2">
          <i class="mdi mdi-home"></i>
        </span>Classes</h3>
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
            :rows="classrooms"
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
                    @click="deleteClassroom(props.row)"
                  >
                    <i class=""></i>
                    Delete
                  </button>
                </span>
              </template>
            </vue-good-table>
        </div>
      </div>
      <EditClassroom/>
      <AddClassroom/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import EditClassroom from './EditClassroom'
import AddClassroom from './AddClassroom'

export default {
  name: 'Classroom',
  components: {
    EditClassroom,
    AddClassroom
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
          label: 'Nama Kelas',
          field: 'nama_kelas',
          thClass: 'bg-pink',
        },
        {
          label: 'Jurusan',
          field: 'nama_jurusan',
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
    ...mapState('classroom', ['classrooms'])
  },
  methods: {
    ...mapActions('classroom', ['getClassrooms']),
    openModalAdd() {
      this.$bvModal.show('modal-add-classroom')
    },
    openModalUpdate(payload) {
      console.log("modal classroom")
      this.$store.commit('classroom/SET_DATA_UPDATE', payload)
      this.$bvModal.show('modal-edit-classroom')
    },
    deleteClassroom(payload) {
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
          this.$store.dispatch('classroom/deleteClassroom', payload)
          .then((resp) => {
            if (resp.status === 200) {
              this.$store.dispatch('classroom/getClassrooms');
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
    this.getClassrooms()
  }
}
</script>

<style>

</style>