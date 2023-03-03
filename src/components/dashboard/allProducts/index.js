import { useEffect, useState } from 'react';
import { Container, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Button, CircularProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteProduct from './deleteProduct';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { paginationServices } from '../../../api/pagination';

const useStyles = makeStyles({
  container: {
    width: '100%',
    marginTop: '100px',
  },
  img: {
    maxWidth: '300px',
    width: '100%',
  },
  row: {
    position: 'relative',
  },
  loading: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagitnation: {
    margin: '12px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function AllProducts() {

  const classes = useStyles()

  const navigate = useNavigate();

  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [showDel, setShowDel] = useState(false);
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    let isMounted = true;
    setLoading(true)
    const fetchProducts = async () => await paginationServices(page)
      .then(res => {
        if(isMounted) 
        setData(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err.message))
    fetchProducts()
    return () => { isMounted = false;}
  }, [page]);

  const handleChangePagination = (e, numberPage) => {
    setPage(numberPage)
  }

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
        {showDel ? <DeleteProduct showDel={showDel} setShowDel={setShowDel} id={id} data={data} setData={setData} /> : null}
        <Button style={{backgroundColor: '#3f51b5', color: 'white'}} variant="contained" onClick={() => navigate('/dashboard/allproducts/createproduct')}>Thêm mới</Button>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Thao tác</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.product.map((product) => {
                return (
                  <TableRow key={product._id}>
                    <TableCell>
                      <Typography component="span">
                        <Link to={`/dashboard/allproducts/${product._id}`}><EditIcon style={{color:"#00bfc7", cursor:"pointer"}} /></Link>
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
                    <TableCell>{product.name}</TableCell>
                    <TableCell><img className={classes.img} alt={product.name} src={product.imageUrl} /></TableCell>
                  </TableRow>
                    )
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className={classes.pagitnation}>
          <Pagination
            onChange={handleChangePagination}
            page={page}
            count={data?.totalPages}
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default AllProducts