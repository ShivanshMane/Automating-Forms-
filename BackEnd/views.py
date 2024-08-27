from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from forms_app.models import EndLinePackageQuality, ProductionEndOfShiftCount, UserProfile
from rest_framework import generics
from forms_app.serializers import EndLinePackageQualitySerializer, ProductionEndOfShiftCountSerializer

def home(request):
    return render(request, 'endline_package_quality_pdf.html')  # Use the correct template name here


@api_view(['GET'])
def get_user_type(request):
    try:
        user_profile = request.user.userprofile
        return Response({'user_role': user_profile.user_type})
    except UserProfile.DoesNotExist:
        return Response({'error': 'UserProfile does not exist for this user.'}, status=400)

class EndLinePackageQualityCreateView(generics.CreateAPIView):
    queryset = EndLinePackageQuality.objects.all()
    serializer_class = EndLinePackageQualitySerializer

class EndLinePackageQualityListView(generics.ListAPIView):
    queryset = EndLinePackageQuality.objects.all()
    serializer_class = EndLinePackageQualitySerializer

class ProductionEndOfShiftCountCreateView(generics.CreateAPIView):
    queryset = ProductionEndOfShiftCount.objects.all()
    serializer_class = ProductionEndOfShiftCountSerializer

class ProductionEndOfShiftCountListView(generics.ListAPIView):
    queryset = ProductionEndOfShiftCount.objects.all()
    serializer_class = ProductionEndOfShiftCountSerializer
