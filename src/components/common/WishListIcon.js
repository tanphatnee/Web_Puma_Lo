import { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { AddWishList } from '../../redux/Products/actions';

function WishListIcon(props) {

  const { item, liked } = props;

  const dispatch = useDispatch();

  const userId = useSelector(state => state.user?.user?.userId) || '';

  const [like, setLike] = useState(liked)

  useEffect(() => {
    setLike(liked)
  },[liked])
    
  const addWishList = () => {
    dispatch(AddWishList(userId, item._id, item));
    setLike(!like)
  }


  return (
    <>
      { like ? 
        <FavoriteIcon className='icon' onClick={addWishList} />
        :
        <FavoriteBorderIcon className='icon' onClick={addWishList} />
      }
    </>
  )
}

export default WishListIcon