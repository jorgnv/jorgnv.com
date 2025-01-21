import { motion } from "framer-motion";
import {
  ServerStackIcon,
  CloudIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const skills = [
  {
    name: "Desarrollo Backend",
    description:
      "Especialista en crear soluciones escalables con tecnologías como Docker, NestJS, Node.js, MongoDB y GraphQL.",
    icon: ServerStackIcon,
  },
  {
    name: "Infraestructura en la Nube",
    description:
      "Experiencia avanzada en plataformas como Google Cloud Platform (GCP) y Firebase para garantizar despliegues eficientes y de alto rendimiento.",
    icon: CloudIcon,
  },
  {
    name: "Desarrollo Frontend",
    description:
      "Creación de interfaces modernas y responsivas utilizando Angular, Bootstrap, CSS, HTML y JavaScript.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Optimización y Escalabilidad",
    description:
      "Habilidad para diseñar aplicaciones tecnológicas integrales y optimizadas, garantizando alto impacto y escalabilidad.",
    icon: CodeBracketIcon,
  },
];

export default function Skills() {
  return (
    <div className="bg-white py-24 sm:py-32 z-10 relative" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            className="text-base font-semibold text-indigo-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Mis habilidades
          </motion.h2>
          <motion.p
            className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Más de 8 años diseñando y creando aplicaciones de alto impacto
          </motion.p>
          <motion.p
            className="mt-6 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Mi experiencia abarca desde el diseño y desarrollo de soluciones
            tecnológicas hasta el despliegue en entornos de producción. Estas
            son algunas de mis habilidades principales:
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative pl-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              >
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <skill.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {skill.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  {skill.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
