import React, { useEffect, useState } from "react";
import Responsive from "../components/common/Responsive";
import styled from "styled-components";
import Search from "../components/home/Search";
import { userInfo } from "../lib/api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user";
import Header from "../components/common/Header";
import Swiper from "../components/home/Swiper";
import { AllPostsType, PostType } from "../lib/type";
import { listPosts, loadPost } from "../lib/api/home";
import PostList from "../components/photocard/SearchPostList";
import Footer from "../components/common/Footer";
import HomePostList from "../components/photocard/HomePostList";
import Post from "../components/photocard/Post";
import { useNavigate } from "react-router";

export const Wrapper = styled(Responsive)`
  .post-list {
    font-size: 20px;
    // Mobile
    @media screen and (max-width: 767px) {
      font-size: 18px;
    }
  }
`;

const HomePage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [testPost, setTestPost] = useState(null);

  const [homePosts, setHomePosts] = useState<AllPostsType>({
    popular: [],
    recent: [],
    place: [],
    store: [],
    lodging: [],
  });

  useEffect(() => {
    const loadTestPost = () => {
      loadPost(8)
        .then((res) => {
          setTestPost(res);
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          navigate("/");
        });
    };

    const loadHomePosts = () => {
      // API 호출
      listPosts()
        .then((res) => {
          // @ts-ignore
          setHomePosts(res);
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          navigate("/");
        });
    };

    const loadUser = () => {
      let token = localStorage.getItem("tm-token");
      if (!token) return;

      // API 호출
      userInfo()
        .then((res) => {
          dispatch(setUser({ user: res }));
        })
        .catch((err) => {
          console.warn(err);
        });
      // .finally(() => {
      //   navigate("/");
      // });
    };

    loadTestPost();
    loadUser();
    loadHomePosts();
  }, [dispatch, navigate]);

  return (
    <Wrapper>
      <Header />
      <Search />
      <Swiper />
      <Post post={testPost} key={testPost} my={true} />
      <HomePostList list={homePosts.popular} category="popular" />
      <HomePostList list={homePosts.recent} category="recent" />
      <HomePostList list={homePosts.place} category="place" />
      <HomePostList list={homePosts.store} category="store" />
      <HomePostList list={homePosts.lodging} category="lodging" />
      <Footer />
    </Wrapper>
  );
};

export default HomePage;
