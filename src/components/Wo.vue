<template>
<div class="wo">
  <!-- 轮播图 -->
<div class="slideshow">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="auto-img" :src="image.url">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 内容 -->
    <div class="box">
      <!-- 1 -->
      <div class="box-1">
        <div class="box1T">每日新歌</div>
        <div class="box1n">
          <div class="t"><img @click="go({name:'Wogd',params:{a:'1082685104',active:0}})" class="auto-img" src="http://img1.kwcdn.kuwo.cn/star/upload/10/10/1466668022746_.jpg"><i class="s"></i><span class="ss"></span></div>
          <div class="text">华语新歌推荐</div>
        </div>
          <div class="box1n">
          <div class="t"><img @click="go({name:'Wogd',params:{a:'673955055',active:0}})" class="auto-img" src="http://img1.kwcdn.kuwo.cn/star/upload/14/14/1466668131470_.jpg"><i class="s"></i><span class="ss"></span></div>
          <div  class="text">日韩新歌推荐</div>
        </div>
          <div class="box1n">
          <div class="t"><img @click="go({name:'Wogd',params:{a:'967514363',active:0}})" class="auto-img" src="http://img2.kwcdn.kuwo.cn/star/upload/3/3/1466668204339_.jpg"><i class="s"></i><span class="ss"></span></div>
          <div  class="text">欧美新歌推荐</div>
        </div>
      </div>
       
    </div>
    <!-- 歌单 -->
    <div class="boxW">
      <div class="box-w">
             <div class="box-n">歌单推荐</div>
             <div class="box-r">
                <div class="s1">
                  <div class="t"><img @click="go({name:'Wogd',params:{a:'2756673531',active:0}})" class="auto-img" src="http://img1.kwcdn.kuwo.cn/star/userpl2015/10/16/1557215539998_196386910b.jpg"></div>
                  <div>【治愈时节】花落时节又逢君</div>
                </div>
                <div class="s2">
                    <div class="t"><img @click="go({name:'Wogd',params:{a:'2735554009',active:0}})" class="auto-img" src="https://kwimg8.kuwo.cn/star/userpl2015/10/16/1555585113071_196386910b.jpg"></div>
                  <div>等你下课，也想伴你余生</div>
                </div>
                <div class="s3">
                    <div class="t"><img @click="go({name:'Wogd',params:{a:'2734085927',active:0}})" class="auto-img" src="https://kwimg8.kuwo.cn/star/userpl2015/15/39/1555467266310_448007115b.jpg"></div>
                    <div>别劝了，就让情绪把我吞噬</div>
                </div>
             </div>
      </div>
    </div>
    <!-- -- -->
    <div class="boxW">
      <div class="box-w">
             <div class="box-n">精彩节目</div>
             <div class="box-r">
                <div class="s1">
                  <div class="t"><img  @click="go({name:'Wogd',params:{a:'1013437783',active:active}})" class="auto-img" src="http://img1.kuwo.cn/star/userpl2015/shoujigd/random/3158_autob.jpg"></div>
                  <div>酷我音乐调频</div>
                </div>
                <div class="s2">
                    <div class="t"><img  @click="go({name:'Wogd',params:{a:'1013437785',active:active}})" class="auto-img" src="http://img1.kuwo.cn/star/userpl2015/shoujigd/random/3729_autob.jpg"></div>
                  <div>吐小曹扒新闻</div>
                </div>
                <div class="s3">
                    <div class="t"><img  @click="go({name:'Wogd',params:{a:'1013437787',active:active}})" class="auto-img" src="http://img1.kuwo.cn/star/userpl2015/shoujigd/random/2915_autob.jpg"></div>
                    <div>《莫萱日记》音乐小品</div>
                </div>
             </div>
      </div>
    </div>
    <!-- 底部 -->
<div class="bo">

</div>
</div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    name:'Wo',
    data(){
      return{
        active:0,
   images: [
        { url:"http://img2.kwcdn.kuwo.cn/star/upload/10/10/1453347776330_.jpg" },
        {url:"http://img4.kwcdn.kuwo.cn/star/upload/14/14/1482482412398_.jpg"},
         { url:"http://img4.kwcdn.kuwo.cn/star/upload/4/4/1480909297444_.jpg" },
        {url:"http://img2.kwcdn.kuwo.cn/star/upload/5/5/1557481673669_.jpg"},
         { url:"http://img1.kwcdn.kuwo.cn/star/upload/10/10/1482312358874_.jpg" },
        {url:"http://img2.kwcdn.kuwo.cn/star/upload/5/5/1557632633813_.jpg"}
      ]
      }
    },
   methods: {
     go(path){
       this.$router.push(path)
     }
   },
    components:{
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem
    },
    created() {
      this.active = this.$route.params.active;
      console.log(this.$route.params.active)
    },
}
</script>
<style lang="less" scoped>
.slideshow{
  border-bottom:0.3rem solid rgb(212, 210, 210);
    .auto-img {
  display: block;
  width: 100%;
  height: 4.5rem;
} 
}
// 内容
.box{
   border-bottom: 0.4rem solid rgb(212, 210, 210);
  .box-1{
      padding:0 0.3rem;
    .box1T{
      padding:0.2rem 0;
      font-size:0.4rem;
    }
    .box1n{
      .t{
        position: relative;
        width:100%;
        .ss{
          position: absolute;
          bottom:0.1rem;
          right:0.1rem;
          display:block;
          width:0.7rem;
          height: 0.7rem;
          background: url('http://image.kuwo.cn/mpage/html5/2016/playbtn1.png');
          background-size:cover;
        }
        .s{
          position: absolute;
          top:0;
          left:0;
          display: block;
          width:0.7rem;
          height:0.7rem;
          background:url('http://image.kuwo.cn/mpage/html5/2016/newtip.png');
          background-size:cover; 
        }
        .auto-img{
          width:100%;
          display: block;
        }
      }
      .text{
        color:#333;
        padding:0.15rem 0;
        width:100%;
        text-align: center;
      }
    }
  }
}
 .boxW{
   border-bottom: 0.4rem solid rgb(212, 210, 210);
   .box-w{
     padding: 0 0.3rem;
     .box-n{
       font-size:0.4rem;
      padding:0.2rem 0;
    
     }
       .box-r{
        overflow: hidden;
        color:#333;
        .s1{
           width:2.9rem;
          float: left;
          .t{
            width:2.9rem;
            .auto-img{
              width:100%;
              display: block;
            }
          }
        }
          .s2{
            margin-left:1em;
          float: left;
           width:2.9rem;
             .t{
             width:2.9rem;
            .auto-img{
              width:100%;
              display: block;
            }
          }
        }
          .s3{
          float: right;
           width:2.9rem;
             .t{
            width:2.9rem;
            .auto-img{
              width:100%;
              display: block;
            }
          }
        }
      }
   }
 }
</style>
