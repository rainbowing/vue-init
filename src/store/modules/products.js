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
//					state.goods[key] = data[key]		这种设置不会马上出发state的改变,也不会触发getters函数
					state.goods = {...state.goods,[key]:data[key]}		//这种才是响应式设置
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

