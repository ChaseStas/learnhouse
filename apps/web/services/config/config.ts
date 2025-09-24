export const LEARNHOUSE_HTTP_PROTOCOL =
  process.env.NEXT_PUBLIC_LEARNHOUSE_HTTPS === 'true' ? 'https://' : 'http://'
const LEARNHOUSE_API_URL = `${process.env.NEXT_PUBLIC_LEARNHOUSE_API_URL}`

console.log('=== IMMEDIATE API URL DEBUG ===')
console.log('Raw process.env.NEXT_PUBLIC_LEARNHOUSE_API_URL:', process.env.NEXT_PUBLIC_LEARNHOUSE_API_URL)
console.log('Constructed LEARNHOUSE_API_URL:', LEARNHOUSE_API_URL)
console.log('LEARNHOUSE_API_URL includes "undefined":', LEARNHOUSE_API_URL.includes('undefined'))
console.log('=================================')
export const LEARNHOUSE_BACKEND_URL = `${process.env.NEXT_PUBLIC_LEARNHOUSE_BACKEND_URL}`
export const LEARNHOUSE_DOMAIN = process.env.NEXT_PUBLIC_LEARNHOUSE_DOMAIN
export const LEARNHOUSE_TOP_DOMAIN =
  process.env.NEXT_PUBLIC_LEARNHOUSE_TOP_DOMAIN

// Debug environment variables
console.log('=== ENV VARS DEBUG ===')
console.log('NEXT_PUBLIC_LEARNHOUSE_API_URL:', process.env.NEXT_PUBLIC_LEARNHOUSE_API_URL)
console.log('NEXT_PUBLIC_LEARNHOUSE_BACKEND_URL:', process.env.NEXT_PUBLIC_LEARNHOUSE_BACKEND_URL)
console.log('NEXT_PUBLIC_LEARNHOUSE_DOMAIN:', process.env.NEXT_PUBLIC_LEARNHOUSE_DOMAIN)
console.log('NEXT_PUBLIC_LEARNHOUSE_TOP_DOMAIN:', process.env.NEXT_PUBLIC_LEARNHOUSE_TOP_DOMAIN)
console.log('NEXT_PUBLIC_LEARNHOUSE_HTTPS:', process.env.NEXT_PUBLIC_LEARNHOUSE_HTTPS)
console.log('LEARNHOUSE_HTTP_PROTOCOL:', LEARNHOUSE_HTTP_PROTOCOL)
console.log('LEARNHOUSE_API_URL:', LEARNHOUSE_API_URL)
console.log('LEARNHOUSE_DOMAIN:', LEARNHOUSE_DOMAIN)
console.log('========================')

export const getAPIUrl = () => {
  console.log('=== API URL DEBUG ===')
  console.log('LEARNHOUSE_API_URL:', LEARNHOUSE_API_URL)
  console.log('NEXT_PUBLIC_LEARNHOUSE_API_URL:', process.env.NEXT_PUBLIC_LEARNHOUSE_API_URL)
  console.log('typeof LEARNHOUSE_API_URL:', typeof LEARNHOUSE_API_URL)
  console.log('LEARNHOUSE_API_URL length:', LEARNHOUSE_API_URL?.length)
  console.log('====================')
  return LEARNHOUSE_API_URL
}
export const getBackendUrl = () => LEARNHOUSE_BACKEND_URL

// Multi Organization Mode
export const isMultiOrgModeEnabled = () => {
  const isMulti = process.env.NEXT_PUBLIC_LEARNHOUSE_MULTI_ORG === 'true' ? true : false
  console.log('=== MULTI ORG DEBUG ===')
  console.log('NEXT_PUBLIC_LEARNHOUSE_MULTI_ORG:', process.env.NEXT_PUBLIC_LEARNHOUSE_MULTI_ORG)
  console.log('isMulti:', isMulti)
  console.log('======================')
  return isMulti
}

export const getUriWithOrg = (orgslug: string, path: string) => {
  const multi_org = isMultiOrgModeEnabled()
  if (multi_org) {
    return `${LEARNHOUSE_HTTP_PROTOCOL}${orgslug}.${LEARNHOUSE_DOMAIN}${path}`
  }
  return `${LEARNHOUSE_HTTP_PROTOCOL}${LEARNHOUSE_DOMAIN}${path}`
}

export const getUriWithoutOrg = (path: string) => {
  const multi_org = isMultiOrgModeEnabled()
  if (multi_org) {
    return `${LEARNHOUSE_HTTP_PROTOCOL}${LEARNHOUSE_DOMAIN}${path}`
  }
  return `${LEARNHOUSE_HTTP_PROTOCOL}${LEARNHOUSE_DOMAIN}${path}`
}

export const getOrgFromUri = () => {
  const multi_org = isMultiOrgModeEnabled()
  if (multi_org) {
    getDefaultOrg()
  } else {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname

      return hostname.replace(`.${LEARNHOUSE_DOMAIN}`, '')
    }
  }
}

export const getDefaultOrg = () => {
  const defaultOrg = process.env.NEXT_PUBLIC_LEARNHOUSE_DEFAULT_ORG
  console.log('=== DEFAULT ORG DEBUG ===')
  console.log('NEXT_PUBLIC_LEARNHOUSE_DEFAULT_ORG:', process.env.NEXT_PUBLIC_LEARNHOUSE_DEFAULT_ORG)
  console.log('defaultOrg:', defaultOrg)
  console.log('=========================')
  return defaultOrg
}




