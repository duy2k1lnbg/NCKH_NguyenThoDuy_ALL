from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('WEB_SERVER/', WEB_SERVER),
    path('On_Click/', On_Click),
    path('Off_Click/', Off_Click),
    path('update/<str:id>', updade),
]