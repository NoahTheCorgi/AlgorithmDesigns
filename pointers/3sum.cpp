// source:: leetcode and neetcode + from personal practices and explorations

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        // O(nlogn)
        // sorting an vector in cpp::
        sort(nums.begin(), nums.end());
        // the first element will be chosen
        // and then we can use the two sum method linearly
        // ultimately it will be O(nlog) since sorting takes that much
        vector<vector<int>> output = vector<vector<int>>();
        int i = 0;
        while (i < nums.size()-2) {
            // helper loop::
            while (i < nums.size()-2) {
                // this loops makes sure that the starting fixed first
                // ... is at the least repeated spot...
                if (i == 0) {
                    break;
                }
                else {
  [<35;30;20M                  if (nums.at(i-1) != nums.at(i)) {
                        break;
                    }
                    else {
                        i++;
                    }
                }
            }
            int left = i+1;
            int right = nums.size() - 1;
            // now two sum in linear time
            while (left < right) {
                int threeSumValue = nums.at(i) + nums.at(left) + nums.at(right);
                if (threeSumValue == 0) {
                    vector<int> newElement = vector<int>();
                    newElement.push_back(nums.at(i));
                    newElement.push_back(nums.at(left));
                    newElement.push_back(nums.at(right));
                    output.push_back(newElement);
                    // how to increment from here? ::
                    // small bug here::
                    left++;
                    while (left<right && nums.at(left-1)==nums.at(left)) {
                        left++;
                    }
                }
                else if (threeSumValue < 0) {
                    left++;
                }
                else { // threeSumValue > 0
                    right--;
                }
            }
            i++;
        }
        return output;
    }
};
