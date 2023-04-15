import { useState } from 'react'
import Menu from './Menu'
import Title from './Title'
import menu from './data'
import Categories from './Categories'

const tempCategories = menu.map((item) => item.category)
const allCategories = ['all', ...new Set(tempCategories)]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    const newItems = menu.filter((item) => item.category === category)
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
