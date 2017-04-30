<template>
    <div class="soon-coming-content">
        <ul>
            <li class="movie-show" v-for='item in items'>
                <router-link :to="{name: 'detail', params: {id:item.id}}"><div>
                    <img :src='item.images.large'>
                    <p>{{item.title}}</p>
                    <ul class="star">
                        <li :class="{'star-full': item.rating.average > 2, 'star-half': item.rating.average > 0}"></li>
                        <li :class="{'star-full': item.rating.average > 4, 'star-half': item.rating.average > 2}"></li>
                        <li :class="{'star-full': item.rating.average > 6, 'star-half': item.rating.average > 4}"></li>
                        <li :class="{'star-full': item.rating.average > 8, 'star-half': item.rating.average > 6}"></li>
                        <li :class="{'star-full': item.rating.average == 10, 'star-half': item.rating.average > 8}"></li>
                    </ul>
                    <h1>{{item.rating.average}}</h1>
                </div></router-link>
            </li>
            <div class="cleanfix"></div>
        </ul>
    </div>
</template>

<script type="text/javascript">
export default {
    data () {
        return {
            items: [{
                img: '',
                title: '',
                rating: {
                    average: 0,
                    max: 10,
                    min: 0
                },
                id: ''
            }]
        }
    },
    methods: {
    },
    created () {
        let self = this
        this.$http.get('/api/movie/coming_soon')
        .then(function (res) {
            self.items = res.data.subjects
        })
    }
}
</script>

<style type="text/css" scoped>
    .soon-coming-content ul {
        width: 20rem;
    }
    .movie-show {
        float: left;
        width: 5.8rem;
        height: 10.4rem;
        margin-top: 0.6rem;
        margin-left: 0.6rem;
        box-shadow:0px 0px 0.1rem black;
    }
    .movie-show img {
        width: 5.8rem;
        height: 8.2rem;
    }
    .movie-show p {
        width: 5.5rem;
        color:#212121;
        line-height: 0.7rem;
        font-size: 0.7rem;
        margin-left: 0.3rem;
        font-family: "Microsoft Yahei",Arial;
        overflow: hidden; 
        white-space: nowrap; 
        text-overflow: ellipsis;

    }
    .movie-show ul {
        float: left;
        width: 3rem;
        height: 0.6rem;
        margin-left: 0.3rem;
        margin-top: 0.2rem;
    }
    .movie-show .star  li{
        float: left;
        width: 0.6rem;
        height: 0.6rem;
        background-image: url('../../static/img/star_empty.png');
        background-size: 0.6rem 0.6rem;
    }
    .movie-show .star .star-half {
        background-image: url('../../static/img/star_half.png');
        background-size: 0.6rem 0.6rem;
    }
    .movie-show .star .star-full {
        background-image: url('../../static/img/star_full.png');
        background-size: 0.6rem 0.6rem;
    }
    .movie-show h1 {
        float: left;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        line-height: 0.6rem;
        color:#ff6f00;
        font-size: 0.6rem;
    }
</style>
