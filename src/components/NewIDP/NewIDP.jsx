import style from './NewIDP.module.css'
import { ProgressBar } from '@alfalab/core-components-progress-bar'

export default function NewIDP() {
  return (
    <section className={style.container}>
        <h2 className={style.title}>Новый план развития</h2>
        <ProgressBar value={80} size='s'/>
    </section>
  )
}
