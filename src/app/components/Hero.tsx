import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Container } from "./ui/Container";

const SENA =
  "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/sena-seeklogo.png";

const FONDO =
  "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/logo/fondo-emprender-sena-seeklogo.png";

const BG =
  "https://nwopkcvdgbwomplkfwdx.supabase.co/storage/v1/object/public/media/photos/IMG-20260608-WA0066.jpg";


export function Hero() {

  const goTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });


  return (
    <section
      id="inicio"
      className="
        relative
        flex
        min-h-[700px]
        h-[100svh]
        items-end
        overflow-hidden
      "
    >

      {/* Imagen fondo */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: `url(${BG})`,
        }}
      />


      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/35
          to-black/20
        "
      />


      {/* Contenido */}
      <Container
        className="
          relative
          z-10
          pb-[clamp(56px,10vh,120px)]
        "
      >

        {/* Ubicación */}
        <motion.p
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          className="
            uppercase
            text-white/70
            tracking-[.35em]
            text-[clamp(.75rem,.8vw,.95rem)]
            mb-[clamp(20px,2vh,32px)]
          "
        >
          Campo de la Cruz · Atlántico · Colombia
        </motion.p>



        {/* Título */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 28,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .8,
            ease: [0.22,1,0.36,1],
          }}
          className="
            text-white
            font-bold
            max-w-[11ch]
            text-[clamp(3.5rem,7vw,7rem)]
            leading-[.95]
            tracking-[-.03em]
          "
          style={{
            fontFamily: "Lora, serif",
          }}
        >
          Hacienda
          <br />
          Maria Jose
        </motion.h1>



        {/* Descripción */}
        <motion.p
          initial={{
            opacity:0,
            y:18,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          transition={{
            delay:.2,
          }}
          className="
            mt-[clamp(24px,3vh,40px)]
            max-w-[clamp(320px,42vw,620px)]
            text-white/80
            text-[clamp(1rem,1.2vw,1.25rem)]
            leading-[1.8]
          "
        >
          Leche fresca y queso artesanal.
          <br />
          Del campo a tus manos, sin intermediarios.
        </motion.p>



        {/* Botones */}
        <motion.div
          initial={{
            opacity:0,
            y:16,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          transition={{
            delay:.35,
          }}
          className="
            flex
            flex-wrap
            gap-4
            mt-[clamp(32px,4vh,48px)]
          "
        >

          <button
            onClick={() => goTo("#nosotros")}
            className="
              rounded-full
              bg-white
              text-[#1A1208]
              px-[clamp(24px,2vw,34px)]
              py-[clamp(12px,1vw,16px)]
              hover:bg-[#F6F1E8]
              transition
            "
          >
            Conocer la Hacienda
          </button>


          <button
            onClick={() => goTo("#contacto")}
            className="
              rounded-full
              border
              border-white/40
              text-white
              px-[clamp(24px,2vw,34px)]
              py-[clamp(12px,1vw,16px)]
              hover:bg-white/10
              transition
            "
          >
            Escríbenos
          </button>

        </motion.div>



        {/* Logos de apoyo */}
        <motion.div
          initial={{
            opacity:0,
          }}
          animate={{
            opacity:1,
          }}
          transition={{
            delay:.55,
          }}
          className="
            flex
            justify-center
            items-center
            w-full
            mt-[clamp(48px,6vh,80px)]
          "
        >

          <div
            className="
              flex
              items-center
              gap-8
            "
          >

            <p
              className="
                uppercase
                text-white/60
                tracking-[.25em]
                text-[clamp(.65rem,.7vw,.8rem)]
              "
            >
              Con el apoyo de
            </p>


            <img
              src={SENA}
              alt="SENA"
              className="object-contain"
              style={{
                height:"clamp(42px,3.5vw,58px)",
              }}
            />


            <div
              className="
                w-px
                bg-white/30
              "
              style={{
                height:"38px",
              }}
            />


            <img
              src={FONDO}
              alt="Fondo Emprender"
              className="object-contain"
              style={{
                height:"clamp(42px,3.5vw,58px)",
              }}
            />

          </div>

        </motion.div>


      </Container>



      {/* Flecha */}
      <motion.button
        onClick={() => goTo("#nosotros")}
        animate={{
          y:[0,8,0],
        }}
        transition={{
          duration:2,
          repeat:Infinity,
          ease:"easeInOut",
        }}
        className="
          absolute
          right-[clamp(24px,4vw,48px)]
          bottom-[clamp(24px,4vh,48px)]
          text-white/50
          hover:text-white
          transition
        "
      >
        <ArrowDown size={22}/>
      </motion.button>


    </section>
  );
}