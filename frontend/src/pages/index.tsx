import { ApolloProvider } from '@apollo/client';
import client from '../lib/ApolloClient';
import StickerList from '../components/StickerList';
import AddSticker from '../components/AddSticker';

const Home = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>Sticker Tracker</h1>
      <AddSticker />
      <StickerList />
    </div>
  </ApolloProvider>
);

export default Home;
