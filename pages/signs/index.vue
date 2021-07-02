<template>
	<view class="main">
		<nav-top/>
		
		<view class="signs_main" @click="shutdown">
			<view class="main_top">
				<view class="left">
					<view class="left_text">今日体征异常</view>
				</view>
				<view class="right">
					<view class="charts-box">
					  <qiun-data-charts
					    type="column"
					    :chartData="chartData"
					    background="none"
					  />
					</view>
				</view>
			</view>
			<view class="main_bottom">
				<view class="left">
					<view class="left_text">早期风险预警</view>
				</view>
				<view class="right">
					<view class="charts-box">
					  <qiun-data-charts
					    type="line"
					    :chartData="chartData1"
					    background="none"
					  />
					</view>
				</view>
			</view>
		</view>
		
		<expanded-view ref="Menu"/>
	</view>
</template>

<script>
	import NavTop from '@/components/NavTop/NavTop.vue';
	import ExpandedView from '@/components/ExpandedView/ExpandedView.vue'
	export default {
		components:{NavTop,ExpandedView},
		data() {
			return {
				chartData:{
				   "categories": ["2016","2017","2018","2019","2020","2021"],
				      "series": [
				          {
				              "name": "目标值",
				              "data": [35,36,31,33,13,34]
				          },
				          {
				              "name": "完成量",
				              "data": [18,27,21,24,6,28]
				          }
				      ]
				  },
				  chartData1:{
				    "categories": ["2016","2017","2018","2019","2020","2021"],
				      "series": [
				            {
				                "name": "成交量A",
				                "data": [35,8,25,37,4,20]
				            },
				            {
				                "name": "成交量B",
				                "data": [70,40,65,100,44,68]
				            },
				            {
				                "name": "成交量C",
				                "data": [100,80,95,150,112,132]
				            }
				        ]
				  },
			}
		},
		methods: {
			shutdown(){
				this.$refs.Menu.shutdown()
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	height: 100%;
	width: 100%;
}
.main{
	height: 100%;
	width: 100%;
	overflow: hidden;
}
.signs_main{
	display: flex;
	flex-direction: column;
	height: calc(100% - 100rpx);
	background-color: #f3f3f3;
	.main_top{
		display: flex;
		height: 60%;
		width: 100%;
	}
	.main_bottom{
		display: flex;
		height: 40%;
		width: 100%;
	}
	// 左边文字共同样式
	.left{
		position: relative;
		margin: 50rpx 0;
		margin-left: 50rpx;
		width: 5%;
		height: calc(100% - 100rpx);
		border-radius: 20rpx;
		background-color: #dbe8e8;
		.left_text{
			position: absolute;
			top:50%;
			left: 50%;
			transform: translateY(-50%) translateX(-50%);
			width: 60rpx;
			font-size: 60rpx;
		}
	}
	.right{
		margin: 50rpx;
		width: calc(95% - 100rpx);
		height: calc(100% - 100rpx);
		border-radius: 20rpx;
		background-color: #fff;
		}
}
/* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
.charts-box{
  width: 100%;
  height:100%;
}
</style>
