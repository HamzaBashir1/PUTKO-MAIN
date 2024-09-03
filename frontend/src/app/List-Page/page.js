import React from 'react'
import Title from './component/Title'
import CardSection from '../components/CardSection'
import Discount from './component/Discount'
import Section from './component/Section'
import Pagination from './component/Pagination'
import Filter from './component/Filter'
import CommonSection from './component/CommonSection'
import Email from './component/Email'


const Page = () => {
  return (
    <div className='bg-[#F3F4F6]'>
      <Title/>
      <CardSection />
      <Discount />
      <Section />
      <CardSection />
      <Pagination/>
      <Filter/>
      <CommonSection/>
      <Email/>
    </div>
  )
}

export default Page
