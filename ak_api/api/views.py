from django.http import HttpResponse


def index(request):
    return HttpResponse('Black Pearl is in some phase to be shipped :-)')