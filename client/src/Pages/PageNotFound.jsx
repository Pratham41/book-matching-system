import React from "react";
import { Container, Typography } from "@mui/material";

export default function PageNotFound() {
  return (
    <Container sx={{ textAlign:"center", mt:20 }} maxWidth="md">
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">Page Not Found!</Typography>
    </Container>
  );
}
