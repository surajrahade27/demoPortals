import React from 'react'


function Invaliderror({errormessage, icon}) {
  return (
    <div className="flex-table flex-table-left align-items-center form-field-message error">
      <aside><div className={`icon-link icon-link-sm ${icon}`}></div></aside>
      
      <aside><p className="bold">{errormessage}</p></aside>
    </div>
  )
}

export default Invaliderror

