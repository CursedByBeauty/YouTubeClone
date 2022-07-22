from django.urls import path
from reply import views

urlpatterns = [
    path('<int:pk>/', views.reply_details)
]
