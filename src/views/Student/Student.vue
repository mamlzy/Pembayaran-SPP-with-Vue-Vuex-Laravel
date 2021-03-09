<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h4 class="m-0 font-weight-bold text-primary">Siswa</h4>
    </div>
    <div class="card-body">
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
          }"/>
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
        },
        {
          label: 'NIS',
          field: 'nis',
        },
        {
          label: 'Nama',
          field: 'nama',
        },
        {
          label: 'Kelas',
          field: 'id_kelas',
        },
        {
          label: 'Alamat',
          field: 'alamat',
        },
        {
          label: 'No Telepon',
          field: 'no_telp',
        },
        {
          label: 'SPP',
          field: 'id_spp',
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

</style>