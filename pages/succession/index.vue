<template>
	<view class="main">
		<nav-top/>
		<view class="succession_main" @click="shutdown">
			<view class="main_top">
				<view class="refresh">刷新<text class="iconfont icon-shuaxin"></text></view>
				<view class="time_check">
					<view class="iconfont icon-jiantou" :style="{backgroundColor:'#00742d'}"></view>
					<view class="text">12/22 08:00 - 12/22 14:25</view>
					<view class="iconfont icon-z043"></view>
				</view>
				<view class="top_items" v-for="(item,index) in top_items" :key="index">{{item}}</view>
			</view>
			<view class="main_content">
				<view class="content_top">
					<view class="top_check">
						<view v-for="(item,index) in content_check" :key="index" 
						:class="{checked_item:checkitem === item}" 
						@click="checked_item(item)">{{item}}</view>
					</view>
					<view class="top_text">当日重点患者与交接</view>
				</view>
				<view class="content_middle">
					<view class="middle_item" v-for="(item,index) in middle_item" :key="index">
						<view class="item_top">
							<view class="top_text">{{item.tittle[0]}}</view>
							<view>{{item.tittle.slice(1)}}</view>
						</view>
						<view class="item_bottom">
							<view  v-for="(item,index) in item.children" :key="index">{{item}}</view>
						</view>
					</view>
				</view>
				<view class="content_bottom">
				暂无数据
			</view>
			</view>
		</view>
		<expanded-view ref="Menu"/>
	</view>
</template>

<script>
	import NavTop from "@/components/NavTop/NavTop.vue";
	import ExpandedView from "@/components/ExpandedView/ExpandedView.vue"
	export default {
		components:{NavTop,ExpandedView},
		data() {
			return {
				top_items:["原有:38","手术:0","预手术：0","重:0","危:0","特/一级:2","现在:40","入:3","出:1"],
				content_check:["交接患者","全部患者"],
				checkitem:"交接患者",
				middle_item:[{tittle:"Identity(身份验证)",children:["标记","床位","姓名/性别/年龄"]},
				{tittle:"Reccommendation(建议)",children:["诊断","护理问题"]},
				{tittle:"Assessment(评估)",children:["既往史/治疗经过/手术"]},
				{tittle:"Background(背景)",children:["建议措施"]},
				{tittle:"Situation(现状)",children:["姓名/性别/年龄"]}]
			}
		},
		methods: {
			shutdown(){
				this.$refs.Menu.shutdown()
			},
			checked_item(item){
				this.checkitem = item
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
	background-color: #f3f3f3;
}
.succession_main{
	height: calc(100% - 100rpx);
	width: 100%;
	.main_top{
		display: flex;
		justify-content: space-between;
		margin: 0 2%;
		height: 8%;
		width: 96%;
		// background-color: #fff;
		.refresh{
			margin-top: 20rpx;
			width: calc(10% - 120rpx);
			height:  calc(80% - 60rpx);;
			padding: 30rpx 60rpx;
			font-size: 60rpx;
			color: #fff;
			border-radius: 30rpx;
			background-color: #00742d;
			.icon-shuaxin{
				font-size: 70rpx;
				float: right;
			}
		}
		.time_check{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20rpx;
			width: 30%;
			height: 80%;
			font-size: 60rpx;
			background-color: #fff;
			.iconfont{
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				width: 15%;
				font-weight: 900;
				font-size: 80rpx;
				border-radius: 20rpx;
				color: #fff;
				background-color: #c3dcdc;
			}
		}
		.top_items{
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 20rpx;
			min-width: 5%;
			height: 80%;
			font-size: 50rpx;
			border-radius: 30rpx;
			background-color: #fff;
		}
	}
	.main_content{
		display: flex;
		flex-direction: column;
		margin: 30rpx 2%;
		height: calc(92% - 60rpx);
		width: 96%;
		background-color: #fff;
		.content_top{
			display: flex;
			justify-content: space-between;
			margin: 50rpx 0;
			height: 8%;
			width: 100%;
			.top_check{
				display: flex;
				align-items: center;
				margin-left: 40rpx;
				width: 20%;
				height: 100%;
				border: 4rpx solid #00742d;
				border-radius: 20rpx;
				view{
					width: 50%;
					height: 100%;
					line-height: 140rpx;
					text-align: center;
					font-size: 60rpx;
					color: #00742d;
					border-radius: 20rpx;
				}
				.checked_item{
					color: #fff;
					background-color: #00742d;
				}
			}
			.top_text{
				font-size: 60rpx;
				font-weight: 900;
				width: 30%;
				line-height: 140rpx;
				text-align: center;
			}
		}
		.content_middle{
			display: flex;
			height: 16%;
			width: 100%;
			justify-content: space-between;
			// background-color: red;
			.middle_item{
				display: flex;
				flex-direction: column;
				margin-left: 40rpx;
				// width: 25%;
				min-width: 18%;
				height: 100%;
				// background-color: blue;
				.item_top{
					display: flex;
					// margin: 0 1%;
					height: 50%;
					// width: 98%;
					font-size: 50rpx;
					font-weight: 900;
					border-radius: 20rpx;
					background-color: #ddeeee;
					view{
						line-height: 130rpx;
						margin:0 30rpx;
					}
					.top_text{
						font-size: 80rpx;
						color: #00742d;
					}
				}
				.item_bottom{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 1% 0;
					height: 48%;
					view{
						flex: 1;
						margin: 5rpx;
						padding: 20rpx;
						height: 50%;
						font-size: 40rpx;
						text-align: center;
						line-height: 60rpx;
						border-radius: 20rpx;
						white-space: nowrap;
						background-color: #ddeeee;
					}
				}
			}
		    .middle_item:last-child {
				margin-right: 40rpx;
			}
		}
		.content_bottom{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 75%;
			width: 100%;
			font-size: 150rpx;
			color: #ddeeee;
		}
	}
}
</style>
