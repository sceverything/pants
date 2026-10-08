from django.contrib import admin
from django.urls import include, path
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def healthcheck(request):
    return Response({"status": "ok", "project": "ToasterPants"})


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", healthcheck, name="healthcheck"),
    path("api/core/", include("apps.core.urls")),
    path("api/marketplace/", include("apps.marketplace.urls")),
    path("api/payments/", include("apps.payments.urls")),
    path("api/wallets/", include("apps.wallets.urls")),
    path("api/accounting/", include("apps.accounting.urls")),
    path("api/admin/", include("apps.admin.urls")),
    path("api/cms/", include("apps.cms.urls")),
    path("api/forum/", include("apps.forum.urls")),
    path("api/security/", include("apps.security.urls")),
]
