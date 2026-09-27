import Input from '../form/input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css'

const ProjectForm = ({btnText}) => {
  return (
    <div>
        <form className={styles.form}>
          
            <Input 
              type="text" 
              text="Nome do Projeto" 
              name="name" 
              placeholder="Insira o nome do Projeto"
            />
            <Input 
              type="number" 
              text="Orçamento do Projeto" 
              name="budget" 
              placeholder="Insira o orçamento total"
            />

            <Select 
              name="category_id"
              text="Selecione a categoria"
            />
            
            <SubmitButton 
               text={btnText}
            />
        </form>
    </div>
  )
}

export default ProjectForm;
