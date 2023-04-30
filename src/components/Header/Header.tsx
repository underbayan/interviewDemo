import { navStyle, brandStyle, langStyle, themeStyle, actionBarStyle } from "./Header.module.scss"
import { useI18n, useUpdateEnv, useEnv } from "../../libs/store"
import { memo, useCallback } from "react"
import {
  MouseEventHandler
} from 'react';
type StrType = Record<string, string>
interface HeaderViewProps {
  str: StrType
  changeLang: MouseEventHandler<HTMLDivElement>
  nextLang: string
  changeTheme: MouseEventHandler<HTMLDivElement>
}
const HeaderView = memo(({ str, changeLang, nextLang, changeTheme }: HeaderViewProps) => <header className={navStyle}>
  <div className={"row " + actionBarStyle}>
    <div className={"p-xs-1 p-sm-2 " + brandStyle}> {str.brand} </div>
    <div className={langStyle} onClick={changeLang}> {nextLang}</div>
    <div className={themeStyle} onClick={changeTheme}> 🌓 </div>
  </div>
</header>)

export const Header = memo(() => {
  const str: StrType = useI18n()
  const updateEnv = useUpdateEnv()
  const env = useEnv()

  const nextLang = env.lang === "en" ? "zh" : "en"
  const changeTheme = useCallback(() => document.getElementsByTagName('body')[0].classList.toggle("dark"), [])

  return (<HeaderView
    str={str}
    nextLang={nextLang}
    changeLang={updateEnv.bind(null, { lang: nextLang })}
    changeTheme={changeTheme}
  />
  )
})




