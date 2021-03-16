<template>
<div>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h4 class="m-0 font-weight-bold text-primary">Siswa</h4>
    </div>
    <div class="card-body">
      <div>
        <button class="btn btn-primary mb-3" @click="openModalAdd()">Tambah Data</button>
      </div>
      <div>
        <vue-good-table
          :columns="columns"
          :rows="students"
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
                @click="deleteStudent(props.row)"
              >
                <i class=""></i>
                Hapus
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
          thClass: 'bg-primary',
          tdClass: 'bg-light',
          tdClass: 'bg-light',
        },
        {
          label: 'NIS',
          field: 'nis',
          thClass: 'bg-primary',
          tdClass: 'bg-light',
        },
        {
          label: 'Nama',
          field: 'nama',
          thClass: 'bg-primary',
          tdClass: 'bg-light',
        },
        {
          label: 'Kelas',
          field: 'id_kelas',
          thClass: 'bg-primary',
          tdClass: 'bg-light',
        },
        {
          label: 'Alamat',
          field: 'alamat',
          thClass: 'bg-primary',
          tdClass: 'bg-light',
        },
        {
          label: 'No Telepon',
          field: 'no_telp',
          thClass: 'bg-primary',
          tdClass: 'bg-light',
        },
        {
          label: 'SPP',
          field: 'id_spp',
          thClass: 'bg-primary',
          tdClass: 'bg-light',
        },
        {
          label: 'Action',
          field: 'action',
          thClass: 'bg-primary',
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
      this.$store.dispatch('student/deleteStudent', payload)
      .then((resp) => {
        if (resp.status === 200) {
          this.$store.dispatch('student/getStudents');
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
    this.getStudents()
  }
}
</script>

<style>
  .bg-primary {
    background: #0879FA !important;
    color: #fff !important;
  }

  .vgt-global-search {
    background: #0879FA !important;
  }
  
  .magnifying-glass {
    border: 2px solid white !important;
  }

  .magnifying-glass::before {
    background: white !important;
  }

  .vgt-wrap__footer, .page-info__label, .footer__navigation__page-btn {
    background: #0879FA !important;
    color: white !important;
  }
</style>