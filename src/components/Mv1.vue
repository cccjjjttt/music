<template>
<div class="mv1">
    <!-- 导航 -->
      <div class="nav">
      <van-icon class="p" @click="go({name:'Mv',params:{active:active}})"  name="arrow-left" />
  </div>
        
    <div class="gs" v-for="(item,index) in this.d" :key="index"  @click="go({name:'Bfmv',params:{a:a,b:item.id,c:item.name,active:active}})">
        <div class="t"><img class="auto-img" :src="item.pic"></div>
        <div class="n">
            <div class="nn">{{item.name}}</div>
            <div class="nt">{{item.singer}}}</div>
            
            <van-icon class="d"  name="arrow" />
        </div>
  </div>


    </div>
</template>
<script>
import { Icon } from 'vant';
export default {
    name:'Mv1',
     data(){
         return{
          d:[],
          a:[],
          active:''
         }
     },

    created(){
        this.active = this.$route.params.active
        console.log('dd',this.$route.params.active)
        console.log('ss',this.$route.params.a)
        this.a =this.$route.params.a
       this.axios({
        method: 'POST',
            url: 'https://api.itooi.cn/music/kuwo/songList?key=579621905&id='+this.a+'',
      }).then(result => {
          this.d = result.data.data.songs;
        console.log('result ==> ', this.d);
      })
    },

    methods:{
        go(path){
            this.$router.push(path)
        }
    },

    components:{
        [Icon.name]:Icon
    }
}
</script>
<style lang="less" scoped>
.nav{
    z-index:2;
    position: sticky;
    top:0;
    left:0;
    width:100%;
    height:1.2rem;
    background:red;
    .p{
        margin-top:0.2rem;
        font-size:0.9rem;
        color:#fff;
    }
}

.gs{
    margin-bottom:0.2rem;
    margin-top:0.33rem;
    margin-left:0.2rem;
    overflow: hidden;
  .t{
      float: left;
      overflow: hidden;
      width:26%;
      height: 1.6rem;
      .auto-img{
          width: 100%;
          display: block;
      }
  }
  .n{
      margin-left:0.2rem;
     position: relative;
      border-bottom:0.05rem solid #f2f2f2;
      font-size:0.4rem;
      width: 70%;
      float: left;
      .nn{
          color:#333;
          padding:0.2rem 0;
                    white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
           max-width: 5rem;
      }
      .nt{
          padding-bottom: 0.1rem;
          font-size:0.25rem;
          color:rgb(199, 194, 194);
      }
      .d{
           position: absolute;
          right:0;
          top:0;
          color:#b6b1b1;
          font-size:0.5rem;
      }
  }
}
</style>
