from django.urls import path
from .views import *
urlpatterns=[
    path('amazon/',amazon),
    path('login/',home),
    path('register/',homw)
]