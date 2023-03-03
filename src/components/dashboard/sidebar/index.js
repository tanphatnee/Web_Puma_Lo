import { useState } from 'react';
import { Link } from "react-router-dom";
import { Close } from '@material-ui/icons';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Drawer, Box, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header';

const useStyles = makeStyles({
  sidebar: {
    backgroundColor:'rgb(25, 118, 210)',
  },
})

function Sidebar() {

  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const boxSX = {
    "&:hover": {
      backgroundColor: 'lightblue',
      borderRadius: '5px',
      color: 'black'
    }
  }

  return (
    <>
      <Header open={open} handleOpen={handleOpen}/>
      <Drawer
        anchor="left"
        sx={{
          width: 240
        }}
        open={open}
        ModalProps={{ onClose: handleClose}}
      >
        <Box className={classes.sidebar} display="flex" flexDirection="column" height="100%">
          <Box textAlign="right" p={2}>
            <IconButton sx={{cursor: 'pointer', "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                padding: "8px",
                borderRadius: "50%"
              }}}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </Box>
          <Link to="/dashboard/allproducts">
            <Box sx={boxSX} display="flex" alignItems="center" p={3}>
              <FiberManualRecordIcon sx={{mr: 1, fontSize:28}} />
              <Typography fontSize="20px">
                AllProducts
              </Typography>
            </Box>
          </Link>
          <Link to="/dashboard/trending">
            <Box sx={boxSX} display="flex" alignItems="center" p={3}>
              <FiberManualRecordIcon sx={{mr: 1, fontSize:28}} />
              <Typography fontSize="20px" >
                Trending
              </Typography>
            </Box>
          </Link>
        </Box>
      </Drawer>
    </>
  )
  
}

export default Sidebar