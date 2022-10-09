// trapping rain water leetcode problem, solution version 3

using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        // initial edge case
        int heightSize = height.size();
        if (heightSize < 3) {
            return 0;
        }
        int out = 0;
        int left = 0;
        int leftMax = height.at(left);
        int right = heightSize - 1;
        int rightMax = height.at(right);
        while (left < right) {
            if (height.at(left) > height.at(right)) {
                right--;
                rightMax = max(rightMax, height.at(right));
                out += (rightMax - height.at(right));
            } else {
                left++;
                leftMax = max(leftMax, height.at(left));
                out += (leftMax - height.at(left));
            }
        }
        return out;
    }
};
