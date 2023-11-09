import { useListContext } from "./Context";

function ToJson({data}) {
    const { isOpen } = useListContext();

    function openList(item) {
      return (
        isOpen(item.label) ? {...item, items: item.items.map(subItem => openList(subItem))} : {label: item.label, items: []}
      );
    };
  
    const newData = data.root.map(item => openList(item));
    return (
        <pre>{JSON.stringify(newData, '', 2)}</pre>
    );
}

export default ToJson;