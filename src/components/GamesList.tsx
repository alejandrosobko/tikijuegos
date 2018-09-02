import * as React from 'react';
import DragAndDropSection from './drag_and_drop/DragAndDropSection';
import FindingSection from './FindingSection';
import PaintingSection from './PaintingSection';

export default (props: any) =>
  <div>
    <h2 className="games-list">Lista de juegos:</h2>
    <DragAndDropSection />
    <FindingSection />
    <PaintingSection />
  </div>
