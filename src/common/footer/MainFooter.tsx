import { appContentWidth, fenxyBlue } from 'src/util/constants/style';
import { Flex, FlexCenter, FlexRow } from '../styledComponents';
import { useMainFooter } from './hooks/useMainFooter';

const titleCss = {
  color: '#2d2d2d',
  fontWeight: 400,
  fontSize: 20,
  // marginBottom: 16,
  marginBottom: 4,
  display: 'flex',
  fontFamily: 'Jost',
};
const contentCss = (style:any) => {
  const {fontSize} = style as {fontSize:number|undefined};
  return {
    color: '#e7e7e7',
    fontWeight: 300,
    fontSize: fontSize || 16,
    // marginBottom: 8,
    marginBottom: 4,
    display: 'flex',
    alignItems:'center'
  }
};
const detailCss = {
  color: '#e7e7e7',
  fontWeight: 400,
  fontSize: 12,
  display: 'flex',
};
const lineCss = {
  width: '100%',
  borderColor: '#848484',
  borderWidth: 0.5,
  borderStyle: 'solid',
  borderBottom: 0,
  // marginTop: 8,
  marginTop: 4,
  // marginBottom: 16,
  marginBottom: 10,
};


export const MainFooter = () => {
  const hookMember = useMainFooter();

  return (
    <div
      css={{
        marginTop: hookMember.marginTop,
        // '-webkit-font-smoothing': 'antialiased',
      }}
      ref={hookMember.disEle}>
      <div css={{ backgroundColor: '#616161' }}>
        <FlexCenter
          css={{
            padding: 20,
            paddingTop: 24,
            maxWidth: appContentWidth,
            margin: '0 auto',
            //
            paddingBottom: 10,
          }}>
          <div
            css={{
              fontFamily: 'TmonMonsori',
              color: 'white',
              fontSize: 28,
            }}>
            HEALTH
          </div>
        </FlexCenter>
      </div>
      <div css={{ backgroundColor: '#616161' }}>
        <Flex
          css={{
            padding: 20,
            paddingTop: 0,
            // paddingBottom: 40,
            paddingBottom: 30,
            margin: '0 auto',
            maxWidth: appContentWidth,
          }}>
        </Flex>
      </div>
    </div>
  );
};
