<template>
	<view class="main">
		<top-left :patientobj="patientobj">
				<view slot="main_content" class="test">
					<view class="content_text">暂无数据</view>
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
	position: relative;
	height: 100%;
	width: 100%;
	background-color: #fff;
	.content_text{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		font-size: 150rpx;
		color: #ebebeb;
	}
}
</style>
