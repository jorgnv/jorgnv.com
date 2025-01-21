import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-12 text-center bg-[#1a1a1a] z-10">
      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-80 -z-10"></div>

      <motion.div
        className="text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Jorge Nava. Todos los derechos
          reservados.
        </p>

        <div className="mt-6 flex justify-center space-x-6">
          {/* Redes sociales */}
          <a
            href="https://twitter.com/jorgnv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-600 transition-colors"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/jorgnv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-600 transition-colors"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jorgnv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-600 transition-colors"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/jorgnv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-600 transition-colors"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
