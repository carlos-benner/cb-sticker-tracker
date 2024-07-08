import { Stickers } from '../DummyData/index.js'

const StickerResolver = {
  Query: {
    stickers: async (_, __, context) => Stickers,
    sticker: async (_, { stickerId }) => {
			try {
        console.log(stickerId);
        const sticker = Stickers.filter((sticker) => sticker._id === stickerId)
        if (sticker.length > 0) {
          return sticker[0];
        }
        return null;
			} catch (err) {
				console.error("Error getting sticker:", err);
				throw new Error("Error getting transaction");
			}
    }
  }
}

export default StickerResolver;