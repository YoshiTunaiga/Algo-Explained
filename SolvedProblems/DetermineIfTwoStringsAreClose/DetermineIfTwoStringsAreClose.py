def closeStrings(word1, word2):
        if len(word1) != len(word2):
            return False

        setWord1 = {word1[0]}
        setWord2 = {word2[0]}

        for char in word1:
            setWord1.add(char)

        for char in word2:
            setWord2.add(char)

        if len(setWord1.difference(setWord2)) > 0:
            return False

        memoCount1 = {}
        memoCount2 = {}

        for char in word1:
            if char not in memoCount1:
                memoCount1[char] = 1
            else:
                memoCount1[char] = memoCount1[char] + 1

        for char in word2:
            if char not in memoCount2:
                memoCount2[char] = 1
            else:
                memoCount2[char] = memoCount2[char] + 1

        list1 = memoCount1.values()
        list2 = memoCount2.values()

        list1.sort()
        list2.sort()
        
        idx = 0
        while idx < len(list1):
            if list1[idx] != list2[idx]:
                return False
            idx = idx + 1

        return True

closeStrings("abbzzca", "babzzcz")