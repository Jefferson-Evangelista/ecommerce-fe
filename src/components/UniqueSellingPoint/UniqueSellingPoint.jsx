import { uspImg } from "../../assets";

const UniqueSellingPoint = () => {
  return (
    <div className="mb-10 flex flex-col items-center bg-lightGrey pb-16 pt-40 md:flex-row md:items-start md:justify-center">
      <div className="mb-8 flex w-full items-center justify-center px-16 md:mb-0 md:w-1/2">
        <img
          src={uspImg}
          alt="Beauty products on a blanket"
          className="object-fit w-[500px] drop-shadow-2xl"
        />
      </div>
      <div className="w-3/4 px-0 md:w-1/2 md:px-16">
        <h2 className="mb-4 font-krona text-xl font-bold md:text-3xl">
          Elegance and beauty that you deserve
        </h2>
        <p className="mb-4 text-justify text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          dignissimos, doloremque totam doloribus ratione quia impedit cum
          eveniet et dicta accusamus architecto quidem tenetur. Animi sint neque
          corporis ducimus!
        </p>
        <p className="mb-4 text-justify text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          dignissimos, doloremque totam doloribus ratione quia impedit cum
          eveniet et dicta accusamus architecto quidem tenetur. Animi sint neque
          corporis ducimus! Quae aperiam adipisci optio consequuntur qui minima
          id? Soluta, sapiente ea. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default UniqueSellingPoint;
