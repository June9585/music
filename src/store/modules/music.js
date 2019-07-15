import axios from "axios";

import { Toast } from "vant";

//全局状态
const state = {
  stamusidat: [],
  //筛选5条出来
  fivemusi: [],
  listmusi: []
};
//计算方法
const getters = {
  listmusic() {
    let fivemus = [];
    if (state.stamusidat.length > 0) {
      for (var i = 0; i < 5; i++) {
        var j = Math.ceil(Math.random() * state.stamusidat.length);
        if (state.stamusidat[j] !== undefined) {
          fivemus.push(state.stamusidat[j]);
        }
      }
      return fivemus;
    }
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
  }
};
//简单的业务逻辑  为state赋值处
const mutations = {
  setCities(state, payload) {
    state.stamusidat = payload.list;
  },
  listdatamusic(state, payload) {
    state.fivemusi = payload.list;
    // console.log(state.fivemusi);
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
