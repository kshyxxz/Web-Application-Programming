from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('patient/', views.patient_form, name='patient_form'),
    path('register/', views.register, name='register'),
    path('upload/', views.upload_file, name='upload_file'),
    path('submit/', views.submit_project, name='submit_project'),
    path('appointment/', views.appointment, name='appointment'),
]