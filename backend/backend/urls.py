from django.contrib import admin
from django.urls import path,include

urlpatterns = [

    path('api/user/', include('UserApp.urls')),
    path('admin/', admin.site.urls),
    path('api/book/', include('Book.urls')),
]
