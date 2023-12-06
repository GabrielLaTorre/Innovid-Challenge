export default function Button({ handleOnClick, styles, children }) {

  return (
      <button 
      className={styles}
      type="button"
      onClick={handleOnClick}>
        {children}
      </button>
  ) 
}