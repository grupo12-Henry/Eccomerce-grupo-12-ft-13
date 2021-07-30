import React from 'react'
import Footer from '../../../footer/footer'
import WishList from '../../../wishList/wishList'
import Sidebar from '../../sidebar/Sidebar'
import './favoritos.css'
export default function favoritos() {
  return (
    <>
      <Sidebar />
      <div>
        <WishList />
      </div>
      <div className="fotter">
      <Footer />
      </div>
    </>
  )
}
