from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_a_comment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

        
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_comment(request, pk):
    # comment = Comment.objects.filter(id = pk)
    comment = get_object_or_404(Comment, pk = pk)
    serializer = CommentSerializer(comment, data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)


@api_view(['PATCH'])
def likes(request, pk):
    comment = get_object_or_404(Comment, pk = pk)
    comment.likes += 1
    serializer = CommentSerializer(comment, data=request.data, partial =True)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['PATCH'])
def dislikes(request, pk):
    comment = get_object_or_404(Comment, pk = pk)
    comment.dislikes += 1
    serializer = CommentSerializer(comment, data=request.data, partial =True)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)