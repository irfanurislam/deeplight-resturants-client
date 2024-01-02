const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <h3 className="text-black text-2xl font-bold mt-16">{heading}</h3>
      <h1 className="text-4xl font-extrabold text-black py-16">
      {subHeading}
      </h1>
    </div>
  );
};

export default SectionTitle;


