from __future__ import annotations

from rest_framework import serializers


class DashboardSerializer(serializers.Serializer):
    platform = serializers.CharField()
    marketplace_volume = serializers.FloatField()
    payouts_pending = serializers.FloatField()
    active_vendors = serializers.IntegerField()
    orders_today = serializers.IntegerField()
    security_checks = serializers.IntegerField()
