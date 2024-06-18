import { uspImg } from "../../assets";

const UniqueSellingPoint = () => {
  return (
    <div className="mb-10 flex items-start justify-center bg-lightGrey pb-16 pt-40 ">
      <div className="flex w-1/2 items-center px-16">
        <img
          src={uspImg}
          alt="Beauty products on a blanket"
          className="object-fit w-[500px] drop-shadow-2xl"
        />
      </div>
      <div className="w-1/2 px-16">
        <h2 className="mb-4 font-krona text-3xl font-bold">
          Elegance and beauty that you deserve.
        </h2>
        <p className="mb-4 text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          dignissimos, doloremque totam doloribus ratione quia impedit cum
          eveniet et dicta accusamus architecto quidem tenetur. Animi sint neque
          corporis ducimus! Quae aperiam adipisci optio consequuntur qui minima
          id? Soluta, sapiente ea. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Recusandae reiciendis consequatur autem inventore,
          eum quam?
        </p>
        <p className="mb-4 text-sm leading-6">
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
