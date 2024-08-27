# forms_app/custom_views.py
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        print(f"Login attempt with data: {request.data}")
        return super().post(request, *args, **kwargs)
