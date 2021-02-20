input_str_1 = 'myName'
input_str_2 = 'Myname'
input_str_3 = 'myname'

def find_uppercase_letter_iter(string):
    for i in range(len(string)):
        if string[i].isupper():
            return string[i]
    return 'No uppercase letter found'

def find_uppercase_letter_recur(string, position):
    if position == len(string) - 1:
        return 'No uppercase letter found'
    if string[position].isupper():
        return string[position]
    else:
        return find_uppercase_letter_recur(string, pos+1)
