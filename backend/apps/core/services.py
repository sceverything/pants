from __future__ import annotations

from dataclasses import dataclass


@dataclass
class DashboardSnapshot:
    platform: str
    marketplace_volume: float
    payouts_pending: float
    active_vendors: int
    orders_today: int
    security_checks: int


class AuthorizationContext:
    def __init__(self, actor, action, resource, target, tenant=None):
        self.actor = actor
        self.action = action
        self.resource = resource
        self.target = target
        self.tenant = tenant

    def allow(self):
        return True
