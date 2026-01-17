import React from 'react';
import { Flame, Wind, Wrench, ThermometerSun, Home, Settings } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Furnace Repair',
    description: 'Diagnosis and repair for all makes and models. We fix ignition issues, blower motors, and thermostats.',
    icon: <Flame className="w-8 h-8 text-brand-red" />
  },
  {
    title: 'New Installations',
    description: 'High-efficiency furnace and AC installations. Upgrade your home comfort with top-tier brands.',
    icon: <Home className="w-8 h-8 text-brand-red" />
  },
  {
    title: 'AC Maintenance',
    description: 'Keep your cool in the summer. Annual cleaning, freon checks, and coil inspections.',
    icon: <Wind className="w-8 h-8 text-brand-red" />
  },
  {
    title: 'Emergency Service',
    description: 'Breakdowns happen at the worst times. We offer rapid response for urgent heating loss.',
    icon: <Wrench className="w-8 h-8 text-brand-red" />
  },
  {
    title: 'Duct Cleaning',
    description: 'Improve air quality and system efficiency by removing dust and debris from your airways.',
    icon: <Settings className="w-8 h-8 text-brand-red" />
  },
  {
    title: 'Humidifiers',
    description: 'Balance your home humidity for better health and wood floor protection during winter.',
    icon: <ThermometerSun className="w-8 h-8 text-brand-red" />
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Complete HVAC Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            From emergency repairs to full system replacements, Raami and the team have you covered.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-red-100">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-50 rounded-md shadow-sm border border-red-100">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;