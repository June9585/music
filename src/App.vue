<template>
  <div id="app">
    <router-view @musicName="fn2" />
    <audio controls ref="audio" class="musicsPlay" :src="currentSong.url" loop="loop"></audio>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.actMusicall();
  },
  computed: {
    ...mapMutations("music", ["thiscurrentSong"]),

    ...mapState("music", ["currentSong", "WhetherTlay"])
  },
  methods: {
    ...mapActions("music", ["actMusicall"]),
    //子级传过来的数值
    fn2(data) {
      // console.log(data, "传送过来的数据");
      // console.log(this.WhetherTlay, "1s");
      // console.log(this.currentSong.url, "仓库的歌曲");
      // console.log(data.url, "传送过来歌曲");

      if (data) {
        if (data.url === this.currentSong.url) {
          console.log("同");
          if (this.WhetherTlay == false) {
            this.startPlay();
            // console.log("播放");
          } else {
            this.pausePlay();
            // console.log("暂停播放");
          }
        } else {
          // 上传仓库的歌曲
          // console.log("不同上传歌曲");
          this.$store.commit("music/thiscurrentSong", data);
          // console.log(this.WhetherTlay, "不同状态的播放");
          // this.$refs.audio.play();
          setTimeout(() => {
            this.startPlay();
          }, 1000);
        }
      } else {
        console.log("当前歌曲不存在");
      }
    },
    // 开始播放
    startPlay() {
      this.$refs.audio.play();
      this.far = true;
      let far = this.far;
      this.$store.commit("music/WhetherToTlay", far);
    },
    // 暂停
    pausePlay() {
      this.$refs.audio.pause();
      this.far = false;
      let far = this.far;
      this.$store.commit("music/WhetherToTlay", far);
    },
    // 当音频暂停
    onPause() {
      this.audio.playing = false;
    },
    // 当发生错误, 就出现loading状态
    onError() {
      this.audio.waiting = true;
    }
  }
};
</script>

<style lang="scss">
.musicsPlay {
  height: 20px;
  opacity: 0;
  position: fixed;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
