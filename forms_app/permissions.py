# backend/forms_app/permissions.py

from rest_framework.permissions import BasePermission

class IsWorker(BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(name='Worker').exists()

class IsSupervisor(BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(name='Supervisor').exists()
