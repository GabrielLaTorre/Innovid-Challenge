export default function Input({ taskContent, handleOnChange }) {

  return (
    <div>
      <input
      value={taskContent}
      type="text"
      placeholder="Add task.."
      onChange={handleOnChange}
      autoFocus
      required
      />
    </div>
  )
}