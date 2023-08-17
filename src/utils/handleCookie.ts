const IS_SERVER = typeof window === 'undefined'

export const setCookie = (name: string, val: string, exprireDays?: number) => {
  if (!IS_SERVER) {
    const value = val
    let expireTime = ''
    if (exprireDays) {
      const date = new Date()
      date.setTime(date.getTime() + exprireDays * (24 * 60 * 60 * 1000))
      expireTime = date.toUTCString()
    }

    document.cookie = `${name}=${value}; expires=${expireTime ?? ''}; path=/`
  }
}

export const getCookie = (name: string) => {
  if (!IS_SERVER) {
    const nameLenPlus = name.length + 1
    const cookieData =
      document.cookie
        .split('; ')
        .map((c) => c.trim())
        .filter((cookie) => cookie.substring(0, nameLenPlus) === `${name}=`)
        .map((cookie) =>
          decodeURIComponent(cookie.substring(nameLenPlus))
        )[0] || null
    return cookieData
  }
  return undefined
}

export const deleteCookie = (names: string[]) => {
  if (!IS_SERVER) {
    const date = new Date()

    // Set data expire in -1 day
    date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000)

    names.forEach((name) => {
      document.cookie = `${name}=; expires=${date.toUTCString()}; path=/`
    })
  }
}
