import md5 from 'js-md5';
import {Dimensions} from 'react-native';

export const gravatarUrl = size => {
  const email =
    Math.random()
      .toString(36)
      .substring(7) + '@gmail.com';
  return `http://www.gravatar.com/avatar/${md5(email)}?d=identicon&s=${size}`;
};

export const IMAGE_SIZE = 64;
const EXTRA_ROWS = 5;

export const calculateNumberOfImages = ({offsetX = 0, offsetY = 0} = {}) => {
  const width = Dimensions.get('window').width + offsetX;
  const height = Dimensions.get('window').height + offsetY;

  const imagesPerRow = Math.floor(width / IMAGE_SIZE);
  const imageRows = Math.floor(height / IMAGE_SIZE) + EXTRA_ROWS;

  return imagesPerRow * imageRows;
};
