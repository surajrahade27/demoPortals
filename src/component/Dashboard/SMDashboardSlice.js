import React, {  useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSummary } from '../../redux/Dashboard/actions'
import CardLayout from '../Card/CardLayout'
import ClientSlice from "./ClientSlice";
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Link, Box, Stack, Grid} from "@mui/material";
import Breadcrum from "../BreadCrum/breadcrum";
import Loader from '../Loader/Loader'

function SMDashboardSlice() {

let dispatch = useDispatch();
const dashboard = useSelector(state => { return state.dashboard } );
const navigate = useNavigate();

useEffect (() => {
   if(!dashboard.summary)
    dispatch(fetchSummary());
},[]);

const handleAddClient = () =>{
  navigate("/addnewclient")
}

  return (
    
    <div >
      
      <Box height={80} />    
        <Box sx={{ flexGrow: 1 }} backgroundColor="#EFF2F3">
          <Breadcrum name="dashboard" />
          
          <Grid container justifyContent="flex-end">
                  <Link component="button"
                  variant="body2"
                  onClick={handleAddClient}>
                    +Add New Client
                    </Link>
            </Grid>
          { dashboard.loading && <Loader /> }
          { dashboard.summary &&
            <Grid container spacing={2}  direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}>
                  
                <Grid item xs={8} >  
                <br />             
                <Stack spacing={3} direction="row" >
                 <CardLayout title={dashboard.summary.license} header ="LICENSES" icon="license" />
                 <CardLayout title={dashboard.summary.activeusers} header ="ACTIVE USERS" icon="user" />
                 <CardLayout title={dashboard.summary.activeportals} header ="ACTIVE PORTALS" icon="portalactive"/>
                 <CardLayout title={dashboard.summary.inactiveportals} header ="INACTIVE PORTALS" icon="portalinactive" />
                 </Stack> <br />
                 <Stack spacing={3} direction="row">
                 <CardLayout title={dashboard.summary.completioncounts} header ="COMPLETIONS" icon="completions"/>
                 <CardLayout title={dashboard.summary.inprogresscounts} header ="INPROGRESS" icon="inprogress"/>
                 </Stack>
                </Grid>

                <Grid item xs={8} > </Grid>
            <Card style={{ height: 300, width: '85%' }}>
            <CardContent>
            <ClientSlice list={dashboard.summary.list} />
            </CardContent>
            </Card>
          
            </Grid>
            
          }
         
        </Box>
    </div>
  )
}

export default SMDashboardSlice;
