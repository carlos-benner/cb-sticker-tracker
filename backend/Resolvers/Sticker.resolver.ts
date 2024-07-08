import { Stickers } from '../DummyData/index.js'

const StickerResolver = {
    Query: {
        stickers: () => Stickers
    }
}

export default StickerResolver;