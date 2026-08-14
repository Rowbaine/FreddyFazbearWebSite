from django.shortcuts import render
from django.http import HttpResponse
from .models import *


def homepage(request):
    return render(request, 'freddyfazbearPizzaria/home.html')

def troubleshoot(request):
    return render(request, 'freddyfazbearPizzaria/troubleshoot.html')

def animatronics(request):
    return render(request, 'freddyfazbearPizzaria/animatronics.html')
