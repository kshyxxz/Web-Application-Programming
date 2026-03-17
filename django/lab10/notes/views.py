from django.core.exceptions import ValidationError
from django.shortcuts import get_object_or_404, redirect, render

from .models import Note


def note_list(request):
    notes = Note.objects.all()
    return render(request, 'notes/list.html', {'notes': notes, 'name': 'Your Name'})


def note_create(request):
    error = None
    if request.method == 'POST':
        title = request.POST['title']
        content = request.POST['content']
        try:
            Note.objects.create(title=title, content=content)
            return redirect('note_list')
        except ValidationError as e:
            error = e.message_dict.get('content', [str(e)])[0]
    return render(request, 'notes/form.html', {'name': 'Your Name', 'error': error})


def note_update(request, pk):
    note = get_object_or_404(Note, pk=pk)
    error = None
    if request.method == 'POST':
        note.title = request.POST['title']
        note.content = request.POST['content']
        try:
            note.save()
            return redirect('note_list')
        except ValidationError as e:
            error = e.message_dict.get('content', [str(e)])[0]
    return render(request, 'notes/form.html', {'note': note, 'name': 'Your Name', 'error': error})


def note_delete(request, pk):
    note = get_object_or_404(Note, pk=pk)
    if request.method == 'POST':
        note.delete()
    return redirect('note_list')
