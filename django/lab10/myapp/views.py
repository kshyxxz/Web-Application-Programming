from django.shortcuts import render, redirect
from .models import Student
from .forms import PatientForm
from .forms import UserRegForm
from .forms import SubmissionForm
from .models import Note
from .forms import AppointmentForm
from django.shortcuts import get_object_or_404

def login_view(request):
    error = None
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        try:
            student = Student.objects.get(username=username, password=password)
            return redirect('dashboard')
        except Student.DoesNotExist:
            error = 'Invalid username/password'
    return render(request, 'login.html', {'error': error, 'name': 'Your Name'})

def dashboard(request):
    return render(request, 'dashboard.html', {'name': 'Your Name'})

def patient_form(request):
    form = PatientForm()
    if request.method == 'POST':
        form = PatientForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'patient_form.html', {'form': PatientForm(), 'success': True, 'name': 'Your Name'})
    return render(request, 'patient_form.html', {'form': form, 'name': 'Your Name'})

def register(request):
    form = UserRegForm()
    if request.method == 'POST':
        form = UserRegForm(request.POST)
        if form.is_valid():
            # Save to DB or session as needed
            return render(request, 'register.html', {'form': UserRegForm(), 'success': True, 'name': 'Your Name'})
    return render(request, 'register.html', {'form': form, 'name': 'Your Name'})

def upload_file(request):
    error = None
    success = False
    if request.method == 'POST' and request.FILES.get('file'):
        f = request.FILES['file']
        allowed_ext = ['jpg', 'jpeg', 'png', 'gif']
        ext = f.name.split('.')[-1].lower()
        if ext not in allowed_ext:
            error = "Only image files (jpg, jpeg, png, gif) are allowed."
        elif f.size > 2 * 1024 * 1024:
            error = "File size must be less than 2MB."
        else:
            success = True
    return render(request, 'upload.html', {'error': error, 'success': success, 'name': 'Your Name'})

def submit_project(request):
    form = SubmissionForm()
    if request.method == 'POST':
        form = SubmissionForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return render(request, 'submit.html', {'form': SubmissionForm(), 'success': True, 'name': 'Your Name'})
    return render(request, 'submit.html', {'form': form, 'name': 'Your Name'})

def note_list(request):
    notes = Note.objects.all()
    return render(request, 'notes/list.html', {'notes': notes, 'name': 'Your Name'})

def note_create(request):
    if request.method == 'POST':
        title = request.POST['title']
        content = request.POST['content']
        Note.objects.create(title=title, content=content)
        return redirect('note_list')
    return render(request, 'notes/form.html', {'name': 'Your Name'})

def note_update(request, pk):
    note = get_object_or_404(Note, pk=pk)
    if request.method == 'POST':
        note.title = request.POST['title']
        note.content = request.POST['content']
        note.save()
        return redirect('note_list')
    return render(request, 'notes/form.html', {'note': note, 'name': 'Your Name'})

def note_delete(request, pk):
    note = get_object_or_404(Note, pk=pk)
    note.delete()
    return redirect('note_list')

def appointment(request):
    form = AppointmentForm()
    if request.method == 'POST':
        form = AppointmentForm(request.POST, request.FILES)
        if form.is_valid():
            return render(request, 'appointment.html', {'form': AppointmentForm(), 'success': True, 'name': 'Your Name'})
    return render(request, 'appointment.html', {'form': form, 'name': 'Your Name'})