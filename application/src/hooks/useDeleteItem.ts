import { HTMLMotionProps, PanInfo } from "framer-motion";
import { useState } from "react";


const useDeleteItem = () => {
  const [deleteItem, setDeleteItem] = useState(false);
  const [selected, setSelected] = useState(false);
  return {
    layout: true,
    drag: "x",
    dragElastic: 1,
    dragConstraints: {
      left: 0,
      right: 0,
    },
    style: {
      ...(selected && {
        border: "2px dotted rgb(30,130,230)",
        backgroundColor: "rgba(30,130,230,.1)",
      }),
    },
    onDragStart: () => {
      setSelected(true);
    },
    onDragEnd: () => {
      setSelected(false);
    },
    onDrag: (event: TouchEvent, info: PanInfo) => {
      if (info.offset.x > 200) {
        setDeleteItem(true);
      }
    },
    deleted: deleteItem,
  } as HTMLMotionProps<"div"> & { deleted: boolean };
};

export default useDeleteItem;
