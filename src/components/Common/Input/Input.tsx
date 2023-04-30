import {
  forwardRef,
  useState,
  useImperativeHandle,
  memo,
  RefObject,
  ChangeEventHandler,
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
} from 'react';
import { inputStyle, spanStyle, containerStyle } from './Input.module.scss';
import { omit } from 'lodash';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  message?: string;
  validate?: (value: string) => boolean;
}

export interface InputRef {
  ok: boolean;
  value: string;
  setOk: (ok: boolean) => void;
  setValue: (value: string) => void;
}

const Input = memo(
  forwardRef<InputRef, InputProps>((props, ref) => {
    const [value, setValue] = useState<string>('');
    const [flag, setFlag] = useState<string>('');
    const [ok, setOk] = useState<boolean>(false);
    const { className, onChange, message, validate, ...rest } = props;
    console.log(121212)
    useImperativeHandle<InputRef, InputRef>(
      ref as RefObject<InputRef>,
      () => ({ ok, value, setOk, setValue }),
      [ok, value, setOk, setValue],
    );

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
      setValue(e.target.value);
      const isOk = validate ? validate(e.target.value) : true;
      setOk(isOk);
      const newFlag = !e.target.value || !validate ? '' : isOk ? '✔️' : '❌';
      if (newFlag !== flag) setFlag(newFlag);
      onChange && onChange(e.target.value as unknown as ChangeEvent<HTMLInputElement>);
    }, [onChange, setFlag, flag, validate, setValue]);

    return (
      <div className={`${containerStyle} p-t-xs-1`}>
        <input
          type="text" // should be override
          autoComplete="on"
          {...omit(rest, 'validate')}
          className={`${inputStyle} ${className ?? ''}`}
          value={value}
          ref={ref as RefObject<HTMLInputElement>}
          onChange={handleChange}
        />
        {value ? <span className={spanStyle}>{flag}</span> : null}
        {message ? <span className={spanStyle}>{message}</span> : null}
      </div>
    );
  }),
);

export { Input };
