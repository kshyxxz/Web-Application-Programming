from django.core.exceptions import ValidationError
from django.db import models


class Note(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'myapp_note'

    def clean(self):
        super().clean()
        if len(self.content.strip()) < 10:
            raise ValidationError({'content': 'Description must be at least 10 characters long.'})

    def save(self, *args, **kwargs):
        self.full_clean()
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.title
