import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Book({ book }) {
  return (
    <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 300, minHeight: 300 }}>
      <CardMedia
        sx={{ height: 100 }}
        image="/assets/bookImage.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {book.title.length > 20
            ? book.title.slice(0, 20) + "..."
            : book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.description.length > 50
            ? book.description.slice(0, 50) + "..."
            : book.description}
        </Typography>
        <Typography color={"ActiveBorder"}>Author : {book.author}</Typography>
        <Typography color={"ActiveBorder"}>
          Published in : {book.publication_year}
        </Typography>
        <Typography color={"ActiveBorder"}>Genre : {book.genre}</Typography>
      </CardContent>
    </Card>
  );
}
