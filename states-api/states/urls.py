from django.urls import path
from . import views

urlpatterns=[
    path('states', views.StateList.as_view(), name='state_list'),
    path('states/<int:pk>', views.StateDetail.as_view(), name='state_detail' ),

]