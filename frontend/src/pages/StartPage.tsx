import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import logo from "../assets/icons/logo.svg";
import ModeCard from "../components/ModeCard";
import { models } from "../helpers/models";

interface Mode {
  id: number;
  title: string;
  description: string;
}

export const StartPage: React.FC = () => {
  // Локальный стейт: какой режим и модель выбраны (для подсветки)
  const [selectedMode, setSelectedMode] = useState<number | null>(null);
  const [selectedModelId, setSelectedModelId] = useState<number | null>(null);

  const navigate = useNavigate();

  // Два режима на выбор: id=1 ("Чат"), id=2 ("Дневник")
  const modes: Mode[] = [
    {
      id: 1,
      title: "Чат",
      description:
        "Здесь вы сможете получить квалифицированную помощь и поддержку по вопросам психологии в формате чата.",
    },
    {
      id: 2,
      title: "Дневник",
      description:
        "Здесь вы можете записать свои мысли и дать их на анализ чату в дальнейшем.",
    },
  ];

  // Клик по карточке "Чат" или "Дневник"
  const handleModeClick = (modeId: number) => {
    setSelectedMode(modeId);
    // Если modeId=1 => "?mode=1"
    // Если modeId=2 => "?mode=2"
    navigate(`/home?mode=${modeId}`);
  };

  // Выбор модели (через дропдаун NavBar)
  const handleModelSelect = (modelId: number) => {
    setSelectedModelId(modelId);

    // Предположим, modelId=1 => "Тесты" => /home?mode=2 (или как договорились)
    // modelId=2..6 => Чат => /home?mode=1&model=2..6
    if (modelId === 1) {
      // "Тесты"
      navigate(`/home?mode=2`);
    } else {
      // Остальные модели => Чат
      navigate(`/home?mode=1&model=${modelId}`);
    }
  };

  return (
    <div className="container-1438 flex flex-col items-center h-[100vh] bg-white">
      {/* NavBar с дропдауном (модели) */}
      <NavBar
        models={models}
        selectedModelId={selectedModelId}
        onModelSelect={handleModelSelect}
      />

      <div className="flex flex-col justify-center items-center w-[800px] h-[755px] mt-[3vh]">
        <div className="text-heading1 text-text mb-[2vh]">
          Psychological Chat GPT
        </div>
        <div className="text-subtitle1 text-black_50 mb-[3vh]">
          Ver 4.0 Mar 14
        </div>

        <div className="flex items-start py-[24px] pr-[100px] gap-[16px]">
          <img src={logo} alt="logo" className="w-[27px]" />
          <div className="flex flex-col">
            <div className="text-black text- mb-[2vh]">2.03 PM, 15 Nov</div>
            <div className="text-black text-">
              Приветствуем вас в нашем психологическом джипити-чате! Мы рады,
              что вы решили присоединиться к нам. Здесь вы сможете получить
              квалифицированную помощь и поддержку по вопросам психологии и
              пройти различные психологические тесты, а также записать свои
              мысли в дневнике.
              <br />
              <br />
              Однако перед тем как начать консультацию, нам нужно выбрать режим
              для дальнейшего взаимодействия.
              <br />
              <br />
              Это может быть:
            </div>
          </div>
        </div>

        {/* Карточки выбора режима: "Чат" (id=1) или "Дневник" (id=2) */}
        <div className="flex flex-wrap gap-4 mt-[2vh] mb-[4vh]">
          {modes.map((mode) => (
            <ModeCard
              key={mode.id}
              title={mode.title}
              description={mode.description}
              onClick={() => handleModeClick(mode.id)}
              isSelected={selectedMode === mode.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
