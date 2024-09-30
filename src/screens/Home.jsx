import React from "react";
import { motion } from "framer-motion";
import { Container, Typography, Box } from "@mui/material";
import "../index.css"; // Make sure to create and import the CSS file

const Home = () => {
  return (
    <Container className="home-container" maxWidth="xl">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Typography
          variant="h1"
          className="title-text font-bold italic font-sans-serif text-black"
        >
          Welcome to Alumni Connect
        </Typography>
      </motion.div>
      <Box className="video-container">
        <video className="background-video" autoPlay muted loop>
          <source src="src/assets/IntroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Container>
  );
};

export default Home;
