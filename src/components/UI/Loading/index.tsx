import styled from 'styled-components';

const Loading = () => {
  return <LoadingText>잠시만 기다려 주세요</LoadingText>;
};
export default Loading;

const LoadingText = styled.div`
  padding: 80px 0 0 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-weight: 700;
  color: red;
`;
