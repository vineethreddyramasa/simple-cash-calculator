from django.conf.urls import url
from calc import views
from django.urls import path

urlpatterns = [
    url(r'^$', views.index, name='index'),
    path('calculator', views.calc, name='calculator')
]
