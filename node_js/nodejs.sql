-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2017 at 01:16 PM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(250) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `name`, `address`, `phone`, `email`, `username`, `password`) VALUES
(1, 'abcd', 'abcdef', '012222', 'wwwwwww', '123', '123'),
(2, 'a', 'a', 'a', 'a', 'a', 'a'),
(3, 'aa', 'aa', 'aa', 'aa', 'aa', 'aa'),
(11, '11', '11', '11', '11', '11', '11'),
(13, 'robi', 'nikunjo', '01758112484', 'shetu@gmail.com', '12345', '12345'),
(14, 'aaaaaaa', 'aaaaaaaa', '11111111111', 'robi@gmail.com', '123456', '123456'),
(15, 'robirobi', 'aaaaaaaaaaaaaaaaa', '01758112484', 'robi@gmail.com', 'aaaaaaaaa', '12345'),
(16, 'abcdaaa', 'mirpuraaa', '01758112484', 'robi@gmail.com', 'asdfg', '123456'),
(17, 'aaaaaaa', 'mirpur 10', '01758112480', 'robi@yahoo.com', '1234567', '1234567'),
(18, 'aaaaaaaaa', 'nikunjo15', '01758112484 ', 'robi@gmail.com', '12345', '33333');

-- --------------------------------------------------------

--
-- Table structure for table `upload_file`
--

CREATE TABLE `upload_file` (
  `id` int(100) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `path` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `upload_file`
--

INSERT INTO `upload_file` (`id`, `name`, `description`, `path`) VALUES
(1, 'song', 'song1234567', 'song.mp3'),
(2, 'abcdefgh', 'file description', 'Vegetable Bread Pizza - Quick Recipe.mp4'),
(3, 'something', 'description', '2 Minutes Timer.3gp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upload_file`
--
ALTER TABLE `upload_file`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `upload_file`
--
ALTER TABLE `upload_file`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
