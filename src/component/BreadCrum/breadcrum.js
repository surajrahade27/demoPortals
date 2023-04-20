
import React from 'react'
import { Grid, Link, Breadcrumbs , Typography  } from "@mui/material"

var gridstyle={backgroundColor: '#B2BEB5'}

function Breadcrum({name}) {
  return (
    <Grid container spacing={2}  style={gridstyle}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Administrator
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Dashboard
            </Link>
            <Typography color="text.primary">{name}</Typography>
          </Breadcrumbs>
          
        </Grid>
  )
}

export default Breadcrum;



