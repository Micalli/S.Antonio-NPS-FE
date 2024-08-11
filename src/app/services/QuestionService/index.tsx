import { create } from './create';
import { deleteQuestion } from './delete';
import { edit } from './edit';
import { getAll } from './getAll';
import { rate } from './rate';


export const questionService = {
getAll,
create,
rate,
deleteQuestion,
edit
};
