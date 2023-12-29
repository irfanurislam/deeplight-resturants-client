const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="  text-3xl uppercase "> {heading}</p>
            <h3 className="text-black-600 mb-3 ">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;


