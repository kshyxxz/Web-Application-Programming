from django.shortcuts import render, redirect, get_object_or_404
from .models import Todo
from .forms import TodoForm

def home(request):
    return redirect('list_app:todo_list')

def todo_list(request):
	tasks = Todo.objects.all().order_by('-created_at')
	return render(request, 'list_app/list.html', {'tasks': tasks})

def todo_detail(request, pk):
	task = get_object_or_404(Todo, pk=pk)
	return render(request, 'list_app/detail.html', {'task': task})

def todo_create(request):
	if request.method == 'POST':
		form = TodoForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('list_app:todo_list')
	else:
		form = TodoForm()
	return render(request, 'list_app/form.html', {'form': form})

def todo_update(request, pk):
	task = get_object_or_404(Todo, pk=pk)
	if request.method == 'POST':
		form = TodoForm(request.POST, instance=task)
		if form.is_valid():
			form.save()
			return redirect('list_app:todo_list')
	else:
		form = TodoForm(instance=task)
	return render(request, 'list_app/form.html', {'form': form, 'task': task})

def todo_delete(request, pk):
	task = get_object_or_404(Todo, pk=pk)
	if request.method == 'POST':
		task.delete()
		return redirect('list_app:todo_list')
	return render(request, 'list_app/confirm_delete.html', {'task': task})