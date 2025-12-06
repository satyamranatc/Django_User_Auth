from django.contrib import admin
from .models import UserModel

@admin.register(UserModel)
class UserModelAdmin(admin.ModelAdmin):
    list_display = ('email', 'fullName', 'role', 'is_staff')
    search_fields = ('email', 'fullName')
    ordering = ('email',)
