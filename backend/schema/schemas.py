def user_serial(user) -> dict:
    return {
        "id": str(user["_id"]),
        "username": user["username"],
        "email": user["email"]
    }

def list_user_serial(users) -> list:
    return [user_serial(user) for user in users]

def individual_serial(choice)->dict:
   return{
    "id": str(choice["_id"]),
    "email":choice["email"],
    "category":choice["category"],
    "items":choice["items"],
    "tags":choice["tags"],
    "selected_item":choice["selected_item"]
}
def list_serial(choices)-> list:
   return[individual_serial(choice) for choice in choices]
