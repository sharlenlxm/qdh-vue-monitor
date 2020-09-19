import axios from './axios';
import $ from "jquery"

export function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : (hour <= 11 ? '上午好' : (hour <= 13 ? '中午好' : (hour < 20 ? '下午好' : '晚上好')))
}

export function welcome () {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const index = Math.floor((Math.random() * arr.length))
  return arr[index]
}

export function isAuth (key) {
  return JSON.parse(sessionStorage.getItem('permissions') || '[]').indexOf(key) !== -1 || false
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate (id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}

export function getUUID () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
  })
}

export function isEmail (s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile (s) {
  return /^1[0-9]{10}$/.test(s)
}




export function getChannelList(token, online) {
  return axios({
    method: 'get',
    url: '/chqdh-server/api/v1/channel/list',
    params: {
      token,
      online
    },
  });
}
export function Login(username, password) {
    return axios({
        method: 'get',
        url: '/chqdh-server/api/v1/login',
        params: {
            username,
            password
        },
    });
}
export function streamStart(serial, code,token) {
    return axios({
        method: 'get',
        url: '/chqdh-server/api/v1/stream/start',
        params: {
            serial,
            code,
            token
        },
    });
}
export function controlPtz(serial, code, command, token) {
    return axios({
        method: 'get',
        url: '/chqdh-server/api/v1/control/ptz',
        params: {
            serial,
            code,
            command,
            token
        },
    });
}
export function streamStop(serial, code, token) {
    return axios({
        method: 'get',
        url: '/chqdh-server/api/v1/stream/stop',
        params: {
            serial,
            code,
            token
        },
    });
}
export function recordlist(serial, code, token,timeout,starttime,endtime) {
  return axios({
      method: 'get',
      url: '/chqdh-server/api/v1/playback/recordlist',
      params: {
          serial,
          code,
          token,
          timeout,
          starttime,
          endtime
      },
  });
}
export function playbackStart(serial, code, token,starttime,endtime) {
  return axios({
      method: 'get',
      url: '/chqdh-server/api/v1/playback/start',
      params: {
        serial,
        code,
        token,
        starttime,
        endtime
      },
  });
}
//获取昨天日期 //    -1 代表前一天，-2前两天...
export function getDay(num, str) {
  var today = new Date();
  var nowTime = today.getTime();
  var ms = 24*3600*1000*num;
  today.setTime(parseInt(nowTime + ms));
  var oYear = today.getFullYear();
  var oMoth = (today.getMonth() + 1).toString();
  if (oMoth.length <= 1) oMoth = '0' + oMoth;
  var oDay = today.getDate().toString();
  if (oDay.length <= 1) oDay = '0' + oDay;
  return oYear + str + oMoth + str + oDay;
}

export function ParameterMatching(url, param) {
  var urlLink = '';
  $.each(param, function(item, key) {
      var link = '&' + item + "=" + key;
      urlLink += link;
  })
  urlLink = url + "?" + urlLink.substr(1);
  return urlLink.replace(' ', '');
 }

 export function dataformatter ( data ) {
   let datas ;
   if( String(data).length == 10 ) {
     datas = data + "000"
   }else{
     datas = data
   }
 let date = new Date(Number( datas ))
 var year=date.getFullYear();
 var month=date.getMonth()+1;
 var day=date.getDate();
 var hour=date.getHours();
 var minute=date.getMinutes();
 var second=date.getSeconds();
//  return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
 return year + "-" + (String(month).length > 1 ? month : '0' + month) + '-' +
 (String(day).length > 1 ? day : '0' + day) + ' ' + (String(hour).length > 1 ? hour : '0' + hour) + ':' + (String(minute).length > 1 ? minute : '0' + minute)
  + ':' + (String(second).length > 1 ? second : '0' + second)
 }



