-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 20 Des 2022 pada 07.02
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
-- Struktur dari tabel `family_assets`
--

CREATE TABLE `family_assets` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `family_assets`
--

INSERT INTO `family_assets` (`id`, `nama`, `harga`, `createdAt`, `updatedAt`) VALUES
(36, 'Samsung Universe 9', 1000, '2022-12-19 06:54:49', '2022-12-19 06:54:49'),
(37, 'Samsung Galaxy Book', 3990, '2022-12-19 06:55:09', '2022-12-19 06:55:09'),
(38, 'iPhone 9', 3199, '2022-12-19 06:55:35', '2022-12-19 06:55:35'),
(39, 'iPhone X', 999, '2022-12-19 06:56:02', '2022-12-19 06:56:02'),
(40, 'Huawei P30', 4233, '2022-12-19 06:56:24', '2022-12-19 06:56:24'),
(41, 'Samsung Universe 9', 2119, '2022-12-19 06:56:50', '2022-12-19 06:56:50'),
(42, 'Huawei P30', 7622, '2022-12-19 06:57:18', '2022-12-19 06:57:18'),
(43, 'iPhone X', 1222, '2022-12-19 06:57:32', '2022-12-19 06:57:32'),
(44, 'Samsung Universe 9', 2991, '2022-12-19 06:57:55', '2022-12-19 06:57:55'),
(45, 'Samsung Galaxy Book', 3311, '2022-12-19 06:58:20', '2022-12-19 06:58:20'),
(46, 'Huawei P30', 5441, '2022-12-19 06:58:56', '2022-12-19 06:58:56'),
(47, 'Phone X', 4312, '2022-12-19 06:59:24', '2022-12-19 06:59:24');

-- --------------------------------------------------------

--
-- Struktur dari tabel `family_members`
--

CREATE TABLE `family_members` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `jenis_kelamin` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `family_members`
--

INSERT INTO `family_members` (`id`, `nama`, `jenis_kelamin`, `createdAt`, `updatedAt`) VALUES
(25, 'bani', 'laki laki', '2022-12-19 06:50:50', '2022-12-19 06:50:50'),
(26, 'budi', 'laki laki', '2022-12-19 06:51:03', '2022-12-19 06:51:03'),
(27, 'hari', 'laki laki', '2022-12-19 06:51:11', '2022-12-19 06:51:11'),
(28, 'siti', 'perempuan', '2022-12-19 06:51:23', '2022-12-19 06:51:23'),
(29, 'nida', 'perempuan', '2022-12-19 06:51:41', '2022-12-19 06:51:41'),
(30, 'bila', 'perempuan', '2022-12-19 06:51:48', '2022-12-19 06:51:48'),
(31, 'lesti', 'perempuan', '2022-12-19 06:51:59', '2022-12-19 06:51:59'),
(32, 'andi', 'laki laki', '2022-12-19 06:52:19', '2022-12-19 06:52:19'),
(33, 'diki', 'laki laki', '2022-12-19 06:52:28', '2022-12-19 06:52:28'),
(34, 'sigit', 'laki laki', '2022-12-19 06:52:35', '2022-12-19 06:52:35'),
(35, 'doni', 'laki laki', '2022-12-19 06:52:43', '2022-12-19 06:52:43'),
(36, 'toni', 'laki laki', '2022-12-19 06:52:53', '2022-12-19 06:52:53');

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
(26, 28, 39, '2022-12-19 06:56:02', '2022-12-19 06:56:02'),
(27, 29, 40, '2022-12-19 06:56:24', '2022-12-19 06:56:24'),
(28, 30, 41, '2022-12-19 06:56:50', '2022-12-19 06:56:50'),
(29, 31, 42, '2022-12-19 06:57:18', '2022-12-19 06:57:18'),
(30, 31, 43, '2022-12-19 06:57:32', '2022-12-19 06:57:32'),
(31, 32, 44, '2022-12-19 06:57:55', '2022-12-19 06:57:55'),
(32, 33, 45, '2022-12-19 06:58:20', '2022-12-19 06:58:20'),
(33, 34, 46, '2022-12-19 06:58:56', '2022-12-19 06:58:56'),
(34, 35, 47, '2022-12-19 06:59:24', '2022-12-19 06:59:24');

-- --------------------------------------------------------

--
-- Struktur dari tabel `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20221216061714-create-family-members.js'),
('20221216061936-create-family-assets.js'),
('20221216062144-create-ownership.js');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `family_assets`
--
ALTER TABLE `family_assets`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `family_members`
--
ALTER TABLE `family_members`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `ownerships`
--
ALTER TABLE `ownerships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_member` (`id_member`,`id_asset`),
  ADD KEY `id_asset` (`id_asset`);

--
-- Indeks untuk tabel `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `family_assets`
--
ALTER TABLE `family_assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT untuk tabel `family_members`
--
ALTER TABLE `family_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `ownerships`
--
ALTER TABLE `ownerships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `ownerships`
--
ALTER TABLE `ownerships`
  ADD CONSTRAINT `ownerships_ibfk_1` FOREIGN KEY (`id_asset`) REFERENCES `family_assets` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ownerships_ibfk_2` FOREIGN KEY (`id_member`) REFERENCES `family_members` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
