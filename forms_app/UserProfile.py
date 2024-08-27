from django.contrib.auth.models import User
from forms_app.models import UserProfile

users_without_profile = User.objects.filter(userprofile__isnull=True)
for user in users_without_profile:
    UserProfile.objects.create(user=user, user_type='worker')  # or 'supervisor', set default as needed
