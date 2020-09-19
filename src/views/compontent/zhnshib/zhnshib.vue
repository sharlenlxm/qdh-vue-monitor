<!--  -->
<template>
  <div class="zhnshib">
    <Header activeNum="3"></Header>
    <div class="content">
      <div class="left">
        <div>
          <i class="icon"></i>
          <span class="top">智能识别</span>
        </div>
        <div class="select">
          <el-select class="innter" v-model="value" placeholder="所有变电站">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
          <el-select v-model="value" placeholder="所有变电站">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button class="btn" icon="el-icon-search">查询</el-button>
        </div>
        <div class="container">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column align="center" type="index" width="50"></el-table-column>
            <el-table-column align="center" prop="date" label="日期" width="180"></el-table-column>
            <el-table-column align="center" prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="地址"></el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </div>
      </div>
      <div class="right">
        <div class="video-top">
          <div class="top-first">
            <span style="color:#F2F8F8;">110KV备自投屏</span>
            <span style="float-right;color:#F2485A;margin-left:40%">2020-08-31 14:00:00</span>
          </div>
          <div class="video-content">
            <img class="img" src="../../../assets/imgs/u=1244812892,674145546&fm=26&gp=0.jpg" alt="">
          </div>
        </div>
        <div class="video-top">
          <div class="top-first">
            <span style="color:#F2F8F8;">110KV备自投屏</span>
            <span style="float-right;color:#02FAFA;margin-left:40%">2020-08-31 14:00:00</span>
          </div>
          <div class="video-content">
            <img class="img" src="../../../assets/imgs/u=1244812892,674145546&fm=26&gp=0.jpg" alt="">
          </div>
        </div>
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
    return {
      value: '', //下拉
      value2: '', //日期时间
      currentPage4: 1, //分页
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },
}
</script>
<style lang='less' scoped >
/* @import url(); 引入css类 */
.zhnshib {
  width: 100%;
  height: 100vh;
  background: url('../../../assets/index/indexbgimg.png') no-repeat;
  background-size: 100% 100%;
}

.content {
  width: 100%;
  height: 100%;
}

.left {
  width: 10.04rem;
  height: 100%;
  margin-left: 0.78rem;
  float: left;
}

.icon {
  width: 0.2rem;
  height: 0.2rem;
  display: inline-block;
  background: url('../../../assets/imgs/icon.png') no-repeat;
  background-size: 100% 100%;
  margin-top: 0.24rem;
  margin-right: 0.17rem;
}

.top {
  color: #f9af00;
  font-size: 0.22rem;
}

.select {
  width: 100%;
  height: 0.55rem;
  margin-top: 0.27rem;
}

.el-input__inner {
  width: 4.15rem;
  height: 0.55rem;
  background-color: transparent !important;
  border: none;
  color: #02eeff !important;
  background: url('../../../assets/imgs/bg-select-1.png') no-repeat;
  background-size: 100% 100%;
  font-size: 0.16rem;
  margin-right: 0.09rem;
}

/deep/.el-input--suffix .el-input__inner {
  background: url('../../../assets/imgs/bg-select-1.png') no-repeat;
  background-size: 100% 100%;
  border: none;
  height: 0.55rem;
}

/deep/.el-pagination .el-select .el-input .el-input__inner {
  height: 0.38rem;
}

/deep/.el-range-input {
  background-color: transparent !important;
  color: #ffffff;
}

/deep/.el-date-editor {
  margin-right: 0.09rem;
}

.container {
  margin-top: 0.16rem;
}

/deep/.el-table,
.el-table__expanded-cell {
  background-color: transparent;
}
/deep/.el-table th,
.el-table tr {
  background-color: transparent;
}

/deep/.el-table tr {
  background-color: transparent !important;
  color: #00ffff;
  border: 0.01rem solid #00ffff !important;
}
/deep/.el-table th {
  background-color: #015a60 !important;
  color: #00ffff;
  border-bottom: none;
}

/deep/.el-input__inner {
  background-color: transparent !important;
  color: #ffffff;
}

/deep/.el-pagination__jump {
  color: #ffffff;
}

/deep/.el-table--enable-row-transition .el-table__body td {
  border-bottom: 0.01rem solid #005158;
}

/deep/.el-table::before {
  height: 0;
}

/deep/.el-table::before {
  height: 0;
}

/deep/.el-table--enable-row-transition .el-table__body td {
  border-bottom: 0.01rem solid #005158;
}

.el-pagination {
  padding-top: 0.35rem;
}

/deep/.el-pagination__total {
  color: #ffffff;
}

/deep/.el-table {
  tbody tr {
    &:hover {
      td {
        background-color: #2cce34;
      }
    }
  }
}

.btn {
  width: 1.02rem;
  height: 0.42rem;
  background: url('../../../assets/imgs/button.png') no-repeat;
  background-size: 100% 100%;
  border: none;
  color: #01fafa;
  font-size: 0.18rem;
  margin-left: 0.25rem;
}

.right {
  width: 7.06rem;
  height: 100%;
  float: left;
  margin-left: 0.48rem;
}

.video-top {
  width: 100%;
  height: 4.06rem;
  background: url('../../../assets/imgs/bg-video-top.png') no-repeat;
  background-size: 100% 100%;
  margin-top: 0.73rem;
  overflow: hidden;
}

.video-top:nth-child(2) {
  margin-top: 0.05rem;
  background: url('../../../assets/imgs/bg-video.png') no-repeat;
  background-size: 100% 100%;
}

.top-first {
  width: 90%;
  height: 0.48rem;
  background: url('../../../assets/imgs/bg-video-3.png') no-repeat;
  background-size: 100% 100%;
  padding: 0.16rem 0.21rem 0.15rem 0.22rem;
  box-sizing: border-box;
  margin: 0.24rem 0.32rem 0 0.34rem;
}

.video-content {
  width: 90%;
  height: 76%;
  margin: 0 auto;
}

.img {
  width: 100%;
  height: 100%;
}

/deep/.btn-next {
  background-color: transparent !important;
  color: #ffffff;
}

/deep/.el-pager {
  background-color: transparent !important;
}

/deep/.number {
  background-color: transparent !important;
  color: #ffffff;
}

/deep/.active {
  background-color: #015762 !important;
}

/deep/.btn-prev {
  background-color: transparent !important;
  color: #ffffff;
}
</style>