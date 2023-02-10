export interface MenuItem {
  title: string
  link: string
}

export const MAIN_MENU: MenuItem[] = [
  {
    title: 'Каталог',
    link: '/catalog',
  },
  {
    title: 'О нас',
    link: '/#about',
  },
  {
    title: 'Связь',
    link: '/#contacts',
  },
]
