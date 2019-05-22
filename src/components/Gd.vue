<template>
<div class="gd">
  <!-- 头部 -->
     <div class="nav">
      <van-icon class="p" @click="go({name:'Gss',params:{r:r}})"   name="arrow-left" />
  </div>
  <!-- 图 -->
  <div class="t">
      <img class="auto-img" :src="this.as">
      <div class="w">
          <span>{{this.bs}}</span></div>
  </div>
  <!-- 分页 -->
  <van-tabs v-model="active" color="#000" class="van" >
  <van-tab title="单曲">
   <div class="dq" v-for="(item,index) in this.d.slice(0,14)" :key="index" @click="go({name:'Bfyy1',params:{active:ea,as:as,bs:bs,r:r,index:index}})">
       <div class="dq-l">
       <div class="dq-t">{{item.name}}</div>
       <div class="dq-n">{{item.singer}}</div>
       </div>
       <div class="dq-r">
           <van-icon name="play-circle-o" />
           </div>
   </div>

  </van-tab>
  <van-tab title=" 专辑">
       <div class="zj" v-for="(item,index) in this.z.slice(0,14)" :key="index">
           <div class="zj1"><div class="t"><img class="auto-img" :src="item.pic"></div></div>
           <div class="zj2">
               <div class="n">{{item.name}}</div>
               <div class="s">{{item.publicTime}}</div>
           </div>
       </div>
  </van-tab>
  <van-tab title="MV">
      <div class="zj1" v-for="(item,index) in this.m.slice(0,14)" :key="index">
           <div class="zj1"><div class="t"><img class="auto-img" :src="item.pic"></div></div>
           <div class="zj2">
               <div class="n">{{item.name}}</div>
               <div class="s">{{item.singer}}</div>
           </div>
       </div>
  </van-tab>
</van-tabs>
    </div>
</template>
<script>
import { Icon,Tab, Tabs  } from 'vant';
export default {
    name:'Gd',
    data(){
        return{
            active:0,
            d:[],
            z:[],
            m:[],
            r:"",
            s:5.68,
            ea:2,
            as:'',
            ds:''
        }
    },
    methods: {
        go(path){
            this.$router.push(path)
        }
    },
      created() {
          this.as=this.$route.params.as
           this.bs=this.$route.params.bs
          console.log( this.$route.params.active)
          this.active = this.$route.params.active
        this.r=this.$route.params.r
        console.log('srs',this.$route.params.r)
          //请求单曲
      this.axios({
        method: 'POST',
            url: 'https://api.itooi.cn/music/kuwo/search?key=579621905&s='+this.bs+'&limit=100&offset=0&type=song ',
      }).then(result => {
          this.d = result.data.data;
        console.log('result ==> ', this.d);
      })
      //请求专辑
      this.axios({
        method: 'POST',
            url: 'https://api.itooi.cn/music/kuwo/search?key=579621905&s='+this.bs+'&limit=100&offset=0&type=album ',
      }).then(result => {
          this.z = result.data.data;
        console.log('resultmm ==> ', this.m);
      })
      //获取mv
      this.axios({
        method: 'POST',
            url: 'https://api.itooi.cn/music/kuwo/search?key=579621905&s='+this.bs+'&limit=100&offset=0&type=mv ',
      }).then(result => {
          this.m = result.data.data;
        console.log('resultmm ==> ', this.m);
      })
    },
      components:{
        [Icon.name]:Icon,
        [Tab.name]:Tab,
        [Tabs.name]:Tabs
    },
    mounted(){
     	var v = document.querySelector(".van-tabs__wrap")
     	v.style.position="sticky"
     	v.style.top = this.s + 'rem'
     	var v1 = document.querySelector('.van-tabs')
     	v1.style.paddingTop = 0
     },
}
</script>
<style lang="less" scoped>
.van{
    z-index: 2;
}
.nav{
    z-index: 6;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:1.2rem;
    background:rgba(0,0,0,.5);
    .p{
        margin-top:0.2rem;
        font-size:0.9rem;
        color:#fff;
    }
}
.t{
    position: sticky;
    top:0;
    left:0;
    z-index: 5;
    width:100%;
    .auto-img{
        height: 5.7rem;
        width:100%;
        display: block;
    }
    .w{
        font-size:0.5rem;
        color:#fff;
        width:100%;
        height: 1rem;
        line-height: 1rem;
        background:rgba(0,0,0,.4);
        position: absolute;
        left:0;
        bottom:0;
        span{
            margin-left:0.3rem;
        }
    }
}
.dq{
    overflow: hidden;
    border-bottom:0.03rem  solid rgb(216, 214, 214);
    padding:0.2rem 0;
    .dq-l{
        float: left;
       .dq-t{
           white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
           max-width: 5rem;
         margin-left:0.2rem;
        font-size:0.4rem;
        color:#333;
         }
    .dq-n{
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
           max-width: 5rem;
            margin-left:0.2rem;
        color:rgb(148, 147, 147);
          }
    }
    .dq-r{
        font-size:0.8rem;
        float:right;
        margin-right: 0.8rem;
        margin-top:0.1rem;
        color:rgb(90, 88, 88);
    }
}
.zj{
    margin-bottom:0.3rem;
    overflow: hidden;
    .zj1{
        width:23%;
        float: left;
        .t{
            margin-left:0.5rem ;
            width:1.6rem;
            .auto-img{
                height:1.5rem;
                width:100%;
                display: block;
            }
        }
    }
    .zj2{
        border-bottom:0.03rem solid rgb(212, 209, 209);
        width:75%;
        float:left;
        .n{
            margin:0.15rem 0;
            color:#333;
        }
        .s{
            margin-bottom: 0.3rem;
            color:rgb(134, 132, 132);
        }
    }
}
.zj1{
    margin-bottom:0.3rem;
    overflow: hidden;
    .zj1{
        width:30%;
        float: left;
        .t{
            margin-left:0.3rem ;
            width:2.3rem;
            .auto-img{
                height:1.5rem;
                width:100%;
                display: block;
            }
        }
    }
    .zj2{
        border-bottom:0.03rem solid rgb(212, 209, 209);
        width:70%;
        float:left;
        .n{
            margin:0.15rem 0;
            color:#333;
        }
        .s{
            margin-bottom: 0.3rem;
            color:rgb(134, 132, 132);
        }
    }
}
</style>
