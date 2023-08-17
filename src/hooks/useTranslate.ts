import { useRouter } from 'next/router'
import en from 'public/locales/en'
import ja from 'public/locales/ja'

const useTranslate = () => {
  const { locale } = useRouter()

  const trans = locale === 'ja' ? ja : en

  return trans
}

export default useTranslate
