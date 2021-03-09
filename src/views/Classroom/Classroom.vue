<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h4 class="m-0 font-weight-bold text-primary">Kelas</h4>
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
          }"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Classroom',
  data(){
    return {
      columns: [
        {
          label: 'No',
          field: 'id_kelas',
        },
        {
          label: 'Nama Kelas',
          field: 'nama_kelas',
        },
        {
          label: 'Jurusan',
          field: 'id_jurusan',
        },
      ],
    };
  },
  computed: {
    ...mapState('classroom', ['classrooms'])
  },
  methods: {
    ...mapActions('classroom', ['getClassrooms'])
  },
  mounted() {
    this.getClassrooms()
  }
}
</script>

<style>

</style>