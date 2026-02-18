from django.shortcuts import render
from .models import Todo

def home(request):
	tasks = Todo.objects.all()
	return render(request, 'list_app/home.html', {'tasks': tasks})