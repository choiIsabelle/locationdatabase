import {Page, Grid, Card} from '@shopify/polaris';
import './View.css';
export const View=()=>{
    return (
        <Page fullWidth>
          <Grid>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                <div className="card">
              <Card >
                <p>View a summary of your online store’s sales.</p>
              </Card>
              </div>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
            <div className="card">
              <Card>
                <p>View a summary of your online store’s orders.</p>
              </Card>
              </div>
            </Grid.Cell>
          </Grid>
        </Page>
      );
}