-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 19 Des 2022 pada 08.46
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_javan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `ownerships`
--

CREATE TABLE `ownerships` (
  `id` int(11) NOT NULL,
  `id_member` int(11) DEFAULT NULL,
  `id_asset` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `ownerships`
--

INSERT INTO `ownerships` (`id`, `id_member`, `id_asset`, `createdAt`, `updatedAt`) VALUES
(1, 8, 14, '2022-12-16 23:46:02', '2022-12-16 23:46:02'),
(2, 8, 15, '2022-12-19 01:50:18', '2022-12-19 01:50:18'),
(3, 8, 16, '2022-12-19 02:00:09', '2022-12-19 02:00:09'),
(4, 16, 17, '2022-12-19 02:14:42', '2022-12-19 02:14:42'),
(5, 17, 18, '2022-12-19 03:11:34', '2022-12-19 03:11:34'),
(6, 17, 19, '2022-12-19 03:11:50', '2022-12-19 03:11:50'),
(7, 16, 20, '2022-12-19 03:12:50', '2022-12-19 03:12:50'),
(8, 8, 21, '2022-12-19 04:32:00', '2022-12-19 04:32:00'),
(9, 8, 22, '2022-12-19 05:12:51', '2022-12-19 05:12:51'),
(10, 8, 23, '2022-12-19 06:02:25', '2022-12-19 06:02:25'),
(11, 15, 24, '2022-12-19 06:03:51', '2022-12-19 06:03:51'),
(12, 15, 25, '2022-12-19 06:08:31', '2022-12-19 06:08:31'),
(13, 8, 26, '2022-12-19 06:11:15', '2022-12-19 06:11:15'),
(14, 8, 27, '2022-12-19 06:11:32', '2022-12-19 06:11:32'),
(15, 17, 28, '2022-12-19 06:12:18', '2022-12-19 06:12:18'),
(16, 21, 29, '2022-12-19 06:13:27', '2022-12-19 06:13:27'),
(17, 21, 30, '2022-12-19 06:36:34', '2022-12-19 06:36:34'),
(18, 22, 31, '2022-12-19 06:40:07', '2022-12-19 06:40:07'),
(19, 23, 32, '2022-12-19 06:48:31', '2022-12-19 06:48:31'),
(20, 23, 33, '2022-12-19 06:48:43', '2022-12-19 06:48:43'),
(21, 24, 34, '2022-12-19 06:49:18', '2022-12-19 06:49:18'),
(22, 24, 35, '2022-12-19 06:49:34', '2022-12-19 06:49:34'),
(23, 26, 36, '2022-12-19 06:54:50', '2022-12-19 06:54:50'),
(24, 26, 37, '2022-12-19 06:55:09', '2022-12-19 06:55:09'),
(25, 27, 38, '2022-12-19 06:55:35', '2022-12-19 06:55:35'),
(26, 28, 39, '2022-12-19 06:56:02', '2022-12-19 06:56:02'),
(27, 29, 40, '2022-12-19 06:56:24', '2022-12-19 06:56:24'),
(28, 30, 41, '2022-12-19 06:56:50', '2022-12-19 06:56:50'),
(29, 31, 42, '2022-12-19 06:57:18', '2022-12-19 06:57:18'),
(30, 31, 43, '2022-12-19 06:57:32', '2022-12-19 06:57:32'),
(31, 32, 44, '2022-12-19 06:57:55', '2022-12-19 06:57:55'),
(32, 33, 45, '2022-12-19 06:58:20', '2022-12-19 06:58:20'),
(33, 34, 46, '2022-12-19 06:58:56', '2022-12-19 06:58:56'),
(34, 35, 47, '2022-12-19 06:59:24', '2022-12-19 06:59:24');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `ownerships`
--
ALTER TABLE `ownerships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_member` (`id_member`,`id_asset`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `ownerships`
--
ALTER TABLE `ownerships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
