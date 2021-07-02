<template>
	<view class="main">
		<top-left :patientobj="patientobj">
				<view slot="main_content" class="test">
					<view class="content_main">
						<view class="tittle">
							<view>患者信息</view>
						</view>
						<view class="main">
							<view class="infor_three">
								<view>姓名: {{patientobj.name}}</view>
								<view>性别: {{patientobj.sex==="man"?"男":"女"}}</view>
								<view>年龄: {{patientobj.age}}</view>
								<view>患者号: 2131283781</view>
								<view>证件号: 360425199809081112</view>
								<view>婚姻: 已婚</view>
							</view>
							<view class="infor_two">
								<view>民族: 维吾尔族</view>
								<view>联系方式: 15798989760</view>
								<view class="address">地址: 江西省赣州市赣州经济开发区赣南医学院第一附属医院</view>
							</view>
						</view>
						<view class="tittle">
							<view>住院信息</view>
						</view>
						<view class="main">
							<view class="infor_three">
								<view>住院号: 11122333131</view>
								<view>病床号: 2</view>
								<view>缴费方式: 网银支付</view>
								<view>入院事件: 2021-09-08</view>
								<view>住院天数: 1038天</view>
								<view>住院病区: 骨科四区</view>
							</view>
							<view class="infor_three">
								<view>主治医生: {{patientobj.doctor}}</view>
								<view>责任护士: {{patientobj.nurse}}</view>
								<view class="address">病情: {{patientobj.illnessmes}}</view>
							</view>
						</view>
						<view class="tittle">
							<view>联系人信息</view>
						</view>
						<view class="infor_bottom">
							<view class="infor_three">
								<view>单位: 工地</view>
								<view>职业: 长方体固体定向移动工程师</view>
								<view>联系方式: 13655789089</view>
							</view>
						</view>
					</view>
				</view>
		</top-left>
	</view>
</template>

<script>
	import TopLeft from '@/components/TopLeft/TopLeft.vue';
	export default {
		components:{TopLeft},
		data() {
			return {
				patientobj:{}
			}
		},
		onLoad() {
			this.patientobj = JSON.parse(uni.getStorageSync("patientobj"))
		},
		methods: {
			
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
.test{
	height: 100%;
	width: 100%;
	.content_main{
		height: 100%;
		width: 100%;
		.tittle{
			display: flex;
			height: 10%;
			margin-bottom: 1%;
			background-color: #fff;
			view{
				margin-top: 1%;
				margin-left: 1%;
				padding-left: 2%;
				height: 60%;
				width: 30%;
				border-left: 20rpx solid;
				font-size: 60rpx;
				font-weight: 900;
			}
		}
		.main{
			height: 25%;
			width: 100%;
			background-color: #fff;
			.infor_two{
				display: flex;
				flex-wrap: wrap;
				height: 50%;
				width: 100%;
				view{
					margin-left: 3%;
					font-size: 50rpx;
					min-width: 30%;
				}
			}
			.address{
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				width: 100%;
			}
		}
		.infor_bottom{
			height: 12%;
			background-color: #fff;
			.infor_three{
				padding-top: 2%;
			}
		}
		.infor_three{
			display: flex;
			flex-wrap: wrap;
			height: 50%;
			width: 100%;
			view{
				margin-left: 3%;
				font-size: 50rpx;
				min-width: 30%;
			}
		}
	}
}
</style>
