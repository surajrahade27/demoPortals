import React from 'react'
import Card from '@mui/material/Card';
import PeopleIcon from '@mui/icons-material/People';
import Stack from '@mui/material/Stack';
import { CardContent} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PublicIcon from '@mui/icons-material/Public';
import PublicOffIcon from '@mui/icons-material/PublicOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';


var cardStyle = {
    display: 'block',
    width: '15vw',
    transitionDuration: '0.3s',
    height: '7vw',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
  }
  //tyle={{ backgroundColor: '#f5f5f5', borderRadius: 10, boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}


 function CardLayout({title, header, icon}) {
    const renderIcon = () =>{
        switch(icon){
        case "user":
            return <PeopleIcon />
        case "license":
           return <AssignmentIcon />
        case "portalactive":
           return <PublicIcon />   
        case "portalinactive":
            return <PublicOffIcon />  
        case "completions":
            return <CheckCircleIcon />
        case "inprogress":
            return <PendingIcon />
                        
    }
    }
  return (
      <Card sx={{ maxWidth: 345 }}  style={cardStyle}>
            <CardContent style={{ padding: '16px' }}> 
            <Stack spacing={2} direction="row">
                {renderIcon()}
                 <div> 
                <p>{header}</p>  
                 <p>{title}</p> 
                  </div>
            </Stack>
              </CardContent>  
    </Card>
  )
}
export default CardLayout;