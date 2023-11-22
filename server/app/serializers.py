from rest_framework import serializers
from .models import Flight

#These serializers are used to send JSON to the front end

class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = '__all__'

