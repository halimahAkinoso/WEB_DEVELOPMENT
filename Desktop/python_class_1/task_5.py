# # create and display
# favorite1 = input("Enter favorite Nigerian dishes: ")
# favorite2 = input("Enter favorite Nigerian dishes: ")
# favorite3 = input("Enter favorite Nigerian dishes: ")

# dishes = (favorite1, favorite2, favorite3)
# print(dishes)

# # tupple and input
# friend_1 = input("Enter your best first best friend: ")
# friend_2 = input("Enter your best second best friend: ")
# friend_3 = input("Enter your best third best friend: ")
# friend_4 = input("Enter your best fourth best friend: ")
# friend_5 = input("Enter your best fifth best friend: ")

# friends = (friend_1, friend_2, friend_3, friend_4, friend_5)
# print(friends)
# print(friends[::-1])



# # tupple operations
# # create a tupple of five Nigerian state enter by user
# state1 = input("Enter any nigeria state 1: ")
# state2 = input("Enter any nigeria state 2: ")
# state3 = input("Enter any nigeria state 3: ")
# state4 = input("Enter any nigeria state 4: ")
# state5 = input("Enter any nigeria state 5: ")
# state = (state1, state2, state3, state4, state5)
# print(state)
# # print first and last state
# print(state[0],state[4])
# if ("Lagos" in state):
#     print("yes")
# print(len(state))

# # tupple unpacking


# first_name = input("What is your first name: ")
# age = input("How old are: ")
# favorite_color = input("what is your favorite color: ")
# home_town = input("what is your Home Town: ")

# profile = (first_name, age, favorite_color,home_town )
# print(profile)

# #5 Ask a user to enter three items for their shopping list

# item1 = input("Enter your first item: ")
# item2 = input("Enter your second item: ")
# item3 = input("Enter your third item: ")

# shopping_list = (item1, item2, item3)
# items_list= list(shopping_list)
# # then ask for two more items to add.
# items_list.append(input(("Enter your fourt item: ")))
# items_list.append(input(("Enter your fifth item: "))
# )
# # List back to Tuple
# shopping_list = tuple(items_list)
# print(shopping_list)
# print(" | ".join(shopping_list))
# # print(items_list)


#6 attendance tracker that stores days of the week
days_of_week = ("monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday")
months_of_year = ("january", "february", "march", "april", "june", "july", "august", "september", "octomber", "november", "december")

students_name = input("Enter your name: ")
gender = input("Enter your gender: ")
course_track = input("Enter your course track: ")
current_month_num = int(input("Enter month in number: "))
current_day_num  = int(input("Enter the current day in number: "))
corect_month = months_of_year[current_month_num -1]
corect_day = days_of_week[current_day_num - 1]

print(f"Name:\t{students_name}\nGender:\t{gender}\nTrack:\t{course_track}\nmonth:\t{current_month_num}\nDay:\t{current_day_num}")

print(f"Name\t|Gender\t|courseTrack\t|MonthNumber\t|DayNumber\n{students_name}\t|{gender}\t|{course_track}\t|{current_month_num}\t|{current_day_num}")