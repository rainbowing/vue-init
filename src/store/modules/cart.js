import * as types from '../mutation-types'

export default {
	state:{
		money:0		//数据仓库
	},
	mutations:{			//改变数据的唯一方式就是提交一个mutations，使用commit提交或者mapMutations
		[types.INCREMENT_MONEY] (state){
			state.money += 100
		},
		[types.DECREMENT_MONEY] (state){
			if (state.money >= 100){
				state.money -= 100
			}
		}
	},
	actions:{		//这个和mutations类似，mutations是同步的，这个可以是异步的，Action 提交的是 mutation，而不是直接变更状态，Action 通过 store.dispatch 方法触发：
		incrementAsy ({commit}){	//es6解构
  			setTimeout( () => {
        		commit( types.INCREMENT_MONEY );
     		}, 2000)
  		}
	},
	getters:{		//就是state的计算属性，说白了，可以直接拿state的数据，但是那是原始数据，而通过getters拿的是在原来的基础上，多过滤了一次
		totalPrice (state, getters, rootState){
			let totalPrice = 0;
			let data = rootState.products.goods;
			Object.keys(data).forEach((key)=>{
				totalPrice += data[key].quantity * data[key].price
			})
			return totalPrice
		}
	}
}