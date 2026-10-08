from __future__ import annotations

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


@api_view(["GET"])
@permission_classes([AllowAny])
def health(request):
    return Response({"status": "ok", "service": "core", "project": "ToasterPants"})


@api_view(["GET"])
@permission_classes([AllowAny])
def dashboard(request):
    return Response({
        "platform": "ToasterPants",
        "marketplace_volume": 3214000,
        "payouts_pending": 78120,
        "active_vendors": 128,
        "orders_today": 189,
        "security_checks": 46,
    })


@api_view(["GET"])
@permission_classes([AllowAny])
def marketplace_summary(request):
    return Response({
        "featured": [
            {"id": 1, "name": "Aurora Ledger Case", "price": "0.92 ETH", "vendor": "Northwind Vault"},
            {"id": 2, "name": "VoltDesk Mini", "price": "0.41 ETH", "vendor": "Juniper Grid"},
            {"id": 3, "name": "Pine Signal Node", "price": "0.67 ETH", "vendor": "Cipher Works"},
        ],
        "categories": ["Hardware", "Security", "Compute", "Accessories", "Infrastructure"],
    })
