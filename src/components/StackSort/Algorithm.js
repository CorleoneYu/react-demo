console.log('Algorithm');

//生成包含n m 的随机数
function random(n, m) {
  let w = m - n;
  return Math.round(Math.random()*w + n);
}

//生成n个随机数的数组
function randomData(n=10) {
  let data = [];
  for (let i=0; i<n; i++) {
    data.push(random(5, 100));
  }
  return data;
}

//交换
function swap(arr, l, r) {
  [arr[r], arr[l]] = [arr[l], arr[r]];
  return;
}
/**
 * 荷兰国旗问题
 * 给定一个数组arr, 和一个数num
 * 把小于num的数放在数组左边
 * 等于num的数放在数组中间
 * 大于num的数放在数组右边
 */
function heLanGuoQi(arr, num) {
  let less = -1, more = arr.length, current = 0;

  console.log('heLanGuoQi', arr);
  while(more > current) {
    if (arr[current] < num) {
      swap(arr, current, ++less);
      current++;
    } else if (arr[current] === num) {
      current++;
    } else if (arr[current] > num) {
      swap(arr, current, --more);
    }
  }
  console.log('heLanGuoQi', arr);
}

// let arr = randomData();
// heLanGuoQi(arr, 50);

/** 
 * 快排
*/
function quickSort(arr, l, r) {
  if (l < r) {
    swap(arr, r, random(l, r));
    let { less, more } = partition(arr, l, r);
    quickSort(arr, l, less - 1);
    quickSort(arr, more + 1, r);  
  }
}

//荷兰国旗问题
function partition(arr, l, r) {
  let less = l - 1;
  let more = r; //最右一个元素作为枢轴
  while(l < more) {
    if (arr[l] < arr[r]) {
      swap(arr, ++less, l++);
    } else if (arr[l] > arr[r]) {
      swap(arr, --more, l);
    } else {
      l++;
    }
  }

  swap(arr, more, r);
  return {
    less: less + 1,
    more
  }
}

// let arr = randomData();
// console.log('arr', arr);
// quickSort(arr, 0, arr.length-1);
// console.log('arr', arr);

/** 
 * 堆排序
 */
function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }

  // 建立大顶堆 O(N)=> log1 + log2 + log3 + ... + log(N-1)
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i);
  }

  console.log("heapInsert finish", arr);
  
  for (let i = 0; i < arr.length; i++) {
    let heapSize = arr.length - i;
    swap(arr, 0, heapSize-1);
    heapify(arr, 0, heapSize-1);
  }
}


/**
 * 大顶堆插入
 */
function heapInsert(arr, idx) {
  let parent = Math.floor((idx-1)/2);
  while(arr[idx] > arr[parent]) {
    swap(arr, idx, parent);
    idx = parent;
    parent = Math.floor((idx-1)/2);
  }
} 

/** 
 * 调整大顶堆
 */
function heapify(arr, idx, heapSize) {
  let left = idx * 2 + 1;
  while (left < heapSize) {
    //左右孩子比较
    let largest = left + 1 < heapSize && arr[left+1] > arr[left]
                  ? left + 1
                  : left;
    largest = arr[idx] < arr[largest] ? largest : idx;
    if (largest === idx) {
      break;
    }
   
    swap(arr, largest, idx);
    idx = largest;
    left = idx * 2 + 1;
  }
}

let arr = randomData();
console.log('arr', arr);
heapSort(arr);
console.log('arr', arr);