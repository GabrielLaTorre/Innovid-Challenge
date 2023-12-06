
import '../../App.css'
import Button from '../shared/Button'

export default function Task({ id, text, onRemoveTask }){

  const handleOnRemove = () => {
    onRemoveTask(id)
  }

  return (
    <li key={id} className='flex w-full h-10 text-center justify-between border-2 border-b-indigo-800'>
      <label className='flex justify-center items-center w-full align-middle font-bold'>
        <p>{text}</p>
      </label>
      <Button 
      styles={'w-12 bg-red-600 hover:bg-red-600/75 font-bold'}
      handleOnClick={handleOnRemove}
      >
        X
      </Button>
    </li>
  )
}