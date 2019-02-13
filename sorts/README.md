## 十大排序算法

> **这是从别处借鉴（抄）的**

[排序算法 - 冒泡排序](sortBubble.js)  
[排序算法 - 桶排序](sortBucket.js)  
[排序算法 - 计数排序](sortCounting.js)  
[排序算法 - 堆排序](sortHeap.js)  
[排序算法 - 插入排序](sortInsertion.js)  
[排序算法 - 归并排序](sortMerge.js)  
[排序算法 - 快速排序](sortQuick.js)  
[排序算法 - 基数排序](sortRadix.js)  
[排序算法 - 选择排序](sortSelection.js)  
[排序算法 - 希尔排序](sortShell.js)  


**概括图**

![防止链接失效](http://img.wowphp.com/KOMXDX8QE862/1867034-1d3e43cdb301fc9b.png)


| 排序算法 | 平均时间复杂度 | 最好情况 | 最坏情况 | 空间复杂度 | 排序方式 | 稳定性 |
| ------- | ----------- | ------- | ------- | -------- | ------- | ----- |
| 冒泡排序 | O(n^2) | O(n) | O(n^2) | O(1) | In-place | 稳定 |
| 选择排序 | O(n^2) | O(n^2) | O(n^2) | O(1) | In-place | 不稳定 |
| 插入排序 | O(n^2) | O(n) | O(n^2) | O(1) | In-place | 稳定 |
| 希尔排序 | O(n log n) | O(n log^2 n) | O(n log^2 n) | O(1) | In-place | 不稳定 |
| 归并排序 | O(n log n) | O(n log n) | O(n log n) | O(n) | Out-place | 稳定 |
| 快速排序 | O(n log n) | O(n log n) | O(n^2) | O(log n) | In-place | 不稳定 |
| 堆排序 | O(n log n) | O(n log n) | O(n log n) | O(1) | In-place | 不稳定 |
| 计数排序 | O(n + k) | O(n + k)  | O(n + k)  | O(k) | Out-place | 稳定 |
| 桶排序 | O(n + k) | O(n + k)  | O(n^2) | O(n + k)  | Out-place | 稳定 |
| 基数排序 | O(n * k) | O(n * k) | O(n * k) | O(n + k)  | Out-place | 稳定 |

 **名词解释**

 n：数据规模  
 k：‘桶’的个数  
 In-place：占用常数内存，不占用额外内存  
 Out-place：占用额外内存  
 稳定性：排序后2个相等键值的顺序和排序之前他们的顺序相同  