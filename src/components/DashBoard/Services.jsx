import { icons } from "../../constants";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <div className="ms-[34px]">
      <div className="flex justify-between my-5">
        <h1 className="font-urbanist-extra-bold text-xl md:text-3xl ">Our Services</h1>
        <button className="font-urbanist-bold bg-primary text-white hover:bg-blue-800 transition-colors rounded-xl px-3">
          View All
        </button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-10 mb-5">
        <ServiceCard imageSrc={icons.electricity} textContent="Electricity" />
        <ServiceCard imageSrc={icons.internet2} textContent="Internet" />
        <ServiceCard imageSrc={icons.water} textContent="Water" />
        <ServiceCard imageSrc={icons.wallet} textContent="E-Wallet" />
        <ServiceCard imageSrc={icons.games} textContent="Games" />
        <ServiceCard imageSrc={icons.television} textContent="Television" />
        <ServiceCard imageSrc={icons.shopping} textContent="Shopping" />
        <ServiceCard imageSrc={icons.installment} textContent="Installment" />
        <ServiceCard imageSrc={icons.bell} textContent="AirTime" />
        <ServiceCard imageSrc={icons.camera} textContent="Camera" />
      </div>
    </div>
  );
};

export default Services;
