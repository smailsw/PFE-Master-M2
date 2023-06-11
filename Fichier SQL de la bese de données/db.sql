-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2020 at 06:34 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pfedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `absences`
--

CREATE TABLE `absences` (
  `id_Absence` int(10) NOT NULL,
  `id_Etudiant` int(10) NOT NULL,
  `id_Module` int(10) NOT NULL,
  `id_Seance` int(10) NOT NULL,
  `id_Filiere` int(5) NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `absences`
--

INSERT INTO `absences` (`id_Absence`, `id_Etudiant`, `id_Module`, `id_Seance`, `id_Filiere`, `created`) VALUES
(1, 2, 2, 1, 2, '2020-06-05'),
(2, 3, 2, 1, 2, '2020-06-05'),
(3, 4, 2, 1, 2, '2020-06-05'),
(4, 5, 2, 1, 2, '2020-06-05'),
(5, 1, 2, 1, 2, '2020-06-05'),
(6, 2, 3, 2, 5, '2020-06-05'),
(7, 3, 3, 2, 5, '2020-06-05'),
(8, 4, 3, 2, 5, '2020-06-05'),
(9, 3, 1, 3, 2, '2020-06-05'),
(10, 5, 1, 3, 2, '2020-06-05'),
(11, 1, 1, 3, 2, '2020-06-05'),
(12, 3, 1, 3, 2, '2020-06-05'),
(13, 4, 1, 3, 2, '2020-06-05'),
(14, 2, 3, 2, 5, '2020-06-06'),
(15, 5, 3, 2, 5, '2020-06-06'),
(16, 2, 2, 1, 2, '2020-06-06');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(10) NOT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `adresse` varchar(20) NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `first_name`, `last_name`, `email`, `adresse`, `created`) VALUES
(2, 'morgan', 'ayyo', 'morgan.ayyo@gamil.co', 'paris', '2020-05-11'),
(3, 'admin', 'admin', 'admin@gmail.com', 'casa', '2020-05-24'),
(6, 'yuba', 'affass', 'yuba@gmail.com', 'ouahran', '2020-06-04'),
(7, 'kiwan', 'mass', 'mass@gmail.com', 'canar', '2020-06-04'),
(9, 'anir', 'lhbaz', 'anir@gmail.com', 'tinghir', '2020-06-04'),
(10, 'zizo', 'dirr', 'zizo@gmail.com', 'ifran', '2020-06-04'),
(11, 'siwa', 'niwra', 'niwra@gmail.com', 'azrou', '2020-06-05'),
(12, 'tayla', 'niran', 'niran@gmail.com', 'tiziouazo', '2020-06-05');

-- --------------------------------------------------------

--
-- Table structure for table `annances`
--

CREATE TABLE `annances` (
  `id_Annance` int(5) NOT NULL,
  `sujet` varchar(30) NOT NULL,
  `desc` text NOT NULL,
  `id_Filiere` int(10) NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `annances`
--

INSERT INTO `annances` (`id_Annance`, `sujet`, `desc`, `id_Filiere`, `created`) VALUES
(2, 'Rattrapage', 'vous aurez un ratt de module java le 20/06/2020', 2, '2020-06-05');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `project_id` int(10) NOT NULL,
  `cv` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `created_at`, `updated_at`, `project_id`, `cv`) VALUES
(1, 'eml1', '2020-06-01', '0000-00-00', 1, 'cv'),
(2, 'eml2', '2020-06-01', '0000-00-00', 2, 'cv');

-- --------------------------------------------------------

--
-- Table structure for table `etudiants`
--

