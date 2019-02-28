import { arySwap } from 'common/ultils';

export default class Heap {
  constructor(types=Heap.BIG) {
    this.data = [];
    this.types = types
  }

  static BIG = 1;
  static SMA = 2;

  valueOf() {
    return this.data;
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length <= 0;
  }
  pop() {
    let arr = this.data;

    if (this.isEmpty()) {
      console.log('heap is empty now');
      return null;
    }

    arySwap(arr, 0, arr.length-1);
    let result = arr.pop();
    this.heapify(0);

    return result;
  }

  insert(data) {
    this.data.push(parseInt(data));
    
    let idx = this.data.length - 1;
    let arr = this.data;
    let parent = Math.floor((idx-1)/2);

    let shouldExc = false;
    if (this.types === Heap.BIG) {
      shouldExc = arr[idx] > arr[parent];
    } else if (this.types === Heap.SMA) {
      shouldExc = arr[idx] < arr[parent];
    }

    while (shouldExc) {
      arySwap(arr, idx, parent);
      idx = parent;
      parent = Math.floor((idx-1)/2);

      shouldExc = false;
      if (this.types === Heap.BIG) {
        shouldExc = arr[idx] > arr[parent];
      } else if (this.types === Heap.SMA) {
        shouldExc = arr[idx] < arr[parent];
      }
    }
  }

  heapify(idx) {
    let heapSize = this.data.length;
    let arr = this.data;
    let left = idx * 2 + 1;

    while (left < heapSize) {
      //左右孩子比较
      let exchange = left;
      if (left + 1 < heapSize) {
        if ( (this.types === Heap.BIG && arr[left] < arr[left+1]) ||
              (this.types === Heap.SMA && arr[left+1] < arr[left]) ) {
          exchange = left + 1;
        }
      } 
      
      // 左右孩子胜出者 和 idx 比较
      if ( (this.types === Heap.BIG && arr[exchange] < arr[idx]) ||
            (this.types === Heap.SMA && arr[idx] < arr[exchange]) ) {
        exchange = idx;
      }
      
      if (exchange === idx) {
        break;
      }
    
      arySwap(arr, exchange, idx);
      idx = exchange;
      left = idx * 2 + 1;
    }
  }
}
