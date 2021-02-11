import React, { useState } from 'react';
import styled from 'styled-components';
import { TYPE } from 'theme';

import { ReactComponent as HelperImg } from 'assets/svgs/helper.svg';

interface IProps {
  width: string;
  helperText: string;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
`;

const TextWrapper = styled.div<{ size: string; show: boolean }>`
  position: absolute;
  left: 1.5rem;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: visibility opacity 0.5s linear;
  width: ${({ size }) => size};
  background: rgba(35, 38, 40, 0.9);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;

const Helper: React.FC<IProps> = ({ width, helperText }) => {
  const [extend, setExtend] = useState(false);
  return (
    <>
      <Wrapper>
        <HelperImg
          onMouseEnter={() => setExtend(true)}
          onMouseLeave={() => setExtend(false)}
        />
        <TextWrapper size={width} show={extend}>
          <TYPE.Body color="white" lineHeight="1.5rem">
            {helperText}
          </TYPE.Body>
        </TextWrapper>
      </Wrapper>{' '}
    </>
  );
};

export default Helper;
