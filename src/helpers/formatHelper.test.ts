import Hls from 'hls.js';
import { handleElementFormat } from 'helpers/formatHelper';

jest.mock("hls.js");
const mockedHls = Hls as jest.Mocked<typeof Hls>;

describe('handleElementFormat', () => {
  const dummyElement = document.createElement('video');
  const dummySource =
    'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8';

  test('should create the new Hls instance and attach media from the source', () => {
    handleElementFormat(dummyElement, dummySource);
    expect(mockedHls).toBeCalledTimes(1);
    expect(mockedHls.prototype.loadSource).toHaveBeenCalledTimes(1);
    expect(mockedHls.prototype.attachMedia).toHaveBeenCalledTimes(1);
  });
});
