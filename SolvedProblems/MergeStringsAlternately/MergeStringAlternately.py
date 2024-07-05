def mergeAlternately(self, word1, word2):
        mergedString = ""
        word1Array = [x for x in word1]
        word2Array = [x for x in word2]        
        index = 0
        jndex = 0
        while index < len(word1Array) or jndex < len(word2Array):
            if index < len(word1Array):
                mergedString = mergedString + word1Array[index]
                index += 1
            if jndex < len(word2Array):
                mergedString = mergedString + word2Array[jndex]
                jndex += 1
        return mergedString