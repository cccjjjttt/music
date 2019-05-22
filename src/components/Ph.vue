<template>
<div class="ph">
       <div class="pd1"  v-for="(item,index) in this.p.slice(0,8)" :key="index" @click="go({name:'Pg',params:{a1:item.coverImgUrl,b:item.id,active:1}})">
        <div class="tu"> <img class="auto-img" :src="item.coverImgUrl"></div>
        <div class="text">
            <div class="t">{{item.title}}</div>
            <div class="n">{{item.creator}}</div>
            <div class="s">歌曲:{{item.songNum}}</div>
        </div>
  </div>

</div>

</template>
<script>
export default {
    name:'Ph',
    data(){
        return{
            p:[],
            j:[],
            active:''
        }
    },
    methods:{
      go(path){
         this.$router.push(path)
      }
    },
      created() {
        console.log( this.$route.params.active)
          this.active = this.$route.params.active;
      this.axios({
        method: 'POST',
           url: 'https://api.itooi.cn/music/kuwo/search?key=579621905&s=排行&limit=100&offset=0&type=list',
      }).then(result => {;
        this.p=result.data.data;
        console.log(this.p)
      })


        this.axios({
        method: 'POST',
           url: 'https://api.itooi.cn/music/kuwo/songList?key=579621905&id=2600980896',
      }).then(result => {;
        this.j=result;
        console.log(this.j)
      })
    }
}
</script>
<style lang="less" scoped>
  .ph{
         .pd1{
             border-bottom: 0.3rem solid #f0e9e9;
             color:#333;
          margin-top:0.2rem ;
          width:100%;
          height: 3.3rem;
          background:#fff;
          .tu{
              float: left;
              margin-left:0.4rem;
              width:33%;
              height:3.3rem;
              .auto-img{
                  width:100%;
                  display: block;
                     height:3.3rem;
              }
          }
          .text{
              width:60%;
              float:right;
              .t{
                     margin-top:0.2rem;
                  font-size:0.5rem;
              }
              .n{
                  margin-top:0.2rem;
                  color: #999;
              }
              .s{
                  margin-top:0.2rem;
                color: #999;
              }
          }
          
      }
  }
</style>