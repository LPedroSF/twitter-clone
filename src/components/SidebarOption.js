import React from 'react'
import "../components/SidebarOption.css"

function SidebarOption({active, text, Icon}) {
  return (
    <div className={`sidebarOption ${active && 'sidebaroption--active'}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption