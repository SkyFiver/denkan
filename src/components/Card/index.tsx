import React from "react";
import { ICard } from "../../App";

export const Card: React.FC<ICard> = (props) => {
    return (
        <div key={props.id} className="props">
        {props.title}
      </div>
    )
}