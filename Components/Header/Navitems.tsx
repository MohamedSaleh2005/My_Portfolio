import { navItems } from './types'

export default function NavItems() {
  return (
    <ul className='hidden md:flex gap-10'>
        {navItems.map ((item) => (

          <li className='myhover' key={item.id}>
            <a href={item.href}>{item.title}</a>
          </li>

        ))}
    </ul>
  )
}
