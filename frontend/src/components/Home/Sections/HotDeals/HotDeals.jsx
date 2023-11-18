import React from 'react'

import { Link } from 'react-router-dom'

import Deals from './Deals'

import ArrowRightIcon from '../../../../assets/Icons/ArrowRightIcon'
import Heading from '../../../displayLayouts/CategorySection/Heading'

const HotDeals = () => {

  return (
    <section className='flex flex-col section-margin lg:pb-8'>
      <Heading heading="Hot Deals" link='/deals' />

      <Deals />
    </section >
  )
}

export default HotDeals