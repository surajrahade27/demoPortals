import React from 'react'
import '../../css/main.css'
import '../../css/normalize.css'

function Toomanyattempt({firstmsg, secondmsg, time}) {
  return (
    <div className="alert item-bg-color danger no-margin">
        <div className="flex-table flex-table-left">
        <aside><div class="icon-link icon-link-sm icn-invalid"></div></aside>
        <aside>
        <h6 className="alert-heading">{firstmsg}</h6>
        <p>{secondmsg} <span className="bolder">
          
          {time==1? time +" minute" :
          time +" minutes"} 
          </span></p>
        </aside>
        </div>
      
    </div>
  )
}

export default Toomanyattempt
