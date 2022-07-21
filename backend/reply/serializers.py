from pyexpat import model
from rest_framework import serializers
from .models import Reply

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id', 'user', 'user_id', 'comment', 'comment_id', 'text']
        depth = 1
    user_id = serializers.IntegerField(write_only = True)
    comment_id = serializers.IntegerField(write_only = True)
