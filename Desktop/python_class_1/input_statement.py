# basic usage of input()
name = input("Enter your name: ")
print("Hello,", name)
print("As salam alaykum", name)


# Convert input to integer
age = int(input("Enter your age: "))
print(f"You will be {age + 1} years old next year.")



# Calculator using input
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
sum_result = num1 + num2
print(f"The sum of {num1} and {num2} is {sum_result}.")


# code to take order from the customer and let the customer know total cost of the order
# the following steps will be taking
# 1. welcome message to welcome the Customer
# 2. take the Customername 
# 3. take order

# welcome message
print("WELCOME TO FLOUR FRIEND HUB")
# Take customer name
Customer = input("Enter your name:  ")
# take customer 
print("What will you like to order?. ", Customer)
