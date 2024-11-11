"use client"

import React from 'react'
import MemberCard from '../components/member-card'

const MemberSection = () => {
    return (
        <section id="member">
            <h1 className='text-white text-4xl text-center my-10 font-semibold'>Our Member</h1>
            <MemberCard />
        </section>
    )
}

export default MemberSection