export function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      //反复调用的时候 会不断重置
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}

//时间戳转换
//fmt: 转换成的格式 data: Data类型
//"yyyy-MM-dd"  "yyyy-MM-dd HH:mm:ss"
export function formatTime(fmt, data) {
  let o = {
    "M+": data.getMonth() + 1, //月份 
    "d+": data.getDate(), //日 
    "h+": data.getHours(), //小时 
    "m+": data.getMinutes(), //分 
    "s+": data.getSeconds(), //秒 
    "q+": Math.floor((data.getMonth() + 3) / 3), //季度 
    "S": data.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

/**
 * 将 多少 B 转化成KB、MB
 * 参数为 多少b
 */
export function formatSize(size) {
  if (size <= 0) {
    return `--`
  } else if ( size > 0 && size < 1000) {
    return `${size} B`; 
  } else if ( size >= 1000 && size < 1000000) {
    return `${Math.floor(size * 100 / 1024) / 100} KB`
  } else if ( size >= 1000000) {
    return `${Math.floor(size * 100/ 1024 / 1024) / 100} MB`
  }
}

//生成包含n m 的随机数
export function random(n, m) {
  let w = m - n;
  return Math.round(Math.random()*w + n);
}

//生成n个随机数的数组
export function randomData(n=10) {
  let data = [];
  for (let i=0; i<n; i++) {
    data.push(random(5, 100));
  }
  return data;
}

//数组交换
export function arySwap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}