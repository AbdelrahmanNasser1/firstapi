from employeeapi.viewsets import EmployeeViewset
from rest_framework import routers


router = routers.DefaultRouter()
router.register('employee',EmployeeViewset)


#DefaultRouter that has all routes like (POST ,GET , PUT ,DELETE)
#localhost:p/api/