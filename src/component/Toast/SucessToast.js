import React, {useEffect} from 'react'
import '../../css/main.css'
import '../../css/normalize.css'
import $ from 'jquery';

function SucessToast(message) {

    const toast = () => {
    	$(function(){
            $('.toast.active').not('#toastSuccess').removeClass('active');
            $('#toastSuccess').toggleClass('active');
            return false;
        });
 }

 useEffect(() =>{
 toast();
 },[])
  return (
    <div>

					<div className="toast" id="toastSuccess">
						<div className="toast-wrapper success">
							<div className="toast-content">
								<div className="toast-header">
									<div className="flex-table flex-table-left-sm align-items-center">
										<aside><div className="icon-link icon-link-sm icn-tick-1"></div></aside>
										<aside>{message?message:"Your account has been saved."}</aside>
									</div>
								</div>
							</div>
							<div className="toast-action">
								<a href="#" className="toast-close"></a>
							</div>
						</div>
					</div>
    </div>
  )
}

export default SucessToast
