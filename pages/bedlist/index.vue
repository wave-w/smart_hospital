<template>
	<view class="main">
		<!-- 顶部 -->
		<nav-top></nav-top>
		<!-- 病床主内容去 -->
		<view class="subject" @click="shutdown">
			<!-- 左侧筛选 -->
			<text class="iconfont icon-zhankai" @click="screen"></text>
			<view class="nav_left" v-if="flag">
				<view class="nav_left_top">
					<text>筛选</text>
				</view>
				<view class="scroll"  @click="changeactive">
					<view v-for="(item,i) of scrollarr" :key='i'  :data-bitem="item" :class="{active:(item===acttext)}">
					{{item}}</view>
				</view>
			</view>
			<!-- 主要内容 -->
			<view class="mainpatient">
				<view class="patient_item" v-for="(item,i) of patientarr" :key='i'>
				<view class="item_main" @click="todetail(item)">
					<view class="top_left">{{i+1}}</view>
					<view class="patient_name">
						<text style="font-size: 50rpx; font-weight: 700;">{{item.name}}</text>
						<text>2021-12-21</text>
					</view>
					<view class="patient_mes">
						<text>832435</text>
						<text :class="item.sex=='woman'?'iconfont icon-nv':'iconfont icon-nan'">{{item.age}}</text>
						<text>一般人员</text>
					</view>
					<view class="doctor_mes">
						<text>[医]魏小军</text>
						<text>[护]魏大军</text>
					</view>
				</view>
					<view class="illness_mes" :id="i" @click="ill_active(item.illnessmes)">{{item.illnessmes}}</view>
				</view>
			</view>
		</view>
		<!-- 病情扩展展示 -->
		 <neil-modal :show="ill_mes_flag"  title="病情详情" :show-cancel='false' :content="bigillnessmes"
		  @confirm='ill_mes_flag = false'>
		</neil-modal>
		<!-- 菜单扩展 -->
		<expanded-view  ref="Menu"></expanded-view>
	</view>
</template>

