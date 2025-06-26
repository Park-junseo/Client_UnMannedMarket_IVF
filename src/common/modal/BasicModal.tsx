import React, { useEffect } from 'react';
import { Flex, FlexCenter, FlexRow } from '../styledComponents';

interface BasicModalProps {
  display: 'flex' | 'none';
  content?: any;
  confirmBtn?: () => void;
}

const BasicModal = (props: BasicModalProps) => {
  return (
    <FlexCenter
      css={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 100,
        display: props.display,
      }}>
      <FlexCenter css={{ backgroundColor: 'white', borderRadius: 8 }}>
        <Flex css={{ padding: 40, fontSize: 16, color: '#222' }}>
          {props.content || (
            <div css={{ textAlign: 'center', color: 'red' }}>
              모달에 작성한 내용이 없습니다.
              <br />
              코드를 확인해주세요.
            </div>
          )}
        </Flex>
        <FlexCenter
          css={{
            border: '0px solid #ddd',
            borderTopWidth: 1,
            height: 50,
            width: 320,
            cursor: 'pointer',
          }}
          onClick={() => {
            props?.confirmBtn
              ? props.confirmBtn()
              : alert(
                  '확인 버튼에 작성된 함수가 없습니다. 코드를 확인해주세요.',
                );
          }}>
          <div css={{ fontSize: 18, color: '#222', fontWeight: 500 }}>확인</div>
        </FlexCenter>
      </FlexCenter>
    </FlexCenter>
  );
};

export default BasicModal;
