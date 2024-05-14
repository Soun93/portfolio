import './NavButton.css'
export function NavButton({ changeMenu, srcButton }) {
  
  return (
    <div className='button' onClick={changeMenu}>
      <img src="" alt={srcButton} />
    </div>
  )
}

export default NavButton;