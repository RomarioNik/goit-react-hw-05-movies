import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <SpinnerWrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="3"
        animationDuration="1"
        width="80"
        visible={true}
      />
    </SpinnerWrapper>
  );
};

export default Loader;
