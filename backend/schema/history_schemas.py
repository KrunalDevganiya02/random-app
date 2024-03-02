def history_individual_serial(choice)->dict:
   return{
    "category":choice["category"],
    "items":choice["items"],
    "tags":choice["tags"],
    "selected_item":choice["selected_item"]
}
def history_list_serial(choices)-> list:
   return[history_individual_serial(choice) for choice in choices]

