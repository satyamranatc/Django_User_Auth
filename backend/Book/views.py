from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def BookList(request):
    return Response({'message': [
        {
            'id': 1,
            'name': 'Book 1',
            'author': 'Author 1',
            'price': 10.99
        },
        {
            'id': 2,
            'name': 'Book 2',
            'author': 'Author 2',
            'price': 19.99
        }
    ]})
