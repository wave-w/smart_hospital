<template>
	<view class="main">
		<view class="top">
			<view class="iconfont icon-zhankai"></view>
			<view class="text">病历调阅</view>
		</view>
		<view class="middle">
			<view class="left">
				<view class="iconfont icon-wenjian"></view>
			</view>
			<view class="middle_main">
				<view class="information">
					<view class="portrait">
						<image src="@/static/images/pation.jpg" mode=""></image>
					</view>
					<view class="main_information">
							<view class="information_box">
								<view class="first_top">
									<view class="bednum">2床</view>
									<view class="patientname">{{patientobj.name}}</view>
								</view>
								<view class="first_bottom">
									<view class="department">科室:</view>
									<view class="ward">骨科四区(创伤、烧伤、摔伤、骨折、瘫痪)</view></view>
							</view>
							<view class="information_box">
								<view class="box_item">
									<view>{{patientobj.sex==="man"?"男":"女"}} |</view>
									<view>{{patientobj.age}}岁</view>
								</view>
								<view class="box_item">
									<view>病区:</view>
									<view>骨科四区</view>
								</view>
							</view>
							<view class="information_box">
								<view class="box_item">
									<view>入院:</view>
									<view>2022-09-08</view>
								</view>
								<view class="box_item">
									<view>责任医生:</view>
									<view>{{patientobj.doctor}}</view></view>
							</view>
							<view class="information_box">
								<view class="box_item">
									<view>天数:</view>
									<view>1090</view>
								</view>
								<view class="box_item">
									<view>责任护士:</view>
									<view>{{patientobj.nurse}}</view>
								</view>
							</view>
					</view>
						<view class="history">
							<view class="iconfont icon-denglu"></view>
							<view>病历史</view>
						</view>
				</view>
				<view class="main_content">
					<view class="right">
							<slot name="main_content"></slot>
						</view>
						<view class="menu" @click="itemcheck">
							<view :class="{menu_items:true,menu_items_check:patient_menu_check===item.tittle}" 
							v-for="(item,index) in patient_menu" :key="index" :data-menu="item">
							{{item.tittle}}</view>
						</view>
				</view>
			</view>
			</view>
		<view class="bottom">
			<view class="iconfont icon-fuxuananniu"></view>
			<button type="default" @click="navback">返回</button>
		</view>
	</view>
</template>
<script>
	export default {
		name:"TopLeft",
		props:{
			patientobj:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				patient_menu:[{tittle:"摘要",pageurl:"/pages/bedlist/medicalrecords/abstract"},
							  {tittle:"医嘱",pageurl:"/pages/bedlist/medicalrecords/advice"},
							 {tittle:"病历",pageurl:"/pages/bedlist/medicalrecords/medicalrecords"},
							  {tittle:"检验",pageurl:"/pages/bedlist/medicalrecords/inspection"},
							  {tittle:"检查",pageurl:"/pages/bedlist/medicalrecords/check"},
							  {tittle:"手术",pageurl:"/pages/bedlist/medicalrecords/surgery"},
						{tittle:"基本信息",pageurl:"/pages/bedlist/medicalrecords/information"}],
				patient_menu_check:""
			};
		},
		mounted() {
			this.patient_menu_check = uni.getStorageSync("pageurl") || "基本信息"
		},
		methods:{
			navback(){
				uni.navigateTo({
					url:"/pages/bedlist/index"
				})
			},
			itemcheck(e){
				// console.log(e.target.dataset.menu)
				let item = e.target.dataset.menu
				if(item){uni.setStorageSync("pageurl",item.tittle)
				uni.navigateTo({
					url:item.pageurl
				})}
			}
		}
	}
</script>


<style lang="scss" scoped>
.top{
	position: relative;
	display: flex;
	width: 100%;
	height: 8%;
	font-size: 100rpx;
	background-color: #00742d;
	.icon-zhankai{
		position: absolute;
		top: 10%;
		left: 1%;
		font-size: 100rpx;
	}
	.text{
		position: absolute;
		left: 50%;
		transform: translate(-50%);
	}
}
.middle{
	display: flex;
	width: 100%;
	height: 84%;
	.left{
		width: 4.5%;
		height: 100%;
		background-color: #00742d;
		.icon-wenjian{
			margin: 13%;
			font-size: 100rpx;
			}
	}
	.middle_main{
		display: flex;
		flex-direction: column;
		width: 95.5%;
		height: 100%;
		.information{
			position: relative;
			display: flex;
			height: 18%;
			width: 100%;
			margin-bottom: 1.5%;
			background-color: #fff;
			.portrait{
				position: absolute;
				top: 5%;
				left: 2%;
				width: 9%;
				height: 85%;
				image{
					height: 100%;
					width: 100%;
					border-radius: 50%;
				}
			}
			.main_information{
				position: absolute;
				display: flex;
				left: 15%;
				width: 75%;
				height: calc(100% - 20rpx);
				margin-top: 20rpx;
				.information_box{
					flex:1;
					margin: 0 10rpx;
					height: 100%;
					view{
						height: 50%;
					}
					.first_top{
						width: 100%;
						display: flex;
						align-items: center;
						font-size: 60rpx;
						font-weight: 900;
					 .bednum{
							padding: 15rpx 30rpx;
							background-color: #00742d;
							color: #fff;
							margin-right: 50rpx;
						}
					}
					.first_bottom{
						width: 100%;
						display: flex;
						font-size: 60rpx;
						font-weight: 900;
						white-space: nowrap;
						.ward{
							width: 500rpx;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
					.box_item{
						display: flex;
						font-size: 60rpx;
						view{
							padding: 20rpx;
							// background-color: blue;
						}
					}
				}
			}
			.history{
				position: absolute;
				right: 1%;
				top: 10%;
				height: 90%;
				width: 10%;
				text-align: center;
				.icon-denglu{
					color: #c9c9c9;
					margin-bottom: 3%;
					font-size: 120rpx;
				}
				view{
					height: 50%;
					font-size: 60rpx;
				}
			}
		}
		.main_content{
			display: flex;
			height: 80%;
			width: 100%;
			.right{
					width: 88%;
					height: 100%;
				}
				.menu{
					margin-left: 1%;
					width: 9.5%;
					overflow: auto;
					.menu_items{
						margin: 10% 2%;
						width: 96%;
						height: 8%;
						line-height: 120rpx;
						font-size: 60rpx;
						font-weight: 900;
						text-align: center;
						border-radius: 30rpx;
						background-color: #fff;
					}
					.menu_items_check{
						color: #fff;
						background-color: #00742d;
					}
				}
			}
	}
	}
.bottom{
	display: flex;
	width: 100%;
	height: 8%;
	background-color: #00742d;
	.icon-fuxuananniu{
		text-align: center;
		line-height: 180rpx;
		height: 100%;
		width: 4.5%;
		font-size: 100rpx;
		border-right: 4rpx solid #fff;
	}
	button{
		margin: 25rpx 100rpx;
		line-height: 120rpx;
		height: 70%;
		width: 8%;
		font-size: 60rpx;
		border-radius: 20rpx;
		color: #fff;
		background-color: #0099ff;
	}
}
</style>
