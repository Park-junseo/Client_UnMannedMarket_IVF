import { NextPage } from "next";
import AdminTable from "src/common/table/AdminTable";
import { useUserSelectListScreen } from "./hooks/useUserSelectListScreen";
import { User } from "src/api/usersApi";
import GetSeoulTime from "src/common/time/GetSeoulTime";
import { ContentFlex, Flex, FlexRow } from "src/common/styledComponents";
import { BorderRoundedContent, InputStyle, StyledButton } from "src/common/styledAdmin";

const UserSelectListScreen = ({
    onClickSelect
}: {
    onClickSelect: (id: number) => void;
}) => {
    const hookMember = useUserSelectListScreen();

    return (<ContentFlex>
        <BorderRoundedContent>
            <Flex css={{ padding: 10 }}>
                <FlexRow
                    css={{
                        alignItems: 'center',
                        fontSize: 14
                    }}>
                    <div
                        css={{
                            width: 80,
                            paddingLeft: 30,
                        }}>
                        검색어
                    </div>
                    <select
                        css={{
                            width: 120,
                            marginRight: 10,
                            height: '36px',
                            color: '#999',
                        }}
                        onChange={(e) => {
                            hookMember.onChangeSearchType(e.target.value);
                        }}>
                        {/* <option value="없음">없음</option> */}
                        <option value="닉네임">닉네임</option>
                        <option value="아이디">아이디</option>
                        <option value="이름">이름</option>
                    </select>
                    <InputStyle
                        type="text"
                        placeholder="검색어를 입력해주세요."
                        css={{
                            flexGrow: 1,
                            height: 36,
                            fontSize: 14,
                            border: '1px solid #eee',
                        }}
                        value={hookMember.searchText}
                        onChange={(e) => hookMember.onChangeSearchText(e.target.value)}
                    />
                    <StyledButton
                        onClick={hookMember.onClickSearch}
                        css={{ border: 0, background: 'gray', color: 'white' }}>
                        검색
                    </StyledButton>
                </FlexRow>
            </Flex>
        </BorderRoundedContent>
        <AdminTable
            datas={hookMember.userList}
            page={hookMember.page}
            take={5}
            setPage={hookMember.setPage}
            headers={[
                {
                    name: '아이디',
                    selector: 'loginId',
                    cell: ({ data }: { data: any }) => {
                        return <>{data.loginId}</>;
                    },
                },
                {
                    name: '닉네임',
                    selector: 'nickname',
                    cell: ({ data }: { data: User }) => {
                        return (
                            <div>
                                {data.nickname}
                            </div>
                        );
                    },
                },
                {
                    name: '이름',
                    selector: 'username',
                    cell: ({ data }: { data: any }) => {
                        return <>{data.username}</>;
                    },
                },
                {
                    name: '구분',
                    selector: 'userType',
                    cell: ({ data }: { data: any }) => {
                        let type = '-';
                        if (data.userType === 'ADMIN') {
                            type = '관리자';
                        } else if (data.userType === 'GENERAL') {
                            type = '일반회원';
                        } else if (data.userType === 'MANAGER') {
                            type = '매니저';
                        }
                        return <>{type}</>;
                    },
                },
                {
                    name: '가입일',
                    selector: 'createdAt',
                    minWidth: 100,
                    cell: ({ data }: { data: any }) => {
                        return <GetSeoulTime time={data.createdAt} long />;
                    },
                },
                {
                    name: '관리',
                    selector: 'management',
                    cell: ({ data }: { data: any }) => {
                        return (
                            <FlexRow
                                css={{
                                    alignItems: 'center',
                                    // justifyContent: 'center',
                                }}>
                                <StyledButton
                                    css={{
                                        height: 28,
                                        padding: '0 6px',
                                        lineHeight: '26px',
                                        minHeight: 'auto',
                                        color: '#999',
                                        border: '1px solid #999',
                                        margin: 0,
                                    }}
                                    onClick={() =>
                                        onClickSelect(data.id)
                                    }>
                                    선택
                                </StyledButton>
                            </FlexRow>
                        );
                    },
                },
            ]}
        />
    </ContentFlex>)
}

export default UserSelectListScreen;