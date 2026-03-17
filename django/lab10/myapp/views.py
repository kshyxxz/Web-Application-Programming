from django.shortcuts import render, redirect
from .models import Student
from .forms import PatientForm
from .forms import UserRegForm
from .forms import SubmissionForm
from .forms import AppointmentForm
from .forms import ImageUploadForm

def login_view(request):
    error = None
    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '').strip()
        try:
            student = Student.objects.get(username=username, password=password)
            request.session['student_id'] = student.id
            request.session['student_username'] = student.username
            return redirect('dashboard')
        except Student.DoesNotExist:
            error = 'Invalid username/password'
    return render(request, 'login.html', {'error': error, 'name': 'Kshitiz'})

def dashboard(request):
    if not request.session.get('student_id'):
        return redirect('login')
    return render(
        request,
        'dashboard.html',
        {'name': 'Kshitiz', 'student_username': request.session.get('student_username')}
    )


def logout_view(request):
    request.session.flush()
    return redirect('login')

def patient_form(request):
    form = PatientForm()
    if request.method == 'POST':
        form = PatientForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'patient_form.html', {'form': PatientForm(), 'success': True, 'name': 'Kshitiz'})
    return render(request, 'patient_form.html', {'form': form, 'name': 'Kshitiz'})

def register(request):
    form = UserRegForm()
    if request.method == 'POST':
        form = UserRegForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'register.html', {'form': UserRegForm(), 'success': True, 'name': 'Kshitiz'})
    return render(request, 'register.html', {'form': form, 'name': 'Kshitiz'})

def upload_file(request):
    form = ImageUploadForm()
    if request.method == 'POST':
        form = ImageUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return render(request, 'upload.html', {'form': ImageUploadForm(), 'success': True, 'name': 'Kshitiz'})
    return render(request, 'upload.html', {'form': form, 'name': 'Kshitiz'})

def submit_project(request):
    form = SubmissionForm()
    if request.method == 'POST':
        form = SubmissionForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return render(request, 'submit.html', {'form': SubmissionForm(), 'success': True, 'name': 'Kshitiz'})
    return render(request, 'submit.html', {'form': form, 'name': 'Kshitiz'})

def appointment(request):
    form = AppointmentForm()
    if request.method == 'POST':
        form = AppointmentForm(request.POST, request.FILES)
        if form.is_valid():
            return render(request, 'appointment.html', {'form': AppointmentForm(), 'success': True, 'name': 'Kshitiz'})
    return render(request, 'appointment.html', {'form': form, 'name': 'Kshitiz'})