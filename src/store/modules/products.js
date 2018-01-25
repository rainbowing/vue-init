import * as types from '../mutation-types'

export default {
	state:{
		goods:{}
	},
	getters:{

	},
	mutations:{
		[types.INCREMENT_GOODS] (state,data){
			Object.keys(data).forEach((key)=>{
				if ( state.goods[key] ){
					state.goods[key].quantity += data[key].quantity
				}else{
					state.goods[key] = data[key]
				}
			})
		},
		[types.DECREMENT_GOODS] (state,data){
			console.log('DECREMENT_GOODS');
		}
	},
	actions:{
		
	}
}

