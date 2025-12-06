from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
#  GenerateTokenForUser in Simple JWT
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import UserSerializer
from .models import UserModel


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = UserModel(
        fullName=request.data["fullName"],
        email=request.data["email"],
        avatar=request.data.get("avatar", ""),
        role=request.data.get("role", "user")
        )   
        user.set_password(request.data["password"])  # hashing
        user.save()
        token = RefreshToken.for_user(user)
        # user.refresh_token = str(token)
        return Response({
            'user':{
                'user': {
                    "id": user.id,
                    "fullName": user.fullName,
                    "email": user.email,
                    "avatar": user.avatar,
                    "role": user.role
                },
                'refresh': str(token),  
                'access': str(token.access_token)
            }
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(email=email, password=password)

    if user is None:
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    token = RefreshToken.for_user(user)
    return Response({
        'message': 'Login successful',
        'user': {
            'id': user.id,
            'fullName': user.fullName,
            'email': user.email,
            'avatar': user.avatar,
            'role': user.role,
            'refresh': str(token),
            'access': str(token.access_token)
        }
    }, status=status.HTTP_200_OK)
