# 1] write a function to find the maximum of 3 numbers
def max_num(a,b,c):
    return max([a,b,c])

print(max_num(2,50,95))
print(max_num(900,510,60))
print(max_num(23,-5930,989))


print('XXXXXXXXXXXXXXXXXX')
# 2] write a function to multiply all the numbers in a list
def mult_list(lst):
    if len(lst) ==0:
        return 0
    prod = lst[0]
    if len(lst) > 1:
        for i in lst[1:]:
            prod = prod * i
    return prod

print(mult_list([1,2,3]))
print(mult_list([]))
print(mult_list([15]))


print('XXXXXXXXXXXXXXXXXX')
# 3] write a function to reverse a string
def rev_string(my_string):
    return my_string[::-1]

print(rev_string(' '))
print(rev_string('apple'))
print(rev_string('hello my name is bb'))


print('XXXXXXXXXXXXXXXXXX')
# 4] write a function to check whether a number falls in a given range
def num_within_range(x,a,b):
    return x in range(a,b+1)

print(num_within_range(3,2,4))
print(num_within_range(8,12,24))
print(num_within_range(10,2,50))


print('XXXXXXXXXXXXXXXXXX')
# 5] write a function that prints out the first n rows of pascals traingle
triangle = [[1], [1,1]]
def pascal(n):
    if n < 1:
        print('invalid number of rows')
    elif n == 1:
        print(triangle[0])
    else:
        row_number = 2
        while len(triangle) < n:
            row = []
            row_prev = triangle[row_number - 1]
            length = len(row_prev) + 1
            for i in range(length):
                if i == 0:
                    row.append(1)
                elif i > 0 and i < length-1:
                    row.append(triangle[row_number - 1][i - 1]+triangle[row_number - 1][i])
                else:
                    row.append(1)
            triangle.append(row)
            row_number += 1
        for row in triangle:
            print(row)

pascal(2)
pascal(5)