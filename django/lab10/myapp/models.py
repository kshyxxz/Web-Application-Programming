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
    
class Submission(models.Model):
    tu_reg = models.CharField(max_length=20)
    email = models.EmailField()
    project_file = models.FileField(upload_to='projects/')
