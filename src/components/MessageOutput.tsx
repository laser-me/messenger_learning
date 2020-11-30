import React from 'react';
import parse from 'html-react-parser';
import { ITodo } from '../interfaces';

type MessageOutputProps = {
    todos: ITodo[],
    onContext(id:number):void,


}

export const MessageOutput: React.FC<MessageOutputProps> = ({ 
  todos,
onContext }) => (
  <div className="MessageDiv">
    {todos.map((todo) => {
      if (todo.completed) {
        return todo.container.map((msg) => (
          
          <div className="Message" key={msg.id} onContextMenu={
            (event:React.MouseEvent)=>{event.preventDefault();
               msg.x= event.pageX+"px";
          msg.y=event.pageY+"px";
          onContext(msg.id)}
          }>
            <div className="MessageInline">
            {parse(msg.message)}</div>
          <div className="Date">{msg.date}</div>
          </div>
        ));
      }
    })}
  </div>
);
