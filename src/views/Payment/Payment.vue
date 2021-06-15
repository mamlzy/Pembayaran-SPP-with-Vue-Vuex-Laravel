<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">
        <span class="page-title-icon bg-gradient-primary text-white mr-2">
          <i class="mdi mdi-cash-usd"></i>
        </span>Payment</h3>
      <!-- <h1 >{{ getSuccess }}</h1> -->
      <!-- <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">UI Elements</a></li>
          <li class="breadcrumb-item active" aria-current="page">Typography</li>
        </ol>
      </nav> -->
    </div>
    <div class="card shadow">
      <div class="card-header d-flex justify-content-between">
        <button type="button" class="btn ml-3 btn-social-icon-text btn-gradient-primary" @click="openModalAdd()" v-if="authData.role == 'admin'">
          Add Data
          <i class="mdi mdi-plus-box"></i>
        </button>
        <button type="button" 
          class="btn btn-sm mr-3 btn-social-icon-text btn-gradient-success" @click="exportCsv()"
          :class="{'disabled': authData.role == 'student'}"
          >
          
          Export CSV
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
                Data Not Found
              </div>
              
              <!-- Custom Rows -->
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'status'">
                  <span v-if="props.row.status == 1">Belum Transaksi</span> 
                  <span v-if="props.row.status == 2">Pending</span> 
                </span>
                <span v-else>
                  {{props.formattedRow[props.column.field]}}
                </span>
                <!-- Table Action -->
                <span v-if="props.column.field == 'action'">
                  <button
                    class="btn btn-sm btn-block"
                    :class="{
                      'btn-info': props.row.status == 1,
                      'btn-secondary text-dark disabled': props.row.status == 2
                    }"
                    @click="doPay(props.row)"
                  >
                    <i class=""></i>
                    <span  v-if="props.row.status == 1">Pay</span>
                    <span  v-if="props.row.status == 2">Paid</span>
                  </button>
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
    <ValidationObserver v-slot="{ handleSubmit }">
      <form id="payment-form" @submit.prevent="handleSubmit(onSubmit)">
        <input type="hidden" name="result_data" id="result_data" value="">
      </form>
    </ValidationObserver>
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
          thClass: 'bg-pink',
        },
        {
          label: 'Petugas',
          field: 'nama_petugas',
          thClass: 'bg-pink',
        },
        {
          label: 'Nama Siswa',
          field: 'nama',
          thClass: 'bg-pink',
        },
        {
          label: 'Tanggal Bayar',
          field: 'tgl_bayar',
          thClass: 'bg-pink',
        },
        {
          label: 'Bulan Bayar',
          field: 'bulan_bayar',
          thClass: 'bg-pink',
        },
        {
          label: 'Tahun Bayar',
          field: 'tahun_bayar',
          thClass: 'bg-pink',
        },
        {
          label: 'SPP',
          field: 'spp',
          thClass: 'bg-pink',
        },
        {
          label: 'Jumlah Bayar',
          field: 'jumlah_bayar',
          thClass: 'bg-pink',
        },
        {
          label: 'Status',
          field: 'status',
          thClass: 'bg-pink',
        },
        {
          label: 'Action',
          field: 'action',
          sortable: false,
          sortable: false,
          thClass: 'bg-pink',
        },
      ],
    };
  },
  computed: {
    ...mapState('user', ['authData']),
    ...mapState('payment', ['payments','dataUpdate']),
    ...mapState('pay', ['transactionToken','getSuccess']),
    getToken() {
      return this.$store.getters['pay/getToken']
    }
  },
  methods: {
    ...mapActions('user', ['getAuth']),
    ...mapActions('payment', ['getPayments']),
    ...mapActions('pay', ['doPayment','changeStatus']),
    async doPay(payload) {
      let that = this
      // console.log("ssssssssssss", payload)
      await this.doPayment(payload)
      // .then(() => {
        console.log("TOKEN ====> wwww ", this.getToken)
        function changeResult(type,data) {
          $("#result-type").val(type)
          $("#result-data").val(JSON.stringify(data))
        }

        snap.pay(this.getToken, {
          onSuccess: async function(result) {
            console.log('SUCCESS SUBMIT ====>>', result.status_message)
            // await this.$store.dispatch('pay/getSuccess', result)
            // .then(() => {
              changeResult(`success`, result)
              console.log('SUCCESS SUBMIT ====>>', result.status_message)
              console.log(result)
              // $("#payment-form").submit()

            // })
          },
          onPending: async function(result) {
            await that.$store.dispatch('pay/getSuccess', result)
            .then(() => {
              changeResult(`pending`, result)
              that.changeStatus(result)
              that.getPayments()
              console.log('SUCCESS SUBMIT PENDING ====>>',result.status_message)
              console.log('SUCCESS SUBMIT PENDING ====>>',result)
              Swal.fire(`Success`, `Data has been added!`, 'success');
            }).catch((err) => {
              console.log(err)
              Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
            })
            
            // $("#payment-form").submit()
          },
          onError: function(result) {
            changeResult(`error`, result)
            console.log('SUCCESS SUBMIT ERROR ====>>',result.status_message)
            console.log('SUCCESS SUBMIT ERROR ====>>',result)
            $("#payment-form").submit()
          },
        })

    // })
    // .catch((err) => {
          //   console.log(err)
          //   Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
          // })
    },
    openModalAdd() {
      this.$bvModal.show('modal-add-payment')
    },
    openModalUpdate(payload) {
      console.log("modal payment")
      this.$store.commit('payment/SET_DATA_UPDATE', payload)
      console.log("DATA UPDATE ===>", this.dataUpdate)
      this.$bvModal.show('modal-edit-payment')
    },
    deletePayment(payload) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('payment/deletePayment', payload)
          .then((resp) => {
            if (resp.status === 200) {
              this.$store.dispatch('payment/getPayments');
              Swal.fire('Deleted!','Your data has been deleted.','success')
            } else {
              console.log('Add error')
              Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
            }
          })
          .catch((err) => {
            console.log(err)
            Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
          })
        }
      })
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