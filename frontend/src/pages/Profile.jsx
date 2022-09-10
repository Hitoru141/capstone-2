import React from "react";
import styled from "styled-components";

import Card from "../components/Card";
import Footer from "../components/Footer";
import { Grid, Container } from "@mui/material";

const Profile = ({ type, video }) => {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "blue" }}
        >
          abc
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          xyz
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
