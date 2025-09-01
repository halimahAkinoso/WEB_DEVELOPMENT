# Collect basic info
expectant_mothers_name = input("Please enter the patient's full name: ")
age =int(input("Please enter expectant mother's age: "))
gender = "female"
height = int(input("Please enter the patient's height in cm: "))
weight = float(input("Please enter the patient's weight in kg: "))

# Medical information 
reg_med_check = ("Blood pressure", "Blood sugar", "Cholestrol",)
result1 = str(input(f"Enter the result for {reg_med_check[0]}"))
result2 = str(input(f"Enter the result for {reg_med_check[1]}"))
result3 = str(input(f"Enter the result for {reg_med_check[-1]}"))

# Medical status
current_conditon = "Gravid (currently Pregnant)"
delivery_date = str(input(f"Enter the expected delivery date for {current_conditon}:"))

# Husband's details
spouse_name = input("Please enter spouse name: ")
spouse_phone = input("Please enter spouse phone no: ")

# Pre-existing Medical condtions
pre_ex_mc = input("Enter atleast three pre-existing medical conditions (comma separated): ")
pre_ex_mc_set = set(p.strip() for p in pre_ex_mc.split(","))


# Patient's dictionary
patient_file = {
    "Basic Info": {
        "Name": expectant_mothers_name.title(),
        "Age": age,
        "Gender": gender.capitalize(),
        "Height": height,
        "Weight": weight
    },
    "Medical checks": {reg_med_check[0]: result1, reg_med_check[1]:result2, reg_med_check[-1]:result3},
    "Current Condition": {current_conditon: delivery_date},
    "Husband": {
        "Name": spouse_name.title(),
        "Phone": spouse_phone
    },
    "Pre-existing medical conditions": list(pre_ex_mc_set)
}

# Data 
patient_file["Basic Info"]["Initials"] = "".join([e[0] for e in expectant_mothers_name.split()]).upper()
patient_file["Pre-existing medical conditions count"] = len(pre_ex_mc_set)

# Output
print("\n-----------------PATIENT FILE----------------------")
print(f"Name:\t\t{patient_file['Basic Info']['Name']}")
print(f"Initials:\t{patient_file['Basic Info']['Initials']}")
print(f"Age:\t\t{patient_file['Basic Info']['Age']}")
print(f"Gender:\t\t{patient_file['Basic Info']['Gender']}")
print(f"Height:\t\t{patient_file['Basic Info']['Height']}")
print(f"Weight:\t\t{patient_file['Basic Info']['Weight']}")
print(f"Current:\t{patient_file['Current Condition']}")
print("\n-------------------MEDICAL TESTS--------------------")
print(patient_file["Medical checks"])
print("\n-------------------CURRENT CONDITION-------------------")
print(patient_file["Current Condition"])
print("\n-------------------HUSBAND INFO--------------------")
print(patient_file["Husband"])
print("\n---------------Pre-existing medical conditions-----------")
print(patient_file["Pre-existing medical conditions"])
print(f"\nTotal preg complications:\t{patient_file['Pre-existing medical conditions count']}")