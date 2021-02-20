# Iterative way
def binary_search_iter(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        middle = (high + low) // 2

        if middle == target:
            return True
        elif target < middle:
            return high = middle -1
        else:
            return low = middle + 1

    return False


def binary_search_recur(arr, target, low, high):
    if low > high:
        return False
    else:
        middle = (low + high) // 2

        if middle == target:
            return True
        elif target < middle:
            return binary_search_recur(arr, target, low, middle - 1)
        else:
            return binary_search_recur(arr, target, middle + 1, high)
