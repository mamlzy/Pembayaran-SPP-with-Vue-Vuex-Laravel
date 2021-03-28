<template>
  <b-modal id="modal-add-payment" title="Payment" scrollable hide-footer @show="setData()">
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form ref="" @submit.prevent="handleSubmit(onSubmit)">
          <!-- Nama Petugas -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Nama Petugas :
                </label>
                <ValidationProvider v-slot="{ errors }" name="Nama Petugas" rules="required">
                  <b-form-input
                    id="input-"
                    v-model="id_user"
                    type="text"
                    required
                    disabled
                    placeholder="Enter Nama Petugas"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Siswa -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Siswa :
                </label>
                <ValidationProvider v-slot="{ errors }" name="Siswa" rules="required">
                  <b-form-select
                    id="input-3"
                    v-model="nisn"
                    :options="students"
                    value-field="id"
                    text-field="nama"
                    required
                  >
                    <template #first>
                      <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                    </template>
                  </b-form-select>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Tanggal Bayar -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Tanggal Bayar :
                </label>
                <ValidationProvider v-slot="{ errors }" name="tgl_bayar" rules="required">
                  <b-form-input
                    id="input-tgl-bayar"
                    v-model="tgl_bayar"
                    type="text"
                    required
                    placeholder="Enter Tanggal Bayar"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Bulan Bayar -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Bulan Bayar :
                </label>
                <ValidationProvider v-slot="{ errors }" name="bulan_bayar" rules="required">
                  <b-form-input
                    id="input-bulan-bayar"
                    v-model="bulan_bayar"
                    type="text"
                    required
                    placeholder="Enter Bulan Bayar"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Tahun Bayar -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Tahun Bayar :
                </label>
                <ValidationProvider v-slot="{ errors }" name="tahun_bayar" rules="required|numeric">
                  <b-form-input
                    id="input-tahun-bayar"
                    v-model="tahun_bayar"
                    type="text"
                    required
                    placeholder="Enter Tahun Bayar"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- SPP -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  SPP :
                </label>
                <ValidationProvider v-slot="{ errors }" name="spp" rules="required|numeric">
                  <b-form-select
                    id="input-3"
                    v-model="id_spp"
                    :options="tuitions"
                    value-field="id"
                    text-field="nominal"
                    required
                  >
                    <template #first>
                      <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                    </template>
                  </b-form-select>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Jumlah Bayar -->
          <!-- <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Jumlah Bayar :
                </label>
                <ValidationProvider v-slot="{ errors }" name="jumlah_bayar" rules="required">
                  <b-form-input
                    id="input-jumlah-bayar"
                    v-model="jumlah_bayar"
                    type="text"
                    required
                    placeholder="Enter Jumlah Bayar"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row> -->
          <b-button class="btn btn-primary ml-auto float-right ml-4" type="submit" variant="light-primary">
            Submit
          </b-button>
      </b-form>
    </ValidationObserver>
  </b-modal>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data() {
    return {
      id_user: null,
      nisn: null,
      tgl_bayar: null,
      bulan_bayar: null,
      tahun_bayar: null,
      id_spp: null,
      // jumlah_bayar: null,
    }
  },
  computed: {
    ...mapState('user', ['users','authData']),
    ...mapState('student', ['students']),
    ...mapState('tuition', ['tuitions']),
  },
  methods: {
    ...mapActions('user', ['getUsers','getAuth']),
    ...mapActions('student', ['getStudents']),
    ...mapActions('tuition', ['getTuitions']),
    setData() {
      this.id_user = this.authData.name
    },
    resetForm() {
      this.id_user  = ''
      this.nisn = null
      this.tgl_bayar = ''
      this.bulan_bayar = ''
      this.tahun_bayar = ''
      this.id_spp = ''
      // this.jumlah_bayar = ''
    },
    onSubmit() {
      const dataSend = {
        id_user: this.authData.id,
        nisn: this.nisn,
        tgl_bayar: this.tgl_bayar,
        bulan_bayar: this.bulan_bayar,
        tahun_bayar: this.tahun_bayar,
        id_spp: this.id_spp,
        // jumlah_bayar: this.jumlah_bayar,
      };
      console.log(dataSend, 'Data Send')
      this.$store
        .dispatch('payment/addPayment', dataSend)
        .then((resp) => {
          if (resp.status === 200) {
            this.$bvModal.hide('modal-add-payment');
            this.$store.dispatch('payment/getPayments');
            this.resetForm()
            Swal.fire(`Success`, `Data has been added!`, 'success');
          } else {
            console.log('Add error')
            Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
        });
    },
  },
  mounted() {
    this.getAuth()
    this.getUsers()
    this.getStudents()
    this.getTuitions()
  }
}
</script>

<style>

</style>