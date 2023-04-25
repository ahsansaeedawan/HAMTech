/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";
import aws from "../../../assets/images/aws.png";
import ms from "../../../assets/images/ms.webp";
import linux from "../../../assets/images/linux.png";
import cisco from "../../../assets/images/cisco.png";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            Multiple Satisfied Clients
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune companies, startups, universities and governmental
            institutions love HAM Technology Services
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nick Willever"
              date="1 day ago"
              review="This is an excellent to work and get services From HAM technology, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="I found solution to all my requirements from HAM Tech. Its really affordable, very humble team !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Great Team. Helped me cut the time to set up a site. I highly recommend for clients who need a IT Services!."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems={"center"}
          display="flex"
        >
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={aws}
              alt="Apple"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={ms}
              alt="Facebook"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={cisco}
              alt="Nasa"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={linux}
              alt="Vodafone"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
