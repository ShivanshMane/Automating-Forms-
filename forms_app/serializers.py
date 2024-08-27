# forms_app/serializers.py
from rest_framework import serializers
from .models import SanitationChecklist, EndLinePackageQuality, ProductionEndOfShiftCount, JarsLidsTracking

class SanitationChecklistSerializer(serializers.ModelSerializer):
    class Meta:
        model = SanitationChecklist
        fields = '__all__'

class EndLinePackageQualitySerializer(serializers.ModelSerializer):
    class Meta:
        model = EndLinePackageQuality
        fields = '__all__'

class ProductionEndOfShiftCountSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductionEndOfShiftCount
        fields = '__all__'

class JarsLidsTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JarsLidsTracking
        fields = '__all__'
