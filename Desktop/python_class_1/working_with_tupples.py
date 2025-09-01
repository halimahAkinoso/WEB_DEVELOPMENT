# Example 1: tupple with multiple itemsfruit
# fruits = ("apple", "banana", "cherry")
# print(fruits)


# # without parenthesis
# numbers = 1, 2, 3
# print(numbers)

# # Single items tupple must include a comma
single_item = ("apple",)
print(single_item)
print(type(single_item))

# Using tupple() constructor 
fruits_list =  ["apple", "banana", "cherry"]
fruits_tupple = tuple(fruits_list)
print(fruits_tupple)

# Ordered
colors = ("red", "green", "blue")
print(colors[1]) 


# # Immutable ( uncomment and run. This will cause an error)
# colors[1] = "yellow"  

# Allow duplicates
# numbers = (1, 2, 2, 1,3)
# print(numbers) 

# # Mixed data types
# mixed = ("apple", 3, True, 5.6)
# print(mixed)  


# # Nested tuples
# nested = (("a", "b"), (1, 2))
# print(nested)  



# 1. Indexing
# fruits = ("apple", "banana", "cherry")
# print(fruits[1])   
# print(fruits[-1]) 



# # 2. Slicing
# print(fruits[0:2])   # ('apple', 'banana')
# print(fruits[::-1])  # ('cherry', 'banana', 'apple')


# # 3. Concatenation
# tuple1 = (1, 2)
# tuple2 = (3, 4)
# result = tuple1 + tuple2
# print(result)


# # 4. Repetition
# nums = (1, 2)
# print(nums * 3) 


# # 5. Membership
# fruits = ("apple", "banana", "cherry")
# print("banana" in fruits)  
# print("grape" not in fruits)  


# # 6. Iteration
# for fruit in fruits:
#     print(fruit)


# # dont count() and dot index()
# numbers = (1, 2, 2, 3, 4)
# print(numbers.count(2)) 
# print(numbers.index(3))




# person = ("John",25,"Nigeria")
# name,age,country = person
# print(name)
# print(age)
# print(country)


# Tupple to List
t = (1, 2, 3)
lst = list(t)#convert tupple to list
lst.append(4)
print(lst)



# List back to Tuple
t = tuple(lst)
print(t)  




nums = (4, 1, 7, 3)

print(len(nums))   
print(max(nums))   
print(min(nums))   
print(sum(nums))   