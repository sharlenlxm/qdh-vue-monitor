<template>
  <div class="index">
    <Header activeNum="1"></Header>
    <div class="contant">
      <div class="contant_left">
        <img class="img1" src="../../../assets/imgs/mapbgimg.png" alt="">
        <div class="img2">
          <img style="width:100%;height:100%" src="../../../assets/imgs/mapimg.png" alt="">
          <div class="icon1" @click="showstation('变电站1')">
            <img src="../../../assets/imgs/stationicon.png" alt="">
            <p style="text-align:center;color:#fff">变电站1</p>
          </div>
          <div class="icon2" @click="showstation('变电站2')" >
            <img src="../../../assets/imgs/stationicon.png" alt="">
            <p style="text-align:center;color:#fff">变电站2</p>
          </div>
          <div class="icon3" @click="showstation('变电站3')">
            <img src="../../../assets/imgs/stationicon.png" alt="">
            <p style="text-align:center;color:#fff">变电站3</p>
          </div>
        </div>

      </div>
      <div class="contant_right">
        <div class="Site_statistics">
          <p style="over-flow:hidden">
            <img style="height:30px;width:30px;position:absolute;top:10px;left:5px" src="../../../assets/imgs/icon.png"
              alt="">
            <span style="position:absolute;top:13px;left:50px;color:#4FFFFF;">站点统计</span>
          </p>
          <div class="Site_statistics_left">
            <img class="Site_statistics_left_img" src="../../../assets/imgs/jieruStation.png" alt="">
            <p style="text-align:left;margin-left:125px;margin-top:15px;font-size:14px;color:#FFFFFF">接入站点数</p>
            <p style="text-align:left;margin-left:125px;font-size:36px;color:#F9AF00;font-family:'fanti'">100<span
                style="font-size:14px">个</span> </p>
          </div>

          <div class="Site_statistics_right">
            <img class="Site_statistics_left_img" src="../../../assets/imgs/online.png" alt="">
            <p style="text-left:right;margin-left:125px;margin-top:15px;font-size:14px;color:#FFFFFF;">在线率</p>
            <p style="float:left;text-left:right;margin-left:45px;margin-top:15px;font-size:14px;color:#FFFFFF;">2个</p>
            <p style="text-left:right;margin-left:125px;font-size:36px;color:#F9AF00;font-family:'fanti'">50<span
                style="font-size:14px">%</span> </p>
          </div>
        </div>
        <div class="Inspection_task">
          <p style="over-flow:hidden">
            <img style="height:30px;width:30px;position:absolute;top:10px;left:5px" src="../../../assets/imgs/icon.png"
              alt="">
            <span style="position:absolute;top:13px;left:50px;color:#4FFFFF;">巡检任务</span>
            <el-select style="width:126px;margin-top:5px;float:right;margin-right:20px" class="selectbtn"
              v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </p>
          <div style="margin-top:60px;color:#0EF8FF;font-size:18px">
            <div style="height:36px;line-height:36px;background-color:rgba(0,255,255,.2)">
              <span style="display:inline-block;width:20%;text-indent:5px">序号</span>
              <span style="display:inline-block;width:30%">巡检内容</span>
              <span style="display:inline-block;width:29%"> 巡检结果</span>
              <span style="display:inline-block;width:20%">是否正常</span>
            </div>
            <div style="height:110px;overflow:auto">
              <ul style="height:110px;overflow:auto" class="ul">
                <li v-for="(item,index) in tableData" :key="index">
                  <span style="display:inline-block;width:20%;text-indent:5px">{{index+1}}</span>
                  <span style="display:inline-block;width:30%">{{item.date}}</span>
                  <span style="display:inline-block;width:29%"> {{item.name}}</span>
                  <span style="display:inline-block;width:20%">{{item.address}}</span>
                </li>
              </ul>
            </div>
            <div>
              <p style="line-height:100px;margin-left:40px;float:left">巡检中...</p>
              <img src="../../../assets/imgs/round.png" class="round" style="margin-top:15px;margin-left:10px" alt="">
            </div>
          </div>
        </div>
        <div class="larning_task">
          <p style="over-flow:hidden">
            <img style="height:30px;width:30px;position:absolute;top:10px;left:5px" src="../../../assets/imgs/icon.png"
              alt="">
            <span style="position:absolute;top:13px;left:50px;color:#4FFFFF;">报警统计</span>

            <img style="height:30px;width:30px;position:absolute;top:10px;left:50%"
              src="../../../assets/imgs/larning.png" alt="">
            <span style="position:absolute;top:13px;left:57%;color:#4FFFFF;font-size:16px">近30天共有<span
                style="color:red">68</span>个报警</span>
          </p>

          <div style="height:36px;line-height:36px;background-color:rgba(0,255,255,.2);margin-top:60px;color:#50FFFF">
            <span style="display:inline-block;width:20%;text-indent:5px">全部</span>
            <span style="display:inline-block;width:30%">变电站1</span>
            <span style="display:inline-block;width:29%"> 变电站2</span>
            <span style="display:inline-block;width:20%">变电站3</span>
          </div>

          <div style="height:200px;overflow:auto">
            <ul style="height:200px;overflow:auto;color:#F2F8F8;font-size:16px" class="ul">
              <li v-for="(item,index) in tablelist" :key="index"
                style="margin-top:2px;background-color:rgba(255,255,255,.2);height:40px;line-height:40px">
                <span style="display:inline-block;width:20%;text-indent:5px">{{index+1}}</span>
                <span style="display:inline-block;width:30%">{{item.date}}</span>
                <span style="display:inline-block;width:49%"> {{item.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../Header"
  export default {
    props: {

    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '选项5',
        tableData: [{
          date: '机房温湿度',
          name: '王小虎',
          address: '正常'
        }, {
          date: '机房温湿度',
          name: '王小虎',
          address: '正常'
        }, {
          date: '机房温湿度',
          name: '王小虎',
          address: '正常'
        }, {
          date: '机房温湿度',
          name: '王小虎',
          address: '正常'
        }, {
          date: '机房温湿度',
          name: '王小虎',
          address: '正常'
        }, {
          date: '机房温湿度',
          name: '王小虎',
          address: '正常'
        }],
        tablelist: [{
            date: '湿度报警',
            name: '2020 02-08',
          },
          {
            date: '湿度报警',
            name: '2020 02-08',
          },
          {
            date: '湿度报警',
            name: '2020 02-08',
          },
          {
            date: '湿度报警',
            name: '2020 02-08',
          },
          {
            date: '湿度报警',
            name: '2020 02-08',
          },

        ]
      };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
      showstation(val) {
        this.$message.success(val)
        this.$router.push({
          path:"/station",
          query:{}
        })
      }
    },
    components: {
      Header
    },
  };
</script>

<style scoped lang="less">
  .index {
    height: 100vh;
    width: 100%;
    background: url("../../../assets/index/indexbgimg.png") no-repeat;
    background-size: 100% 100%;

    .contant {
      width: 94%;
      height: 855px;
      position: absolute;
      top: 105px;
      left: 50%;
      transform: translateX(-50%);

      .contant_left {
        width: 69%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        .img1 {
          width: 96%;
          height: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .img2 {
          width: 60%;
          height: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          .icon1 {
            position: absolute;
            top: 50%;
            left: 60%;
          }

          .icon2 {
            position: absolute;
            top: 60%;
            left: 40%;
          }

          .icon3 {
            position: absolute;
            top: 26%;
            left: 50%;
          }
        }
      }

      .contant_right {
        width: 30%;
        height: 100%;
        // background-color: yellow;
        position: absolute;
        top: 0;
        right: 1px;

        .Site_statistics {
          position: absolute;
          height: 210px;
          width: 100%;
          background-color: red;
          background: url("../../../assets/imgs/Site_statistics.png") no-repeat;
          background-size: 100% 100%;

          .Site_statistics_left {
            position: absolute;
            left: 26px;
            top: 87px;
            height: 93px;
            width: 220px;

            .Site_statistics_left_img {
              position: absolute;
              left: 0;
              width: 120px;
              height: 100%;
            }
          }

          .Site_statistics_right {
            position: absolute;
            right: 26px;
            top: 87px;
            height: 93px;
            width: 220px;

            .Site_statistics_left_img {
              position: absolute;
              left: 0;
              width: 120px;
              height: 100%;
            }
          }





        }

        .Inspection_task {
          position: absolute;
          top: 230px;
          height: 310px;
          width: 100%;
          background-color: red;
          background: url("../../../assets/imgs/Inspection_task.png") no-repeat;
          background-size: 100% 100%;

          .ul {
            li:nth-child(2n-1) {
              background-color: rgba(0, 255, 255, .1)
            }
          }

          .selectbtn {
            background: url("../../../assets/imgs/selectbtn.png") no-repeat;
            background-size: 100% 100%;
            border: none;
          }

          /deep/ .el-input--suffix .el-input__inner {
            background-color: transparent;
            font-size: 16px;
            color: #4FFFFF;
            border: none;

          }

          @keyframes rotate {
            from {
              transform: rotate(0deg)
            }

            to {
              transform: rotate(360deg)
            }

          }

          .round {
            transition: 1s;
            transform-origin: 50% 50%;
            animation: rotate 10s linear infinite;
            /*开始动画后无限循环，用来控制rotate*/

          }

        }

        .larning_task {
          position: absolute;
          top: 560px;
          height: 300px;
          width: 100%;
          background-color: red;
          background: url("../../../assets/imgs/Inspection_task.png") no-repeat;
          background-size: 100% 100%;

        }
      }
    }
  }
</style>