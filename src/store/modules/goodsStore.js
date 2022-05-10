const goodsStore = {
    namespaced: true,
    state:() => {
        return {
            goods:'legion',
            price:7984512
        }
    },
    mutations:{
        changeGoodsPrice:(state,params) => {
            state.price = params
        }
    },
    actions:{

    }
}

export default goodsStore