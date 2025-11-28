function twoSum(nums, target) {

    const numMap = {}

    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];

        if (complement in numMap && numMap[complement] !== i) {

            return [numMap[complement], i];
        }

        numMap[nums[i]] = i;
        
    }

    return [];

}

const nums = [2, 7, 10, 25];

const target = 35;

const result = twoSum(nums, target);

console.log(result); // Output: [2, 3]