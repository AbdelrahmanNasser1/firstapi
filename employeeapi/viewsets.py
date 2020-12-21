from rest_framework import viewsets
from . import models
from . import serializers

class EmployeeViewset(viewsets.ModelViewSet):
    queryset = models.Employee.objects.all()  # .OBJECTS.ALL() get all the data in database
    serializer_class = serializers.EmployeeSerializer