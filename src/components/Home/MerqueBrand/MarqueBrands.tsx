import Marquee from "react-fast-marquee";

interface Brand {
  id: number;
  name: string;
  logo: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    id: 3,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 4,
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    id: 5,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 6,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    id: 7,
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
  },
  {
    id: 8,
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
];

const MerqueBrands = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
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
            className="mx-12 flex items-center justify-center group"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-8 sm:h-10 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MerqueBrands;
