import { ReactNode } from 'react';
import style from "./style.module.css"


interface LayoutProps  {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children }) => {
  return (
      <div className={style.home}>
         {children}
      </div>
  )
}

export default Layout
