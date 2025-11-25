from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSerializer
from .models import UserModel


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = UserModel.objects.filter(email=email, password=password).first()
    if user:
        return Response({'message': 'Login successful', 'user': {
            'id': user.id,
            'fullName': user.fullName,
            'email': user.email,
            'avatar': user.avatar,
            'role': user.role
        
        }}, status=status.HTTP_200_OK)
    return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)