import React, { Component } from 'react';
import Factor from './Factor';
import './FactorList.css';

const factors = [
  {
    title: 'Credit age',
    description: 'Lorem ipsum dolor amet tumeric kickstarter before they sold out single-origin coffee coloring book farm-to-table synth sartorial jianbing trust fund bespoke DIY.',
    direction: 'positive',
    value: 11,
  },
  {
    title: 'Total accounts',
    description: 'Hell of unicorn locavore polaroid brunch. Williamsburg tbh waistcoat enamel pin la croix readymade farm-to-table pug vice lomo tote bag post-ironic everyday carry.',
    direction: 'positive',
    value: 10,
  },
  {
    title: 'Credit utilization',
    description: 'Cold-pressed leggings fam listicle health goth franzen. Chartreuse tousled raw denim, pok pok neutra ennui af narwhal cred stumptown. ',
    direction: 'positive',
    value: 0.08,
  },
  {
    title: 'Payment History',
    description: 'Art party sriracha franzen artisan twee chicharrones kinfolk celiac palo santo poutine 3 wolf moon venmo.',
    direction: 'positive',
    value: 0,
  },
  {
    title: 'New accounts',
    description: 'Microdosing PBR&B pabst hoodie sustainable 3 wolf moon. Iceland freegan palo santo austin four loko lyft. ',
    direction: 'negative',
    value: 7,
  },
]
export default class Factors extends Component {

  render() {

    return (
      <div className="factors-wrapper">
        <h2>CREDIT FACTORS</h2>

        <ul className="factors-list">
          {factors.map((factor) => {
            return <Factor
              factor={factor}
            />
          })}

        </ul>
      </div>
    )
  }
}
