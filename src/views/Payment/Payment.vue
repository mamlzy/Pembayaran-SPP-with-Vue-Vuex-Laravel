<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">Payment</h3>
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
                    Edit
                  </button>
                  <button
                    class="btn btn-danger btn-sm btn-block"
                    @click="deletePayment(props.row)"
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
    },
    exportCsv() {
      let csvContent = 'data:text/csv;charset=utf-8,';
      let test = 'data:text/csv;charset=utf-8,';
      test += [
        Object.keys(this.payments[0]).join(';'),
        ...this.payments.map((item) => Object.values(item).join(';'))
      ]
      console.log(test)
      csvContent += [
        Object.keys(this.payments[0]).join(';'),
        ...this.payments.map((item) => Object.values(item).join(';'))
      ]
        .join('\n')
        .replace(/(^\[)|(\]$)/gm, '');
      const data = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', data);
      link.setAttribute('download', 'Payments.csv');
      link.click();
    },
  },
  mounted() {
    this.getPayments()
  }
}
</script>

<style>

</style>