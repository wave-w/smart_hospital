<template>
	<view class="main">
		<nav-top/>
		<view class="nursing_main" @click="shutdown">
			<view class="main_items" v-for="(item,index) in nursingitems" :key="index">
				<view class="items_top">
					<view :class="item.icon"></view>
					<view class="top_text">
						<text>{{item.title}}</text>
						<text>14：00</text>
					</view>
				</view>
				<view class="items_middle">
					<view :class="{middle_right:true,middle_check:middle_check[index]===item.check1}"
					@click="itemchecked(item.check1,index)">{{item.check1}}
					</view>
					<view class="border"></view>
					<view :class="{middle_right:true,middle_check:middle_check[index]===item.check2}"
					@click="itemchecked(item.check2,index)">{{item.check2}}
					</view>
				</view>
				<view class="items_content">
					<view class="content_item">
						<view class="items_text" v-for="i of 8">
							<view class="text_title">体温</view>
							<view class="text_num" v-for="i of 10">12</view>
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
	import ExpandedView from '@/components/ExpandedView/ExpandedView.vue'
	export default {
		components:{NavTop,ExpandedView},
		data() {
			return {
				nursingitems:[{icon:"iconfont icon-xiaoxi",title:"今日待测体征",check1:"按体征排序",check2:"按病人排序"},{icon:"iconfont icon-gantanhao",title:"今日待测风险",check1:"按风险类型汇总",check2:"按病人排序"},
				{icon:"iconfont icon-yizhuzhihang",title:"今日待执行医嘱",check1:"按医嘱类型排序",check2:"按病人排序"}],
				middle_check:["按体征排序","按风险类型汇总","按医嘱类型排序"]
			}
		},
		methods: {
			shutdown(){
				this.$refs.Menu.shutdown()
			},
			itemchecked(checked,index){
				// console.log(checked,index)
				this.middle_check[index] = checked
				this.middle_check.push(1)
				this.middle_check.pop()
				// console.log(this.middle_check)
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	height: 100%;
	width: 100%;
	background-color: #f3f3f3;
}
.main{
	height: 100%;
	overflow: hidden;
}
.nursing_main{
	display: flex;
	height: calc(100% - 100rpx);
	.main_items{
		margin: 30rpx;
		width: 33%;
		height: 97%;
		background-color: #fff;
		.items_top{
			display: flex;
			font-size: 60rpx;
			height:10%;
			width: 100%;
			background-color: #ddeeee;
			.iconfont{
				margin: 40rpx 20rpx;
				font-size: 100rpx;
			}
			.top_text{
				display: flex;
				margin: 50rpx 30rpx;
				width: calc(85% - 120rpx);
				justify-content: space-between;
				padding-right: 120rpx;
			}
		}
		.items_middle{
			display: flex;
			justify-content: space-between;
			font-size: 60rpx;
			height:10%;
			width: 100%;
			border-bottom: 8rpx solid #cecece;
			// background-color: blue;
			view{
				height:75%;
				width: 40%;
				margin: 50rpx 0;
				text-align: center;
				// background-color: red;
			}
			.border{
				width: 0;
				height: 100rpx;
				border: 1px solid;
			}
			.middle_left{
				margin-left: 60rpx;
				// background-color: red;
			}
			.middle_right{
				margin-right: 50rpx;
			}
			.middle_check{
				border-bottom: 4rpx solid #00742d;
			}
		}
		.items_content{
			position: relative;
			width: 100%;
			height: 80%;
			// background-color: red;
			.content_item{
				position: absolute;
				left: 5%;
				top: 2%;
				height: 98%;
				width: 90%;
				overflow: auto;
				// background-color: blue;
				.items_text{
					display: flex;
					flex-wrap: wrap;
					font-size: 60rpx;
					width: 100%;
					margin: 30rpx 0;
					// background-color: red;
					.text_title{
						margin: 20rpx 0;
						padding: 10rpx 30rpx;
						border-radius: 20rpx;
						background-color: #ddeeee;
					}
					.text_num{
						padding: 20rpx 30rpx;
						margin: 10rpx 20rpx;
						border-radius: 20rpx;
						color: #fff;
						background-color: #00742d;
					}
				}
			}
		}
	}	
}
</style>
