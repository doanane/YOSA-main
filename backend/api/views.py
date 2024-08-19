from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from .models import *
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
import re
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
from paystackapi.transaction import Transaction
from .serializers import *
from rest_framework import generics
from . import models


# Create your views here.   
class InitiatePaymentView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = DonationSerializer(data=request.data)
        if serializer.is_valid():
            donation = serializer.save()
            transaction = Transaction.initialize(reference=donation.reference, amount=int(donation.amount * 100), email=donation.email)
            return Response(transaction, status=201)
        return Response(serializer.errors, status=400)

class VerifyPaymentView(APIView):
    def get(self, request, *args, **kwargs):
        reference = request.query_params.get('reference')
        transaction = Transaction.verify(reference=reference)
        if transaction['status'] == 'success':
            donation = Donation.objects.get(reference=reference)
            donation.paid = True
            donation.save()
            return Response({'status': 'success', 'data': transaction}, status=200)
        return Response({'status': 'failed', 'data': transaction}, status=400)


class ContactList(generics.ListAPIView):
    queryset = models.ContactUs.objects.all()
    serializer_class = ContactUsSerializer
    
class NewsList(generics.ListAPIView):
    queryset = models.News.objects.all()
    serializer_class = NewsSerializer