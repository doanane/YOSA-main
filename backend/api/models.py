from django.db import models
from django.contrib import admin, messages
from django.utils.translation import ngettext
from phonenumber_field.modelfields import PhoneNumberField
from django.core.mail import send_mail, EmailMessage
from markdownx.models import MarkdownxField


# Create your models here.
class Volunteer(models.Model):
    first_name = models.CharField(max_length=30, null=False)
    last_name = models.CharField(max_length=100, null=False)
    email_address = models.EmailField(max_length= 200, null=False, unique=True)
    gender = models.CharField(max_length=6, default="Other", choices=[
        ("M", "Male"),
        ("F", "Female"),
        ("O", "Other"),
    ])
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.email_address
    

class ContactUs(models.Model):
    first_name = models.CharField(max_length=30, null=False)
    last_name = models.CharField(max_length=30, null=False)
    email = models.EmailField(max_length=200, null=False)
    phone_number =PhoneNumberField(blank=True)
    message = models.TextField(max_length=500, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.email
    
       

class Donation(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=30, null=False)
    last_name = models.CharField(max_length=30, null=False)
    email_address = models.EmailField(max_length=30, null=False)
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    verified = models.BooleanField(default=False)
    reference = models.CharField(max_length=100, unique=True, default="YOSA")

    def __str__(self):
        return self.reference

STATUS_CHOICES ={
    "d": "Draft",
    "p": "Published",
    "w": "Withdrawn"
}

    
class News(models.Model):
    title = models.CharField(max_length=50, null=False)
    body = MarkdownxField()
    author =models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='news_images/')
    status =models.CharField(max_length= 1, choices=STATUS_CHOICES)

    def __str__(self):
        return self.title
    
    
@admin.action(description="Mark selected stories as published")
def make_published(modeladmin, request, queryset):
    queryset.update(status="p")


class NewsAdmin(admin.ModelAdmin):
    list_display = ("title", "status", "author",)
    search_fields = ("title", "author")
    ordering = ["title"]
    actions = [make_published]

    def message_user(self, request, message, level):
        messages.info(request, message)
        
class VolunteerAdmin(admin.ModelAdmin):
    list_display = ("last_name", "first_name", "gender")


    

  