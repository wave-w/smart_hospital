<template>
	<view class="main">
		<!-- 头部 -->
		<nav-top></nav-top>
		<!-- 页面主内容区 -->
		<view class="ward_box" @click="shutdown">
			<!-- 页面左部病房护理 -->
				<view class="ward_box_left">
					<view class="main_top">
						<view class="mian_top_left">病房护理</view>
						<view class="mian_top_right">
							<text>住院总数</text>
							<text>40</text>
						</view>
					</view>
					<view class="main_content">
						<view class="main_left">`
							<view class="main_left_top">
								<view class="dynamic_text">
									<text class="iconfont icon-lingdang"></text>
									<text class="tittle">病房动态</text>
								</view>
								<view  class="ward_dynamic">
									<view class="dynamic_details" v-for="(item,index) in dynamic_details" :key='index'>
										<view class="detail_title">{{item.title}}</view>
										<view class="detail_items">
											<text v-for="(item_num,index) in item.detail" :key="index">{{item_num}}</text>
										</view>
									</view>
								</view>
							</view>
							<view class="main_left_bottom">
								<view class="dynamic_text">
									<text class="iconfont icon-lingdang"></text>
									<text class="tittle">检查安排</text>
								</view>
								<view  class="ward_dynamic">
									<view class="dynamic_details" v-for="(item,index) in check_details" :key='index'>
										<view class="detail_title">{{item.title}}</view>
										<view class="detail_items">
											<text v-for="(item_num,index) in item.detail" :key="index">{{item_num}}</text>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="main_right">
							<view class="dynamic_text">
								<text class="iconfont icon-lingdang"></text>
								<text class="tittle">长期治疗</text>
							</view>
							<view  class="ward_dynamic">
								<view class="dynamic_details" v-for="(item,index) in long_details" :key='index'>
									<view class="detail_title">{{item.title}}</view>
									<view class="detail_items">
										<text v-for="(item_num,index) in item.detail" :key="index">{{item_num}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			<!-- 页面右部通知公告+医生值班 -->
			<view class="ward_box_right">
				<view class="Announcements">
					<view class="Announcements_title">
						<text class="iconfont icon-gonggao"></text>
						<text class="title_text">通知公告</text>
					</view>
					<view class="Announcements_text">
						<view>1.请各班次按6S管理基准卡的标准每日整理负责区域，下班前检查并记录。</view>
						<view>2.所有住院患者及陪护人员均需行新冠核酸检测,新入院者在24小时内完成。</view>
						<view>3.指导所有新入院患者关注医院公众号，微信扫疫情防控行程码。</view>
					</view>
				</view>
				<view class="on_duty">
					<view class="on_duty_title">
						<text class="iconfont icon-jifangzhiban"></text>
						<text class="title_text">医护值班</text>
					</view>
					<view class="on_duty_text">
						<!-- 医生值班 -->
						<view class="main_text">
							<view class="title">
								<text class="_border"></text>
								<text class="_text">医生</text>
							</view>
							<view class="on_duty_items">
								<view class="items_text">
									<view class="top">一线</view>
									<view class="bottom">刘军</view>
								</view>
								<view class="items_text">
									<view class="top">二线</view>
									<view class="bottom">刘呗</view>
								</view>
								<view class="items_text">
									<view class="top">三线</view>
									<view class="bottom">王路</view>
								</view>
							</view>
						</view>
						<!-- 、护士值班 -->
						<view class="main_text">
							<view class="title">
								<text class="_border"></text>
								<text class="_text">护士</text>
							</view>
							<view class="on_duty_items">
								<view class="items_text">
									<view class="top">A组</view>
									<view class="bottom">李晓</view>
								</view>
								<view class="items_text">
									<view class="top">B组</view>
									<view class="bottom">王璐</view>
								</view>
								<view class="items_text" v-for="i of 3">
									<view class="top">C组</view>
									<view class="bottom">李小文</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 展开菜单 -->
		<expanded-view  ref="Menu"></expanded-view>
	</view>
</template>

<script>
	import NavTop from '@/components/NavTop/NavTop.vue'
	import ExpandedView from '@/components/ExpandedView/ExpandedView.vue'
	export default {
		data() {
			return {
				dynamic_details:[{id:1,title:"特、一级",detail:[10,20,40,23,56]},{id:2,title:"昨日手术",
				detail:[30,40,50,13,16]},{id:3,title:"预手术",detail:[40,10,50,13,16]},
				{id:4,title:"特、一级",detail:[10,20,40,23,56]},{id:5,title:"昨日手术",detail:[30,40,50,13,16]},
				{id:6,title:"预手术",detail:[40,10,50,13,16]}],
				check_details: [],
				long_details:[]
			}
		},
		onLoad(){
			this.check_details = this.dynamic_details.slice(1,4)
			this.long_details = [...this.dynamic_details,...this.dynamic_details,...this.dynamic_details]
		},
		components:{
			NavTop,ExpandedView
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
}
.main{
	height: 100%;
	overflow: hidden;
	background-color: #f3f3f3;
}
.iconfont{
	font-size: 100rpx;
	color: #33cccc;
}
.ward_box{
	height: calc(100% - 100rpx);
	display: flex;
	justify-content: space-between;
	// 页面左部
		.ward_box_left{
			width: 75%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			// 头部文字
			.main_top{
				display: flex;
				justify-content: space-between;
				height: 10%;
				width: 100%;
				color: #000;
				view{
					margin: auto 50rpx;
					font-size: 50rpx;
					font-weight: 900;
				}
				.mian_top_right{
					width: 20%;
					height: 60%;
					text-align: center;
					border-radius: 40rpx;
					background-color: #fff;
					text{
					display: inline-block;
					font-weight: 400;
					margin: 5% 30rpx;
					// background-color: blue;
					}
				}
				
			}
			// 主要内容
			.main_content{
				height: 90%;
				width: 100%;
				display: flex;
				justify-content: space-between;
				// 病房动态+检查安排
				.main_left{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 50%;
					height: 100%;
					// 病房动态
					.main_left_top{
						margin: 0 50rpx;
						height: 55%;
						border-radius: 40rpx;
						background-color: #fff;
					}
					// 检查安排
					.main_left_bottom{
						margin: 0 50rpx;
						height: 44%;
					}
					// 左边标题
					.dynamic_text{
						height: 20%;
						position: relative;
						text{
							position: absolute;
							top: 40rpx;
							left: 30rpx;
						}
						.tittle{
							top: 55rpx;
							left: 160rpx;
							font-size: 60rpx;
							color: #33cccc;
						}
					}
					// 左边主内容
					.ward_dynamic{
						display: flex;
						flex-direction: column;
						height: 80%;
						overflow-y: auto;
						background-color: #fff;
						.dynamic_details{
							display: flex;
							height: 120rpx;
							margin: 20rpx 0;
							.detail_title{
								width: 30%;
								height: 120rpx;
								line-height: 120rpx;
								margin: auto 20rpx;
								font-size: 50rpx;
								text-align: center;
								border-radius: 20rpx;
								color: #fff;
								background-color: #009999;
							}
							.detail_items{
								display: flex;
								width: 80%;
								height: 120rpx;
								margin: auto 20rpx;
								font-size: 50rpx;
								border-radius: 20rpx;
								color: #000;
								text{
									display: inline-block;
									margin: 0 20rpx;
									width: 120rpx;
									height: 120rpx;
									line-height: 120rpx;
									text-align: center;
									border-radius: 20rpx;
									background-color: #ddf6f6;
								}
							}
						}
					}
				}
				// 长期治疗
				.main_right{
					margin: 0 50rpx;
					border-radius: 40rpx;
					width: 50%;
					height: 99%;
					margin-top: 1.5%;
					// background-color: red;
					// 左边标题
					.dynamic_text{
						height: 10%;
						position: relative;
						background-color: #fff;
						text{
							position: absolute;
							top: 40rpx;
							left: 30rpx;
						}
						.tittle{
							top: 55rpx;
							left: 160rpx;
							font-size: 60rpx;
							color: #33cccc;
						}
					}
					// 左边主内容
					.ward_dynamic{
						display: flex;
						flex-direction: column;
						height: 90%;
						overflow-y: auto;
						background-color: #fff;
						.dynamic_details{
							display: flex;
							height: 120rpx;
							margin: 20rpx 0;
							.detail_title{
								width: 30%;
								height: 120rpx;
								line-height: 120rpx;
								margin: auto 20rpx;
								font-size: 50rpx;
								text-align: center;
								border-radius: 20rpx;
								color: #fff;
								background-color: #009999;
							}
							.detail_items{
								display: flex;
								width: 80%;
								height: 120rpx;
								margin: auto 20rpx;
								font-size: 50rpx;
								border-radius: 20rpx;
								color: #000;
								text{
									display: inline-block;
									margin: 0 20rpx;
									width: 120rpx;
									height: 120rpx;
									line-height: 120rpx;
									text-align: center;
									border-radius: 20rpx;
									background-color: #ddf6f6;
								}
							}
						}
					}
				}
			}
		}
		
	// 页面右部 通知公告+医生值班
	.ward_box_right{
			display: flex;
			flex-direction: column;
			width: 24%;
			.Announcements{
				position: relative;
				height: 50%;
				margin:3% 0;
				margin-right: 50rpx;
				border-radius: 40rpx;
				background-color: #fff;
				.Announcements_title{
					margin: 20rpx;
					color: #33cccc;
					.title_text{
						position: absolute;
						top: 40rpx;
						left: 150rpx;
						font-size: 50rpx;
					}
				}
				.Announcements_text{
					font-size: 50rpx;
					height: 80%;
					overflow: auto;
					view{
						margin: 20rpx;
					}
					
				}
			}
		    .on_duty{
				position: relative;
				height: 48%;
				margin-right: 50rpx;
				border-radius: 40rpx;
				background-color: #fff;
				.on_duty_title{
					margin: 20rpx;
					.title_text{
						position: absolute;
						top: 40rpx;
						left: 150rpx;
						font-size: 50rpx;
					}
				}
				.on_duty_text{
					height: 100%;
					.main_text{
						height: 40%;
						width: 100%;
						// overflow: auto;
						.title{
							font-size: 50rpx;
							position: relative;
							._border{
								display: inline-block;
								height: 100rpx;
								width: 20rpx;
								margin: 0 30rpx;
								background-color: #339999;
							}	
							._text{
								position: absolute;
								top:20rpx;
							}
						}
					.on_duty_items{
						display: flex;
						flex-wrap: wrap;
						font-size: 50rpx;
						text-align: center;
						margin-top: 20rpx;
						height: 300rpx;
						overflow: auto;
						.items_text{
							display: flex;
							flex-direction: column;
							width: 25%;
							height: 200rpx;
							line-height: 100rpx;
							margin:30rpx;
						.top{
							height: 50%;
							border-radius: 15rpx;
							background-color: #d7d7d7;
						}
						.bottom{
							height: 50%;
							border-radius: 15rpx;
							background-color: #f2f2f2;
						}
						}
					}
					}
				}
			}
		}
}
</style>
