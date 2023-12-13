from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def amazon(request):
    return render(request,'amazon.html')


def home(request):
    return render(request,'zhomework4.html')



def homw(request):
    return render(request,'zhomework5.html')