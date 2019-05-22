import comroutes from './comroutes.js'
export default [
    {
        path: '/',
        name: 'Index',
        component: comroutes.Index,
        children:[
            {
                path: '/',
                name: 'Wo',
                component: comroutes.Wo
            },
        {
            path: '/ph',
            name: 'Ph',
            component: comroutes.Ph
        },
        {
            path: '/gs',
            name: 'Gs',
            component: comroutes.Gs
        },
        {
            path: '/mv',
            name: 'Mv',
            component: comroutes.Mv
        }
    ]
    },
    {
        path: '/bfmv',
        name: 'Bfmv',
        component: comroutes.Bfmv
    },
    {
        path: '/gss',
        name: 'Gss',
        component: comroutes.Gss
    },
    {
        path: '/sj',
        name: 'Sj',
        component: comroutes.Sj
    },
    {
        path: '/gd',
        name: 'Gd',
        component: comroutes.Gd
    },
    {
        path: '/pg',
        name: 'Pg',
        component: comroutes.Pg
    },
    {
        path: '/mv1',
        name: 'Mv1',
        component: comroutes.Mv1
    },
    {
        path: '/Wogd',
        name: 'Wogd',
        component: comroutes.Wogd
    },
    {
        path: '/bfyy',
        name: 'Bfyy',
        component: comroutes.Bfyy
    },
    {
        path: '/bfyy1',
        name: 'Bfyy1',
        component: comroutes.Bfyy1
    }
  
  
]