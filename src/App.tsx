import React from 'react';
import { Board } from './components/Board';

export interface ICard {
  id: number;
  title: string;
}

export interface IBoard {
  id: number;
  title: string;
  cards: ICard[];
}

const KanbanBoard: React.FC = () => {
  const [boards, setBoards] = React.useState<IBoard[]>([
    { id: 1, title: 'Todo', cards: [] },
    { id: 2, title: 'In Progress', cards: [] },
    { id: 3, title: 'Testing', cards: [] },
    {id: 4, title: 'Done', cards: []},
  ]);

  const addCard = (boardId: number, title: string) => {
    const newCard: ICard = {
      id: Date.now(),
      title: title,
    };

    const updatedBoards = boards.map((board) => {
      if (board.id === boardId) {
        return {
          ...board,
          cards: [...board.cards, newCard],
        };
      }
      return board;
    });

    setBoards(updatedBoards);
  };

  return (
    <div className="kanban-board">
      {boards.map((board) => (
        <Board addCardHandler={addCard} board={board}/>
      ))}
    </div>
  );
};

export default KanbanBoard;
