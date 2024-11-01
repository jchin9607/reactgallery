import React from "react";
import { Avatar } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full h-[calc(100vh-60px)] px-[15%] flex items-center justify-center">
      <main className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar
            alt="Isaac Weng"
            src="wait.jpg"
            sx={{ width: 100, height: 100 }}
          />
        </motion.span>
        <div className="flex flex-col">
          <motion.h1
            className="text-lg sm:text-2xl font-semibold"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Isaac Weng
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base mt-2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            belmont high school ‘26
          </motion.p>
          <div className="flex flex-wrap">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 whitespace-nowrap">
                DM for inquiries
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 whitespace-nowrap">
                Open to Work
              </span>
            </motion.div>
          </div>
          <div className="mt-2">
            <motion.a
              href="https://www.instagram.com/svpisaac/"
              target="_blank"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@svpisaac"
              target="_blank"
              className="ml-2"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <YouTubeIcon />
            </motion.a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
