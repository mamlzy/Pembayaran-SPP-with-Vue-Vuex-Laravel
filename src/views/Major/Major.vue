<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h4 class="m-0 font-weight-bold text-primary">Jurusan</h4>
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
          }"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Major',
  data(){
    return {
      columns: [
        {
          label: 'No',
          field: 'id_jurusan',
        },
        {
          label: 'Nama Jurusan',
          field: 'nama_jurusan',
        },
        {
          label: 'Deskripsi',
          field: 'deskripsi',
        },
      ],
    };
  },
  computed: {
    ...mapState('major', ['majors'])
  },
  methods: {
    ...mapActions('major', ['getMajors'])
  },
  mounted() {
    this.getMajors()
  }
}
</script>

<style>

</style>