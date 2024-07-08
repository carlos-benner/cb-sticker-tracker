import { useQuery, gql } from '@apollo/client';

const GET_STICKERS = gql`
  query GetStickers {
    stickers {
      id
      name
      description
    }
  }
`;

const StickerList = () => {
  const { loading, error, data } = useQuery(GET_STICKERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Sticker List</h2>
      <ul>
        {data.stickers.map((sticker: any) => (
          <li key={sticker.id}>
            <h3>{sticker.name}</h3>
            <p>{sticker.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StickerList;
