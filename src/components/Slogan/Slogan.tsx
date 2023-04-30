import { useI18n } from "../../libs/store"
import { memo } from 'react'

import { sloganStyle, titleStyle, descriptionStyle } from "./Slogan.module.scss"
export const Slogan = memo(() => {
  const str = useI18n()
  return (<section className={sloganStyle}>
    <pre className={titleStyle}>{str.slogan}</pre>
    <p className={descriptionStyle}>{str.sloganDetail}</p>
  </section >)
})



