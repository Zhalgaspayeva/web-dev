from django.contrib import admin
from .models import Vacancy, Company

admin.site.register(Company)
admin.site.register(Vacancy)
#
# @admin.register(Company)
# class CompanyAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name')
#     search_fields = ('name',)
#
# @admin.register(Vacancy)
# class VacancyAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name')
#     search_fields = ('name',)