<template>
	<div class="cart">
		<h1>welcome cart</h1>
		<div>
			<span>你有$</span>
			{{money}}
			<button @click="INCREMENT_MONEY">+</button>
			<button @click="DECREMENT_MONEY">-</button>
		</div>
		<div>
			<p v-show="goods.length == 0">您还没有购买任何商品哦！</p>
			<div v-for="item in goods">
				<ul>
					<li>商品名称:{{item.pro_name}}</li>
					<li>价格:{{item.price}}</li>
					<li>数量:{{item.quantity}}</li>
				</ul>
			</div>
			<div>总价:{{totalPrice}}</div>
		</div>
	</div>
</template>

<script>
	import { mapState,mapMutations,mapGetters } from 'vuex'
	
	export default {
		methods:{
			...mapMutations([
				'INCREMENT_MONEY',
				'DECREMENT_MONEY'
			])
		},
		computed:{
			...mapState({
				money: state => state.cart.money,
				goods: state => state.products.goods
			}),
			totalPrice (){
				let totalPrice = 0;
				let data = this.goods
				Object.keys(data).forEach((key)=>{
					totalPrice += data[key].quantity * data[key].price
				})
				return totalPrice
			}
		},
		created (){
			
		}
	}
</script>

<style scoped>
	
</style>