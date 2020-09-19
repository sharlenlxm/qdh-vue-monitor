<!--  -->
<template>
  <div class="Manage">
    <Header activeNum="2"></Header>
    <div class="content">
      <i class="icon"></i>
      <span class="top">巡检管理</span>
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column align="center" type="index" width="50"></el-table-column>
          <el-table-column align="center" prop="date" label="巡检类型" width="180"></el-table-column>
          <el-table-column align="center" prop="date" label="巡检开始时间" width="180"></el-table-column>
          <el-table-column align="center" prop="date" label="巡检结束时间" width="180"></el-table-column>
          <el-table-column align="center" prop="name" label="巡检操作者" width="180"></el-table-column>
          <el-table-column align="center" prop="address" label="巡检结果"></el-table-column>
          <el-table-column align="center" label="巡检报告">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-document"></i>报告</el-button>
            </template>
          </el-table-column>
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
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '正常',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '正常',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '正常',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '正常',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '正常',
        },
      ],
      currentPage4: 1,
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    handleEdit() {},
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
.Manage {
  width: 100%;
  height: 100%;
  background: url('../../../assets/index/indexbgimg.png') no-repeat;
  background-size: 100% 100%;
}
.content {
  width: 100%;
  height: 100%;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-bottom: 0.84rem;
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

.table {
  margin-top: 0.33rem;
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

/deep/.el-table {
  tbody tr {
    &:hover {
      td {
        background-color: #2cce34;
      }
    }
  }
}

.el-pagination {
  float: right;
  padding-top: 0.35rem;
}

/deep/.el-pagination__total {
  color: #ffffff;
}

/deep/.btn-prev {
  background-color: transparent !important;
  color: #ffffff;
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

.el-button {
  background-color: transparent !important;
  color: #00FFFF;
  border: none;
  font-size: 15px;
}
</style>