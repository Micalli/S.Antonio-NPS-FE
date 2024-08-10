import { create } from './create';
import { deleteChannel } from './delete';
import { edit } from './edit';
import { getAll } from './getAll';

export const channelService = {
  getAll,
  create,
  deleteChannel,
  edit,
};
