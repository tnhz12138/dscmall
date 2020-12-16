const state = {
    lists: [],
    imgHeader: "https://x.dscmall.cn/storage/data/touch_catads/15630384831872.jpg",
    categroyLists: [],
    detailDatas: {},
    detailInfoDatas: {},
    posterDatas: {},
    pbDatas: {},
    pbFlag: true,
    pbListsDatas: [],
    moreShow: false,
    cartDatas: localStorage['carts'] ? JSON.parse(localStorage['carts']) : [],
    selectAll: localStorage['selectAll'] ? JSON.parse(localStorage['selectAll']) : true,
    searchKeywords: localStorage['Keywords'] ? JSON.parse(localStorage['Keywords']) : [],
    goodsGuess: [],
    goodsShow: false,
    articleDetailDatas: {},
    userInfo: localStorage['userInfo'] ? JSON.stringify(localStorage['userInfo']) : ''
}

export default state