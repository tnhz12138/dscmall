import { getHomeList, getCategoryData, getDetail } from "../api/api"
const actions = {
    async actchangeCategroy(context) {
        let result = await getHomeList("/catalog/list");
        context.commit("changeCategroy", result.data)
    },


    async actChangeCategroyList(context, obj) {
        let result = await getCategoryData(obj.url, obj.params, obj.type)
        context.commit("changeCategroyList", result.data)
    },

    async actChangeDetail(context, obj) {
        let result = await getDetail(obj.url, obj.params, obj.type)
        let posterDatas = {
            img: result.data.goods_thumb,
            title: result.data.goods_name,
            price: result.data.shop_price,
            dprice: result.data.market_price,
        }
        context.commit("changeDetail", result.data)
        context.commit("changeDetailInfo", result.data.basic_info)
        context.commit("changePosterData", posterDatas)
    },
    async actChangePbListsDatas(context, obj) {
        context.commit("changePbFlag", true)
        let result = await getCategoryData(obj.url, obj.params, obj.type);
        context.commit("changePbListsDatas", result.data)
        if (result) {
            context.commit("changePbFlag", false)
        }
    },
    async actChangePbdata(context, obj) {
        context.commit("changePbFlag", true)
        let resultPbdata = await getHomeList(obj.url, obj.params);

        context.commit("changePbData", resultPbdata.data)
        if (resultPbdata) {
            context.commit("changePbFlag", false)
        }
    },

    async actChangeGoodsGuess(context, obj) {
        let resultGoods = await getDetail(obj.url, obj.params, obj.type)
        context.commit("changeGoodsGuess", resultGoods.data)
        console.log(resultGoods);
    },
    async actChangeArticleDetailDatas(context, obj) {
        let result = await getDetail(obj.url, obj.params, obj.type)
        context.commit("changeArticleDetailDatas", result.data)
    }

}


export default actions