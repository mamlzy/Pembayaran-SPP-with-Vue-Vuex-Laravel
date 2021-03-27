<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">
        <span class="page-title-icon bg-gradient-primary text-white mr-2">
          <i class="mdi mdi-account-card-details"></i>
        </span>Tuition</h3>
      <!-- <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">UI Elements</a></li>
          <li class="breadcrumb-item active" aria-current="page">Typography</li>
        </ol>
      </nav> -->
    </div>
    <div class="card shadow mb-4">
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
                  @click="openModalUpdate(props.row)"
                  >
                    <i class=""></i>
                    Edit
                  </button>
                  <button
                    class="btn btn-danger btn-sm btn-block"
                    @click="deleteTuition(props.row)"
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
      <EditTuition/>
      <AddTuition/>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import EditTuition from './EditTuition'
import AddTuition from './AddTuition'

export default {
  name: 'Tuition',
  components: {
    EditTuition,
    AddTuition
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
    ...mapActions('tuition', ['getTuitions']),
    openModalAdd() {
      this.$bvModal.show('modal-add-tuition')
    },
    openModalUpdate(payload) {
      console.log("modal tuition")
      this.$store.commit('tuition/SET_DATA_UPDATE', payload)
      this.$bvModal.show('modal-edit-tuition')
    },
    deleteTuition(payload) {
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
          this.$store.dispatch('tuition/deleteTuition', payload)
          .then((resp) => {
            if (resp.status === 200) {
              this.$store.dispatch('tuition/getTuitions');
              Swal.fire('Deleted!','Your data has been deleted.','success')
            } else {
              console.log('Add error')
              Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
            }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire(`Failed`, `Something Went Wrong!!`, 'error');
          });
        }
      })
    }
  },
  mounted() {
    this.getTuitions()
  }
}
</script>

<style>

</style>