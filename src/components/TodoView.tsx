import React from 'react';
import EmptyScreenTemplate from './EmptyScreenTemplate';

const TodoView: React.FC = () => {
  return (
    <EmptyScreenTemplate
      title="To Do"
      iconName="CheckList"
    />
  );
};

export default TodoView; 