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
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";
import aws from "../../../assets/images/aws.png";
import cx from "../../../assets/images/3CX-Logo.png";
import fanvil from "../../../assets/images/fanvil.png";
import yealink from "../../../assets/images/yealink.png";
import sonicwall from "../../../assets/images/sonicwall.png";
import ms from "../../../assets/images/ms.webp";
import dgoc from "../../../assets/images/disigtal.png";
import linux from "../../../assets/images/linux.png";
import dinstar from "../../../assets/images/dinstar.png";
import cisco from "../../../assets/images/cisco.png";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid
            container
            item
            xs={12}
            md={7}
            justifyContent="center"
            mx="auto"
            textAlign="center"
          >
            <MKTypography variant="h3" color="white">
              Do you love HAM Technology Services
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              Feel free to &amp; Contact!!!
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum is simply dummy text of the printing and
              typesetting industry Lorem Ipsum is simply dummy text of the
              printing and typesetting industry
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="#"
              sx={{ mb: 2 }}
            >
              +971 4 388 6011
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Available Services
            </MKTypography>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              display={"flex"}
              alignItems="center"
            >
              <Grid item xs={4} lg={2}>
                <Tooltip title="AWS">
                  <MKBox component="a">
                    <MKBox component="img" src={aws} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="3CX">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="img" src={cx} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Fanvil">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="img" src={fanvil} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Yealink">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="img" src={yealink} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Sonicwall">
                  <MKBox component="a" target="_blank">
                    <MKBox component="img" src={sonicwall} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              display={"flex"}
              alignItems="center"
            >
              <Grid item xs={4} lg={2}>
                <Tooltip title="Digital Occean">
                  <MKBox component="a">
                    <MKBox component="img" src={dgoc} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Microsoft">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="img" src={linux} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Yealink">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="img" src={dinstar} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Sonicwall">
                  <MKBox component="a" target="_blank">
                    <MKBox component="img" src={cisco} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Microsoft">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="img" src={ms} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
