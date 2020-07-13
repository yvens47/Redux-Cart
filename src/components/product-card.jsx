import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    float: "left",
    margin: "3px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  }
}));

export default function ProductCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className={classes.root}>
      {/* <CardMedia
          className={classes.media}
          image={props.product.defaultImage}
          title="Paella dish"
          component="image"
        /> */}
      <div className="product_image">
        <a href={`/store/product/${props.product._id} `}>
          <img src={props.product.defaultImage} />
        </a>
      </div>

      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          <a href={`/store/product/${props.product._id} `}>
            {props.product.name}
          </a>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.product.price}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={() => props.handleAddToCart(props.product)}
            aria-expanded={expanded}
            aria-label="add to Cart"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Typography>
      </CardContent>
    </Card>
  );
}
