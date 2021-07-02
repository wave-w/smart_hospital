<template>
	<view class="main">
		<nav-top/>
		<view class="infusion_main" @click="shutdown">
			<view class="main_left">
				<view class="left_top">
					<view class="calibration">
						<view class="calibration_item"><text>6</text></view>
						<view class="calibration_item"><text>5</text></view>
						<view class="calibration_item"><text>4</text></view>
						<view class="calibration_item"><text>3</text></view>
						<view class="calibration_item"><text>2</text></view>
						<view class="calibration_item"><text>1</text></view>
						<view class="calibration_item"><text>0</text></view>
					</view>
				</view>
				<view class="left_bottom">
					<image src="../../static/images/back.png" ></image>
				</view>
			</view>
			<view class="main_right">
				<view class="right_items" v-for="i of 30">
					<view class="patient_name">
						<view>06</view>
						<view class="name">郑智英</view>
					</view>
					<view class="calibration_remaining">
						<view class="num_ml">500ml</view>
						<view class="num_box">
							<view class="box_top"></view>
							<view class="now_ml"></view>
							<view class="iconfont icon-dingwei">80</view>
							<view class="now_all">400ml</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<expanded-view ref="Menu"/>
	</view>
</template>

<script>
	import NavTop from '@/components/NavTop/NavTop.vue';
	import ExpandedView from '@/components/ExpandedView/ExpandedView.vue';
	export default {
		components:{
			NavTop,ExpandedView
		},
		data() {
			return {
				
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
	width: 100%;
	height: 100%;
	background-color: #f3f3f3;
}
.main{
	height: calc(100% - 100rpx);
	
}
.infusion_main{
	display: flex;
	height: 100%;
	width: 100%;
	.main_left{
		display: flex;
		flex-direction: column;
		width: 15%;
		height: 100%;
		.left_top{
			margin:25rpx 50rpx;
			height:1600rpx;
			width: 80%;
			background-color: #fff;
			.calibration{
				margin: 50rpx 4%;
				height: 1500rpx;
				width: 90%;
				border: 2rpx solid;
				.calibration_item{
					position: relative;
					height: 200rpx;
					width: 10%;
					border-bottom: 4rpx solid;
					text{
						position: absolute;
						font-size: 50rpx;
						bottom: -20rpx;
						left: 80rpx;
					}
				}
			}
		}
		.left_bottom{
			margin:0 50rpx;
			margin-bottom: 25rpx;
			height: calc(100% - 1670rpx);
			width: 80%;
			background-color: #fff;
			image{
				height: 100%;
				width: 100%;
			}
		}
	}
	.main_right{
		display: flex;
		flex-wrap: wrap;
		height: 100%;
		width: 85%;
		overflow-y: auto;
		.right_items{
			display: flex;
			margin: 25rpx;
			width: 15%;
			height: 20%;
			background-color: #fff;
			.patient_name{
				position: relative;
				display: flex;
				flex-direction: column;
				width: 50%;
				height: 100%;
				view{
					position: absolute;
					top: 120rpx;
					width: 100%;
					font-size: 60rpx;
					text-align: center;
				}
				.name{
					top: 200rpx;
				}
			}
			.calibration_remaining{
				width: 50%;
				height: 100%;
				.num_ml{
					padding: 60rpx 0;
					text-align: center;
					width: 100%;
					top: 100rpx;
					height:calc(40% - 120rpx);
					font-size: 50rpx;
				}
				.num_box{
					position: relative;
					margin: 0 40rpx;
					height: 200rpx;
					width: 150rpx;
					border: 1px solid;
					border-radius: 20rpx;
					.box_top{
						position: absolute;
						left: 10%;
						height: 50%;
						width: 80%;
						border-bottom: 1px solid;
						z-index: 10;
					}
					.now_ml{
						position: absolute;
						bottom: 0;
						width: 100%;
						height: 80%;
						border-radius: 20rpx;
						background-color: #c8e3e3;
						z-index: 9;
					}
					.icon-dingwei{
						position: absolute;
						font-size: 40rpx;
						bottom: 20rpx;
						left: 30rpx;
						z-index: 9;
					}
					.now_all{
						position: absolute;
						bottom: 80%;
						width: 100%;
						text-align: center;
						font-size: 30rpx;
					}
				}
			}
		}
	}
}
</style>
