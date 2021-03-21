<template>
  <b-modal id="modal-add-tuition" title="Tuition" scrollable hide-footer>
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form ref="" @submit.prevent="handleSubmit(onSubmit)">
          <!-- Tahun -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Tahun :
                </label>
                <ValidationProvider v-slot="{ errors }" name="tahun" rules="required|min:4">
                  <b-form-input
                    id="input-tahun"
                    v-model="tahun"
                    type="text"
                    required
                    placeholder="Enter Tahun"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Nominal -->
          <b-row>
            <b-col cols="12">
              <b-form-group>
                <label for="">
                  <span class="text-danger">*</span>
                  Nominal :
                </label>
                <ValidationProvider v-slot="{ errors }" name="nominal" rules="required">
                  <b-form-input
                    id="input-nominal"
                    v-model="nominal"
                    type="text"
                    required
                    placeholder="Enter Nominal"
                  ></b-form-input>
                  <span class="small text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <b-button class="btn btn-primary ml-auto float-right ml-4" type="submit" variant="light-primary">
            Submit
          </b-button>
      </b-form>
    </ValidationObserver>
  </b-modal>
  
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      tahun: null,
      nominal: null,
    }
  },
  computed: {
    // ...mapState('student', ['dataUpdate'])
  },
  methods: {
    resetForm() {
      this.tahun = ''
      this.nominal = ''
    },
    onSubmit() {
      const dataSend = {
        tahun: this.tahun,
        nominal: this.nominal,
      };
      this.$store
        .dispatch('tuition/addTuition', dataSend)
        .then((resp) => {
          if (resp.status === 200) {
            this.$bvModal.hide('modal-add-tuition');
            this.$store.dispatch('tuition/getTuitions');
            this.resetForm();
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
  }
}
</script>

<style>

</style>