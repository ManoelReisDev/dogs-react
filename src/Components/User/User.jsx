import UserHeader from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="posta" component={<UserPhotoPost />} />
        <Route path="estatisticas" component={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
