<template>
<div class="bfmv">
    <!-- 头部 -->
  <div class="nav">
      <van-icon class="p" @click="go({name:'Mv1',params:{a:a,active:active}})" name="arrow-left" />
  </div>
  <!-- 内容 -->
  <div class="box">
      <video :src="this.d.url" controls="controls"  autoplay="autoplay" width="100%" height="100%"></video>
       <div class="box1">
           <div class="t">{{this.c}}</div>
           <div class="t1">
               <span>{{this.d.author}}</span>
               <span class="yp">音频版</span>
               </div>
       </div>
  </div>
  <!-- 推荐 -->
  <div class="tj" v-for="(item,index) in this.ty.slice(0,20)" :key="index">
      <div class="t"><img class="auto-img" :src="item.pic"></div>
      <div class="w">
          <div class="w-n">{{item.name}}</div>
          <div class="w-t">{{item.singer}}</div>
      </div>
  </div>

 

 </div>
</template>
<<script>
import { Icon } from 'vant';
export default {
    name:'Bfmv',
    data(){
       return{
           ty:[],
           a:'',
           b:'',
           c:'',
           d:'',
           active:''
       }
    },
    methods: {
        go(path){
this.$router.push(path)
        }
        
    },
    components:{
        [Icon.name]:Icon
    },
      created() {
          this.active = this.$route.params.active
          console.log( this.$route.params.active)
        //   传参值
          this.a=this.$route.params.a;
          this.b=this.$route.params.b;
         this.c=this.$route.params.c;
          console.log('ssid',this.c);
          //歌单mv
         this.axios({
        method: 'POST',
            url: 'https://api.itooi.cn/music/kuwo/mv?key=579621905&id='+this.b+'',
      }).then(result => {
          this.d = result.data.data;
        console.log('result ==> ', this.d);
      })
   //推荐mv
      this.axios({
        method: 'POST',
            url: 'https://api.itooi.cn/music/kuwo/search?key=579621905&s=张&limit=100&offset=0&type=mv',
      }).then(result => {
          this.ty = result.data.data;
        console.log('result ==> ', this.ty);
      })
    }
}
</script>
<style lang="less" scoped>

.nav{
    position: sticky;
    top:0;
    left:0;
    width:100%;
    height:1.3rem;
    background:#D43C33;
    .p{
        margin-top:0.2rem;
        font-size:0.9rem;
        color:#fff;
    }
}
.box{
     position: sticky;
     top:1.3rem;
     left:0;
}
.box1{
    position: relative;
    top:-0.1rem;
    border-bottom:0.4rem solid #e5e5e5; 
    background:#fff;
    padding:0.4rem 0 0.2rem 0;
    .t{
            font-size: 0.45rem;
            color:#333;
        margin-left:0.2rem;
        margin-bottom: 0.1rem;
    }
    .t1{
        color:#666;
         margin-left:0.2rem;
         .yp{
             margin-left: 0.2rem;
             color:#fff;
             padding:0 0.1rem;
             background: #1da0ef;
             border-radius: 0.2rem;
         }
    }
}
    .tj{
        border-bottom:0.05rem solid #e5e5e5;
        overflow: hidden;
        padding: 0.1rem 0;
        width: 100%;
        background: #fff;
    .t{
        margin-left: 0.2rem;
        float: left;
        width: 3rem;
       .auto-img{
             height: 1.8rem;
           width:100%;
           display: block;
       } 
    }
    .w{
        margin-left:0.4rem;
        float: left;
        .w-n{
            margin-top:0.2rem;
            font-size: 0.45rem;
        }
        .w-t{
            margin-top:0.2rem;
            font-size: 0.3rem;
            color:#666;
                 white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
           max-width: 5rem;
        }
    }
    }
</style>