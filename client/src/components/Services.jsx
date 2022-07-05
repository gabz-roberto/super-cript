import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ title, subtitle, color, icon }) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-lg">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="flex- ml-5 flex-col flex-1">
      <h3 className="text-white mt-2 text-lg ">{title}</h3>
      <p className="text-white mt-2 text-sm md:9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl text-gradient">
            Serviços que
            <br />
            estão sendo trabalhados.
          </h1>
        </div>
        <div className="flex flex-1 flex-col justify-start items-center">
        <ServiceCard
          title="Segurança Garantida"
          subtitle="Sempre prezando a privacidade e qualidade dos produtos."
          color="bg-[#1548DB]"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
        />
        <ServiceCard
          title="Melhores Taxas de Câmbio"
          subtitle="Sempre prezando a privacidade e qualidade dos produtos."
          color="bg-[#8C4BFB]"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
        />
        <ServiceCard
          title="Transações Rápidas"
          subtitle="Sempre prezando a privacidade e qualidade dos produtos."
          color="bg-[#007A35]"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
        />
      </div>
      </div>
    </div>
  );
};

export default Services;
