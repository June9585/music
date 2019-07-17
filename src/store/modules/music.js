import axios from "axios";
import router from "@/router";
import { Toast } from "vant";

//全局状态
const state = {
  //全部数据
  stamusidat: [],
  //筛选5条出来
  fivemusi: [],
  //轮播图的
  listmusi: [],
  //关键字
  searchVal: "",
  //搜索id获取嘻嘻
  muicId: "",
  // 当前播放的歌曲
  currentSong: {},
  //播放的状态
  WhetherTlay: false,
  //随机播放一首歌
  shufflePlay: []
};
//计算方法
const getters = {
  //轮播图的方法
  listmusic() {
    let fivemus = [];
    if (state.stamusidat.length > 0) {
      for (var i = 0; i < 5; i++) {
        var j = Math.ceil(Math.random() * state.stamusidat.length);
        if (state.stamusidat[j] !== undefined) {
          fivemus.push(state.stamusidat[j]);
        }
      }
      // console.log(fivemus);
      return fivemus;
    }
  },
 
  //搜索歌曲
  ScreeningOfSongs(state) {
    // title: "MY ALL", author
    let tmp = [];
    if (state.searchVal) {
      tmp = state.stamusidat.filter(item => {
        return (
          //搜索的是歌名
          item.title.indexOf(state.searchVal) > -1 ||
          //搜索的是歌手
          item.author.indexOf(state.searchVal) > -1
        );
      });
    }
    return tmp;
  },

  listmusicnoedata() {
    let fivemus = [];
    if (state.stamusidat.length > 0) {
      for (var i = 0; i < 7; i++) {
        var j = Math.ceil(Math.random() * state.stamusidat.length);
        if (state.stamusidat[j] !== undefined) {
          fivemus.push(state.stamusidat[j]);
        }
      }
      return fivemus;
    }
  },

  //搜索id歌曲返回
  SearchForSongId(id) {
    // title: "MY ALL", author
    let tmp = "";
    if (state.muicId) {
      tmp = state.stamusidat.filter(item => {
        return (
          //搜索的是歌名
          item.__ob__.dep.id.indexOf(state.muicId) > -1
        );
      });
    }
    return tmp;
    //
  }
};
//简单的业务逻辑  为state赋值处
const mutations = {
  //播放当前的歌曲
  thiscurrentSong(state, payload) {
    // console.log(payload, "传到仓库的歌曲");
    state.currentSong = payload;
  },

  //当前播放的状态
  WhetherToTlay(state, payload) {
    state.WhetherTlay = payload;
  },

  setCities(state, payload) {
    state.stamusidat = payload.list;
  },
  listdatamusic(state, payload) {
    state.fivemusi = payload.list;
  }
};
//复杂的业务逻辑 axios等等
const actions = {
  actMusicall({ commit, state }) {
    axios
      .post(
        "https://api.hibai.cn/api/index/index",
        {
          TransCode: "020112",
          OpenId: "123456789",
          "Body[SongListId]": "141998290"
        },
        {
          transformRequest(data) {
            let res = [];
            for (let key in data) {
              res.push(`${key}=${data[key]}`);
            }
            let str = res.join("&");
            return str;
          }
        }
      )
      .then(response => {
        let list = response.data.Body;
        // 1. 将城市数据给到 仓库
        commit({ type: "setCities", list: list });

        commit({ type: "listdatamusic", list: list });
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
