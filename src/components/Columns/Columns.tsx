import { memo } from 'react';
import { resCol, resCol2, resCol3 } from './Columns.module.scss'

export const ColumnsTest = memo(() => {
  return (
    <>
      <main className={'p-t-xs-2 row ' + resCol}>
        {Array(7).fill(0).map((_, i) => (<div className='col-6 col-lg-2 col-sm-4' key={i}> </div>))}
      </main>
      <main className={'row ' + resCol2}>
        {Array(7).fill(0).map((_, i) => (<div className='col-6 col-lg-2 col-sm-4' key={i}> </div>))}
      </main>
      <main className={'row ' + resCol3}>
        {Array(7).fill(0).map((_, i) => (<div className='col-6 col-lg-2 col-sm-4' key={i}> </div>))}
      </main>
    </>
  )
})
