<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <h2>我是你的同学来着</h2>
        <ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="ecmascript-6">
import {getRecommend} from 'api/recommend.js'
import {ERR_OK} from 'api/config.js'
export default {
  created() {
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
