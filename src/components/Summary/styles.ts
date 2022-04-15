import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); //três colunas de tamanhos iguais
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block; // Aqui foi necessário colocar display block pois por padrão o strong é inline, portanto o margin-top não funciona no inline. E o modo block faz o strong se comportar como uma div, possibilitando o ajuste. 
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
           background: var(--green);
           color: #fff; 
        }
    }
`;