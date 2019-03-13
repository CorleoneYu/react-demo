console.log('Algorithm');

//CSRF测试
// import axios from 'axios';
// axios.get('/api/BigType/getBig')
// .then(res => {
//   console.log(res.data);
// });

// //生成包含n m 的随机数
// function random(n, m) {
//   let w = m - n;
//   return Math.round(Math.random()*w + n);
// }

// //生成n个随机数的数组
// function randomData(n=10) {
//   let data = [];
//   for (let i=0; i<n; i++) {
//     data.push(random(5, 100));
//   }
//   return data;
// }

// //交换
// function swap(arr, l, r) {
//   [arr[r], arr[l]] = [arr[l], arr[r]];
//   return;
// }
// /**
//  * 荷兰国旗问题
//  * 给定一个数组arr, 和一个数num
//  * 把小于num的数放在数组左边
//  * 等于num的数放在数组中间
//  * 大于num的数放在数组右边
//  */
// function heLanGuoQi(arr, num) {
//   let less = -1, more = arr.length, current = 0;

//   console.log('heLanGuoQi', arr);
//   while(more > current) {
//     if (arr[current] < num) {
//       swap(arr, current, ++less);
//       current++;
//     } else if (arr[current] === num) {
//       current++;
//     } else if (arr[current] > num) {
//       swap(arr, current, --more);
//     }
//   }
//   console.log('heLanGuoQi', arr);
// }

// // let arr = randomData();
// // heLanGuoQi(arr, 50);

// /** 
//  * 快排
// */
// function quickSort(arr, l, r) {
//   if (l < r) {
//     swap(arr, r, random(l, r));
//     let { less, more } = partition(arr, l, r);
//     quickSort(arr, l, less - 1);
//     quickSort(arr, more + 1, r);  
//   }
// }

// //荷兰国旗问题
// function partition(arr, l, r) {
//   let less = l - 1;
//   let more = r; //最右一个元素作为枢轴
//   while(l < more) {
//     if (arr[l] < arr[r]) {
//       swap(arr, ++less, l++);
//     } else if (arr[l] > arr[r]) {
//       swap(arr, --more, l);
//     } else {
//       l++;
//     }
//   }

//   swap(arr, more, r);
//   return {
//     less: less + 1,
//     more
//   }
// }

// // let arr = randomData();
// // console.log('arr', arr);
// // quickSort(arr, 0, arr.length-1);
// // console.log('arr', arr);

// /** 
//  * 堆排序
//  */
// function heapSort(arr) {
//   if (arr == null || arr.length < 2) {
//     return;
//   }

//   // 建立大顶堆 O(N)=> log1 + log2 + log3 + ... + log(N-1)
//   for (let i = 0; i < arr.length; i++) {
//     heapInsert(arr, i);
//   }

//   console.log("heapInsert finish", arr);

//   for (let i = 0; i < arr.length; i++) {
//     let heapSize = arr.length - i;
//     swap(arr, 0, heapSize-1);
//     heapify(arr, 0, heapSize-1);
//   }
// }


// /**
//  * 大顶堆插入
//  */
// function heapInsert(arr, idx) {
//   let parent = Math.floor((idx-1)/2);
//   while(arr[idx] > arr[parent]) {
//     swap(arr, idx, parent);
//     idx = parent;
//     parent = Math.floor((idx-1)/2);
//   }
// } 

// /** 
//  * 调整大顶堆
//  */
// function heapify(arr, idx, heapSize) {
//   let left = idx * 2 + 1;
//   while (left < heapSize) {
//     //左右孩子比较
//     let largest = left + 1 < heapSize && arr[left+1] > arr[left]
//                   ? left + 1
//                   : left;
//     largest = arr[idx] < arr[largest] ? largest : idx;
//     if (largest === idx) {
//       break;
//     }

//     swap(arr, largest, idx);
//     idx = largest;
//     left = idx * 2 + 1;
//   }
// }

// let arr = randomData();
// console.log('arr', arr);
// heapSort(arr);
// console.log('arr', arr);

// class P {
//   name = 'parent';
// }

// class S extends P {
//   constructor() {

//     super();
//     console.log(this);
//   }
// }
// let s1 = new S();

// function _typeof(obj) {
//   if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
//     _typeof = function _typeof(obj) {
//       return typeof obj;
//     };
//   } else {
//     _typeof = function _typeof(obj) {
//       return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
//     };
//   }
//   return _typeof(obj);
// }

// function _possibleConstructorReturn(self, call) {
//   if (call && (_typeof(call) === "object" || typeof call === "function")) {
//     return call;
//   }
//   return _assertThisInitialized(self);
// }

// function _getPrototypeOf(o) {
//   _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
//     return o.__proto__ || Object.getPrototypeOf(o);
//   };
//   return _getPrototypeOf(o);
// }

// function _assertThisInitialized(self) {
//   if (self === void 0) {
//     throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//   }
//   return self;
// }

// function _inherits(subClass, superClass) {
//   if (typeof superClass !== "function" && superClass !== null) {
//     throw new TypeError("Super expression must either be null or a function");
//   }
//   subClass.prototype = Object.create(superClass && superClass.prototype, {
//     constructor: {
//       value: subClass,
//       writable: true,
//       configurable: true
//     }
//   });
//   if (superClass) _setPrototypeOf(subClass, superClass);
// }

// function _setPrototypeOf(o, p) {
//   _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
//     o.__proto__ = p;
//     return o;
//   };
//   return _setPrototypeOf(o, p);
// }

// function _instanceof(left, right) {
//   if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
//     return right[Symbol.hasInstance](left);
//   } else {
//     return left instanceof right;
//   }
// }

// function _classCallCheck(instance, Constructor) {
//   if (!_instanceof(instance, Constructor)) {
//     throw new TypeError("Cannot call a class as a function");
//   }
// }

// function _defineProperty(obj, key, value) {
//   if (key in obj) {
//     Object.defineProperty(obj, key, {
//       value: value,
//       enumerable: true,
//       configurable: true,
//       writable: true
//     });
//   } else {
//     obj[key] = value;
//   }
//   return obj;
// }

// var Parent = function Parent() {
//   _classCallCheck(this, Parent);

//   _defineProperty(this, "name", 'parent');
// };

// var Son =
//   /*#__PURE__*/
//   function (_Parent) {
//     _inherits(Son, _Parent);

//     function Son() {
//       var _this;

//       console.log(this);
//       _classCallCheck(this, Son);

//       _this = _possibleConstructorReturn(this, _getPrototypeOf(Son).call(this));

//       _defineProperty(_assertThisInitialized(_this), "sonName", 'son');

//       console.log(_assertThisInitialized(_this));
//       return _this;
//     }

//     return Son;
//   }(Parent);

// var s1 = new Son();

