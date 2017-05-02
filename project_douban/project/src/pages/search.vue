<template>
     <div>
        <div class="top-search">
            <router-link to='/in_theaters'><button class="back"></button></router-link>
            <button class="delete" @click='deleteInput'></button>
            <input type="text" name="search" v-model='searchMessage' @keyup.enter='search'>
        </div>
        <ul>
            <li class="movie-list" v-for='item in items'>
                <router-link :to="{name: 'detail', params: {id:item.id}}"><div>
                    <img :src='item.images.large'>
                    <div class="content">
                        <p class="title">{{item.title}}</p>
                        <p class="year">{{item.year}}</p>
                        <ul class="star">
                            <li :class="{'star-full': item.rating.average > 2, 'star-half': item.rating.average > 0}"></li>
                            <li :class="{'star-full': item.rating.average > 4, 'star-half': item.rating.average > 2}"></li>
                            <li :class="{'star-full': item.rating.average > 6, 'star-half': item.rating.average > 4}"></li>
                            <li :class="{'star-full': item.rating.average > 8, 'star-half': item.rating.average > 6}"></li>
                            <li :class="{'star-full': item.rating.average == 10, 'star-half': item.rating.average > 8}"></li>
                            <li class="score">{{item.rating.average}}</li>
                        </ul>
                        <div class="info-content">
                            <p class="fl">类型</p>
                            <p class="info-text" v-for='genre in item.genres'>/{{genre}}</p>
                        </div>
                        <div class="info-content">
                            <p class="fl">导演</p>
                            <p class="info-text" v-for='director in item.directors'>{{director.name}}</p>
                        </div>
                        <div class="info-content">
                            <p class="fl">主演</p>
                            <div class="asd">
                                <p class="info-text" v-for='author in item.casts'>/{{author.name}}</p>
                            </div>
                        </div>
                    </div>
                </div></router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
export default {
    data () {
        return {
            searchMessage: '',
            items: []
        }
    },
    methods: {
        search () {
            this.items
            this.searchMessage
            let self = this
            self.$http.get('/api/movie/search?q=' + self.searchMessage)
            .then(function (res) {
                self.items = res.data.subjects
            })
        },
        deleteInput () {
            this.searchMessage = ''
        }
    }
}
</script>

<style type="text/css" scoped>
    .top-search {
        width: 20rem;
        height: 2.8rem;
        border: 0.05rem solid #e3e3e4;
    }
    .back {
        width: 0.8rem;
        height: 0.8rem;
        background-image: url(../../static/img/back.png);
        background-size: 0.8rem 0.8rem;
        margin-top: 1rem;
        margin-left: 1.2rem;
        float: left;
    }
    .delete {
        width: 0.8rem;
        height: 0.8rem;
        background-image: url('../../static/img/delete.png');
        background-size: 0.8rem 0.8rem;
        margin-top: 1rem;
        margin-right: 1.4rem;
        float: right;
    }
    .top-search input {
        margin-left: 1rem;
        width: 14.5rem;
        height: 1.8rem;
        border: none;
        margin-top: 0.6rem;
        font-size: 1rem;
    }
    .top-search input:hover {
        outline: none;
    }
    .movie-list {
        width: 18.5rem;
        height: 7.8rem;
        margin-top: 0.5rem;
        margin-left: 0.7rem;
        margin-right: 0.7rem;
        border-radius: 0.2rem;
    }
    .movie-list img {
        float: left;
        height: 7.8rem;
        width: 5.6rem;
        margin-right: 0.5rem;
    }
    .content p {
        line-height: 1rem;
        font-family: "Microsoft Yahei", Arial;
        color:#212121;
    }
    .star {
        margin: 0.2rem 0;
        height: 0.6rem;
    }
    .star  li{
        float: left;
        width: 0.6rem;
        height: 0.6rem;
        background-image: url('../../static/img/star_empty.png');
        background-size: 0.6rem 0.6rem;
    }
    .star .star-half {
        background-image: url('../../static/img/star_half.png');
        background-size: 0.6rem 0.6rem;
    }
    .star .star-full {
        background-image: url('../../static/img/star_full.png');
        background-size: 0.6rem 0.6rem;
    }
    .info-content {
        padding-top: 0.1rem;
        width: 17rem;
        height: 1.4rem;
    }
    .info-content p {
        height: 1rem;
        color: #212121;
        font-size: 0.7rem;
    }
    .info-content .info-text {
        float: left;
        margin-left: 0.2rem;
        font-size: 0.7rem;
        height: 1rem;
        color: #888;
    }
    .star .score {
        margin-left: 0.2rem;
        margin-top: -0.2rem;
        width: 2rem;
        height: 1rem;
        line-height: 0.8rem;
        background-image: none;
        color:#FFA500;
        font-family: "Microsoft Yahei", Arial;
    }
    .asd {
        width: 10rem;
        height: 1rem;
        overflow: hidden; 
        white-space: nowrap; 
        text-overflow: ellipsis;
    }
</style>
