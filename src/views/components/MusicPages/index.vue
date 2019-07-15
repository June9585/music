<template>
  <div>
    <audio src="https://api.hibai.cn/music/Music/Music?id=38592976&type=url" controls="controls" class="musicsPlay"></audio>

  

    <p @click="musicsPlay">播放</p>
  </div>
</template>
<script>
export default {
  name: "musicPages",
  methods: {
    musicsPlay() {
      console.log(1);

      var listdata = document.getElementsByClassName("musPlay");
      console.log(listdata);

      listdata.play();
    }
  }
};
</script>

<style lang="scss" scoped>
.musicsPlay{
  height: 20px;
  
}
</style>
