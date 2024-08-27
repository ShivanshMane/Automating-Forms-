# forms_app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/sanitation-checklist/', views.SanitationChecklistView.as_view(), name='sanitation-checklist'),
    path('api/endline-package-quality/', views.EndLinePackageQualityView.as_view(), name='endline-package-quality'),
    path('api/production-end-of-shift-count/', views.ProductionEndOfShiftCountView.as_view(), name='production-end-of-shift-count'),
    path('api/jars-lids-tracking/', views.JarsLidsTrackingView.as_view(), name='jars-lids-tracking'),
    # Add other API endpoints here
]
