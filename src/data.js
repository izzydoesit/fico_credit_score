// @flow

import type { FactorsType, TipsType } from './types';

export const FACTORS: FactorsType = [
  {
    title: 'Credit age',
    description: 'You have credit lines that are on average 10 years old.',
    direction: 'positive',
    value: 11,
  },
  {
    title: 'Total accounts',
    description: 'You have a good number of diverse credit lines open right now.',
    direction: 'positive',
    value: 10,
  },
  {
    title: 'Credit utilization',
    description: 'You are utilizing only 8% of your available credit.',
    direction: 'positive',
    value: 0.08,
  },
  {
    title: 'Payment History',
    description: 'You have paid all debts as agreed upon for the last 36 months. Great job!',
    direction: 'positive',
    value: 0,
  },
  {
    title: 'New accounts',
    description: 'You have too many (6) new accounts that are less than 12 months old.',
    direction: 'negative',
    value: -4,
  },
]

export const TIPS: TipsType = [
  {
    title: 'Add a new Credit Card',
    description: 'Adding a new line of credit can bring down your overall utilization.',
    estimatedImpact: 5,
  },
  {
    title: 'Add an Auto Loan',
    description: 'Different types of loans are more attractive to credit regulators.',
    estimatedImpact: 3,
  },
  {
    title: 'Pay bills on time for next 6 months',
    description: 'Build credit history the ol fashioned way',
    estimatedImpact: 10,
  },
]