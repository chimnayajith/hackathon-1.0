from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getLatestBlock),
    path('get-stats/', views.getStats),
    path('get-items/', views.getItems),
    path('get-low-stock/', views.getLowStock),
    path('get-out-of-stock/', views.getOutOfStock),

]
