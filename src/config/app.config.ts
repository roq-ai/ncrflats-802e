interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Agent', 'Administrator', 'Broker', 'Property Manager'],
  tenantName: 'Organization',
  applicationName: 'NCRFLATS',
  addOns: ['chat', 'file', 'notifications'],
};
