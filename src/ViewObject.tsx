import './View.css';
import styled from 'styled-components';

interface ViewProps {
  content?: string;
}

export const ViewObject=(props: ViewProps)=>{

  const { content } = props; 

  const CardContentContainer= styled.div`
  position: relative;
  margin-top:4rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  padding: 0.9rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  `
    return (
              <CardContentContainer>
                <p>{content}</p>
                </CardContentContainer>
      );
}