from django import forms
from .models import CONSTROL

class CONSTROL_FORMS(forms.ModelForm):
    class Meta:
        model = CONSTROL
        fields = ['NAME']
        widget = {
            'NAME':forms.TextInput(attrs={'class':'form-control', 'id':'NAME_ID'}),
        }