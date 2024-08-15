import './App.css'
import FormFieldGenerator from './components/FormFieldGenerator'
import FormMapper from './components/FormMapper'
import SavedTemplates from './components/SavedTemplate'
import { FormStateProvider } from './context/FormStateProvider'

const App = () => {

  return (
    <>
      <FormStateProvider>
        <div className='flex gap-x-10 flex-col gap-y-10 sm:flex-row sm:gap-y-0 w-full'>
          <FormFieldGenerator />
          <FormMapper />
          <SavedTemplates />
        </div>
      </FormStateProvider>
    </>
  )
}

export default App
