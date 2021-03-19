<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">Kelas</h3>
      <!-- <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">UI Elements</a></li>
          <li class="breadcrumb-item active" aria-current="page">Typography</li>
        </ol>
      </nav> -->
    </div>
    <div class="card">
      <div class="card-header ">
        <button type="button" class="btn btn-social-icon-text btn-facebook" @click="openModalAdd()">
          <i class="mdi mdi-plus-box"></i>
          Tambah Data
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
                    Ubah
                  </button>
                  <button
                    class="btn btn-danger btn-sm btn-block"
                    @click="deleteClassroom(props.row)"
                  >
                    <i class=""></i>
                    Hapus
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
          thClass: 'bg-primary',
        },
        {
          label: 'Nama Kelas',
          field: 'nama_kelas',
          thClass: 'bg-primary',
        },
        {
          label: 'Jurusan',
          field: 'nama_jurusan',
          thClass: 'bg-primary',
        },
        {
          label: 'Action',
          field: 'action',
          thClass: 'bg-primary',
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
      this.$store.dispatch('classroom/deleteClassroom', payload)
      .then((resp) => {
        if (resp.status === 200) {
          this.$store.dispatch('classroom/getClassrooms');
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
    this.getClassrooms()
  }
}
</script>

<style>

</style>