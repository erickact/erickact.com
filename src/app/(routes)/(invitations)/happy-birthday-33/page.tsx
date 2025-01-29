import React from "react";
import FlickeringLetter from "@/components/shared/FlickeringLetter";
import Wrapper from "@/components/shared/Wrapper";

const HappyBirthday33 = () => {
  return (
    <Wrapper className="md:text-left text-center pb-20">
      <p className="text-3xl">Acompáñanos a celebrar</p>

      <div className="flex justify-between md:gap-16 flex-col-reverse md:flex-row">
        <div>
          <h1 className="font-ms-madi text-[100px] md:text-[120px] my-8 md:my-10 text-shadow leading-none">
            Ericka's birthday
          </h1>

          <div className="text-xl space-y-2 mb-10">
            <p>
              <span className="font-bold">📅 Cuándo:</span> Sábado 1 de Febrero
            </p>
            <p>
              <span className="font-bold">🕖 Hora:</span> A partir de las 5:00
              PM
            </p>
            <p>
              <span className="font-bold">📍 Dónde:</span> Calle Vidal 140, dpto
              # 1206, Miraflores (
              <a
                className="underline"
                href="https://bit.ly/depa-miraflores"
                target="_blank"
              >
                ver mapa
              </a>
              )
            </p>
            <p>
              <span className="font-bold">🍺 Qué llevar:</span> Lo que quieras
              beber, comer o compartir; igual, insumos no faltarán...
            </p>
          </div>

          <blockquote className="font-bold">
            <p>
              🎁 Algo para mí? no es necesario... peeeero, si igual quieres
              engreirme con un regalo, quizás este{" "}
              <a
                href="https://misanhelos.com/wish-lists/paulrrdiaz/erickas-happy-birthday-33"
                target="_blank"
                className="underline"
              >
                link
              </a>{" "}
              te ayude ❤️
            </p>
          </blockquote>
        </div>

        <div className="flex justify-center text-[200px] md:text-[400px] leading-none">
          <h2 className="text-shadow">3</h2>
          <FlickeringLetter className="mt-10 md:mt-40">
            <h2>3</h2>
          </FlickeringLetter>
        </div>
      </div>
    </Wrapper>
  );
};

export default HappyBirthday33;
