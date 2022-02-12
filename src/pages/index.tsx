import Head from 'next/head'
import Image from 'next/image';
import type { NextPage } from 'next'

import { BsPlayCircle } from 'react-icons/bs'

import hero from "assets/spider.png";

import { FormComponent } from 'components/Form';
import { ButtonComponent } from 'components/Button';
import { TypographicComponent } from 'components/Typographic';

import * as S from "styles/home";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Home | Marvel Comics for tests!</title>
      </Head>

      <S.Main>
        <S.GroupLeft>
          <div>
            <FormComponent />
            <TypographicComponent title="For test next js" small />
            <TypographicComponent title="Marvel Api" large />

            <TypographicComponent title="Produced 100% by Vinicius Italo. Login and have fun in the world
              of marvel" description />

            <S.Buttons>
              <ButtonComponent title="Subscribe" primary type='button' onClick={() => { }} />
              <ButtonComponent title="New Movie" type='button' onClick={() => { }} haveIcon icon={<BsPlayCircle />} />
            </S.Buttons>
          </div>
        </S.GroupLeft>

        <S.GroupRight>
          <div>
            <Image src={hero} width={625} height={625} alt="Spider Man" />
          </div>
        </S.GroupRight>
      </S.Main>
    </>
  )
}

export default Home
