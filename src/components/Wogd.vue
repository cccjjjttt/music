<template>
<div class="wogd" v-if="ty">
    <!-- 导航 -->
   <div class="nav">
      <van-icon class="p" @click="go({name:'Wo'})"  name="arrow-left" />
  </div>
  <!-- 图片头部 -->
  <div class="tuba">
       <div class="t"><img class="auto-img"  :src="this.ty.songListPic"></div>
       <div class="zz"></div>
       
       <div class="t1"> <img class="auto-img"  :src="this.ty.songListPic"><span class="gd">歌单</span> <span class="rs">{{this.ty.songListPlayCount>9999?(this.ty.songListPlayCount/10000).toFixed(1)+'万':this.ty.songListPlayCount}}</span></div>
        <div class="ll">
              <div class="ll-n">{{this.ty.songListName}}</div>
              <div class="ll-x"> <div class="ll-t"><img class="auto-img" src="http://img4.kuwo.cn/star/userhead/10/13/1502439820928_132026710s.jpg"></div><span class="s">慢慢的蜗牛</span></div>
        </div>
        <span class="bf">播放全部</span>
  </div>
  <!-- 内容 -->
  <div class="box">
      <h3 class="gq">歌曲列表({{this.ty.songs.length}})</h3>
      <div class="l" v-for="(item,index) in this.ty.songs.slice(0,s)" :key="index" @click="go({name:'Bfyy',params:{a:a,n:item.name,nt:item.singer,active:active,index:index}})">
          <div class="o"><img class="t" :src="item.pic"></div>
        <div class="ss">
            <div class="s-t">{{item.name}}</div>
            <div class="s-n">{{item.singer}}</div>
          <div class="tp"></div>
      </div>
      
      </div>

   
      <h3 class="zk" v-if="f" @click="tt">展开歌单</h3>
  </div>
</div>
</template>
<script>
import { Icon } from 'vant';
export default {
    name:'Wogd',
    components:{
        [Icon.name]:Icon
    },
    data(){
        return{
            f:true,
            ty:"",
            s:5,
            a:'',
            active:0
        }
    },
    created(){
        console.log( this.$route.params.active)
        this.active = this.$route.params.active;
        this.a = this.$route.params.a;
        console.log('ssa',this.$route.params.a)
              this.axios({
        method: 'POST',
            url: 'https://api.itooi.cn/music/kuwo/songList?key=579621905&id='+this.$route.params.a,
      }).then(result => {
          this.ty = result.data.data;
        console.log('result ==> ', this.ty);
      })

    },
    methods: {
        tt(){
            if(this.s<this.ty.songs.length){
                this.s+=5;
            }else if(this.s>=this.ty.songs.length){
                  this.s=this.ty.songs.length;
                  this.f=false
            }
        },
        go(path){
            this.$router.push(path)
        }
    },
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
.tuba{
    position: relative;
  
    .t{
        overflow: hidden;
        width:100%;
        height:4rem;
        .auto-img{
            height:4rem;
            width:100%;
            display: block;
            transform: scale(1);
             filter: blur(0.3rem);
             opacity: 0.9;
        }
    }
    .zz{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:4rem;
        background: rgba(0,0,0,0.2)
    }
    .t1{
        position: absolute;
        top:0.5rem;
        left:1rem;
        width:3rem;
        .auto-img{
            height:3rem;
            width:100%;
            display: block;
        }
        .gd{
             color:#fff;
            position: absolute;
            top:0;
            right:0;
            background:#fcba25;
        }
        .rs{
             color:#fff;
            position: absolute;
            bottom:0;
            left:0;
            &::before{
                content: "";
                display: inline-block;
                width:0.3rem;
                height: 0.3rem;
                background:url('http://image.kuwo.cn/mpage/html5/2017/h5SharePage/playlist2017/earphone.png');
                background-size:100% 100%; 
            }
        }
    }
    .ll{
        // width:3rem;
        position: absolute;
        top:1rem;
        left:4.2rem;
        .ll-n{
            font-size:0.5rem;
            color:#fff;
            margin-bottom: 0.2rem;
        }
        .ll-x{
            overflow: hidden;
           
            color:rgba(255,255,255,0.5);
            .ll-t{
                overflow: hidden;
                border-radius: 50%;
                float: left;
                width:0.7rem;
                height: 0.7rem;
                .auto-img{
                     height: 0.7rem;
                    width:100%;
                    display: block;
                }
            }
            .s{
                margin-top:0.1rem;
                 margin-left: 0.2rem;
                float: left;
            }
        }
    }
  .bf{
      position:absolute;
      bottom:0;
      left:50%;
      transform: translateX(-50%)  translateY(60%) ;
      border-radius:0.6rem;
      padding:0.2rem  1.3rem;
      background: #fcba25;
      color:#fff;
      font-size:0.4rem;
      &::before{
          margin-bottom:-0.12rem;
          content: '';
          width:0.5rem;
          height:0.5rem;
          display: inline-block;
          background:url(http://image.kuwo.cn/mpage/html5/2017/h5SharePage/playlist2017/singer_play@2x.png);
          background-size:cover;
      }
  }
}
.box{
    padding:1rem 0.5rem 0 0.5rem;
    .gq{
        padding:0;
        margin:0;
        font-size:0.5rem;
    }
    .l{
        margin-top:0.3rem;
        position: relative;
        border-bottom: 0.03rem solid rgb(226, 224, 224);
        padding-bottom: 0.2rem;
        overflow: hidden;
        .o{

            float: left;
            width:1.5rem;
            .t{
                width:100%;
                height: 1.5rem;
                display: block;
            }
        }
        .ss{
            margin-left:0.1rem;
         width :7rem;
          float: left;
        .s-t{
            font-size: 0.45rem;
            color:#333;
            margin-bottom: 0.1rem;
        }
        .s-n{
            white-space: nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
            max-width:7rem;
            color:#888;
        }
        .tp{
            width:0.3rem;
            height:0.5rem;
            position: absolute;
            top:0.5rem;
            right:0;
            background:url('http://image.kuwo.cn/mpage/html5/2017/h5SharePage/playlist2017/playIcon.png');
            background-size:100% 100%; 
        }
    }
    }
    .zk{
        text-align: center;
            &::after{
          content: '';
          width:0.4rem;
          height:0.2rem;
          display: inline-block;
          background:url(http://image.kuwo.cn/mpage/html5/2017/h5SharePage/playlist2017/downIcon.png);
          background-size:100% 100%;
      }
    }
}

</style>
