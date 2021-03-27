<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">
        <span class="page-title-icon bg-gradient-primary text-white mr-2">
          <i class="mdi mdi-history"></i>
        </span>Transaction History</h3>
    </div>
    <div class="card shadow">
      <div class="card-body">
        <div>
          <vue-good-table
            :columns="columns"
            :rows="paymentHistory"
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
                Data Not Found
              </div>
              
              <!-- Custom Rows -->
              <template slot="table-row" slot-scope="props">
                <!-- Table Action -->
                <span v-if="props.column.field == 'action'">
                  <button
                  class="btn btn-success btn-sm btn-block"
                  @click="openModalDetail(props.row)"
                  >
                    <i class=""></i>
                    Check
                  </button>
                </span>
              </template>
          </vue-good-table>
        </div>
      </div>
      <DetailHistory :history="detailHistory"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import DetailHistory from './DetailHistory'

export default {
  name: 'History',
  components: {
    DetailHistory
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
          label: 'Petugas',
          field: 'nama_petugas',
          thClass: 'bg-primary',
        },
        {
          label: 'NISN',
          field: 'nisn',
          thClass: 'bg-primary',
        },
        {
          label: 'Tanggal Bayar',
          field: 'tgl_bayar',
          thClass: 'bg-primary',
        },
        {
          label: 'Tahun Bayar',
          field: 'tahun_bayar',
          thClass: 'bg-primary',
        },
        {
          label: 'SPP',
          field: 'spp',
          thClass: 'bg-primary',
        },
        {
          label: 'Jumlah Bayar',
          field: 'jumlah_bayar',
          thClass: 'bg-primary',
        },
        {
          label: 'Status',
          field: 'status',
          thClass: 'bg-primary',
        },
        {
          label: 'Action',
          field: 'action',
          thClass: 'bg-primary',
        },
      ],
      histories: null
    };
  },
  computed: {
    ...mapState('payment', ['paymentHistory','detailHistory'])
  },
  methods: {
    ...mapActions('payment', ['getPaymentHistory','getDetailHistory']),
    openModalDetail(payload) {
      this.$store.dispatch('payment/getDetailHistory', payload)
      this.$bvModal.show('modal-detail-history')
    },
  },
  mounted() {
    this.getPaymentHistory()
    // this.getPaymentHistory()
  }
}
</script>

<style>

</style>