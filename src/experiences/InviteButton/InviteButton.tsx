
import { useState, useRef, useCallback, RefObject, Ref } from "react";

import { inviteButtonStyle, contentStyle, inputStyle, errorStyle, successStyle } from './InviteButton.module.scss'
import { Button, Modal, Input, InputRef, ModalRef } from "../../components"
import { useI18n } from "../../libs/store"
import { sendEmail } from "../../services"
export const checkFullNameRegExp = (v: string) => /^[\w|\s]{1,12}$/.test(v)
export const checkEmailRegExp = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const initStatus = { error: false, message: '', loading: false }
export const InviteButton = () => {
  const str = useI18n()
  const [ok, setOk] = useState(false), [status, setStatus] = useState(initStatus)
  const modalRef = useRef<ModalRef>(null), modalOKRef = useRef<ModalRef>(null),
    inputRef1 = useRef<InputRef>(null),
    inputRef2 = useRef<InputRef>(null),
    inputRef3 = useRef<InputRef>(null)
  const isOk = useCallback(() => setTimeout(() => {
    setOk(!!(inputRef1.current?.ok && inputRef2.current?.ok && inputRef3?.current?.ok && inputRef2.current?.value == inputRef3.current?.value))
  }), [inputRef2, inputRef3, inputRef1, setOk])
  const setModal = useCallback((modalRef: RefObject<ModalRef>, open: boolean) => { modalRef.current?.setOpen(open) }, [])
  const checkConfrim = useCallback((v: string) => checkEmailRegExp(v) && inputRef2.current?.value == v, [inputRef2])
  return (
    <>
      <Button text={str.invite} onClick={setModal.bind(null, modalRef, true)} className={inviteButtonStyle} />
      <Modal ref={modalRef} closeCallback={() => { setStatus(initStatus) }} >
        <div className={contentStyle}>
          <h2 >{str.invite}</h2>
          <Input className={inputStyle} ref={inputRef1} placeholder={str.fullName} name="fullName" validate={checkFullNameRegExp} onChange={isOk}></Input>
          <Input className={inputStyle} ref={inputRef2} placeholder={str.email} name="email" validate={checkEmailRegExp} onChange={isOk}></Input>
          <Input className={inputStyle} ref={inputRef3} placeholder={str.confirmEmail} name="confirmEmail" validate={checkConfrim} onChange={isOk}  ></Input>
          <div className={status.error ? errorStyle : successStyle}>{status.loading ? "Loading..." : status.message}</div>
          <Button
            text={str.send}
            onClick={async () => {
              if (ok) {
                setStatus({ ...status, loading: true })
                sendEmail(inputRef1.current!.value, inputRef2.current!.value).then(r => {
                  setStatus({ ...status, loading: false, ...r })
                  if (!r.error) {
                    setStatus(initStatus)
                    setModal(modalRef, false)
                    setModal(modalOKRef, true)
                  }
                }).catch(() => {
                  setStatus({ ...status, loading: false, error: true, message: str.unknownError })
                })

              }
            }}
            className={inviteButtonStyle}
            disabled={!ok || status.loading} />
        </div>
      </Modal>

      <Modal ref={modalOKRef as Ref<ModalRef>} >
        <div className={contentStyle}>
          <h2>{str.welcomeTitle}</h2>
          <p>{str.welcomeSlogan}</p>
          <Button text={str.ok} onClick={setModal.bind(null, modalOKRef, false)} className={inviteButtonStyle}
          />
        </div>
      </Modal>
    </>
  )
}







