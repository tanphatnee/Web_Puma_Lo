import { useEffect, useState } from 'react';
import { getTrending, updateTrending } from '../../../api/trendingServices';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Box, Grid, Typography, TextField, Button, CircularProgress } from '@material-ui/core';
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
  }
})

function UpdateProduct() {

  const classes = useStyles();

  const { id } = useParams();

  const navigate = useNavigate();

  const [newData, setNewData] = useState({
    name: '',
    description: '',
  });
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
   
  useEffect(() => {
    const fetchProduct = async () => {
      await getTrending(id)
      .then(data => setNewData(data.data.data))
      .catch(err => console.log(err.message))
    }
    fetchProduct()
  },[id])

  
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
    e.preventDefault();
    setLoading(true);
    const formData = new FormData()
    formData.append('image', file)
    for( let key in newData) {
      formData.append(key, newData[key])
    }
    try {
      await updateTrending(id, formData)
      setLoading(false);
      navigate("/dashboard/trending")
    } catch (error) {
      console.log("Something is Wrong")
    }
  }

  const handleCancelClick = () => {
    navigate("/dashboard/trending")
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Trường này là bắt buộc'),
    description: Yup.string()
      .required('Trường này là bắt buộc'),
  });
  
  const initialValues = {
    name: '',
    description: '',
  };
  
  if(!newData) return (
    <div>Loading....</div>
  )

  return (
    <Container maxWidth={false} style={{display: "flex", height: "100vh", backgroundColor: "rgb(204, 204, 204, 0.9)"}}>
      <Box sx={{m:"auto", width: "100%"}} style={{marginTop: "100px"}}>
        <Grid
        display= "flex" 
        alignItems="center"
        justifycontent="center"
        container
        xs={12}
        item
        style={{
          padding: "28px",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "#94B49F",
          flexDirection: "column"
        }}
        >
          <Typography variant="h4" sx={{mb:2}}>Edit Trending Products</Typography>
          <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
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
                  {file ? 
                    <img style={{maxWidth: "600px", maxHeight: "600px"}} alt="preview" src={URL.createObjectURL(file)} />
                    : <img style={{maxWidth: "600px", maxHeight: "600px"}} src={newData.imageUrl} alt="preview" />}
                  <input
                    type='file'
                    className={classes.field}
                    label="image"
                    name="image"
                    onChange={onFileChange}
                  />
                </Grid>
                <Grid className={classes.btnGroup} item container xs={12}>
                  <Button className={classes.btn} variant="contained" onClick={onSubmit} type="submit">
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

export default UpdateProduct