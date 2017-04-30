<template>
    <div class="nav-top">
        <div class="nav-top-control">
            <button class="sider"></button>
            <h1>电影</h1>
            <router-link to='/search'><button class="search"></button></router-link>
        </div>
        <div class="content-change">
            <router-link to='/in_theaters'><p class="hot" @click='styleChangeOne' :class="{'phover': isClick}">正在热映</p></router-link>
            <router-link to='/coming_soon'><p class="soon" @click='styleChangeOne' :class="{'phover': !isClick}">即将上映</p></router-link>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data () {
        return {
            isClick: true
        }
    },
    methods: {
        styleChangeOne () {
            this.isClick = !this.isClick
        }
    }
}
</script>

<style type="text/css" scoped>
    .nav-top {
        width: 20rem;
        height: 5.2rem;
        background-color: #474a4f;
    }
    .nav-top-control {
        width: 20rem;
        height: 1rem;
        padding-top: 0.9rem;
    }
    .nav-top-control .sider {
        width: 1rem;
        height: 1rem;
        background-image: url('../../static/img/sider.png');
        background-size: 1rem 1rem;
        float: left;
        margin-left: 1.1rem;
    }
    .nav-top-control h1 {
        color:#c4c4c6;
        float: left;
        line-height: 1rem;
        font-family: "Microsoft Yahei", Arial;
        font-weight: normal;
        font-size: 1rem;
        margin-left: 1.2rem;
    }
    .nav-top-control .search {
        float: right;
        background-image: url('../../static/img/search.png');
        width: 1rem;
        height: 1rem;
        background-size: 1rem 1rem;
        margin-right: 1.1rem;
    }
    .content-change {
        height: 2.3rem;
        margin-top: 1rem;
    }
    .content-change .hot {
        float: left;
        width: 10rem;
        text-align: center;
        font-family: "Microsoft Yahei", Arial;
        line-height: 2.2rem;
    }
    .content-change .soon {
        float: right;
        width: 10rem;
        text-align: center;
        font-family: "Microsoft Yahei", Arial;
        line-height: 2.2rem;
    }
    .content-change p {
        color:#c8c9ca;
        border-bottom: 0.1rem solid #474a4f;
    }
    .content-change .phover {
        color:#fff;
        border-bottom: 0.1rem solid #ff5252;
    }
</style>
