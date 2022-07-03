/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
    
    
    for(var i=0;i<nums.length;i++){
          for(var j=nums.length;j>0 && j>i ;j--){

            if(nums[j]+nums[i]==target){
                  return [i,j];
            }
            else{ 
              num=nums[i];
            }
    
          }
    }

            
    
};