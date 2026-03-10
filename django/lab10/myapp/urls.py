from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('patient/', views.patient_form, name='patient_form'),
    path('register/', views.register, name='register'),
    path('upload/', views.upload_file, name='upload_file'),
    path('submit/', views.submit_project, name='submit_project'),
    path('notes/', views.note_list, name='note_list'),
    path('notes/create/', views.note_create, name='note_create'),
    path('notes/update/<int:pk>/', views.note_update, name='note_update'),
    path('notes/delete/<int:pk>/', views.note_delete, name='note_delete'),
    path('appointment/', views.appointment, name='appointment'),
]