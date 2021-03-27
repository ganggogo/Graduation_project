import Vue from 'vue'
import VueRouter from 'vue-router'

const shouye = () => import ("../views/shouye/shouye.vue")
//首页公司地图
const companyaddress = () =>import("../views/shouye/shouyechild/gongsidizhi")
//首页一两天及其他
const yiliangtian = ()=>import('../views/shouye/shouyechild/yiliangtian')
const jingdianchangxian = ()=>import('../views/shouye/shouyechild/jingdianchangxian')
const shangchunhuodong = ()=>import('../views/shouye/shouyechild/shangchunhuodong')
const zuimeizhaopian = ()=>import('../views/shouye/shouyechild/zuimeizhaopian')
const cainixihuan = ()=>import('../views/shouye/shouyechild/cainixihuan')

const fenlei = () => import ("../views/fenlei/fenlei.vue")
const xingcheng = () => import ("../views/xingcheng/xingcheng.vue")
const gouwuche = () => import ("../views/gouwuche/gouwuche.vue")


//我的
const wode = () => import ("../views/wode/wode.vue")
const login = () => import("../views/wode/wodechild/login.vue")
const phoneyanzhenglogin = () => import("../views/wode/wodechild/phoneyanzhenglogin")
const register = ()=>import("../views/wode/wodechild/register")
const wangjimima = ()=>import("../views/wode/wodechild/wangjimima")


//分类页面
const changyongzhuangbei = () => import('views/fenlei/fenleichild/changyongzhuangbei.vue')
const nengliangshipin = () => import('views/fenlei/fenleichild/nengliangshipin.vue')
const nengliangyinliao = () => import('views/fenlei/fenleichild/nengliangyinliao.vue')
const zhangjiajietechan = () => import('views/fenlei/fenleichild/zhangjiajietechan.vue')
const xiangxitechan = () => import('views/fenlei/fenleichild/xiangxitechan.vue')
const xiangji = () => import('views/fenlei/fenleichild/xiangji.vue')
const chunzhuang = () => import('views/fenlei/fenleichild/chunzhuang.vue')
const xiazhuang = () => import('views/fenlei/fenleichild/xiazhuang.vue')
const qiuzhuang = () => import('views/fenlei/fenleichild/qiuzhuang.vue')
const dongzhuang = () => import('views/fenlei/fenleichild/dongzhuang.vue')
const dengshanxie = () => import('views/fenlei/fenleichild/dengshanxie.vue')
const fangshaifu = () => import('views/fenlei/fenleichild/fangshaifu.vue')
const huwaibeibao = () => import('views/fenlei/fenleichild/huwaibeibao.vue')
const qita = () => import('views/fenlei/fenleichild/qita.vue')
const minzufushi = () => import('views/fenlei/fenleichild/minzufushi.vue')


//详情页
const detail = ()=>import('views/detail/detail.vue')


//商品详情页
const goodsdetail = ()=>import('views/goodsdetail/goodsdetail.vue')




Vue.use(VueRouter)

const routes = [
    //首页
  {
    path:"",
    redirect:"/shouye"
  },
  {
    path:"/shouye",
    component:shouye,
    meta:{
      title:"首页"
    }
  },
  {
    path:"/shouye/yiliangtian",
    component:yiliangtian
  },
  {
    path:"/shouye/jingdianchangxian",
    component:jingdianchangxian
  },
  {
    path:"/shouye/shangchunhuodong",
    component:shangchunhuodong
  },
  {
    path:"/shouye/zuimeizhaopian",
    component:zuimeizhaopian
  },
  {
    path:"/shouye/cainixihuan",
    component:cainixihuan
  },
    //公司地址
  {
    path: '/shouye/companyaddress',
    component:companyaddress,
    meta:{
      title:"公司地址"
    },
  },
    //分类
  {
    path:"/fenlei",
    component:fenlei,
    meta:{
      title:"分类"
    },
    children:[
      {
        path:'',
        redirect:'/fenlei/changyongzhuangbei'
      },
      {
        path:'changyongzhuangbei',
        component:changyongzhuangbei
      },
      {
        path: 'nengliangyinliao',
        component:nengliangyinliao
      },
      {
        path: 'nengliangshipin',
        component:nengliangshipin
      },
      {
        path: 'zhangjiajietechan',
        component:zhangjiajietechan
      },
      {
        path: 'xiangxitechan',
        component:xiangxitechan
      },
      {
        path: 'minzufushi',
        component:minzufushi
      },
      {
        path: 'xiangji',
        component:xiangji
      },
      {
        path: 'chunzhuang',
        component:chunzhuang
      },
      {
        path: 'xiazhuang',
        component:xiazhuang
      },
      {
        path: 'qiuzhuang',
        component:qiuzhuang
      },
      {
        path: 'dongzhuang',
        component:dongzhuang
      },
      {
        path: 'dengshanxie',
        component:dengshanxie
      },
      {
        path: 'fangshaifu',
        component:fangshaifu
      },
      {
        path: 'huwaibeibao',
        component:huwaibeibao
      },
      {
        path: 'qita',
        component:qita
      }
    ]
  },
    //行程
  {
    path:"/xingcheng",
    component:xingcheng,
    meta:{
      title:"xingcheng"
    }
  },
    //购物车
  {
    path:"/gouwuche",
    component:gouwuche,
    meta:{
      title:"购物车"
    }
  },
  {
    path: "/wode",
    component: wode,
    meta: {
      title: "我的"
    }
  },

    //登录
  {
    path: '/login',
    component:login,
    meta:{
      title:'登录'
    }
  },
    //手机号验证码登录
  {
    path: '/phoneyanzhenglogin',
    component:phoneyanzhenglogin,
    meta:{
      title:'手机号验证码登录'
    }
  },
  //注册
  {
    path:'/register',
    component:register,
    meta:{
      title:'注册'
    }
  },
  //忘记密码
  {
    path:'/wangjimima',
    component:wangjimima,
    meta:{
      title:'忘记密码'
    }
  },
  //详情页
  {
    path:"/xingchengdetail/:id",
    component:detail,
    meta: {
      title:'详情页'
    }
  },
  //商品详情页
  {
    path:'/goodsdetail/:id',
    component:goodsdetail,
    meta:{
      title:'商品详情页'
    }
  }

]
const router = new VueRouter({
  //配置路径和组件之间的应用关系
  // router:router
  routes,
  mode:"history"
})


export default router