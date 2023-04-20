import React from 'react'


function Invaliderror({errormessage}) {
  return (
    <div className="flex-table flex-table-left align-items-center form-field-message error">
      <aside><div className="icon-link icon-link-sm icn-profile-2"></div></aside>
      <aside><p className="bold">{errormessage}</p></aside>
    </div>
  )
}

export default Invaliderror
