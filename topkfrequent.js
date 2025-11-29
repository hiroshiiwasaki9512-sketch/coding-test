function topKFrequent(nums, k) {
    const frequentMap = new Map();
    for( num in nums){
        if (frequentMap.has(num)){
            frequentMap.set(num, frequentMap.get(num)+1)
        }
    }
}