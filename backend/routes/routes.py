from fastapi import APIRouter
from models.choices import Choice
from models.users import User
from config.database import collection_name
from config.database import collection_user
from config.database import user_db
from schema.schemas import list_user_serial
from schema.schemas import list_serial
from schema.history_schemas import history_list_serial
from bson import ObjectId
router =APIRouter()

# POST request method for user registration

@router.get("/")
async def home():
    print("this is home")
    return {"this is home"}

@router.post("/register")
async def register_user(user: User):
    existing_user = collection_user.find_one({"email": user.email})
    if existing_user:
        return {"Email already exists. Please use another email."}

    user_data = user.dict()
    result = collection_user.insert_one(user_data)
    user_data["_id"] = result.inserted_id  # Auto-generated ID
    
    # Create a new collection in user_db for the user
    user_collection = user_db[user.email]
    user_collection.insert_one(user_data)
    
    return {"Thank you for registering!"}
# POST request method for choices
@router.post("/choices")
async def post_choice(choice: Choice):
    user_collection = user_db[choice.user_email]

    user_data = user_collection.find_one({"email": choice.user_email})
    
    if not user_data:
        return{"User not found"}

    choice_data = dict(choice)
    choice_data["selected_item"] = choice.selected_item

    user_collection.insert_one(choice_data)
    return choice_data["selected_item"]

@router.get("/history/{user_email}")
async def get_history(user_email: str):
    user_collection = user_db[user_email]

    user_data = user_collection.find_one({"email": user_email})
    
    if not user_data:
        return{"User not found"}

    user_history = list(user_collection.find())

    if len(user_history)<=1:
        return{"No history"}

    user_history = user_history[1:]
    return {"user_email": user_email, "history": history_list_serial(user_history)}
