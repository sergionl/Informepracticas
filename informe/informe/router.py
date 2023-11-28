from informeAPI.viewsets import *
from rest_framework import routers

router = routers.DefaultRouter()

router.register('tienda',TiendaViewset)
router.register('inventario',InventarioViewset)
router.register('user',UserViewset)