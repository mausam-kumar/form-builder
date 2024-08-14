import './App.css'
import FormFieldGenerator from './components/FormFieldGenerator'
import { FormStateProvider } from './context/FormStateProvider'

const App = () => {

  return (
    <>
      <FormStateProvider>
        <FormFieldGenerator />
      </FormStateProvider>
    </>
  )
}

export default App
