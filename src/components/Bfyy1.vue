<template>
<div class="bfyy">
    <audio    id="audio" :src="this.u" ref="au" @timeupdate="stime">你的浏览器不支持audio</audio>
    <!-- 背景 -->
    <div class="bj"> <img class="auto-img" :src="this.c"></div>
 <div class="zz"></div>
    <!-- 导航 -->
   <div class="nav">
      <van-icon class="p" @click="go()"  name="arrow-left" />
  </div>
  <!-- 内容 -->
  <div class="box"   >
      <!-- 转盘 -->
      <div class="bf">
          <div class="b" :class="{xz:isa}"><div class="t1"><img class="auto" :src="c"></div></div>
          <div class="t"></div>
      </div>
      <!-- //歌名 -->
     <div class="gm"><span class="gm-t">{{na}}</span><span class="gm-n">-{{nt}}</span></div>
      <!-- 按钮 -->
      <div class="an">
       <div class="s">
           <span class="k">00</span>
           <div ref="controllnfo" class="progress">
                   <!-- 激活进度条 -->
                   <div  id="activeProgress" ref="activeProgress" class="active-progress"></div>
					<!-- 滑块 -->
					<div id="progressMask" ref="mask" class="mask"></div>
					<!-- 绑定事件层 -->
					<div id="progressLayer" class="layer" @touchstart="moveStart" @touchmove="move" ></div>
           </div>
           <span class="j">{{this.t%60>10?parseInt(this.t/60)+':'+parseInt(this.t%60):parseInt(this.t/60)+':'+'0'+parseInt(this.t%60) }}</span>
       </div>
       <div class="x">
           <div class="x-s"  @click="shan"></div>
           <div class="x-b"  @click="zhon()"><img class="m" src="../assets/04.png"></div>
           <div class="x-x" @click="xia()"></div>
           <div class="x-g"></div>
           <div class="x-y"></div>
       </div>
      </div>
  </div>
