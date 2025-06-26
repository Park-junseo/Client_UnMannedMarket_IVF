import React from 'react';
import AdminHeader from 'src/common/header/AdminHeader';
import BasicModal from 'src/common/modal/BasicModal';
import {
    BorderRoundedContent,
    ContentHeader,
    InputStyle,
    StyledButton,
    TheadSmall,
} from 'src/common/styledAdmin';
import { Flex, FlexCenter, FlexRow } from 'src/common/styledComponents';
import AdminTable from 'src/common/table/AdminTable';
import GetSeoulTime from 'src/common/time/GetSeoulTime';
import { mediumBlack, fenxyBlue } from 'src/util/constants/style';
import { useAdminUserDetailScreen } from './hooks/useAdminUserDetailScreen';

const AdminUserDetailScreen = () => {
    const hookMember = useAdminUserDetailScreen();
    const btnCheckBoxStyle = {
        width: 160,
        marginLeft: -1,
        lineHeight: '36px',
        border: '1px solid #eee',
        display: 'inline-flex',
        justifyContent: 'center',
        color: '#999',
        // cursor: 'pointer',
        '&.active': {
            background: fenxyBlue,
            borderColor: fenxyBlue,
            color: 'white',
        },
        cursor: 'pointer'
    };
    return (
        <div css={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <AdminHeader active={'회원관리'} activeItem={'회원관리'} />
            <div css={{ marginLeft: 240, padding: 20, minWidth: 1100 }}>
                <FlexRow
                    css={{
                        paddingBottom: 20,
                        alignItems: 'center',
                        borderBottom: '2px solid #4A5864',
                    }}>
                    <div
                        css={{
                            fontSize: 18,
                            color: '#333',
                            fontWeight: 'bold',
                            flexGrow: 1,
                            lineHeight: '32px',
                        }}>
                        회원관리
                    </div>
                    <FlexRow>
                        {/* {hookMember.user?.userType === 'BUSINESS' ? (
              <>
                <StyledButton css={{ background: yoksuriBlue }}>
                  승인
                </StyledButton>
                <StyledButton css={{ background: yoksuriBlue }}>
                  반려
                </StyledButton>
              </>
            ) : undefined} */}

                        <StyledButton
                            onClick={hookMember.onClickUpdateUser}
                            css={{ background: fenxyBlue }}>
                            수정
                        </StyledButton>
                        <StyledButton
                            css={{ backgroundColor: '#4A5864' }}
                            onClick={hookMember.onClickRouterUser}>
                            목록
                        </StyledButton>
                    </FlexRow>
                </FlexRow>

                <BorderRoundedContent css={{ padding: 30 }}>
                    <Flex css={{ gap: 20 }}>
                        <FlexRow css={{ gap: 20 }}>
                            <Flex css={{ flex: 1 }}>
                                <TheadSmall>회원번호</TheadSmall>
                                <Flex css={{ color: '#999' }}>{hookMember.user?.id}</Flex>
                            </Flex>
                            <Flex css={{ flex: 1 }}>
                                <TheadSmall>가입일</TheadSmall>
                                <Flex css={{ color: '#999' }}>
                                    {hookMember.user?.createdAt && (
                                        <GetSeoulTime time={hookMember.user.createdAt} long />
                                    )}
                                </Flex>
                            </Flex>
                        </FlexRow>
                        {/* <FlexRow css={{ gap: 20 }}>
              <Flex css={{ flex: 1 }}>
                <TheadSmall>포인트</TheadSmall>
                <Flex css={{ color: '#999' }}>?????</Flex>
              </Flex>
              <Flex css={{ flex: 1 }}>
                <TheadSmall>충전금액</TheadSmall>
                <Flex css={{ color: '#999' }}>??????</Flex>
              </Flex>
            </FlexRow> */}
                    </Flex>
                </BorderRoundedContent>

                <BorderRoundedContent css={{ padding: 30 }}>
                    <Flex css={{ gap: 20, flexFlow: 'wrap' }}>
                        <Flex css={{ flex: 1, flexBasis: '100%' }}>
                            {
                                hookMember.user?.userType !== 'ADMIN' ?
                                    <div>
                                        <TheadSmall>
                                            회원분류<span>*</span>
                                        </TheadSmall>
                                        <FlexRow className="notBottomBorder">
                                            <div
                                                css={btnCheckBoxStyle}
                                                className={`${hookMember.userType === 'GENERAL' && 'active'
                                                    }`}
                                                onClick={(e) => {
                                                    hookMember.onClickUserType('GENERAL')
                                                }}>
                                                일반 회원
                                            </div>
                                            <div
                                                css={btnCheckBoxStyle}
                                                className={`${hookMember.userType === 'BUSINESS' && 'active'
                                                    }`}
                                                onClick={(e) => {
                                                    hookMember.onClickUserType('BUSINESS')
                                                }}>
                                                비즈니스
                                            </div>
                                            <div
                                                css={btnCheckBoxStyle}
                                                className={`${hookMember.userType === 'MANAGER' && 'active'
                                                    }`}
                                                onClick={(e) => {
                                                    hookMember.onClickUserType('MANAGER')
                                                }}>
                                                매니저
                                            </div>
                                        </FlexRow>
                                    </div> : undefined
                            }
                        </Flex>
                        <Flex css={{ width: 'calc(50% - 15px)' }}>
                            <TheadSmall>
                                아이디<span>*</span>
                            </TheadSmall>
                            <Flex css={{ color: '#999', lineHeight: '28px' }}>
                                {hookMember.user?.loginId}
                            </Flex>
                        </Flex>
                        <Flex css={{ width: 'calc(50% - 15px)' }}>
                            <TheadSmall>
                                이름<span>*</span>
                            </TheadSmall>
                            <Flex css={{ color: '#999' }}>
                                <InputStyle
                                    type="text"
                                    value={hookMember.username}
                                    onChange={(e) => hookMember.onChangeUsername(e.target.value)}
                                />
                            </Flex>
                        </Flex>
                        <Flex css={{ width: 'calc(50% - 15px)' }}>
                            <TheadSmall>
                                별명<span>*</span>
                            </TheadSmall>
                            <Flex css={{ color: '#999', lineHeight: '28px' }}>
                                {hookMember.user?.nickname}
                            </Flex>
                        </Flex>
                        <Flex css={{ width: 'calc(50% - 15px)' }}>
                            <TheadSmall>비밀번호(변경 시 기입)</TheadSmall>
                            <Flex css={{ color: '#999' }}>
                                <InputStyle
                                    type="password"
                                    value={hookMember.password}
                                    onChange={(e) => hookMember.onChangePw(e.target.value)}
                                />
                            </Flex>
                        </Flex>
                        <Flex css={{ width: 'calc(50% - 15px)' }}>
                            <TheadSmall>비밀번호 확인</TheadSmall>
                            <Flex css={{ color: '#999' }}>
                                <InputStyle
                                    type="password"
                                    value={hookMember.repassword}
                                    onChange={(e) => hookMember.onChangeRePw(e.target.value)}
                                />
                            </Flex>
                        </Flex>

                    </Flex>
                </BorderRoundedContent>

                {/* <BorderRoundedContent css={{ padding: 30 }}>
          <Flex css={{ gap: 20 }}>

            <FlexRow css={{ gap: 20 }}>
              <Flex css={{ flex: 1 }}>
                <TheadSmall>탈퇴일자</TheadSmall>
                <Flex css={{ color: '#999' }}>
                  {hookMember.user?.EscapeUser?.[0]?.createdAt ? (
                    <GetSeoulTime
                      time={hookMember.user?.EscapeUser?.[0]?.createdAt}
                      long
                    />
                  ) : (
                    '-'
                  )}
                </Flex>
              </Flex>
              <Flex css={{ flex: 1 }}>
                <TheadSmall>탈퇴사유</TheadSmall>
                <Flex css={{ color: '#999' }}>
                  {hookMember.user?.EscapeUser?.[0]?.content
                    ? hookMember.user.EscapeUser[0].content
                    : '-'}
                </Flex>
              </Flex>
            </FlexRow>
          </Flex>
        </BorderRoundedContent> */}
            </div>
            <BasicModal
                display={hookMember.modalDisplayState}
                content={hookMember.modalContent}
                confirmBtn={hookMember.onClickCompleted}
            />
        </div>
    );
};

export default AdminUserDetailScreen;
