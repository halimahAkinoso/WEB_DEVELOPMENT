# # concatination
# list1 = [1, 2, 3]
# list2 = [4, 5]
# result = list1 + list2
# print(result)  

# Repeatition
# nums = [1, 2]
# repeated = nums * 3
# print(repeated) 


# indexing
# fruits = ["apple", "banana", "cherry"]
# print(fruits[0])  
# print(fruits[-1])


# slicing
numbers = [0, 1, 2, 3, 4, 5]
print(numbers[1:4])   
print(numbers[:3])    
print(numbers[3:])    
print(numbers[::2])

# # membership
# colors = ["red", "green", "blue"]
# print("green" in colors)  
# print("yellow" not in colors)  


# length len()

# items = ["pen", "book", "laptop"]
# print(len(items))  



# min and max: returns the smallest or largest element

# nums = [5, 2, 9, 1]
# print(min(nums)) 
# print(max(nums))  



# adds all numerical element
# numbers = [1, 2, 3, 4]
# print(sum(numbers))  


# create a list in a single line
# This should be familiar already, right?

squares = [x**2 for x in range(5)]
print(squares)  


# create a duplicate
a = [1, 2, 3]
b = a.copy()  
print(b)  