import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => (
  <header className="bg-dark py-4 px-6 flex justify-between items-center border-b border-gray-700">
    <motion.h1
      className="text-4xl font-bold text-primary"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Mi Portafolio
    </motion.h1>
    <nav>
      <ul className="flex space-x-6">
        {["Sobre Mí", "Habilidades", "Proyectos", "Contacto"].map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.1, color: "#03dac6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={`#${item.toLowerCase().replace(" ", "")}`}
              legacyBehavior
            >
              <a className="hover:text-secondary">{item}</a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  </header>
);

const Section = ({ id, title, children, className = "" }) => (
  <section
    id={id}
    className={`py-20 px-6 ${className}`}
    style={{ scrollMarginTop: "80px" }}
  >
    <motion.h3
      className="text-4xl font-extrabold text-center mb-8 text-primary"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {title}
    </motion.h3>
    {children}
  </section>
);

const SkillCard = ({ title, description, icon }) => (
  <motion.div
    className="text-center bg-dark-gray p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105"
    whileHover={{ scale: 1.05, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="mb-4">
      <img src={icon} alt={title} className="w-16 h-16 mx-auto" />
    </div>
    <h4 className="text-xl font-bold text-primary">{title}</h4>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const Footer = () => (
  <footer className="bg-dark py-6 text-center border-t border-gray-700">
    <motion.p
      className="text-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      &copy; {new Date().getFullYear()} Jorge Nava. Todos los derechos
      reservados.
    </motion.p>
  </footer>
);

export default function Home() {
  return (
    <div className="bg-dark text-light min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          className="text-center py-20 bg-gradient-to-b from-dark to-dark-gray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold mb-4 text-primary">
            Hola, soy Backend Developer
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-400">
            Especializado en construir sistemas robustos, escalables y
            eficientes. Amo convertir ideas en código que funciona.
          </p>
        </motion.section>

        {/* About Me Section */}
        <Section id="about" title="Sobre Mí">
          <motion.div
            className="text-gray-400 max-w-4xl mx-auto space-y-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl">
              Soy un{" "}
              <span className="font-bold text-primary">
                Full Stack Developer
              </span>
              con más de 8 años de experiencia en el desarrollo y despliegue de
              aplicaciones tecnológicas. Mi enfoque se centra en construir
              soluciones completas, escalables y eficientes que conecten un
              backend robusto con interfaces de usuario atractivas e intuitivas.
            </p>

            <p>
              <span className="font-bold text-primary">Especialidades:</span>
              Docker, Google Cloud Platform (GCP), Firebase, TypeScript, NestJS,
              Node.js, MongoDB, y GraphQL.
            </p>

            <p>
              <span className="font-bold text-primary">
                Experiencia Frontend:
              </span>
              Angular, Bootstrap, CSS, HTML y JavaScript, creando interfaces
              modernas y responsivas.
            </p>

            <p>
              <span className="font-bold text-primary">
                Backend y Bases de Datos:
              </span>
              Desarrollo backend en Node.js y NestJS, con administración de
              bases de datos SQL y NoSQL, incluyendo MongoDB y MySQL.
            </p>

            <p>
              Además, me destaco en trabajar en equipos colaborativos, aplicando
              las mejores prácticas de desarrollo y adaptándome rápidamente a
              nuevas tecnologías.
            </p>
          </motion.div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Habilidades" className="bg-dark-gray">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SkillCard
              title="Tecnologías en la Nube"
              description="Docker, Google Cloud Platform (GCP), Firebase"
              icon="https://tse1.mm.bing.net/th?id=OIP.AprxmYXMmpyEmWDUAdbxiwHaEU&pid=Api"
            />
            <SkillCard
              title="Desarrollo Back-end"
              description="TypeScript, NestJS, Node.js, MongoDB, GraphQL, PHP, Go, Python"
              icon="https://tse3.mm.bing.net/th?id=OIP.m4waxUlEkCGcXlfiHJD3mQHaDt&pid=Api"
            />
            <SkillCard
              title="Desarrollo Front-end"
              description="Angular, ReactJS, Bootstrap, JavaScript, HTML, CSS"
              icon="https://tse1.mm.bing.net/th?id=OIP.EaH10UhlBvqBEc28MN8WyAHaEK&pid=Api"
            />
          </div>
        </Section>

        {/* Contact Section */}
        <Section
          id="contact"
          title="Contacto"
          className="bg-dark-gray text-center"
        >
          <motion.p
            className="text-gray-400 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ¿Quieres trabajar conmigo o tienes alguna pregunta? Escríbeme.
          </motion.p>
          <motion.a
            href="mailto:tucorreo@example.com"
            className="bg-primary text-dark px-6 py-3 rounded-lg text-lg font-bold hover:bg-secondary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar un Correo
          </motion.a>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
