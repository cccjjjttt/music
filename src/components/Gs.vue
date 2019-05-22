<template>
<div class="gs">
    <div class="b" @click="go({name:'Gss',params:{r:'zh',active:active}})" >
        <div class="r" >热门歌手</div>
        <div class="t"><van-icon name="arrow" /></div>
    </div>
     <div class="b1" @click="go({name:'Gss',params:{r:'hyn',active:active}})" >
        <div class="r">华语男</div>
        <div class="t"><van-icon name="arrow" /></div>
    </div>
        <div class="b1" @click="go({name:'Gss',params:{r:'hyv',active:active}})" >
        <div class="r">华语女</div>
        <div class="t"><van-icon name="arrow" /></div>
    </div>
        <div class="b1">
        <div class="r">华语组合</div>
        <div class="t"><van-icon name="arrow" /></div>
    </div>
        <div class="b2">
        <div class="r">日韩男</div>
        <div class="t"><van-icon name="arrow" /></div>
    </div>
      <div class="b1">
        <div class="r">日韩女</div>
        <div class="t"><van-icon name="arrow" /></div>
    </div>
      <div class="b1">
        <div class="r">日韩组合</div>
        <div class="t"><van-icon name="arrow" /></div>
    </div>
</div>
</template>
<script>
import { Icon } from 'vant';
export default {
    name:'Gs',
    data(){
        return{
            active:'',
            zh:[
                {rul:'http://star.kuwo.cn/star/starheads/300/57/42/3773488596.jpg',text:'陈雪凝'},
{rul:'http://star.kuwo.cn/star/starheads/300/3/89/3557381605.jpg',text:'王琪'},
{rul:'http://star.kuwo.cn/star/starheads/300/0/20/794591467.jpg',text:'孙露'},
{rul:'http://star.kuwo.cn/star/starheads/300/75/22/1016326664.jpg',text:'林俊杰'},
{rul:'http://star.kuwo.cn/star/starheads/300/86/7/2013018064.jpg',text:'庄心妍'},
{rul:'http://star.kuwo.cn/star/starheads/300/80/48/1673037187.jpg',text:'半阳'},
{rul:'http://star.kuwo.cn/star/starheads/300/39/41/2312174491.jpg',text:'g.e.m.邓紫棋'},
{rul:'http://star.kuwo.cn/star/starheads/300/11/1/1638339633.jpg',text:'毛不易'},
{rul:'http://star.kuwo.cn/star/starheads/300/70/73/2434947848.jpg',text:'ice paper'},
{rul:'http://star.kuwo.cn/star/starheads/300/33/36/2362849187.jpg',text:'花姐'},
{rul:'http://star.kuwo.cn/star/starheads/300/61/99/2461721588.jpg',text:'周杰伦'},
{rul:'http://star.kuwo.cn/star/starheads/300/61/54/2102134023.jpg',text:'张学友'},
{rul:'http://star.kuwo.cn/star/starheads/300/20/17/4242228528.jpg',text:'薛之谦'}
            ],
            hyn:[
                {rul:'http://star.kuwo.cn/star/starheads/300/3/89/3557381605.jpg',text:'王琪'},
  {rul:'http://star.kuwo.cn/star/starheads/300/75/22/1016326664.jpg',text:'林俊杰'},
  {rul:'http://star.kuwo.cn/star/starheads/300/80/48/1673037187.jpg',text:'半阳'},
  {rul:'http://star.kuwo.cn/star/starheads/300/11/1/1638339633.jpg',text:'毛不易'},
  {rul:'http://star.kuwo.cn/star/starheads/300/70/73/2434947848.jpg',text:'ice paper'},
  {rul:'http://star.kuwo.cn/star/starheads/300/61/99/2461721588.jpg',text:'周杰伦'},
  {rul:'http://star.kuwo.cn/star/starheads/300/61/54/2102134023.jpg',text:'张学友'},
  {rul:'http://star.kuwo.cn/star/starheads/300/20/17/4242228528.jpg',text:'薛之谦'},
  {rul:'http://star.kuwo.cn/star/starheads/300/35/93/142236390.jpg',text:'大壮'},
  {rul:'http://star.kuwo.cn/star/starheads/300/48/89/1284407034.jpg',text:'冷漠'}
            ],
            hyv:[
                 {rul:'http://star.kuwo.cn/star/starheads/300/57/42/3773488596.jpg',text:'陈雪凝'},
{rul:'http://star.kuwo.cn/star/starheads/300/0/20/794591467.jpg',text:'孙露'},
{rul:'http://star.kuwo.cn/star/starheads/300/86/7/2013018064.jpg',text:'庄心妍'},
{rul:'http://star.kuwo.cn/star/starheads/300/39/41/2312174491.jpg',text:'g.e.m.邓紫棋'},
{rul:'http://star.kuwo.cn/star/starheads/300/33/36/2362849187.jpg',text:'花姐'},
{rul:'http://star.kuwo.cn/star/starheads/300/69/51/2453295216.jpg',text:'降央卓玛'},
{rul:'http://star.kuwo.cn/star/starheads/300/20/40/4036315565.jpg',text:'龙梅子'},
{rul:'http://star.kuwo.cn/star/starheads/300/95/71/2298331327.jpg',text:'苏谭谭'},
{rul:'http://star.kuwo.cn/star/starheads/300/13/15/2012226821.jpg',text:'邓丽君'},
{rul:'http://star.kuwo.cn/star/starheads/300/98/74/3655288167.jpg',text:'陈瑞'},
{rul:'http://star.kuwo.cn/star/starheads/300/28/63/971547313.jpg',text:'王菲'}
            ]
        }
    },
       created() {
           console.log(this.$route.params.active)
           this.active = this.$route.params.active
        //    歌手存储
        var zh = JSON.stringify(this.zh);
    localStorage.setItem('zh', zh);
            var hyn = JSON.stringify(this.hyn);
    localStorage.setItem('hyn', hyn);
            var hyv = JSON.stringify(this.hyv);
    localStorage.setItem('hyv', hyv);
           console.log('sss',this.hyv)
               this.axios({
        method: 'POST',
           url: 'https://api.itooi.cn/music/kuwo/search?key=579621905&s=张杰&limit=100&offset=0&type=song',
      }).then(result => {
        console.log('result ==> ', result);
      })
    },
    components:{
        [Icon.name]:Icon
    },
    methods: {
        go(path){
            this.$router.push(path)
        }
    },
}
</script>
<style lang="less" scoped>
.gs{
    // z-index:1;
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom:0;
    background: #f2f2f2;
    .b{
        margin-bottom: 0.4rem;
        margin-top:2.6rem;
        width:100%;
        height:1.4rem;
        line-height: 1.4rem;
        background: #fff;
        .r{
            margin-left:0.3rem;
            float: left;
            font-size:0.54rem;
        }
        .t{
            margin-right:0.4rem;
            float: right;
            font-size:0.7rem;
        }
    }
           .b1{
               margin-top:0.05rem;
        width:100%;
        height:1.4rem;
        line-height: 1.4rem;
        background: #fff;
        .r{
            margin-left:0.3rem;
            float: left;
            font-size:0.54rem;
        }
        .t{
            margin-right:0.4rem;
            float: right;
            font-size:0.7rem;
        }
    }
     .b2{
               margin-top:0.4rem;
        width:100%;
        height:1.4rem;
        line-height: 1.4rem;
        background: #fff;
        .r{
            margin-left:0.3rem;
            float: left;
            font-size:0.54rem;
        }
        .t{
            margin-right:0.4rem;
            float: right;
            font-size:0.7rem;
        }
    }
}
</style>