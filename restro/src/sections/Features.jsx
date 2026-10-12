import React from "react";
import Animated from "../components/Animated";
import { featuresData } from "../data/data";
import { ChefHat, HeartHandshake, Leaf } from "lucide-react";

const iconMap = {
  ChefHat,
  Leaf,
  HeartHandshake,
};

const Features = () => {
  return (
    <section id="features" className="mt-44 px-auto">
      <div className="text-center mb-16">
        <Animated delay={0.2} className="text-center mx-auto">
          <p className="uppercase text-orange-500 font-medium mb-3.5">
            what sets us apart
          </p>
        </Animated>
        <Animated delay={0.2}>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance ">
            Craftin memorable dining experiences
          </h2>
        </Animated>
      </div>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-14 justify-between">
        <div className="space-y-10 max-w-md">
          {featuresData.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <Animated
                key={index}
                y={150}
                delay={index * 0.15}
                className="flex items-start gap-4 text-left"
              >
                {IconComponent && (
                  <IconComponent className="text-orange-500 size-5 shrink-0 mt-0.5" />
                )}
                <div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-zinc-600 max-w-sm">{feature.description}</p>
                </div>
              </Animated>
            );
          })}
        </div>
        <Animated x={50} y={0}>
          <img
            src="/assets/chef.png"
            alt="chef-image"
            className="w-full max-w-sm h-111 object-cover rounded-3xl "
          />
        </Animated>
      </div>
    </section>
  );
};

export default Features;
