<template>
    <div class="container-fluid">
        <div class="row h-100">
            <div class="col-md-2 bg-main">
                <side-bar />
            </div>
            <div class="col-md-10">
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
    .bg-main {
        background: #fff;
        height: 100vh;
        box-shadow: 1px 1px 3px #ddd;
    }
</style>
