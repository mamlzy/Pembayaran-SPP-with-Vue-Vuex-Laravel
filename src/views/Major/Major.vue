<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">Jurusan</h3>
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
                    @click="deleteMajor(props.row)"
                  >
                    <i class=""></i>
                    Hapus
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
          thClass: 'bg-primary',
        },
        {
          label: 'Nama Jurusan',
          field: 'nama_jurusan',
          thClass: 'bg-primary',
        },
        {
          label: 'Deskripsi',
          field: 'deskripsi',
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
      this.$store.dispatch('major/deleteMajor', payload)
      .then((resp) => {
        if (resp.status === 200) {
          this.$store.dispatch('major/getMajors');
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
    this.getMajors()
  }
}
</script>

<style>

</style>