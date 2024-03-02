from pydantic import BaseModel
from typing import List
import random
class Choice(BaseModel):
   category:str
   items:List[str]
   tags:List[str]
   user_email: str
   
   @property
   def selected_item(self) -> str:
     return random.choice(self.items)


