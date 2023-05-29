from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import CONSTROL
import json
# from .forms import CONSTROL_FORMS
from django.views import View

# Create your views here.
def WEB_SERVER(request):
    ID_1 = CONSTROL.objects.values().get(pk = 1)
    ID_2 = CONSTROL.objects.values().get(pk = 2)
    ID_3 = CONSTROL.objects.values().get(pk = 3)
    ID_4 = CONSTROL.objects.values().get(pk = 4)
    ID_5 = CONSTROL.objects.values().get(pk = 5)
    ID_6 = CONSTROL.objects.values().get(pk = 6)
    ID_7 = CONSTROL.objects.values().get(pk = 7)
    ID_8 = CONSTROL.objects.values().get(pk = 8)
    ID_9 = CONSTROL.objects.values().get(pk = 9)
    ID_10 = CONSTROL.objects.values().get(pk = 10)
    ID_11 = CONSTROL.objects.values().get(pk = 11)
    ID_12 = CONSTROL.objects.values().get(pk = 12)
    ID_13 = CONSTROL.objects.values().get(pk = 13)
    ID_14 = CONSTROL.objects.values().get(pk = 14)
    ID_15 = CONSTROL.objects.values().get(pk = 15)
    ID_16 = CONSTROL.objects.values().get(pk = 16)
    ID_17 = CONSTROL.objects.values().get(pk = 17)
    ID_18 = CONSTROL.objects.values().get(pk = 18)
    ID_19 = CONSTROL.objects.values().get(pk = 19)
    ID_20 = CONSTROL.objects.values().get(pk = 20)
    ID_21 = CONSTROL.objects.values().get(pk = 21)
    return JsonResponse({'ID_1':ID_1, 'ID_2':ID_2, 'ID_3':ID_3, 'ID_4':ID_4, 'ID_5':ID_5, 'ID_6':ID_6, 'ID_7':ID_7, 'ID_8':ID_8, 'ID_9':ID_9, 'ID_10':ID_10, 'ID_11':ID_11, 'ID_12':ID_12, 'ID_13':ID_13, 'ID_14':ID_14, 'ID_15':ID_15, 'ID_16':ID_16, 'ID_17':ID_17, 'ID_18':ID_18, 'ID_19':ID_19, 'ID_20':ID_20, 'ID_21':ID_21})

def index(request):
    # form = CONSTROL_FORMS()
    constrol_1 = CONSTROL.objects.all()[0:7]
    constrol_2 = CONSTROL.objects.all()[7:14]
    constrol_3 = CONSTROL.objects.all()[14:21]
    return render(request, 'BASE.html', {'CONSTROL_1':constrol_1, 'CONSTROL_2':constrol_2, 'CONSTROL_3':constrol_3})
    # return render(request, 'Compact.html', {'CONSTROL_1':constrol_1, 'CONSTROL_2':constrol_2, 'CONSTROL_3':constrol_3})

def On_Click(request):
    if request.method == "POST":
        id = request.POST.get('sid')
        # print('Vị trí nút bấm: ' + id)
        pi = CONSTROL.objects.get(pk = id)
        if(pi.STATUS == 0):
            Mess_Show = CONSTROL(id = pi.id, STATUS = pi.STATUS + 1, NAME = pi.NAME, TYPE = pi.TYPE)
            # print('Đã bật')
        else:
            Mess_Show = CONSTROL(id = pi.id, STATUS = pi.STATUS, NAME = pi.NAME, TYPE = pi.TYPE)
            # print('Không đổi')
        Mess_Show.save()
        TEMP = CONSTROL.objects.values()
        # print(TEMP)
        data = list(TEMP)
        count = CONSTROL.objects.all().count()
        return JsonResponse({'status':'On_Click', 'data':data})
    else:
        return JsonResponse({'status':'Err'})

def Off_Click(request):
    if request.method == "POST":
        id = request.POST.get('sid')
        # print('Vị trí nút bấm: ' + id)
        pi = CONSTROL.objects.get(pk = id)
        if(pi.STATUS == 1):
            Mess_Show = CONSTROL(id = pi.id, STATUS = pi.STATUS - 1, NAME = pi.NAME, TYPE = pi.TYPE)
            # print('Đã tắt')
        else:
            Mess_Show = CONSTROL(id = pi.id, STATUS = pi.STATUS, NAME = pi.NAME, TYPE = pi.TYPE)
            # print('Không đổi')
        Mess_Show.save()
        TEMP = CONSTROL.objects.values()
        # print(TEMP)
        data = list(TEMP)
        return JsonResponse({'status':'Off_Click', 'data':data})
    else:
        return JsonResponse({'status':'Err'})


def updade(request, id):
    if request.method == "POST":
        NAME = request.POST.get('NAME')
        TYPE = request.POST.get('TYPE')
        new_NAME = CONSTROL(id = id, NAME = NAME, TYPE = TYPE)
        # print("Tên nhận được là: " + NAME)
        # print("Loại nhận được là: " + TYPE)
        new_NAME.save()
        return redirect('/')
    return render(request, 'BASE.html')
    # return render(request, 'Compact.html')