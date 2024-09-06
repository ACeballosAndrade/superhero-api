import { useEffect, useState } from "react";
import superman from "../mocks/only-one.json";
import { PowerStatsCard } from "../ui/PowerStatsCard";
import { BiographyCard } from "../ui/BiographyCard";
import { AppearanceCard } from "../ui/AppearanceCard";
import { ConnectionsCard } from "../ui/ConnectionsCard";
import {
  FaBrain,
  FaSuperpowers,
  FaShieldAlt,
  FaFistRaised,
  FaBolt,
  FaVenusMars,
  FaDna,
  FaRulerVertical,
  FaKaggle,
  FaEye,
} from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
import { FaScissors } from "react-icons/fa6";
import { Result } from "../types";
// import type { Powerstats, Biography, Appearance, Connections } from '../types';

interface Props {
  superhero: Result;
}

export function CardSuperHeroe({ superhero }: Props) {
  const ejemplo = {
    BIOGRAFÍA: 2,
    ESTADÍSTICAS: 1,
    APARIENCIA: 3,
    CONEXIONES: 4,
  };

  const [isSelected, setIsSelected] = useState(2);
  const [result, setResult] = useState(superman);

  const handleClick = (key: number) => {
    setIsSelected(key);
  };

  useEffect(() => {
    if (Object.keys(superhero).length > 0) {
      setResult(superhero);
    }
  }, [superhero, result]);

  return (
    <div className="text-zinc-200 lg:flex lg:max-h-[500px] justify-center gap-7">
      <img src={result.image.url} alt={result.name} className="h-[420px]" />
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl lg:text-4xl">{result.name}</h2>

        <div className="flex flex-wrap items-center justify-around gap-2 w-full my-4">
          {(Object.keys(ejemplo) as Array<keyof typeof ejemplo>).map((key) => (
            <button
              key={key}
              onClick={() => handleClick(ejemplo[key])}
              className={`border-b-2 w-32 font-semibold ${
                isSelected === ejemplo[key]
                  ? "border-yellow-300 text-yellow-300"
                  : "text-zinc-400 border-zinc-900"
              }`}
            >
              {`${key}`}
            </button>
          ))}
        </div>

        <div
          className={`w-full ${
            isSelected === 1 ? "block" : "hidden"
          } max-w-[540px]`}
        >
          <ul className="flex flex-col gap-2">
            <PowerStatsCard
              icon={<FaBrain />}
              aspect={"Inteligencia"}
              digit={result.powerstats.intelligence}
            />
            <PowerStatsCard
              icon={<FaFistRaised />}
              aspect={"Fuerza"}
              digit={result.powerstats.strength}
            />
            <PowerStatsCard
              icon={<FaBolt />}
              aspect={"Velocidad"}
              digit={result.powerstats.speed}
            />
            <PowerStatsCard
              icon={<FaShieldAlt />}
              aspect={"Durabilidad"}
              digit={result.powerstats.durability}
            />
            <PowerStatsCard
              icon={<FaSuperpowers />}
              aspect={"Poder"}
              digit={result.powerstats.power}
            />
            <PowerStatsCard
              icon={<RiSwordFill />}
              aspect={"Combate"}
              digit={result.powerstats.combat}
            />
          </ul>
        </div>
        <div
          className={`w-full ${
            isSelected === 2 ? "block" : "hidden"
          } max-w-[540px] overflow-y-scroll custom-scrollbar max-h-[300px]`}
        >
          <ul className="mb-4">
            <BiographyCard
              aspect={"Nombre: "}
              value={result.biography["full-name"]}
            />
            <BiographyCard
              aspect={"Alter egos: "}
              value={result.biography["alter-egos"]}
            />
            <BiographyCard
              aspect={"Alias: "}
              value={result.biography.aliases}
            />
            <BiographyCard
              aspect={"Lugar de nacimiento: "}
              value={result.biography["place-of-birth"]}
            />
            <BiographyCard
              aspect={"Primera aparición: "}
              value={result.biography["first-appearance"]}
            />
            <BiographyCard
              aspect={"Publicaciones: "}
              value={result.biography.publisher}
            />
            <BiographyCard
              aspect={"Alineación: "}
              value={result.biography.alignment}
            />
          </ul>
        </div>
        <div
          className={`w-full ${
            isSelected === 3 ? "block" : "hidden"
          } max-w-[540px]`}
        >
          <ul>
            <AppearanceCard
              icon={<FaVenusMars />}
              aspect={"Género: "}
              value={result.appearance.gender}
            />
            <AppearanceCard
              icon={<FaDna />}
              aspect={"Raza: "}
              value={result.appearance.race}
            />
            <AppearanceCard
              icon={<FaRulerVertical />}
              aspect={"Estatura: "}
              value={result.appearance.height}
            />
            <AppearanceCard
              icon={<FaKaggle />}
              aspect={"Peso: "}
              value={result.appearance.weight}
            />
            <AppearanceCard
              icon={<FaEye />}
              aspect={"Color de ojos: "}
              value={result.appearance["eye-color"]}
            />
            <AppearanceCard
              icon={<FaScissors />}
              aspect={"Cabello: "}
              value={result.appearance["hair-color"]}
            />
          </ul>
        </div>
        <div
          className={`w-full ${
            isSelected === 4 ? "block" : "hidden"
          } max-w-[530px] overflow-y-auto custom-scrollbar max-h-[300px] `}
        >
          <ul className="mb-4">
            <ConnectionsCard
              aspect={"Grupos - Alianzas"}
              value={result.connections["group-affiliation"]}
            />
            <ConnectionsCard
              aspect={"Personajes relacionados"}
              value={result.connections.relatives}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
