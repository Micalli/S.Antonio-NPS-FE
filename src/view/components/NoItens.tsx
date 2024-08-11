import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface NoItensPros {
itemType: string;
}

export function NoItens({ itemType }: NoItensPros) {
  return (
    <div className=" flex flex-col  items-center text-gray-500">
      <span>
        <ExclamationTriangleIcon className="w-20 h-20" />
      </span>
      <div>Não foi encontrado {itemType}</div>
    </div>
  );
}