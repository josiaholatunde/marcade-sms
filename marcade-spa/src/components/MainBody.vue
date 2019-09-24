<template>
    <div class="container-fluid">
        <div class="row h-100">
            <div class="col-md-2 bg-main vh-100">
                <side-bar />
            </div>
            <div class="col-md-10 bg-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
export default {
    name: 'MainBody',
    components: {
        SideBar
    }
}
</script>

<style lang='scss' scoped>
  
    .bg-content {
        background: #f6f7f9;
    }
    .vh-100 {
        height: 100vh;
    }
</style>
