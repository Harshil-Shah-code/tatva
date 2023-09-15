import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Pagination } from '@mui/material';
// import Logo from "C:/Users/INDIA/Desktop/react/tatva/src/logo.svg";
function Product(props) {
  const [data, setData] = useState(null);


  const addToCartHandler = (itemId) => {
    props.onAddToCart(itemId);

  }


  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyCCN1uWwyUQYpZ79P80p_HHu0AzK-dkdnQ")
      .then((result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      });  //AIzaSyCCN1uWwyUQYpZ79P80p_HHu0AzK-dkdnQ   :API key   
  }, []);  // useEffect is used so that api is called only once i.e blank array for class component componentDidMount
  return (
    <>
      <div className="cards card" style={{ margin: "50px 80px 50px 80px", font: "20px", fontFamily: "Roboto", color: "#414141", paddingTop: "30px" }}>
        {data && data.items && data.items.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345 }} style={{ backgroundColor: "#cccccc" }} >
            <CardActionArea>
              <img
                src={item.volumeInfo.imageLinks.thumbnail}
                alt="green iguana"
                style={{ height: "140px", marginLeft: "auto", marginRight: "auto", display: "block", marginTop: "1rem" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.volumeInfo.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography gutterBottom variant="h5" component="div"  >
                Rs. {item.volumeInfo.pageCount}
              </Typography>
              <Button size="small" color="primary" onClick={() => addToCartHandler(item.id)}>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}

      </div>
      <Pagination count={10} style={{ display: "flex", justifyContent: "center" }} />
    </>
  );


}

export default Product;