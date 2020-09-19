<template>
  <div class="header">
    <!-- <p class="title" @click="backindex"><img src="../../assets/header/bgimg.png"/></p> -->
    <div class="headName">变电站机器人智能巡检系统</div>
    <div class="nav">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col style="width:188px" v-for="item in colList" :key="item.index">
          <div :class="{'grid-content':true,'active':item.id == activeNum}" @click="selected(item)">
            {{item.name}}
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="tuichu"  @click="signOut()" title="退出" >
      <img  src="../../assets/index/yongh.png" />
      <span class="yonghName" title="adminsfsdfsdfsdf">adminsfsdfsdfsdf</span>
    </div>
    <!-- <save-to-update  v-if="saveOrUpdateproVisible" ref="saveOrUpdateproDialog"></save-to-update> -->
  </div>
</template>

<script>
// import saveToUpdate from './modify'
  export default {
    components:{
      // saveToUpdate
    },
    props: {
      activeNum: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        //  saveOrUpdateproVisible:false,
        colList: [{
            name: "首页",
            id: 1
          },

          {
            name: "巡检管理",
            id: 2
          },

          {
            name: "智能识别",
            id: 3
          },
          // {
          //   name: "系统管理",
          //   id: 4
          // },
          {
            name: "系统管理",
            id: 5
          },
        ],
        timeG:'',
        user:{},
        sign:false,
      };
    },
    computed: {

    },
    created() {
      // this.getInfo()
      // this.getTime()
      //  this.timeG = setInterval(() => {
      //   this.getTime()
      // }, 1000)
    },
    beforeDestroy() {
      // 清楚定时器
      clearInterval(this.timer)
      this.timeG = null
    },
    mounted() {

    },
    watch: {

    },
    methods: {
      getInfo() { //获取权限信息
        this.$axios.get('/apiUrl/sys/menu/nav').then(data => {
          console.log('----获取权限信息----', data.menuList)
          if (data && data.code === 0) {
            this.colList = data.menuList
          } else {

          }
        })
      },
      getTime() { //获取权限信息
      this.user=sessionStorage.getItem("userInformation")
       var time =  new Date()
       var timeG = parseInt((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = (time % (1000 * 60)) / 1000;
       this.timeG = timeG + ":" + minutes + ":" +seconds.toFixed()
      },
      signOut(){
        this.$confirm('是否退出?', '', {
          confirmButtonText: '是',
          cancelButtonText: '否',
          type: 'warning'
        }).then(() => {
           this.$axios.get('/apiUrl/sys/logout').then(data => {
              this.$message({
                showClose: true,
                message: '退出成功',
                type: 'success' //error success
              })
            sessionStorage.removeItem("auxiliary_monitor_token");
            this.$router.push({
                path: '/ddlogin',
                query: {}
              })
        })
        }).catch(() => {
          //否字
        });
      },
      backindex() {
        this.$router.push({
          path: "/ddindex"
        })
      },
      selected(val) {
        console.log(val.menuId)
        console.log(val)
        if (val.id == 1) {
          this.$router.push({
            path: "/ddindex"
          })
        } else if (val.id == 2) {
          this.$router.push({
            path: "/Manage"
          })
        } 
         else if (val.id == 3) {
          this.$router.push({
            path: "/zhnshib"
          })
        }  else if (val.id == 5) {
          this.$router.push({
            path: "/xtonggli"
          })
        } 
        // else {
        //   this.$router.push({
        //     path: "/" + val.url
        //   })
        // }
      },
      Updateproapp(){
          //  this.saveOrUpdateproVisible = true
          //  this.$nextTick(()=>{
          //     this.$refs.saveOrUpdateproDialog.init()
          //  })
            this.$emit("Updateproapp")
      },
    },
  };
</script>

<style scoped lang="less">
  .header {
    height: 1.08rem;
    background: url("../../assets/header/bgimg.png") no-repeat;
    background-size: 100% 100%;

    .title {
      float: left;
      background-color: transparent;
      margin-left: 48px;
    }

    .headName {
      position: absolute;
      top: 0.2rem;
      left: 44px;
      font-size: 32px;
      font-family: Noto Sans S Chinese;
      font-weight: bold;
      color: #02EEFF;
      background: linear-gradient(0deg, rgba(0, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .nav {
      height: .44rem;
      width: 896px;
      margin-left: 677px;
      // margin-top: 36px;
      padding-top: 34px;

    }
  }

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
      background-color: transparent;
    }
  }

  .el-col {
    border-radius: 4px;
    cursor: pointer;
  }

  .grid-content {
    border-radius: 4px;
    min-height: .44rem;
    background: url("../../assets/index/headItem.png") no-repeat;
    background-size: 100% 100%;
    font-size: .24rem;
    font-weight: 400;
    line-height: .44rem;
    text-align: center;
    color: rgba(2, 238, 255, 1);
  }

  .active {
    border-radius: 4px;
    min-height: .44rem;
    background: url("../../assets/index/headActive.png") no-repeat;
    background-size: 100% 100%;
    font-size: .24rem;
    font-weight: 400;
    line-height: .44rem;
    text-align: center;
    color: rgba(254, 255, 255, 1);
  }

  .row-bg {
    background-color: #f9fafc;
  }
  .tuichu{
    position: absolute;
    right: 68px;
    top: 36px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
      // width: 41px;
      // height: 41px;
    }
    .yonghName {
      display:inline-block;
      width: 55px;
      overflow: hidden;
      margin-left: 5px;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #00FFFF;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>