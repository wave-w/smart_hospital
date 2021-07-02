<template>
	<view class="main">
		<nav-top/>
		<view class="quality_main" @click="shutdown">
			<view class="main_top">
				<view class="top_left">
					<view class="top_tittle">质量指标</view>
					<view class="left_main">
						<view class="main_content"  v-for="(item,index) in left_items" :key="index">
							<view class="items">
								<view class="text">{{item.ratio}}</view>
								<view>{{item.text}}</view>
							</view>
							<view class="borde_"></view>
						</view>
					</view>
				</view>
				<view class="top_right">
					<view class="top_tittle">基础数据</view>
					<view class="right_top">
						<view class="top_text">
							<text>·</text>
							<text>在院患者</text>
							<text>0</text>
						</view>
						<view class="top_main">
							<view class="top_main_item" v-for="i of 20">
								<text>新入</text>
								<text>0</text>
							</view>
						</view>
						
					</view>
					<view class="right_bottom">
						<view class="top_text">
							<text>·</text>
							<text>在院护士</text>
							<text>0</text>
							<button type="default">查看详情</button>
						</view>
						<view class="top_main">
							<view class="top_main_item" v-for="i of 20">
								<text>在岗护士</text>
								<text>0</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="main_bottom">
				<view class="top_tittle">
					<text>高风险监测</text>
					<button type="default">查看详情</button>
				</view>
				<view class="bottom_main">
					<view class="bottom_item" v-for="i of 4">暂无数据</view>
				</view>
			</view>
		</view>
		<expanded-view ref="Menu"/>
	</view>
</template>

<script>
	import NavTop from "@/components/NavTop/NavTop.vue";
	import ExpandedView from "@/components/ExpandedView/ExpandedView.vue";
	export default {
		components:{NavTop,ExpandedView},
		data() {
			return {
				left_items:[{ratio:"1:0",text:"床护比"},{ratio:"1:0",text:"护患比"},
				{ratio:"0",text:"平均护理数"},{ratio:"0%",text:"离职率"},{ratio:"-",text:"身体约束率"},
				{ratio:"0%",text:"压疮发生率"},{ratio:"-",text:"跌倒发生率"},{ratio:"-",text:"非计划性拔管"},
				{ratio:"-",text:"血管感染发生率"},{ratio:"-",text:"尿管感染发生率"},{ratio:"-",text:"VAP发生率"}]
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
.quality_main{
	display: flex;
	flex-direction: column;
	height: calc(100% - 100rpx);
	width: 100%;
	background-color: #f3f3f3;
	.main_top{
		display: flex;
		margin: 1% 1%;
		height: 48%;
		width: 98%;
		.top_left{
			height: 100%;
			width: 65%;
			margin-right: 1%;
			background-color: #fff;
			.left_main{
				display: flex;
				flex-wrap: wrap;
				margin:0 2%;
				width: 96%;
				height: calc(90% - 60rpx);
				// background-color: blue;
				.main_content{
					display: flex;
					height: 30%;
					margin-right: 20rpx;
					// background-color: red;
					.items{
						height: 100%;
						font-size: 60rpx;
						padding: 20rpx;
						margin-right: 40rpx;
						text-align: center;
						// border-right: 1px solid;
						view{
							margin-top: 10rpx;
						}
						.text{
							font-size: 60rpx;
							font-weight: 900;
						}
					}
					.borde_{
						margin-top: 30rpx;
						height: 55%;
						border: 1px solid;
					}
				}
			}
		}
		.top_right{
			height: 100%;
			width: 34%;
			background-color: #fff;
			.right_top{
				width: 100%;
				height: 40%;
			}
		    .right_bottom{
				margin: 1% 0;
				width: 100%;
				height: 42%;
			}
		}
		
		.top_text{
			display: flex;
			font-size: 60rpx;
			height: 30%;
			// background-color: red;
			button{
				margin: 15rpx 0;
				margin-left: 30%;
				height: 80%;
				width: 20%;
				color: #fff;
				background-color: #00742d;
			}
			text{
				// position: absolute;
				padding: 20rpx 30rpx;
			}
			text:first-child{
				padding: 10rpx 30rpx;
				font-size: 70rpx;
				font-weight: 900;
				color: #00742d;
			}
		}
		.top_main{
			display: flex;
			flex-wrap: wrap;
			height: 70%;
			width: 100%;
			overflow: auto;
			.top_main_item{
				display: flex;
				justify-content: space-between;
				margin: 15rpx;
				height: 30%;
				width: 30%;
				font-size: 50rpx;
				border: 1px solid;
				// background-color: red;
				text{
					padding: 0 20rpx;
				}
			}
		}
	}
	.main_bottom{
		margin: 0 1%;
		margin-bottom: 1%;
		height: 49%;
		width: 98%;
		background-color: #fff;
		.bottom_main{
			display: flex;
			height: calc(90% - 60rpx);
			width: 100%;
			.bottom_item{
				flex: 1;
				margin: 30rpx 60rpx;
				border: 1px solid #000;
				font-size: 100rpx;
				text-align: center;
				line-height: 600rpx;
				color: #d0d0d0;
			}
		}
	}
	.top_tittle{
		display: flex;
		height: 10%;
		width: 96%;
		margin:30rpx 2%;
		font-size: 60rpx;
		font-weight: 900;
        button{
			margin-left: 82%;
			width: 8%; 
			color: #fff;
			background-color: #00742d;
		 }
		// background-color: red;
	}
}
</style>
