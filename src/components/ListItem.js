import { useListContext} from './Context.js';

function ListItem({item}) {
    const {toggleOpen, isOpen} = useListContext();

    let colorLabel = '';
    item.items.length ? colorLabel = 'blue' : colorLabel = 'black';

    return (
        <div>
            <div onClick={()=>toggleOpen(item.label)} style={{cursor: 'pointer', color: colorLabel}}>{item.label}</div>
            <ul>
                {item.items && item.items.length && isOpen(item.label) ? item.items.map((item, index) => <li key={index}><ListItem item = {item}/></li>) : ''}
            </ul>
        </div>
    );
}

export default ListItem;