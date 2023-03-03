import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Profile from '../../common/Profile';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: '12px solid transparent',
      borderRight: '12px solid transparent',
      borderBottom: '12px solid white',
      position: 'absolute',
      top: '33px',
      left: '50%',
      transform: 'translate(-50%, 0)',
      '@media (max-width: 600px)' :{
        top: '36px',
      }
    },
    img: {
      height: '60px',
    },
})

function PageHeader(props) {

  const classes = useStyles()

  const [showProfile, setShowProfile] = useState(false);

  const { open, handleOpen } = props

  const toggleShowProfile = () => {
    setShowProfile(!showProfile)
  }

  return (
    <>
      <AppBar open={open}>
        <Toolbar className={classes.container}>
          <IconButton
              sx={{mr: 2, ...(open && {display: 'none'})}}
              onClick={handleOpen}
              edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Link to="/dashboard">
              <img className={classes.img} alt="logo" src="/images/logo.png" />
            </Link>
          </Box>
          <Box>
            <IconButton onClick={toggleShowProfile}>
              <AccountCircleOutlinedIcon />
              {showProfile && <div className={classes.triangle}></div>}
            </IconButton>
            {showProfile && <Profile />}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default PageHeader
