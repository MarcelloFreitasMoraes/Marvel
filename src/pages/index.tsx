import { useState, useCallback } from 'react';
import { useSpring } from 'react-spring';

import Head from 'next/head'
import Image from 'next/image';
import type { NextPage } from 'next'

import { BsPlayCircle } from 'react-icons/bs'

import hero from "../assets/spider.png";

import { FormComponent } from '../components/Form';
import { ModalComponent } from '../components/Modals';
import { ButtonComponent } from '../components/Button';
import { TypographicComponent } from '../components/Typographic';

import * as S from "../styles/home";

const Home: NextPage = () => {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalSubscribe, setShowModalSubscribe] = useState(false);

  const handleOpenModalVideo = () => {
    setShowModalVideo(!showModalVideo);
  }

  const handleOpenModalSubscribe = () => {
    setShowModalSubscribe(!showModalSubscribe);
  }

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModalVideo ? 1 : 0,
    transform: showModalVideo ? `translateY(0%)` : `translateY(-100%)`
  })

  const animationLeft = useSpring({
    config: {
      duration: 250
    },
    opacity: showModalSubscribe ? 1 : 0,
    transform: showModalVideo ? `translateX(-100%)` : `translateX(0%)`
  })

  const handleKeyPress = useCallback(event => {
    if (event.key === 'Escape' && showModalVideo || showModalSubscribe) {
      setShowModalSubscribe(false)
      setShowModalVideo(false)
    }
  }, [setShowModalSubscribe, setShowModalVideo, showModalSubscribe, showModalVideo])

  return (
    <>
      <Head>
        <title>Home | Marvel Comics for tests!</title>
      </Head>

      <S.Main>
        <S.GroupLeft>
          <div>
            <FormComponent isSearch />
            <TypographicComponent title="For test next js" small />
            <TypographicComponent title="Marvel Api" large />

            <TypographicComponent title="Produced 100% by Marcelo Moraes. Login and have fun in the world
              of marvel" description />

            <S.Buttons>
              <ButtonComponent title="Subscribe" primary type='button' onClick={handleOpenModalSubscribe} />
              <ButtonComponent title="New Movie" type='button' onClick={handleOpenModalVideo} haveIcon icon={<BsPlayCircle />} />
            </S.Buttons>
          </div>
        </S.GroupLeft>

        <S.GroupRight>
          <div>
            <Image src={hero} width={625} height={625} alt="Spider Man" />
          </div>
        </S.GroupRight>
      </S.Main>

      {showModalVideo && (
        <ModalComponent isOpen={handleOpenModalVideo} isModalDark animation={animation} handleKeyPress={handleKeyPress}>
          <iframe width="400" height="315" src="https://www.youtube.com/embed/j-pBk19cJpI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </ModalComponent>
      )}

      {showModalSubscribe && (
        <ModalComponent isOpen={handleOpenModalSubscribe} isModalDark animation={animationLeft} handleKeyPress={handleKeyPress}>
          <S.ContentSubscribe>
            <TypographicComponent title="Envie o seu email para mais noticias!" medium />
            <FormComponent isSend />
          </S.ContentSubscribe>
        </ModalComponent>
      )}
    </>
  )
}

export default Home
