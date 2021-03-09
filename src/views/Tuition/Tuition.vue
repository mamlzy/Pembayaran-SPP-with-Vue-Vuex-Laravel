<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h4 class="m-0 font-weight-bold text-primary">SPP</h4>
    </div>
    <div class="card-body">
      <div>
        <button class="btn btn-primary mb-3">Tambah Data</button>
      </div>
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
  name: 'Tuition',
  data(){
    return {
      columns: [
        {
          label: 'No',
          field: 'id_spp',
          thClass: 'bg-primary',
        },
        {
          label: 'Tahun',
          field: 'tahun',
          thClass: 'bg-primary',
        },
        {
          label: 'Nominal',
          field: 'nominal',
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