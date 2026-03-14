# python to json

import json

data = [{"name": "John", "age": 30, "city": "New York"}, {"name": "Jane", "age": 25, "city": "Los Angeles"}]
json_string = json.dumps(data)

print(json_string)