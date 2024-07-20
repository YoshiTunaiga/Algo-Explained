def uniqueOccurrences(arr):
        result = True
        memo = {}

        for int in arr:
            if int not in memo:
                memo[int] = 1
            else:
                memo[int] = memo[int] + 1

        memoValues = memo.values()
        idx = len(memoValues)

        while idx > 0:
            num = memoValues.pop()
            if num in memoValues:
                return False
            idx = idx - 1

        return result

uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])