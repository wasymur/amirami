from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
# Create your views here.


def test_view(request):
    context = {'name': 'waseeeem'}
    return render(request, 'web/test.html', context)
