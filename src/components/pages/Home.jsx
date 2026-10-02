import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'
import { FaChartLine, FaWallet, FaFolderPlus } from 'react-icons/fa'

const Home = () => {
  return (
    <section className={styles.home_container}>
      
      <div className={styles.hero}>
          <div className={styles.hero_text}> 
              <span className={styles.badge}>Gestão de Projetos</span>
              <h1>
                Bem vindo ao <span>PL Costs</span>
              </h1>
              <p>
                Gerencia o orçamento dos seus projetos, acompanhe custos em tempo real e mantenha suas finanças sob controle de forma simples e intuitiva.
              </p>

              <div className={styles.cta_group}>
                <LinkButton to="/newproject" text="Criar Projeto"/>
                <LinkButton to="/projects" text="Ver Projetos"/>
              </div>
          </div>

          <div className={styles.hero_image}>
            <img src={savings} alt="PL Costs" />
          </div>
      </div>

      <div className={styles.features}>
        <div className={styles.features_cards}>
          <FaWallet className={styles.feature_icon}/>
          <h3>Controle do Orçamento</h3>
          <p>Defina metas orçamentárias e acompanhe seus gastos limite a limite.</p>
        </div>

        <div className={styles.feature_card}>
          <FaFolderPlus className={styles.feature_icon} />
          <h3>Categorização Prática</h3>
          <p>Organize por Infraestrutura, Design, Desenvolvimento e Planejamento.</p>
        </div>

        <div className={styles.feature_card}>
          <FaChartLine className={styles.feature_icon} />
          <h3>Visão em Tempo Real</h3>
          <p>Saiba exatamente quanto custo resta em cada projeto criado.</p>
        </div>

      </div>
    </section>
  )
}

export default Home