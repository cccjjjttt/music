<template>
<div class="pg">
    <!-- 图片头 -->
<div class="tu">
<img class="auto-img" :src="this.$route.params.a1">

<div class="xt">
    <img class="auto" :src="this.$route.params.a1">
    <div class="xp" ><van-icon name="play-circle-o"/></div>
    <div class="xt-t"><span>排行榜</span></div>
      <div class="xt-x"><span>下载歌曲</span></div>
</div>

<div class="tp"  @click="go({name:'Ph',params:{active:active}})" ><van-icon name="arrow-left" /></div>
</div>
<!-- 内容 -->
<div class="box">
    <div class="box-d" v-for="(item,index) in this.sj"  :key="index" @click="go1({name:'Bfyy',params:{active:active,b:b,a:b,index:index,a1:a1}})">
            <div class="box-t">{{item.name}}</div>
            <div class="box-n">{{item.singer}}</div>
            <div class="box-tp"><van-icon name="play-circle-o"/></div>
    </div>    
</div>
</div>
</template>
<script>
import { Icon } from 'vant';
export default {
    name:'Pg',
    data(){
        return{
           sj:[],
           active:'',
           a:'',
           b:'',
           a1:''

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
    created(){
        console.log(this.$route.params.active)
        this.active = this.$route.params.active
        this.a1= this.$route.params.a1

        this.b = this.$route.params.b
        console.log(this.b)
        this.axios({
            method:'POST',
            url:' https://api.itooi.cn/music/kuwo/songList?key=579621905&id='+this.b+''
        }).then(result=>{
            
            this.sj=result.data.data.songs
            console.log(this.sj)
        })
    }

}
</script>

<style lang="less" scoped>
.tu{
    z-index:5;
    position: sticky;
    top:0rem;
    left:0;
    width:100%;
    background:#fff;
     overflow: hidden;
    height: 5.5rem;
    .auto-img{
         overflow: hidden;
        filter:blur(3px);
        height: 5.5rem;
        width:100%;
        display: block;
       background: rgba(0,0,0,.4)
    }
    .tp{
        position: absolute;
        top:0;
        left:0;
        color:#fff;
        font-size:0.9rem;
    }
    .xt{
        position: absolute;
        top:-0.9rem;
        left: 0;
        right: 0;
        bottom: 0;
        margin:auto;
        z-index: 10;
        width:2.3rem;
        height:2rem;
      
        .xp{
            position:absolute;
             top:50%;
             left: 50%;
             transform: translateX(-0.5rem) translateY(-0.5rem);
            color:#fff;
            background:rgba(189, 184, 184,0.4);
            font-size:1rem;
        }
        .auto{
            width:100%;
            height: 2rem;
            display: block;
        }
        .xt-t{
            padding:  0.2rem 0;
            text-align:center;
            font-size:0.4rem;
            color:#fff;
            width:100%;
            // background: red;
        }
        .xt-x{
            padding:0.1rem 0;
            border-radius:0.2rem;
            background: rgb(116, 102, 27);
            color:#fff;
            font-size:0.4rem;
            text-align:center;
        }
    
    }
}
.box{
    .box-d{
        position: relative;
     border-bottom: 0.03rem solid rgb(207, 205, 205);
        .box-t{
            margin-left:0.3rem;
            font-size:0.4rem;
            color:#333;
            padding:0.13rem 0;
                 white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
           max-width: 8rem;
        }
        .box-n{
            margin-left:0.3rem;
            padding-bottom: 0.1rem;
            font-size:0.3rem;
            color:rgb(116, 114, 114);
                white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
           max-width: 7rem;
        }
           .box-tp{
               color:#333;
               font-size:0.7rem;
               position: absolute;
               top:0.3rem;
               right: 0.7rem;
           } 
    }
}
</style>