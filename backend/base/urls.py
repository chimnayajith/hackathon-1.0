from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('get-stats/', views.getStats),
    path('get-items/', views.getItems),
    path('get-low-stock/', views.getLowStock),
    path('get-out-of-stock/', views.getOutOfStock),
    path('get-categories/' , views.getCategories),

    path('add-item/' , views.addNewItem),
    path('add-stock/' , views.addStock),
    path('deduct-stock/' , views.deductStock),
]
