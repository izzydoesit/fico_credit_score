import React, { Component } from 'react';
import Tip from './Tip';
import './TipList.css';

const tips = [
  {
    title: 'Add a new Credit Card',
    description: 'Lorem ipsum dolor amet paleo viral yuccie ramps butcher. Bicycle rights direct trade unicorn williamsburg palo santo.',
    estimatedImpact: 4,
  },
  {
    title: 'Add an Auto Loan',
    description: 'VHS master cleanse sartorial, tofu truffaut succulents prism poutine PBR&B.',
    estimatedImpact: 4,
  },
  {
    title: 'Pay bills on time for next 6 months',
    description: 'Truffaut mlkshk semiotics swag readymade cray gluten-free quinoa vape sriracha kinfolk YOLO church-key banh mi',
    estimatedImpact: 4,
  },
]
export default class TipList extends Component {

  render() {

    return (
      <div className="tiplist-wrapper">
        <ul className="tip-list">
          {tips.map((tip) => {
            return <Tip
              title={tip.title}
              description={tip.description}
              estimatedImpact={tip.estimatedImpact}
            />
          })}
        </ul>
      </div>
    )
  }
}