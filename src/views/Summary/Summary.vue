<template>
  <div>
    <div class="page-header">
      <h3 class="page-title">
        <span class="page-title-icon bg-gradient-primary text-white mr-2">
          <i class="mdi mdi-chart-bar"></i>
        </span> Summary
      </h3>
      <nav aria-label="breadcrumb">
        <ul class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <span></span>Overview <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
          </li>
        </ul>
      </nav>
    </div>
    <div class="row">
      <div class="col-md-4 stretch-card grid-margin">
        <div class="card bg-gradient-danger card-img-holder text-white shadow">
          <div class="card-body">
            <img src="purple/assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
            <h4 class="font-weight-normal mb-3">Total Students <i class="mdi mdi-chart-line mdi-24px float-right"></i>
            </h4>
            <h2 class="mb-5">{{ studentsCount ? studentsCount  : 0 }}</h2>
            <!-- <h6 class="card-text">Increased by 60%</h6> -->
          </div>
        </div>
      </div>
      <div class="col-md-4 stretch-card grid-margin">
        <div class="card bg-gradient-info card-img-holder text-white shadow">
          <div class="card-body">
            <img src="purple/assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
            <h4 class="font-weight-normal mb-3">Total Classess <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
            </h4>
            <h2 class="mb-5">{{ classCount ? classCount : 0 }}</h2>
            <!-- <h6 class="card-text">Decreased by 10%</h6> -->
          </div>
        </div>
      </div>
      <div class="col-md-4 stretch-card grid-margin">
        <div class="card bg-gradient-success card-img-holder text-white shadow">
          <div class="card-body">
            <img src="purple/assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
            <h4 class="font-weight-normal mb-3">Visitors Online <i class="mdi mdi-diamond mdi-24px float-right"></i>
            </h4>
            <h2 class="mb-5">{{ onlineCount ? onlineCount : 0 }}</h2>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="text-center">Total Kelas Per Jurusan</h3>
            <div id="chart" v-if="classPerMajorCount">
              <apexchart type="pie" width="380" :options="chartOptions" :series="classPerMajorCount" v-if="classPerMajorCount.length > 0"></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['RPL', 'TKJ', 'TEI', 'BC', 'MM'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    }
  },
  computed: {
    ...mapState('summary', ['studentsCount', 'classCount', 'classPerMajorCount','onlineCount']),
    
  },
  methods: {
    ...mapActions('summary', ['countStudents','countClassrooms','countClassPerMajor','countOnline']),
    ...mapActions('user', ['getLogin']),
    
  },
  mounted() {
    this.countStudents()
    this.countClassrooms()
    this.countOnline()
    this.countClassPerMajor()
    // this.getLogin()
    // .then(() => {
    //   Object.values(this.classPerMajorCount).map(i => {
    //     return this.series.push(Number(i));
    //   });
    //     console.log("LEAD CHART SERIE ===>", this.series);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

}
</script>

<style>

</style>