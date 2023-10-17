import pandas as pd
import json

# Read the Excel file
excel_file = "questions.xlsx"
df = pd.read_excel(excel_file)

# Convert to JSON
questions_json = df.to_json(orient='records')

# Write JSON to a file
with open('questions.json', 'w') as json_file:
    json_file.write(questions_json)