<script>
	import neilModal from '@/components/neil-modal/neil-modal';
	import NavTop from '@/components/NavTop/NavTop';
	import ExpandedView from '@/components/ExpandedView/ExpandedView';
	export default {
	    components: {neilModal,NavTop,ExpandedView},
		onLoad() {
			this.patientarr = [...this.arr1,...this.arr1,...this.arr1,...this.arr1,...this.arr1]
		},
		data() {
			return {
				//筛选文本
				scrollarr:["总65","病人40","特、一级2","今日入院4","今日出院5","今日手术5","预手术5","昨日手术4","压疮0",							"跌倒/坠床0","自理能力0"],
				// 病床主数据
				arr1:[{name:"张三",age:99,sex:'man',illnessmes: "1、腰间盘突出,2、骨质疏松症,3、股骨头坏死,4、肋骨骨折,							5、脊椎变形",doctor:"吴家乐",nurse:"李晓梅"},
				{name:'赵四',age:88,sex:'woman',illnessmes: "1、腰间盘突出,2、骨质疏松症,3、股骨头坏死,4、肋骨骨折,								5、脊椎变形",doctor:"赵乐",nurse:"赵梅"},
				{name:"王五",age:66,sex:'man',illnessmes: "1、腰间盘突出,2、骨质疏松症,3、股骨头坏死,4、肋骨骨折,								5、脊椎变形",doctor:"王乐",nurse:"王梅"},
				{name:"李六",age:55,sex:'woman',illnessmes: "1、腰间盘突出,2、骨质疏松症,3、股骨头坏死,4、肋骨骨折,								5、脊椎变形",doctor:"李乐",nurse:"李梅"},
				{name:"孙七",age:44,sex:'man',illnessmes: "1、腰间盘突出,2、骨质疏松症,3、股骨头坏死,4、肋骨骨折,								5、脊椎变形",doctor:"孙乐",nurse:"孙梅"},
				{name:"王南",age:33,sex:'woman',illnessmes: "1、腰间盘突出,2、骨质疏松症,3、股骨头坏死,4、肋骨骨折,								5、脊椎变形",doctor:"吴乐",nurse:"吴梅"},
				{name:"吴九",age:11,sex:'man',illnessmes: "1、腰间盘突出,2、骨质疏松症,3、股骨头坏死,4、肋骨骨折,								5、脊椎变形",doctor:"袁乐",nurse:"袁梅"},
				{name:"刘十",age:10,sex:'woman',illnessmes: "1、腰间盘突出,2、骨质疏松症,3、股骨头坏死,4、肋骨骨折,								5、脊椎变形",doctor:"刘乐",nurse:"刘梅"}],//病人名字
				patientarr:[],
				acttext: "今日入院4",
				flag: false,
				ill_mes_flag: false,
				bigillnessmes: ""
			}
		},
		methods: {
			shutdown(){
				this.$refs.Menu.shutdown()
			},
			// 病床
			changeactive(e) {
				// console.log(e.target.dataset.index)
				if(e.target.dataset.bitem) { this.acttext = e.target.dataset.bitem}
			},
			screen() {
				this.flag = !this.flag
			},
			ill_active(illmessage) {
				this.ill_mes_flag = true
				this.bigillnessmes = illmessage
			},
			todetail(item){
				let itemstr = JSON.stringify(item)
				uni.setStorageSync("patientobj",itemstr)
				uni.setStorageSync("pageurl","基本信息")
				uni.navigateTo({
					url:"/pages/bedlist/medicalrecords/information"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
	}

	.main {
		height: 100%;
		background-color: #f3f3f3;
	}

// 展开符号
	.icon-zhankai {
		position: fixed;
		top: 156rpx;
		left: 10rpx;
		z-index: 99;
		font-size: 50rpx;
	}
// 病床
	.subject {
		display: flex;
		// height: 2040rpx;
		// overflow: hidden;
		margin-top: 20rpx;
		.nav_left {
			display: flex;
			flex-direction: column;
			height: 100%;
			width:600rpx;
			background-color: #fff;
			.nav_left_top {
				height: 125rpx;
				line-height: 125rpx;
				text {
					margin: 40rpx;
					margin-left: 100rpx;
					font-size: 50rpx;
				}
			}
			.scroll {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				height: 1910rpx;
				overflow-y: hidden;
				view {
					flex: 1;
					width: 450rpx;
					border-radius: 15rpx;
					line-height: 150rpx;
					margin: 12rpx 0;
					text-align: center;
					// padding-left: 40rpx;
					background-color: #f3f3f3;
				}
				.active {
					background-color: #339999;
				}
			}
		}
	}

	.mainpatient {
		display: flex;
		height: 2040rpx;
		width: 100%;
		flex-wrap: wrap;
		overflow-y: auto;
		margin:0 10rpx;
		margin-left: 10rpx;
		// margin-bottom: 401rpx;
		// background-color: red;
		.patient_item {
			flex: 1;
			height: 460rpx;
			max-width: 600rpx;
			// max-width: 300px;
			// margin-right: 20rpx;
			margin-top: 2rpx;
			margin-bottom: 60rpx;
			margin-left: 30rpx;
			border-radius: 20rpx;
			background-color: #f2e3e7;
			// background-color: red;
			.top_left {
				float: left;
				height: 100rpx;
				width: 100rpx;
				line-height: 100rpx;
				text-align: center;
				border-radius: 15rpx;
				color:#fff;
				background-color: #00742d;
			}

			.patient_name {
				display: flex;
				flex-direction: column;
				float: left;
				margin-left: 20rpx;
				width: 250rpx;
				// background-color: red;
				text {
					font-size: 40rpx;
					margin: 6rpx;
				}
			}

			.patient_mes {
				display: flex;
				float: left;
				width: 520rpx;
				margin-top: 30rpx;
				margin-left: 20rpx;
				justify-content: space-between;

				// background-color: red;
				text {
					font-size: 40rpx;
				}

				text::before {
					margin-right: 10rpx;
				}
			}

			.doctor_mes {
				display: flex;
				float: left;
				width: 500rpx;
				margin-top: 20rpx;
				margin-left: 20rpx;
				font-size: 40rpx;
				justify-content: space-between;
			}
		}
		.item_main{
			width: 100%;
			height: calc(100% - 200rpx);
		}
		.illness_mes {
			float: left;
			height: 100rpx;
			width: 100%;
			margin-top: 80rpx;
			line-height: 100rpx;
			border-radius: 20rpx;
			font-size: 40rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			background-color: #fff;
		}
	}

	.illness_active {
		position: fixed;
		top: 1000rpx;
		left: 1500rpx;
		height: 400rpx;
		width: 1000rpx;
		line-height: 100rpx;
		font-size: 40rpx;
		z-index: 99;
		border-radius: 20px;
		background-color: #fff;

		button {
			background-color: #0000ff;
			margin-top: 106rpx;
		}
	}
</style>