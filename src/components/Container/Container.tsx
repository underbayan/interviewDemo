import { memo, ReactNode } from 'react';
import { containerStyle } from "./Container.module.scss"

interface ContainerProps {
  children: ReactNode;
}

export const Container = memo(({ children }: ContainerProps) => {
  return (
    <main className={containerStyle + " p-t-sm-1 p-t-md-2"}>
      {children}
    </main>
  )
})
