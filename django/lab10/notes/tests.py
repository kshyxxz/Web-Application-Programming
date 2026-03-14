from django.core.exceptions import ValidationError
from django.test import TestCase

from .models import Note


class NotesTests(TestCase):
    def setUp(self):
        self.note = Note.objects.create(title="Test Note", content="This is a test note.")

    def test_notes_can_be_created(self):
        note = Note.objects.create(
            title="Another Note",
            content="This is another valid note.",
        )

        self.assertEqual(Note.objects.count(), 2)
        self.assertEqual(note.title, "Another Note")

    def test_error_occurs_if_description_is_less_than_10_chars_long(self):
        with self.assertRaises(ValidationError):
            Note.objects.create(title="Short Note", content="Too short")
