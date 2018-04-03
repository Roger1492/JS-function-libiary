/**
 * @description 二分法查找
 * @param {data,dest,start,end} data全部数组，dest目标, start开始位置, end位置
 * @return {Number} 要查找的东西在数组中的位置
 */

// 递归实现
function binarySearch(data,dest,start,end){
    var start = start || 0;
        end = end || data.length - 1;
        mid = Math.round((start + end) / 2);
    if(data[mid] === dest){
        return mid;
    }
    if(dest < data[mid]){
        return binarySearch(data, dest, 0, mid-1);
    } else {
        return binarySearch(data, dest, mid+1, end);
    }
    return false;
}

// 非递归实现
function binarySearch(data, dest){
    var start = 0;
        end = data.length - 1;
    while(start <= end){
        var mid = Math.floor((start + end) / 2);
        if(data[mid] == dest){
            return mid;
        }
        if(dest > data[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}
var arr = [-34, 1, 3, 4, 5, 8, 34, 45, 65, 87];
console.log(binarySearch(arr,3))