#  api/models.py
from django.db import models
from django.contrib.auth.models import User

class Meeting(models.Model):
    host = models.ForeignKey(User, on_delete=models.CASCADE)
    room_id = models.CharField(max_length=50, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Message(models.Model):
    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
