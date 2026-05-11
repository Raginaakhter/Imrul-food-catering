import Marquee from "react-fast-marquee";
import brand1 from "@/assets/brands logo/Office of the Chief Advisor.png";
import brand2 from "@/assets/brands logo/Bangladesh Army.png";
import brand3 from "@/assets/brands logo/Bangladesh RAB.png";
import brand4 from "@/assets/brands logo/Bangladesh Air Force.png";
import brand5 from "@/assets/brands logo/Combined military hospital.png";
import brand6 from "@/assets/brands logo/Defence services command and staff training cente.png";
import brand7 from "@/assets/brands logo/Department of Drug Administration.png";
import brand8 from "@/assets/brands logo/Raowa-army-.png";
import brand9 from "@/assets/brands logo/Seal_of_the_National.png";
import brand10 from "@/assets/brands logo/Sena-kollan.png";
// import brand1 from "@/assets/brands logo/Office of the Chief Advisor.png";

interface Brand {
  id: number;
  name: string;
  logo: string;
}

// Ensure "const brands" is only written ONCE
const brands: Brand[] = [
  { id: 1, name: "Office of the Chief Advisor", logo: brand1 },
  { id: 2, name: "Bangladesh Army", logo: brand2 },
  { id: 3, name: "Bangladesh RAB", logo: brand3 },
  { id: 4, name: "Bangladesh Air Force", logo: brand4 },
  { id: 5, name: "Combined Military Hospital", logo: brand5 },
  { id: 6, name: "Defence Services Training Center", logo: brand6 },
  { id: 7, name: "Department of Drug Administration", logo: brand7 },
  { id: 8, name: "Raowa Army", logo: brand8 },
  { id: 9, name: "National Seal", logo: brand9 },
  { id: 10, name: "Sena Kollan", logo: brand10 },
];

const MerqueBrands = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-md lg:text-xl xl:text-2xl font-bold uppercase tracking-[0.3em] ">
          They Trusted Us
        </p>
        <div className="mt-3 mx-auto w-10 h-[2px] bg-gray-200 rounded-full" />
      </div>

      {/* Marquee */}
      <Marquee
        speed={45}
        gradient={true}
        gradientColor="white"
        gradientWidth={80}
        pauseOnHover={true}
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="mx-12 items-center justify-center group flex-col justify-items-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-13 lg:h-16
                  xl:h-20 sm:h-10 w-auto object-contain transition-all duration-500 ease-in-out opacity-100 "
            />
            <p className="ml-2 text-sm font-medium text-gray-700 group-hover:text-blue-600 mt-1">
              {brand.name}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MerqueBrands;
