<template>
<div class="index">
  <!-- 导航 -->
<div class="nav">
   <van-icon class="t1" name="user-circle-o" size="25px" color="#fff" />
  <van-icon class="t2" name="search" size="25px" color="#fff" />
</div>
<!-- 分页 -->
      <van-tabbar v-model="active" class="c">
		    <van-tabbar-item @click="go(item.path)"  v-for="(item, index) in ss" :key="index" >{{item.text}}</van-tabbar-item>
		</van-tabbar>
 <div><router-view></router-view></div>
</div>
</template>
<script>
import { Icon , Tabbar, TabbarItem} from 'vant'
import $ from 'jquery'
import qs from 'qs'
export default {
    name:'Index',
 data(){
   return{
     active:0,
      ss:[
      {text:'推荐',path:({name:'Wo',params:{active:0}})},
       {text:'排行',path:({name:'Ph',params:{active:1}})},
        {text:'歌手',path:({name:'Gs',params:{active:2}})},
         {text:'MV',path:({name:'Mv',params:{active:3}})},
      ]
   }
 },
    components:{
        [Icon.name]:Icon,
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem
    },
    created() {
      this.active = this.$route.params.active
    },
     methods:{
       go(path){
         this.$router.push(path)
       }
     }
}
</script>
<style lang="less" scoped>
 .nav{
   z-index:5;
   position: sticky;
   width:100%;
   height:1.3rem;
   background:#D43C33;
   top:0;
   left:0;
       .t1{
        float:left;
        margin: 0.2rem 0 0 0.4rem ;
   }
   .t2{
    float:right;
    margin: 0.2rem 0.7rem 0 0 ;
   }  
 }
.c{
  z-index: 99;
  position: sticky;
  top:1.3rem;
  left:0;
  background:#fff;
}
</style>
