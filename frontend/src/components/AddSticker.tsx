import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_STICKER = gql`
  mutation AddSticker($name: String!, $description: String!) {
    addSticker(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const AddSticker = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [addSticker] = useMutation(ADD_STICKER);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addSticker({ variables: { name, description } });
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Sticker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Sticker</button>
      </form>
    </div>
  );
};

export default AddSticker;
