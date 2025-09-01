# # 1. Using curly braces
# fruits = {"apple", "banana", "mango"}
# print(fruits)

# # 2. Using the set() constructor list inside set operator
# numbers = set([1, 2, 3, 4])
# print(numbers)

# # 3. Creating an empty set (must use set(), not {})
# empty_set = set()
# print(empty_set)

# # 4. From a string (duplicates removed automatically)
# letters = set("mississippi")
# print(letters)


# colors = {"red", "blue"}
# colors.add("green")
# print(colors)

# colors.remove("blue")   # Removes an element, raises error if not found
# colors.discard("yellow") # Removes if found, no error if missing
# print(colors)

# pop an element
colors = {"red", "blue", "green"}
removed = colors.pop()
print("Removed:", removed)
print("Remaining:", colors)

# clear a set
colors.clear()
print(colors)


# mathematics operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# 1. Union
print(set1 | set2)
print(set1.union(set2))

# 2. Intersection
print(set1 & set2)
print(set1.intersection(set2))


# 3. Difference
print(set1 - set2)
print(set1.difference(set2))


# 4. Symmetric Difference
print(set1 ^ set2)
print(set1.symmetric_difference(set2))



# working with sets 
# Collecting unique visitors to an event
visitors = set()

# Adding visitors
visitors.add("Chinedu")
visitors.add("Aisha")
visitors.add("Chinedu") # Duplicate, ignored automatically
print("Visitors:", visitors)

# Checking if a visitor attended
# (Dont worry if you can't figure this part out yet. We will discuss it properly later in the course.)

name = "Aisha"
if name in visitors:
    print(f"{name} attended the event.")
else:
    print(f"{name} did not attend the event.")