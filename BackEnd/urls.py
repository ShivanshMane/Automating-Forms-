# BackEnd/urls.py
from django.contrib import admin
from django.urls import path, include
from forms_app.views import home, endline_package_quality_view, production_end_of_shift_count_view
from forms_app.custom_views import CustomTokenObtainPairView  # Correct import

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('forms_app.urls')),
    path('api/auth/jwt/create/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),  # Use custom view
    path('api/auth/', include('djoser.urls')),
    path('', home, name='home'),
    path('endline-package-quality/', endline_package_quality_view, name='endline_package_quality_view'),
    path('production-end-of-shift-count/', production_end_of_shift_count_view, name='production_end_of_shift_count_view'),
]
