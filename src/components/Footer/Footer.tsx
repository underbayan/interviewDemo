import { footerStyle, infoStyle } from "./Footer.module.scss"
import { useI18n } from "../../libs/store"

export const Footer = () => {
  const str = useI18n()
  return (
    <footer className={"p-xs-1 p-sm-2 " + footerStyle}>
      <div className={infoStyle}>{str.footerAuthor}</div>
      <div className={infoStyle}>{str.footerCopyright.replace("{date}", new Date().getFullYear().toString())}</div>
    </footer>
  )
}