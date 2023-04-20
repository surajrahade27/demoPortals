import React, { useState, useEffect } from "react";
import '../../css/main.css'
import '../../css/normalize.css'
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Timer({seconds, progress}) {
  return (
    <div >
      <aside id="counterContent2Fa">
								<div style={{ width: 50, height: 50 }}>
                                    <CircularProgressbar value={progress} text={`${seconds}`}
                                    styles={buildStyles({
                                        textSize: '25px',
                                    })} />
									
			</div>
		</aside>
    </div>
  );
}

export default Timer;
