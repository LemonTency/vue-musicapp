<template>
  <div>
    歌手页面
  </div>
</template>

<script type="ecmascript-6">
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  export default{
    data(){
      return{
        singers: []
      }
    },
    created(){
      this._getSingerList()
    },
    methods:{
      _getSingerList(){
        getSingerList().then(res => {
          if(res.data.code == ERR_OK){
            console.log("it is allright")
            this.singers = res.data.data.singerList;
            console.log(this.singers);
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
