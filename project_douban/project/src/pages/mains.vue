<template>
    <div>
        <navtop></navtop>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">

import navtop from '../components/nav-top.vue'
export default {
    components: {
        navtop
    }
}
</script>

<style type="text/css" scoped></style>
