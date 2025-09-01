# Method 1: Using square brackets

# empty_list = []
# print(empty_list)


# # Method 2: Using the list() constructor
# empty_list2 = list()
# print(empty_list2)


# # List of integers
# numbers= [1,2,3,4,5]
# print(numbers)

# # List of strings
# fruits = ["apple", "banana", "cherry"]
# print(fruits)


# # Mixed data types
# mixed_list = ["Alice", 25, 5.8, True]
# print(mixed_list)

# # From a string (each character becomes an element)
# chars = list("hello")
# print(chars)

# Squares of numbers 0–4
# squares = [x**2 for x in range(5)]
# print(squares)

# # Even numbers between 0–10
# even = [x for x in range(31) if x % 2 == 0]
# print(even)

# Matrix-like list
# matrix = [[1, 2], [3, 4], [5, 6]]
# print(matrix)


# Accessing elements in a nested list
# print(matrix[1])
# print(matrix[0][1])


# order collection
# fruits = ["mango", "orange", "banana"]
# print(fruits)
# print(fruits[0])
# print(fruits[2])

#ALLOWS DUPLICATE
# items = ["rice", "beans", "yam", "rice"]
# print(items)

# # mutable (can be changed)
# numbers = [1, 2, 3]
# numbers[1] = 20
# print(numbers)


# contain different data type
mixed = [10, "Nigeria", 3.14, True]
print(mixed) 


# can be nested
nested_list = [[1, 2], ["a", "b"]]
print(nested_list)
print(nested_list[0][1])

#dynamic size
names = ["Ada"]
names.append("Bola")
names.append("Chidi")
print(names) 
