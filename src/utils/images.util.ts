import type { ImportMetaImg } from '../types/images.type';

export const getImagePath = (image: string | ImportMetaImg): string => {
    if (typeof image === 'string') return image;
    return image.toString();
};