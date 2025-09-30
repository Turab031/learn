import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectedItem :(item:string)=>void
}

function ListGroup({ items, heading ,onSelectedItem}: Props) {
  const [selectedindex, setselectedindex] = useState(-1);

  const handleclick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length==0? <p>no items found</p>:null} */}
      {items.length == 0 && <p>no items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedindex(index);
              onSelectedItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
