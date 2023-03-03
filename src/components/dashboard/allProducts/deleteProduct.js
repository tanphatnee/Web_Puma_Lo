import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { deleteProduct } from '../../../api/productServices';
import { Modal, Button, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  btnGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    margin: '12px',
    padding: '8px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px 80px',
    backgroundColor: '#ccc'
  },
})

function DeleteProduct(props) {

  const classes = useStyles();
  
  const { showDel, setShowDel, id, data, setData } = props

  const [loading, setLoading] = useState(false);

  const cancleDel = () => {
    setShowDel(false)
  }

  const handleDel = async () => {
    setLoading(true);
    try{
      await deleteProduct(id);
      setLoading(false);
      const newData = data.filter((item) => {
        return item._id !== id
      })
      setData(newData)
      setShowDel(false)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Modal
        open={showDel}
        onClose={cancleDel}
      >
        <div className={classes.container}>
          <h2>Bạn có muốn xóa không?</h2>
          <div className={classes.btnGroup}>
              <Button variant="contained" className={classes.btn} onClick={cancleDel}>Không</Button> 
              <Button variant="contained" className={classes.btn} onClick={handleDel}>
                {loading? <CircularProgress style={{marginRight:'8px', width:'20px', height:'20px'}}/> : null}
                Có
              </Button> 
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default DeleteProduct