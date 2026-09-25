import styles from './Home.module.css'
import savings from '../../img/Savings.svg'

const Home = () => {
  return (
    <section className={styles.home_container}>

      <h1>Bem-Vindo ao <span>PL Costs!</span></h1>
      <p>Comece a gerenciar seus projetos agora mesmo.</p>
      <a href="">Criar Projeto</a>
      <img src={savings} alt="logo savings"/>
      
    </section>
  )
}

export default Home