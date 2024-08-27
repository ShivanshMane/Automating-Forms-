# forms_app/views.py

from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import generics
from .models import EndLinePackageQuality, ProductionEndOfShiftCount, SanitationChecklist, JarsLidsTracking
from .serializers import EndLinePackageQualitySerializer, ProductionEndOfShiftCountSerializer, SanitationChecklistSerializer, JarsLidsTrackingSerializer
from django.template.loader import render_to_string
import pdfkit
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        print(f"Login attempt with data: {request.data}")
        return super().post(request, *args, **kwargs)

def home(request):
    return render(request, 'index.html')  # Render the React index.html file

def endline_package_quality_view(request):
    return render(request, 'endline_package_quality_pdf.html')

def production_end_of_shift_count_view(request):
    return render(request, 'production_end_of_shift_count_pdf.html')

class SanitationChecklistView(generics.ListCreateAPIView):
    queryset = SanitationChecklist.objects.all()
    serializer_class = SanitationChecklistSerializer

class EndLinePackageQualityView(generics.ListCreateAPIView):
    queryset = EndLinePackageQuality.objects.all()
    serializer_class = EndLinePackageQualitySerializer

class ProductionEndOfShiftCountView(generics.ListCreateAPIView):
    queryset = ProductionEndOfShiftCount.objects.all()
    serializer_class = ProductionEndOfShiftCountSerializer

class JarsLidsTrackingView(generics.ListCreateAPIView):
    queryset = JarsLidsTracking.objects.all()
    serializer_class = JarsLidsTrackingSerializer

@api_view(['GET'])
def get_user_type(request):
    try:
        user_profile = request.user.userprofile
        return Response({'user_role': user_profile.user_type})
    except UserProfile.DoesNotExist:
        return Response({'error': 'UserProfile does not exist for this user.'}, status=400)
