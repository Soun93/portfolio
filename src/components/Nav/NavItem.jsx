import './NavItem.css'
export function NavItem({ selected, itemName }) {
  
  return (
    <a href={`#${itemName}`} className={selected ? 'selected' : ''}>
      {itemName}
    </a>
  )
}

export default NavItem;