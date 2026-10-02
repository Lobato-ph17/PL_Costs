import styles from './Loading.module.css'

import loading from '../../img/loagind.svg'

const Loading = () => {
  return (
    <div className={styles.loader_container}>
        <img className={styles.loader} src={loading} alt="Loading" />
    </div>
  )
}

export default Loading
