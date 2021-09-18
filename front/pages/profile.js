import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "김지원" },
    { nickname: "윤소희" },
    { nickname: "단풍이" },
  ];
  const followingList = [
    { nickname: "김지원" },
    { nickname: "윤소희" },
    { nickname: "단풍이" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | Together</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
