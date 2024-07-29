// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TwoSum {
    // Takes an array of integers and a target sum as input, then returns an array of two unsigned integers
    function findTwoSum(int256[] memory nums, int256 target) public pure returns (uint256[2] memory) {
        // check if the input array length is within the specified range
        require(nums.length >= 2, "Array length must be greater than 2");
        
        // loop through the array elements except the last one
        for (uint256 i = 0; i < nums.length - 1; i++) {
            // loop from the element next to 'i' to the last element
            for (uint256 j = i + 1; j < nums.length; j++) {
                // check if the sum of elements at indices i and j equals to the target sum
                if (nums[i] + nums[j] == target) {
                    // Return the indices as an array
                    return [i, j]; 
                }
            }
        }
        
        // If no sum is found, revert
        revert("No solution found");
        
    }
}
