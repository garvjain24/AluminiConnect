import React from "react";
import { motion } from "framer-motion";
import { Container, Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "../index.css"; // Make sure to create and import the CSS file
import ImgMediaCard from "../components/cards";

const testimonials = [
  {
    name: "John Doe",
    text: "This platform has been a game-changer for our alumni network.",
  },
  {
    name: "Jane Smith",
    text: "Connecting with old friends has never been easier!",
  },
  {
    name: "Sam Wilson",
    text: "A wonderful experience, highly recommend to all alumni.",
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <div>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography
              variant="h1"
              sx={{ fontWeight: "bold", fontStyle: "italic", color: "Brown" }}
            >
              Welcome to Alumni Connect
            </Typography>
          </motion.div>
        </Container>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <video
            className="background-video"
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(8px)",
            }}
          >
            <source src="src/assets/IntroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 2, textAlign: "center", color: "Brown" }}
          >
            Upcoming Events
          </Typography>
        </motion.div>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2,
            padding: 2,
          }}
        >
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <Box sx={{ minWidth: 300 }}>
                <ImgMediaCard
                  image={"image"}
                  title={`Event ${index + 1}`}
                  description={"Description for event."}
                  button1Text={"Join"}
                  button2Text={"Details"}
                  sx={{
                    backgroundColor: "#A52A2A", // Brown
                    color: "Brown",
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 2, textAlign: "center", color: "Brown" }}
          >
            Testimonials
          </Typography>
        </motion.div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <Box
                sx={{
                  p: 2,
                  textAlign: "center",
                  backgroundColor: "#A52A2A",
                  color: "white",
                }}
              >
                <Typography variant="body1" sx={{ mb: 1 }}>
                  "{testimonial.text}"
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  - {testimonial.name}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Home;
