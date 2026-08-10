from django.shortcuts import render
from django.http import HttpResponse
from .models import animatronic


def homepage(request):
    return render(request, 'freddyfazbearPizzaria/home.html')

def troubleshoot(request):
    return render(request, 'freddyfazbearPizzaria/troubleshoot.html')

def animatronics(request):
    animatronics_list = animatronic.objects.all()
    return render(request, 'freddyfazbearPizzaria/animatronics.html', {'animatronics': animatronics_list})
