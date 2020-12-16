
const mutations = {
    changeCategroy(state, data) {
        state.lists = data
    },
    changeCategroyList(state, data) {
        state.categroyLists = data
    },
    changeDetail(state, data) {
        state.detailDatas = data
    },
    changeDetailInfo(state, data) {
        state.detailInfoDatas = data
    },

    changePosterData(state, data) {
        state.posterDatas = data
    },

    changePbData(state, data) {
        state.pbDatas = data
    },
    changePbFlag(state, data) {
        state.pbFlag = data
    },
    changePbListsDatas(state, data) {
        if (data.length) {
            state.pbListsDatas = state.pbListsDatas.concat(data);
            state.moreShow = false
        } else {
            state.moreShow = true
        }
    },
    changeCartDatas(state, data) {
        if (data) {
            state.cartDatas.push(data)
        }
        localStorage.carts = JSON.stringify(state.cartDatas)
    },
    changeSelectStatus(state, data) {

        let isSelectAll = state.cartDatas.every((item) => {
            return item.isSelect == true
        })

        state.cartDatas[data.index] = data.cart;
        state.selectAll = isSelectAll
        localStorage.carts = JSON.stringify(state.cartDatas);
        localStorage.selectAll = JSON.stringify(state.selectAll);
    },
    changeSelectAllStatus(state) {
        state.selectAll = !state.selectAll;
        state.cartDatas.forEach(item => {
            item.isSelect = state.selectAll
        })
        localStorage.carts = JSON.stringify(state.cartDatas);
        localStorage.selectAll = JSON.stringify(state.selectAll);
    },
    addCart(state, index) {
        console.log(index);
        state.cartDatas[index].value++;
        localStorage.carts = JSON.stringify(state.cartDatas);
    },
    minusCart(state, index) {
        if (state.cartDatas[index].value > 1) {
            state.cartDatas[index].value--;
        }
        localStorage.carts = JSON.stringify(state.cartDatas);
    },
    delCart(state, index) {
        state.cartDatas.splice(index, 1)
        localStorage.carts = JSON.stringify(state.cartDatas);
    },
    changeGoodsGuess(state, data) {
        if (data.length) {
            state.goodsGuess = state.goodsGuess.concat(data);
            state.goodsShow = false
        } else {
            state.goodsShow = true
        }
    },
    searchKeywords(state, data) {
        if (data) {
            let itemSelect = state.searchKeywords.some((item) => {
                return item == data
            })
            if (!itemSelect) {
                state.searchKeywords.push(data)
            }

        }
        localStorage.Keywords = JSON.stringify(state.searchKeywords);
    },
    shanchuData(state) {
        state.searchKeywords = [];

        localStorage.Keywords = JSON.stringify(state.searchKeywords);

    },

    changeArticleDetailDatas(state, data) {
        state.articleDetailDatas = data
    },

    getUserInfo(state, data) {
        state.userInfo = data
        localStorage.toket = JSON.stringify(state.userInfo)
    }

}

export default mutations