from django.db import models

class Student(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.username

class Patient(models.Model):
    GENDER_CHOICES = [('M', 'Male'), ('F', 'Female'), ('O', 'Other')]
    name = models.CharField(max_length=100)
    patient_id = models.CharField(max_length=20)
    mobile = models.CharField(max_length=10)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    address = models.TextField()
    dob = models.DateField()
    doctor_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.patient_id})"
    
class Submission(models.Model):
    tu_reg = models.CharField(max_length=20)
    email = models.EmailField()
    project_file = models.FileField(upload_to='projects/')

    def __str__(self):
        return f"{self.tu_reg} - {self.email}"


class UserRegistration(models.Model):
    full_name = models.CharField(max_length=40)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=60, unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.username


class ImageUpload(models.Model):
    image = models.FileField(upload_to='images/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.image.name
