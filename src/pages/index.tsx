import type { NextPage } from 'next'
import { BsPlayCircle } from 'react-icons/bs'
import Head from 'next/head'
import Image from 'next/image';

import hero from "assets/spider.png";

import * as S from "styles/home";
import { FormComponent } from 'components/Form';
import { ButtonComponent } from 'components/Button';

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
            <h4>For test next js</h4>
            <h1>Marvel Api</h1>
            <p>
              Produced 100% by Vinicius Italo. Login and have fun in the world
              of marvel
            </p>
            <S.Buttons>
              <ButtonComponent title="Subscribe" primary type='button' onClick={() => {}} />
              <ButtonComponent title="New Movie" type='button' onClick={() => {}} haveIcon icon={<BsPlayCircle />}/>
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
