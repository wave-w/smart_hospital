<template>
	<view>
		<!-- 悬浮按钮 -->
		<view class="iconfont icon-gengduo1" v-if="iconactive" @click="changeicon"></view>
		<view class="iconfont icon-gengduo" v-if="!iconactive" @click="changeicon"></view>
		<!-- 扩展页面 -->
		<view class="loginbox" v-if="iconactive">
			<!-- 扩展子类 -->
			<view class="loginbox_item" v-for="(item,i) in menulist" :key='i' hover-class='loginbox_item_hover'
			 @click="navtopage(item.pageurl)">
				<view class="iconfont icon-xiaolian"></view>
				<view class="loginbox_item_text">{{item.title}}</view>
			</view>
			<view class="loginbox_item_last"  @click="navtopage('/pages/quality/index')"
			 hover-class='loginbox_item_hover'>
				<view class="iconfont icon-xiaolian"></view>
				<view class="loginbox_item_last_text">
					全院质控平台</view>
			</view>
			<!-- 扩展底部 -->
			<view class="loginbox_bottom">
				<view class="iconfont icon-denglu"  @click="opentologin"></view>
				<view class="loginbox_bottom_text" @click="opentologin">登录</view>
				<button type="default" class="loginbox_bottom_btn">班次</button>
			</view>
		</view>
		<!-- 登录弹出页面 -->
		<neil-modal :show="showtologin" title="登录" confirm-text="登录" cancel-text="取消"
		 @confirm='tologin' @cancel='showtologin = false'>
		    <view class="tologin">
		       	<text>账号:</text> <input type="text" v-model="tologinobj.username" />
			   	<text>密码:</text> <input type="password" v-model="tologinobj.password" />
		    </view>
		</neil-modal>
	</view>
</template>

<script>
	import neilModal from '@/components/neil-modal/neil-modal.vue';
	export default {
		name:"ExpandedView",
		components: {neilModal},
		data() {
			return {
				// 扩展数据
				iconactive: false,
				showtologin:false,
				tologinobj:{
					username:'',
					password:''
				},
				menulist:[{title:"病区概览",pageurl:'/pages/ward/index'},{title:"病床列表",pageurl:'/pages/bedlist/index'},{title:"手术监控",pageurl:'/pages/surgery/index'},{title:"体征事件",pageurl:'/pages/signs/index'},{title:"输液监控",pageurl:"/pages/infusion/index"},{title:"护理计划",pageurl:"/pages/nursing/index"},{title:"交班管理",pageurl:"/pages/succession/index"}]
			};
		},
		methods:{
			// 展开
			changeicon() {
				this.iconactive = !this.iconactive
			},
			shutdown(){this.iconactive = false},
			// 登录
			tologin(){
				console.log(this.tologinobj.username,this.tologinobj.password)
			},
			// 打开菜单
			opentologin(){
				this.showtologin = true
				this.iconactive = false
			},
			navtopage(pageurl){
				uni.navigateTo({
					url:pageurl
				})
				this.iconactive = false
			}
		}
	}
</script>

<style lang="scss">
	.icon-gengduo,
	.icon-gengduo1 {
		position: fixed;
		bottom: 0rpx;
		left: 0;
		z-index: 99;
		font-size: 100rpx;
	}

	.loginbox {
		position: fixed;
		bottom: 0;
		height: 900rpx;
		width: 1200rpx;
		z-index: 98;
		background-color: #fff;
		.loginbox_item{
			float: left;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			height: 200rpx;
			width: 250rpx;
			margin: 20rpx;
			font-size: 20px;
			border: 1px solid;
       .icon-xiaolian{
		   font-size: 50px;
	   }	
	   .loginbox_item_text{
			   font-size: 20px;
			   font-weight: 700;
		   }
		}
		.loginbox_item_hover{
			background-color: #f2e3e7;
		}
		.loginbox_item_last{
						float: left;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-around;
						height: 200rpx;
						width: 540rpx;
						margin: 20rpx;
						font-size: 20px;
						border: 1px solid;
			.icon-xiaolian{
					   font-size: 50px;
			}
			.loginbox_item_last_text{
						   font-size: 20px;
						   font-weight: 700;
					   }
		}
		// 底部
		.loginbox_bottom{
			position: absolute;
			display: flex;
			align-items: center;
			bottom: 0;
			width: 100%;
			height: 120rpx;
			background-color: #d9ecec;
			.icon-denglu{
				font-size: 100rpx;
				margin-left: 120rpx;
				margin-top: 10rpx;
			}
			.loginbox_bottom_text{
				font-size: 50rpx;
				margin-left: 20rpx;
				cursor: pointer;
			}
			.loginbox_bottom_btn{
				position: absolute;
				right: 50rpx;
				width: 200rpx;
				border-radius: 10rpx;
				color: #fff;
				background-color: #339999;
			}
			}
	}
	.tologin{
		display: flex;
		flex-wrap: wrap;
		text{
			margin-left:30rpx;
			margin-top: 20rpx;
		}
		input{
			padding-left: 5rpx;
			// margin-left: 30rpx;
			margin: 20rpx 30rpx;
			// margin-top: -5rpx;
			border: 1px solid;
		}
	}
</style>
