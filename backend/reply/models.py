from django.db import models
from authentication.models import User
from comment.models import Comment
# Create your models here.

class Reply(models.Model):
    # USER THAT IS MAKING THE REPLY
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # COMMENT WE ARE REPLING TOO 
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    text = models.CharField(max_length=300)
