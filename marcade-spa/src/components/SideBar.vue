<template>
    <div class="container-fluid">
       <div class="row">
           <div class="col-md-12 d-flex flex-column align-center justify-center">
                <img src="../assets/man.png" class="img-fluid rounded-circle w-50" />
                <h5 class="mt-2 mb-0">Ogunboyejo Olatunde</h5>
                <span class="muted"> Software Engineer </span>
           </div>
       </div>
        <h4 class="mb-0 mt-5">SS3 Form Teacher</h4>
       <div class="row  mt-4 px-0 ">
           <router-link  tag='div' to='/dashboard' class="col-md-12 bg-grey pointer">
               Dashboard
           </router-link>
            <router-link  tag='div' :to='to' class="col-md-12 bg-grey mt-4 pointer" v-for="({ title, to}, index) in teacherRoles" :key='index'> 
                {{ title }}
           </router-link>
       </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            teacherRoles: [
                { title: 'Make Roll Call', to: '/roll-call' },
                { title: 'Subject Results', to: '/subjects/results' },
                { title: 'Student\'s Term Results' , to: '/roll-call' },
                { title: 'Broad Sheet', to: '/roll-call' },
                { title: 'Report Medical Incidence', to: '/roll-call' },
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
    .rounded-circle {
        object-fit: cover;
        background: #064475;
    }
    .bg-grey {
        background: #e9ecef;
    }
    .pointer {
        cursor: pointer;
    }
</style>
