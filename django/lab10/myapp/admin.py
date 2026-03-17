from django.contrib import admin
from .models import Student, Patient, Submission, UserRegistration, ImageUpload

admin.site.register(Student)
admin.site.register(Patient)
admin.site.register(Submission)
admin.site.register(UserRegistration)
admin.site.register(ImageUpload)
