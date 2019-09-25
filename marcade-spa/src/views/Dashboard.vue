<template>
    <div class="container-fluid py-3 px-5">
        <div class="row">
            <div class="col-md-4">
                <h4>Hi, Ogunboyejo Olatunde</h4>
                <div class="text-muted"> You have 5 messages and 10 notifications </div>
                <span class="text-muted"> Here is what's happening with your work report today </span>
            </div>
        </div>
        <section id="reports">
            <div class="row h-100 card-custom">
                <div class="col-md-6">
                    <v-card class="h-100 p-3" >
                        Main Report Dashboard
                    </v-card>
                </div>
                <div class="col-md-6 card-custom px-0">
                    <div class="row  text-white h-100 justify-center w-100" >
                        <div class="ml-7 mb-5 col-md-5 bg-danger">
                            <div class="h-100">
                                <h5>Sales Today</h5>
                                <div class="d-flex mt-12  justify-space-between">
                                    <i class="material-icons">truck</i>
                                    <div class="d-flex flex-column align-center justify-space-between">
                                        <h6>Sales Today</h6>
                                        <span class="lead"> 4567 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="col-md-5 mb-5 bg-orange ml-7 h-40">
                            <div class="h-100">
                                <h5>Sales Today</h5>
                                <div class="d-flex mt-12  justify-space-between">
                                    <i class="material-icons">truck</i>
                                    <div class="d-flex flex-column align-center justify-space-between">
                                        <h6>Sales Today</h6>
                                        <span class="lead"> 4567 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="ml-7 col-md-5 bg-green  h-40 mb-md-0 mb-sm-3">
                            <div class="h-100">
                                <h5>Sales Today</h5>
                                <div class="d-flex mt-12  justify-space-between">
                                    <i class="material-icons">truck</i>
                                    <div class="d-flex flex-column align-center justify-space-between">
                                        <h6>Sales Today</h6>
                                        <span class="lead"> 4567 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="col-md-5 bg-blue  ml-7 h-40">
                            <div class="h-100">
                                <h5>Sales Today</h5>
                                <div class="d-flex mt-12  justify-space-between">
                                    <i class="material-icons">truck</i>
                                    <div class="d-flex flex-column align-center justify-space-between">
                                        <h6>Sales Today</h6>
                                        <span class="lead"> 4567 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Dashboard'
}
</script>

<style lang='scss' scoped>
    .card-custom  {
        height: 25rem;
    }
    .v-card {
         background: #fff !important;
        box-shadow: 1px 1px 3px #ddd;
    }
    .bg-orange {
        background: #fb8c00 !important;
    }
    .bg-green {
        background: #4caf50;
    }
    .bg-blue {
        background: #2196f3;
    }
</style>
