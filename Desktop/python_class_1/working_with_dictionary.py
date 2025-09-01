#Creating Dictionary
# 1. Using curly braces
# student = {
#     "name": "Ada",
#     "age": 20,
#     "course": "Computer Science"
# }
# print(student)


# # Using the dict() constructor
# student_info = dict(name="John", age =25, course="Maths")
# print(student_info)

# # 3. Empty dictionary
# empty_dict = {}
# print(empty_dict)


# Create a dictionary of numbers and their squares
# squares = {x: x**2 for x in range(1, 10)}
# print(squares)


# With Condition

# Dictionary of even numbers and their cubes
# evens_cube = {x: x**3 for x in range(1, 10) if x % 2 == 0}
# print(evens_cube)


#  From Existing Dictionary

# students = {"Ada": 85, "John": 40, "Musa": 65}

# # Filter students who passed (score >= 50)

# print(students)

# passed_students = {name: score for name, score in students.items() if score >= 50}
# print(passed_students)

# Using String Keys

# names = ["Ada", "John", "Musa"]
# lengths = {name: len(name) for name in names}
# print(lengths)


# Accessing dictionary items
# # Define a dictionary
# student = {"name": "Ada", "age": 20, "course": "Computer Science"}
# print(student)

# # Using key
# print(student["name"])

# # Using get() method (avoids error if key is missing)
# print(student.get("age"))
# print(student.get("course"))
# print(student.get("grade", "Not Found"))

# # Modifying dictionaries
# student["age"] = 21 # change value
# student["grade"] = "A" # add new key-value pair
# print(student)

# # Removing Items from dictionary
# # 1.  Using pop()
# student.pop("grade")

# # 2. Using popitem() - removes last inserted key-value
# student.popitem()

# # 3. Using del keyword
# del student["course"]

# # 4. Using clear() - removes all items
# student.clear()

# print(student)

# Dictionary Methods
# dot keys(), dot values(), dot items(), dot update()


# person = {"name": "Emeka", "age": 30}

# # 1. keys()
# print(person.keys())

# #2. values()
# print(person.values())

# # 3. items()
# print(person.items())

# # 4. update()
# person.update({"age": 31, "city": "Lagos"})
# print(person)

# Nested Dictionaries
# students = {
#     "student1": {"name": "Ada", "age": 20},
#     "student2": {"name": "John", "age": 22}
# }

# print(students["student1"]["name"])  # Access nested data

# Looping through dictionaries
# Loop through keys
# for key in student:
#     print(key)

#     # Loop through values
# for value in student.values():
#     print(value)

#     # Loop through key-value pairs
# for key, value in student.items():
#     print(f"{key}: {value}")

    # Storing a student's biodata
# student = {
#     "name": "Chinedu",
#     "age": 19,
#     "department": "Engineering",
#     "subjects": ["Maths", "Physics", "Chemistry"],
#     "is_full_time": True
# }

# print(f"Name: {student['name']}")
# print(f"Subjects: {', '.join(student['subjects'])}")

# How to add  key-value pairs to an empty dictionary
# Create an empty dictionary
student = {}

# Add key-value pairs to it
# student["name"] = "Goodness"
# student["Interest"] = "AI"
# student["Track"] = "AI_Dev"

# print(student)

# # List of dictionaries - Each student has their own dictionary
# students = [
#     {"Name": "John", "Interest": "AI", "Track": "AI_Dev"},
#     {"Name": "Mary", "Interest": "Cloud Computing", "Track": "AI_Eng"},
#     {"Name": "Paul", "Interest": "Cyber Security", "Track": "AI_Dev"}
# ]

# print(students[0]["Name"])   
# print(students[1]["Track"])  


# Dictionary of dictionaries - Each student is keyed by their ID
# students = {
#   "AI010"   :  {"Name": "John", "Interest": "AI", "Track": "AI_Dev"},
#   "AI020" :  {"Name": "Mary", "Interest": "Cloud Computing", "Track": "AI_Eng"},
#   "AI030"  :  {"Name": "Paul", "Interest": "Cyber Security", "Track": "AI_Dev"}
# }
# print(students)
# print(students["AI020"]["Name"])   
# print(students["AI030"]["Track"])

# Dictionary of lists - Each subject stores a list of scores
scores = {
    "python": [85, 78, 92],
    "pandas": [88, 74, 90],
    "Scikit-learn": [80, 95, 87]
}

print(scores["python"])    
print(scores["pandas"][1])  
