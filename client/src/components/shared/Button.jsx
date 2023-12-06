export default function Button({ handleOnClick }) {

  return (
    <div>
      <button type="button" onClick={handleOnClick}>
        Add
      </button>
    </div>
  ) 
}