</div>
</template>
<script>
import { Icon } from 'vant';
export default {
    name:'Bfyy1',
    data(){
        return{
            is:false,
            isa:true,
           c:'',
           a:'',
           b:'',
           active:'',
           u:'',
            na:"",
            index:'',
            nt:"",
            t:'',
            ty:'',
            r:''
        }
    },
    created() {
        this.a1 =this.$route.params.a1
        console.log('i',this.a1)
        this.index= this.$route.params.index
        this.r = this.$route.params.r
        this.active = this.$route.params.active
        this.a=this.$route.params.a
        this.b=this.$route.params.b
    

                this.axios({
        method: 'POST',
            url: 'https://api.itooi.cn/music/kuwo/search?key=579621905&s='+this.$route.params.bs+'&limit=100&offset=0&type=song ',
      }).then(result => {
    // console.log('ioo',result.data.data)
        console.log('cc',result.data.data)
          this.na = result.data.data[this.index].name;
          
          console.log('name',this.na)
           this.nt = result.data.data[this.index].singer;
           this.c = result.data.data[this.index].pic;
           this.u=result.data.data[this.index].url;
            this.t=result.data.data[this.index].time;
            this.ty=result.data.data.length;
        console.log('result ==> ', this.ty);
      })

    },
    components:{
        [Icon.name]:Icon
    },
    methods: {
        shan(){
            if(this.index>=1){
               var a= document.querySelector('#audio');
          var b= document.querySelector('.m');
          var bb= document.querySelector('.t');
             this.is=false;
            this.isa=true;
                     a.pause();
                     b.src="data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgaWQ9IjA0Mi1hdWRpby1wbGF5IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgc3R5bGU9IndpZHRoOjI1NnB4O2hlaWdodDoyNTZweDsiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDI0IDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMiAxMDI0IHEtOCAwIC0xNiAtNCBxLTE2IC0xMCAtMTYgLTI4IGwwIC05NjAgcTAgLTE4IDE4IC0yOCBxMTYgLTggMzIgMCBsODA2IDUwOCBxMTYgMTAgMTYgMjYgcS0yIDE4IC0xNiAyOCBsLTgwOCA0NTQgcS04IDQgLTE2IDQgbDAgMCBaTTY0IDkwIGwwIDg0OCBsNzE0IC00MDIgbC03MTQgLTQ0NiBsMCAwIFoiLz48L3N2Zz4="
                      bb.style.transform='rotateZ(-25deg)'
            this.index--
                   this.axios({
        method: 'POST',
           url: 'https://api.itooi.cn/music/kuwo/search?key=579621905&s='+this.$route.params.bs+'&limit=100&offset=0&type=song ',
      }).then(result => {
          this.na = result.data.data[this.index].name;
           this.nt = result.data.data[this.index].singer;
           this.c = result.data.data[this.index].pic;
           this.u=result.data.data[this.index].url;
            this.t=result.data.data[this.index].time;
        console.log('result ==> ', this.c);
         this.$refs.activeProgress.style.width = 0 + 'px';
                this.$refs.mask.style.left = 0 + 'px';
      })
            }
        },
        xia(){
            if(this.index<(this.ty-1)){
           var a= document.querySelector('#audio');
          var b= document.querySelector('.m');
          var bb= document.querySelector('.t');
             this.is=false;
            this.isa=true;
                     a.pause();
                     b.src="data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgaWQ9IjA0Mi1hdWRpby1wbGF5IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgc3R5bGU9IndpZHRoOjI1NnB4O2hlaWdodDoyNTZweDsiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDI0IDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMiAxMDI0IHEtOCAwIC0xNiAtNCBxLTE2IC0xMCAtMTYgLTI4IGwwIC05NjAgcTAgLTE4IDE4IC0yOCBxMTYgLTggMzIgMCBsODA2IDUwOCBxMTYgMTAgMTYgMjYgcS0yIDE4IC0xNiAyOCBsLTgwOCA0NTQgcS04IDQgLTE2IDQgbDAgMCBaTTY0IDkwIGwwIDg0OCBsNzE0IC00MDIgbC03MTQgLTQ0NiBsMCAwIFoiLz48L3N2Zz4="
                      bb.style.transform='rotateZ(-25deg)'
            this.index++
                   this.axios({
        method: 'POST',
            url: 'https://api.itooi.cn/music/kuwo/search?key=579621905&s='+this.$route.params.bs+'&limit=100&offset=0&type=song ',
      }).then(result => {
          this.na = result.data.data[this.index].name;
           this.nt = result.data.data[this.index].singer;
           this.c = result.data.data[this.index].pic;
           this.u=result.data.data[this.index].url;
            this.t=result.data.data[this.index].time;
        console.log('result ==> ', this.c);
         this.$refs.activeProgress.style.width = 0 + 'px';
                this.$refs.mask.style.left = 0 + 'px';
      })
            } 
        },
        go(){
        
                  this.$router.push({name:'Gd',params:{active:this.active,as:this.$route.params.as,bs:this.$route.params.bs,r:this.r}})
            
           
        },
        zhon(){
          var a= document.querySelector('#audio');
          var b= document.querySelector('.m');
          var bb= document.querySelector('.t');
          if(this.is==false){
                a.play();
                b.src="data:image/png;base64,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"
                this.is=true;    
                this.isa=false;
                 bb.style.transform='rotateZ(0deg)' 
          }else if(this.is){
                     a.pause();
                     b.src="data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgaWQ9IjA0Mi1hdWRpby1wbGF5IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgc3R5bGU9IndpZHRoOjI1NnB4O2hlaWdodDoyNTZweDsiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDI0IDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMiAxMDI0IHEtOCAwIC0xNiAtNCBxLTE2IC0xMCAtMTYgLTI4IGwwIC05NjAgcTAgLTE4IDE4IC0yOCBxMTYgLTggMzIgMCBsODA2IDUwOCBxMTYgMTAgMTYgMjYgcS0yIDE4IC0xNiAyOCBsLTgwOCA0NTQgcS04IDQgLTE2IDQgbDAgMCBaTTY0IDkwIGwwIDg0OCBsNzE0IC00MDIgbC03MTQgLTQ0NiBsMCAwIFoiLz48L3N2Zz4="
                     this.is=false;
                      this.isa=true;
                      bb.style.transform='rotateZ(-25deg)'
          }
        },
        moveStart(e){
             var a= document.querySelector('#audio');
			var pageX = e.targetTouches[0].pageX;
			var offsetLeft = this.$refs.controllnfo.offsetLeft;
			//判断起始点
			var controllnfoWidth = parseFloat(getComputedStyle(this.$refs.controllnfo).width)
            //获取大的width
            // 滑块大小
			var maskWidth  = parseFloat(getComputedStyle(this.$refs.mask).width);
			//滑块移动的最大距离
				var maskMaxMoveLeft = controllnfoWidth - maskWidth;
					//滑块移动的最最小距离
				var maskMinMoveLeft = 0;
			//鼠标位置
			var distance = pageX - offsetLeft;
			if(distance>controllnfoWidth){
				return;
			}
			// 激活进度条
			this.$refs.activeProgress.style.width = distance + 'px';
			//设置滑块移动
			distance = distance <= maskMinMoveLeft ? maskMinMoveLeft : distance >= maskMaxMoveLeft ? maskMaxMoveLeft : distance;
                this.$refs.mask.style.left = distance + 'px';

                var percent =(pageX-offsetLeft) / controllnfoWidth ;
                console.log(percent)
                a.currentTime = a.duration * percent;
                console.log(a.duration * percent)
                
		},
			move(e) {
				this.moveStart(e);
            },
            stime(){
             var m= document.querySelector('.mask');
             var ac= document.querySelector('.active-progress');
            var percent =this.$refs.au.currentTime/this.$refs.au.duration ;
            var controllnfoWidth = parseFloat(getComputedStyle(this.$refs.controllnfo).width);
            var maskWidth  = parseFloat(getComputedStyle(this.$refs.mask).width);
            m.style.left=controllnfoWidth*percent+'px';
            ac.style.width=percent* controllnfoWidth+'px';
             console.log('22')
            }
            
    },

    mounted() {
        console.log('比较')
        var a= document.querySelector('#audio');
        var k = document.querySelector('.k');
        a.ontimeupdate = function(){
              var currentTime = parseInt(this.currentTime);
              console.log('ss',this.currentTime)
            currentTime = currentTime<10?'0'+currentTime : currentTime>60?currentTime%60<10?parseInt(currentTime/60)+':0'+parseInt(currentTime%60):parseInt(currentTime/60)+':'+parseInt(currentTime%60):currentTime;
            k.innerHTML =  currentTime
        }           
   },
}
</script>
<style lang="less" scoped>
.bfyy{
    // 绑定层与背景图
   .bj{
       z-index: 2;
       position: absolute;
       top:0;
       bottom:0;
       left:0;
       right:0;
    margin-top:1.2rem;
    // background-size:200% 200%;
    background-size:cover;
     .auto-img{
         display: block;
         height:100%;
         width:100%;
     }
   }
   //遮罩层
         .zz{
          z-index: 2;
      background:rgba(82, 74, 74, 0.6);
      position: absolute;
       top:0;
       bottom:0;
       left:0;
       right:0;
  }
//导航
.nav{
    z-index:4;
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
//内容
.box{
      z-index:3;
        position: absolute;
       top:0;
       bottom:0;
       left:0;
       right:0;
    margin-top:1.2rem;
    z-index: 3;
    width:100%;
    //转盘
.bf{  
  .b{
    
        position: relative;
        margin-top:1rem;
        width:6.5rem;
        height: 6.5rem;
        background: red;
        margin-left: 17%;
          background:url('https://s3.music.126.net/m/s/img/disc.png?d3bdd1080a72129346aa0b4b4964b75f');
          background-size: 100% 100%;
        border-radius:50%;
     animation:my 10s linear  infinite;

        .t1{
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
            width:4.1rem;
            height: 4.1rem;
            overflow: hidden;
            .auto{
                border-radius: 50%;
                width: 100%;
                display: block;
            }
        }
  }
             @keyframes my
{
	0%   {transform:rotateZ(0deg);}
	25%  {transform:rotateZ(90deg);}
    50%  {transform:rotateZ(180deg);}
    75%  {transform:rotateZ(270deg);}
	100% {transform:rotateZ(360deg);}
}
  .xz{
      animation-play-state: paused;
  }

   .t{
        position: absolute;
        top:0;
        left:50%;
        width:2rem;
        height: 3rem;
       background:url('https://s3.music.126.net/m/s/img/needle.png?702cf6d95f29e2e594f53a3caab50e12');
       background-size:100% 100%;
        transform-origin:0 0;
        transform:rotateZ(-25deg)
    }

    }
    .gm{
         margin-left:1.5rem;
        max-width:70%;
        text-align: center;
        font-size: 0.4rem;
        // color:#fff;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        .gm-t{
            font-size:0.4rem;
            color:#fff;
        }
        .gm-n{
            font-size:0.2rem;
            color:rgb(207, 196, 196);
        }
    }
    // 按钮
    .an{
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    height: 2.5rem;
    background: -webkit-linear-gradient( rgba(240, 236, 236, 0.05),rgb(58, 57, 57));
    .s{
          color:#fff;
        height: 1rem;
        line-height: 1rem;
        .k{
            width:0.7rem;
            font-size:0.4rem;
            float: left;
               margin-left: 0.2rem;
        }
    //  进度条
        .progress{
            float: left;
            margin-left:0.6rem;
                margin-top:0.35rem;
				width:7rem;
				height:0.1rem;
				position: relative;
				background:#fff;
//   激活层
				.active-progress{
					 width:0;
					 position:absolute;
					 left:0;
					 top:0;
					 height:0.1rem;
					background-image: linear-gradient(to right, #C6E0F2, #6CA7F0);
				}
				// 绑定层
				.layer{
					position:absolute;
					left:0;
					top:-0.1rem;
					height:0.4rem;
					width:100%;
					z-index: 5;
				}
				// 滑块
				.mask{
				position: absolute;
				left:0;
				top:-0.1rem;
				width:0.3rem;
				height:0.3rem;
				border-radius:50%;
				background:rgb(236, 236, 102);
				}
        }
        .j{
           
            font-size:0.4rem;
            float: right;
               margin-right: 0.2rem;
        }
    }
    // 按钮
    .x{
        width:100%;
        height:1.4rem;
        
        div{
            margin-top:0.3rem;
               width:0.8rem;
            height:0.8rem;
            float:left;
        }
        .x-s{
            margin-left:0.4rem;
            background:url('../assets/01.png');
            background-size: 100% 100%;
        }
        .x-b{
            margin-top:0;
            width:1rem;
            height: 1rem;
            border:0.07rem solid #fff;
            border-radius: 50%;
            margin:0 0.8rem;
            text-align: center;
            .m{
                transform: translateX(40%) translateY(10%);
        
                width:70%;
                height:80%;
                display: block;
            }
        }
        .x-x{
             background:url('../assets/02.png');
            background-size: 100% 100%;
        }
        .x-y{
            float:right;
            margin-right:0.4rem;
             background:url('../assets/05.png');
            background-size: 100% 100%;
        }
        .x-g{
            float:right;
             background:url('../assets/06.png');
            background-size: 100% 100%;
            margin-right: 0.4rem;
        }
    }
}
   
}
// 按钮

}

</style>
