<template>
  <div>
    <!---->
    <div class="home-songlist-view segment-block">
      <div class="m-title padding-box">
        <div class="name ellipsis">热门歌曲</div>
        <div class="more">
          <div class="ft-smallest">更多&nbsp;</div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAbCAMAAAAprnOAAAAAb1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt6r1GAAAAJHRSTlMA8A8GyUnSwvr12mYt6eI6t5iSjIl/cWBPRCSwpIR3XVaqahddXZrgAAABLElEQVRIx+3VyZKDIBCA4UZAENz3PSbp93/GOUhlZiwzCuVhDvlOnv6yoaiGjbAp7yyOAkmUGDIdwmW8ZiC4EYiCU3DEf3ymEveRcfHAgZZgNAr/ItOb7QS0QDT/7eMhkltdQs9wrT/veI44PQB9EFzrC0HjsgE6cxZAc7TjP46uuBVoAENrcqjfT9DPCl8A3USjTp6w4fHJHMl33R1hY1nVemnbm56zVOEW4IU+9X9bj9Oibji/1VPGgkvrfsF/PUQa6iy6pq6qHvYkeYxupledtfBekjmcUdSBqfvd0VacbQcYnrDWSU3h2CIs2nELsNZZf3bfVApPIZMHpl7YbMwkj47bpQeG1GApqYQ8u104OKBdKXZnYFUI1/CSprynzI9JEAREiXHutjvxCyHd06KBxO6eAAAAAElFTkSuQmCC"
            class="wave"
          />
        </div>
      </div>
      <ul class="items padding-box">
        <li class="item" v-for="(item,index) in list " :key="index">
          <div class="image-box">
            <div>
              <img :src="item.pic" alt />
            </div>
            <div class="overlay"></div>
          </div>
          <div class="info">
            <div class="name ellipsis">{{item.title}}</div>
            <div class="ellipsis num">单曲 | 热门</div>
            <div class="author">
              <div class="ellipsis author-name" style="flex: 1 1 0%;">{{item.author }}</div>
            </div>
          </div>
        </li>
       
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.home-songlist-view {
  margin-top: 5vw;
}
.m-title {
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
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
    background: #e5e5ee
  }
}

.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-align: left;
}
.item {
  display: inline-block;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-right: 10px;
  width: 38%;
}
.image-box {
  width: 100%;
  padding-top: 5px;
  position: relative;
  img {
    width: 100%;
  }
}

.info {
  font-size: 13px;
  margin-top: 4px;
}
.name {
  font-weight: 700;
  font-size: 15px;
}

.num {
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  font-size: 12px;
  height: 17px;
  line-height: 17px;
}
.padding-box {
  overflow: auto;
  white-space: nowrap;
  padding-bottom: 22px;
}
</style>
