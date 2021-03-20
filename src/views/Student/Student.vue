<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">Student</h3>
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
          field: 'nama_kelas',
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
          field: 'spp',
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
    background: #ca95ff !important;
    color: white !important;
  }
  /* .bg-light {
    background: #F7F7F7 !important;
  } */

  .vgt-global-search {
    background: #ca95ff !important;
  }
  
  .magnifying-glass {
    border: 2px solid white !important;
  }

  .magnifying-glass::before {
    background: white !important;
  }

  .vgt-wrap__footer, .page-info__label, .footer__navigation__page-btn, .footer__row-count__select {
    background: #ca95ff !important;
    color: white !important;
  } 
</style>