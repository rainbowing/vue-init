<template>
	<div class="products">
		<h1>welcome products</h1>
		<div>
			<span>product_a: $100 </span>
			<input type="text" placeholder='请输入件数' v-model="quantityA"/>
		</div>
		<br />
		<div>
			<span>product_b: $600 </span>
			<input type="text" placeholder='请输入件数' v-model="quantityB"/>
		</div>
		<br />
		<div>
			<button @click="pay">购买</button>
		</div>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		data (){
			return {
				quantityA:null,
				quantityB:null
			}
		},
		methods:{
			...mapMutations([
				'INCREMENT_GOODS'
			]),
			pay (){
				let goodsObj = {};
				if (this.quantityA){
					goodsObj.proA = {
						'pro_name':'proA',
						'price':100,
						'quantity':parseInt(this.quantityA)
					}
				}
				if (this.quantityB){
					goodsObj.proB = {
						'pro_name':'proB',
						'price':600,
						'quantity':parseInt(this.quantityB)
					}
				}
				this.INCREMENT_GOODS(goodsObj);
			}
		},
		created (){
			
		}
	}
</script>

<style scoped>
	
</style>