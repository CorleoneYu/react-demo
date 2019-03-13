// const isFunction = func => typeof func === 'function';

// const PENDING = 'PENDING';
// const FULFILLED = 'FULFILLED';
// const REJECTED = 'REJECTED';
// // new Promise((resolve, reject) => {
// //   resolve(1);
// // })

// class MyPromise {
//   constructor(handle) {
//     if (!isFunction(handle)) {
//       throw new Error('MyPromise must accept a function');
//     }

//     this._status = PENDING;
//     this._value = undefined;

//     // 添加成功回调函数队列
//     this._fulfilledQueues = [];
//     // 添加失败回调函数队列
//     this._rejectedQueues = [];

//     //执行handle
//     try {
//       handle(this._resolve.bind(this), this._reject.bind(this));
//     } catch(err) {
//       this._reject(err);
//     }
//   }

//   _resolve (val) {
//     if (this._status !== PENDING) return;

//     const run = () => {
//       this._status = FULFILLED;
//       this._value = val;
//       console.log("_resolve", this);

//       let cb;
//       while (cb = this._fulfilledQueues.shift()) {
//         cb(val);
//       }
//     }
    
//     setTimeout(()=> run(), 0);
//   }

//   _reject (err) {
//     if (this._status !== PENDING) return;

//     const run = () => {
//       this._status = REJECTED;
//       this._value = err;

//       console.log("_reject", this);

//       let cb;
//       while(cb = this._rejectedQueues.shift()) {
//         cb(err);
//       }
//     }
    
//     setTimeout(run, 0);
//   }

//   then(onFulfiled, onRejected) {
//     const { _value, _status } = this;

//     return new MyPromise((onFulfiledNext, onRejectedNext) => {
//       //  封装一个成功时执行的函数
//       let fulfilled = val => {
//         try {
//           if (!isFunction(onFulfiled)) {
//             onFulfiledNext(val);
//           } else {
//             let res = onFulfiled(value);
//             if (res instanceof MyPromise) {
//               // 如果当前回调函数返回MyPromise对象 
//               // 必须等待其状态改变后在执行下一个回调
//               res.then(onFulfiledNext, onRejected)
//             } else {
//               onFulfiledNext(res);
//             }
//           }
//         } catch (err) {
//           onRejected(err);
//         }

//         // 封装一个失败的执行函数
//         let rejected = err => {
//           try {
//             if (!isFunction(onRejected)) {
//               onRejectedNext(error);
//             } else {
//               let res = onRejected(err);
//               if (res instanceof MyPromise) {
//                 res.then(onFulfiledNext, onRejectedNext)
//               } else {
//                 onFulfiledNext(res);
//               }
//             }
//           } catch (err) {
//             onRejectedNext(err);
//           }
//         }

//         switch(_status) {
//           //  当状态为pending时 将then方法的两个回调函数加入各自对应队列
//           case PENDING:
//             this._fulfilledQueues.push(onFulfiled);
//             this._rejectedQueues.push(onRejected);
//             break;
          
//           //  状态已经改变时 立即执行对应的回调函数
//           case  FULFILLED:
//             onFulfiled(_value);
//             break;
          
//           case REJECTED:
//             onRejected(_value);
//             break;
//         }
//       }
//     })
//   }
// }

// /**
//  * 状态变换
//  */
// let p1 = new MyPromise((resolve, reject) => {
//   let msg = 'lky is shuaibi';
//   resolve(msg);
// }).then(function(pVal) {
//   console.log(pVal);
  
// }, function(pErr) {
//   console.log(pErr);
// })

// 腾讯笔试题
// let count = '7 4'.split(' ');
// let addQ = '3 1 -4 2 8 -1000 2'.split(' ');
// let getQ = '1 2 6 6'.split(' ');
// let addCount = count[0];
// let getCount = count[1];

// console.log(count, addQ, getQ);

// let idx = 0; //初始为0

// let arr = [];
// // 获取第k小的数
// function getK(arr, k) {
    
   
//     arr.sort(function(a, b) {
//       return parseInt(a) - parseInt(b);
//     });
//     console.log("arr", arr); 

//     let target = arr[k];

//     // let targetIdx = arr.indexOf(target);
//     // arr.splice(targetIdx, 1);
//     console.log("target", target);
//     return target;
// }

// for (let i = 0; i < addQ.length; i++) {
//     arr.push(addQ[i]);
    
//     while(getQ.indexOf((i+1).toString()) != -1) {
//         let j = getQ.indexOf((i+1).toString());
//         getQ.splice(j, 1);
//         console.log("getK", getK(arr, idx++));
//     }
// }

// console.log("arr", arr);


// let one = readline().split(' ');
// let MMCount = 3;
// let v = 2;

// let scanf = ["2 5", "7 9", "11 12"];
// let area = [];

// function isReduce(area, num) {
//   for (let i = 0; i < area.length; i++) {
//     let start = area[i][0];
//     let end = area[i][1];

//     if (start <= num && num <= end) {
//       return true;
//     }
//     return false;
//   }
// }

// for (let i = 0; i < scanf.length; i++) {
//     let arr = scanf[i].split(' ');
//     area.push(arr);
// }

// let result = 1;
// while (v > 0) {
    
//     if (!isReduce(area, result)) {
//         v--;
//         if (v <= 0) {
//           console.log("v", v, "i", result-1);
//           break;
//         }
        
//     }

//     result++; 
//     console.log("v", v, "i", result);
// }

// console.log("result", result);

