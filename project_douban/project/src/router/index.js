import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '',
        component: require('../pages/mains'),
        children: [
            {
                path: 'in_theaters',
                component: require('../components/hot-today')
            },
            {
                path: 'coming_soon',
                component: require('../components/soon-coming')
            },
            {
                path: '',
                component: require('../components/hot-today')
            }
        ]
    },
    {
        path: '/search',
        component: require('../pages/search')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: require('../pages/detail')
    }
    ]
})
