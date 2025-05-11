

function Logos({ id, logoh,}: any) {

  return (
    <div key={id} className="w-[8%]">
      <div className="grayscale hover:grayscale-0">
        <img
          src={logoh}
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Logos;
