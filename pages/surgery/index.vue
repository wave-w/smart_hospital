<template>
	<view class="main">
		<!-- 头部状态 -->
		<nav-top/>
		<!-- 主要内容 -->
		<view class="surgery_box" @click="shutdown">
			<!-- 手术排期文字 -->
			<view class="surgery_top">
				<view class="top_text">手术排期查询</view>
			</view>
			<!-- 筛选+表格区域 -->
			<view class="surgery_main">
				<view class="main_left"  @click="changeitem">
					<view v-for="(item,index) in left_items" :key="index"
					 :class="{left_items:true,hover_items: item === items_checked}"  
					:data-smenu="item">{{item}}</view>
				</view>
				<view class="right_table">
					<uni-table  class="unitable" emptyText="暂无更多数据" >
					    <!-- 表头行 -->
					    <uni-tr class="theader">
					        <uni-th align="center" sortable style="min-width: 200rpx;">床号</uni-th>
					        <uni-th align="center" style="min-width: 300rpx;">姓名</uni-th>
					        <uni-th align="center" style="min-width: 200rpx;">性别</uni-th>
							<uni-th align="center" sortable style="min-width: 200rpx;">年龄</uni-th>
							<uni-th align="center" style="min-width: 600rpx;">手术名称</uni-th>
							<uni-th align="center" sortable style="min-width: 250rpx;">手术间</uni-th>
							<uni-th align="center" sortable style="min-width: 200rpx;">台号</uni-th>
							<uni-th align="center" style="min-width: 300rpx;">手术医生</uni-th>
							<uni-th align="center" style="min-width: 300rpx;">第一助手</uni-th>
							<uni-th align="center" sortable style="min-width: 400rpx;">手术时间</uni-th>
					    </uni-tr>
					    <!-- 表格数据行 -->
					 <view class="tbody">
						<uni-tr class="tbody_item" v-for="(item,index) in patient" :key='index'>
						    <uni-td align='center' style="min-width: 200rpx;">{{item.bednum}}</uni-td>
						    <uni-td align='center' style="min-width: 300rpx;">{{item.name}}</uni-td>
						    <uni-td align='center' style="min-width: 200rpx;">{{item.sex}}</uni-td>
							<uni-td align='center' style="min-width: 200rpx;">{{item.age}}</uni-td>
							<uni-td align='center' style="min-width: 600rpx;">{{item.surgery_name}}</uni-td>
							<uni-td align='center' style="min-width: 250rpx;">{{item.surgery_room}}</uni-td>
							<uni-td align='center' style="min-width: 200rpx;">{{item.tainum}}</uni-td>
							<uni-td align='center' style="min-width: 300rpx;">{{item.doctor_name}}</uni-td>
							<uni-td align='center' style="min-width: 300rpx;">{{item.first_assistant}}</uni-td>
							<uni-td align='center' style="min-width: 400rpx;">{{item.surgery_time}}</uni-td>
						</uni-tr> 
					 </view>
					</uni-table>
				</view>
			</view>
		</view>
		<!-- 菜单 -->
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
				left_items:["全部","03-03","03-04","03-05","03-06","03-07","03-08","今天",
				"03-10","03-11","03-12",],
				items_checked:'今天',
				patient:[]
			}
		},
		created() {
			let obj = {bednum:'06',name:"王丽媛",sex:'女',age:28,surgery_name:"心脏搭桥手术",surgery_room:"16",
				tainum:"6",doctor_name:"李元来",first_assistant:"郭晓看",surgery_time:"03-11 10:00"}
			for(let i = 0;i<16;i++){
				this.patient.push(obj)
			}
		},
		methods: {
			shutdown(){
				this.$refs.Menu.shutdown()
			},
			changeitem(e){
				// console.log(e.target.dataset.smenu)
				let item = e.target.dataset.smenu
				if(item) {this.items_checked = item} 
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
	background-color: #f3f3f3;
	overflow: hidden;	
}
.surgery_box{
	height: calc(100% - 100rpx);
	.surgery_top{
		height: 10%;
		position: relative;
		.top_text{
			position: absolute;
			top: 30rpx;
			left: 30rpx;
			width: 500rpx;
			height: 150rpx;
			font-size: 60rpx;
			line-height: 150rpx;
			text-align: center;
			border-radius: 50rpx;
			color: #fff;
			background-color: #00742d;
		}
	}
	.surgery_main{
		display: flex;
		height: 90%;	
		// background-color: red;
		.main_left{
			display: flex;
			flex-direction: column;
			margin-top: 3%;
			height: 97%;
			width: 15%;
			overflow: auto;
			.left_items{
				height: 10%;
				font-size: 60rpx;
				line-height: 180rpx;
				text-align: center;
				border-radius: 20rpx;
				background-color: #fff;
			}
			.hover_items{
				background-color: #00742d;
			}
		}
		.right_table{
			margin-left: 1%;
			width: 84%;
			height: 100%;
			.unitable{
				height: 100%;
				overflow: hidden;
				.theader{
					display: flex;
					justify-content: space-between;
					background-color: #f3f3f3;
					.uni-table-th{
					height: 120rpx;
					font-size: 60rpx;
					font-weight: 900;
					color: #000;
				} 
				}
				.tbody{
					display: flex;
					flex-direction: column;
					height: 1700rpx;
					width: 100%;
					overflow: auto;
					.tbody_item{
						display: flex;
						justify-content: space-between;
						width: 100%;
						.uni-table-td{
							font-size: 60rpx;
							line-height: 200rpx;
						}
					}
				}
			}
		}
	}
}
</style>
