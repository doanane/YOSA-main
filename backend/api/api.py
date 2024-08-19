from api.models import *
from rest_framework import viewsets, permissions, generics
from .serializers import *

#Volunteer Viewset
class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = VolunteerSerializer
    
#News Viewset    
class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = NewsSerializer
    
#Contact Us Viewset    
class ContactUsViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = ContactUsSerializer
    
#Donation Viewset
class DonationViewset(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = DonationSerializer