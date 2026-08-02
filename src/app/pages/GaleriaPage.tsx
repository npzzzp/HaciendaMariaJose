import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

import { GaleriaSection } from "../components/GaleriaSection";
import { Container } from "@./ui/Container";



export function GaleriaPage(){


useEffect(()=>{

window.scrollTo({
top:0,
behavior:"instant"
});

},[]);




return (

<div className="min-h-screen bg-[#F6F1E8]">





{/* Header */}

<header

className="
bg-[#1A1208]
pt-[clamp(96px,12vh,120px)]
pb-[clamp(48px,8vh,64px)]
"

>


<Container>


<Link

to="/"

className="
inline-flex
items-center
gap-2
mb-8
text-sm
text-white/40
transition-colors
hover:text-white/70
"

style={{
fontFamily:"Georgia, serif"
}}

>

<ArrowLeft size={15}/>

Volver a la hacienda

</Link>





<p

className="
uppercase
tracking-[.3em]
text-xs
text-[#B87C2A]
mb-3
"

>

Hacienda Maria Jose

</p>






<h1

className="
text-[#F6F1E8]
font-bold
text-[clamp(2rem,5vw,3.5rem)]
leading-[1.1]
"

style={{
fontFamily:"Georgia, serif"
}}

>

Galería

</h1>






<p

className="
mt-4
max-w-lg
text-sm
text-[#6B5840]
leading-[1.8]
"

>

Fotos y videos de la finca, la inauguración,
el trabajo diario y las personas que hacen posible
Hacienda Maria Jose.

</p>



</Container>


</header>







{/* Galerías */}



<GaleriaSection

numero="01"

categoria="inauguracion"

titulo="La Inauguración"

subtitulo="El día que abrimos las puertas. El comienzo de todo."

/>



<GaleriaSection

numero="02"

categoria="actividades"

titulo="Actividades del Día a Día"

subtitulo="El ordeño, el campo, la producción. Lo que pasa cada mañana en la finca."

/>



<GaleriaSection

numero="03"

categoria="equipo"

titulo="Trabajadores y Proveedores"

subtitulo="Las personas que trabajan con nosotros y hacen posible cada producto."

/>







{/* Footer */}

<footer

className="
mt-[clamp(64px,10vh,96px)]
border-t
border-black/10
py-8
"

>


<Container>


<div

className="
flex
flex-col
items-center
justify-between
gap-3
text-xs
text-[#6B5840]
sm:flex-row
"

>


<span

style={{
fontFamily:"Georgia, serif"
}}

>

Hacienda Maria Jose

</span>



<span>

Campo de la Cruz, Atlántico · Colombia

</span>



<span>

© {new Date().getFullYear()}

</span>



</div>


</Container>


</footer>




</div>

);

}