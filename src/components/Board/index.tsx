import React from "react"
import { IBoard } from "../../App"
import { Card } from "../Card"

type IBoardProps = {
    addCardHandler: (id: number, name: string) => void
    board: IBoard
}



export const Board: React.FC<IBoardProps> = (props) => {
    const [cardNameNew, setCardNameNew] = React.useState("")
    return (
        <div key={props.board.id} className="props-column">
        <h2>{props.board.title}</h2>
        <div className="card-list">
          {props.board.cards.map((card) => (
                <Card {...card}/>
          ))}
        </div>
        <div className="add-card">
          <input
            type="text"
            placeholder="Enter a card title"
            value={cardNameNew}
            onChange={(e) => setCardNameNew(e.target.value)}
          />
          <button onClick={() => props.addCardHandler(props.board.id, cardNameNew)}>Add Card</button>
        </div>
      </div>
    )
}