
<template>
  <div class="songlist">
    <div class="m-title padding-box">
      <div class="name ellipsis">最新歌曲</div>
      <div class="more">
        <div class="ft-smallest">更多&nbsp;</div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAbCAMAAAAprnOAAAAAb1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt6r1GAAAAJHRSTlMA8A8GyUnSwvr12mYt6eI6t5iSjIl/cWBPRCSwpIR3XVaqahddXZrgAAABLElEQVRIx+3VyZKDIBCA4UZAENz3PSbp93/GOUhlZiwzCuVhDvlOnv6yoaiGjbAp7yyOAkmUGDIdwmW8ZiC4EYiCU3DEf3ymEveRcfHAgZZgNAr/ItOb7QS0QDT/7eMhkltdQs9wrT/veI44PQB9EFzrC0HjsgE6cxZAc7TjP46uuBVoAENrcqjfT9DPCl8A3USjTp6w4fHJHMl33R1hY1nVemnbm56zVOEW4IU+9X9bj9Oibji/1VPGgkvrfsF/PUQa6iy6pq6qHvYkeYxupledtfBekjmcUdSBqfvd0VacbQcYnrDWSU3h2CIs2nELsNZZf3bfVApPIZMHpl7YbMwkj47bpQeG1GApqYQ8u104OKBdKXZnYFUI1/CSprynzI9JEAREiXHutjvxCyHd06KBxO6eAAAAAElFTkSuQmCC"
          class="wave"
        />
      </div>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh()">
      <ul>
        <li
          class="panel-songslist-item"
          v-for="(item,index) in this.listdatamuss.length> 0 ? this.listdatamuss: list"
          :key="index"
          @click="songName(item.__ob__.dep.id)"
        >
          <div class="panel-songs-item-name">
            <span class="panel_title">{{item.title}} &nbsp; -- &nbsp;</span>
            <span>{{item.author}}</span>
          </div>
          <div class="panel-songs-item-download" @click="songName(item.url)">
            <span class="spang">
              <van-icon name="play-circle-o"></van-icon>
            </span>
          </div>
        </li>
      </ul>
      <audio controls ref="audio" src=" " loop="loop" @play="onPlay"></audio>
    </van-pull-refresh>
  </div>
</template>
<script>
import axios from "axios";

export default {
  nsme: "songlist",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoading: false,
      fivemuss: [],
      listdatamuss: [],
      url: "",
      src: ""
    };
  },
  created() {
    this.actMusicall();
    this.onRefresh();
  },
  mounted() {},
  watch: {},
  methods: {
    //单个歌曲的id
    songName(url) {
      this.onPlay(url);
    },

    onPlay(url) {
      console.log(url);
      this.$refs.audio.src = url;
      this.$refs.audio.play();
    },

    // 开始播放
    startPlay() {
      this.$refs.audio.play();
    },
    // 暂停
    pausePlay() {
      this.$refs.audio.pause();
    },
    // 当音频暂停
    onPause() {
      this.audio.playing = false;
    },
    // 当发生错误, 就出现loading状态
    onError() {
      this.audio.waiting = true;
    },

    //随机获取
    onRefresh() {
      console.log(this.list);
      setTimeout(() => {
        let fivemus = [];
        for (var i = 0; i < 7; i++) {
          var j = Math.ceil(Math.random() * this.fivemuss.length);
          if (this.fivemuss[j] !== undefined) {
            fivemus.push(this.fivemuss[j]);
          }
        }
        this.listdatamuss = fivemus;
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },

    // 请求数据
    actMusicall() {
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
          if (response.status == 200) {
            let listdata = response.data.Body;
            this.fivemuss = listdata;
          }
        });
    }
  }
};
</script>




<style lang="scss" scoped>
.musicsPlay {
  height: 20px;
  // opacity: 0;
}
.spang {
  color: #c4c4c4;
  font-size: 25px;
}
.m-title {
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  line-height: 60px;
  border-bottom: 1px solid #e5e5e5;
}
.padding-box {
  overflow: auto;
  white-space: nowrap;
}
.name {
  font-weight: 700;
  font-size: 15px;
}
.more {
  display: flex;
  box-align: center;
  align-items: center;
  align-items: center;
  font-weight: 400;
  float: right;
  .ft-smallest {
    margin-left: 6px;
    font-size: 12px;
  }
  img {
    width: auto;
    height: 4px;
  }
}
li {
  list-style: none;
}
.panel-songslist-item {
  width: 100%;
  height: 4.0714rem;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  display: table;
  display: flex;
}
.panel-songs-item-name {
  display: flex;
  padding-left: 0.3571rem;
  cursor: pointer;
  font-size: 1rem;
  line-height: 65px;
  .panel_title {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 180px;
  }
  span {
    cursor: pointer;
    font-size: 1rem;
  }
}
.panel-songs-item-download {
  position: absolute;
  top: 0;
  right: 0;
  width: 2.5rem;
  line-height: 65px;
  padding-right: 20px;
  cursor: pointer;
  text-align: center;
}
</style>
