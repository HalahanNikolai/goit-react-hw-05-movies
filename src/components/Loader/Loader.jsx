import { RotateLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RotateLoader color="#7ca6df" size={30} />
    </div>
  );
};

export default Loader;
// test
