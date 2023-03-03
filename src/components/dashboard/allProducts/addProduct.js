import { useState } from 'react';
import { createProduct } from '../../../api/productServices';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Grid, Typography, TextField, Button, CircularProgress  } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '100%',
    marginTop: '100px',
  },
  btnGroup: {
    marginTop: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    margin: '8px'
  },
  field: {
    margin: '8px 0'
  },
  errormessage: {
    color: 'red'
  }
})

function CreateProduct() {

  const classes = useStyles();

  const navigate = useNavigate();

  const [newData, setNewData] = useState({
    name: '',
    description: '',
    gender: '',
    status: '',
    price: '',
    category: '',
  });
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value
    })
  }

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }
  
  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append('image', file)
    for( let key in newData) {
      formData.append(key, newData[key])
    }
    try {
      await createProduct(formData)
      setLoading(false)
      navigate("/dashboard/allproducts")
    } catch (error) {
      console.log("Something is Wrong")
    }
  }

  const handleCancelClick = () => {
    navigate("/dashboard/allproducts")
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Trường này là bắt buộc'),
    description: Yup.string()
      .required('Trường này là bắt buộc'),
    gender: Yup.string()
      .required('Trường này là bắt buộc'),
    status: Yup.string()
      .required('Trường này là bắt buộc'),
    price: Yup.string()
      .required('Trường này là bắt buộc'),
    category: Yup.string()
      .required('Trường này là bắt buộc'),
  });
  
  const initialValues = {
    name: '',
    description: '',
    gender: '',
    status: '',
    price: '',
    category: '',
  };
  
  if(!newData) return (
    <div>Loading....</div>
  )

  return (
    <Container maxWidth={false} style={{display: "flex", height: "100vh", backgroundColor: "rgb(204, 204, 204, 0.9)"}}>
      <Box sx={{m:"auto", width: "100%"}} style={{marginTop: "100px"}}>
        <Grid
        display= "flex" 
        flexdirection= "column"
        alignItems="center"
        justifycontent="center"
        container
        xs={12}
        item
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "28px",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "#94B49F"
        }}
        >
          <Typography variant="h4" sx={{mb:2}}>Create New Product</Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form style={{width: "100%"}}>
              <Grid item xs={12}>
                <Field
                  className={classes.field}
                  fullWidth
                  as={TextField}
                  value={newData.name}
                  label="Name"
                  name="name"
                  onChange={e => {handleChange(e)}}
                  required
                />
                <Field
                  className={classes.field}
                  fullWidth
                  as={TextField}
                  value={newData.description}
                  label="Description"
                  name="description"
                  onChange={e => {handleChange(e)}}
                  required
                />
                <div style={{display: "flex", flexDirection: "column", margin: '8px 0'}}>
                  <select style={{padding: '8px 0', borderRadius: '5px', margin: "4px 0", fontSize: "16px"}} name="gender" onChange={e => {handleChange(e)}} value={newData.gender}>
                    <option value="" disabled>Gender</option>
                    <option name="male" value="male">Male</option>
                    <option name="female" value="female">Female</option>
                    <option name="all" value="all">All</option>
                  </select>
                </div>
                {file ? <img style={{maxWidth: "600px", maxHeight: "600px"}} alt="preview" src={URL.createObjectURL(file)} /> : null }
                <input
                  type='file'
                  className={classes.field}
                  label="image"
                  name="image"
                  onChange={onFileChange}
                />
                <div style={{display: "flex", flexDirection: "column", margin: '8px 0'}}>
                  <select style={{padding: '8px 0', borderRadius: '5px', margin: "4px 0", fontSize: "16px"}} name="status" onChange={e => {handleChange(e)}} value={newData.status}>
                    <option value="" disabled>Status</option>
                    <option name="new" value="new">New</option>
                    <option name="old" value="old">Old</option>
                  </select>
                </div>
                <Field
                  type="number"
                  className={classes.field}
                  fullWidth
                  as={TextField}
                  value={newData.price}
                  label="Price"
                  name="price"
                  onChange={e => {handleChange(e)}}
                  required
                />
                <div style={{display: "flex", flexDirection: "column", margin: '8px 0'}}>
                  <select style={{padding: '8px 0', borderRadius: '5px', margin: "4px 0", fontSize: "16px"}} name="category" onChange={e => {handleChange(e)}} value={newData.category}>
                    <option value="" disabled>Category</option>
                    <option name="shoes" value="shoes">Shoes</option>
                    <option name="clothes" value="clothes">Clothes</option>
                  </select>
                </div>
              </Grid>
              <Grid className={classes.btnGroup} item container xs={12}>
                  <Button className={classes.btn} variant="contained" onClick={onSubmit}>
                    {loading? <CircularProgress style={{marginRight:'8px', width:'20px', height:'20px'}}/> : null}
                    Xác nhận
                  </Button>
                  <Button className={classes.btn} variant="contained" onClick={handleCancelClick}>Hủy</Button>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Box>
    </Container>
  )
}

export default CreateProduct