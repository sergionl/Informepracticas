from django.db import models

# Create your models here.

class User(models.Model):
    usuario = models.CharField(max_length=250)
    correo = models.CharField(max_length=250)
    contraseña = models.CharField(max_length=250)

    def __str__(self):
        return self.usuario

class Tienda(models.Model):
    Ubicacion = models.CharField(max_length=100)
    Empleados = models.IntegerField()
    CelularContacto = models.CharField(max_length=100)
    CorreoContacto = models.CharField(max_length=100)

class Inventario(models.Model):
    tienda_id = models.ForeignKey(Tienda, on_delete=models.CASCADE)
    Producto = models.CharField(max_length=100)
    Descripcion = models.CharField(max_length=100)
    Cantidad = models.IntegerField()
    Precio = models.FloatField()
    
    