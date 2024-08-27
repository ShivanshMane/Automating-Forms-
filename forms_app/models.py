# forms_app/models.py
from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    USER_TYPES = (
        ('worker', 'Worker'),
        ('supervisor', 'Supervisor'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_type = models.CharField(max_length=10, choices=USER_TYPES)

    def __str__(self):
        return f"{self.user.username} - {self.get_user_type_display()}"

class SanitationChecklist(models.Model):
    date = models.DateField()
    room = models.CharField(max_length=100)
    notes = models.TextField()
    # Add other necessary fields here, e.g.:
    hands_washed = models.CharField(max_length=3)
    contamination = models.CharField(max_length=3)
    hair_nets = models.CharField(max_length=3)
    packaging_covered = models.CharField(max_length=3)
    hands_required = models.CharField(max_length=3)
    products_stored = models.CharField(max_length=3)
    chemicals_stored = models.CharField(max_length=3)
    soap_towel = models.CharField(max_length=3)
    initials = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.date} - {self.room}"

class JarsLidsTracking(models.Model):
    date = models.DateField()
    lot_number = models.CharField(max_length=50)
    num_cases_jars = models.IntegerField()
    num_cases_lids = models.IntegerField()

    def __str__(self):
        return f"{self.date} - {self.lot_number}"

class EndLinePackageQuality(models.Model):
    location = models.CharField(max_length=100)
    product = models.CharField(max_length=100)
    date = models.DateField()
    shift = models.CharField(max_length=10)
    line = models.CharField(max_length=50)
    lotNumber = models.CharField(max_length=50)
    bestByDate = models.DateField()
    verification = models.JSONField()
    initials = models.CharField(max_length=100)
    historyOfChange = models.JSONField()
    additionalComments = models.TextField()

    def __str__(self):
        return f"{self.product} - {self.date}"

class ProductionEndOfShiftCount(models.Model):
    product = models.CharField(max_length=100)
    shift = models.CharField(max_length=10)
    date = models.DateField()
    producedQuantity = models.IntegerField()
    defectCount = models.IntegerField()
    operatorInitials = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.product} - {self.date} - {self.shift}"

from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.userprofile.save()
