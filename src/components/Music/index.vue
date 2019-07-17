<template>
  <div class="MusicPages">
    <div>
      <div>
        <ul class="musicTitle">
          <router-link tag="li" to="/" class="musicLi">
            <van-icon name="cross" />
          </router-link>
          <li>
            <h2>{{currentSong.title}}</h2>
            <h6>{{currentSong.author}}</h6>
          </li>
        </ul>
      </div>
      <div class="musicImgTitle">
        <div class="musicImg rotate" v-show="far">
          <img :src="currentSong.pic" alt class />
          <aside></aside>
        </div>
        <textarea class="musictext" name="textfield" cols="70" rows="10" @click="ShowHidden">
               洋葱
        演唱：平安
        
        如果你眼神能够为我片刻的降临
        如果你能听到心碎的声音
        盘底的洋葱像我永远是配角戏
        偷偷的看着你偷偷的隐藏着自己
        
        如果你愿意一层一层
        一层的剥开我的心
        你会发现你会讶异
        你是我最压抑最深处的秘密
        如果你愿意一层一层
        一层的剥开我的心
        你会鼻酸你会流泪
        只要你能听到我看到我的全心全意
        
        如果你愿意一层一层
        一层的剥开我的心
        你会发现你会讶异
        你是我最压抑最深处的秘密
        如果你愿意一层一层
        一层的剥开我的心
        你会鼻酸你会流泪
        只要你能听到我看到我的全心全意
        
        你会鼻酸你会流泪
        只要你能听到我看到我的全心全意
         sc.chinaz.com
                </textarea>
      </div>
    </div>
    <div class="musicfoot">
      <ul class="arrowLi">
        <li>
          <van-icon name="arrow-left" />
        </li>
        <li class="play-circle-o">
          <van-icon name="play-circle-o" />
        </li>
        <li>
          <van-icon name="arrow" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MusicPages",
  props: {
    id: ""
  },
  data() {
    return {
      far: true
    };
  },
  created() {},

  computed: {
    ...mapState("music", ["currentSong"])
  },
  methods: {
    ShowHidden() {
      this.far = !this.far;
    }
  }
};
</script>
<style lang="scss" scoped>
//动画效果
.rotate {
  animation: rotating 30s linear infinite;
}

@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes rotating {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-moz-keyframes rotating {
  from {
    -moz-transform: rotate(0);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
//动画效果结束

.MusicPages {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.musicImgTitle {
  width: 100%;
}
.musicTitle {
  height: 100px;
  width: 100%;
  position: relative;
  margin-top: 64px;
  .musicLi {
    left: 20px;
    font-size: 30px;
    top: 20px;
    color: #a5a5a5;
    position: fixed;
  }
  h2 {
    padding: 0px 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.musicImg {
  // position: absolute;
  margin: auto;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  // background: #222;
  overflow: hidden;
  padding: 10px;
  border: #e7e7e7e7 dashed 1px;
  box-shadow: rgb(75, 75, 75) 0px 0px 20px 0px; //边框阴影
  img {
    border-radius: 50%;
    width: 100%;
  }
}

.arrowLi {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  .play-circle-o {
    font-size: 50px;
    padding: 0px 30px;
  }
  li {
    font-size: 30px;
    color: #555;
  }
}
.musicfoot {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 3.5rem;
  border-top: #e9e9e9 solid 1px;
  padding-top: 10px;
  background: #fff;
}
.musictext {
  border: none;
}
</style>


