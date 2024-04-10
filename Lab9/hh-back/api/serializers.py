from rest_framework import serializers

from api.models import Company
from rest_framework import serializers
from .models import Vacancy




class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        instance = Company(name=validated_data.get('name'))
        instance.save()
        return instance

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']