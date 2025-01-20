import { motion } from "framer-motion";
import { ReactNode, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container, ISourceOptions } from "@tsparticles/engine";
import Hero from "components/hero";
import { FaCloud, FaRocket, FaDatabase, FaCode } from "react-icons/fa"; // Importa los íconos que deseas usar
import { IconType } from "react-icons";

interface SectionProps {
  id: string; // 'id' is a string
  title: string; // 'title' is a string
  children: ReactNode; // 'children' is anything React can render
  className?: string; // 'className' is an optional string
}

interface SkillCardProps {
  title: string; // Title is a string
  description: string; // Description is a string
  icon: string; // Icon is a string (URL or path to an image)
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = "",
}) => (
  <section
    id={id}
    className={`py-20 px-6 ${className} mx-auto`} // Agregué mx-auto para centrar el contenido
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

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon }) => {
  // Aquí seleccionamos el ícono basado en el nombre pasado como prop
  const iconMap: { [key: string]: IconType } = {
    cloud: FaCloud,
    rocket: FaRocket,
    database: FaDatabase,
    code: FaCode,
  };

  const IconComponent = iconMap[icon] || FaCloud;

  return (
    <motion.div
      className="text-center bg-dark-gray p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105"
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-4 flex justify-center items-center">
        <IconComponent aria-hidden="true" size={48} />
        {/* Usamos el ícono dinámico */}
      </div>
      <h4 className="text-xl font-bold text-primary">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

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
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffffff",
        },
        image:
          "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
        opacity: 1,
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          opacity: 1,
          color: {
            value: {
              r: 255,
              g: 255,
              b: 255,
            },
          },
        },
        enable: true,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        collisions: {
          absorb: {
            speed: 2,
          },
          bounce: {
            horizontal: {
              value: 1,
            },
            vertical: {
              value: 1,
            },
          },
          enable: false,
          maxSpeed: 50,
          mode: "bounce",
          overlap: {
            enable: true,
            retries: 0,
          },
        },
        color: {
          value: "#ffffff",
          animation: {
            h: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            s: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            l: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
          },
        },
        effect: {
          close: true,
          fill: true,
          options: {},
        },
        move: {
          angle: {
            offset: 0,
            value: 90,
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 3000,
              y: 3000,
            },
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 0,
          },
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          path: {
            clamp: true,
            delay: {
              value: 0,
            },
            enable: false,
            options: {},
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: false,
          size: false,
          speed: 2,
          spin: {
            acceleration: 0,
            enable: false,
          },
          straight: false,
          trail: {
            enable: false,
            length: 10,
            fill: {},
          },
          vibrate: false,
          warp: false,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          limit: {
            mode: "delete",
            value: 0,
          },
          value: 80,
        },
        opacity: {
          value: 1,
          animation: {
            count: 0,
            enable: false,
            speed: 2,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        reduceDuplicates: false,
        shadow: {
          blur: 0,
          color: {
            value: "#000",
          },
          enable: false,
          offset: {
            x: 0,
            y: 0,
          },
        },
        shape: {
          close: true,
          fill: true,
          options: {},
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 30,
          },
          animation: {
            count: 0,
            enable: false,
            speed: 5,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        stroke: {
          width: 0,
        },
        zIndex: {
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
        destroy: {
          bounds: {},
          mode: "none",
          split: {
            count: 1,
            factor: {
              value: 3,
            },
            rate: {
              value: {
                min: 4,
                max: 9,
              },
            },
            sizeOffset: true,
            particles: {},
          },
        },
        roll: {
          darken: {
            enable: false,
            value: 0,
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0,
          },
          mode: "vertical",
          speed: 25,
        },
        tilt: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          enable: false,
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10,
          },
        },
        life: {
          count: 0,
          delay: {
            value: 0,
            sync: false,
          },
          duration: {
            value: 0,
            sync: false,
          },
        },
        rotate: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          path: false,
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false,
          },
          enable: false,
          opacity: 1,
          rotation: {
            value: 45,
          },
          width: 1,
        },
        links: {
          blink: false,
          color: {
            value: "#ffffff",
          },
          consent: false,
          distance: 150,
          enable: true,
          frequency: 1,
          opacity: 1,
          shadow: {
            blur: 5,
            color: {
              value: "#000",
            },
            enable: false,
          },
          triangles: {
            enable: false,
            frequency: 1,
          },
          width: 1,
          warp: false,
        },
        repulse: {
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1,
        },
      },
      detectRetina: true,
    }),
    []
  );

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  return (
    <div className="bg-dark text-light min-h-screen flex flex-col">
      {/* Particle Background */}

      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute top-0 left-0 w-full h-full z-0"
        />
      )}
      <Hero />
      <main className="flex-grow z-10 relative">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SkillCard
              title="Tecnologías en la Nube"
              description="Docker, Google Cloud Platform (GCP), Firebase"
              icon="cloud"
            />
            <SkillCard
              title="Desarrollo Back-end"
              description="TypeScript, NestJS, Node.js, MongoDB, GraphQL, PHP, Go, Python"
              icon="rocket"
            />
            <SkillCard
              title="Desarrollo Front-end"
              description="Angular, ReactJS, Bootstrap, JavaScript, HTML, CSS"
              icon="code"
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
