<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h4 class="m-0 font-weight-bold text-primary">Pembayaran</h4>
    </div>
    <div class="card-body">
      <div>
        <button class="btn btn-primary mb-3" @click="openModalAdd()">Tambah Data</button>
      </div>
      <div>
        <vue-good-table
          :columns="columns"
          :rows="payments"
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
                  @click="deletePayment(props.row)"
                >
                  <i class=""></i>
                  Hapus
                </button>
              </span>
            </template>
        </vue-good-table>
      </div>
    </div>
    <EditPayment/>
    <AddPayment/>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import EditPayment from './EditPayment'
import AddPayment from './AddPayment'

export default {
  name: 'Payment',
  components: {
    EditPayment,
    AddPayment
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
          label: 'Nama User',
          field: 'id_user',
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
          field: 'id_spp',
          thClass: 'bg-primary',
        },
        {
          label: 'Jumlah Bayar',
          field: 'jumlah_bayar',
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
    ...mapState('payment', ['payments'])
  },
  methods: {
    ...mapActions('payment', ['getPayments']),
    openModalAdd() {
      this.$bvModal.show('modal-add-payment')
    },
    openModalUpdate(payload) {
      console.log("modal payment")
      this.$store.commit('payment/SET_DATA_UPDATE', payload)
      this.$bvModal.show('modal-edit-payment')
    },
    deletePayment(payload) {
      this.$store.dispatch('payment/deletePayment', payload)
      .then((resp) => {
        if (resp.status === 200) {
          this.$store.dispatch('payment/getPayments');
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
    this.getPayments()
  }
}
</script>

<style>

</style>