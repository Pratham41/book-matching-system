import { Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Book from "../components/Book";
import axios from "axios";
import Loader from "../components/Loader";

const Home = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const { data } = await axios.get(
          `https://booksystem.onrender.com/api/v1/book?genre=${genre}&&author=${author}`
        );
        setAllBooks(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getAllBooks();
  }, [author, genre]);
  console.log("allBooks----", allBooks);
  return (
    <div style={{ minHeight: "80vh" }}>
      <Container
        sx={{
          marginTop: 6,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <TextField
          autoFocus
          id="outlined-basic"
          label="Genre"
          variant="outlined"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          color="primary"
        />
        <TextField
          id="outlined-basic"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          label="Author"
          variant="outlined"
        />
      </Container>
      <div>
        <Typography
          sx={{ marginTop: 3 }}
          color={"ActiveBorder"}
          align="center"
          variant="h6"
        >
          ------BOOKS FOR YOU-----
        </Typography>

        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 4,
            marginTop: 4,
          }}
        >
          {error && <Typography color="red">Something went wrong!</Typography>}
          {allBooks.length ? (
            allBooks.map((b) => <Book key={b._id} book={b} />)
          ) : (
            <>
              {loading ? (
                <Loader />
              ) : (
                <Typography color="red">No Books Found!</Typography>
              )}
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Home;
