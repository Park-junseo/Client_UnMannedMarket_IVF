import { Dispatch } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as accountSlice from 'src/data/accountSlice';
import { useTypedSelector } from 'src/store';
import { redirectUrl, rootUrl } from 'src/util/constants/app';

interface HookMember {
  user: accountSlice.User | undefined;
  onClickLogout(): void;
  onClickBack(): void;
}

interface ICalendarElement {
  title: string,
  start: string,
  end: string,
  color: string,
}

const membershipColor = '#789DBC';
const equipmentColor = '#FFE3E3';
const accessColor = '#C9E9D2';

export function useMyPageScreen(): HookMember {
  const user = useTypedSelector((state) => state.account.user);
  const router = useRouter();

  const dispatch = useDispatch<Dispatch<any>>();

  const [gymId, setGymId] = useState<number>();

  const [dateMap, setDateMap] = useState<Map<string, ICalendarElement[]>>(new Map());

  useEffect(() => {
    let sessionUserData = sessionStorage.getItem('userData');
    if (sessionUserData) {
      let userData: { user: accountSlice.User; accessToken: string } =
        JSON.parse(sessionUserData);

      dispatch(accountSlice.saveUserDataInSession(userData));
    } else {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (router.query.id) {
      setGymId(Number(router.query.id));
    }
  }, [router])

  const onClickLogout = () => {
    // id,pw를 가져오고 슬라이스의 로그인으로 넘김
    dispatch(accountSlice.logout());
    router.push("/");
  };

  const onClickBack = () => {
    router.back();
  }
  return {
    user,
    onClickLogout,
    onClickBack,
  };
}
