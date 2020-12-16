<!--  -->
<template>
  <div>
    <div class="index-list2" v-for="(list, index) in imgSrc" :key="index">
      <div class="list2-img">
        <img :src="list.imgSrc" alt="" />
      </div>
      <div class="list2-list">
        <ul>
          <li v-for="(item, index) in list.imgChild" :key="index">
            <img :src="item.imgchildSrc" alt="" />
            <div class="list2-text">
              <p>{{ item.titlechild }}</p>
              <i
                >￥<span>{{ item.price }}</span
                >.00</i
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      imgSrc: [
        {
          imgSrc:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/2xrOpGBonnFxQRzbgIEDM55NFSh0YHuTlQtap6Df.jpeg?imageView2/2/format/webp",
          imgChild: [
            {
              imgchildSrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/146821/16/5045/125120/5f30a5a6E73b1b57d/e93faa593b84e9dc.jpg?imageView2/2/format/webp",
              titlechild:
                "猫王收音机 猫王小王子otr便携式智能蓝牙音箱收音机复古迷你低音炮可爱无线小音响【私人企业定制礼品】 嬉皮红+【福利3选1】",
              price: "398",
            },
            {
              imgchildSrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/111237/22/12261/71627/5f0e935fE3ebba938/6713341b3b17ffd5.jpg?imageView2/2/format/webp",
              titlechild:
                "beats Beats Studio3 Wireless苹果魔音耳机头戴式录音师3无线蓝牙降噪耳麦 魅影灰（6期分期免息） 通用版",
              price: "1698",
            },
            {
              imgchildSrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg?imageView2/2/format/webp",
              titlechild: "雷瓦 大功率可折叠负离子护发电吹风机RC-7800",
              price: "499",
            },
            {
              imgchildSrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/122820/6/3502/418286/5ed1b480E3d20de49/b2745a32c4e7d658.jpg?imageView2/2/format/webp",
              titlechild:
                "机械师(MACHENIKE)浩空T90 Plus进阶版 17.3英寸巨幕游戏本笔记本电脑 (i7-10750H 8G 512G GTX1650Ti 4G)",
              price: "6999",
            },
            {
              imgchildSrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/124408/27/4053/22496/5ed8d01cE0c7a873d/4cec56a2fcbef123.jpg?imageView2/2/format/webp",
              titlechild:
                "Apple AirPods 2无线蓝牙耳机 苹果手机iPhone/iPad/ Watch【原装正品】  Airpods(配无线充电盒) 【新款】H1芯片",
              price: "1278",
            },
            {
              imgchildSrc:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/146821/16/5045/125120/5f30a5a6E73b1b57d/e93faa593b84e9dc.jpg?imageView2/2/format/webp",
              titlechild:
                "猫王收音机 猫王小王子otr便携式智能蓝牙音箱收音机复古迷你低音炮可爱无线小音响【私人企业定制礼品】 嬉皮红+【福利3选1】",
              price: "398",
            },
          ],
        },
        {
          imgSrc:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/Va48nGpd3dmIcsZDkFa7NHc229AMIQOQd8F6kHCZ.jpeg?imageView2/2/format/webp",
          imgChild: [
            {
              imgchildSrc:
                "https://img.alicdn.com/imgextra/i4/2064892827/O1CN01X42esX1WkoIU0ZKn3_!!2064892827-0-lubanu-s.jpg_800x800.jpg?imageView2/2/format/webp",
              titlechild:
                "【七夕礼物】雅诗兰黛倾慕晶彩唇膏 保湿补水 滋润防水 130枫叶色",
              price: "280",
            },
            {
              imgchildSrc:
                "https://img.alicdn.com/imgextra/i1/2064892827/O1CN01xXHwr31WkoFNkKLKZ_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              titlechild: "雅诗兰黛大牌蜜粉 臻透无痕蜜粉10g 定妆遮瑕",
              price: "500",
            },
            {
              imgchildSrc:
                "https://img.alicdn.com/imgextra/i1/2064892827/O1CN01Kdn6pN1WkoFVdp8Rj_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              titlechild:
                "雅诗兰黛沁水双层气垫BB霜  保湿遮瑕 水润奶油肌裸妆 官方正品",
              price: "590",
            },
            {
              imgchildSrc:
                "https://img.alicdn.com/imgextra/i4/2064892827/TB1UeiuXwvGK1Jjy0FaXXb7lpXa_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              titlechild:
                "雅诗兰黛肌透修护密集精华眼膜套装 4/8片装 提拉紧致 淡化细纹",
              price: "300",
            },
            {
              imgchildSrc:
                "https://img.alicdn.com/imgextra/i2/2064892827/O1CN011Wko8maFOoeOIz8_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              titlechild:
                "雅诗兰黛 花漾倾慕腮红渐变腮红 裸妆自然提亮肤色立体塑型修容",
              price: "450",
            },
            {
              imgchildSrc:
                "https://img.alicdn.com/imgextra/i1/2064892827/O1CN01H34adN1WkoHZs75xp_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              titlechild:
                "雅诗兰黛面膜 小棕瓶双层面膜4片/8片 补水保湿 密集修护",
              price: "680",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="less">
.index-list2 {
  padding: 1rem 1rem 0;
  position: relative;
  .list2-img {
    width: 100%;
    img {
      width: 100%;
      border-radius: 1rem;
    }
  }
  .list2-list {
    overflow: auto;
    margin-top: -20%;
    padding: 0 0 0 0.5rem;
    ul {
      width: 200%;
      display: flex;
      li {
        width: 30%;
        margin-right: 0.5rem;
        border-radius: 1.5rem;
        img {
          width: 100%;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }
        .list2-text {
          padding: 1rem 0.8rem;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          p {
            font-size: 1.3rem;
            color: #000;
            min-height: 3.4rem;
            line-height: 1.7rem;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
          i {
            font-style: normal;
            color: rgb(242, 14, 40);
            font-weight: 600;
            span {
              font-size: 1.5rem;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
