import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {
  return (
    <form className={styles.form}> 
      <Input 
        type='text'
        text='Endereço do imóvel'
        name='name'
        placeholder='Insira o endereço do imóvel'
      />
      <Input
        type='number'
        text='Valor do imóvel'
        name='name'
        placeholder='Insira o valor do imóvel'
      />
      <Select name='category_id' text='Selecione o tipo de imóvel ' />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;