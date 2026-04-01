from fastapi import APIRouter
from models import Chapter, Topic
from typing import List

router = APIRouter()

# Mock data for initial testing
mock_topics = [
    {
        "id": "ml-basics",
        "title": "Machine Learning Basics",
        "description": "The fundamentals of ML.",
        "cover_image": "/covers/ml_basics.jpg",
        "arc": "Introduction",
        "chapters": 3
    },
    {
        "id": "numpy",
        "title": "NumPy Ninja",
        "description": "Master numerical computing in Python.",
        "cover_image": "/covers/numpy.jpg",
        "arc": "Data Foundations",
        "chapters": 5
    },
    {
        "id": "pandas",
        "title": "Pandas Adventure",
        "description": "Learn data manipulation with Pandas.",
        "cover_image": "/covers/pandas.jpg",
        "arc": "Data Foundations",
        "chapters": 6
    },
    {
        "id": "pytorch",
        "title": "Deep Learning with PyTorch",
        "description": "Build deep neural networks.",
        "cover_image": "/covers/pytorch.jpg",
        "arc": "Neural Ascension",
        "chapters": 8
    }
]

mock_chapters = {
    "numpy": [
        {
            "id": "arrays-basics",
            "title": "Arrays Basics",
            "panels": [
                {"type": "text", "content": "Welcome to NumPy! NumPy arrays are the core of fast computation."},
                {"type": "code", "content": "import numpy as np\narr = np.array([1, 2, 3])\nprint(arr)"},
                {"type": "quiz", "question": "What does np.array do?", "options": ["Creates a list", "Creates a NumPy array", "Imports NumPy"], "answer": 1}
            ]
        }
    ]
}

@router.get("/topics", response_model=List[Topic])
async def get_topics():
    return mock_topics

@router.get("/topics/{topic_id}/chapters", response_model=List[Chapter])
async def get_chapters(topic_id: str):
    return mock_chapters.get(topic_id, [])
