var removeElement = function(nums, val) {
    new_nums = nums.filter(
        (num) => {
            return num !== val;
        }
    )
    for(let i = 0; i < new_nums.length; i++) {
        nums[i] = new_nums[i];
    }
    return new_nums.length;
}; 