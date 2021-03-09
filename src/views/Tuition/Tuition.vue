<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h4 class="m-0 font-weight-bold text-primary">SPP</h4>
    </div>
    <div class="card-body">
      <div>
        <vue-good-table
          :columns="columns"
          :rows="tuitions"
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
  name: 'Tuition',
  data(){
    return {
      columns: [
        {
          label: 'No',
          field: 'id_spp',
        },
        {
          label: 'Tahun',
          field: 'tahun',
        },
        {
          label: 'Nominal',
          field: 'nominal',
        },
      ],
    };
  },
  computed: {
    ...mapState('tuition', ['tuitions'])
  },
  methods: {
    ...mapActions('tuition', ['getTuitions'])
  },
  mounted() {
    this.getTuitions()
  }
}
</script>

<style>

</style>