
var arr=[10,20,30,80,60,70,23]
var ub=0;
var lb=0;
var temp;
// var i=0;var j=10
var key=arr[lb];
var flag=true;
Boolean(flag);

function swap(arr,i,j){
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function partition(arr,lb,ub){
    key=arr[Math.floor((lb+ub)/2)],
    i=lb
    j=ub;

    while(i<=j){
        while(arr[i]<key){
            i++
        }

        while(arr[j]>key){
            j--;
        }
        if(i<=j){
            swap(arr,i,j);
            i++;
            j--;
        }
    }
    return i;
}

function quicksort(arr,lb,ub){
    var index;
    if(arr.length > 1){
        index = partition(arr,lb,ub);
        if(lb<index-1){
            quicksort(arr,lb,index-1)
        }
        if(index < ub){
            quicksort(arr,index,ub)
        }
    }
    return arr
}
var sortedarr=quicksort(arr,0,arr.length-1)
console.log(sortedarr)