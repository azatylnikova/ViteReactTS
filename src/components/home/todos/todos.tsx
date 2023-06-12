
import styles from '../index.module.scss'

type Todos = {
  id: any;
  text: any;
};
function Todos({todos}) {

    console.log('todos', todos)
 return(
    <div className={styles.border}>
                <div>{todos.id}</div>
                <div>{todos.text}</div>
              </div>
 )
}

export default Todos