import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/css/createAdd.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import image from "../../../assets/images/low-fidelity.jpg";
import Button from "@mui/material/Button";
import $ from "jquery";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CreateAddsPage = () => {

  const navigate = useNavigate();
  const [cardData, setCardData] = useState([
    {
      isChecked: false,
      image: image,
      title: "Text Ad",
      about: "Create",
    },
    {
      isChecked: false,
      image: image,
      title: "Media Ad",
      about: "Create",
    },
  ]);

  const centerText = {
    textAlign: "center",
    backgroundColor: "#ebe5e563",
    zIndex: 100,
  };
  const cardActionsStyle = {
    display: "flex",
    justifyContent: "center",
    ...centerText,
    // Add any additional styles you need
  };
  const imageSize = {
    width: "50%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    ...centerText,
    marginRight: 0,
    paddingRight: 0,
    border: "1px solid rgba(9, 9, 9, 0.3)",
    borderRadius: "20px 20px 0 0",
    zIndex: "-100 !important",
  };

  const buttonStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
    color:"#fff",
    padding:"5px 60px",
  };

  const handleCheckboxChange = (data, ind) => {
    let newValues = [...cardData];
    if (data == false) {
      newValues[ind].isChecked = true;
      setCardData(newValues);
    } else {
      newValues[ind].isChecked = false;
      setCardData(newValues);
    }
  };

  const handleNext = () =>{
    let newValues = [...cardData];
    newValues.map((data) => {
      if(data.isChecked){
        // if(data.isChecked =
        navigate('/createText&Media')
      }else{
        $('#myCard').addClass('highlightCard');
        setTimeout(function () {
          $('#myCard').removeClass('highlightCard');
        }, 1000); // 2 seconds
      }
    })
  }

  return (
    <div className="createAdds">
      <div className="create-adds-container">
        <div className="headingAdds">Create Ads</div>
        <Grid container spacing={2} className="cards">
          {cardData.map((data, ind) => (
            <Grid item key={data.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{ maxWidth: 345 }}
                onClick={() => handleCheckboxChange(data.isChecked, ind)}
                 id="myCard"
              >
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <CardHeader
                    sx={{ display: "flex", justifyContent: "flex-start" }}
                    action={
                      <>
                        <Checkbox
                          checked={data.isChecked}
                          onChange={() =>
                            handleCheckboxChange(data.isChecked, ind)
                          }
                          inputProps={{ "aria-label": "controlled" }}
                          style={{ justifyContent: "flex-start" }}
                        />
                      </>
                    }
                  />
                </div>
                <div className="imageCenter">
                  <CardMedia
                    component="img"
                    height="194"
                    image={data.image}
                    alt="Paella dish"
                    style={imageSize}
                  />
                </div>

                <CardContent style={centerText}>
                  <Typography variant="body2" color="text.secondary">
                    <h5
                      style={{
                        fontSize: "12px",
                        color: "rgba(34, 31, 31, 0.3)",
                        marginBottom: "0px",
                        fontWeight: "550",
                        zIndex: "900",
                      }}
                    >
                      {data.about}
                    </h5>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing style={cardActionsStyle}>
                  {/* <div style={containerStyle}> */}
                  <Typography variant="body2" color="text.secondary">
                    <h5
                      className="cardFooter"
                      style={{ fontWeight: "550", color: "rgba(9, 9, 9, 0.7)" }}
                    >
                      {data.title}
                    </h5>
                  </Typography>
                  {/* </div> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button variant="contained" color="primary" style={buttonStyle} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default CreateAddsPage;
