# source:: leetcode and neetcode + from personal practices and explorations
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # some really powerful tools...
        out = collections.defaultdict(list)
        for string in strs:
            count = [0] * 26 # 26 tuple list
            for character in string:
                count[ord(character) - ord("a")] += 1 # ord() returns the unicode corresponding
            out[tuple(count)].append(string) # tuple casting and using list as a key
        return out.values()
        