CREATE TABLE `etudiants` (
  `id_Etudiant` int(11) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `adresse` varchar(20) NOT NULL,
  `sexe` varchar(10) NOT NULL,
  `cin` varchar(15) NOT NULL,
  `cne` varchar(15) NOT NULL,
  `date_naissance` date NOT NULL,
  `telephone` int(10) NOT NULL,
  `urlImage` varchar(100) NOT NULL,
  `created` date NOT NULL,
  `id_Filiere` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `etudiants`
--

INSERT INTO `etudiants` (`id_Etudiant`, `first_name`, `last_name`, `email`, `adresse`, `sexe`, `cin`, `cne`, `date_naissance`, `telephone`, `urlImage`, `created`, `id_Filiere`) VALUES
(1, 'tinan', 'afraw', 'afraw@gmail.com', 'ait el farssi', 'H', 'PA452132', 'D1360212', '1998-06-10', 69582154, '', '2020-06-05', 2),
(2, 'nomidia', 'dayfas', 'dayfas@gmail.com', 'afanour', 'F', 'PA486248', 'D2541748', '1999-01-02', 14521445, 'blob:http://localhost:3000/5b5580fc-f923-431b-8d18-f957593b3055', '2020-06-06', 3),
(3, 'irwan', 'assafo', 'assafo@gmail.com', 'ghallile', 'H', 'Pa124521', 'D4552145', '2002-12-10', 45218547, '', '2020-06-05', 1),
(4, 'tinhila', 'minhilan', 'minhilan@gmail.com', 'hloul', 'F', 'PA951245', 'D1254785', '2000-04-10', 45578542, 'blob:http://localhost:3000/bc41d7d4-bb9f-41e9-82e4-51b657c93524', '2020-06-06', 2),
(5, 'nihya', 'rabil', 'rabil@gmail.com', 'tabsbast', 'F', 'Pa457854', 'D4521365', '2003-02-01', 63254125, '', '2020-06-05', 4);

-- --------------------------------------------------------

--
-- Table structure for table `filieres`
--

CREATE TABLE `filieres` (
  `id_Filiere` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `abreviation` varchar(20) NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `filieres`
--

INSERT INTO `filieres` (`id_Filiere`, `name`, `abreviation`, `created`) VALUES
(1, 'genié industriel', 'GED', '0000-00-00'),
(2, 'genie informatique', 'GI', '0000-00-00'),
(3, 'Technique de managem', 'TM', '0000-00-00'),
(4, 'Genie Electrique', 'GE', '0000-00-00'),
(5, 'Ingenieurie des syst', 'ISIL', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id_Module` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `nbrHeur` int(5) NOT NULL,
  `id_Prof` int(11) NOT NULL,
  `id_Filiere` int(5) NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id_Module`, `name`, `nbrHeur`, `id_Prof`, `id_Filiere`, `created`) VALUES
(1, 'java', 18, 13, 1, '2020-06-05'),
(2, 'web', 16, 13, 1, '2020-06-05'),
(3, 'Reseaux', 14, 14, 2, '2020-06-05'),
(4, 'UML', 18, 16, 4, '2020-06-05');

-- --------------------------------------------------------

--
-- Table structure for table `profs`
--

CREATE TABLE `profs` (
  `id_Prof` int(10) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `adresse` varchar(20) NOT NULL,
  `sexe` varchar(8) NOT NULL,
  `cin` varchar(12) NOT NULL,
  `telephone` int(10) NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profs`
--

INSERT INTO `profs` (`id_Prof`, `first_name`, `last_name`, `email`, `adresse`, `sexe`, `cin`, `telephone`, `created`) VALUES
(13, 'ayour', 'izri', 'izri@gmail.com', 'taza', 'H', 'PA452132', 69998745, '2020-06-06'),
(14, 'assafo', 'algagh', 'algagh@gmail.com', 'torza', 'H', 'Pa124521', 65435214, '2020-06-06'),
(15, 'taniras', 'ayfass', 'ayfass@gmail.com', 'alnif', 'F', 'Pa457854', 6951245, '2020-06-04'),
(16, 'tizlit', 'didan', 'didan@gmail.com', 'ait aissa', 'F', 'PA486248', 1234582, '2020-06-04'),
(17, 'tafawo', 'moran', 'moran@gmail.com', 'taghzoute', 'F', 'PA951245', 6521487, '2020-06-04'),
(18, 'mojan', 'missan', 'missan@gmail.com', 'ticotar', 'H', 'Pa12457', 62153241, '2020-06-06'),
(19, 'kk', 'kkk', 'kkk@jjj.cc', 'kkk', 'F', 'll55', 2147483647, '2020-06-06'),
(20, 'sasas', 'sasa', 'sasas@sas.sas', 'sasa', 'F', 'sasa121', 60606060, '2020-06-06');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `cv` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `created_at`, `updated_at`, `cv`) VALUES
(1, 'mmmmmm1', '2020-06-01', '0000-00-00', 'cv'),
(2, 'mmmmm2', '2020-06-01', '0000-00-00', 'cv');

-- --------------------------------------------------------

--
-- Table structure for table `seances`
--

CREATE TABLE `seances` (
  `id_Seance` int(10) NOT NULL,
  `date_Seance` date NOT NULL,
  `heurDebut` time NOT NULL,
  `heurFin` time NOT NULL,
  `type_Seance` varchar(10) NOT NULL,
  `id_Module` int(10) NOT NULL,
  `id_Filiere` int(5) NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seances`
--

INSERT INTO `seances` (`id_Seance`, `date_Seance`, `heurDebut`, `heurFin`, `type_Seance`, `id_Module`, `id_Filiere`, `created`) VALUES
(1, '2020-06-12', '14:00:00', '16:00:00', 'Cour', 2, 2, '2020-06-05'),
(2, '2020-06-13', '14:02:00', '16:02:00', 'Cour', 3, 5, '2020-06-05'),
(3, '2020-06-06', '14:00:00', '16:00:00', 'TP', 1, 2, '2020-06-05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `role` varchar(15) NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `role`, `created`) VALUES
(2, 'etudiant ', 'etudiant', 'etudiant@gmail.com', '$2b$10$/rZ1pib2CCqyaCUsu/Mf1OR', 'Etudiant', '2020-05-24'),
(3, 'admin', 'admin', 'admin@gmail.com', '$2b$10$dFrIJh0LYWwk3u.n4aN5deq', 'Admin', '2020-05-24'),
(4, 'sorkki ', 'karima', 'karima@gmail.com', '$2b$10$RJrUvZY591Un.mwpzTKaDue', 'Etudiant', '2020-05-30'),
(5, 'anir', 'lhbaz', 'anir@gmail.com', '$2b$10$imQMGakJL16QoOVg.mOTquo', 'Prof', '2020-06-04'),
(6, 'yuba', 'affass', 'yuba@gmail.com', '$2b$10$2p.SPwpilt8opO7ZjUXN5ue', 'Prof', '2020-06-04'),
(7, 'tanina', 'riban', 'riban@gmail.com', '$2b$10$Sa3zmdt8rX3BnA0jMBiOaOh', 'Etudiant', '2020-06-04'),
(8, 'zizo', 'dirr', 'zizo@gmail.com', '$2b$10$LS9pxNT60O/1IksFA9Kg8Ol', 'Etudiant', '2020-06-04'),
(9, 'kiwan', 'mass', 'mass@gmail.com', '$2b$10$FK00a.mO3KNq5gLmRhZRgej', 'Admin', '2020-06-04'),
(10, 'prof', 'prof', 'prof@gmail.com', '$2b$10$mLi6wnu2Vbzot5PDOUPR9eO', 'Prof', '2020-06-06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absences`
--
ALTER TABLE `absences`
  ADD PRIMARY KEY (`id_Absence`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `annances`
--
ALTER TABLE `annances`
  ADD PRIMARY KEY (`id_Annance`),
  ADD KEY `id_Filiere` (`id_Filiere`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `etudiants`
--
ALTER TABLE `etudiants`
  ADD PRIMARY KEY (`id_Etudiant`),
  ADD KEY `id_Filiere` (`id_Filiere`);

--
-- Indexes for table `filieres`
--
ALTER TABLE `filieres`
  ADD PRIMARY KEY (`id_Filiere`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id_Module`),
  ADD KEY `id_Prof` (`id_Prof`);

--
-- Indexes for table `profs`
--
ALTER TABLE `profs`
  ADD PRIMARY KEY (`id_Prof`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seances`
--
ALTER TABLE `seances`
  ADD PRIMARY KEY (`id_Seance`),
  ADD KEY `FK_SM` (`id_Module`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `absences`
--
ALTER TABLE `absences`
  MODIFY `id_Absence` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `annances`
--
ALTER TABLE `annances`
  MODIFY `id_Annance` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `etudiants`
--
ALTER TABLE `etudiants`
  MODIFY `id_Etudiant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `filieres`
--
ALTER TABLE `filieres`
  MODIFY `id_Filiere` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id_Module` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `profs`
--
ALTER TABLE `profs`
  MODIFY `id_Prof` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `seances`
--
ALTER TABLE `seances`
  MODIFY `id_Seance` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `annances`
--
ALTER TABLE `annances`
  ADD CONSTRAINT `annances_ibfk_1` FOREIGN KEY (`id_Filiere`) REFERENCES `filieres` (`id_Filiere`);

--
-- Constraints for table `etudiants`
--
ALTER TABLE `etudiants`
  ADD CONSTRAINT `etudiants_ibfk_1` FOREIGN KEY (`id_Filiere`) REFERENCES `filieres` (`id_Filiere`);

--
-- Constraints for table `modules`
--
ALTER TABLE `modules`
  ADD CONSTRAINT `modules_ibfk_1` FOREIGN KEY (`id_Prof`) REFERENCES `profs` (`id_Prof`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
