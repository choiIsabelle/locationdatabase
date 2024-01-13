import {Page, Grid, Card} from '@shopify/polaris';
import './View.css';
import styled from 'styled-components';

export const View=()=>{

  const CardContentContainer= styled.div`
    padding: 0.5rem;
    margin-top: 2rem;
  `
    return (
        <Page fullWidth>
          <Grid>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                <div className="card">
              <Card >
                <CardContentContainer>
                <p>View a summary of your online store’s sales.</p>
                </CardContentContainer>
              </Card>
              </div>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
            <div className="card">
              <Card>
              <CardContentContainer>
                <p>View a summary of your online store’s orders.</p>
              </CardContentContainer>
              </Card>
              </div>
            </Grid.Cell>
          </Grid>
        </Page>
      );
}