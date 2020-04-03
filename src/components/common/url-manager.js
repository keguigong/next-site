const URLMANAGER_DEFAULT_OPTIONS = {
  'appId': '100278',
  'env': 'dev',
  'portalBaseUrl': 'http://welkin${env}.nioint.com',
  'ssoBaseUrl': 'https://login${env}.nio.com',
  'udsBaseUrl': 'http://uds${env}-int.nioapis.com',
  'aresBaseUrl': 'http://ares${env}.nioint.com'
}

class UrlManager {
  constructor(options) {
    this.options = { ...URLMANAGER_DEFAULT_OPTIONS, ...options }
  }
  getEnvDomain(domain, env = this.options.env) {
    let suffix = env === 'prod' ? '' : `-${env}`
    return domain.replace('${env}', suffix)
  }
  getPortalBaseUrl = () => this.getEnvDomain(this.options.portalBaseUrl)
  getServiceUrl = () => `${this.getPortalBaseUrl()}/sso/login`
  getSSOBaseUrl = () => this.getEnvDomain(this.options.ssoBaseUrl)
  getSSOLoginUrl = () => `${this.getSSOBaseUrl()}/login?service=${this.getServiceUrl()}&lang=zh_cn`
  getSSOLogoutUrl = () => `${this.getSSOBaseUrl()}/logout?service=${this.getServiceUrl()}&lang=zh_cn`
  getAresBaseUrl = () => this.getEnvDomain(this.options.aresBaseUrl)
  getUdsBaseUrl = () => this.getEnvDomain(this.options.udsBaseUrl)
}

export { UrlManager }