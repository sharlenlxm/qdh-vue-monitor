<template>
    <div class="station">
        <Header activeNum="1"></Header>
        <div class="stationMain">
            <Stationleft></Stationleft>
            <div>
                <div class="robotBats">
                    <div style="display: flex;">
                        <div class="rbBtn myflex" :class="{rbBtnActive: active==1}" @click="active = 1">
                            <img src="../../assets/station/xunjianincon.png" alt="">
                            <div style="margin-left: 10px;">设备列表</div>
                        </div>
                        <div class="rbBtn2 myflex" :class="{rbBtnActive2: active==2}"  @click="active = 2" style="justify-content: center;">预置位列表</div>
                    </div>
                    <div v-show="active==1" class="robotlist">
                        <div class="robotlistHead">
                            <img src="../../assets/station/roboticon.png" alt="">
                            <span>巡检机器人</span>
                        </div>
                        <div class="robotcell">
                            <ul>
                                <li :class="{checkBg: n.type==1}" v-for="(n, index) in robotlist" :key="index" @click="getcheck(n)">
                                    <img v-if="n.type==1" src="../../assets/station/check.png" alt="">
                                    <img v-else src="../../assets/station/checkicon.png" alt="">
                                    <span style="display:inline-block;">机器人{{n.name}}号</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div v-show="active==2" class="yuzhiweilieTabrl">
                        <div class="myflex" style='justify-content'>
                            <div class="myflex">
                                <div>预置位编号：</div>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="myflex">
                                <div>停留时间：</div>
                                <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </div>
                        </div>
                    </div>
                </div>
                <Stationright></Stationright>
            </div>
        </div>
    <!-- <p style="color:#fff">开关站主页</p> -->
    </div> 
</template>

<script>
import Header from "./Header"
import Stationleft from "./stationLeft/stationLeft"
export default {
    props: {

    },
    data() {
        return {
            active: 1,
            robotlist: [
                {type:1, name: '01'},
                {type:0, name: '02'},
                {type:0, name: '03'},
                {type:0, name: '04'},
                {type:0, name: '05'},
                {type:0, name: '06'},
                {type:0, name: '07'},
            ],
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }],
            value: '',
            input: ''
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
        getcheck(val) {
            if (val.type==1) {
                this.robotlist.forEach((item, index, arr) => {
                    if (val.name == item.name) {
                        item.type = 0
                    }
                })
            } else {
                this.robotlist.forEach((item, index, arr) => {
                    if (val.name == item.name) {
                        item.type = 1
                    } else {
                        item.type = 0
                    }
                })
            }
        }
    },
    components: {
        Header,
        Stationleft
    },
};
</script>

<style scoped lang="less">
.station {
  width: 100%;
  height: 100vh;
  background: url('../../assets/index/indexbgimg.png') no-repeat;
  background-size: 100% 100%;
  .myflex {
      display: flex;
      align-items: center;
  }
  .stationMain {
    display:flex;
    margin:0 60px 0 60px;
    height: 908px;
  }

  .robotBats {
        margin: 18px 0 0 20px;
        width: 496px;
        height: 283px;
        background: url('../../assets/station/robotBg.png') no-repeat;
        background-size: 100% 100%;
        
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #F2F8F8;

        .rbBtn {
            width: 168px;
            height: 50px;
            cursor: pointer;
        }
        .rbBtn2 {
            width: 196px;
            height: 50px;
            cursor: pointer;
        }
        .rbBtnActive {
            width: 168px;
            height: 50px;
            background: url('../../assets/station/rbBtnBg.png') no-repeat;
            background-size: 100% 100%;
            color: #50FFFF;
        }
        .rbBtnActive2 {
            width: 196px;
            height: 50px;
            background: url('../../assets/station/rbBtnBg2.png') no-repeat;
            background-size: 100% 100%;
            color: #50FFFF;
        }

        .robotlist {
            padding: 20px;

            .robotlistHead {
                margin-bottom: 13px;
                font-size: 18px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #02FAFA;
                
                span {
                    margin-left: 14px;
                }
            }
            .robotcell {
                overflow:auto;
                height: 160px;
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #F2F8F8;
                ul {
                    height:160px;
                    overflow:auto;
                    .checkBg {
                        background-color: rgba(0, 255, 255, 0.2);
                    }
                    li {
                        height:40px;
                        line-height: 40px;
                        padding-left:36px;
                        border-bottom: 1px solid #02FAFA;

                        img {
                            vertical-align: sub;
                            margin-right: 12px;
                        }
                    }
                }
                ul::-webkit-scrollbar {
                    display: none;
                }
            }
            
        }

        .yuzhiweilieTabrl {
            padding: 32px 20px 26px;
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #01FAFA;

            /deep/ .el-select {
                width: 82px;

                /deep/ .el-input__inner {
                    background: transparent;
                    border-radius: 0;
                    border-color: #01FAFA;
                    height: 20px;
                    line-height: 20px;
                }

                /deep/ .el-input__icon {
                    line-height: 20px;
                }
            }
            /deep/ .el-input {
                width: 46px;

                /deep/ .el-input__inner {
                    height: 20px;
                    line-height: 20px;
                    background: transparent;
                    border-radius: 0;
                    border-color: #01FAFA;
                }
            }

        }
  }
}
</style>
