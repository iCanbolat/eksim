import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Popup, Marker, GeoJSON } from "react-leaflet";
import { styled } from "@mui/material/styles";
import Image from "../Screens/image.png";
import geo from "../Screens/tr-cities.json";
import others from "../Screens/custom.geo.json";
import Ruzgar from "../Screens/assets/ruzgar_gulu.png";
import Su from "../Screens/assets/su_damlasi.png";
import Gunes from "../Screens/assets/gunes_paneli.png";
import Heart from "../Screens/harita.svg";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

const position = [38.91563000519221, 35.60911060360513];

const StyledAvatar = styled(Avatar)(() => ({
  width: 56,
  height: 56,
  border: "2px solid green",
}));

const StyledP = styled(Typography)(({ theme }) => ({
  color: "#1c1a1a",
  fontWeight: 600,
  position: "relative",
  "&:after": {
    content: '""',
    height: "1.3px",
    width: "40%",
    position: "absolute",
    bottom: "0",
    left: 0,
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledTitles = styled(Typography)(({ theme }) => ({
  color: "#1c1a1a",
  fontWeight: 600,
  position: "relative",
  "&:after": {
    content: '""',
    height: "1.3px",
    width: "45%",
    position: "absolute",
    bottom: "0",
    left: '28%',
    backgroundColor: '#1c1a1a',
  },
}));

const markers = [
  {
    type: "r",
    lat: "41.06011353642187",
    lng: "28.07844596531515",
  },
  {
    type: "r",
    lat: "39.92859150971481",
    lng: "28.163754371722284",
  },
  {
    type: "r",
    lat: "38.19305637794584 ",
    lng: "26.880875702881287",
  },
  {
    type: "r",
    lat: "38.280982291338965",
    lng: "26.412205533628185",
  },
  {
    type: "r",
    lat: "37.123192837358204",
    lng: "36.503381335995016",
  },
  {
    type: "g",
    lat: "37.92250077020128",
    lng: "40.20318781642432",
  },
  {
    type: "g",
    lat: "37.36028234812383",
    lng: "40.678367785071735",
  },
  {
    type: "g",
    lat: "37.503569757640975",
    lng: "42.46139741088019",
  },
  {
    type: "g",
    lat: "36.83253392266465",
    lng: "37.14452425802588",
  },
  {
    type: "h",
    lat: "40.994851109726966",
    lng: "39.73034266135736",
  },
  {
    type: "h",
    lat: "41.173492594808714",
    lng: "41.814347658968245",
  },
  {
    type: "h",
    lat: "41.114910922255525",
    lng: "42.69373549160782",
  },
  {
    type: "mix",
    lat: "40.54936500734228",
    lng: "30.39433064711595",
  },
  {
    type: "mix",
    lat: "40.18281960407959",
    lng: "36.55585858249134",
  },
  {
    type: "mix",
    lat: "40.663653558876234",
    lng: "36.10693520897225",
  },
];

const ruzgar = markers.filter((obj) => obj.type == "r");

const mix = markers.filter((obj) => obj.type == "mix");

const hidro = markers.filter((obj) => obj.type == "h");

const gunes = markers.filter((obj) => obj.type == "g");

const Map = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopper = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const theme = useTheme();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height:'90%',
    bgcolor: "background.paper",
    borderRadius:'1%',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Grid container>
      <Grid item md={12} sx={{ width: "100%", mt: 5 }}>
        <Typography
          textAlign="center"
          variant="h3"
          color="primary"
          sx={{ fontWeight: "bold", mt: 5, mb: 3 }}
          component="div"
        >
          Eksim Yenilenebilir Yatırım Haritası
        </Typography>
        <Typography
          textAlign="center"
          variant="h4"
          sx={{ fontWeight: "bolder", color: "#275d1f", mb: 3 }}
          component="div"
        >
          TOPLAM 879 MW
        </Typography>
        <Typography
          textAlign="center"
          variant="h5"
          sx={{ fontWeight: "bolder", color: "#275d1f", mb: 5 }}
          component="div"
        >
          RES: 642 MW | HES: 162 MW | GES: 70 MW | BES: 5 MW
        </Typography>
      </Grid>
      <Grid item md={12} xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            md={12}
            style={{
              height: 1200,
              width: "100%",
              backgroundImage: "url(" + Heart + ")",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "46.7%",
                  top: "40.1%",
                },
              }}
              onClick={handlePopper}
            >
              <img sx={{ width: "100%" }} src={Ruzgar}></img>
              <Popper
                id="tokat"
                open={open}
                placement="top"
                anchorEl={anchorEl}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        border: 1,
                        py: 3,
                        px: 2,
                        bgcolor: "background.paper",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <StyledAvatar
                            src={Image}
                            sx={{
                              marginRight: "30px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bolder",
                              lineHeight: 1.3,
                              width: "45%",
                            }}
                            gutterBottom
                            component="div"
                          >
                            Silivri Rüzgar Enerjisi Santrali
                          </Typography>

                          <Box>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 600 }}
                              component="div"
                            >
                              101
                            </Typography>
                            <StyledP
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 1 }}
                              component="div"
                            >
                              MW
                            </StyledP>
                          </Box>
                        </Box>

                        <Button
                          sx={{ textTransform: "none" }}
                          variant="contained"
                          fullWidth
                          size="small"
                          onClick={handleModalOpen}
                        >
                          Detayını Gör
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Box>
            <Modal
              open={modalOpen}
              onClose={handleModalClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen}>
                <Box sx={style}>
                  <Grid container>
                    <Box
                      item
                      md={12}
                      style={{
                        height: 300,
                        width: "100%",
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></Box>
                    <Grid item md={12}>
                      <Typography
                        variant="h5"
                        component="h2"
                        color='primary'
                        sx={{ textAlign: "center", mt: 3, fontWeight:'bolder' }}
                      >
                        Silivri Rüzgar Enerjisi Santrali
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Toplam Enerji : 101 MW
                      </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Firma Adı
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      Ütopya Elektrik Üretim Sanayi ve Ticaret A.Ş.
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Lokasyon
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      İzmir - Bergama
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Kapasite
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      51.MWe / 51.5 MWm
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Faaliyete Başlangıç
                      </StyledTitles>
                      <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      2009 (15 MWe), 2010 (30 MWe),2013 (40 MWe),2014 (50 MWe),2015 (51.5 MWe)
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Karbon Kredi Sertifikası
                      </StyledTitles>
                      <Grid item xs={12} style={{
                        height: 50,
                        textAlign:'center',
                        width: "50%",
                        margin:'auto',
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",}}></Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "4.1%",
                  top: "4.2%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Ruzgar}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "17.3%",
                  top: "36.6%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Ruzgar}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "21.5%",
                  top: "44%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Ruzgar}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "15.8%",
                  top: "49%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Ruzgar}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "8%",
                  top: "57.5%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Ruzgar}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "9.5%",
                  top: "61.7%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Ruzgar}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "48.9%",
                  top: "44.9%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Ruzgar}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "46.5%",
                  top: "69%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Ruzgar}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "55.4%",
                  top: "83%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Gunes}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "71.5%",
                  top: "78%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Gunes}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "52.5%",
                  top: "56.3%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Gunes}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "24.8%",
                  top: "55.7%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Gunes}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "46.2%",
                  top: "51.6%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Gunes}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "69.7%",
                  top: "72%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Gunes}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "81.4%",
                  top: "76.5%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Gunes}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "68.9%",
                  top: "48%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Su}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "74.7%",
                  top: "40%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Su}></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "77.6%",
                  top: "40%",
                },
              }}
              onClick={handlePopper}
            >
              <img style={{ width: "100%" }} src={Su}></img>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Map;
