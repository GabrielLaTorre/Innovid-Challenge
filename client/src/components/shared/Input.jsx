export default function Input({ taskContent, handleOnChange }) {

  return (
    <div>
      <input
      className="w-80 p-2.5 bg-slate-100/75 text-black"
      value={taskContent}
      type="text"
      placeholder="Add task..."
      onChange={handleOnChange}
      autoFocus
      required
      />
    </div>
  )
}