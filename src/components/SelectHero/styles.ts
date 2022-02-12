import Image from "next/image";
import styled from "styled-components";

export const Content = styled.li`
    background-color: rgba(255, 255, 255, 0.1);

    padding: 1rem;

    max-width: 350px;
    width: 100%;

    border-radius: var(--border-r);
`

export const Container = styled.div``

export const Thumbnail = styled(Image)`
    border-radius: var(--border-r);
`

export const Info = styled.div`
    h3 {
        color: var(--light);

        font-weight: 900;

        margin: 1rem 0;
    }

    p {
        color: var(--light);

        height: 80px;
    }
`

export const FooterInfo = styled.div`
    margin-top: 1rem;

    display: flex;
    justify-content: space-between;

    span {
        color: var(--red-400);

        font-weight: 600;
    }
`;

export const Call = styled.div``