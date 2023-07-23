const mapping: Record<string, string> = {
  clients: 'client',
  maintenances: 'maintenance',
  organizations: 'organization',
  properties: 'property',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
