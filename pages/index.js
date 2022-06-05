import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import styled from 'styled-components'
import ImgSlider from "../components/ImageSlider";
import Viewers from "../components/Viewers";
import Movies from "../components/Movies";


export default function Home() {
  return (
    <>
      <Head>
        <title>Inno Sufiyan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
      </Container>
    </>
  );
}

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px) 20px calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
