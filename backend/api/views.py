# api/views.py
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Meeting
from django.contrib.auth.models import User
import uuid

@api_view(['POST'])
def create_meeting(request):
    name = request.data['name']
    user, _ = User.objects.get_or_create(username=name)
    room_id = str(uuid.uuid4())[:8]
    Meeting.objects.create(host=user, room_id=room_id)
    return Response({ 'roomId': room_id })

