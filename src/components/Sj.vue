<template>
	<div class="sj">
		  	      <div ref="controllnfo" class="progress">
	
					<!-- 激活进度条 -->
					<div  id="activeProgress" ref="activeProgress" class="active-progress"></div>
					<!-- 滑块 -->
					<div id="progressMask" ref="mask" class="mask"></div>
					<!-- 绑定事件层 -->
					<div id="progressLayer" class="layer" @touchstart="moveStart" @touchmove="move"></div>
				</div>
	</div>
</template>
<script>
export default {
	name:'Sj',
	created() {
		     this.axios({
        method: 'POST',
            url: 'https://api.itooi.cn/music/kuwo/songList?key=579621905&id=1486611',
      }).then(result => {
          
        console.log('result ==> ', result);
      })
	},
	methods:{
		moveStart(e){
			var pageX = e.targetTouches[0].pageX;
			var offsetLeft = this.$refs.controllnfo.offsetLeft;
			//判断起始点
			var controllnfoWidth = parseFloat(getComputedStyle(this.$refs.controllnfo).width)
			//获取大的width
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
		},
			move(e) {
				this.moveStart(e);
			}
	
	}

}
</script>
<style lang="less" scoped>
// 大div
			.progress{
				top:3rem;
				left:2rem;
				width:7rem;
				height:0.3rem;
				position: relative;
				background:#333;
//   激活层
				.active-progress{
					 width:0;
					 position:absolute;
					 left:0;
					 top:0;
					 height:0.3rem;
					 background:red;
				}
				// 绑定层
				.layer{
					position:absolute;
					left:0;
					top:-0.1rem;
					height:0.5rem;
					width:100%;
					z-index: 5;
					// display: none;
					// background:rgba(0,0,0,.5)
				}
				// 滑块
				.mask{
				position: absolute;
				left:0;
				top:-0.1rem;
				width:0.5rem;
				height:0.5rem;
				border-radius:50%;
				background:yellow;
				}
			
			}

</style>