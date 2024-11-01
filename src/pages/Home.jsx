import React from "react";
import { Masonry } from "@mui/lab";
import { motion } from "framer-motion";
import { Modal } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function selectImage(image) {
    setImage(image);
    handleOpen();
  }
  const images = [
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/1.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/2.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/3.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/4.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/5.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/6.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/7.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/8.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/9.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/10.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/11.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/12.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/13.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/14.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/15.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/16.jpg",
    "https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/17.jpg",
  ];
  return (
    <div className="w-full min-h-screen px-[5%] sm:px-[15%] flex justify-center">
      <Masonry columns={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }} spacing={2}>
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            alt="image"
            className="object-cover rounded-lg   shadow-white/5 shadow-lg cursor-pointer"
            onClick={(e) => {
              e.preventDefault();

              selectImage(e.target.src);
            }}
          />
        ))}
      </Masonry>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-black rounded-lg ">
          <img src={image} alt="Close up" className="rounded-lg max-h-[90vh]" />
          <p>Click outside to close</p>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
