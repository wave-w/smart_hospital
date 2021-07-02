<template>
	<view class="ftop">
		<view class="left">
			<image src="~@/static/images/Schoolbadge.png"></image>
			<text>赣南医学院第一附属医院</text>
			<text>黄金院区骨科四区</text>
			<text>A班</text>
			<text>班次名称</text>
		</view>
		<view class="right">
			<!-- <text>冬至</text> -->
			<text>{{date}}</text>
			<text>{{today}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"NavTop",
		data() {
			return {
				// 头部数据
				date: '',
				week: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
				today: '',
			};
		},
		created() {
			setInterval(() => {
				this.date = this.gettime()
			}, 1000)
		},
		methods:{
			// 获取时间
			gettime() {
				let date = new Date()
				let year = date.getFullYear()
				let month = (date.getMonth() + 1).toString().padStart(2, '0')
				let day = date.getDate().toString().padStart(2, '0')
				let hour = date.getHours().toString().padStart(2, '0')
				let minute = date.getMinutes().toString().padStart(2, '0')
				let second = date.getSeconds().toString().padStart(2, '0')
				let week = date.getDay()
				this.today = this.week[week]
				return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
			},
		}
	}
</script>

<style lang="scss">
// 顶部
	.ftop {
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		justify-content: space-between;
		background-color: #fff;
		.left {
			display: flex;

			image {
				height: 60rpx;
				width: 60rpx;
				margin: 20rpx;
			}

			text {
				margin: 0 20rpx;
				height: 100rpx;
			}
		}

		.right {
			margin-right: 200rpx;

			text {
				margin: 0 20rpx;
			}
		}
	}
</style>
