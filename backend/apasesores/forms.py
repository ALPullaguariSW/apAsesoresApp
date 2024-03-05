from django import forms

class CotizacionSeguroForm(forms.Form):
    marca = forms.CharField(label='Marca del vehículo', max_length=100)
    modelo = forms.CharField(label='Modelo del vehículo', max_length=100)
    año = forms.IntegerField(label='Año del vehículo')
    # Agrega aquí los campos adicionales necesarios para la cotización del seguro
