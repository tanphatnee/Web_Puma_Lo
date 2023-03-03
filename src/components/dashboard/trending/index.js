import { useEffect, useState } from 'react';
import { Container, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Button, CircularProgress } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { getAllTrending } from '../../../api/trendingServices';
import DeleteProduct from './deleteProduct';

const useStyles = makeStyles({
  container: {
    width: '100%',
    marginTop: '100px',
  },
  cell: {
    
  },
  img: {
    maxWidth: '300px',
    width: '100%',
  },
  loading: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function Trending() {

  const classes = useStyles()

  const navigate = useNavigate();

  const [data, setData] = useState();
  const [showDel, setShowDel] = useState(false);
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true)
    const fetchProducts = async () => await getAllTrending()
      .then(res => {
        if(isMounted){
          setLoading(false);
          setData(res.data?.data)
        } 
      })
      .catch(err => console.log(err.message))
    fetchProducts()
    return () => { isMounted = false;}
  }, []);

  if(loading) {
    return (
      <Box className={classes.loading}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Container>
      <Box className={classes.container}>
        {showDel ? <DeleteProduct showDel={showDel} setShowDel={setShowDel} id={id} data={data} setData={setData}/> : null}
        <Button style={{backgroundColor: '#3f51b5', color: 'white'}} variant="contained" onClick={() => navigate('/dashboard/trending/createtrendingproduct')}>Thêm mới</Button>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell className={classes.cell}>Thao tác</TableCell>
                <TableCell className={classes.cell}>Name</TableCell>
                <TableCell className={classes.cell}>Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((product) => {
                return (
                  <TableRow key={product._id}>
                    <TableCell className={classes.cell}>
                      <Typography component="span">
                        <Link to={`/dashboard/trending/${product._id}`}>
                          <EditIcon
                            style={{color:"#00bfc7", cursor:"pointer"}} />
                        </Link>
                      </Typography>
                      <Typography component="span">
                        <DeleteIcon
                          style={{color:"#fb9678", cursor:"pointer"}}
                          onClick={()=>{
                            setShowDel(true)
                            setId(product._id)
                          }}
                        />
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.cell}>{product.name}</TableCell>
                    <TableCell className={classes.cell}><img className={classes.img} alt={product.name} src={product.imageUrl} /></TableCell>
                  </TableRow>
                    )
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}

export default Trending