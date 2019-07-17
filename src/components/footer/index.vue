<template>
  <div class="foot">
    <div class="foothaed">
      <router-link tag="img" to="/Music" :src="currentSong.pic" alt />
      <ul>
        <li class="foottitle" v-show="currentSong.title">{{currentSong.title}}</li>
        <li class="foottitle" v-show="!currentSong.title">选择歌曲</li>
        <li v-show="currentSong.title">{{currentSong.author}}</li>
        <li v-show="!currentSong.title">著名歌手</li>
      </ul>
    </div>
    <div class="footright">
      <span @click="startEnd(currentSong) ">
        <van-icon name="play-circle-o" class="footringt_left" v-if="!WhetherTlay" />
        <van-icon name="pause-circle-o" class="footringt_left" v-else />
      </span>
      <van-icon name="arrow" @click="datAmusic" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "foot",
  data() {
    return {};
  },

  computed: {
    ...mapState("music", ["currentSong", "WhetherTlay", "stamusidat"])
  },
  methods: {
    // ...mapGetters("music", ["datAmusic"]),

    startEnd(mis) {
      // console.log(mis.title, "xxxs");
      if (mis.title !== undefined) {
        this.far = !this.far;
        let far = this.far;
        this.$store.commit("music/WhetherToTlay", far);
        this.$emit("showmusicName", mis);
      } else {
        console.log("当前歌曲不存在");
      }
    },

    // 下一曲 随机播放一首歌
    datAmusic() {
      let shufflePlay = [];
      if (this.stamusidat.length > 0) {
        var j = Math.ceil(Math.random() * this.stamusidat.length);
        if (this.stamusidat[j] !== undefined) {
          shufflePlay = this.stamusidat[j];
        }
      }
      this.$emit("showmusicName", shufflePlay);
    }
  }
};
</script>

<style lang="scss" scoped>
.foot {
  border-top: #cecece 1px solid;

  padding: 0 10px;
  box-sizing: border-box;
  justify-content: space-between;
  margin-bottom: 10px;
  display: flex;
  .foothaed {
    text-align: left;
    display: flex;
    img {
      margin-top: 10px;
      height: 60px;
      width: 60px;
      background: rgb(199, 199, 199);
      margin-right: 10px;
    }
    .foottitle {
      margin-top: 13px;
      font-size: 20px;
      color: #555;
    }
    li {
      width:150px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      line-height: 30px;
    }
  }
  .footright {
    margin-top: 10px;
    line-height: 68px;
    font-size: 35px;
    color: #555;
    .footringt_left {
      margin: 0px 20px;
    }
  }
}
</style>
