from django.urls import path
from .views import dashboard, health, marketplace_summary

urlpatterns = [
    path("health/", health, name="core-health"),
    path("dashboard/", dashboard, name="core-dashboard"),
    path("marketplace-summary/", marketplace_summary, name="marketplace-summary"),
]
