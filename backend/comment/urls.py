from django.urls import path
from comment import views

urlpatterns = [
    path('', views.get_all_comments),
    path('create/', views.create_a_comment),
    path('update/<int:pk>/', views.update_comment)
]