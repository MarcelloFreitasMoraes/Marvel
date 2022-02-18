import styled from "styled-components";

export const CardDetails = styled.div`
    display: flex;

    background-color: rgba(0,0, 0, 0.5);

    padding: 2rem;
    margin: 2rem 0 4rem 0;

    border-radius: 1rem;

    .groupImage {
        img {
            border-radius: var(--border-r);

            transition: opacity 0.5s;

            &:hover {
                opacity: 0.7;
            }
        }
    }
`

export const Information = styled.div`
    margin-left: 1rem;
`