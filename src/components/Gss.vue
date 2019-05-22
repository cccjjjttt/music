<template>
<div class="gss"  v-if="r" >
    <!-- 头部 -->
     <div class="nav">
      <van-icon class="p"  @click="go({name:'Gs',params:{active:ea}})"  name="arrow-left" />
  </div>
  <!-- 内容 -->
  <div class="gs" @click="go1({name:'Gd',params:{as:item.rul,bs:item.text,r:r,active:0}})" v-for="(item,index) in this.s" :key="index">
     <div class="t"><img class="auto-img" :src="item.rul"></div>
     <div class="n">
         <span>{{item.text}}</span>
         <van-icon class="d"  name="arrow" />
         <!-- <p>{{this.sj}}</p> -->
         </div>
  </div>


</div>
</template>
<script>
import { Icon } from 'vant';
export default {
    name:'Gss',
    data(){
        return{
            r:"",
            s:[],
            active:0,
             ea:2
        }
    },
    methods: {
        go(path){
            this.$router.push(path)
        },
        go1(path){
            this.$router.push(path)
        }
    },
    components:{
        [Icon.name]:Icon
    },
    created() {
     
      this.active = this.ea
       this.r = this.$route.params.r;
       console.log('rrrr',this.r)
         var s = localStorage.getItem(this.r);
            this.s =JSON.parse(s);
            console.log('sssss',this.s)
            
    },
}
</script>
<style lang="less" scoped>
.nav{
    z-index: 5;
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
.gs{
    z-index: 1;
    margin-top:0.33rem;
    margin-left:0.2rem;
    overflow: hidden;
  .t{
      float: left;
      border-radius: 50%;
      overflow: hidden;
      width:16%;
      height: 1.6rem;
      .auto-img{
          width: 100%;
          display: block;
      }
  }
  .n{
     position: relative;
      border-bottom:0.05rem solid #f2f2f2;
      margin-left:0.3rem;
      margin-top:0.4rem;
      height: 1.15rem;
      font-size:0.4rem;
      width: 80%;
      float: left;
      .d{
           position: absolute;
          right: 1rem;
          color:#b6b1b1;
        //   margin-left: 5rem;
        //   margin-top:0.2rem;
          font-size:0.5rem;
      }
  }
}
</style>
