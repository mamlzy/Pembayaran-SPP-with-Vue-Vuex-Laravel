<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h4 class="m-0 font-weight-bold text-primary">Siswa</h4>
    </div>
    <div class="card-body">
      <div>
        <button class="btn btn-primary mb-3">Tambah Data</button>
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

          <!-- Custom Rows -->
          <template slot="table-row" slot-scope="props">
            <!-- Table Action -->
            <span v-if="props.column.field == 'action'">
              <button
                class="btn btn-success btn-sm btn-block"
              >
                <i class=""></i>
                Ubah
              </button>
              <button
                class="btn btn-danger btn-sm btn-block"
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
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Student',
  data(){
    return {
      columns: [
        {
          label: 'NISN',
          field: 'nisn',
          thClass: 'bg-primary',
        },
        {
          label: 'NIS',
          field: 'nis',
          thClass: 'bg-primary',
        },
        {
          label: 'Nama',
          field: 'nama',
          thClass: 'bg-primary',
        },
        {
          label: 'Kelas',
          field: 'id_kelas',
          thClass: 'bg-primary',
        },
        {
          label: 'Alamat',
          field: 'alamat',
          thClass: 'bg-primary',
        },
        {
          label: 'No Telepon',
          field: 'no_telp',
          thClass: 'bg-primary',
        },
        {
          label: 'SPP',
          field: 'id_spp',
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
    ...mapState('student', ['students'])
  },
  methods: {
    ...mapActions('student', ['getStudents'])
  },
  mounted() {
    this.getStudents()
  }
}
</script>

<style>
  .bg-primary {
    background: #4B70DE !important;
    color: #fff !important;
  }

  .vgt-global-search {
    background: #4B70DE !important;
  }
  
  .magnifying-glass {
    border: 2px solid white !important;
  }

  .magnifying-glass::before {
    background: white !important;
  }

  .vgt-wrap__footer, .page-info__label, .footer__navigation__page-btn {
    background: #4B70DE !important;
    color: white !important;
  }
</style>