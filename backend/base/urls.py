from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getLatestBlock),
    path('get-stats/', views.getStats),
]
