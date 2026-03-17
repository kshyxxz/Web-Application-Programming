from django import forms
from .models import Patient
from .models import Submission
from .models import UserRegistration
from .models import ImageUpload
import re
import datetime

class PatientForm(forms.ModelForm):
    dob = forms.DateField(
        input_formats=['%Y-%m-%d'],
        error_messages={'invalid': 'Date must be in YYYY-MM-DD format.'},
        widget=forms.DateInput(attrs={'type': 'date'})
    )

    class Meta:
        model = Patient
        fields = ['name', 'patient_id', 'mobile', 'gender', 'address', 'dob', 'doctor_name']

    def clean_mobile(self):
        mobile = self.cleaned_data['mobile']
        if not re.match(r'^(98|97|96)\d{8}$', mobile):
            raise forms.ValidationError("Mobile must be 10 digits starting with 98, 97, or 96.")
        return mobile

    def clean_dob(self):
        dob = self.cleaned_data['dob']
        return dob
    
class UserRegForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = UserRegistration
        fields = ['full_name', 'email', 'username', 'password']

    def clean_username(self):
        username = self.cleaned_data['username']
        if not re.match(r'^[a-zA-Z]+\d+$', username):
            raise forms.ValidationError("Username must start with letters followed by numbers.")
        return username

    def clean_password(self):
        password = self.cleaned_data['password']
        if len(password) <= 8:
            raise forms.ValidationError("Password must be more than 8 characters.")
        return password
    
class SubmissionForm(forms.ModelForm):
    class Meta:
        model = Submission
        fields = '__all__'

    def clean_project_file(self):
        f = self.cleaned_data['project_file']
        allowed = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'jpeg']
        ext = f.name.split('.')[-1].lower()
        if ext not in allowed:
            raise forms.ValidationError("Allowed formats: pdf, doc, docx, ppt, pptx, jpeg")
        if f.size > 5 * 1024 * 1024:
            raise forms.ValidationError("File size must be less than 5MB.")
        return f


class ImageUploadForm(forms.ModelForm):
    class Meta:
        model = ImageUpload
        fields = ['image']

    def clean_image(self):
        image = self.cleaned_data['image']
        allowed_ext = ['jpg', 'jpeg', 'png', 'gif']
        ext = image.name.split('.')[-1].lower()
        if ext not in allowed_ext:
            raise forms.ValidationError('Only image files (jpg, jpeg, png, gif) are allowed.')
        if image.size > 2 * 1024 * 1024:
            raise forms.ValidationError('File size must be less than 2MB.')
        return image
    
class AppointmentForm(forms.Form):
    GENDER_CHOICES = [('M', 'Male'), ('F', 'Female'), ('O', 'Other')]
    COUNTRY_CHOICES = [('NP', 'Nepal'), ('IN', 'India'), ('US', 'USA')]
    HOBBY_CHOICES = [('reading', 'Reading'), ('sports', 'Sports'), ('music', 'Music'), ('travel', 'Travel')]

    name = forms.CharField(max_length=100)
    gender = forms.ChoiceField(choices=GENDER_CHOICES)
    hobbies = forms.MultipleChoiceField(choices=HOBBY_CHOICES, widget=forms.CheckboxSelectMultiple)
    appointment_date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}))
    country = forms.ChoiceField(choices=COUNTRY_CHOICES)
    resume = forms.FileField()
    email = forms.EmailField()
    phone = forms.CharField(max_length=15)
    password = forms.CharField(widget=forms.PasswordInput)
    confirm_password = forms.CharField(widget=forms.PasswordInput)

    def clean_appointment_date(self):
        dt = self.cleaned_data['appointment_date']
        if dt < datetime.date.today():
            raise forms.ValidationError("Appointment date cannot be in the past.")
        return dt

    def clean_resume(self):
        f = self.cleaned_data['resume']
        allowed = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png']
        ext = f.name.split('.')[-1].lower()
        if ext not in allowed:
            raise forms.ValidationError("Resume must be pdf, ms-word, or image.")
        if f.size > 2 * 1024 * 1024:
            raise forms.ValidationError("File size must be less than 2MB.")
        return f

    def clean_phone(self):
        phone = self.cleaned_data['phone']
        if not re.match(r'^(98|97|96)\d{8}$', phone):
            raise forms.ValidationError("Phone must be 10 digits starting with 98, 97, or 96.")
        return phone

    def clean_password(self):
        password = self.cleaned_data['password']
        if len(password) < 8:
            raise forms.ValidationError("Password must be at least 8 characters.")
        if not re.search(r'[a-z]', password):
            raise forms.ValidationError("Password must have at least one lowercase letter.")
        if not re.search(r'[A-Z]', password):
            raise forms.ValidationError("Password must have at least one uppercase letter.")
        if not re.search(r'\d', password):
            raise forms.ValidationError("Password must have at least one digit.")
        if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
            raise forms.ValidationError("Password must have at least one special character.")
        return password

    def clean(self):
        cleaned = super().clean()
        pw = cleaned.get('password')
        cpw = cleaned.get('confirm_password')
        if pw and cpw and pw != cpw:
            raise forms.ValidationError("Password and confirm password do not match.")
        return cleaned