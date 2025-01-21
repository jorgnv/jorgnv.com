import { motion } from "framer-motion";
import Image from "next/image";

export default function Section() {
  const stats = [
    { name: "Años de experiencia profesional", value: "8+" },
    { name: "Proyectos tecnológicos entregados", value: "50+" },
    { name: "Lenguajes y tecnologías dominados", value: "15+" },
  ];

  return (
    <div id="sobre-mi">
      <motion.div
        className="relative isolate overflow-hidden bg-gray-900 min-h-screen w-full py-24 sm:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>

        <motion.div
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Soy un{" "}
              <span className="font-bold text-primary">
                Full Stack Developer
              </span>
            </h2>
            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
              Cuento con más de 8 años de experiencia en el diseño, desarrollo y
              despliegue de aplicaciones tecnológicas de alto impacto. Mi
              especialidad radica en la creación de soluciones integrales,
              escalables y eficientes que combinan un backend sólido con
              interfaces de usuario modernas e intuitivas. Poseo experiencia
              avanzada en tecnologías como Docker, Google Cloud Platform (GCP),
              Firebase, TypeScript, NestJS, Node.js, MongoDB y GraphQL, así como
              en el desarrollo frontend con Angular, Bootstrap, CSS, HTML y
              JavaScript, garantizando interfaces optimizadas, atractivas y
              responsivas.
            </p>
          </div>

          <motion.div
            className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.name}
                  className="flex flex-col-reverse gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
