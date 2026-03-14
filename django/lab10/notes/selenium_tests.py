from django.test import LiveServerTestCase
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

class NotesSeleniumTest(LiveServerTestCase):

    def setUp(self):
        self.browser = webdriver.Chrome()

    def tearDown(self):
        self.browser.quit()

    def test_notes_can_be_created(self):
        # Open the notes create page
        self.browser.get(self.live_server_url + "/notes/create/")

        # Fill title
        title_input = self.browser.find_element(By.NAME, "title")
        title_input.send_keys("Test Note")

        # Fill description
        desc_input = self.browser.find_element(By.NAME, "content")
        desc_input.send_keys("This is a valid description")

        # Submit form
        submit = self.browser.find_element(By.TAG_NAME, "button")
        submit.click()

        time.sleep(2)

        # Check if note appears
        body = self.browser.find_element(By.TAG_NAME, "body").text
        self.assertIn("Test Note", body)

    def test_error_occurs_if_description_is_less_than_10_chars_long(self):
        self.browser.get(self.live_server_url + "/notes/create/")

        title_input = self.browser.find_element(By.NAME, "title")
        title_input.send_keys("Short Note")

        desc_input = self.browser.find_element(By.NAME, "content")
        desc_input.send_keys("short")

        submit = self.browser.find_element(By.TAG_NAME, "button")
        submit.click()

        time.sleep(2)

        body = self.browser.find_element(By.TAG_NAME, "body").text
        self.assertIn("Description must be at least 10 characters", body)