import styled from "styled-components";

export const Title = styled.h1`
    color: var(--light);

    span {
        color: var(--red-400);
    }
`

export const ListHero = styled.ul`
    width: 100%;

    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;

    list-style: none;

    li {
        margin-bottom: 2rem;;
    }
`