from rest_framework import viewsets

from . import models
from . import serializers
from rest_framework.decorators import action
from rest_framework.response import Response

#import pandas as pd

class UserViewset(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer

    @action(detail = False, methods=['POST'])
    def login(self,request):
        correo = request.data["correo"]
        contraseña = request.data["contraseña"]

        user_info = models.User.objects.filter(correo = correo)
        serializer = serializers.UserSerializer(user_info, many = True)
        #print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        #print(user_info)
        #print(serializer.data)
        

        return Response(serializer.data) 



class TiendaViewset(viewsets.ModelViewSet):
    queryset = models.Tienda.objects.all()
    serializer_class = serializers.TiendaSerializer

class InventarioViewset(viewsets.ModelViewSet):
    queryset = models.Inventario.objects.all()
    serializer_class = serializers.InventarioSerializer

    @action(detail = False, methods=['GET'])
    def Inventario_get_with_fk(self, request):
        
        u_id = request.query_params["u_id"]
        print("a")
    
        user_info = models.Inventario.objects.filter(tienda_id = u_id)
        print(user_info)
        serializer = serializers.InventarioSerializer(user_info, many = True)

        return Response(serializer.data)