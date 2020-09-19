<template>
  <div>
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-select @change="getOptions('classify')" v-model="dataForm.classify" placeholder="分类">
          <el-option v-for="(item,index) in classifyOptions" :key="parseInt('1'+index)" :value="item.classify"
                     :label="item.classify"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select @change="getOptions('type')" v-model="dataForm.type" placeholder="类型">
          <el-option v-for="(item,index) in typeOptions" :key="parseInt('2'+index)" :value="item.type"
                     :label="item.type"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select @change="getDataList()" v-model="dataForm.field" placeholder="分类">
          <el-option v-for="(item,index) in fieldOptions" :key="parseInt('3'+index)" :value="item.field"
                     :label="item.field"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
      </el-form-item>
    </el-form>
    <el-form :inline="true" :model="addForm">
      <el-form-item>
        <el-input v-model="addForm.classify" placeholder="分类"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="addForm.type" placeholder="类型"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="addForm.field" placeholder="字段信息"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="addHandle">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      style="width: 100%;">
      <el-table-column prop="classify" header-align="center" align="center" label="分类"/>
      <el-table-column prop="type" header-align="center" align="center" label="类型"/>
      <el-table-column prop="field" header-align="center" align="center" label="字段信息"/>
      <el-table-column prop="region" header-align="center" align="center" label="区域"/>
      <el-table-column prop="value" header-align="center" align="center" label="值">
        <template slot-scope="scope">
          <el-input size="small" @input="computeTotal" placeholder="请输入值" v-model="scope.row.value">
          </el-input>
        </template>
      </el-table-column>
    </el-table>
    <el-input v-model="total" disabled placeholder="总值"></el-input>
    <el-button @click="save">保存</el-button>
  </div>
</template>

<script>
  import qs from 'qs'

  export default {
    data() {
      return {
        total: 0,
        dataForm: {
          classify: '',
          type: '',
          field: ''
        },
        addForm: {
          classify: '',
          type: '',
          field: ''
        },
        dataListLoading: false,
        classifyOptions: [],
        typeOptions: [],
        fieldOptions: []
      }
    },
    mounted() {
      this.getOptions()
    },
    methods: {
      save() {
        const list = this.dataList
        this.$axios.post('/chqdh-server/data/save?ddkj_token=' + sessionStorage.getItem('token'), {
          list: list
        }).then((data)=>{
          if(data && data.code==0){
            this.$message.success("保存成功")
            location.reload()
          }else{
            this.$message.warning(data.msg)
          }
        })
      },
      addHandle() {
        this.dataListLoading = true
        const classify = this.addForm.classify
        const type = this.addForm.type
        const field = this.addForm.field
        this.$axios.get('/chqdh-server/data/list?ddkj_token=' + sessionStorage.getItem('token') + '&classify=' + classify + '&type=' + type + '&field=' + field).then((data) => {
          if (data && data.code === 0) {
            this.dataList = data.list
          } else {
            this.dataList = []
          }
          this.dataListLoading = false
        })
      },
      getOptions(val) {
        if(val == 'classify'){
          this.dataForm.type = ''
          this.dataForm.field = ''
        }else if (val == 'type'){
          this.dataForm.field = ''
        }
        const classify = this.dataForm.classify
        const type = this.dataForm.type
        const field = this.dataForm.field
        this.$axios.get('/chqdh-server/data/options?ddkj_token=' + sessionStorage.getItem('token') + '&classify=' + classify + '&type=' + type + '&field=' + field).then((data) => {
          if (data && data.code === 0) {
            if (this.dataForm.classify == '') {
              this.classifyOptions = data.list
            } else if (this.dataForm.type == '') {
              this.typeOptions = data.list
            } else if (this.dataForm.field == '') {
              this.fieldOptions = data.list
            }
          } else {
            this.dataList = []
          }
        })
      },
      // 获取数据列表
      getDataList() {
        this.dataListLoading = true
        const classify = this.dataForm.classify
        const type = this.dataForm.type
        const field = this.dataForm.field
        this.$axios.get('/chqdh-server/data/list?ddkj_token=' + sessionStorage.getItem('token') + '&classify=' + classify + '&type=' + type + '&field=' + field).then((data) => {
          if (data && data.code === 0) {
            this.dataList = data.list
          } else {
            this.dataList = []
          }
          this.dataListLoading = false
        })
      },
      computeTotal() {
        let sum = 0
        this.dataList.forEach((item, index) => {
          console.log(item.value)
          sum = sum + parseFloat((item.value == null || item.value == '') ? 0 : item.value)
        })
        this.total = sum
      }
    }
  }
</script>
