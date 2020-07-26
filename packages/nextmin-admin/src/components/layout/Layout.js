import React from 'react';
import { Grid, View, Content } from '@adobe/react-spectrum';
import Navigation from './Navigation';
import Logo from './logo.png';
import PagesList from '../PagesList';

function Layout() {
  return (
    <Grid
      areas={['logo  header', 'sidebar content', 'footer  footer']}
      columns={['190px', '3fr']}
      rows={['size-700', 'auto', '30px']}
      height='100vh'
      gap='size-10'
      backgroundColor='#000'
    >
      <div
        gridArea='logo'
        style={{ background: `url(${Logo})`, backgroundColor: 'gray' }}
      />
      <View backgroundColor='celery-600' gridArea='header' />
      <View gridArea='sidebar'>
        <Navigation />
      </View>
      <View gridArea='content'>
        <Content marginX='size-225' marginY='size-225'>
          <PagesList />
        </Content>
      </View>
      <View backgroundColor='magenta-600' gridArea='footer'>
        <Grid
          areas={['fl fc fr']}
          columns={['90px', '1fr', '90px']}
          rows={['auto']}
          height='100%'
        >
          <View backgroundColor='purple-600' gridArea='fl' />
          <View backgroundColor='celery-600' gridArea='fc' />
          <View backgroundColor='purple-600' gridArea='fr' />
        </Grid>
      </View>
    </Grid>
  );
}

export default Layout;
