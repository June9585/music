<template>
  <div class="about">
    <van-nav-bar title="当前歌曲" left-text="酷我音乐">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-swipe :loop="false" class="van_swipe">
      <van-swipe-item v-for="(item , index) in listmusic" :key="index">    
        <img :src="item.pic" alt />
      </van-swipe-item>
    </van-swipe>   
    <songlist :list="listmusicnoedata" />
    <Listbox  :list="listmusicnoedata"/>
    <!-- <Anli /> -->
  </div>
</template>

<script>
import songlist from "@/views/components/songList/index.vue";
import Listbox from "@/views/components/songList/listbox.vue";
// import Anli from "@/views/components/songList/anli.vue";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "about",
  components: {
    songlist,
    Listbox
  },
  data() {
    return {
      musidat: []
    };
  },

  computed: {
    ...mapGetters("music", ["listmusic", "listmusicnoedata"]),
    },

  methods: {
    ...mapState("music", ["stamusidat", "listmusi"]),
  }
};
</script>

<style lang="scss" scoped>
.van_swipe {
  height: 200px;
  img {
    width: 100%;
  }
}
.van-nav-bar {
  height: 66px;
  line-height: 66px;
}
</style>

