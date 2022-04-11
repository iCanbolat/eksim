import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Button,
  Grid,
  Typography,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  Paper,
  CardActions,
  CardMedia,
  IconButton,
  Avatar,
} from "@mui/material";
import React from "react";
import Image from "./image.png";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Map from "../Components/Map";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

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
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  textTransform: "none",
  fontWeight: "bold",
  justifyContent: "flex-start",
}));

const StyledIcon = styled(ArrowCircleRightIcon)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "asdsad"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "asdsad"),
  createData("Eclair", 262, 16.0, 24, 6.0, "asdsad"),
  createData("Cupcake", 305, 3.7, 67, 4.3, "asdsad"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, "asdsad"),
];

function createData(name, calories, fat, carbs, protein, a) {
  return { name, calories, fat, carbs, protein, a };
}

const content = [
  "Susurluk RES",
  "Kilik RES",
  "Kayakdüzü RES",
  "Silivri RES",
  "Hasanbeyli RES",
  "Seferihisar RES",
  "Ovacık RES",
  "Gevye RES",
  "Skole RES",
];

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

const Wind = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            height: 300,
            width: "100%",
            backgroundImage: "url(" + Image + ")",
          }}
        >
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              mb: 1,
            }}
          >
            <Typography
              variant="h2"
              style={{ textAlign: "start" }}
              color="white"
              component="div"
            >
              Rüzgar Enerjisi <br></br> Santralleri
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Container sx={{ pb: 2 }}>
        <Typography variant="body1" sx={{ pt: 2 }} component="div">
          Elektrik Enerji > Enerji üretim > Rüzgar Enerjisi Santralleri
        </Typography>
      </Container>
      <Divider></Divider>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={5}>
          <Grid item md={4} xs={12}>
            <Card sx={{ minWidth: 275, p: 3, backgroundColor: "#e5f2e1" }}>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }} component="div">
                  Santrallerimiz
                </Typography>
                {content.map((x) => (
                  <Grid item xs={12} sx={{ mb: 1 }}>
                    <StyledButton
                      startIcon={<StyledIcon />}
                      variant="outlined"
                      size="medium"
                      fullWidth
                      sx={{ py: 2, px: 4 }}
                    >
                      {x}
                    </StyledButton>
                  </Grid>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={8} xs={12}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: "bold" }}
              component="div"
            >
              Rüzgar Enerjisi Santralleri
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontWeight: "bold" }}
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, fontWeight: "bold" }}
              component="div"
            >
              Liste Projeler:
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Proje Adı ve Lokasyonu</StyledTableCell>
                    <StyledTableCell align="right">
                      Proje Şirketi
                    </StyledTableCell>
                    <StyledTableCell align="right">Lisans</StyledTableCell>
                    <StyledTableCell align="right">
                      Aktif Kapasite
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      İnşaat Kapasite
                    </StyledTableCell>
                    <StyledTableCell align="right">Ek Kapasite</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.protein}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.a}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography
              variant="h4"
              sx={{ mt: 5, mb: 2, fontWeight: "bold", textAlign: "center" }}
              color="primary"
              component="div"
            >
              Rüzgar Enerjisi Santrali
            </Typography>
            <Typography
              textAlign="center"
              variant="h5"
              sx={{ fontWeight: "bolder", color: "#275d1f", mb: 5 }}
              component="div"
            >
              RES: 642 MW
            </Typography>
            <Grid item md={12} xs={12} sx={{ mb:4 }}>
              <MapContainer
                center={position}
                style={{ height: 650 }}
                zoom={5}
                doubleClickZoom={false}
                dragging={window.innerWidth <= 720 ? true : false}
                tap={false}
                scrollWheelZoom={false}
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((mark) => (
                  <Marker position={mark}>
                    <Popup>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item md={4}>
                          <StyledAvatar src={Image} />
                        </Grid>
                        <Grid item md={4}>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: "bolder", lineHeight: 1.3 }}
                            gutterBottom
                            component="div"
                          >
                            Silivri Rüzgar Enerjisi Santrali
                          </Typography>
                        </Grid>
                        <Grid item md={4}>
                          <Typography
                            variant="h4"
                            sx={{ fontWeight: 600 }}
                            component="div"
                          >
                            101
                          </Typography>
                          <StyledP
                            variant="h6"
                            sx={{ fontWeight: 600 }}
                            component="div"
                          >
                            MW
                          </StyledP>
                        </Grid>
                        <Button
                          sx={{ textTransform: "none" }}
                          variant="contained"
                          fullWidth
                          size="small"
                        >
                          Detayını Gör
                        </Button>
                      </Grid>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </Grid>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bolder", mb: 3 }}
              component="div"
            >
              Lorem Ipsum
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#b4b4b4", mb: 4 }}
              variant="body1"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
              inventore consectetur,
            </Typography>
            <Grid container spacing={3}>
              <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={Image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2 }}
                      component="div"
                    >
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <StyledIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={Image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2 }}
                      component="div"
                    >
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <StyledIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={Image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2 }}
                      component="div"
                    >
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <StyledIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Wind;
