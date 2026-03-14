import json

book_information_json = '''
{
	"id": 1,
	"title": "Game of Thrones",
	"author": "George R. R. Martin", 
	"year": 2008, 
	"genres": ["romance", "thrill", "mystery"] 
}
'''

book_information_data = json.loads(book_information_json)
print(book_information_data)

print('--- Book Information ---')
print("Id:", book_information_data["id"])
print("Title:", book_information_data["title"])
print("Author:", book_information_data["author"])
print("Year:", book_information_data["year"])
print("Genres:", book_information_data["genres"])

book_information_data["rating"] = 4.7
book_information_data["genres"].append("Drama")

book_information_json_updated = json.dumps(book_information_data)
print(book_information_json_updated)