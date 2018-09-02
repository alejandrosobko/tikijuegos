import * as React from 'react';

export default (props: any) => {
  const provided = props.provided;
  const innerRef = props.innerRef;
  const auxProps = props;
  delete auxProps[provided];
  delete auxProps[innerRef];

  return (
    <div className="source" ref={innerRef} {...provided.droppableProps} {...auxProps} />
  )
}
