import React from "react";
import { Grid, Typography, Button, Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import Header from "../components/Header";
import DealCard from "../components/dealCard";
import OurFeatuesCard from "../components/OurFeatuesCard";
import OurProductsCard from "../components/OurProductsCard";
import ShopAllCard from "../components/shopAllCard";
import LatesNewsCard from "../components/latesNewsCard";
import Imagecarousel from "../components/Imagecarousel";

import dealData from "../utils/data/dealData.js";
import ourProductsData from "../utils/data/ourProductsData.js";
import shopAllData from "../utils/data/shopAllData.js";
import latesNewsData from "../utils/data/latestNewsData.js";

import waveBottum from "../assets/imgs/wave-bottum.png";
import air from "../assets/imgs/svgs/air.svg";
import purse from "../assets/imgs/svgs/purse.svg";
import moneyNote from "../assets/imgs/svgs/moneyNote.svg";
import point from "../assets/imgs/svgs/point.svg";
import Rectangle17 from "../assets/imgs/Rectangle17.png";
import Rectangle18 from "../assets/imgs/Rectangle18.png";
import star from "../assets/imgs/svgs/star.svg";
import emptyStar from "../assets/imgs/svgs/emptyStar.svg";
import realReviewsImg from "../assets/imgs/realReviewsImg.png";

import iron from "../assets/imgs/1 1.png";
import slideshowp1 from "../assets/imgs/svgs/slideshowp1.svg";
import slideshowp2 from "../assets/imgs/svgs/slidershowp2.svg";

// Styled components
const BackgroundContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(10),
}));

const FeatureContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(12),
}));

const ProductContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(12),
}));

const NewsContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const Home = () => {
  return (
    <Box>
      <Header />
      {/* Apple Cider vinegar */}
      <BackgroundContainer>
        <Grid container alignItems="center">
          <Grid item md={6} xs={12}>
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <img
                src={iron}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ textAlign: { md: "left", xs: "center" }, py: 2 }}>
                  <Typography
                    variant="h3"
                    color="#F6623E"
                    sx={{
                      fontWeight: 400,
                      lineHeight: "42px",
                      fontSize: "30px",
                      marginTop: "20px",
                    }}
                  >
                    Good4Me
                  </Typography>
                  <Typography
                    variant="h1"
                    color="Black"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontSize: "56px",
                      lineHeight: "72px",
                    }}
                  >
                    Apple Cider Vinegar
                  </Typography>
                  <Typography variant="body1" color="textPrimary" paragraph>
                    Good4Me Apple Cider Vinegar gummies are the newest addition
                    to your morning health and well-being regime.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#F6623E" }}
                  >
                    Show now
                  </Button>
                </Box>
              </Box>
            </div>
          </Grid>
        </Grid>
      </BackgroundContainer>

      {/* Apple Cider vinegar */}

      {/* Good4Me Deal */}
      <BackgroundContainer>
        <Container>
          <Typography
            variant="h2"
            color="primary"
            align="center"
            sx={{
              fontSize: "36px",
              lineHeight: "32px",
              fontWeight: 500,
              color: "black",
            }}
          >
            GOOD4ME DEAL
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            paragraph
            align="center"
            sx={{ lineHeight: "24px", fontSize: "18px", fontWeight: 500 }}
          >
            Pick your beauty products today. 50% OFF on the most popular
            GOOD4ME. Order all classy products today!
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {dealData.map((item) => (
              <Grid item key={item.id} xs={12} sm={9} md={6} lg={3}>
                <DealCard data={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </BackgroundContainer>

      {/* Good4Me Deal */}

      {/* Our features */}
      <FeatureContainer>
        <Grid container spacing={4} justifyContent="center">
          <Grid item md={4} sm={6} xs={12}>
            <OurFeatuesCard
              svgs={air}
              svgsPoint={point}
              title="WORLDWIDE SHIPPING"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <OurFeatuesCard
              svgs={purse}
              title="30 DAYS GUARANTEE"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <OurFeatuesCard
              svgs={moneyNote}
              svgsPoint={point}
              title="SECURED PAYMENTS"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean"
            />
          </Grid>
        </Grid>
      </FeatureContainer>
      {/* Our features */}

      {/* TAKE CONTROL OF YOUR HEALTH */}
      <BackgroundContainer>
        <Grid container alignItems="center" spacing={4}>
          <Grid item md={6} xs={12}>
            <Typography
              variant="h1"
              sx={{ fontSize: "50px", fontWeight: 600, lineHeight: "72px" }}
            >
              TAKE CONTROL OF YOUR HEALTH
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              paragraph
              sx={{ fontSize: "16px", lineHeight: "25px", fontWeight: 500 }}
            >
              The Good4Me range has been formulated based on scientific &
              traditional evidence.
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              paragraph
              sx={{ fontSize: "16px", lineHeight: "25px", fontWeight: 500 }}
            >
              Our vitamins are here and ready to boost your mood, immunity and
              overall well-being!
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              sx={{ fontSize: "16px", lineHeight: "25px", fontWeight: 500 }}
            >
              Made in New Zealand from local and imported ingredients.
            </Typography>
            <Box mt={2}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#FFF8F6",
                  color: "black",
                  border: " 1px solid #F6623E ",
                }}
              >
                BROWSE OUR RANGE
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={Rectangle17} alt="" style={{ width: "100%" }} />
            <img
              src={Rectangle18}
              alt=""
              style={{ width: "100%", marginTop: 2 }}
            />
          </Grid>
        </Grid>
      </BackgroundContainer>
      {/* TAKE CONTROL OF YOUR HEALTH */}

      {/* Our Products Are */}
      <Box
        sx={{
          px: { xs: 2, md: 4, lg: 8 },
          mt: { xs: 6, lg: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: 36, fontWeight: 500, lineHeight: "32px" }}
        >
          OUR PRODUCTS ARE
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={4}>
          {ourProductsData.map((item) => (
            <Grid item key={item.id} xs={12} sm={9} md={6} lg={3}>
              <OurProductsCard data={item} />
            </Grid>
          ))}
        </Grid>
        <Box mt={4} display="flex" justifyContent="center">
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#FFF8F6",
              color: "black",
              border: " 1px solid #F6623E ",
            }}
          >
            VIEW ALL PRODUCTS
          </Button>
        </Box>
      </Box>
      {/* Our Products Are */}

      {/* Real Reviews */}
      <Box width="100%" bgcolor="#FEF0E7" mt="85px">
      <Box>
        <img src={slideshowp2} alt="" />
      </Box>
      <Grid container spacing={2} justifyContent="space-between" pt="70px" pb="45px" px={{ xs: 2, md: 6, lg: 12 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" align="center" fontWeight="medium" gutterBottom>
            REAL REVIEWS
          </Typography>
          <Typography variant="h4" align="center" color="#F6623E" fontWeight="medium" gutterBottom>
            REAL RESULTS
          </Typography>
          <Box display="flex" justifyContent="center" my={2}>
            <img src={star} alt="" />
            <img src={star} alt="" style={{ margin: '0 4px' }} />
            <img src={star} alt="" />
            <img src={star} alt="" style={{ margin: '0 4px' }} />
            <img src={emptyStar} alt="" />
          </Box>
          <Typography variant="body1" align="center" fontSize="26px" letterSpacing="1px" fontWeight="medium" gutterBottom>
            “We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website. We can't wait until you are a part of our Good4Me Family.”
          </Typography>
          <Typography variant="subtitle1" align="center" color="#F6623E" fontWeight="bold">
            _Chloe H.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img src={realReviewsImg} alt="" width={535} height={535} />
          </Box>
        </Grid>
      </Grid>
      <Box>
        <img src={slideshowp1} alt="" style={{ paddingBottom: "20px" }} />
      </Box>
    </Box>
      {/* Real Reviews */}

      {/* Shop All */}
      <ProductContainer>
        <Typography
          variant="h2"
          align="center"
          sx={{ fontSize: "36px", lineHeight: "32px", fontWeight: 500 }}
        >
          SHOP ALL
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={4} mb={2}>
          {shopAllData.map((item, index) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              <ShopAllCard data={item} />
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center">
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#FFF8F6",
              color: "black",
              border: " 1px solid #F6623E ",
            }}
          >
            VIEW ALL PRODUCTS
          </Button>
        </Box>
      </ProductContainer>

      {/* Shop All */}

      {/* LATEST NEWS */}
{/* <NewsContainer></NewsContainer> */}
  <Typography variant="h2" align="center" sx={{ color: "black", fontSize: "36px", fontWeight: 500, lineHeight: "32px" }}>
    LATEST NEWS
  </Typography>
  <Grid container spacing={4} justifyContent="center" mt={4}>
    {latesNewsData.map((item) => (
      <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} sx={{ justifyContent: 'center', display: 'flex' }}>
        <LatesNewsCard data={item} />
      </Grid>
    ))}
  </Grid>


      
      {/* LATEST NEWS */}

      {/* #Good4Me */}
      <Imagecarousel />
    </Box>
  );
};

export default Home;
