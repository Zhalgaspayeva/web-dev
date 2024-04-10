from django.http import JsonResponse
from .models import Vacancy
import json
from .models import Company
from .serializers import CompanySerializer, VacancySerializer


def get_companies(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)


def get_company(request, pk=None):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == "GET":
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        company.name = data.get('name', company.name)
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({"deleted": True})


def get_company_vacancies(request, pk=None):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    vacancies = company.vacancy_set.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_vacancy(request, pk=None):
    try:
        vacancy = Vacancy.objects.get(pk=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    serializer = VacancySerializer(vacancy)
    return JsonResponse(serializer.data)


def get_top_ten_vacancies(request):
    top_vacancies = Vacancy.objects.order_by('-salary').all()[:10]
    serializer = VacancySerializer(top_vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
