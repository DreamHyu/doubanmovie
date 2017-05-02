<template>
    <div class="detail">
        <div class="detail-top">
            <button @click='back'></button>
            <div id="detail-top-img" :style="'background-image: url('+detail.images.large+')'"></div>
        </div>
        <div class="detail-show">
            <div class="info">
                <img :src='detail.images.large'>
                <div class="text">
                    <p>{{detail.title}}</p>
                    <p>{{detail.rating.average}}</p>
                </div>
            </div>
        </div>
        <div class="star">
            <ul>
                <li :class="{'star-full': detail.rating.average > 2, 'star-half': detail.rating.average > 0}"></li>
                <li :class="{'star-full': detail.rating.average > 4, 'star-half': detail.rating.average > 2}"></li>
                <li :class="{'star-full': detail.rating.average > 6, 'star-half': detail.rating.average > 4}"></li>
                <li :class="{'star-full': detail.rating.average > 8, 'star-half': detail.rating.average > 6}"></li>
                <li :class="{'star-full': detail.rating.average == 10, 'star-half': detail.rating.average > 8}"></li>
            </ul>
        </div>
        <div class="movie-info">
            <div class="info-content">
                <p>原名</p>
                <p class="info-text">{{detail.title}}</p>
                <div class="cleanfix"></div> 
            </div>
            <div class="info-content">
                <p>类型</p>
                <p class="info-text" v-for='genre in detail.genres'>/{{genre}}</p>
                <div class="cleanfix"></div> 
            </div>
            <div class="info-content">
                <p>年代</p>
                <p class="info-text">{{detail.year}}</p>
                <div class="cleanfix"></div> 
            </div>
            <div class="info-content">
                <p>地区</p>
                <p class="info-text">{{detail.countries}}</p>
                <div class="cleanfix"></div> 
            </div>
            <div class="info-content">
                <p>又名</p>
                <p class="info-text" v-for='ak in detail.aka'>/{{ak}}</p>
                <div class="cleanfix"></div> 
            </div>
            <div class="info-content">
                <p>想看人数</p>
                <p class="info-text">{{detail.wish_count}}</p>
                <div class="cleanfix"></div> 
            </div>
            <div class="info-content">
                <p>看过人数</p>
                <p class="info-text">{{detail.collect_count}}</p>
                <div class="cleanfix"></div> 
            </div>
            <div class="info-content">
                <p>评分人数</p>
                <p class="info-text">{{detail.ratings_count}}</p>
                <div class="cleanfix"></div> 
            </div>
            <div class="info-content">
                <p>短评人数</p>
                <p class="info-text">{{detail.comments_count}}</p>
                <div class="cleanfix"></div> 
            </div>
            <div class="info-content">
                <p>影评人数</p>
                <p class="info-text">{{detail.reviews_count}}</p>
                <div class="cleanfix"></div> 
            </div>
        </div>
        <div class="summary" v-html='detail.summary'></div>
        <div class="show-people">
            <p>导演</p>
            <div class="author">
                <img :src='detail.directors[0].avatars.large'>
                <p class="author-name">{{detail.directors[0].name}}</p>
            </div>
            <div class="cleanfix"></div>
        </div>
        <div class="show-people">
            <p>演员</p>
            <div class="author" v-for='author in detail.casts'>
                <img :src='author.avatars.large'>
                <div class="asd">
                    <p class="author-name">{{author.name}}</p>
                </div>
            </div>
            <div class="cleanfix"></div>
        </div>
    </div>
</template>

<script type="text/javascript">
import router from '../router'
export default {
    data () {
        return {
            detail: {},
            id: ''
        }
    },
    methods: {
        back () {
            router.go(-1)
        }
    },
    created () {
        this.id = this.$route.path.slice(8)
        let self = this
        self.$http.get('api/movie/subject/' + self.id)
        .then(function (res) {
            self.detail = res.data
        })
    }
}
</script>

<style type="text/css" scoped>
    .detail {
        position: relative;
        background-color: #f5f5f5;
    }
    .detail-top {
        height: 16rem;
        width: 20rem;
    }
    .detail-top button {
        position: absolute;
        width: 1.2rem;
        height: 1.2rem;
        top: 0.6rem;
        left: 0.6rem;
        background-image: url('../../static/img/back.png');
        z-index: 4;
        opacity: 0.5;
    }
    #detail-top-img {
        background-image: url('../../static/img/movie-poster.jpg');
        background-size: cover;
        width: 20rem;
        height: 16rem;
    }
    .detail-show {
        background-color: #f5f5f5;
        padding: 1rem;
        width: 18rem;
        height: 2.8rem;
        box-shadow: 0 0 0.7rem 0.2rem #ccc;
    }
    .info {
        position: relative;
        width: 18rem;
        height: 2.8rem;
    }
    .info img {
        width: 6rem;
        position: absolute;
        bottom: 0;
        width: 5.4rem;
        height: 7.5rem;
    }
    .info .text {
        padding-left: 108px;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        width: 12.6rem;
        height: 2.4rem;
    }
    .info .text p {
        padding-left: 0.7rem;
        font-size: 0.8rem;
        font-family: "Microsoft Yahei",Arial;
        color:#000;
        line-height: 1.2rem;
    }
    .star {
        width: 20rem;
        height: 2.6rem;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        background-color: #eee;
    }
    .star ul {
        width: 10.5rem;
        height: 2.6rem;
        margin: 0 auto;
    }
    .movie-info {
        background-color: #f5f5f5;
        padding: 1.5rem;
    }
    .info-content {
        margin-top: 0.7rem;
        width: 17rem;
       /* height: 2.1rem;*/
    }
    .info-content p {
        height: 1rem;
        color: #212121;
        font-size: 0.7rem;
    }
    .info-content .info-text {
        float: left;
        font-size: 0.7rem;
        height: 1rem;
        color: #888;
    }
    .summary {
        background-color: #eee;
        padding: 1.5rem 1rem;
        color:#212121;
        font-family: "Microsoft Yahei", Arial;
        font-size: 0.7rem;
    }
    .show-people {
        padding: 1.2rem;
    }
    .author {
        float: left;
        height: 6.3rem;
        width: 8.25rem;
    }
    .author img {
        float: left;
        height: 6.3rem;
        width: 4.125rem;
    }
    .author p {
        float: left;
        width: 3.5rem;
        font-size: 0.7rem;
        color: #474a4f;
        padding: 0.5rem 0.3rem;
    }
    .star  li{
        float: left;
        width: 2.1rem;
        height: 2.1rem;
        background-image: url('../../static/img/star_empty.png');
        background-size: 2.1rem 2.1rem;
    }
    .star .star-half {
        background-image: url('../../static/img/star_half.png');
        background-size: 2.1rem 2.1rem;
    }
    .star .star-full {
        background-image: url('../../static/img/star_full.png');
        background-size: 2.1rem 2.1rem;
    }
    .author .asd {
        width: 10rem;
        overflow: hidden; 
        white-space: nowrap; 
        text-overflow: ellipsis;
    }
</style>
