<template>
  <div class="mv">
      <div class="lie" v-for="(item,index) in this.ty" :key="index" @click="go({name:'Mv1',params:{a:item.id,active:active}})">
          <div class="t"><img class="auto-img" :src="item.url"></div>
          <div class="p">{{item.text}}<div class="pp"> <van-icon name="play-circle-o" /></div></div>
       
      </div>
  </div>
</template>
<script>
import { Icon } from 'vant';
import $ from 'jquery'
import qs from 'qs'
export default {
    name:'Mv',
    data(){
        return{
            active:'',
          ty:[
              {url:'http://img3.kwcdn.kuwo.cn/star/userpl2015/73/46/1464249583559_66069973_120.jpg',text:'首播',id:236682871},
                {url:'http://img2.kwcdn.kuwo.cn/star/userpl2015/73/46/1458287114515_66069973_120.jpg',text:'排行',id:1220837352},
                {url:'http://img4.kwcdn.kuwo.cn/star/userpl2015/73/46/1464249796657_66069973_120.jpg',text:'华语',id:236682731},
                {url:'http://img3.kwcdn.kuwo.cn/star/userpl2015/73/46/1464249879617_66069973_120.jpg',text:'欧美',id:236682735},
                {url:'http://img3.kwcdn.kuwo.cn/star/userpl2015/73/46/1464249661441_66069973_120.jpg',text:'日韩',id:236742444},
                {url:'http://img4.kwcdn.kuwo.cn/star/userpl2015/73/46/1464839621489_66069973_120.jpg',text:'网络',id:236682773},
                {url:'http://img3.kwcdn.kuwo.cn/star/userpl2015/73/46/1464839832154_66069973_120.jpg',text:'热舞',id:236682777},
                {url:'http://img4.kwcdn.kuwo.cn/star/userpl2015/73/46/1465292690057_66069973_120.jpg',text:'经典',id:236742496},
                {url:'http://img3.kwcdn.kuwo.cn/star/userpl2015/73/46/1464839381409_66069973_120.jpg',text:'伤感',id:236742508},
                {url:'http://img2.kwcdn.kuwo.cn/star/userpl2015/73/46/1458286960632_66069973_120.jpg',text:'美女',id:236742514},
                {url:'http://img1.kwcdn.kuwo.cn/star/upload/7/7/1443004086391_.jpg',text:'禁播',id:236742510},
                {url:'http://img2.kwcdn.kuwo.cn/star/userpl2015/73/46/1441868226984_66069973_120.jpg',text:'性感',id:236682801},
                {url:'http://img1.kwcdn.kuwo.cn/star/userpl2015/73/46/1442987148880_66069973_120.jpg',text:'现场',id:236742576}
          ]
        }
    },
    created() {
       this.active = this.$route.params.active
       console.log(this.$route.params.active)
        console.log('s',this.ty)
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
.lie{
    width:100%;
    padding: 0.1rem 0;
    overflow: hidden;

    .t{
        margin-left: 0.3rem;
        float: left;
        width:1.7rem;
        .auto-img{
            height:1.8rem;
            width:100%;
            display: block;
        }
    }
    .p{
        border-bottom: 0.03rem solid rgb(156, 154, 154);
         margin-left: 0.3rem;
        color:#333;
        font-size:0.3rem;
        height:1.8rem;
        line-height: 1.8rem;
        width:74%;
        float: left;
          .pp{
      font-size:0.7rem;
      color:#333;
         float: right;
         margin-right: 0.7rem;
    
    }
    }

}
</style>
