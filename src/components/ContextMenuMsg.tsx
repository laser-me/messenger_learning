import React from 'react';
import { ITodo } from '../interfaces';

type ContextMenuMsgProps = {
    todos: ITodo[],
    onRemove(id:number):void
}

export const ContextMenuMsg: React.FC<ContextMenuMsgProps> = ({
  todos,
  onRemove
}) => (
    <div>
    {todos.map((todo) => {
      if (todo.completed) {
          todo.container.map((msg)=>{console.log(msg.showContext);
              if (msg.showContext){
                return (
                    <div className="custom_menu" style={{ top: msg.y, left: msg.x }}>
                        <div className="cm_item" onClick={onRemove.bind(null, msg.id)}>Delete chat</div>
                        <div className="cm_item">Rename chat</div>
                        
                    </div>
                )

              }
          })
          
      }

    })}

  </div>

);