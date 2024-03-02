from pymongo import MongoClient
client = MongoClient("mongodb+srv://ldr-cia:ldr.01cialabs@random-app.i7lnkeb.mongodb.net/?retryWrites=true&w=majority")
db =client.choice_db
collection_name = db["choice_collection"]
collection_user = db["user_collection"]
user_db = client.user_db
