list = [[1,2,3],[1,2,5],[2,2,2]]
newlist = []

def sort_by_index(list, index)
	greatestNumber = 0
	for item in list:
		if item[index] > greatestNumber:
			greatestNumber = item[index]

		i = 0
		nextItemIndex = i + 1
		if item[index] < list[nextItemIndex][index]:
			newlist.prepend(item)

			




