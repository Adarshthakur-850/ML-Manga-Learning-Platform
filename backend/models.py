from pydantic import BaseModel
from typing import List, Dict, Any, Optional

class Panel(BaseModel):
    type: str # 'text', 'code', 'quiz', 'image'
    content: Optional[str] = None
    question: Optional[str] = None
    options: Optional[List[str]] = None
    answer: Optional[int] = None
    image_url: Optional[str] = None

class Chapter(BaseModel):
    id: str
    title: str
    panels: List[Panel]

class Topic(BaseModel):
    id: str
    title: str
    description: str
    cover_image: Optional[str] = None
    arc: str
    chapters: int

