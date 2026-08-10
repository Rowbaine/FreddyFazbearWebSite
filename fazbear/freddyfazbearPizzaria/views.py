from django.shortcuts import render
from django.http import HttpResponse


room_list = [
    {'id': 1, 'name': 'First room', 'capacity': 50},
    {'id': 2, 'name': 'Second room', 'capacity': 30},
    {'id': 3, 'name': 'Third room', 'capacity': 20}
]

def homepage(request):
    return render(request, 'freddyfazbearPizzaria/home.html')

def troubleshoot(request):
    return render(request, 'freddyfazbearPizzaria/troubleshoot.html')

def animatronics(request):
    return render(request, 'freddyfazbearPizzaria/animatronics.html')

def get_rooms(request, room_id):
    room = next((room for room in room_list if room['id'] == room_id), None)
    if room:
        return render(request, 'freddyfazbearPizzaria/room.html', {'rooms': [room]})
    else:
        return HttpResponse("Room not found", status=404)