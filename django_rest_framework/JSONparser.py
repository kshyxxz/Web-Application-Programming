# json to python

import json

json_string = '[{"name": "John", "age": 30, "city": "New York"}, {"name": "Jane", "age": 25, "city": "Los Angeles"}]'
data = json.loads(json_string)

print(data)