<template>
    <div class='stationsLeft'>
        <div class="topdiv">
            <div>
                <div class="backHome">
                    <img src="../../../assets/station/lefticon.png" alt="">
                    <div class="backhometext">返回首页</div>
                </div>
                <div class="baojinlistBtn">
                    <img src="../../../assets/station/baojinIcon.png" alt="">
                    <div class="baojintext">报警列表</div>
                    <img src="../../../assets/station/lefticon.png" alt="">
                </div>
            </div>
            <div class="xunjiantabel">
                <div class="xjHead">
                    <div class="myflex">
                        <div class="myflex">
                            <img src="../../../assets/station/xunjianincon.png" alt="">
                            <span class="xunjrenw">巡检任务</span>
                        </div>
                        <div class="starxjBtn myflex">
                            <span class="starxunj">开始巡检</span>
                            <img src="../../../assets/station/videoicon.png" alt="">
                        </div>
                    </div>
                    <div style="margin-right:20px;cursor: pointer;">
                        <span class="infotext">详情</span>
                        <img src="../../../assets/station/lefticon.png" alt="">
                    </div>
                </div>
                <div class="tabelMain">
                    <div class="tabelHead">
                        <span style="display:inline-block;width:8%;text-indent:5px">序号</span>
                        <span style="display:inline-block;width:29%">巡检内容</span>
                        <span style="display:inline-block;width:26%;color: #F2F8F8;"> 巡检时间</span>
                        <span style="display:inline-block;width:24%"> 检测结果</span>
                        <span style="display:inline-block;width:13%">是否正常</span>
                    </div>
                    <div class="tabelcell">
                        <ul>
                            <li v-for="(item,index) in tableData" :key="index">
                            <span style="display:inline-block;width:8%;text-indent:5px">{{index+1}}</span>
                            <span style="display:inline-block;width:29%">{{item.date}}</span>
                            <span style="display:inline-block;width:26%"> {{item.name}}</span>
                            <span style="display:inline-block;width:24%"> {{item.jieguo}}</span>
                            <span style="display:inline-block;width:13%">{{item.address}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="videoWindow"></div>
        <div class="videoOverlay myflex">
            <div class="myflex">
                <img src="../../../assets/station/baojinicon2.png" alt="">
                <div class="alarmtext">发现设备温度异常</div>
            </div>
            <div class="myflex">
                <img src="../../../assets/station/shebeiicon.png" alt="">
                <div class="alarmtext2">110KV备自投屏</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            tableData: [{
            date: '机房温湿度',
            name: '2020-10-01 18:00:00',
            jieguo: '50℃，43%',
            address: '正常'
            }],
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

    },
    components: {

    },
};
</script>

<style scoped lang="less">
.stationsLeft {
    .myflex {
        display: flex;
        align-items: center;
    }
    .topdiv {
        display:flex;
        padding: 18px 0 18px 23px;

        .backHome {
            width: 167px;
            height: 62px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: url('../../../assets/station/backhome.png') center center no-repeat;
            background-size: 100% 100%;
            margin-bottom: 20px;
            margin-right: 40px;
            cursor: pointer;

            img {
                transform: rotate(180deg);
                margin-right:8px;
            }
            .backhometext {
                font-size: 18px;
                font-family: PingFang SC;
                // font-weight: 500;
                color: #73FFFF;
            }
        }

        .baojinlistBtn {
            width: 168px;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: url('../../../assets/station/baojinBg.png') center center no-repeat;
            background-size: 100% 100%;
            cursor: pointer;

            .baojintext {
                font-size: 18px;
                font-family: PingFang SC;
                // font-weight: 500;
                color: #4FFFFF;
                margin: 0 12px 0 10px;
            }
        }

        .xunjiantabel {
            width: 1052px;
            height: 134px;
            background: url('../../../assets/station/tablebg.png') center center no-repeat;
            background-size: 100% 100%;
            
            .xjHead {
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .xunjrenw {
                    display: inline-block;
                    font-size: 20px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color: #4FFFFF;
                    margin-left:10px;
                    margin-right: 53px;
                }
                .starxjBtn {
                    width: 138px;
                    height: 36px;
                    background: url('../../../assets/station/starxunjianBg.png') center center no-repeat;
                    background-size: 100% 100%;
                    justify-content: center;
                    cursor: pointer;

                    .starxunj {
                        font-size: 16px;
                        font-family: PingFang SC;
                        font-weight: bold;
                        color: #4FFFFF;
                    }
                }

                .infotext {
                    font-size: 16px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color: #4FFFFF;
                    margin-right:11px;
                }
            }

            .tabelMain {
                margin-top:16px;
                color:#0EF8FF;
                font-size:18px;

                .tabelHead {
                    height:36px;
                    line-height:36px;
                    background-color:rgba(0,255,255,.2);
                }
                .tabelcell {
                    height:40px;
                    overflow:auto;
                    color: #F2F8F8;
                    font-size: 16px;
                    ul {
                        height:40px;
                        overflow:auto;

                        li {
                            height: 40px;
                            line-height: 40px;
                        }
                    }
                }
            }
        }
    }

    .videoWindow {
        width: 100%;
        height: 720px;
        background: #fff;
    }
    .videoOverlay {
        background-color: rgba(0,0,0,.5);
        width: 100%;
        height: 60px;
        justify-content: space-between;
        font-size: 22px;
        font-family: PingFang SC;
        position: relative;
        top: -60px;
        padding: 0 19px 0 20px;

        .alarmtext {
            margin-left:11px;
            font-weight: 500;
            color: #FFFFFF;
            background: linear-gradient(0deg, #F9AF00 0%, #F2475A 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .alarmtext2 {
            font-weight: 500;
            color: #FFFFFF;
            margin-left:18px;
        }
    }
}
</style>
