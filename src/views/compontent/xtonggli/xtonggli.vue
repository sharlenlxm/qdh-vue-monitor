<!--  -->
<template>
  <div class="xtonggli">
    <Header activeNum="5"></Header>
    <div class="content">
      <div class="leftNav">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Header'
export default {
  components: {
    Header,
  },
  data() {
    return {}
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.getList()
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    getList() {

      this.$axios.get("/chqdh-server/sys/menu/nav").then((data)=>{
        cosnole.log("111",data)
      })
      // this.$http({
      //   url: this.$http.adornUrl(`/sys/menu/nav`),
      //   method: 'get',
      //   params: this.$http.adornParams(),
      // }).then( res => {
      //   console.log(res)
      // })
    },
  },
}
</script>
<style lang='less' scoped >
/* @import url(); 引入css类 */
.xtonggli {
  width: 100%;
  height: 100vh;
  background: url('../../../assets/index/indexbgimg.png') no-repeat;
  background-size: 100% 100%;
}

.leftNav {
  width: 10%;
  margin-left: 0.78rem;
  height: 100%;
}
</style>